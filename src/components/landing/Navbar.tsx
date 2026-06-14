"use client"

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Logo from './Logo'
import { 
  Menu, 
  X, 
  ChevronRight, 
  Home,
  LayoutDashboard, 
  Tag, 
  MessageSquare, 
  HelpCircle, 
  Compass,
  Rocket
} from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSegment, setActiveSegment] = useState('Beranda')
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = [
    { name: 'Beranda', href: '#', icon: Home },
    { name: 'Fitur', href: '#features', icon: LayoutDashboard },
    { name: 'Harga', href: '#pricing', icon: Tag },
    { name: 'Testimoni', href: '#testimoni', icon: MessageSquare },
    { name: 'Bantuan', href: '#faq', icon: HelpCircle },
  ]

  return (
    <>
      <nav className={`fixed top-0 inset-x-0 w-full z-50 transition-all duration-300 px-4 md:px-8 ${
        isScrolled ? 'py-3' : 'py-5'
      }`}>
        {/* Navbar Wrapper aligned with Hero container (max-w-6xl mx-auto w-full) */}
        <div className="max-w-6xl mx-auto w-full">
          {/* Inner container: transitions background, border, shadow, and padding on scroll */}
          <div className={`w-full h-16 md:h-20 flex items-center justify-between transition-all duration-300 rounded-2xl md:rounded-3xl ${
            isScrolled 
              ? 'bg-slate-900/80 backdrop-blur-md border border-white/10 px-4 md:px-6 shadow-2xl' 
              : 'bg-transparent border-transparent px-0 shadow-none'
          }`}>
            
            {/* 1. LOGO SECTION - Aligned with Hero container's left edge in both states */}
            <Logo className={`z-10 transition-all duration-300 ${
              isScrolled 
                ? '-ml-[20px] md:-ml-[32px]' 
                : '-ml-1.5 md:-ml-2'
            }`} />

            {/* 2. DESKTOP MENU - Proportional sizing */}
            <div className="hidden lg:flex items-center bg-white/5 border border-white/10 p-1 rounded-full backdrop-blur-lg">
              <div className="flex items-center gap-0.5">
                {menuItems.map((item) => (
                  <a 
                    key={item.name} 
                    href={item.href} 
                    onClick={() => setActiveSegment(item.name)}
                    className={`relative px-4 py-2 text-[10px] md:text-[11px] font-bold uppercase tracking-wider transition-all duration-300 rounded-full z-10
                      ${activeSegment === item.name 
                        ? 'text-white bg-[#FF6600] shadow-[0_3px_8px_rgba(255,102,0,0.3)]' 
                        : 'text-slate-400 hover:text-white hover:bg-white/5'
                      }`}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>

            {/* 3. ACTION BUTTONS - Proportional sizing */}
            <div className="flex items-center gap-3 z-10">
              <div className="hidden md:flex items-center gap-2">
                <a href="#features" className="flex items-center gap-2 text-white hover:bg-white/10 px-5 py-3 rounded-xl text-xs md:text-sm font-bold transition-all group tracking-wide">
                  <Compass size={16} className="text-slate-400 group-hover:text-[#FF6600] transition-colors" />
                  PELAJARI FITUR
                </a>
                <a href="#register" className="flex items-center gap-2 bg-[#FF6600] hover:bg-[#ff7a20] text-white px-6 py-3 rounded-xl text-xs md:text-sm font-black transition-all active:scale-95 shadow-[0_6px_15px_-4px_rgba(255,102,0,0.4)] tracking-wide">
                  <Rocket size={16} />
                  MULAI GRATIS
                </a>
              </div>

              {/* Hamburger Button */}
              <button 
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-2 text-slate-300 hover:text-white bg-white/5 rounded-xl border border-white/10"
              >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* MOBILE BOTTOM SHEET MENU */}
      <div 
        className={`fixed inset-0 z-[60] bg-black/85 backdrop-blur-md transition-opacity duration-500 lg:hidden ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      />

      <div className={`fixed bottom-0 left-0 right-0 z-[70] h-[85vh] w-full bg-slate-950/98 backdrop-blur-2xl border-t border-white/10 p-6 rounded-t-[2.5rem] transform transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] lg:hidden ${
        isOpen ? 'translate-y-0' : 'translate-y-full'
      }`}>
        <div className="flex flex-col h-full">
          {/* Top Grab/Drag Handle Indicator */}
          <div 
            className="w-12 h-1.5 bg-white/20 rounded-full mx-auto mb-6 cursor-pointer hover:bg-white/30 transition-colors" 
            onClick={() => setIsOpen(false)}
          />

          <div className="flex items-center justify-between mb-6">
            <span className="text-[10px] font-black text-slate-500 tracking-[0.25em] uppercase">Navigasi Utama</span>
            <button 
              onClick={() => setIsOpen(false)} 
              className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 text-slate-400"
            >
              <X size={16} />
            </button>
          </div>

          <div className="flex flex-col gap-1.5">
            {menuItems.map((item) => {
              const Icon = item.icon
              return (
                <a 
                  key={item.name} 
                  href={item.href} 
                  onClick={() => { setIsOpen(false); setActiveSegment(item.name); }}
                  className={`flex items-center justify-between px-4 py-3.5 rounded-2xl text-base font-bold transition-all ${
                    activeSegment === item.name 
                    ? 'bg-[#FF6600] text-white shadow-[0_4px_12px_rgba(255,102,0,0.25)]' 
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <Icon size={20} />
                    {item.name}
                  </div>
                  <ChevronRight size={16} className={activeSegment === item.name ? 'opacity-100' : 'opacity-20'} />
                </a>
              )
            })}
          </div>

          <div className="mt-auto flex flex-col gap-3 pb-6 border-t border-white/5 pt-4">
            <a href="#features" onClick={() => setIsOpen(false)} className="w-full border border-white/10 text-white py-4 rounded-2xl font-bold hover:bg-white/5 transition-all flex items-center justify-center gap-2 text-sm uppercase tracking-wider">
              <Compass size={18} />
              Pelajari Fitur
            </a>
            <a href="#register" onClick={() => setIsOpen(false)} className="w-full bg-[#FF6600] text-white py-4 rounded-2xl font-black shadow-lg shadow-orange-600/10 active:scale-95 transition-all flex items-center justify-center gap-2 text-sm uppercase tracking-wider">
              <Rocket size={18} />
              Mulai Gratis
            </a>
          </div>
        </div>
      </div>
    </>
  )
}