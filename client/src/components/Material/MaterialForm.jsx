import React, { useState } from 'react'
import { useAuth } from '@clerk/clerk-react'
import { createMaterial } from '../../services/material.service'
import MaterialFields from './MaterialFields'
import '../../styles/material/material.scss'

export default function MaterialForm() {
  const { getToken } = useAuth()
  const [formData, setFormData] = useState({
    nom: '',
    categorie: '',
    numeroSerie: ''
  })
  const [msg, setMsg] = useState(null)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const token = await getToken()
      await createMaterial(formData, token)
      setMsg('Matériel enregistré avec succès !')
      setFormData({ nom: '', categorie: '', numeroSerie: '' })
    } catch (err) {
      setMsg(err.message || 'Erreur lors de la création')
    }
  }

  return (
    <form className="material-form-box" onSubmit={handleSubmit}>
      <h3 className="form-title">Ajouter un matériel</h3>
      {msg && <p className="form-feedback">{msg}</p>}
      <MaterialFields formData={formData} onChange={handleChange} />
      <button type="submit" className="submit-btn">
        Enregistrer le matériel
      </button>
    </form>
  )
}
