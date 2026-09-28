import express from 'express'
import { getAuth } from '@clerk/express'
import {
    getMaterials,
    getMaterialById,
    createMaterial,
    updateMaterial,
    deleteMaterial
} from '../controllers/material.controller.js'
import { requireAdmin } from '../middleware/role.middleware.js'

const router = express.Router()

// Middleware de vérification d'authentification de base
const requireAuth = (req, res, next) => {
    const { userId } = getAuth(req)
    if (!userId) {
        return res.status(401).json({ success: false, message: 'Non autorisé' })
    }
    next()
}

// Routes accessibles par tout utilisateur connecté (USER & ADMIN)
router.get('/', requireAuth, getMaterials)
router.get('/:id', requireAuth, getMaterialById)

// Routes réservées uniquement aux ADMINS
router.post('/', requireAuth, requireAdmin, createMaterial)
router.put('/:id', requireAuth, requireAdmin, updateMaterial)
router.delete('/:id', requireAuth, requireAdmin, deleteMaterial)

export default router