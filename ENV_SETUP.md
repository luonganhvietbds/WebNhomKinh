# Environment Variables Configuration

## Gemini API Keys (Vercel)

When deploying to Vercel, add these environment variables:

### API Key Rotation (1-20 keys)
```
GEMINI_API_KEY_1=your_api_key_1
GEMINI_API_KEY_2=your_api_key_2
GEMINI_API_KEY_3=your_api_key_3
...
GEMINI_API_KEY_20=your_api_key_20
```

### How Key Rotation Works
1. System loads all available keys (GEMINI_API_KEY_1 to GEMINI_API_KEY_20)
2. Uses round-robin rotation
3. On rate limit (429) or failure, automatically switches to next key
4. Failed keys are temporarily marked and reset after 60 seconds
5. Falls back to single `GEMINI_API_KEY` if no numbered keys found

### Local Development
Create `.env.local` file:
```bash
GEMINI_API_KEY_1=your_key_here
```

## Future: Firebase Configuration
```
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=
```
