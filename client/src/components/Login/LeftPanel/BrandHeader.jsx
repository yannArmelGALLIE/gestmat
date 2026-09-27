import React from 'react'

export default function BrandHeader() {
  return (
    <div className="relative z-10">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-primary-container text-on-primary flex items-center justify-center shadow-sm shadow-primary-container/20">
          <span className="material-symbols-outlined text-[24px]">devices</span>
        </div>
        <div className="flex flex-col">
          <span className="font-headline-sm text-headline-sm font-bold text-primary-container tracking-tight">
            GestMat
          </span>
          <span className="font-label-sm text-label-sm text-on-surface-variant">
            Parc &amp; Matériel Entreprise
          </span>
        </div>
        <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded-full font-code text-code bg-surface-container-high text-primary font-medium border border-outline-variant/30">
          v2.4 LTS
        </span>
      </div>

      <div className="mt-12 lg:mt-16 max-w-lg">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-fixed/40 border border-secondary-fixed text-secondary font-label-md text-label-md mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
          SSO d'Entreprise &amp; Annuaire LDAP / SAML
        </div>
        <h1 className="font-headline-lg text-headline-lg font-bold text-on-surface tracking-tight">
          Simplifiez l'attribution et le suivi du matériel collaborateur
        </h1>
        <p className="mt-4 font-body-lg text-body-lg text-on-surface-variant">
          L'infrastructure moderne pour orchestrer les postes de travail, écrans 4K, kits nomades et périphériques IT avec traçabilité intégrale et approbation instantanée.
        </p>
      </div>
    </div>
  )
}
