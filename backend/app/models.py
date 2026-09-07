
from app.database import Base
from datetime import datetime

from sqlalchemy import Boolean, Column, DateTime, ForeignKey, Integer, String


class User(Base):
    __tablename__ = "users"

    user_id = Column(Integer, primary_key=True, index=True)
    username = Column(String, unique=True, nullable=False, index=True)
    email = Column(String, unique=True, nullable=False, index=True)
    password_hash = Column(String, nullable=False)
    is_email_verified = Column(Boolean, default=False, nullable=False)
    is_active = Column(Boolean, default=True, nullable=False)
    is_admin = Column(Boolean, default=False, nullable=False)

    full_name = Column(String, nullable=True)
    gender = Column(String, nullable=True)
    city = Column(String, nullable=True)
    profession = Column(String, nullable=True)
    bio = Column(String, nullable=True)
    profile_image = Column(String, nullable=True)
    preferred_contact = Column(String, nullable=True)


class EmailVerification(Base):
    __tablename__ = "email_verifications"

    verification_id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.user_id"), nullable=False)
    otp_hash = Column(String, nullable=False)
    expires_at = Column(DateTime, nullable=False)
    is_used = Column(Boolean, default=False, nullable=False)