from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.core.security import get_current_user
from app.database import get_db
from app.models import User


router = APIRouter(
    prefix="/users",
    tags=["Users"]
)


@router.get("/me")
def get_my_profile(
    current_user: User = Depends(get_current_user)
):
    return {
        "user_id": current_user.user_id,
        "username": current_user.username,
        "email": current_user.email,
        "full_name": current_user.full_name,
        "gender": current_user.gender,
        "city": current_user.city,
        "profession": current_user.profession,
        "bio": current_user.bio,
        "profile_image": current_user.profile_image,
        "preferred_contact": current_user.preferred_contact
    }