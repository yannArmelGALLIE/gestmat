# 📦 GestMat - Plateforme de Digitalisation et Gestion du Matériel Informatique

**GestMat** est une application web 3-tiers moderne conçue pour digitaliser et simplifier le processus de gestion et de réservation du matériel informatique au sein d'une organisation. Elle permet aux employés de consulter les équipements disponibles et d'effectuer des demandes, tandis que les administrateurs contrôlent le parc et valident ou refusent les requêtes.

---

## 🚀 Stack Technique

| Composant | Technologie / Service | Rôle & Hébergement |
|-----------|----------------------|-------------------|
| **Frontend** | React.js (Vite) | Interface utilisateur réactive, déployée sur Vercel |
| **Backend** | Node.js / Express | API REST & Logique métier, déployée sur Railway |
| **Base de données** | PostgreSQL (Neon DB) | Stockage persistant et managé Serverless |
| **Authentification** | Clerk | Gestion des utilisateurs, JWT et RBAC (Rôles Utilisateur / Admin) |
| **Emailing** | Resend API | Notifications automatiques par email lors du traitement des demandes |
| **ORM / Query** | Prisma / Drizzle ORM | Sécurisation et gestion des requêtes SQL |

---

## ✨ Fonctionnalités

### 👤 Espace Utilisateur (Demandeur)

- **Consulter le catalogue** : Visualiser la liste des matériels informatiques disponibles
- **Soumettre une demande** : Faire une demande de matériel spécifiant le besoin
- **Suivi en temps réel** : Consulter la liste et le statut de ses propres demandes (En attente, Acceptée, Refusée)

### 🛠️ Espace Administrateur

- **Gestion du parc** : Ajouter et enregistrer de nouveaux matériels informatiques
- **Vue d'ensemble** : Consulter l'intégralité des demandes de tous les utilisateurs
- **Traitement des demandes** : Accepter ou refuser chaque demande reçue
- **Notification automatique** : L'action d'acceptation ou de refus déclenche l'envoi d'un email d'information au demandeur

---

## 🔄 Schéma et Flux des Demandes

[Diagram du flux: Utilisateur → API → BD → Admin → Traitement → Email]

---

## 🔒 Mesures de Sécurité Appliquées

### Rate Limiting
- Limitation globale à 100 requêtes par 15 minutes par IP via `express-rate-limit`
- Limitation renforcée à 5 soumissions par minute pour les demandes

### Authentification & RBAC
- Validation JWT sur le Backend avec `@clerk/express`
- Vérification du rôle ADMIN pour restreindre les routes sensibles (`/api/admin/*`)

### Protection SQL & IDOR
- Utilisation d'ORM pour paramétrer automatiquement les requêtes SQL
- Filtrage par identifiant utilisateur unique (`req.auth.userId`)

### Sécurité HTTP & CORS
- Masquage de la signature serveur via `helmet`
- CORS restreint à l'origine Vercel du Frontend

---

## 📁 Structure du Projet (Monorepo)

```
gestmat/
├── client/ # Frontend React.js
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ └── services/
│ └── vite.config.js
├── server/ # Backend Node.js / Express
│ ├── src/
│ │ ├── controllers/
│ │ ├── middlewares/
│ │ ├── routes/
│ │ └── utils/
│ └── prisma/
└── README.md
```

---

## 🛠️ Variables d'Environnement

**Backend (`server/.env`)**
```env
PORT=5000
DATABASE_URL="postgresql://user:password@ep-cool-db.neon.tech/gestmat?sslmode=require"
CLERK_SECRET_KEY="sk_test_..."
CLERK_PUBLISHABLE_KEY="pk_test_..."
RESEND_API_KEY="re_..."
FRONTEND_URL="https://gestmat.vercel.app"
```

**Frontend (`client/.env`)**
```env
VITE_CLERK_PUBLISHABLE_KEY="pk_test_..."
VITE_API_BASE_URL="https://gestmat-production.up.railway.app/api"
```

---

## 💻 Installation Locale

**1. Cloner le projet**
```bash
git clone https://github.com/votre-compte/gestmat.git
cd gestmat
```

**2. Backend**
```bash
cd server
npm install
npx prisma db push
npm run dev
```

**3. Frontend**
```bash
cd ../client
npm install
npm run dev
```

---

## 🌐 Déploiement

### Backend (Railway)
1. Nouveau projet sur Railway connecté à GitHub
2. Root Directory: `server`
3. Variables d'environnement (DATABASE_URL, CLERK_SECRET_KEY, RESEND_API_KEY)
4. Déployer

### Frontend (Vercel)
1. Importer repo GitHub dans Vercel
2. Root Directory: `client`
3. VITE_API_BASE_URL → URL Railway du Backend
4. Déployer

---

## 🧪 Tests de Sécurité et Qualité

- **Analyse dépendances (SCA)** : `npm audit` ou Dependabot
- **Test d'API & RBAC** : Endpoints `/api/admin` via Postman (vérification 403)
- **Analyse DAST** : OWASP ZAP