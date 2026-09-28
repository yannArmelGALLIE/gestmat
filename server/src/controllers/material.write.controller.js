import prisma from '../../lib/prisma.js'

export const createMaterial = async (req, res) => {
  try {
    const { nom, categorie, description, quantiteTotale, quantiteDispo, imageUrl } = req.body
    const newMaterial = await prisma.materiel.create({
      data: {
        nom, categorie, description, imageUrl,
        quantiteTotale: quantiteTotale ? parseInt(quantiteTotale, 10) : 1,
        quantiteDispo: quantiteDispo ? parseInt(quantiteDispo, 10) : 1
      }
    })
    res.status(201).json({ success: true, data: newMaterial })
  } catch (error) {
    res.status(500).json({ success: false, message: 'Erreur serveur' })
  }
}

export const updateMaterial = async (req, res) => {
  try {
    const { id } = req.params
    const { nom, categorie, description, quantiteTotale, quantiteDispo, imageUrl } = req.body
    const updated = await prisma.materiel.update({
      where: { id },
      data: {
        nom, categorie, description, imageUrl,
        quantiteTotale: quantiteTotale ? parseInt(quantiteTotale, 10) : undefined,
        quantiteDispo: quantiteDispo ? parseInt(quantiteDispo, 10) : undefined
      }
    })
    res.status(200).json({ success: true, data: updated })
  } catch (error) {
    res.status(500).json({ success: false, message: 'Erreur modification' })
  }
}

export const deleteMaterial = async (req, res) => {
  try {
    await prisma.materiel.delete({ where: { id: req.params.id } })
    res.status(200).json({ success: true, message: 'Matériel supprimé avec succès' })
  } catch (error) {
    res.status(500).json({ success: false, message: 'Erreur suppression' })
  }
}
