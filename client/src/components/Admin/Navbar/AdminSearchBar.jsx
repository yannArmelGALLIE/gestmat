import React from 'react'

export default function AdminSearchBar() {
  return (
    <div className="hidden md:flex flex-1 max-w-md mx-8">
      <div className="relative w-full">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-outline">
          <span className="material-symbols-outlined text-[18px]">search</span>
        </div>
        <input
          type="text"
          placeholder="Rechercher équipement, numéro de série, collaborateur..."
          className="block w-full pl-9 pr-3 py-1.5 bg-surface border border-outline-variant rounded-lg text-body-sm font-body-sm text-on-surface placeholder:text-outline focus:outline-none focus:border-primary-container focus:ring-2 focus:ring-primary-container/10 transition-colors"
        />
        <div className="absolute inset-y-0 right-0 pr-2.5 flex items-center pointer-events-none">
          <kbd className="px-1.5 py-0.5 text-code font-code text-on-surface-variant bg-surface-container-low rounded border border-outline-variant">
            ⌘K
          </kbd>
        </div>
      </div>
    </div>
  )
}
