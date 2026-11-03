export const API_BASE_URL = (import.meta.env.VITE_API_BASE_URL || '/api/v1').replace(/\/+$/, '')
export const AUTH_API_URL = `${API_BASE_URL}/auth`

const TOKEN_KEY = 'engineer_auth_token'
const AUTH_CHANGE_EVENT = 'engineer-auth-change'

export function getAuthToken() {
  return sessionStorage.getItem(TOKEN_KEY)
}

export function saveAuthToken(token) {
  sessionStorage.setItem(TOKEN_KEY, token)
  window.dispatchEvent(new Event(AUTH_CHANGE_EVENT))
}

export function clearAuthToken() {
  sessionStorage.removeItem(TOKEN_KEY)
  window.dispatchEvent(new Event(AUTH_CHANGE_EVENT))
}

export function subscribeToAuthChanges(listener) {
  window.addEventListener(AUTH_CHANGE_EVENT, listener)
  window.addEventListener('storage', listener)
  return () => {
    window.removeEventListener(AUTH_CHANGE_EVENT, listener)
    window.removeEventListener('storage', listener)
  }
}

export async function authRequest(path, options = {}) {
  const token = getAuthToken()
  const response = await fetch(`${AUTH_API_URL}${path}`, {
    ...options,
    headers: {
      ...(options.body ? { 'content-type': 'application/json' } : {}),
      ...(token ? { authorization: `Bearer ${token}` } : {}),
      ...options.headers,
    },
  })
  const result = await response.json()

  if (!response.ok) {
    if (response.status === 401) clearAuthToken()
    throw new Error(result.message || result.error || 'The request could not be completed.')
  }

  // Handle standardized data wrapper if present
  if (result && typeof result === 'object' && result.data && typeof result.data === 'object' && result.data.profile) {
    return {
      ...result.data.profile,
      token: result.data.token || result.token,
      ...result.data,
      ...result,
    }
  }

  return result
}
