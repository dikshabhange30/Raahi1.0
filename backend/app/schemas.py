from pydantic import BaseModel, EmailStr
from typing import Optional


class UserCreate(BaseModel):
    username: str
    email: EmailStr
    password: str

class EmailOTPVerify(BaseModel):
    email: EmailStr
    otp: str

class LoginRequest(BaseModel):
    username_or_email: str
    password: str

class UserProfileUpdate(BaseModel):
    full_name: Optional[str] = None
    gender: Optional[str] = None
    city: Optional[str] = None
    profession: Optional[str] = None
    bio: Optional[str] = None
    profile_image: Optional[str] = None
    preferred_contact: Optional[str] = None