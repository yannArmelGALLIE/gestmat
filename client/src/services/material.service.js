const API_BASE = 'http://localhost:5000/api'

export const createMaterial = async (data, token) => {
  const response = await fetch(`${API_BASE}/materials`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify(data)
  })

  if (!response.ok) {
    throw new Error('Erreur lors de la création du matériel')
  }

  return await response.json()
}
