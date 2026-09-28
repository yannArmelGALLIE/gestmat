import React from 'react'
import { useClerk } from '@clerk/clerk-react'

export default function SidebarFooter() {
  const { signOut } = useClerk()

  return (
    <div className="border-t border-outline-variant pt-3 space-y-1">
      <a
        href="#"
        className="flex items-center gap-3 px-3 py-2 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-colors text-body-md font-body-md"
      >
        <span className="material-symbols-outlined text-[20px]">help</span>
        <span>Documentation</span>
      </a>

      <button
        onClick={() => signOut()}
        className="w-full text-left flex items-center gap-3 px-3 py-2 rounded-lg text-error hover:bg-error-container/30 transition-colors text-body-md font-body-md cursor-pointer"
      >
        <span className="material-symbols-outlined text-[20px]">logout</span>
        <span>Déconnexion</span>
      </button>
    </div>
  )
}
