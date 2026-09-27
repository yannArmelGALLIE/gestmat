import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { ClerkProvider } from '@clerk/clerk-react'
import App from './App.jsx'
import './styles/main.scss'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
    throw new Error("Clé VITE_CLERK_PUBLISHABLE_KEY manquante dans client/.env")
}

ReactDOM.createRoot(document.getElementById('root')).render(
    React.createElement(
        StrictMode,
        null,
        React.createElement(
            ClerkProvider,
            { publishableKey: PUBLISHABLE_KEY, afterSignOutUrl: "/" },
            React.createElement(App)
        )
    )
)