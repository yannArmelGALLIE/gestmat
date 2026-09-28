import React from 'react'

const STATUS_CONFIG = {
  EN_ATTENTE: { label: 'En attente', bg: 'bg-[#FFFBEB]', text: 'text-[#92400E]', border: 'border-[#FDE68A]' },
  ACCEPTEE: { label: 'Acceptée', bg: 'bg-[#ECFDF5]', text: 'text-[#065F46]', border: 'border-[#A7F3D0]' },
  REFUSEE: { label: 'Refusée', bg: 'bg-[#FFF1F2]', text: 'text-[#9F1239]', border: 'border-[#FECDD3]' }
}

export default function UserRequestRow({ demande }) {
  const conf = STATUS_CONFIG[demande.statut] || STATUS_CONFIG.EN_ATTENTE
  const dateFormatted = new Date(demande.createdAt).toLocaleDateString('fr-FR', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  })

  return (
    <tr className="hover:bg-surface/50 transition border-b border-outline-variant/40">
      <td className="py-3.5 px-4 font-semibold text-on-surface">
        {demande.materiel?.nom || 'Matériel'}
      </td>
      <td className="py-3.5 px-4 text-body-sm text-on-surface-variant font-code">
        {demande.materiel?.categorie || 'Équipement'}
      </td>
      <td className="py-3.5 px-4 text-body-sm text-on-surface max-w-xs truncate" title={demande.motif}>
        {demande.motif}
      </td>
      <td className="py-3.5 px-4 text-body-sm text-on-surface-variant">
        {dateFormatted}
      </td>
      <td className="py-3.5 px-4 text-right">
        <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-label-sm font-semibold border ${conf.bg} ${conf.text} ${conf.border}`}>
          {conf.label}
        </span>
      </td>
    </tr>
  )
}
