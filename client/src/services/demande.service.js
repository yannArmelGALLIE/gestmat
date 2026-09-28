const API_BASE = 'http://localhost:5000/api'

export const getAllDemandes = async (token) => {
  const res = await fetch(`${API_BASE}/demandes`, {
    headers: { Authorization: `Bearer ${token}` }
  })
  if (!res.ok) throw new Error('Erreur récupération demandes')
  return await res.json()
}

export const getMyDemandes = async (token) => {
  const res = await fetch(`${API_BASE}/demandes/my`, {
    headers: { Authorization: `Bearer ${token}` }
  })
  if (!res.ok) throw new Error('Erreur récupération mes demandes')
  return await res.json()
}

export const createDemande = async (data, token) => {
  const res = await fetch(`${API_BASE}/demandes`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(data)
  })
  if (!res.ok) throw new Error('Erreur création demande')
  return await res.json()
}

export const updateDemandeStatus = async (id, statut, token, remarque = '') => {
  const res = await fetch(`${API_BASE}/demandes/${id}/status`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({ statut, remarqueAdmin: remarque })
  })
  if (!res.ok) throw new Error('Erreur mise à jour demande')
  return await res.json()
}

