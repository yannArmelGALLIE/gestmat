import { getAuth } from '@clerk/express';
import prisma from '../../lib/prisma.js';

export const getProfile = async (req, res) => {
  try {
    const { userId } = getAuth(req);

    if (!userId) {
      return res.status(401).json({ success: false, message: "Non autorisé" });
    }

    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        demandes: {
          include: {
            materiel: {
              select: { id: true, nom: true, categorie: true, imageUrl: true }
            }
          },
          orderBy: { createdAt: 'desc' }
        }
      }
    });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "Utilisateur non trouvé dans PostgreSQL. Veuillez vous synchroniser."
      });
    }

    res.status(200).json({ success: true, user });
  } catch (error) {
    console.error("Erreur lors de la récupération du profil :", error);
    res.status(500).json({ success: false, message: "Erreur serveur" });
  }
};
