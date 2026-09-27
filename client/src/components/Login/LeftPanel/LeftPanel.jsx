import React from 'react'
import BrandHeader from './BrandHeader'

export default function LeftPanel() {
  return (
    <section className="lg:w-1/2 bg-surface-container-lowest p-8 lg:p-16 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-outline-variant/40 custom-gradient-mesh relative overflow-hidden">
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-primary-fixed-dim/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-surface-variant/40 rounded-full blur-2xl pointer-events-none" />
      <BrandHeader />
    </section>
  )
}
