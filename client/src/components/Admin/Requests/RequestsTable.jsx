import React, { useState } from 'react'
import TableHeader from './TableHeader'
import TableRow from './TableRow'
import TableFooter from './TableFooter'

export default function RequestsTable({ demandes = [], onAction, loading = false }) {
  const [filter, setFilter] = useState('pending')
  const counts = {
    pending: demandes.filter((d) => d.statut === 'EN_ATTENTE').length,
    all: demandes.length,
    accepted: demandes.filter((d) => d.statut === 'ACCEPTEE').length,
    rejected: demandes.filter((d) => d.statut === 'REFUSEE').length
  }
  const filtered = demandes.filter((d) => {
    if (filter === 'pending') return d.statut === 'EN_ATTENTE'
    if (filter === 'accepted') return d.statut === 'ACCEPTEE'
    if (filter === 'rejected') return d.statut === 'REFUSEE'
    return true
  })

  return (
    <div className="bg-surface-container-lowest rounded-xl border border-outline-variant shadow-sm overflow-hidden">
      <TableHeader activeFilter={filter} onFilterChange={setFilter} counts={counts} />
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-surface border-b border-outline-variant text-label-sm uppercase tracking-wider text-on-surface-variant">
              <th className="py-3 px-5">Demandeur</th>
              <th className="py-3 px-4">Matériel &amp; Stock</th>
              <th className="py-3 px-4">Motif</th>
              <th className="py-3 px-4">Date</th>
              <th className="py-3 px-4">Statut</th>
              <th className="py-3 px-5 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-outline-variant/50">
            {loading ? (
              <tr><td colSpan="6" className="py-8 text-center text-body-sm text-on-surface-variant">Chargement...</td></tr>
            ) : filtered.length === 0 ? (
              <tr><td colSpan="6" className="py-8 text-center text-body-sm text-on-surface-variant">Aucune demande trouvée.</td></tr>
            ) : (
              filtered.map((req) => <TableRow key={req.id} request={req} onAccept={(id) => onAction(id, 'ACCEPTEE')} onReject={(id) => onAction(id, 'REFUSEE')} />)
            )}
          </tbody>
        </table>
      </div>
      <TableFooter currentCount={filtered.length} totalCount={demandes.length} />
    </div>
  )
}
