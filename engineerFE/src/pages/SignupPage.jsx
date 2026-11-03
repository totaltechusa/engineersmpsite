import { useState } from 'react'
import { ArrowRight, Eye, EyeOff, Lock, Mail, Plus, User, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import { AUTH_API_URL } from '../auth'

export default function SignupPage() {
  const [form, setForm] = useState({
    role: 'user',
    fullName: '',
    email: '',
    password: '',
    gender: '',
  })
  const [serviceList, setServiceList] = useState([])
  const [skillsList, setSkillsList] = useState([])
  const [serviceDraft, setServiceDraft] = useState('')
  const [skillDraft, setSkillDraft] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [fieldErrors, setFieldErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [canResend, setCanResend] = useState(false)

  const updateField = event => {
    const { name, value } = event.target
    setForm(current => ({ ...current, [name]: value }))
    setFieldErrors(current => ({ ...current, [name]: '' }))
  }

  const passwordChecks = getPasswordChecks(form.password, form.fullName)

  async function handleSubmit(event) {
    event.preventDefault()
    setError('')
    setFieldErrors({})
    if (Object.values(passwordChecks).some(isValid => !isValid)) {
      setFieldErrors({ password: 'Meet all password requirements before continuing.' })
      return
    }
    const services = addTokens(serviceList, serviceDraft)
    const skills = addTokens(skillsList, skillDraft)
    setSubmitting(true)

    try {
      const response = await fetch(`${AUTH_API_URL}/signup`, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          fullName: form.fullName.trim(),
          email: form.email.trim(),
          password: form.password,
          role: form.role,
          gender: form.gender,
          serviceList: services,
          skillsList: skills,
        }),
      })

      const result = await response.json()
      if (!response.ok) {
        setCanResend(response.status === 409 || response.status >= 500)
        const details = result.details || []
        if (details.length > 0) {
          setFieldErrors(details.reduce((errors, { field, message }) => ({
            ...errors,
            [field]: errors[field] ? `${errors[field]} ${message}` : message,
          }), {}))
          return
        }
        throw new Error(result.message || result.error || 'Unable to create your account.')
      }

      setSubmitted(true)
    } catch (signupError) {
      setError(getErrorMessage(signupError))
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="page-wrapper auth-page-wrapper">
      <section className="auth-card" aria-labelledby="signup-title">
        <div className="auth-header">
          <img src="/logo-hexagon.png" alt="engineers logo" className="login-brand-logo" />
          <h1 id="signup-title" className="login-title">Create your engineer account</h1>
          <p className="login-subtitle">Join the network and showcase your engineering expertise.</p>
        </div>

        {submitted ? (
          <div className="auth-result" role="status">
            <h2>Account created</h2>
            <p>
              Your account is pending email verification. Check your inbox for a verification link
              before signing in.
            </p>
            <Link to="/login" className="btn-primary auth-submit-btn">Go to sign in</Link>
          </div>
        ) : (
          <form className="auth-form" onSubmit={handleSubmit}>
            <label className="auth-field">
              <span>Account role</span>
              <select name="role" required value={form.role} onChange={updateField} className="form-input">
                <option value="user">User</option>
              </select>
            </label>
            <label className="auth-field">
              <span>Full name</span>
              <span className="input-with-icon">
                <User size={16} className="field-icon" />
                <input name="fullName" autoComplete="name" required maxLength={120} value={form.fullName} onChange={updateField} className="form-input" placeholder="Your full name" aria-invalid={Boolean(fieldErrors.fullName)} />
              </span>
              {fieldErrors.fullName && <small className="field-error">{fieldErrors.fullName}</small>}
            </label>

            <label className="auth-field">
              <span>Work email</span>
              <span className="input-with-icon">
                <Mail size={16} className="field-icon" />
                <input name="email" type="email" autoComplete="email" required value={form.email} onChange={updateField} className="form-input" placeholder="name@company.com" aria-invalid={Boolean(fieldErrors.email)} />
              </span>
              {fieldErrors.email && <small className="field-error">{fieldErrors.email}</small>}
            </label>

            <label className="auth-field">
              <span>Password</span>
              <span className="input-with-icon">
                <Lock size={16} className="field-icon" />
                <input name="password" type={showPassword ? 'text' : 'password'} autoComplete="new-password" required minLength={8} maxLength={128} value={form.password} onChange={updateField} className="form-input password-input" placeholder="At least 8 characters" aria-invalid={Boolean(fieldErrors.password)} />
                <button type="button" className="password-visibility-button" aria-label={showPassword ? 'Hide password' : 'Show password'} aria-pressed={showPassword} onClick={() => setShowPassword(visible => !visible)}>
                  {showPassword ? <EyeOff size={17} /> : <Eye size={17} />}
                </button>
              </span>
              <ul className="password-requirements" aria-label="Password requirements">
                {Object.entries(passwordChecks).map(([requirement, passed]) => (
                  <li key={requirement} className={passed ? 'requirement-met' : 'requirement-unmet'}>
                    <span aria-hidden="true">{passed ? '✓' : '○'}</span> {requirement}
                  </li>
                ))}
              </ul>
              {fieldErrors.password && <small className="field-error">{fieldErrors.password}</small>}
            </label>

            <label className="auth-field">
              <span>Gender</span>
              <select name="gender" required value={form.gender} onChange={updateField} className="form-input" aria-invalid={Boolean(fieldErrors.gender)}>
                <option value="">Select gender</option>
                <option value="female">Female</option>
                <option value="male">Male</option>
                <option value="transgender">Transgender</option>
              </select>
              {fieldErrors.gender && <small className="field-error">{fieldErrors.gender}</small>}
            </label>

            <label className="auth-field">
              <span>Services <small>(type a service and press Space or Enter)</small></span>
              <TokenInput label="Services" values={serviceList} draft={serviceDraft} setValues={setServiceList} setDraft={setServiceDraft} />
              {fieldErrors.serviceList && <small className="field-error">{fieldErrors.serviceList}</small>}
            </label>

            <label className="auth-field">
              <span>Skills <small>(type a skill and press Space or Enter)</small></span>
              <TokenInput label="Skills" values={skillsList} draft={skillDraft} setValues={setSkillsList} setDraft={setSkillDraft} />
              {fieldErrors.skillsList && <small className="field-error">{fieldErrors.skillsList}</small>}
            </label>

            {error && <p className="auth-notice auth-notice-error" role="alert">{error}</p>}
            {canResend && (
              <Link to="/resend-verification" state={{ email: form.email }} className="register-link">
                Need another verification email?
              </Link>
            )}

            <button type="submit" className="btn-primary auth-submit-btn" disabled={submitting}>
              <span>{submitting ? 'Creating account…' : 'Create account'}</span>
              {!submitting && <ArrowRight size={16} />}
            </button>
          </form>
        )}

        <p className="auth-switch">
          Already have an account? <Link to="/login" className="register-link text-brand-red">Sign in</Link>
        </p>
      </section>
    </div>
  )
}

