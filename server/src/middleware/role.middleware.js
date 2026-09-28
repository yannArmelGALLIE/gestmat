import { getAuth } from '@clerk/express'
import prisma from '../../lib/prisma.js'

export const requireAdmin = async (req, res, next) => {
    try {
        const { userId } = getAuth(req)

        if (!userId) {
            return res.status(401).json({ success: false, message: 'Non authentifié' })
        }

        const user = await prisma.user.findUnique({
            where: { id: userId }
        })

        if (!user || user.role !== 'ADMIN') {
            return res.status(403).json({ success: false, message: 'Accès interdit : Droits administrateur requis' })
        }

        next()
    } catch (error) {
        console.error('Erreur vérification rôle :', error)
        res.status(500).json({ success: false, message: 'Erreur serveur' })
    }
}