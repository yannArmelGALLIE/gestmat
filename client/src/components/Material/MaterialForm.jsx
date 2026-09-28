import React, { useState } from 'react'
import { useAuth } from '@clerk/clerk-react'
import { createMaterial } from '../../services/material.service'
import MaterialFields from './MaterialFields'
import '../../styles/material/material.scss'

const INIT = { nom: '', description: '', categorie: '', quantiteTotale: 1, quantiteDispo: 1, imageUrl: '' }

export default function MaterialForm({ onSuccess }) {
  const { getToken } = useAuth()
  const [formData, setFormData] = useState(INIT)
  const [msg, setMsg] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setMsg(null)
    try {
      const token = await getToken()
      await createMaterial(formData, token)
      setMsg('Matériel enregistré avec succès !')
      setFormData(INIT)
      if (onSuccess) setTimeout(onSuccess, 800)
    } catch (err) {
      setMsg(err.message || 'Erreur lors de la création')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form className="material-form-box" onSubmit={handleSubmit}>
      <h3 className="form-title">Ajouter un matériel</h3>
      {msg && <p className="form-feedback">{msg}</p>}
      <MaterialFields formData={formData} onChange={handleChange} />
      <button type="submit" disabled={loading} className="submit-btn mt-3 cursor-pointer">
        {loading ? 'Enregistrement...' : 'Enregistrer le matériel'}
      </button>
    </form>
  )
}
