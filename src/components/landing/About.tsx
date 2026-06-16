"use client"

import React from 'react'
import Image from 'next/image'
import { ShieldCheck, HeartHandshake, Zap } from 'lucide-react'

export default function About() {
  return (
    <section className="py-24 px-6 bg-slate-950 relative overflow-hidden" id="tentang-aplikasi">
      {/* Visual background glows */}
      <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-orange-600/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-orange-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* KOLOM KIRI: FOTO FOUNDER */}
          <div className="lg:col-span-5 flex flex-col items-start text-left">
            <div className="relative group w-full max-w-[360px] aspect-[4/5] rounded-3xl overflow-hidden bg-slate-900 border border-white/10 shadow-[0_20px_50px_rgba(255,102,0,0.15)] transition-all duration-500 hover:shadow-[0_20px_50px_rgba(255,102,0,0.3)] hover:scale-[1.01]">
              {/* Glowing orange backdrop border behind image */}
              <div className="absolute inset-0 bg-gradient-to-t from-orange-600/20 via-transparent to-transparent opacity-80 z-10 pointer-events-none" />
              
              {/* Founder Image with fallback visual gradient */}
              <Image 
                src="/images/founder.png" 
                alt="Muhamad Ikhsan - Founder Kaswira" 
                fill
                sizes="(max-w-768px) 100vw, 360px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                unoptimized // Avoid image optimization problems in development if not configured
              />
            </div>
            
            {/* Sub-caption below photo */}
            <p className="mt-4 text-xs font-bold text-slate-500 uppercase tracking-widest leading-relaxed">
              Muhamad Ikhsan — <span className="text-[#FF6600]">Pengembang & Pencipta Kaswira</span>
            </p>
          </div>

          {/* KOLOM KANAN: NARASI & MINI VALUE VALUE */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            <div className="self-start">
              <span className="inline-block text-[9px] font-black text-[#FF6600] tracking-[0.25em] uppercase bg-orange-500/10 border border-orange-500/20 px-3.5 py-1.5 rounded-full mb-6">
                TENTANG KASWIRA
              </span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-black text-white leading-tight tracking-tight mb-6">
              Solusi Kasir Modern yang Dirancang <span className="text-[#FF6600]">Personal</span> untuk Wirausaha Indonesia
            </h2>
            
            <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-6">
              Kaswira (Kasir Wirausaha) lahir dari kegelisahan saya, Muhamad Ikhsan, sebagai seorang web developer sekaligus konselor. Saya melihat banyak pelaku UMKM kesulitan mengelola pencatatan keuangan dan stok barang karena sistem kasir yang ada di pasar terlalu rumit dan mahal.
            </p>

            <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-10">
              Oleh karena itu, saya merancang Kaswira secara personal dengan pendekatan yang humanis dan simpel. Misi saya adalah menghadirkan aplikasi kasir yang super modern, transparan, dan sangat mudah digunakan oleh siapa saja—bahkan tanpa latar belakang IT sekalipun. Ini adalah komitmen serius saya untuk membantu mengendalikan penuh bisnis Anda demi masa depan UMKM yang lebih maju.
            </p>

            {/* UPGRADE INTERAKTIF: MINI VALUE POINTS GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-white/5 w-full">
              
              {/* Point 1 */}
              <div className="flex flex-col items-start gap-2 group">
                <div className="p-2.5 bg-orange-500/10 border border-orange-500/20 text-[#FF6600] rounded-xl transition-colors group-hover:bg-[#FF6600] group-hover:text-white">
                  <ShieldCheck size={18} />
                </div>
                <h4 className="text-sm font-bold text-white mt-1">100% Aman</h4>
                <p className="text-xs text-slate-500 leading-relaxed">Data terenkripsi penuh di cloud server.</p>
              </div>

              {/* Point 2 */}
              <div className="flex flex-col items-start gap-2 group">
                <div className="p-2.5 bg-orange-500/10 border border-orange-500/20 text-[#FF6600] rounded-xl transition-colors group-hover:bg-[#FF6600] group-hover:text-white">
                  <HeartHandshake size={18} />
                </div>
                <h4 className="text-sm font-bold text-white mt-1">Humanis & Simpel</h4>
                <p className="text-xs text-slate-500 leading-relaxed">Dirancang intuitif tanpa perlu latar belakang IT.</p>
              </div>

              {/* Point 3 */}
              <div className="flex flex-col items-start gap-2 group">
                <div className="p-2.5 bg-orange-500/10 border border-orange-500/20 text-[#FF6600] rounded-xl transition-colors group-hover:bg-[#FF6600] group-hover:text-white">
                  <Zap size={18} />
                </div>
                <h4 className="text-sm font-bold text-white mt-1">POS Kilat</h4>
                <p className="text-xs text-slate-500 leading-relaxed">Transaksi kasir instan, hemat waktu antrean.</p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}