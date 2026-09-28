import React from 'react'
import SidebarNav from './SidebarNav'
import SidebarFooter from './SidebarFooter'

export default function AdminSidebar({ activeTab, onTabChange, onNewRequest, pendingCount = 0 }) {
  return (
    <aside className="w-64 fixed inset-y-0 left-0 pt-16 z-20 flex flex-col justify-between p-4 bg-surface-container-lowest border-r border-outline-variant shadow-sm">
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-3 px-2 pt-2">
          <div className="w-10 h-10 rounded-lg bg-primary-container flex items-center justify-center text-on-primary">
            <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>devices</span>
          </div>
          <div className="flex flex-col">
            <span className="text-title-sm text-on-surface font-semibold">GestMat IT</span>
            <span className="text-body-sm text-on-surface-variant">Parc &amp; Matériel Entreprise</span>
          </div>
        </div>

        <button onClick={onNewRequest} className="w-full py-2 px-3 bg-primary-container hover:bg-primary text-on-primary rounded-lg text-label-md font-medium flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer">
          <span className="material-symbols-outlined text-[18px]">add_circle</span>
          <span>Ajouter Matériel</span>
        </button>

        <SidebarNav activeTab={activeTab} onTabChange={onTabChange} pendingCount={pendingCount} />
      </div>

      <SidebarFooter />
    </aside>
  )
}
