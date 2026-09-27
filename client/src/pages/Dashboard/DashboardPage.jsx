import React from 'react'
import Navbar from '../../components/Navbar'
import MaterialForm from '../../components/Material/MaterialForm'

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-surface">
      <Navbar />
      <main className="page-container">
        <MaterialForm />
      </main>
    </div>
  )
}
