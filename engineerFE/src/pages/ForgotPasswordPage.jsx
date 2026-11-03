import { useState } from 'react'
import { ArrowRight, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'
import { AUTH_API_URL } from '../auth'

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [sent, setSent] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')
  const [submitting, setSubmitting] = useState(false)

  async function handleSubmit(event) {
    event.preventDefault()
    setError('')
    setSubmitting(true)
    try {
      const response = await fetch(`${AUTH_API_URL}/forgot-password`, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      const result = await response.json()
      if (!response.ok) throw new Error(result.message || 'Unable to request a password reset.')
      setSuccessMessage(result.message)
      setSent(true)
    } catch (requestError) {
      setError(requestError.message || 'Unable to request a password reset.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="page-wrapper auth-page-wrapper">
      <section className="auth-card" aria-labelledby="forgot-password-title">
        <div className="auth-header">
          <img src="/logo-hexagon.png" alt="engineers logo" className="login-brand-logo" />
          <h1 id="forgot-password-title" className="login-title">Forgot your password?</h1>
          <p className="login-subtitle">Enter the email address on your account and we’ll send you a reset link.</p>
        </div>
        {sent ? (
          <div className="auth-result" role="status">
            <p>{successMessage}</p>
            <Link to="/login" className="btn-primary auth-submit-btn">Return to sign in</Link>
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
              <span>{submitting ? 'Sending…' : 'Send reset link'}</span>
              {!submitting && <ArrowRight size={16} />}
            </button>
          </form>
        )}
        <p className="auth-switch"><Link to="/login" className="register-link">Back to sign in</Link></p>
      </section>
    </div>
  )
}
