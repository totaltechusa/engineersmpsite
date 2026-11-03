import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { User, Mail, Shield, CheckCircle, AlertCircle, Save, KeyRound, MapPin, Wrench, Briefcase, Plus, X } from 'lucide-react'
import { authRequest, clearAuthToken, getAuthToken } from '../auth'

export default function ProfilePage() {
  const navigate = useNavigate()
  const location = useLocation()
  
  const [profile, setProfile] = useState(null)
  const [fullName, setFullName] = useState('')
  const [gender, setGender] = useState('')
  const [address, setAddress] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [pincode, setPincode] = useState('')
  const [serviceList, setServiceList] = useState([])
  const [skillsList, setSkillsList] = useState([])
  const [newService, setNewService] = useState('')
  const [newSkill, setNewSkill] = useState('')

  const [error, setError] = useState('')
  const [notice, setNotice] = useState(location.state?.passwordChanged ? 'Password changed successfully.' : '')
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    if (!getAuthToken()) {
      navigate('/login', { replace: true })
      return
    }
    let active = true
    authRequest('/me')
      .then(result => {
        if (active) {
          const p = result.profile || result
          setProfile(p)
          setFullName(p.fullName || '')
          setGender(p.gender || 'male')
          setAddress(p.address || '')
          setCity(p.city || '')
          setState(p.state || '')
          setPincode(p.pincode || '')
          setServiceList(Array.isArray(p.serviceList) ? p.serviceList : [])
          setSkillsList(Array.isArray(p.skillsList) ? p.skillsList : [])
        }
      })
      .catch(loadError => {
        if (active) {
          setError(loadError.message)
          if (!getAuthToken()) navigate('/login', { replace: true })
        }
      })
    return () => { active = false }
  }, [navigate])

  function addService() {
    const trimmed = newService.trim()
    if (trimmed && !serviceList.includes(trimmed)) {
      setServiceList([...serviceList, trimmed])
      setNewService('')
    }
  }

  function removeService(item) {
    setServiceList(serviceList.filter(s => s !== item))
  }

  function addSkill() {
    const trimmed = newSkill.trim()
    if (trimmed && !skillsList.includes(trimmed)) {
      setSkillsList([...skillsList, trimmed])
      setNewSkill('')
    }
  }

  function removeSkill(item) {
    setSkillsList(skillsList.filter(s => s !== item))
  }

  async function handleSubmit(event) {
    event.preventDefault()
    setError('')
    setNotice('')
    setSaving(true)
    try {
      const updatedProfile = await authRequest('/me', {
        method: 'PATCH',
        body: JSON.stringify({
          fullName,
          gender,
          address,
          city,
          state,
          pincode,
          serviceList,
          skillsList,
        }),
      })
      const p = updatedProfile.profile || updatedProfile
      setProfile(p)
      setNotice('Profile updated successfully.')
    } catch (updateError) {
      setError(updateError.message || 'Unable to update your profile.')
      if (!getAuthToken()) navigate('/login', { replace: true })
    } finally {
      setSaving(false)
    }
  }

  async function signOut() {
    try {
      await authRequest('/logout', { method: 'POST' })
    } catch (logoutError) {
      console.error('Logout error:', logoutError)
    }
    clearAuthToken()
    navigate('/login', { replace: true })
  }

  return (
    <div className="page-wrapper auth-page-wrapper" style={{ padding: '2rem 1rem' }}>
      <section className="auth-card" style={{ maxWidth: '780px', width: '100%', padding: '2rem 2.5rem' }} aria-labelledby="profile-title">
        <div className="auth-header" style={{ marginBottom: '1.5rem', textAlign: 'center' }}>
          <img src="/logo-hexagon.png" alt="engineers logo" className="login-brand-logo" style={{ margin: '0 auto 0.75rem auto' }} />
          <h1 id="profile-title" className="login-title">Account Profile</h1>
          <p className="login-subtitle">View and update your personal details, services, and location.</p>
        </div>

        {notice && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1rem', background: '#ecfdf5', border: '1px solid #a7f3d0', color: '#065f46', borderRadius: '8px', marginBottom: '1.25rem' }}>
            <CheckCircle size={18} />
            <span>{notice}</span>
          </div>
        )}

        {error && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1rem', background: '#fef2f2', border: '1px solid #fecaca', color: '#991b1b', borderRadius: '8px', marginBottom: '1.25rem' }}>
            <AlertCircle size={18} />
            <span>{error}</span>
          </div>
        )}

        {profile && (
          <>
            {/* Top Quick Status Overview Bar */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '1rem',
              background: '#f8fafc',
              border: '1px solid #e2e8f0',
              borderRadius: '10px',
              padding: '1.25rem',
              marginBottom: '2rem',
            }}>
              <div>
                <span style={{ fontSize: '0.75rem', color: '#64748b', textTransform: 'uppercase', fontWeight: 600 }}>Work Email</span>
                <p style={{ margin: '0.2rem 0 0', fontWeight: 600, color: 'var(--navy)', wordBreak: 'break-all' }}>{profile.email}</p>
              </div>
              <div>
                <span style={{ fontSize: '0.75rem', color: '#64748b', textTransform: 'uppercase', fontWeight: 600 }}>Role</span>
                <p style={{ margin: '0.2rem 0 0', fontWeight: 600, color: 'var(--navy)', textTransform: 'capitalize' }}>{profile.role || 'User'}</p>
              </div>
              <div>
                <span style={{ fontSize: '0.75rem', color: '#64748b', textTransform: 'uppercase', fontWeight: 600 }}>Email Status</span>
                <p style={{ margin: '0.2rem 0 0', fontWeight: 600, color: profile.emailVerified ? '#16a34a' : '#d97706' }}>
                  {profile.emailVerified ? '✓ Verified' : 'Pending Verification'}
                </p>
              </div>
              <div>
                <span style={{ fontSize: '0.75rem', color: '#64748b', textTransform: 'uppercase', fontWeight: 600 }}>Account Status</span>
                <p style={{ margin: '0.2rem 0 0', fontWeight: 600, color: '#2563eb' }}>
                  {profile.status === 1 || profile.status === 'active' ? 'Active' : 'Pending'}
                </p>
              </div>
            </div>

            {/* Profile Edit Form */}
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
              
              {/* Section 1: Personal Details */}
              <div>
                <h3 style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--navy)', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <User size={18} color="#475569" /> Personal Information
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
                  <label className="auth-field">
                    <span>Full Name</span>
                    <input
                      className="form-input"
                      type="text"
                      required
                      maxLength={120}
                      value={fullName}
                      onChange={e => setFullName(e.target.value)}
                    />
                  </label>
                  <label className="auth-field">
                    <span>Gender</span>
                    <select
                      className="form-input"
                      required
                      value={gender}
                      onChange={e => setGender(e.target.value)}
                    >
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="transgender">Transgender</option>
                    </select>
                  </label>
                </div>
              </div>

              {/* Section 2: Address Information */}
              <div>
                <h3 style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--navy)', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <MapPin size={18} color="#475569" /> Address & Location
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <label className="auth-field">
                    <span>Street Address</span>
                    <input
                      className="form-input"
                      type="text"
                      placeholder="e.g. 123 Tech Park, Suite 400"
                      maxLength={255}
                      value={address}
                      onChange={e => setAddress(e.target.value)}
                    />
                  </label>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem' }}>
                    <label className="auth-field">
                      <span>City</span>
                      <input
                        className="form-input"
                        type="text"
                        placeholder="e.g. San Francisco"
                        maxLength={100}
                        value={city}
                        onChange={e => setCity(e.target.value)}
                      />
                    </label>
                    <label className="auth-field">
                      <span>State / Province</span>
                      <input
                        className="form-input"
                        type="text"
                        placeholder="e.g. CA"
                        maxLength={100}
                        value={state}
                        onChange={e => setState(e.target.value)}
                      />
                    </label>
                    <label className="auth-field">
                      <span>Pincode / Postal Code</span>
                      <input
                        className="form-input"
                        type="text"
                        placeholder="e.g. 94105"
                        maxLength={20}
                        value={pincode}
                        onChange={e => setPincode(e.target.value)}
                      />
                    </label>
                  </div>
                </div>
              </div>

              {/* Section 3: Services & Skills */}
              <div>
                <h3 style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--navy)', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Wrench size={18} color="#475569" /> Services & Skills
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                  {/* Services */}
                  <div style={{ background: '#f8fafc', padding: '1rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                    <label style={{ fontWeight: 600, fontSize: '0.875rem', color: 'var(--navy)', display: 'block', marginBottom: '0.5rem' }}>
                      Offered Services
                    </label>
                    <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.75rem' }}>
                      <input
                        className="form-input"
                        type="text"
                        placeholder="Add service..."
                        value={newService}
                        onChange={e => setNewService(e.target.value)}
                        onKeyDown={e => { if (e.key === 'Enter') { e.preventDefault(); addService() } }}
                      />
                      <button type="button" onClick={addService} className="btn-secondary" style={{ padding: '0.5rem 0.75rem' }}>
                        <Plus size={16} />
                      </button>
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                      {serviceList.map(item => (
                        <span key={item} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', background: '#e0f2fe', color: '#0369a1', padding: '0.25rem 0.6rem', borderRadius: '15px', fontSize: '0.8rem' }}>
                          {item}
                          <button type="button" onClick={() => removeService(item)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#0369a1', display: 'flex' }}><X size={14} /></button>
                        </span>
                      ))}
                      {serviceList.length === 0 && <span style={{ color: '#94a3b8', fontSize: '0.8rem' }}>No services added.</span>}
                    </div>
                  </div>

                  {/* Skills */}
                  <div style={{ background: '#f8fafc', padding: '1rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                    <label style={{ fontWeight: 600, fontSize: '0.875rem', color: 'var(--navy)', display: 'block', marginBottom: '0.5rem' }}>
                      Technical Skills
                    </label>
                    <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.75rem' }}>
                      <input
                        className="form-input"
                        type="text"
                        placeholder="Add skill..."
                        value={newSkill}
                        onChange={e => setNewSkill(e.target.value)}
                        onKeyDown={e => { if (e.key === 'Enter') { e.preventDefault(); addSkill() } }}
                      />
                      <button type="button" onClick={addSkill} className="btn-secondary" style={{ padding: '0.5rem 0.75rem' }}>
                        <Plus size={16} />
                      </button>
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                      {skillsList.map(item => (
                        <span key={item} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', background: '#f3e8ff', color: '#7e22ce', padding: '0.25rem 0.6rem', borderRadius: '15px', fontSize: '0.8rem' }}>
                          {item}
                          <button type="button" onClick={() => removeSkill(item)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#7e22ce', display: 'flex' }}><X size={14} /></button>
                        </span>
                      ))}
                      {skillsList.length === 0 && <span style={{ color: '#94a3b8', fontSize: '0.8rem' }}>No skills added.</span>}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid #e2e8f0', paddingTop: '1.25rem' }}>
                <button
                  type="submit"
                  className="btn-primary"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1.75rem' }}
                  disabled={saving}
                >
                  <Save size={16} />
                  <span>{saving ? 'Saving changes…' : 'Save Changes'}</span>
                </button>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <Link
                    to="/change-password"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#2563eb', textDecoration: 'none', fontWeight: 500, fontSize: '0.875rem' }}
                  >
                    <KeyRound size={16} />
                    <span>Change Password</span>
                  </Link>

                  <button
                    type="button"
                    onClick={signOut}
                    style={{ background: 'none', border: 'none', color: '#ef4444', cursor: 'pointer', fontWeight: 500, fontSize: '0.875rem' }}
                  >
                    Sign Out
                  </button>
                </div>
              </div>
            </form>
          </>
        )}
      </section>
    </div>
  )
}
