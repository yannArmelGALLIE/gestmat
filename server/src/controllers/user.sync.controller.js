import { getAuth } from '@clerk/express'
import prisma from '../../lib/prisma.js'

export const syncUser = async (req, res) => {
  try {
    const { userId } = getAuth(req)
    const { email, nom, prenom } = req.body
    if (!userId) return res.status(401).json({ success: false, message: 'Non autorisé' })

    const adminEmails = (process.env.ADMIN_EMAILS || 'koffi1gallie@gmail.com')
      .split(',')
      .map((adminEmail) => adminEmail.trim().toLowerCase())
      .filter(Boolean)
    const isAdmin = adminEmails.includes(email?.toLowerCase()) || (email && email.toLowerCase().includes('admin'))

    let user = await prisma.user.findUnique({ where: { id: userId } })
    if (user) {
      user = await prisma.user.update({
        where: { id: userId },
        data: { email: email || user.email, nom, prenom, role: isAdmin ? 'ADMIN' : user.role }
      })
    } else {
      const existing = email ? await prisma.user.findUnique({ where: { email } }) : null
      if (existing) await prisma.user.delete({ where: { id: existing.id } })
      user = await prisma.user.create({
        data: {
          id: userId,
          email: email || `${userId}@gestmat.ci`,
          nom: nom || '',
          prenom: prenom || '',
          role: (isAdmin || existing?.role === 'ADMIN') ? 'ADMIN' : 'USER'
        }
      })
    }

    res.status(200).json({ success: true, user })
  } catch (error) {
    console.error('Erreur synchronisation utilisateur :', error)
    res.status(500).json({ success: false, message: 'Erreur serveur' })
  }
}
