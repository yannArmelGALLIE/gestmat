const API_BASE = 'http://localhost:5000/api'

export const getUserProfile = async (token) => {
  const response = await fetch(`${API_BASE}/users/me`, {
    headers: { Authorization: `Bearer ${token}` }
  })
  if (!response.ok) throw new Error('Erreur récupération profil')
  return await response.json()
}
