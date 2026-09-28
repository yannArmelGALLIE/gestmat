import { useState, useEffect, useCallback } from 'react'
import { useAuth } from '@clerk/clerk-react'
import { getAllDemandes, updateDemandeStatus } from '../services/demande.service'
import { deleteMaterial, getMaterials } from '../services/material.service'

export function useAdminData() {
  const { getToken } = useAuth()
  const [demandes, setDemandes] = useState([])
  const [materials, setMaterials] = useState([])
  const [loading, setLoading] = useState(false)

  const loadData = useCallback(async () => {
    setLoading(true)
    try {
      const token = await getToken()
      if (token) {
        const [dRes, mRes] = await Promise.all([getAllDemandes(token), getMaterials(token)])
        if (dRes.success) setDemandes(dRes.data || [])
        if (mRes.success) setMaterials(mRes.data || [])
      }
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }, [getToken])

  useEffect(() => { loadData() }, [loadData])

  const handleAction = async (id, statut) => {
    setDemandes((prev) => prev.map((d) => d.id === id ? { ...d, statut } : d))
    const token = await getToken()
    await updateDemandeStatus(id, statut, token)
    await loadData()
  }

  const handleDeleteMaterial = async (id) => {
    const token = await getToken()
    await deleteMaterial(id, token)
    await loadData()
  }

  return { demandes, materials, loading, loadData, handleAction, handleDeleteMaterial }
}
