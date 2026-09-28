import { getAuth } from '@clerk/express'
import prisma from '../../lib/prisma.js'

export const getAllDemandes = async (req, res) => {
  try {
    const demandes = await prisma.demande.findMany({
      include: {
        user: { select: { id: true, nom: true, prenom: true, email: true } },
        materiel: { select: { id: true, nom: true, categorie: true, quantiteDispo: true, quantiteTotale: true, imageUrl: true } }
      },
      orderBy: { createdAt: 'desc' }
    })
    res.status(200).json({ success: true, data: demandes })
  } catch (error) {
    console.error('Erreur récupération toutes demandes :', error)
    res.status(500).json({ success: false, message: 'Erreur serveur' })
  }
}

export const getMyDemandes = async (req, res) => {
  try {
    const { userId } = getAuth(req)
    if (!userId) return res.status(401).json({ success: false, message: 'Non autorisé' })

    const demandes = await prisma.demande.findMany({
      where: { userId },
      include: {
        materiel: { select: { id: true, nom: true, categorie: true, quantiteDispo: true, imageUrl: true } }
      },
      orderBy: { createdAt: 'desc' }
    })
    res.status(200).json({ success: true, data: demandes })
  } catch (error) {
    console.error('Erreur récupération mes demandes :', error)
    res.status(500).json({ success: false, message: 'Erreur serveur' })
  }
}
