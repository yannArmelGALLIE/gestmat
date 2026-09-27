import React from 'react'

export default function RightHeader() {
  return (
    <div className="mb-8 text-center sm:text-left">
      <div className="inline-flex lg:hidden items-center gap-2.5 mb-6">
        <div className="w-8 h-8 rounded-lg bg-primary-container text-on-primary flex items-center justify-center">
          <span className="material-symbols-outlined text-[20px]">devices</span>
        </div>
        <span className="font-headline-sm text-headline-sm font-bold text-primary-container">
          GestMat
        </span>
      </div>
      <h2 className="font-headline-md text-headline-md font-bold text-on-surface tracking-tight">
        Portail d'authentification unique
      </h2>
      <p className="mt-1 font-body-md text-body-md text-on-surface-variant">
        Accédez à GestMat en vous identifiant via le système sécurisé de votre entreprise.
      </p>
    </div>
  )
}
