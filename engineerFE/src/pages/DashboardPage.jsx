import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { authRequest, getAuthToken } from '../auth'

export default function DashboardPage() {
  const navigate = useNavigate()
  const [profile, setProfile] = useState(null)
  const [error, setError] = useState('')

  useEffect(() => {
    if (!getAuthToken()) {
      navigate('/login', { replace: true })
      return
    }

    let active = true
    authRequest('/me')
      .then(result => {
        if (active) setProfile(result)
      })
      .catch(requestError => {
        if (!active) return
        setError(requestError.message || 'Unable to load your dashboard.')
        if (!getAuthToken()) navigate('/login', { replace: true })
      })

    return () => { active = false }
  }, [navigate])

  return (
    <div className="page-wrapper auth-page-wrapper">
      <section className="auth-card dashboard-card" aria-labelledby="dashboard-title">
        <div className="auth-header">
          <img src="/logo-hexagon.png" alt="engineers logo" className="login-brand-logo" />
          <h1 id="dashboard-title" className="login-title">Dashboard</h1>
          <p className="login-subtitle">
            {profile ? `Welcome back, ${profile.fullName}.` : 'Your engineering workspace.'}
          </p>
        </div>
        {error && <p className="auth-notice auth-notice-error" role="alert">{error}</p>}
        {!profile && !error && <p className="auth-loading" role="status">Loading your dashboard…</p>}
        {profile && (
          <>
            <div className="profile-summary">
              <span>Account role</span><strong>{profile.role}</strong>
              <span>Account status</span><strong>{profile.status}</strong>
              <span>Email address</span><strong>{profile.email}</strong>
            </div>
            <div className="dashboard-actions">
              <Link to="/profile" className="btn-primary auth-submit-btn">Manage profile</Link>
              <Link to="/change-password" className="btn-outline">Change password</Link>
            </div>
          </>
        )}
      </section>
    </div>
  )
}
