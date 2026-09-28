import React from 'react'

export default function RowActions({ requestId, isOutOfStock, onAccept, onReject }) {
  return (
    <div className="flex items-center justify-end gap-2">
      {!isOutOfStock ? (
        <button
          onClick={() => onAccept && onAccept(requestId)}
          className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-secondary text-on-secondary hover:bg-secondary/90 text-label-md font-label-md transition-colors shadow-sm cursor-pointer"
          title="Valider et assigner"
        >
          <span className="material-symbols-outlined text-[16px]">check</span>
          <span>Accepter</span>
        </button>
      ) : (
        <button
          className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg border border-outline-variant bg-surface-container text-on-surface-variant hover:text-on-surface text-label-md font-label-md transition-colors cursor-pointer"
          title="Commander d'abord avant approbation"
        >
          <span className="material-symbols-outlined text-[16px]">shopping_cart</span>
          <span>Commander</span>
        </button>
      )}
      <button
        onClick={() => onReject && onReject(requestId)}
        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg border border-[#FECDD3] bg-[#FFF1F2] text-[#E11D48] hover:bg-[#FFE4E6] text-label-md font-label-md transition-colors cursor-pointer"
        title="Refuser la demande"
      >
        <span className="material-symbols-outlined text-[16px]">close</span>
        <span>Refuser</span>
      </button>
      <button className="p-1.5 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low rounded-lg transition-colors cursor-pointer">
        <span className="material-symbols-outlined text-[18px]">more_vert</span>
      </button>
    </div>
  )
}
