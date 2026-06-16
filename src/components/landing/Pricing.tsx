"use client"

import React from 'react'
import Link from 'next/link'

export default function Pricing() {
  const plans = [
    {
      name: "STARTER",
      price: "Rp 0",
      period: " / Selamanya (Gratis)",
      desc: "Cocok untuk UMKM pemula yang baru memulai digitalisasi toko.",
      features: [
        "Akses 1 Akun Owner/Kasir",
        "Kelola Hingga 50 Produk",
        "Transaksi POS Tanpa Batas",
        "Dashboard Ringkasan Harian",
      ],
      recommended: false,
      cta: "Mulai Gratis",
      ctaLink: "/register",
    },
    {
      name: "PRO",
      price: "Rp 99.000",
      period: " / Bulan",
      desc: "Untuk bisnis yang siap berkembang pesat dengan fitur penuh.",
      features: [
        "Semua Fitur Paket Starter",
        "Produk Tanpa Batas (Unlimited)",
        "Fitur Multi-Outlet / Cabang",
        "Laporan Keuangan Bulanan Ekspor Excel",
        "Integrasi Struk WhatsApp Otomatis",
        "Prioritas Dukungan Teknis 24/7",
      ],
      recommended: true,
      cta: "Pilih Paket Pro",
      ctaLink: "/register",
    },
  ]

  return (
    <section className="py-24 px-6 bg-slate-950 relative overflow-hidden" id="harga">
      {/* Visual background glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-600/5 blur-[140px] rounded-full -z-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        
        {/* Header Title */}
        <div className="text-center mb-16">
          <span className="inline-block text-[9px] font-black text-[#FF6600] tracking-[0.25em] uppercase bg-orange-500/10 border border-orange-500/20 px-3.5 py-1.5 rounded-full mb-4">
            PRICING PLANS
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight leading-tight">
            Pilih Paket yang Sesuai dengan Skala Bisnis Anda
          </h2>
          <p className="text-slate-400 text-xs md:text-sm mt-3 max-w-xl mx-auto leading-relaxed">
            Paket transparan tanpa biaya tersembunyi. Tingkatkan layanan kapan saja sesuai kebutuhan operasional outlet.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-start">
          {plans.map((plan, i) => (
            <div 
              key={i} 
              className={`relative p-8 md:p-10 rounded-[32px] border transition-all duration-300 flex flex-col h-full ${
                plan.recommended 
                ? 'bg-slate-900 border-orange-500 shadow-[0_20px_50px_rgba(255,102,0,0.15)] scale-[1.02] z-10' 
                : 'bg-slate-900/40 border-white/5 hover:border-white/10'
              }`}
            >
              {/* Recommended Ribbon */}
              {plan.recommended && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FF6600] text-white text-[9px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full border border-orange-400/30 shadow-lg shadow-orange-600/20">
                  REKOMENDASI
                </span>
              )}
              
              {/* Plan Header */}
              <div className="mb-6">
                <h3 className="text-sm font-black tracking-widest text-slate-400 uppercase">{plan.name}</h3>
                <div className="mt-4 flex items-baseline">
                  <span className="text-3xl md:text-4xl font-black text-white tracking-tight">{plan.price}</span>
                  <span className="text-slate-500 text-xs font-semibold ml-1">{plan.period}</span>
                </div>
                <p className="text-slate-400 text-xs leading-relaxed mt-3">{plan.desc}</p>
              </div>

              <div className="h-px bg-white/5 my-6" />
              
              {/* Features List */}
              <ul className="space-y-4 mb-10 flex-1">
                {plan.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs md:text-sm text-slate-300">
                    <svg className="w-5 h-5 text-[#FF6600] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="leading-tight">{feat}</span>
                  </li>
                ))}
              </ul>

              {/* Call To Action */}
              <Link 
                href={plan.ctaLink} 
                className={`w-full py-4 rounded-2xl text-xs font-black uppercase tracking-wider text-center transition-all hover:scale-[1.02] active:scale-98 ${
                  plan.recommended 
                  ? 'bg-[#FF6600] hover:bg-[#ff7a20] text-white shadow-lg shadow-orange-600/20' 
                  : 'bg-white/5 hover:bg-white/10 text-white border border-white/10'
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}