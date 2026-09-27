export const getLocalStorage = (key, fallback) => { try { const value = localStorage.getItem(key); return value ? JSON.parse(value) : fallback } catch { return fallback } }
export const setLocalStorage = (key, value) => localStorage.setItem(key, JSON.stringify(value))
export const removeLocalStorage = (key) => localStorage.removeItem(key)
