import pickle
import base64
from email.mime.text import MIMEText
from googleapiclient.discovery import build
from google.auth.transport.requests import Request
import os

TOKEN_PATH = "token.pkl"
TO_EMAIL = "naikm.sam@gmail.com"  # Change as needed
FROM_EMAIL = "samarth.naik024@gmail.com"  # Change as needed
SUBJECT = "Gmail API Email Test"
BODY = "Hello from Gmail API!"

def main():
    # Load credentials
    if not os.path.exists(TOKEN_PATH):
        print(f"Token file not found: {TOKEN_PATH}")
        return
    with open(TOKEN_PATH, "rb") as token_file:
        creds = pickle.load(token_file)

    # Build Gmail service
    service = build("gmail", "v1", credentials=creds)

    # Compose the message
    message = MIMEText(BODY)
    message["to"] = TO_EMAIL
    message["from"] = FROM_EMAIL
    message["subject"] = SUBJECT

    # Encode message
    raw_message = base64.urlsafe_b64encode(message.as_bytes()).decode()
    body = {"raw": raw_message}

    # Send the email with retry logic
    import time
    attempt = 1
    import traceback
    while True:
        try:
            sent = service.users().messages().send(userId="me", body=body).execute()
            print(f"✅ Email sent! ID: {sent['id']} (after {attempt} attempt(s))")
            break
        except Exception as e:
            print(f"❌ Failed to send email (attempt {attempt}):", e)
            traceback.print_exc()
            attempt += 1
            time.sleep(3)  # Wait 3 seconds before retrying

if __name__ == "__main__":
    main()
