from datetime import datetime, timedelta

from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.core.security import (
    generate_otp,
    hash_otp,
    hash_password,
    verify_otp,
    create_access_token,
    verify_password
)
from app.services.email import send_verification_email

from app.database import get_db
from app.models import EmailVerification, User
from app.schemas import EmailOTPVerify, LoginRequest, UserCreate


router = APIRouter(
    prefix="/auth",
    tags=["Authentication"]
)


@router.post("/register")
def register(
    user_data: UserCreate,
    db: Session = Depends(get_db)
):
    existing_username = db.query(User).filter(
        User.username == user_data.username
    ).first()

    if existing_username:
        raise HTTPException(
            status_code=400,
            detail="Username already exists"
        )

    existing_email = db.query(User).filter(
        User.email == user_data.email
    ).first()

    if existing_email:
        raise HTTPException(
            status_code=400,
            detail="Email already exists"
        )

    password_hash = hash_password(user_data.password)

    new_user = User(
        username=user_data.username,
        email=user_data.email,
        password_hash=password_hash
    )

    db.add(new_user)
    db.commit()
    db.refresh(new_user)

    otp = generate_otp()
    otp_hash = hash_otp(otp)

    verification = EmailVerification(
        user_id=new_user.user_id,
        otp_hash=otp_hash,
        expires_at=datetime.utcnow() + timedelta(minutes=10)
    )

    db.add(verification)
    db.commit()

    send_verification_email(
    recipient_email=new_user.email,
    otp=otp
)

    return {
        "message": "Registration successful. Verify your email.",
        "user_id": new_user.user_id,
        "email": new_user.email
}


@router.post("/verify-email")
def verify_email(
    verification_data: EmailOTPVerify,
    db: Session = Depends(get_db)
):
    user = db.query(User).filter(
        User.email == verification_data.email
    ).first()

    if not user:
        raise HTTPException(
            status_code=404,
            detail="User not found"
        )

    verification = db.query(EmailVerification).filter(
        EmailVerification.user_id == user.user_id,
        EmailVerification.is_used == False
    ).order_by(
        EmailVerification.verification_id.desc()
    ).first()

    if not verification:
        raise HTTPException(
            status_code=400,
            detail="No active verification code found"
        )

    if verification.expires_at < datetime.utcnow():
        raise HTTPException(
            status_code=400,
            detail="OTP has expired"
        )

    if not verify_otp(
        verification_data.otp,
        verification.otp_hash
    ):
        raise HTTPException(
            status_code=400,
            detail="Invalid OTP"
        )

    verification.is_used = True
    user.is_email_verified = True

    db.commit()

    return {
        "message": "Email verified successfully"
    }


@router.post("/login")
def login(
    login_data: LoginRequest,
    db: Session = Depends(get_db)
):
    user = db.query(User).filter(
        (User.username == login_data.username_or_email) |
        (User.email == login_data.username_or_email)
    ).first()

    if not user:
        raise HTTPException(
            status_code=401,
            detail="Invalid username/email or password"
        )

    if not verify_password(
        login_data.password,
        user.password_hash
    ):
        raise HTTPException(
            status_code=401,
            detail="Invalid username/email or password"
        )

    if not user.is_email_verified:
        raise HTTPException(
            status_code=403,
            detail="Please verify your email before logging in"
        )

    access_token = create_access_token(user.user_id)

    return {
        "message": "Login successful",
        "access_token": access_token,
        "token_type": "bearer"
    }