function getPasswordChecks(password, fullName) {
  const nameParts = fullName.trim().split(/\s+/).filter(Boolean)
  const normalizedPassword = password.toLocaleLowerCase()
  const firstName = nameParts[0]
  const lastName = nameParts.length > 1 ? nameParts[nameParts.length - 1] : ''
  return {
    'At least 8 characters': password.length >= 8 && password.length <= 128,
    'At least 1 special character': /[^A-Za-z0-9\s]/.test(password),
    'At least 1 lowercase letter': /[a-z]/.test(password),
    'At least 1 capital letter': /[A-Z]/.test(password),
    'At least 1 number': /\d/.test(password),
    'Must not contain your first or last name': Boolean(password)
      && ![firstName, lastName].filter(Boolean).some(name => normalizedPassword.includes(name.toLocaleLowerCase())),
  }
}

function addTokens(values, text) {
  const tokens = text.split(/[,\s]+/).map(value => value.trim()).filter(Boolean)
  return tokens.reduce((result, token) => (
    result.some(value => value.toLocaleLowerCase() === token.toLocaleLowerCase())
      ? result
      : [...result, token]
  ), [...values])
}

function TokenInput({ label, values, draft, setValues, setDraft }) {
  function commit(value = draft) {
    setValues(current => addTokens(current, value))
    setDraft('')
  }

  function handleKeyDown(event) {
    if (event.key === 'Enter' || event.key === ' ' || event.key === ',') {
      event.preventDefault()
      commit()
    } else if (event.key === 'Backspace' && !draft && values.length > 0) {
      setValues(current => current.slice(0, -1))
    }
  }

  function handleChange(event) {
    const value = event.target.value
    if (/[\s,]/.test(value)) {
      const lastDelimiter = Math.max(value.lastIndexOf(' '), value.lastIndexOf(','))
      setValues(current => addTokens(current, value.slice(0, lastDelimiter)))
      setDraft(value.slice(lastDelimiter + 1))
      return
    }
    setDraft(value)
  }

  return (
    <div className="token-input">
      {values.map(value => (
        <span className="input-token" key={value}>
          {value}
          <button type="button" aria-label={`Remove ${value} from ${label}`} onClick={() => setValues(current => current.filter(item => item !== value))}>
            <X size={13} />
          </button>
        </span>
      ))}
      <input
        aria-label={label}
        value={draft}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        onBlur={() => draft.trim() && commit()}
        placeholder={values.length ? 'Add another…' : `Add ${label.toLocaleLowerCase()}…`}
      />
      {draft.trim() && (
        <button type="button" className="token-add-button" aria-label={`Add ${draft}`} onMouseDown={event => event.preventDefault()} onClick={() => commit()}>
          <Plus size={14} />
        </button>
      )}
    </div>
  )
}

function getErrorMessage(error) {
  return error.message || 'Unable to create your account. Please try again.'
}
