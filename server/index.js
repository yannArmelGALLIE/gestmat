import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { clerkMiddleware } from '@clerk/express';

import userRoutes from './src/routes/user.route.js';
import materielRoutes from './src/routes/material.route.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Middleware global Clerk pour analyser les tokens de connexion
app.use(clerkMiddleware());

// Inscription des routes
app.use('/api/users', userRoutes);
app.use('/api/materials', materielRoutes);

app.get('/api/health', (req, res) => {
    res.json({ status: 'OK', message: 'Serveur GestMat opérationnel' });
});

app.listen(PORT, () => {
    console.log(`Serveur prêt sur http://localhost:${PORT}`);
});