import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { clerkMiddleware } from '@clerk/express';

import userRoutes from './src/routes/user.route.js';
import materielRoutes from './src/routes/material.route.js';
import demandeRoutes from './src/routes/demande.route.js';
import { requestLogger } from './src/middleware/logger.middleware.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(requestLogger);

// Middleware global Clerk pour analyser les tokens de connexion
app.use(clerkMiddleware());

// Inscription des routes
app.use('/api/users', userRoutes);
app.use('/api/materials', materielRoutes);
app.use('/api/demandes', demandeRoutes);

app.get('/api/health', (req, res) => {
    res.json({ status: 'OK', message: 'Serveur GestMat opérationnel' });
});

app.listen(PORT, () => {
    console.log(`Serveur prêt sur http://localhost:${PORT}`);
});