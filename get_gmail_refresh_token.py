from google_auth_oauthlib.flow import Flow
import pickle

SCOPES = ['https://www.googleapis.com/auth/gmail.send']

# Load from client secrets
flow = Flow.from_client_secrets_file(
    'credentials.json',
    scopes=SCOPES,
    redirect_uri='urn:ietf:wg:oauth:2.0:oob'  # ✅ required for manual copy-paste flow
)


# Step 1: Get the auth URL with access_type='offline' to get refresh token
auth_url, _ = flow.authorization_url(access_type='offline', prompt='consent')
print(f'🔗 Open this URL in your browser:\n{auth_url}')

# Step 2: Paste the code from browser
code = input('📥 Paste the code here: ')
flow.fetch_token(code=code)

# Step 3: Save credentials
with open('token.pkl', 'wb') as f:
    pickle.dump(flow.credentials, f)

print('✅ Done! Refresh token saved.')
