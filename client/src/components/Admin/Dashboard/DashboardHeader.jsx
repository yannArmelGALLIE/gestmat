import React from 'react'

export default function DashboardHeader({ onAddMaterialClick }) {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pb-2">
      <div>
        <h1 className="text-headline-lg font-headline-lg text-on-surface font-bold tracking-tight">
          Tableau de Bord Administrateur
        </h1>
        <p className="text-body-md font-body-md text-on-surface-variant mt-1">
          Supervision du parc matériel, approbations en attente et niveaux de stock
        </p>
      </div>

      <div className="flex items-center gap-3">
        <button className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg border border-outline-variant bg-surface-container-lowest hover:bg-surface-container-low text-on-surface text-label-md font-label-md shadow-sm transition-colors cursor-pointer">
          <span className="material-symbols-outlined text-[18px]">download</span>
          <span>Exporter rapport CSV</span>
        </button>

        <button
          onClick={onAddMaterialClick}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary-container hover:bg-primary text-on-primary text-label-md font-label-md shadow-sm transition-colors cursor-pointer"
        >
          <span className="material-symbols-outlined text-[18px]">add</span>
          <span>Ajouter un matériel</span>
        </button>
      </div>
    </div>
  )
}
