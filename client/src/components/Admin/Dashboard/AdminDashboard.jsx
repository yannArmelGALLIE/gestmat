import React from 'react'
import DashboardHeader from './DashboardHeader'
import KpiGrid from './KpiGrid'
import RequestsTable from '../Requests/RequestsTable'
import CriticalStock from './CriticalStock'
import AdminMaterialsList from '../Inventory/AdminMaterialsList'
import MaterialForm from '../../Material/MaterialForm'
import AdminRequestsTab from '../Tabs/AdminRequestsTab'
import AdminInventoryTab from '../Tabs/AdminInventoryTab'
import AdminLogsTab from '../Tabs/AdminLogsTab'
import AdminSettingsTab from '../Tabs/AdminSettingsTab'

export default function AdminDashboard({ activeTab = 'dashboard', adminData, showAddModal, onCloseAddModal, onOpenAddModal }) {
  const { demandes, materials, loading, loadData, handleAction, handleDeleteMaterial } = adminData

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
          <div className="relative w-full max-w-lg bg-surface-container-lowest rounded-2xl p-6 shadow-2xl border border-outline-variant">
            <button onClick={onCloseAddModal} className="absolute top-4 right-4 text-on-surface-variant p-1 rounded-lg cursor-pointer">
              <span className="material-symbols-outlined text-[20px]">close</span>
            </button>
            <MaterialForm onSuccess={() => { onCloseAddModal(); loadData() }} />
          </div>
        </div>
      )}

      {activeTab === 'dashboard' && (
        <>
          <DashboardHeader onAddMaterialClick={onOpenAddModal} />
          <KpiGrid materials={materials} demandes={demandes} />
          <RequestsTable demandes={demandes} onAction={handleAction} loading={loading} />
          <CriticalStock materials={materials} />
          <AdminMaterialsList materials={materials} onDelete={handleDeleteMaterial} />
        </>
      )}

      {activeTab === 'requests' && <AdminRequestsTab demandes={demandes} onAction={handleAction} loading={loading} />}
      {activeTab === 'inventory' && <AdminInventoryTab materials={materials} onAddClick={onOpenAddModal} onDelete={handleDeleteMaterial} />}
      {activeTab === 'logs' && <AdminLogsTab demandes={demandes} loading={loading} />}
      {activeTab === 'settings' && <AdminSettingsTab />}
    </div>
  )
}
