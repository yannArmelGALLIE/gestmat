import React from 'react'
import { UserButton, useUser } from '@clerk/clerk-react'

export default function AdminUserMenu() {
  const { user } = useUser()

  return (
    <div className="flex items-center gap-4">
      <div className="relative">
        <button
          aria-label="Notifications"
          className="p-2 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low rounded-lg transition-colors relative"
        >
          <span className="material-symbols-outlined text-[22px]">notifications</span>
          <span className="absolute top-1.5 right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-error text-on-error text-code font-code text-[10px] font-bold">
            3
          </span>
        </button>
      </div>

      <button
        aria-label="Aide"
        className="p-2 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low rounded-lg transition-colors hidden sm:block"
      >
        <span className="material-symbols-outlined text-[22px]">help_outline</span>
      </button>

      <div className="h-6 w-px bg-outline-variant hidden sm:block" />

      <div className="flex items-center gap-3 pl-1">
        <UserButton afterSignOutUrl="/" />
        <div className="hidden lg:flex flex-col text-left">
          <span className="text-label-md font-label-md font-semibold text-on-surface">
            {user?.fullName || 'Lead IT Admin'}
          </span>
          <span className="text-body-sm font-body-sm text-on-surface-variant">
            Administrateur IT
          </span>
        </div>
      </div>
    </div>
  )
}
