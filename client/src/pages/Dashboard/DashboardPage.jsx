import React, { useState } from 'react'
import AdminNavbar from '../../components/Admin/Navbar/AdminNavbar'
import AdminSidebar from '../../components/Admin/Sidebar/AdminSidebar'
import AdminDashboard from '../../components/Admin/Dashboard/AdminDashboard'
import { useAdminData } from '../../hooks/useAdminData'

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('dashboard')
  const [showAddModal, setShowAddModal] = useState(false)
  const data = useAdminData()
  const pendingCount = data.demandes.filter((d) => d.statut === 'EN_ATTENTE').length

  return (
    <div className="min-h-full flex flex-col font-body-md text-on-surface antialiased bg-background">
      <AdminNavbar />
      <div className="flex-1 flex w-full">
        <AdminSidebar
          activeTab={activeTab}
          onTabChange={setActiveTab}
          onNewRequest={() => setShowAddModal(true)}
          pendingCount={pendingCount}
        />
        <main className="flex-1 ml-64 p-6 lg:p-8 overflow-y-auto">
          <AdminDashboard
            activeTab={activeTab}
            adminData={data}
            showAddModal={showAddModal}
            onCloseAddModal={() => setShowAddModal(false)}
            onOpenAddModal={() => setShowAddModal(true)}
          />
        </main>
      </div>
    </div>
  )
}
