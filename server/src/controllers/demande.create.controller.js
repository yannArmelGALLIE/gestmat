import { getAuth } from '@clerk/express'
import prisma from '../../lib/prisma.js'
import { sendDemandeCreatedEmail } from '../services/email.service.js'

export const createDemande = async (req, res) => {
  try {
    const { userId } = getAuth(req)
    const { materielId, motif } = req.body
    if (!userId) return res.status(401).json({ success: false, message: 'Non autorisé' })
    if (!materielId || !motif) return res.status(400).json({ success: false, message: 'Champs requis' })

    const materiel = await prisma.materiel.findUnique({ where: { id: materielId } })
    if (!materiel) return res.status(404).json({ success: false, message: 'Matériel introuvable' })

    let user = await prisma.user.findUnique({ where: { id: userId } })
    if (!user) {
      user = await prisma.user.create({
        data: { id: userId, email: `${userId}@gestmat.ci`, nom: 'Utilisateur', prenom: 'GestMat', role: 'USER' }
      })
    }

    const demande = await prisma.demande.create({
      data: { userId, materielId, motif, statut: 'EN_ATTENTE' },
      include: { materiel: true, user: true }
    })

    const admins = await prisma.user.findMany({
      where: { role: 'ADMIN' },
      select: { email: true }
    })

    await sendDemandeCreatedEmail({
      userEmail: user.email,
      userName: `${user.prenom || ''} ${user.nom || ''}`.trim(),
      materialName: materiel.nom,
      motif,
      adminEmails: admins.map((admin) => admin.email)
    })

    res.status(201).json({ success: true, data: demande })
  } catch (error) {
    console.error('Erreur création demande :', error)
    res.status(500).json({ success: false, message: 'Erreur serveur' })
  }
}
