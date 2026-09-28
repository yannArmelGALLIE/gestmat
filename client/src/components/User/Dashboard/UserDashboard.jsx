import React, { useState, useEffect, useCallback } from 'react'
import { useAuth } from '@clerk/clerk-react'
import MaterialCatalog from '../Catalog/MaterialCatalog'
import UserRequestsList from '../Requests/UserRequestsList'
import NewRequestModal from '../Requests/NewRequestModal'
import { getMyDemandes } from '../../../services/demande.service'

export default function UserDashboard({ activeTab = 'catalog', onTabChange }) {
  const { getToken } = useAuth()
  const [demandes, setDemandes] = useState([])
  const [loading, setLoading] = useState(false)
  const [selectedMaterial, setSelectedMaterial] = useState(null)

  const loadDemandes = useCallback(async () => {
    setLoading(true)
    try {
      const token = await getToken()
      if (token) {
        const res = await getMyDemandes(token)
        if (res.success && res.data) setDemandes(res.data)
      }
    } finally { setLoading(false) }
  }, [getToken])

  useEffect(() => { loadDemandes() }, [loadDemandes])

  const handleSuccess = () => {
    loadDemandes()
    if (onTabChange) onTabChange('requests')
  }

  return (
    <div className="max-w-7xl mx-auto py-8 px-6 space-y-8">
      {activeTab === 'catalog' ? (
        <MaterialCatalog onRequestClick={(mat) => setSelectedMaterial(mat)} />
      ) : (
        <UserRequestsList demandes={demandes} loading={loading} />
      )}
      {selectedMaterial && (
        <NewRequestModal material={selectedMaterial} onClose={() => setSelectedMaterial(null)} onSuccess={handleSuccess} />
      )}
    </div>
  )
}
