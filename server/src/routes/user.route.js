import express from 'express';
import { requireAuth } from '../middleware/auth.middleware.js';
import { getProfile, syncUser } from '../controllers/user.controller.js';

const router = express.Router();

// Synchroniser / créer l'utilisateur Clerk dans PostgreSQL
router.post('/sync', requireAuth, syncUser);

// Récupérer le profil complet (rôle ADMIN/USER + historique des demandes)
router.get('/me', requireAuth, getProfile);

export default router;