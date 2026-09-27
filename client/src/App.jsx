import React from 'react'
import { SignedIn, SignedOut } from '@clerk/clerk-react'
import LoginPage from './pages/Login/LoginPage'
import DashboardPage from './pages/Dashboard/DashboardPage'

export default function App() {
  return (
    <>
      <SignedOut>
        <LoginPage />
      </SignedOut>
      <SignedIn>
        <DashboardPage />
      </SignedIn>
    </>
  )
}