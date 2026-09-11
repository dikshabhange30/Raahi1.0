from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.core.security import get_current_user
from app.database import get_db
from app.models import User
from app.schemas import UserProfileUpdate


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

@router.patch("/me")
def update_my_profile(
    profile_data: UserProfileUpdate,
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    if profile_data.full_name is not None:
        current_user.full_name = profile_data.full_name

    if profile_data.gender is not None:
        current_user.gender = profile_data.gender

    if profile_data.city is not None:
        current_user.city = profile_data.city

    if profile_data.profession is not None:
        current_user.profession = profile_data.profession

    if profile_data.bio is not None:
        current_user.bio = profile_data.bio

    if profile_data.profile_image is not None:
        current_user.profile_image = profile_data.profile_image

    if profile_data.preferred_contact is not None:
        current_user.preferred_contact = profile_data.preferred_contact

    db.commit()
    db.refresh(current_user)

    return {
        "message": "Profile updated successfully",
        "user": {
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
    }