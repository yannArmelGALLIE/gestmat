import React from 'react'

export default function KpiCard({
  title,
  icon,
  iconFill = false,
  value,
  unit,
  trend,
  trendIcon,
  subtext,
  cardBg = 'bg-surface-container-lowest',
  borderCol = 'border-outline-variant',
  textCol = 'text-on-surface',
  accentCol = 'text-primary-container',
  iconBg = 'bg-surface-container-low'
}) {
  return (
    <div className={`${cardBg} rounded-xl border ${borderCol} p-5 shadow-sm hover:shadow transition-shadow`}>
      <div className="flex items-center justify-between">
        <span className={`text-label-md font-label-md ${cardBg.includes('FFF') ? textCol : 'text-on-surface-variant'}`}>
          {title}
        </span>
        <div className={`w-9 h-9 rounded-lg ${iconBg} flex items-center justify-center ${accentCol}`}>
          <span
            className="material-symbols-outlined text-[20px]"
            style={iconFill ? { fontVariationSettings: "'FILL' 1" } : undefined}
          >
            {icon}
          </span>
        </div>
      </div>

      <div className="mt-3 flex items-baseline gap-2">
        <span className={`text-headline-lg font-headline-lg font-bold ${textCol}`}>{value}</span>
        <span className="text-body-sm font-body-sm opacity-80">{unit}</span>
      </div>

      <div className={`mt-2.5 flex items-center text-label-sm font-label-sm ${accentCol} font-medium`}>
        {trendIcon && <span className="material-symbols-outlined text-[16px] mr-1">{trendIcon}</span>}
        <span>{trend}</span>
        {subtext && <span className="text-on-surface-variant font-normal ml-1.5">{subtext}</span>}
      </div>
    </div>
  )
}
