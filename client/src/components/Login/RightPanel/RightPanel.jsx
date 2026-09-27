import React from 'react'
import RightHeader from './RightHeader'
import ClerkAuthCard from './ClerkAuthCard'

export default function RightPanel() {
  return (
    <section className="lg:w-1/2 bg-surface p-6 sm:p-12 lg:p-16 flex flex-col justify-center items-center">
      <div className="w-full max-w-md">
        <RightHeader />
        <div className="bg-surface-container-lowest rounded-xl border border-outline-variant/60 shadow-sm p-6 sm:p-8 relative">
          <ClerkAuthCard />
        </div>
      </div>
    </section>
  )
}
