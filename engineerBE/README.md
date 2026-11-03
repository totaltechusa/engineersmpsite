# Engineer API

## Setup

Configure `.env`:

```env
MONGODB_URI=mongodb://127.0.0.1:27017/engineer
FRONTEND_URL=http://localhost:5173
FRONTEND_ORIGINS=http://localhost:5174
JWT_SECRET=replace-with-a-random-secret-at-least-32-characters-long
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=your-smtp-username
SMTP_PASSWORD=your-smtp-password
SMTP_FROM="Engineers <no-reply@example.com>"
PORT=3000
```

`FRONTEND_URL` is the frontend base URL used to create email verification links. For MongoDB Atlas, use the complete connection URI from **Connect → Drivers**. Start the server with `npm start`; it connects to MongoDB before listening.
`FRONTEND_ORIGINS` is an optional comma-separated allowlist of additional browser origins for CORS. In development, the API allows the local Vite origins on ports 5173 and 5174. The Vite dev server proxies `/api/v1` to `http://localhost:3000` by default; set `VITE_BACKEND_URL` if the backend listens elsewhere.

Use a unique, unpredictable `JWT_SECRET` of at least 32 characters and keep all SMTP credentials server-side. SMTP port `465` uses TLS; other configured ports use STARTTLS through Nodemailer.

## Signup

`POST /api/v1/auth/signup` creates a user document in MongoDB's `users` collection.Identity for social-login integrations:

```json
{
  "fullName": "Example User",
  "email": "user@example.com",
  "password": "use-a-strong-password",
  "gender": "female",
  "serviceList": ["Inspection"],
  "skillsList": ["Welding"]
}
```

Signup returns `201` with the public user profile and verification expiry. The one-time link is emailed to the user and expires after 24 hours. No login/JWT token is issued before verification.

The frontend verification page submits the link's `token` to `POST /api/v1/auth/verify-email`:

```json
{ "token": "one-time-token-from-the-link" }
```

The API marks the account verified, changes its `status` from `pending` to `active`, and consumes the one-time token. Invalid or expired tokens return `400`.

If delivery fails, `POST /api/v1/auth/resend-verification` accepts `{ "email": "user@example.com" }` and resends a link for a pending account. The response does not disclose whether the address has an account.

## Sign in and account management

- `POST /api/v1/auth/login` accepts `{ "email", "password" }`. Verified, active users receive a short-lived bearer token.
- `POST /api/v1/auth/resend-verification` accepts `{ "email" }` and resends a verification link for pending accounts.
- `POST /api/v1/auth/forgot-password` accepts `{ "email" }` and emails a one-time reset link. It always responds with HTTP `200` and `{ "success": true, "message": "If an account exists for that email, a password reset link has been sent." }` whether or not an account exists, to prevent account enumeration.
- `POST /api/v1/auth/reset-password` accepts `{ "token", "password" }`, consumes the one-time token, and invalidates previous sessions.
- Authenticated requests send `Authorization: Bearer <token>`.
- `GET /api/v1/auth/me` returns the signed-in user's profile; `PATCH /api/v1/auth/me` updates `fullName` and `gender`.
- `POST /api/v1/auth/change-password` accepts `{ "currentPassword", "newPassword" }`; the response includes a replacement token.
- `POST /api/v1/auth/logout` invalidates the current account's existing tokens.

The web screens are `/forgot-password`, `/reset-password`, `/change-password`, and `/profile`.

## Run and test

```sh
npm install
npm start
npm test
```
