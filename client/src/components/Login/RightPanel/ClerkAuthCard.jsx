import React from 'react'
import { SignInButton } from '@clerk/clerk-react'

export default function ClerkAuthCard() {
  return (
    <div className="py-4 flex flex-col items-center text-center space-y-5">
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-container-low border border-outline-variant/60 font-label-sm text-label-sm text-on-surface">
        <span className="w-2 h-2 rounded-full bg-secondary shrink-0" />
        <span className="font-medium">
          Sécurisé par <strong className="font-semibold text-primary-container">Clerk</strong>
        </span>
      </div>
      <div className="w-full max-w-sm">
        <SignInButton mode="modal">
          <button
            type="button"
            className="w-full py-3 px-5 bg-primary-container hover:bg-primary text-on-primary font-title-sm text-title-sm rounded-xl shadow-sm hover:shadow transition-all duration-150 active:scale-[0.98] flex items-center justify-center gap-2.5 cursor-pointer"
          >
            <span className="material-symbols-outlined text-[20px]">lock</span>
            <span>Se connecter avec Clerk</span>
            <span className="material-symbols-outlined text-[18px] ml-1">arrow_forward</span>
          </button>
        </SignInButton>
      </div>
      <p className="font-body-sm text-body-sm text-on-surface-variant max-w-xs leading-relaxed">
        Vous serez redirigé vers l'écran d'authentification sécurisé Clerk (SSO d'entreprise ou email).
      </p>
    </div>
  )
}
