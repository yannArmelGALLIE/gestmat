import React from 'react'
import CriticalStock from '../Dashboard/CriticalStock'
import AdminMaterialsList from '../Inventory/AdminMaterialsList'

export default function AdminInventoryTab({ materials = [], onAddClick, onDelete }) {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-title-lg font-bold text-on-surface">Inventaire Général du Parc</h2>
          <p className="text-body-sm text-on-surface-variant">Vue d'ensemble de tous les équipements et alertes de stock.</p>
        </div>
        <button onClick={onAddClick} className="px-4 py-2 bg-primary-container text-on-primary font-medium rounded-lg text-label-md cursor-pointer flex items-center gap-2">
          <span className="material-symbols-outlined text-[18px]">add</span>
          <span>Ajouter Matériel</span>
        </button>
      </div>

      <CriticalStock materials={materials} />
      <AdminMaterialsList materials={materials} onDelete={onDelete} />
    </div>
  )
}
