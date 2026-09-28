import React from 'react'

export default function MaterialCard({ material, onRequestClick }) {
  const isAvailable = (material.quantiteDispo ?? 1) > 0

  return (
    <div className="bg-surface-container-lowest rounded-xl border border-outline-variant p-4 shadow-sm hover:shadow-md transition flex flex-col justify-between">
      <div>
        <div className="w-full h-36 rounded-lg bg-surface-container-low flex items-center justify-center overflow-hidden mb-3 border border-outline-variant/30">
          {material.imageUrl ? (
            <img src={material.imageUrl} alt={material.nom} className="w-full h-full object-cover" />
          ) : (
            <span className="material-symbols-outlined text-[48px] text-outline">devices</span>
          )}
        </div>

        <div className="flex items-center justify-between gap-2 mb-1.5">
          <span className="text-label-sm font-semibold uppercase text-primary font-code bg-surface-container-low px-2 py-0.5 rounded border border-outline-variant/40">
            {material.categorie || 'Équipement'}
          </span>
          <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-label-sm font-semibold ${isAvailable ? 'bg-secondary-fixed/50 text-secondary' : 'bg-error-container text-error'}`}>
            <span className={`w-1.5 h-1.5 rounded-full ${isAvailable ? 'bg-secondary' : 'bg-error'}`} />
            {isAvailable ? `${material.quantiteDispo} dispo` : 'Rupture'}
          </span>
        </div>

        <h3 className="text-title-md font-bold text-on-surface line-clamp-1">{material.nom}</h3>
        <p className="text-body-sm text-on-surface-variant mt-1 line-clamp-2">
          {material.description || 'Aucune description disponible pour cet équipement.'}
        </p>
      </div>

      <div className="mt-3 pt-3 border-t border-outline-variant/40 flex items-center justify-between">
        <span className="text-label-sm text-on-surface-variant font-code">Total: {material.quantiteTotale || 1}</span>
        <button
          onClick={() => onRequestClick(material)}
          disabled={!isAvailable}
          className={`px-3 py-1.5 rounded-lg text-label-md font-semibold flex items-center gap-1.5 transition cursor-pointer ${isAvailable ? 'bg-primary-container hover:bg-primary text-on-primary shadow-sm' : 'bg-surface-container text-outline cursor-not-allowed'}`}
        >
          <span className="material-symbols-outlined text-[16px]">add_circle</span>
          <span>Demander</span>
        </button>
      </div>
    </div>
  )
}
