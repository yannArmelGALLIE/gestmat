import React from 'react'
import RequestsTable from '../Requests/RequestsTable'

export default function AdminRequestsTab({ demandes = [], onAction, loading }) {
  const pending = demandes.filter((d) => d.statut === 'EN_ATTENTE')
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-title-lg font-bold text-on-surface">Demandes d'Emprunt à Traiter</h2>
        <span className="text-body-sm text-on-surface-variant">{pending.length} demande(s) en attente</span>
      </div>
      <RequestsTable demandes={pending} onAction={onAction} loading={loading} />
    </div>
  )
}
