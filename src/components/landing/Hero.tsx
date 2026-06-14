"use client"

import { useEffect, useState } from 'react'
import { ArrowRight, BarChart3, Settings, Users, Box, Wallet, Search, Plus, TrendingUp, DollarSign, ShoppingBag, Layers, Wifi, Battery } from 'lucide-react'

export default function Hero() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-28 md:pt-28 lg:pt-24 pb-16 px-4 md:px-8 overflow-hidden bg-[#020617]">
      {/* DEKORASI BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(234,88,12,0.04)_0%,transparent_50%)]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[500px] bg-orange-600/5 rounded-full blur-[140px] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-8 items-center">
          
          {/* SISI KIRI: KONTEN TEKS */}
          <div className="flex flex-col items-start text-left order-1 w-full lg:max-w-lg">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-orange-500/20 bg-orange-500/10 text-orange-400 text-[10px] md:text-[11px] font-black mb-5 uppercase tracking-[0.2em]">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-orange-500"></span>
              </span>
              Modern POS System
            </div>
            
            <div className="w-full">
              <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-black mb-5 leading-[1.15] text-white tracking-tight">
                Satu Aplikasi. <br /> 
                <span className="text-[#FF6600]">
                  Kendali Penuh.
                </span>
              </h1>
            </div>
            
            {/* DESKRIPSI: UKURAN NYAMAN DIBACA */}
            <p className="text-slate-400 text-base md:text-lg mb-8 leading-relaxed font-medium">
              Transformasi bisnis UMKM Anda dengan sistem kasir yang dirancang untuk <span className="text-white font-semibold">kecepatan transaksi</span> dan <span className="text-white font-semibold">akurasi data harian</span> secara otomatis.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <button className="group w-full sm:w-auto px-8 py-3.5 bg-[#FF6600] text-white rounded-xl font-black transition-all hover:scale-[1.03] active:scale-95 shadow-[0_15px_30px_-10px_rgba(255,102,0,0.35)] flex items-center justify-center gap-2 text-xs uppercase tracking-wider">
                MULAI SEKARANG
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="w-full sm:w-auto px-7 py-3.5 bg-white/5 text-white rounded-xl font-bold border border-white/10 hover:bg-white/10 transition-all text-xs backdrop-blur-sm">
                Pelajari Fitur
              </button>
            </div>
          </div>

          {/* SISI KANAN: MOCKUP DASHBOARD REALISTIS */}
          <div className="relative flex justify-center items-center order-2 mt-6 lg:mt-0 w-full select-none">
            
            {/* 1. REALISTIC LAPTOP MOCKUP */}
            <div className="relative w-full max-w-[460px] sm:max-w-[540px] lg:max-w-[580px] z-10 transition-all duration-500 hover:scale-[1.01]">
              {/* Outer Bezel Screen */}
              <div className="relative bg-[#0b0f19] rounded-t-2xl border-[8px] md:border-[12px] border-slate-900 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] overflow-hidden aspect-[16/10] flex flex-col">
                
                {/* Screen Notch Camera */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 h-4 w-24 bg-slate-900 rounded-b-md z-50 flex items-center justify-center gap-1.5">
                  <div className="w-1 h-1 rounded-full bg-blue-500/50" />
                  <div className="w-1.5 h-1.5 rounded-full bg-black" />
                </div>

                {/* APP INTERFACE (REALISTIC DASHBOARD) */}
                <div className="flex-1 bg-[#090d16] text-white text-[10px] flex overflow-hidden pt-2">
                  
                  {/* Dashboard Sidebar */}
                  <div className="w-12 md:w-16 border-r border-slate-800/60 bg-[#06090f] p-1.5 flex flex-col gap-1">
                    <div className="p-1 mb-2 flex items-center gap-1">
                      <div className="w-3 h-3 rounded bg-orange-600 flex items-center justify-center text-[7px] font-black">K</div>
                      <span className="font-black text-[8px] hidden md:block text-orange-500">Kaswira</span>
                    </div>
                    <div className="p-1.5 rounded bg-orange-500/10 text-orange-400 flex items-center gap-2"><Layers size={10} /><span className="scale-75 origin-left hidden md:block font-medium">POS</span></div>
                    <div className="p-1.5 rounded text-slate-500 hover:text-slate-300 flex items-center gap-2"><BarChart3 size={10} /><span className="scale-75 origin-left hidden md:block font-medium">Laporan</span></div>
                    <div className="p-1.5 rounded text-slate-500 hover:text-slate-300 flex items-center gap-2"><Box size={10} /><span className="scale-75 origin-left hidden md:block font-medium">Produk</span></div>
                    <div className="p-1.5 rounded text-slate-500 hover:text-slate-300 flex items-center gap-2"><Users size={10} /><span className="scale-75 origin-left hidden md:block font-medium">Pelanggan</span></div>
                    <div className="mt-auto p-1.5 text-slate-600"><Settings size={10} /></div>
                  </div>

                  {/* Dashboard Main Content */}
                  <div className="flex-1 p-2 md:p-3 flex flex-col gap-2.5 overflow-hidden">
                    {/* Top Stats Header */}
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-bold text-[9px] md:text-xs">Ringkasan Penjualan</h4>
                        <p className="text-[7px] text-slate-500">Update terakhir: Baru saja</p>
                      </div>
                      <div className="flex items-center gap-1.5 bg-slate-900 border border-slate-800 px-2 py-0.5 rounded text-[8px]">
                        <Search size={8} className="text-slate-500" />
                        <span className="text-slate-500">Cari transaksi...</span>
                      </div>
                    </div>

                    {/* Cards Grid */}
                    <div className="grid grid-cols-3 gap-1.5 md:gap-2">
                      <div className="p-2 bg-slate-900/60 border border-slate-800/80 rounded-lg flex flex-col gap-0.5">
                        <span className="text-[7px] text-slate-500 uppercase tracking-wider font-bold">Pendapatan</span>
                        <span className="font-extrabold text-[9px] md:text-xs text-emerald-400">Rp 4.820.000</span>
                        <span className="text-[6px] text-emerald-500 flex items-center gap-0.5 font-medium mt-0.5"><TrendingUp size={6} /> +12.4%</span>
                      </div>
                      <div className="p-2 bg-slate-900/60 border border-slate-800/80 rounded-lg flex flex-col gap-0.5">
                        <span className="text-[7px] text-slate-500 uppercase tracking-wider font-bold">Transaksi</span>
                        <span className="font-extrabold text-[9px] md:text-xs">142 Pesanan</span>
                        <span className="text-[6px] text-emerald-500 flex items-center gap-0.5 font-medium mt-0.5"><TrendingUp size={6} /> +8.1%</span>
                      </div>
                      <div className="p-2 bg-[#ff6600]/5 border border-[#ff6600]/20 rounded-lg flex flex-col gap-0.5">
                        <span className="text-[7px] text-orange-400 uppercase tracking-wider font-bold">Produk Terlaris</span>
                        <span className="font-extrabold text-[8px] md:text-[10px] text-white truncate">Kopi Susu Gula Aren</span>
                        <span className="text-[6px] text-slate-400 mt-0.5">48 Item Terjual</span>
                      </div>
                    </div>

                    {/* Sales Graphic Visual & Recent Orders */}
                    <div className="flex-1 grid grid-cols-[1.41fr_1fr] gap-2 items-stretch min-h-0">
                      {/* Chart Graphics */}
                      <div className="bg-slate-900/40 border border-slate-800/60 rounded-lg p-2 flex flex-col justify-between">
                        <span className="text-[7px] font-bold text-slate-400">Grafik Penjualan Mingguan</span>
                        <div className="h-14 md:h-20 flex items-end justify-between gap-1 pt-2 px-1">
                          {[30, 45, 35, 60, 40, 75, 90].map((val, i) => (
                            <div key={i} className="flex-1 flex flex-col items-center gap-1">
                              <div 
                                className={`w-full rounded-t-sm transition-all duration-1000 ${i === 6 ? 'bg-orange-500 shadow-[0_0_8px_rgba(255,102,0,0.4)]' : 'bg-slate-700'}`}
                                style={{ height: `${val}%` }} 
                              />
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Recent Transactions List */}
                      <div className="bg-slate-900/40 border border-slate-800/60 rounded-lg p-2 flex flex-col gap-1.5 overflow-hidden">
                        <span className="text-[7px] font-bold text-slate-400">Kasir Utama</span>
                        <div className="flex flex-col gap-1 overflow-hidden">
                          {[
                            { id: "#1024", time: "14:32", total: "Rp 35.000", status: "Selesai" },
                            { id: "#1023", time: "14:28", total: "Rp 120.000", status: "Selesai" },
                            { id: "#1022", time: "14:15", total: "Rp 68.000", status: "Pending" }
                          ].map((trx, idx) => (
                            <div key={idx} className="flex items-center justify-between p-1 bg-slate-900/80 border border-slate-800/50 rounded text-[7px]">
                              <div className="flex flex-col">
                                <span className="font-bold text-slate-200">{trx.id}</span>
                                <span className="text-[6px] text-slate-500">{trx.time} WIB</span>
                              </div>
                              <div className="text-right flex flex-col">
                                <span className="font-bold text-white">{trx.total}</span>
                                <span className={`text-[5px] font-medium ${trx.status === 'Selesai' ? 'text-emerald-400' : 'text-amber-400'}`}>{trx.status}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                </div>

              </div>
              
              {/* Laptop Keyboard Base & Hinge */}
              <div className="relative h-2 md:h-3 bg-gradient-to-b from-slate-700 to-slate-800 rounded-b-xl w-[104%] -left-[2%] shadow-2xl border-t border-white/10" />
              <div className="relative h-1 bg-slate-900 rounded-b-xl w-[35%] mx-auto shadow-md" />
            </div>

            {/* 2. REALISTIC PHONE MOCKUP (Overlay Front-Left dengan Navigasi Sistem HP Biasa) */}
            <div className="absolute -bottom-5 -left-3 sm:left-4 md:-left-6 w-[100px] sm:w-[130px] md:w-[160px] z-20 transition-all duration-500 hover:translate-y-[-4px]">
              {/* Outer Bezel Phone */}
              <div className="relative w-full aspect-[9/19.2] bg-[#020617] rounded-[1.8rem] md:rounded-[2.4rem] border-[5px] md:border-[7px] border-slate-900 shadow-[0_30px_70px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col">
                
                {/* Top Status Bar (Jam, Sinyal, Baterai Perangkat) */}
                <div className="absolute top-0 inset-x-0 h-5 bg-[#070b14] px-3 pt-1 flex items-center justify-between text-[5px] text-slate-400 z-50">
                  <span>14:32</span>
                  <div className="flex items-center gap-1">
                    <Wifi size={5} />
                    <Battery size={6} className="text-emerald-400" />
                  </div>
                </div>
                
                {/* Mobile Screen App Content */}
                <div className="flex-1 flex flex-col bg-[#070b14] pt-6 p-2 text-white text-[8px]">
                  {/* Small Header */}
                  <div className="flex items-center justify-between mb-2 px-0.5">
                    <span className="font-bold tracking-tight text-[9px]">Kaswira<span className="text-[#FF6600]">Pos</span></span>
                    <div className="w-2.5 h-2.5 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-400"><ShoppingBag size={6} /></div>
                  </div>

                  {/* Cashier Mobile Cart Info */}
                  <div className="p-1.5 bg-[#ff6600] rounded-lg text-white mb-2 shadow-lg shadow-orange-600/20 flex items-center justify-between">
                    <div>
                      <p className="text-[5px] opacity-80 uppercase font-bold">Total Keranjang</p>
                      <p className="font-black text-[10px]">Rp 155.000</p>
                    </div>
                    <span className="bg-white/20 px-1.5 py-0.5 rounded font-bold text-[6px]">3 Items</span>
                  </div>

                  {/* Quick Product Grid Selection */}
                  <p className="text-[6px] text-slate-500 font-bold mb-1 uppercase tracking-wider">Produk Cepat</p>
                  <div className="grid grid-cols-2 gap-1 flex-1 overflow-hidden content-start">
                    {[
                      { name: "Ice Americano", price: "22k" },
                      { name: "Espresso Match", price: "28k" },
                      { name: "Croissant Choco", price: "25k" },
                      { name: "Red Velvet Latte", price: "26k" }
                    ].map((item, idx) => (
                      <div key={idx} className="p-1.5 bg-slate-900/90 border border-slate-800/80 rounded-md flex flex-col justify-between aspect-square">
                        <div className="w-full h-7 bg-slate-800/50 rounded flex items-center justify-center text-slate-600 mb-1">
                          <DollarSign size={10} />
                        </div>
                        <div className="leading-tight">
                          <p className="font-bold text-slate-200 truncate text-[6px]">{item.name}</p>
                          <p className="text-orange-400 font-black text-[6px]">{item.price}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* BAR NAVIGASI HP BIASA / NAV BAR BAWAH SISTEM (BACK, HOME, RECENT APPS) */}
                  <div className="h-5 bg-black/90 border-t border-white/5 flex items-center justify-around px-4 -mx-2 -mb-2 mt-auto">
                     {/* Tombol Back (Segitiga / Panah) */}
                     <div className="w-1.5 h-1.5 border-l border-b border-slate-500 rotate-45 opacity-80 rounded-xs" />
                     {/* Tombol Home (Lingkaran) */}
                     <div className="w-2 h-2 rounded-full border border-slate-500 opacity-80" />
                     {/* Tombol Recent Apps (Kotak) */}
                     <div className="w-1.5 h-1.5 border border-slate-500 rounded-xs opacity-80" />
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}