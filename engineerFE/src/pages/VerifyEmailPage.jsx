import { useEffect, useRef, useState } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { AUTH_API_URL } from '../auth'

export default function VerifyEmailPage() {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const token = searchParams.get('token')
  const verificationRequest = useRef(null)
  const [error, setError] = useState('')

  useEffect(() => {
    if (!token) return

    if (!verificationRequest.current) {
      verificationRequest.current = fetch(`${AUTH_API_URL}/verify-email`, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ token }),
      }).then(async response => {
        const result = await response.json()
        if (!response.ok) {
          throw new Error(result.message || 'This verification link is invalid or expired.')
        }
        return result
      })
    }

    verificationRequest.current
      .then(result => {
        if (result.user?.emailVerified !== true || result.user?.status !== 'active') {
          throw new Error('Email verification did not activate your account. Please contact support.')
        }
        navigate('/login', { replace: true, state: { emailVerified: true } })
      })
      .catch(verificationError => {
        setError(verificationError.message || 'Unable to verify your email. Please try again.')
      })
  }, [navigate, token])

  return (
    <div className="page-wrapper auth-page-wrapper">
      <section className="auth-card auth-result" aria-live="polite">
        <img src="/logo-hexagon.png" alt="engineers logo" className="login-brand-logo" />
        {error || !token ? (
          <>
            <h1>Email verification failed</h1>
            <p>{error || 'This verification link is missing its token.'}</p>
            <Link to="/signup" className="btn-primary auth-submit-btn">Create an account</Link>
          </>
        ) : (
          <>
            <h1>Verifying your email…</h1>
            <p>Please wait while we confirm your email address.</p>
          </>
        )}
      </section>
    </div>
  )
}
