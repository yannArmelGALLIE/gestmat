const API_BASE = 'http://localhost:5000/api'

export const getMaterials = async (token) => {
  const response = await fetch(`${API_BASE}/materials`, {
    headers: { Authorization: `Bearer ${token}` }
  })
  if (!response.ok) throw new Error('Erreur récupération matériels')
  return await response.json()
}

export const createMaterial = async (data, token) => {
  const response = await fetch(`${API_BASE}/materials`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(data)
  })
  if (!response.ok) throw new Error('Erreur création matériel')
  return await response.json()
}

export const deleteMaterial = async (id, token) => {
  const response = await fetch(`${API_BASE}/materials/${id}`, {
    method: 'DELETE',
    headers: { Authorization: `Bearer ${token}` }
  })
  if (!response.ok) throw new Error('Erreur suppression matériel')
  return await response.json()
}
