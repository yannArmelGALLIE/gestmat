import React from 'react'

export default function TableFilters({ activeFilter = 'pending', onFilterChange, counts = {} }) {
  const filters = [
    { id: 'pending', label: `En attente (${counts.pending ?? 0})` },
    { id: 'all', label: `Toutes les demandes (${counts.all ?? 0})` },
    { id: 'accepted', label: `Validées (${counts.accepted ?? 0})` },
    { id: 'rejected', label: `Refusées (${counts.rejected ?? 0})` }
  ]

  return (
    <div className="inline-flex p-1 bg-surface-container-low rounded-lg border border-outline-variant text-label-sm font-label-sm">
      {filters.map((tab) => {
        const isActive = activeFilter === tab.id
        return (
          <button
            key={tab.id}
            onClick={() => onFilterChange && onFilterChange(tab.id)}
            className={`px-3 py-1.5 rounded-md transition-colors cursor-pointer ${
              isActive
                ? 'bg-surface-container-lowest shadow-sm font-semibold text-primary-container'
                : 'text-on-surface-variant hover:text-on-surface font-medium'
            }`}
          >
            {tab.label}
          </button>
        )
      })}
    </div>
  )
}
