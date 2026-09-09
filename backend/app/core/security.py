
from argon2 import PasswordHasher
from jose import jwt
from datetime import datetime, timedelta, timezone

import secrets
from app.core.config import settings


password_hasher = PasswordHasher()


def hash_password(password: str) -> str:
    return password_hasher.hash(password)


def verify_password(password: str, password_hash: str) -> bool:
    try:
        password_hasher.verify(password_hash, password)
        return True
    except Exception:
        return False


def generate_otp() -> str:
    return f"{secrets.randbelow(1000000):06d}"

def hash_otp(otp: str) -> str:
    return password_hasher.hash(otp)


def verify_otp(otp: str, otp_hash: str) -> bool:
    try:
        password_hasher.verify(otp_hash, otp)
        return True
    except Exception:
        return False

def create_access_token(user_id: int) -> str:
    expire = datetime.now(timezone.utc) + timedelta(minutes=30)

    payload = {
        "sub": str(user_id),
        "exp": expire
    }

    return jwt.encode(
        payload,
        settings.jwt_secret_key,
        algorithm=settings.jwt_algorithm
    )