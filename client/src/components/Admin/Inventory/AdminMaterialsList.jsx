import React from 'react'
import AdminMaterialCard from './AdminMaterialCard'

export default function AdminMaterialsList({ materials = [], onDelete }) {
  if (materials.length === 0) {
    return (
      <div className="bg-surface-container-lowest p-8 rounded-xl border border-outline-variant text-center text-on-surface-variant">
        Aucun matériel répertorié pour le moment.
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-title-md font-bold text-on-surface">Tous les équipements ({materials.length})</h3>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {materials.map((item) => (
          <AdminMaterialCard key={item.id} item={item} onDelete={onDelete} />
        ))}
      </div>
    </div>
  )
}
