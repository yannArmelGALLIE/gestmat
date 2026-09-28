import prisma from '../../lib/prisma.js'
import { sendDemandeStatusEmail } from '../services/email.service.js'

export const updateDemandeStatus = async (req, res) => {
  try {
    const { id } = req.params
    const { statut, remarqueAdmin } = req.body

    if (!['ACCEPTEE', 'REFUSEE', 'EN_ATTENTE'].includes(statut)) {
      return res.status(400).json({ success: false, message: 'Statut invalide' })
    }

    const current = await prisma.demande.findUnique({ where: { id } })
    if (!current) return res.status(404).json({ success: false, message: 'Demande introuvable' })

    if (statut === 'ACCEPTEE' && current.statut !== 'ACCEPTEE') {
      await prisma.materiel.update({
        where: { id: current.materielId },
        data: { quantiteDispo: { decrement: 1 } }
      })
    }

    const updated = await prisma.demande.update({
      where: { id },
      data: { statut, remarqueAdmin },
      include: { user: true, materiel: true }
    })

    const admins = await prisma.user.findMany({
      where: { role: 'ADMIN' },
      select: { email: true }
    })

    await sendDemandeStatusEmail({
      userEmail: updated.user?.email,
      userName: `${updated.user?.prenom || ''} ${updated.user?.nom || ''}`.trim(),
      materialName: updated.materiel?.nom || 'Équipement',
      statut,
      remarque: remarqueAdmin,
      adminEmails: admins.map((admin) => admin.email)
    })

    res.status(200).json({ success: true, data: updated })
  } catch (error) {
    console.error('Erreur mise à jour statut demande :', error)
    res.status(500).json({ success: false, message: 'Erreur serveur' })
  }
}
