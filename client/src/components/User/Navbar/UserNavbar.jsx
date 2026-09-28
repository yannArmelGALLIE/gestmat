import React from 'react'
import { UserButton, useUser } from '@clerk/clerk-react'

export default function UserNavbar({ activeTab, onTabChange }) {
  const { user } = useUser()

  return (
    <header className="bg-surface-container-lowest border-b border-outline-variant shadow-sm sticky top-0 z-30">
      <div className="flex justify-between items-center h-16 px-6 max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary-container text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
              devices
            </span>
            <span className="text-headline-sm font-bold text-primary-container tracking-tight">GestMat</span>
          </div>
          <span className="inline-flex items-center px-2 py-0.5 rounded text-label-sm uppercase bg-secondary-fixed/40 text-secondary font-bold tracking-wider">
            ESPACE COLLABORATEUR
          </span>
        </div>

        <nav className="hidden sm:flex items-center gap-2">
          <button
            onClick={() => onTabChange('catalog')}
            className={`px-3 py-1.5 rounded-lg text-body-md font-medium transition cursor-pointer ${activeTab === 'catalog' ? 'bg-surface-container-high text-primary-container font-semibold' : 'text-on-surface-variant hover:text-on-surface'}`}
          >
            Catalogue Matériel
          </button>
          <button
            onClick={() => onTabChange('requests')}
            className={`px-3 py-1.5 rounded-lg text-body-md font-medium transition cursor-pointer ${activeTab === 'requests' ? 'bg-surface-container-high text-primary-container font-semibold' : 'text-on-surface-variant hover:text-on-surface'}`}
          >
            Mes Demandes
          </button>
        </nav>

        <div className="flex items-center gap-3">
          <UserButton afterSignOutUrl="/" />
          <div className="hidden md:flex flex-col text-left">
            <span className="text-label-md font-semibold text-on-surface">{user?.fullName || 'Collaborateur'}</span>
            <span className="text-body-sm text-on-surface-variant">Employé</span>
          </div>
        </div>
      </div>
    </header>
  )
}
