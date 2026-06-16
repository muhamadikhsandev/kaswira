"use client"

import React, { useState } from 'react'
import Sidebar from '@/components/admin/Sidebar'

export default function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[#020617] text-white flex flex-col md:flex-row relative">
      {/* Mobile Top Header with Hamburger */}
      <div className="md:hidden flex items-center justify-between p-4 bg-slate-950/80 backdrop-blur-md border-b border-white/5 sticky top-0 z-30 flex-shrink-0">
        <div className="flex items-center gap-2">
          <span className="text-xs font-black text-[#FF6600] tracking-wider uppercase">Kaswira Admin</span>
        </div>
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-lg focus:outline-none transition-colors"
          aria-label="Toggle Menu"
        >
          {sidebarOpen ? (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Sidebar Component */}
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />

      {/* Main Content Pane */}
      <div className="flex-1 flex flex-col min-h-screen overflow-x-hidden md:pl-64">
        {children}
      </div>
    </div>
  )
}
