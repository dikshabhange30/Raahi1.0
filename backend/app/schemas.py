from pydantic import BaseModel, EmailStr


class UserCreate(BaseModel):
    username: str
    email: EmailStr
    password: str

class EmailOTPVerify(BaseModel):
    email: EmailStr
    otp: str