import prisma from '../../lib/prisma.js'

export const getMaterials = async (req, res) => {
  try {
    const materials = await prisma.materiel.findMany({ orderBy: { createdAt: 'desc' } })
    res.status(200).json({ success: true, data: materials })
  } catch (error) {
    console.error('Erreur récupération matériels :', error)
    res.status(500).json({ success: false, message: 'Erreur serveur' })
  }
}

export const getMaterialById = async (req, res) => {
  try {
    const { id } = req.params
    const material = await prisma.materiel.findUnique({ where: { id } })
    if (!material) return res.status(404).json({ success: false, message: 'Matériel non trouvé' })
    res.status(200).json({ success: true, data: material })
  } catch (error) {
    console.error('Erreur récupération matériel :', error)
    res.status(500).json({ success: false, message: 'Erreur serveur' })
  }
}
