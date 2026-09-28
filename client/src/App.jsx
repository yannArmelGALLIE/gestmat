import React from 'react'
import { SignedIn, SignedOut } from '@clerk/clerk-react'
import { useSyncUser } from './hooks/useSyncUser'
import { useUserProfile } from './hooks/useUserProfile'
import LoginPage from './pages/Login/LoginPage'
import DashboardPage from './pages/Dashboard/DashboardPage'
import UserDashboardPage from './pages/UserDashboard/UserDashboardPage'

function AuthenticatedApp() {
  useSyncUser()
  const { role, loading } = useUserProfile()

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background text-on-surface">
        <span className="material-symbols-outlined text-[32px] text-primary animate-spin mr-3">progress_activity</span>
        <span className="text-body-lg font-medium">Chargement de votre espace GestMat...</span>
      </div>
    )
  }

  return role === 'ADMIN' ? <DashboardPage /> : <UserDashboardPage />
}

export default function App() {
  return (
    <>
      <SignedOut>
        <LoginPage />
      </SignedOut>
      <SignedIn>
        <AuthenticatedApp />
      </SignedIn>
    </>
  )
}