import express from 'express'
import { createMaterial } from '../controllers/material.controller.js'
import { requireAuth } from '../middleware/auth.middleware.js'

const router = express.Router()

router.post('/', requireAuth, createMaterial)

export default router
