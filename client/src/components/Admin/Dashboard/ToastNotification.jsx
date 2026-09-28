import React, { useState } from 'react'

export default function ToastNotification() {
  const [visible, setVisible] = useState(true)

  if (!visible) return null

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-4 py-3 bg-inverse-surface text-inverse-on-surface rounded-xl shadow-lg border border-outline/30 animate-bounce duration-1000">
      <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-on-secondary shrink-0">
        <span className="material-symbols-outlined text-[18px]">mark_email_read</span>
      </div>

      <div className="flex flex-col pr-2">
        <span className="text-label-md font-label-md font-semibold text-inverse-on-surface">
          Automatisation active
        </span>
        <span className="text-body-sm font-body-sm text-inverse-on-surface/80">
          Notification envoyée automatiquement via Resend à la validation.
        </span>
      </div>

      <button
        aria-label="Fermer la notification"
        onClick={() => setVisible(false)}
        className="text-inverse-on-surface/60 hover:text-inverse-on-surface ml-2 cursor-pointer"
      >
        <span className="material-symbols-outlined text-[18px]">close</span>
      </button>
    </div>
  )
}
