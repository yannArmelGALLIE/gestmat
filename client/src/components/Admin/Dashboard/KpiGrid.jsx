import React from 'react'
import KpiCard from './KpiCard'

export default function KpiGrid({ materials = [], demandes = [] }) {
  const totalQty = materials.reduce((sum, m) => sum + (m.quantiteTotale || 0), 0)
  const dispoQty = materials.reduce((sum, m) => sum + (m.quantiteDispo || 0), 0)
  const pendingCount = demandes.filter((d) => d.statut === 'EN_ATTENTE').length
  const activeCount = demandes.filter((d) => d.statut === 'ACCEPTEE').length

  const items = [
    { title: 'Équipements Totaux', value: totalQty, unit: 'unités en parc', change: `${materials.length} références`, icon: 'inventory_2', iconColor: 'text-primary' },
    { title: 'En Stock Disponible', value: dispoQty, unit: 'unités prêtes', change: `${totalQty > 0 ? Math.round((dispoQty/totalQty)*100) : 0}% prêtes`, icon: 'check_circle', iconColor: 'text-tertiary' },
    { title: 'Demandes En Attente', value: pendingCount, unit: 'à traiter', change: pendingCount > 0 ? 'Action requise' : 'À jour', icon: 'pending_actions', iconColor: 'text-[#D97706]' },
    { title: 'Emprunts Actifs', value: activeCount, unit: 'matériels sortis', change: 'En circulation', icon: 'sync', iconColor: 'text-secondary' }
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {items.map((kpi, idx) => (
        <KpiCard key={idx} {...kpi} />
      ))}
    </div>
  )
}

