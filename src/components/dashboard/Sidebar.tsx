"use client"

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { createClient } from '@/utils/supabase/client'
import { toast } from 'sonner'
import { 
  LayoutDashboard, 
  ShoppingCart,
  Package, 
  Tags, 
  Wallet,
  History,
  LogOut, 
  User,
  X 
} from 'lucide-react'
import Logo from '@/components/landing/Logo'

interface SidebarProps {
  isOpen: boolean
  setIsOpen: (open: boolean) => void
}

export default function Sidebar({ isOpen, setIsOpen }: SidebarProps) {
  const pathname = usePathname()
  const router = useRouter()
  const supabase = createClient()
  const [userName, setUserName] = useState('Owner')
  const [userAvatar, setUserAvatar] = useState<string | null>(null)

  // Fetch owner profile
  useEffect(() => {
    const loadProfile = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession()
        if (session?.user) {
          const { data: profile } = await supabase
            .from('profiles')
            .select('full_name, avatar_url')
            .eq('id', session.user.id)
            .single()
          
          if (profile) {
            if (profile.full_name) setUserName(profile.full_name)
            if (profile.avatar_url) setUserAvatar(profile.avatar_url)
          } else {
            setUserName(session.user.email?.split('@')[0] || 'Owner')
          }
        }
      } catch (err) {
        console.error('Error loading owner sidebar profile:', err)
      }
    }
    loadProfile()
  }, [supabase])

  const handleLogout = async () => {
    try {
      const { error } = await supabase.auth.signOut()
      if (error) throw error
      
      toast.success('Berhasil keluar, sampai jumpa kembali!')
      router.push('/login')
      router.refresh()
    } catch (e: any) {
      toast.error(`Gagal keluar: ${e.message || 'Terjadi kesalahan'}`)
    }
  }

  const menuItems = [
    { name: 'Dashboard', path: '/dashboard', icon: <LayoutDashboard size={18} /> },
    { name: 'Aplikasi Kasir / POS', path: '/dashboard/kasir', icon: <ShoppingCart size={18} /> },
    { name: 'Manajemen Produk', path: '/dashboard/products', icon: <Package size={18} /> },
    { name: 'Kategori Barang', path: '/dashboard/categories', icon: <Tags size={18} /> },
    { name: 'Catatan Pengeluaran', path: '/dashboard/expenses', icon: <Wallet size={18} /> },
    { name: 'Riwayat Penjualan', path: '/dashboard/sales', icon: <History size={18} /> },
  ]

  return (
    <>
      {/* Mobile overlay background */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar aside */}
      <aside className={`fixed top-0 bottom-0 left-0 z-50 w-64 bg-slate-950/85 border-r border-white/5 backdrop-blur-xl flex flex-col justify-between transition-transform duration-300 ease-in-out md:translate-x-0 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="flex flex-col flex-1 py-6 overflow-hidden">
          {/* Header & Logo */}
          <div className="px-6 flex items-center justify-between mb-8 flex-shrink-0">
            <div className="scale-90 origin-left">
              <Logo />
            </div>
            <button 
              className="md:hidden text-slate-400 hover:text-white p-1 hover:bg-white/5 rounded-lg transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <X size={20} />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 px-4 space-y-1.5 overflow-y-auto scrollbar-thin scrollbar-thumb-white/5">
            {menuItems.map((item) => {
              const isActive = pathname === item.path
              return (
                <Link
                  key={item.name}
                  href={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3.5 rounded-xl text-sm font-bold tracking-wide transition-all group ${
                    isActive 
                      ? 'bg-[#FF6600] text-white shadow-[0_8px_20px_-6px_rgba(255,102,0,0.4)]' 
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span className={`transition-transform duration-300 group-hover:scale-110 ${
                    isActive ? 'text-white' : 'text-slate-400 group-hover:text-[#FF6600]'
                  }`}>
                    {item.icon}
                  </span>
                  <span>{item.name}</span>
                </Link>
              )
            })}
          </nav>
        </div>

        {/* Bottom profile info & logout */}
        <div className="p-4 border-t border-white/5 bg-slate-950/40 flex-shrink-0">
          <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 mb-3">
            {userAvatar ? (
              <img 
                src={userAvatar} 
                alt={userName} 
                className="w-9 h-9 rounded-full object-cover border border-white/10"
              />
            ) : (
              <div className="w-9 h-9 rounded-full bg-[#FF6600]/10 border border-[#FF6600]/20 flex items-center justify-center text-[#FF6600]">
                <User size={16} />
              </div>
            )}
            <div className="text-left overflow-hidden">
              <p className="text-[10px] text-orange-400 font-bold uppercase tracking-wider leading-none">Owner</p>
              <p className="text-xs font-black text-white leading-tight truncate mt-1" title={userName}>{userName}</p>
            </div>
          </div>

          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-black uppercase tracking-wider text-rose-400 hover:text-rose-300 bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/10 transition-all hover:scale-[1.02] active:scale-98"
          >
            <LogOut size={16} />
            <span>Keluar</span>
          </button>
        </div>
      </aside>
    </>
  )
}
