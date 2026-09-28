import React from 'react'

export default function CatalogHeader({ search, onSearchChange }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
      <div>
        <h2 className="text-headline-md font-bold text-on-surface">Catalogue du Matériel IT</h2>
        <p className="text-body-sm text-on-surface-variant">
          Sélectionnez le matériel souhaité et soumettez votre demande en 1 clic.
        </p>
      </div>
      <input
        type="text"
        placeholder="Rechercher par nom, catégorie..."
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
        className="px-3.5 py-2 bg-surface-container-lowest border border-outline-variant rounded-lg text-body-sm max-w-xs w-full"
      />
    </div>
  )
}
