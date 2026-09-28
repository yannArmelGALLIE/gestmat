import React from 'react'

export default function TableFooter({ currentCount = 3, totalCount = 45 }) {
  return (
    <div className="px-5 py-3 border-t border-outline-variant bg-surface flex items-center justify-between text-body-sm font-body-sm text-on-surface-variant">
      <span>
        Affichage de {currentCount} demandes urgentes sur {totalCount} au total
      </span>
      <a
        href="#"
        className="inline-flex items-center gap-1 text-primary-container font-medium hover:underline text-label-md font-label-md"
      >
        <span>Consulter toute la file d'attente</span>
        <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
      </a>
    </div>
  )
}
