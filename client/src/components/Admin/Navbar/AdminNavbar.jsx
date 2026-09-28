import React from 'react'
import AdminSearchBar from './AdminSearchBar'
import AdminUserMenu from './AdminUserMenu'

export default function AdminNavbar() {
  return (
    <header className="bg-surface-container-lowest border-b border-outline-variant shadow-sm docked full-width top-0 z-30 sticky">
      <div className="flex justify-between items-center h-16 px-6 w-full max-w-full">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <span
              className="material-symbols-outlined text-primary-container text-2xl"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              devices
            </span>
            <span className="text-headline-sm font-headline-sm font-bold text-primary-container tracking-tight">
              GestMat
            </span>
          </div>
          <span className="inline-flex items-center px-2 py-0.5 rounded text-label-sm font-label-sm uppercase bg-surface-container-high text-primary font-bold tracking-wider">
            ADMIN CONSOLE
          </span>
        </div>

        <AdminSearchBar />
        <AdminUserMenu />
      </div>
    </header>
  )
}
