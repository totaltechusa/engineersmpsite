export function getPasswordChecks(password, fullName = '') {
  const nameParts = fullName.trim().split(/\s+/).filter(part => part.length >= 2)
  const normalizedPassword = (password || '').toLocaleLowerCase()
  
  const hasMinLength = password.length >= 8 && password.length <= 128
  const hasCapital = /[A-Z]/.test(password)
  const hasLower = /[a-z]/.test(password)
  const hasNumber = /\d/.test(password)
  const hasSpecial = /[^A-Za-z0-9\s]/.test(password)
  const noName = !nameParts.some(part => normalizedPassword.includes(part.toLocaleLowerCase()))

  return {
    'At least 8 characters': hasMinLength,
    'At least 1 capital letter (A-Z)': hasCapital,
    'At least 1 small letter (a-z)': hasLower,
    'At least 1 numeric digit (0-9)': hasNumber,
    'At least 1 special character (!@#$...)': hasSpecial,
    'Does not contain first or last name': Boolean(password) && noName,
  }
}

export function isPasswordValid(password, fullName = '') {
  const checks = getPasswordChecks(password, fullName)
  return Object.values(checks).every(Boolean)
}

