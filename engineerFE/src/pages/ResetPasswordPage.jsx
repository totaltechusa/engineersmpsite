import { useState } from 'react'
import { ArrowRight, Eye, EyeOff, Lock } from 'lucide-react'
import { Link, useSearchParams } from 'react-router-dom'
import { AUTH_API_URL } from '../auth'
import { getPasswordChecks, isPasswordValid } from '../passwordValidation'

export default function ResetPasswordPage() {
  const [searchParams] = useSearchParams()
  const token = searchParams.get('token')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
  const [error, setError] = useState('')
  const [complete, setComplete] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const checks = getPasswordChecks(password)

  async function handleSubmit(event) {
    event.preventDefault()
    setError('')
    if (!isPasswordValid(password)) {
      setError('Please fulfill all password requirements below.')
      return
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match.')
      return
    }
    setSubmitting(true)
    try {
      const response = await fetch(`${AUTH_API_URL}/reset-password`, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ token, password }),
      })
      const result = await response.json()
      if (!response.ok) throw new Error(result.message || 'Unable to reset your password.')
      setComplete(true)
    } catch (resetError) {
      setError(resetError.message || 'Unable to reset your password.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="page-wrapper auth-page-wrapper">
      <section className="auth-card" aria-labelledby="reset-password-title" style={{ maxWidth: '480px' }}>
        <div className="auth-header">
          <img src="/logo-hexagon.png" alt="engineers logo" className="login-brand-logo" />
          <h1 id="reset-password-title" className="login-title">Reset your password</h1>
          <p className="login-subtitle">Choose a new strong password for your account.</p>
        </div>
        {complete ? (
          <div className="auth-result" role="status">
            <p>Your password has been reset successfully. Sign in with your new password.</p>
            <Link to="/login" className="btn-primary auth-submit-btn">Go to sign in</Link>
          </div>
        ) : !token ? (
          <div className="auth-result" role="alert">
            <p>This reset link is missing its token or is invalid.</p>
            <Link to="/forgot-password" className="btn-primary auth-submit-btn">Request another link</Link>
          </div>
        ) : (
          <form className="auth-form" onSubmit={handleSubmit}>
            <label className="auth-field">
              <span>New password</span>
              <span className="input-with-icon" style={{ position: 'relative' }}>
                <Lock size={16} className="field-icon" />
                <input
                  className="form-input"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="new-password"
                  minLength={8}
                  maxLength={128}
                  required
                  style={{ paddingRight: '2.5rem' }}
                  value={password}
                  onChange={event => setPassword(event.target.value)}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                  style={{
                    position: 'absolute',
                    right: '0.75rem',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    color: '#6b7280',
                    display: 'flex',
                    alignItems: 'center',
                    padding: '0.25rem',
                  }}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </span>
            </label>

            {/* Checklist */}
            <div style={{
              background: '#f9fafb',
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              padding: '0.85rem 1rem',
              fontSize: '0.82rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.35rem',
              marginBottom: '0.5rem',
            }}>
              <span style={{ fontWeight: 600, color: '#374151' }}>Password Requirements:</span>
              {Object.entries(checks).map(([label, passed]) => (
                <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: passed ? '#059669' : '#9ca3af' }}>
                  <span>{passed ? '✓' : '○'}</span>
                  <span>{label}</span>
                </div>
              ))}
            </div>

            <label className="auth-field">
              <span>Confirm new password</span>
              <span className="input-with-icon" style={{ position: 'relative' }}>
                <Lock size={16} className="field-icon" />
                <input
                  className="form-input"
                  type={showConfirm ? 'text' : 'password'}
                  autoComplete="new-password"
                  required
                  style={{ paddingRight: '2.5rem' }}
                  value={confirmPassword}
                  onChange={event => setConfirmPassword(event.target.value)}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirm(!showConfirm)}
                  aria-label={showConfirm ? 'Hide password' : 'Show password'}
                  style={{
                    position: 'absolute',
                    right: '0.75rem',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    color: '#6b7280',
                    display: 'flex',
                    alignItems: 'center',
                    padding: '0.25rem',
                  }}
                >
                  {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </span>
            </label>

            {error && <p className="auth-notice auth-notice-error" role="alert">{error}</p>}

            <button type="submit" className="btn-primary auth-submit-btn" disabled={submitting}>
              <span>{submitting ? 'Updating…' : 'Update password'}</span>
              {!submitting && <ArrowRight size={16} />}
            </button>
          </form>
        )}
      </section>
    </div>
  )
}
