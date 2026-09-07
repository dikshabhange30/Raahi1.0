
from argon2 import PasswordHasher

import secrets


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