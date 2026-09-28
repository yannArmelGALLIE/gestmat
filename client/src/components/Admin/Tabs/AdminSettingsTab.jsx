import React from 'react'

export default function AdminSettingsTab() {
  return (
    <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant space-y-4 max-w-xl">
      <h2 className="text-title-lg font-bold text-on-surface">Paramètres du Système</h2>
      <p className="text-body-sm text-on-surface-variant">Gestion de parc et demandes GestMat IT v1.0.0.</p>
      <div className="pt-2 border-t border-outline-variant/60 text-body-sm">
        <p className="font-semibold text-on-surface">Notifications Resend :</p>
        <p className="text-on-surface-variant">Emails automatiques activés pour chaque nouvelle demande et changement de statut.</p>
      </div>
    </div>
  )
}
