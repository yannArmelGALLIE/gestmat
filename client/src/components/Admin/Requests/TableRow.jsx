import React from 'react'
import RequesterCell from './RequesterCell'
import RowActions from './RowActions'

export default function TableRow({ request, onAccept, onReject }) {
  const stockCount = request.materiel?.quantiteDispo ?? request.stockCount ?? 0
  const isOutOfStock = stockCount <= 0
  const materialName = request.materiel?.nom || request.materialName || 'Matériel'
  const userName = request.user ? `${request.user.prenom || ''} ${request.user.nom || ''}`.trim() : (request.userName || 'Utilisateur')
  const userEmail = request.user?.email || request.userEmail || ''
  const initials = userName.split(' ').filter(Boolean).map((n) => n[0]).join('').slice(0, 2).toUpperCase() || 'U'
  const dateFormatted = request.createdAt ? new Date(request.createdAt).toLocaleDateString('fr-FR') : (request.date || '')

  return (
    <tr className={`hover:bg-surface/50 transition-colors ${isOutOfStock ? 'bg-error-container/5' : ''}`}>
      <RequesterCell initials={initials} initialsBg="bg-primary-container" initialsColor="text-on-primary-container" userName={userName} userEmail={userEmail} />

      <td className="py-4 px-4">
        <div className="text-title-sm text-on-surface font-medium">{materialName}</div>
        <div className={`inline-flex items-center gap-1.5 text-body-sm font-medium mt-0.5 ${isOutOfStock ? 'text-error font-semibold' : 'text-secondary'}`}>
          <span className={`w-1.5 h-1.5 rounded-full ${isOutOfStock ? 'bg-error' : 'bg-secondary'}`} />
          <span>{isOutOfStock ? '0 (Rupture)' : `${stockCount} en stock`}</span>
        </div>
      </td>

      <td className="py-4 px-4 max-w-xs">
        <p className="text-body-sm text-on-surface line-clamp-2" title={request.motif}>{request.motif}</p>
      </td>

      <td className="py-4 px-4 text-body-sm text-on-surface font-medium">{dateFormatted}</td>

      <td className="py-4 px-4">
        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-label-sm font-medium ${request.statut === 'ACCEPTEE' ? 'bg-[#ECFDF5] text-[#065F46] border border-[#A7F3D0]' : request.statut === 'REFUSEE' ? 'bg-[#FFF1F2] text-[#9F1239] border border-[#FECDD3]' : 'bg-[#FFFBEB] text-[#92400E] border border-[#FDE68A]'}`}>
          {request.statut || 'EN_ATTENTE'}
        </span>
      </td>

      <td className="py-4 px-5 text-right">
        {request.statut === 'EN_ATTENTE' && (
          <RowActions requestId={request.id} isOutOfStock={isOutOfStock} onAccept={onAccept} onReject={onReject} />
        )}
      </td>
    </tr>
  )
}

