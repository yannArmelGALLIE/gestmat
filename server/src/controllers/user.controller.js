import prisma from '../../lib/prisma.js';

export const getProfile = async (req, res) => {
    try {
        const { userId } = req.auth;

        let user = await prisma.user.findUnique({
            where: { id: userId },
        });

        res.status(200).json({
            success: true,
            user,
        });
    } catch (error) {
        console.error("Erreur lors de la récupération du profil :", error);
        res.status(500).json({ success: false, message: "Erreur serveur" });
    }
};