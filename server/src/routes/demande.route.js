import express from 'express'
import { getAuth } from '@clerk/express'
import {
  getAllDemandes,
  getMyDemandes,
  createDemande,
  updateDemandeStatus
} from '../controllers/demande.controller.js'
import { requireAdmin } from '../middleware/role.middleware.js'

const router = express.Router()

const requireAuth = (req, res, next) => {
  const { userId } = getAuth(req)
  if (!userId) return res.status(401).json({ success: false, message: 'Non autorisé' })
  next()
}

router.get('/', requireAuth, requireAdmin, getAllDemandes)
router.get('/my', requireAuth, getMyDemandes)
router.post('/', requireAuth, createDemande)
router.put('/:id/status', requireAuth, requireAdmin, updateDemandeStatus)
router.patch('/:id', requireAuth, requireAdmin, updateDemandeStatus)

export default router

