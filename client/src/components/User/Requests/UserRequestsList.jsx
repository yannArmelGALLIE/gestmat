import React from 'react'
import UserRequestRow from './UserRequestRow'

export default function UserRequestsList({ demandes = [], loading = false }) {
  return (
    <div className="bg-surface-container-lowest rounded-xl border border-outline-variant shadow-sm overflow-hidden">
      <div className="p-5 border-b border-outline-variant">
        <h3 className="text-title-md font-bold text-on-surface">Historique de mes Demandes</h3>
        <p className="text-body-sm text-on-surface-variant">Suivez en direct l'approbation de vos demandes de matériel.</p>
      </div>

      {loading ? (
        <div className="p-6 text-center text-body-sm text-on-surface-variant">Chargement de vos demandes...</div>
      ) : demandes.length === 0 ? (
        <div className="p-8 text-center text-body-sm text-on-surface-variant">
          Vous n'avez soumis aucune demande pour l'instant. Rendez-vous dans le catalogue pour en faire une !
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface border-b border-outline-variant text-label-sm uppercase tracking-wider text-on-surface-variant">
                <th className="py-3 px-4">Équipement</th>
                <th className="py-3 px-4">Catégorie</th>
                <th className="py-3 px-4">Motif</th>
                <th className="py-3 px-4">Date</th>
                <th className="py-3 px-4 text-right">Statut</th>
              </tr>
            </thead>
            <tbody>
              {demandes.map((d) => (
                <UserRequestRow key={d.id} demande={d} />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
