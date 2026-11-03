import { useState } from 'react'
import { ArrowRight, Mail } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { AUTH_API_URL } from '../auth'

export default function ResendVerificationPage() {
  const location = useLocation()
  const [email, setEmail] = useState(location.state?.email || '')
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')
  const [submitting, setSubmitting] = useState(false)

  async function handleSubmit(event) {
    event.preventDefault()
    setError('')
    setSubmitting(true)
    try {
      const response = await fetch(`${AUTH_API_URL}/resend-verification`, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      const result = await response.json()
      if (!response.ok) throw new Error(result.message || 'Unable to request a verification email.')
      setSent(true)
    } catch (requestError) {
      setError(requestError.message || 'Unable to request a verification email.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="page-wrapper auth-page-wrapper">
      <section className="auth-card" aria-labelledby="resend-verification-title">
        <div className="auth-header">
          <img src="/logo-hexagon.png" alt="engineers logo" className="login-brand-logo" />
          <h1 id="resend-verification-title" className="login-title">Resend verification email</h1>
          <p className="login-subtitle">We’ll send a new verification link if your account still needs verification.</p>
        </div>
        {sent ? (
          <div className="auth-result" role="status">
            <p>If that account needs email verification, a verification link has been sent.</p>
          </div>
        ) : (
          <form className="auth-form" onSubmit={handleSubmit}>
            <label className="auth-field">
              <span>Email address</span>
              <span className="input-with-icon">
                <Mail size={16} className="field-icon" />
                <input className="form-input" type="email" autoComplete="email" required value={email} onChange={event => setEmail(event.target.value)} placeholder="name@company.com" />
              </span>
            </label>
            {error && <p className="auth-notice auth-notice-error" role="alert">{error}</p>}
            <button type="submit" className="btn-primary auth-submit-btn" disabled={submitting}>
              <span>{submitting ? 'Sending…' : 'Send verification link'}</span>
              {!submitting && <ArrowRight size={16} />}
            </button>
          </form>
        )}
        <p className="auth-switch"><Link to="/login" className="register-link">Back to sign in</Link></p>
      </section>
    </div>
  )
}
