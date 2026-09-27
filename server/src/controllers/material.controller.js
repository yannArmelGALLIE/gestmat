import prisma from '../../lib/prisma.js'

export const createMaterial = async (req, res) => {
    try {
        const { nom, categorie, description, quantiteTotale, quantiteDispo, imageUrl } = req.body

        // prisma.materiel (en français, comme dans schema.prisma)
        const newMaterial = await prisma.materiel.create({
            data: {
                nom,
                categorie,
                description,
                quantiteTotale: quantiteTotale ? parseInt(quantiteTotale, 10) : 1,
                quantiteDispo: quantiteDispo ? parseInt(quantiteDispo, 10) : 1,
                imageUrl
            }
        })

        res.status(201).json({ success: true, data: newMaterial })
    } catch (error) {
        console.error("Erreur création matériel :", error)
        res.status(500).json({ success: false, message: "Erreur serveur" })
    }
}