import React from 'react'
import RequestsTable from '../Requests/RequestsTable'

export default function AdminLogsTab({ demandes = [], loading }) {
  const completed = demandes.filter((d) => d.statut !== 'EN_ATTENTE')
  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-title-lg font-bold text-on-surface">Historique des Traitements</h2>
        <p className="text-body-sm text-on-surface-variant">Journal des demandes acceptées ou refusées.</p>
      </div>
      <RequestsTable demandes={completed} loading={loading} />
    </div>
  )
}
