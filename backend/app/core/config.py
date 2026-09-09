from pydantic_settings import BaseSettings


#  .env → Settings → Python

class Settings(BaseSettings):
    app_name: str
    app_version: str
    database_url: str

    class Config:
        env_file = ".env"

    resend_api_key: str
    email_from: str

    jwt_secret_key: str
    jwt_algorithm: str = "HS256"

settings = Settings()