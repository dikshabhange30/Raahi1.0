from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database import get_db
from app.models import User
from app.schemas import UserCreate
from app.core.security import hash_password


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

    return {
        "message": "User registered successfully",
        "user_id": new_user.user_id,
        "username": new_user.username,
        "email": new_user.email
    }