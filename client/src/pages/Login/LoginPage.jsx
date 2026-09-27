import React from 'react'
import LeftPanel from '../../components/Login/LeftPanel/LeftPanel'
import RightPanel from '../../components/Login/RightPanel/RightPanel'
import '../../styles/login/login.scss'

export default function LoginPage() {
  return (
    <div className="flex-1 min-h-screen w-full flex flex-col lg:flex-row bg-surface text-on-surface antialiased">
      <LeftPanel />
      <RightPanel />
    </div>
  )
}
