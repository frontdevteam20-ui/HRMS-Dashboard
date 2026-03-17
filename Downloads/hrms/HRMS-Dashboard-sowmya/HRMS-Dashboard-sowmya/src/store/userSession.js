// Utility for saving and restoring user session from localStorage and cookies

// Save user session to localStorage and set token cookie
export function saveUserSession(user) {
  localStorage.setItem('user', JSON.stringify(user));
  if (user && user.token) {
    // Default expiry: 7 days, can be customized
    setCookie('token', user.token, 7);
  }
}

export function getUserSession() {
  const userStr = localStorage.getItem('user');
  if (!userStr) return null;
  try {
    return JSON.parse(userStr);
  } catch {
    return null;
  }
}

// Clear user session from localStorage and remove token cookie
export function clearUserSession() {
  localStorage.removeItem('user');
  removeCookie('token');
}

// Helper to get cookie by name
export function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}

// Helper to set cookie
export function setCookie(name, value, days) {
  let expires = '';
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = `; expires=${date.toUTCString()}`;
  }
  document.cookie = `${name}=${value || ''}${expires}; path=/`;
}

// Helper to remove cookie
export function removeCookie(name) {
  document.cookie = `${name}=; Max-Age=0; path=/`;
}
