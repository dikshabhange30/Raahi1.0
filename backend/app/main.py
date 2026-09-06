from fastapi import FastAPI

from app.core.config import settings
from app.database import Base, engine
from app import models
from app.routers import auth


app = FastAPI(
    title=settings.app_name,
    description="Backend API for the Raahi community platform",
    version=settings.app_version,
)


Base.metadata.create_all(bind=engine)


app.include_router(auth.router)


@app.get("/health")
def health_check():
    return {"status": "healthy"}