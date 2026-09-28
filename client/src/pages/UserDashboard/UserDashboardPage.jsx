import React, { useState } from 'react'
import UserNavbar from '../../components/User/Navbar/UserNavbar'
import UserDashboard from '../../components/User/Dashboard/UserDashboard'

export default function UserDashboardPage() {
  const [activeTab, setActiveTab] = useState('catalog')

  return (
    <div className="min-h-screen bg-background text-on-surface antialiased flex flex-col">
      <UserNavbar activeTab={activeTab} onTabChange={setActiveTab} />
      <main className="flex-1">
        <UserDashboard activeTab={activeTab} onTabChange={setActiveTab} />
      </main>
    </div>
  )
}
