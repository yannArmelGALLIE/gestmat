import React from 'react'
import TableFilters from './TableFilters'

export default function TableHeader({ activeFilter, onFilterChange, counts = {} }) {
  const urgentCount = counts.pending ?? 0

  return (
    <div className="p-5 border-b border-outline-variant flex flex-col md:flex-row md:items-center justify-between gap-4">
      <div>
        <div className="flex items-center gap-2">
          <h2 className="text-title-md font-semibold text-on-surface">Demandes en Attente de Traitement</h2>
          <span className="px-2 py-0.5 rounded-full text-label-sm bg-[#FEF3C7] text-[#92400E] font-bold border border-[#FDE68A]">
            {urgentCount} urgente{urgentCount > 1 ? 's' : ''}
          </span>
        </div>
        <p className="text-body-sm text-on-surface-variant mt-0.5">
          Vérifiez la disponibilité et validez les affectations de matériel aux collaborateurs.
        </p>
      </div>

      <TableFilters activeFilter={activeFilter} onFilterChange={onFilterChange} counts={counts} />
    </div>
  )
}
