import React from 'react'

export default function AdminMaterialCard({ item, onDelete }) {
  const isZero = item.quantiteDispo === 0

  const handleDelete = () => {
    if (window.confirm(`Supprimer le matériel « ${item.nom} » ?`)) onDelete(item.id)
  }

  return (
    <div className="bg-surface-container-lowest rounded-xl border border-outline-variant p-4 flex flex-col justify-between shadow-sm">
      <div className="w-full h-32 rounded-lg bg-surface-container-low flex items-center justify-center overflow-hidden mb-3 border border-outline-variant/30">
        {item.imageUrl ? (
          <img src={item.imageUrl} alt={item.nom} className="w-full h-full object-cover" />
        ) : (
          <span className="material-symbols-outlined text-[40px] text-outline">devices</span>
        )}
      </div>
      <div>
        <div className="flex items-center justify-between gap-1 mb-1">
          <span className="text-label-sm font-semibold uppercase text-primary font-code bg-surface px-1.5 py-0.5 rounded border border-outline-variant/40">
            {item.categorie}
          </span>
          <span className={`px-2 py-0.5 rounded-full text-label-sm font-bold ${isZero ? 'bg-[#FFF1F2] text-[#E11D48]' : 'bg-[#ECFDF5] text-[#065F46]'}`}>
            {item.quantiteDispo} / {item.quantiteTotale} dispo
          </span>
        </div>
        <div className="flex items-start justify-between gap-2">
          <h4 className="text-title-sm font-bold text-on-surface line-clamp-1">{item.nom}</h4>
          <button
            type="button"
            onClick={handleDelete}
            title="Supprimer le matériel"
            aria-label={`Supprimer ${item.nom}`}
            className="text-error hover:bg-error/10 rounded-lg p-1 cursor-pointer shrink-0"
          >
            <span className="material-symbols-outlined text-[20px]">delete</span>
          </button>
        </div>
        <p className="text-body-sm text-on-surface-variant line-clamp-2 mt-0.5">{item.description || 'Aucune description'}</p>
      </div>
    </div>
  )
}
