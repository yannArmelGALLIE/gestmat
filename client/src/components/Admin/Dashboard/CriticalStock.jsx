import React from 'react'
import StockItemCard from './StockItemCard'

export default function CriticalStock({ materials = [] }) {
  const criticals = materials.filter((m) => m.quantiteDispo <= 3)

  return (
    <div className="bg-surface-container-lowest rounded-xl border border-outline-variant p-6 shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-5">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-error text-[22px]">warning</span>
          <h3 className="text-title-md font-semibold text-on-surface">Stock Critique</h3>
        </div>
        <span className="text-body-sm text-on-surface-variant">Seuil fixé à 3 unités</span>
      </div>

      {criticals.length === 0 ? (
        <p className="text-body-sm text-on-surface-variant text-center py-4">Aucun matériel en stock critique.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {criticals.map((item) => {
            const pct = item.quantiteTotale > 0 ? Math.round((item.quantiteDispo / item.quantiteTotale) * 100) : 0
            const isZero = item.quantiteDispo === 0
            return (
              <StockItemCard
                key={item.id}
                title={item.nom}
                refCode={item.numeroSerie || item.categorie}
                remaining={item.quantiteDispo}
                maxUnits={item.quantiteTotale}
                percent={pct}
                badgeBg={isZero ? 'bg-[#FFF1F2]' : 'bg-[#FFFBEB]'}
                badgeText={isZero ? 'text-[#E11D48]' : 'text-[#92400E]'}
                badgeBorder={isZero ? 'border-[#FECDD3]' : 'border-[#FDE68A]'}
                barColor={isZero ? 'bg-[#E11D48]' : 'bg-[#D97706]'}
                delayText={isZero ? 'Rupture de stock imminente' : 'Stock de sécurité atteint'}
              />
            )
          })}
        </div>
      )}
    </div>
  )
}

