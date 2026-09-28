const API_BASE = 'https://gestmat-production-b620.up.railway.app/api'

export const getUserProfile = async (token) => {
  const response = await fetch(`${API_BASE}/users/me`, {
    headers: { Authorization: `Bearer ${token}` }
  })
  if (!response.ok) throw new Error('Erreur récupération profil')
  return await response.json()
}
