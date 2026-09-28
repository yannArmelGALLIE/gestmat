import React from 'react'

export default function SidebarNav({ activeTab = 'dashboard', onTabChange, pendingCount = 0 }) {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: 'dashboard', fill: true },
    { id: 'requests', label: 'Demandes à Valider', icon: 'fact_check', badge: pendingCount },
    { id: 'inventory', label: 'Inventaire du Stock', icon: 'inventory_2' },
    { id: 'logs', label: 'Historique & Logs', icon: 'history' },
    { id: 'settings', label: 'Paramètres', icon: 'settings' }
  ]

  return (
    <div className="space-y-1">
      <div className="px-3 pb-2 text-label-sm uppercase tracking-wider text-outline font-semibold">Gestion du Parc</div>
      <nav className="space-y-1">
        {navItems.map((item) => {
          const active = activeTab === item.id
          return (
            <button
              key={item.id}
              onClick={() => onTabChange && onTabChange(item.id)}
              className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-body-md transition-colors cursor-pointer ${
                active ? 'bg-surface-container-high text-primary-container font-title-sm' : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low'
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[20px]" style={item.fill ? { fontVariationSettings: "'FILL' 1" } : undefined}>{item.icon}</span>
                <span>{item.label}</span>
              </div>
              {active && <span className="w-2 h-2 rounded-full bg-primary-container" />}
              {Boolean(item.badge) && !active && (
                <span className="inline-flex items-center px-1.5 py-0.5 rounded-full text-[10px] font-bold bg-[#FEF3C7] text-[#92400E] border border-[#FDE68A]">
                  {item.badge}
                </span>
              )}
            </button>
          )
        })}
      </nav>
    </div>
  )
}
