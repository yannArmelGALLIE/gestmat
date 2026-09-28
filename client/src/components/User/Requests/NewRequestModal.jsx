import React, { useState } from 'react'
import { useAuth } from '@clerk/clerk-react'
import { createDemande } from '../../../services/demande.service'

export default function NewRequestModal({ material, onClose, onSuccess }) {
  const { getToken } = useAuth()
  const [motif, setMotif] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  if (!material) return null

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    try {
      const token = await getToken()
      await createDemande({ materielId: material.id, motif }, token)
      if (onSuccess) onSuccess()
      onClose()
    } catch (err) {
      setError(err.message || 'Erreur soumission')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
      <div className="bg-surface-container-lowest rounded-2xl p-6 max-w-md w-full border border-outline-variant shadow-xl space-y-3">
        <h3 className="text-title-md font-bold text-on-surface">Demander : {material.nom}</h3>
        <p className="text-body-sm text-on-surface-variant">Expliquez votre besoin pour validation.</p>
        {error && <p className="text-error text-body-sm">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <textarea required rows="3" value={motif} onChange={(e) => setMotif(e.target.value)} placeholder="Motif de la demande..." className="w-full p-2.5 bg-surface border border-outline-variant rounded-lg text-body-sm" />
          <div className="flex justify-end gap-2">
            <button type="button" onClick={onClose} className="px-4 py-2 rounded-lg border border-outline-variant text-on-surface text-label-md cursor-pointer">Annuler</button>
            <button type="submit" disabled={loading} className="px-4 py-2 rounded-lg bg-primary-container hover:bg-primary text-on-primary text-label-md font-semibold cursor-pointer">
              {loading ? 'Envoi...' : 'Confirmer'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
