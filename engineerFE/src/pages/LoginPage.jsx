import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { ShieldCheck, Lock, Mail, ArrowRight, Eye, EyeOff } from 'lucide-react'
import { AUTH_API_URL, saveAuthToken } from '../auth'

export default function LoginPage() {
  const location = useLocation()
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [socialLoading, setSocialLoading] = useState('')

  async function handleLogin(event) {
    event.preventDefault()
    setError('')
    setSubmitting(true)
    try {
      const response = await fetch(`${AUTH_API_URL}/login`, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ email, password }),
      })
      const result = await response.json()
      if (!response.ok) {
        throw new Error(result.message || 'Unable to sign in.')
      }

      const token = result.data?.token || result.token
      if (token) {
        saveAuthToken(token)
      }
      navigate('/dashboard', { replace: true })
    } catch (loginError) {
      setError(loginError.message || 'Unable to sign in. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  // Social Login Handler (Google & Apple)
  async function handleSocialLogin(provider) {
    setError('')
    setSocialLoading(provider)
    try {
      // In production/app environments, the native SDK or OAuth popup returns the user info / ID token
      // We send this to our backend /api/v1/auth/social-login
      // For demonstration / dev testing, prompt or invoke standard OAuth:
      let socialEmail = ''
      let socialFullName = ''
      let socialId = ''

      if (window[`${provider}Auth`]) {
        // Custom or SDK provider
        const authData = await window[`${provider}Auth`]()
        socialEmail = authData.email
        socialFullName = authData.name
        socialId = authData.id
      } else {
        const inputEmail = window.prompt(`Enter your ${provider.toUpperCase()} account email for testing login:`, email || '')
        if (!inputEmail) {
          setSocialLoading('')
          return
        }
        socialEmail = inputEmail.trim()
        socialFullName = socialEmail.split('@')[0]
        socialId = `${provider}_test_${Date.now()}`
      }

      const response = await fetch(`${AUTH_API_URL}/social-login`, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          provider,
          email: socialEmail,
          fullName: socialFullName,
          socialId,
          role: 'user',
        }),
      })

      const result = await response.json()
      if (!response.ok) {
        throw new Error(result.message || `${provider} login failed.`)
      }

      const token = result.data?.token || result.token
      if (token) {
        saveAuthToken(token)
      }
      navigate('/dashboard', { replace: true })
    } catch (err) {
      setError(err.message || `Unable to complete ${provider} login.`)
    } finally {
      setSocialLoading('')
    }
  }

  return (
    <div className="page-wrapper login-page-wrapper">
      <div className="login-container">
        <div className="login-card">
          <div className="login-header">
            <img
              src="/logo-hexagon.png"
              alt="engineers logo"
              className="login-brand-logo"
            />
            <h1 className="login-title">Sign in to your account</h1>
            <p className="login-subtitle">
              Access contracts, escrow milestones, and versioned engineering workrooms
            </p>
          </div>

          {location.state?.emailVerified && (
            <p className="auth-notice auth-notice-success" role="status">
              Your email is verified. You can now sign in.
            </p>
          )}

          {/* Social Logins: Google & Apple */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.25rem' }}>
            {/* Google Sign In Button */}
            <button
              type="button"
              onClick={() => handleSocialLogin('google')}
              disabled={Boolean(socialLoading) || submitting}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.75rem',
                width: '100%',
                padding: '0.65rem 1rem',
                backgroundColor: '#ffffff',
                color: '#374151',
                border: '1px solid #d1d5db',
                borderRadius: '8px',
                fontWeight: 600,
                fontSize: '0.875rem',
                cursor: 'pointer',
                transition: 'background 0.15s ease',
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
              </svg>
              <span>{socialLoading === 'google' ? 'Signing in with Google…' : 'Continue with Google'}</span>
            </button>

            {/* Apple Sign In Button */}
            <button
              type="button"
              onClick={() => handleSocialLogin('apple')}
              disabled={Boolean(socialLoading) || submitting}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.75rem',
                width: '100%',
                padding: '0.65rem 1rem',
                backgroundColor: 'var(--navy)',
                color: '#ffffff',
                border: '1px solid var(--navy)',
                borderRadius: '8px',
                fontWeight: 600,
                fontSize: '0.875rem',
                cursor: 'pointer',
                transition: 'opacity 0.15s ease',
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.38c.62-.75 1.04-1.8 0.92-2.88-.9.04-2 .6-2.63 1.35-.56.65-.99 1.72-.86 2.76 1.01.08 2.01-.52 2.57-1.23z" />
              </svg>
              <span>{socialLoading === 'apple' ? 'Signing in with Apple…' : 'Continue with Apple'}</span>
            </button>
          </div>

          <div className="login-divider" style={{ margin: '1rem 0' }}>
            <span>or sign in with email</span>
          </div>

          <form className="login-form" onSubmit={handleLogin}>
            <div className="form-group">
              <label className="form-label">Work Email</label>
              <div className="input-with-icon">
                <Mail size={16} className="field-icon" />
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  autoComplete="email"
                  className="form-input"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="form-group">
              <div className="form-label-row">
                <label className="form-label">Password</label>
              </div>
              <div className="input-with-icon" style={{ position: 'relative' }}>
                <Lock size={16} className="field-icon" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  placeholder="••••••••••••"
                  autoComplete="current-password"
                  className="form-input"
                  style={{ paddingRight: '2.5rem' }}
                  value={password}
                  onChange={e => setPassword(e.target.value)}
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
              </div>
              <Link to="/forgot-password" className="forgot-password-link">Forgot password?</Link>
            </div>

            {error && <p className="auth-notice auth-notice-error" role="alert">{error}</p>}

            <button type="submit" className="btn-primary login-submit-btn" disabled={submitting}>
              <span>{submitting ? 'Signing in…' : 'Sign in'}</span>
              {!submitting && <ArrowRight size={16} />}
            </button>

            <div className="login-divider">
              <span>new to platform?</span>
            </div>

            <Link to="/signup" className="btn-secondary register-btn">
              Create an account
            </Link>
          </form>

          <div className="security-badge">
            <ShieldCheck size={16} className="security-icon" />
            <span>End-to-end encrypted connection</span>
          </div>
        </div>
      </div>
    </div>
  )
}
