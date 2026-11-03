import { useState } from 'react'
import { ArrowRight, Eye, EyeOff, Lock } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import { authRequest, clearAuthToken, getAuthToken, saveAuthToken } from '../auth'
import { getPasswordChecks, isPasswordValid } from '../passwordValidation'

export default function ChangePasswordPage() {
  const navigate = useNavigate()
  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const [submitting, setSubmitting] = useState(false)

  // Password rule checks
  const checks = getPasswordChecks(newPassword)

  async function handleSubmit(event) {
    event.preventDefault()
    setError('')
    if (!isPasswordValid(newPassword)) {
      setError('Please fulfill all password requirements below.')
      return
    }
    if (newPassword !== confirmPassword) {
      setError('New passwords do not match.')
      return
    }
    if (newPassword === currentPassword) {
      setError('New password must be different from current password.')
      return
    }

    setSubmitting(true)
    try {
      const result = await authRequest('/change-password', {
        method: 'POST',
        body: JSON.stringify({ currentPassword, newPassword }),
      })
      const token = result.token || result.data?.token
      if (token) {
        saveAuthToken(token)
      }
      navigate('/profile', { replace: true, state: { passwordChanged: true } })
    } catch (changeError) {
      setError(changeError.message || 'Unable to change your password.')
      if (!getAuthToken()) navigate('/login', { replace: true })
    } finally {
      setSubmitting(false)
    }
  }

  async function signOut() {
    try {
      await authRequest('/logout', { method: 'POST' })
    } catch (logoutError) {
      console.error('Unable to invalidate session', logoutError)
    }
    clearAuthToken()
    navigate('/login', { replace: true })
  }

  return (
    <div className="page-wrapper auth-page-wrapper">
      <section className="auth-card" aria-labelledby="change-password-title" style={{ maxWidth: '480px' }}>
        <div className="auth-header">
          <img src="/logo-hexagon.png" alt="engineers logo" className="login-brand-logo" />
          <h1 id="change-password-title" className="login-title">Change Password</h1>
          <p className="login-subtitle">Update your credentials to keep your account safe.</p>
        </div>
        {!getAuthToken() ? (
          <div className="auth-result">
            <p>Sign in to change your password.</p>
            <Link to="/login" className="btn-primary auth-submit-btn">Go to sign in</Link>
          </div>
        ) : (
          <form className="auth-form" onSubmit={handleSubmit}>
            <PasswordField
              label="Current Password"
              value={currentPassword}
              onChange={setCurrentPassword}
              autoComplete="current-password"
            />
            
            <PasswordField
              label="New Password"
              value={newPassword}
              onChange={setNewPassword}
              autoComplete="new-password"
            />

            {/* Live Requirement Checklist */}
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

            <PasswordField
              label="Confirm New Password"
              value={confirmPassword}
              onChange={setConfirmPassword}
              autoComplete="new-password"
            />

            {error && <p className="auth-notice auth-notice-error" role="alert">{error}</p>}

            <button type="submit" className="btn-primary auth-submit-btn" disabled={submitting}>
              <span>{submitting ? 'Updating…' : 'Update password'}</span>
              {!submitting && <ArrowRight size={16} />}
            </button>
            <button type="button" className="auth-text-button" onClick={signOut}>Sign out</button>
          </form>
        )}
        <p className="auth-switch"><Link to="/profile" className="register-link">← Back to profile</Link></p>
      </section>
    </div>
  )
}

function PasswordField({ label, value, onChange, autoComplete }) {
  const [show, setShow] = useState(false)

  return (
    <label className="auth-field">
      <span>{label}</span>
      <span className="input-with-icon" style={{ position: 'relative' }}>
        <Lock size={16} className="field-icon" />
        <input
          className="form-input"
          type={show ? 'text' : 'password'}
          autoComplete={autoComplete}
          minLength={8}
          maxLength={128}
          required
          style={{ paddingRight: '2.5rem' }}
          value={value}
          onChange={event => onChange(event.target.value)}
        />
        <button
          type="button"
          onClick={() => setShow(!show)}
          aria-label={show ? 'Hide password' : 'Show password'}
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
          {show ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
      </span>
    </label>
  )
}
