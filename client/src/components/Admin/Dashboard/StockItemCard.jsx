import React from 'react'

export default function StockItemCard({
  title,
  refCode,
  remaining,
  maxUnits,
  percent,
  badgeBg,
  badgeText,
  badgeBorder,
  barColor,
  delayText
}) {
  return (
    <div className="p-4 rounded-lg bg-surface border border-outline-variant space-y-3">
      <div className="flex items-center justify-between">
        <div>
          <h4 className="text-title-sm font-title-sm font-semibold text-on-surface">{title}</h4>
          <span className="text-body-sm font-body-sm text-on-surface-variant font-code">{refCode}</span>
        </div>
        <span className={`inline-flex items-center px-2 py-0.5 rounded text-label-sm font-label-sm font-bold ${badgeBg} ${badgeText} border ${badgeBorder}`}>
          {remaining} restant{remaining > 1 ? 's' : ''}
        </span>
      </div>

      <div>
        <div className="flex justify-between text-code font-code text-on-surface-variant mb-1">
          <span>Niveau de réserve</span>
          <span className={`${badgeText} font-bold`}>{remaining} / {maxUnits} unités max</span>
        </div>
        <div className="w-full bg-surface-container-highest rounded-full h-2">
          <div className={`${barColor} h-2 rounded-full`} style={{ width: `${percent}%` }} />
        </div>
      </div>

      <div className="flex items-center justify-between pt-1">
        <span className="text-body-sm font-body-sm text-on-surface-variant">{delayText}</span>
        <button className="text-label-sm font-label-sm text-primary-container font-semibold hover:underline flex items-center gap-1 cursor-pointer">
          <span className="material-symbols-outlined text-[14px]">local_shipping</span>
          <span>Commander un lot</span>
        </button>
      </div>
    </div>
  )
}
