import React, { useState, useEffect } from 'react'
import { useAuth } from '@clerk/clerk-react'
import MaterialCard from './MaterialCard'
import CatalogHeader from './CatalogHeader'
import { getMaterials } from '../../../services/material.service'

export default function MaterialCatalog({ onRequestClick }) {
  const { getToken } = useAuth()
  const [materials, setMaterials] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')

  useEffect(() => {
    const load = async () => {
      try {
        const token = await getToken()
        if (token) {
          const res = await getMaterials(token)
          if (res.success && res.data) setMaterials(res.data)
        }
      } catch {
        // Fallback
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [getToken])

  const filtered = materials.filter((m) =>
    (m.nom || '').toLowerCase().includes(search.toLowerCase()) ||
    (m.categorie || '').toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="space-y-5">
      <CatalogHeader search={search} onSearchChange={setSearch} />
      {loading ? (
        <p className="text-body-md text-on-surface-variant">Chargement...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((mat) => (
            <MaterialCard key={mat.id} material={mat} onRequestClick={onRequestClick} />
          ))}
        </div>
      )}
    </div>
  )
}
