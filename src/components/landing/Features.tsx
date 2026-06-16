"use client"

import React from 'react'
import { ShoppingCart, Package, TrendingUp, Wallet } from 'lucide-react'

export default function Features() {
  const featureItems = [
    {
      title: "Aplikasi Kasir (POS) Kilat",
      desc: "Input produk ke keranjang belanja, hitung otomatis subtotal, nominal bayar, dan uang kembalian secara instan.",
      icon: <ShoppingCart size={24} className="text-[#FF6600]" />,
    },
    {
      title: "Manajemen Stok Real-time",
      desc: "Kelola jumlah stok barang dagangan Anda. Sistem otomatis memotong stok setiap kali transaksi kasir berhasil diproses.",
      icon: <Package size={24} className="text-[#FF6600]" />,
    },
    {
      title: "Dashboard Profit Bersih",
      desc: "Pantau grafik omzet penjualan dan potong otomatis dengan biaya operasional untuk melihat keuntungan bersih toko Anda secara real-time.",
      icon: <TrendingUp size={24} className="text-[#FF6600]" />,
    },
    {
      title: "Catatan Pengeluaran Ragam",
      desc: "Catat semua biaya operasional harian (listrik, sewa, bahan baku) agar arus kas toko tidak ada yang bocor.",
      icon: <Wallet size={24} className="text-[#FF6600]" />,
    },
  ]

  return (
    <section className="py-24 px-6 bg-slate-900/40 relative overflow-hidden" id="fitur">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-600/5 blur-[120px] rounded-full -z-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        
        {/* Title */}
        <div className="text-center mb-16">
          <span className="inline-block text-[9px] font-black text-[#FF6600] tracking-[0.25em] uppercase bg-orange-500/10 border border-orange-500/20 px-3.5 py-1.5 rounded-full mb-4">
            FITUR UTAMA
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight leading-tight">
            Fitur Esensial untuk Kendali Penuh Bisnis Anda
          </h2>
          <p className="text-slate-400 text-xs md:text-sm mt-3 max-w-xl mx-auto leading-relaxed">
            Didesain khusus untuk memberikan kemudahan penuh dalam mengelola operasional wirausaha harian Anda.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featureItems.map((f, i) => (
            <div 
              key={i} 
              className="p-8 rounded-[32px] bg-slate-900/60 border border-white/5 hover:border-[#FF6600]/30 transition-all duration-300 group hover:scale-[1.01] shadow-xl hover:shadow-[#FF6600]/5"
            >
              <div className="p-4 rounded-2xl bg-white/5 border border-white/5 w-fit mb-6 transition-transform duration-300 group-hover:scale-110">
                {f.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#FF6600] transition-colors">
                {f.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}