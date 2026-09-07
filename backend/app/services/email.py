import resend

from app.core.config import settings


resend.api_key = settings.resend_api_key


def send_verification_email(
    recipient_email: str,
    otp: str
):
    response = resend.Emails.send({
        "from": settings.email_from,
        "to": [recipient_email],
        "subject": "Verify your Raahi email",
        "html": f"""
            <h2>Welcome to Raahi!</h2>
            <p>Your email verification code is:</p>
            <h1>{otp}</h1>
            <p>This code will expire in 10 minutes.</p>
            <p>If you did not create a Raahi account, you can ignore this email.</p>
        """
    })

    print(response)

