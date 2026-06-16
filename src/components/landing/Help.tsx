"use client"

import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function Help() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      q: "Apakah Kaswira benar-benar gratis?",
      a: "Iya, Paket Starter Kaswira 100% gratis selamanya tanpa dipungut biaya dan tanpa kartu kredit untuk membantu digitalisasi UMKM pemula.",
    },
    {
      q: "Bagaimana cara mencetak struk belanja di Kaswira?",
      a: "Kaswira mendukung cetak struk menggunakan printer thermal bluetooth/USB standar, atau Anda bisa langsung mengirimkan ringkasan struk belanja digital secara instan ke WhatsApp pelanggan.",
    },
    {
      q: "Apakah data transaksi toko saya aman di Kaswira?",
      a: "Sangat aman. Semua data Anda disimpan di cloud database terenkripsi dengan proteksi tinggi, terpisah secara privat, dan hanya bisa diakses oleh akun Anda sendiri.",
    },
    {
      q: "Apakah saya bisa upgrade atau downgrade paket kapan saja?",
      a: "Bisa banget. Anda bebas beralih dari paket Starter ke Pro atau sebaliknya kapan saja melalui menu pengaturan langganan di dalam dashboard tanpa kehilangan data produk Anda.",
    },
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-24 px-6 bg-slate-900/40 relative overflow-hidden" id="bantuan">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-600/5 blur-[120px] rounded-full -z-10 pointer-events-none" />

      <div className="max-w-4xl mx-auto">
        
        {/* Header Title */}
        <div className="text-center mb-16">
          <span className="inline-block text-[9px] font-black text-[#FF6600] tracking-[0.25em] uppercase bg-orange-500/10 border border-orange-500/20 px-3.5 py-1.5 rounded-full mb-4">
            BANTUAN & FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight leading-tight">
            Pertanyaan yang Sering Diajukan (FAQ)
          </h2>
          <p className="text-slate-400 text-xs md:text-sm mt-3 max-w-xl mx-auto leading-relaxed">
            Punya pertanyaan mengenai Kaswira? Temukan jawaban cepat atas beberapa pertanyaan paling umum berikut.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i
            return (
              <div 
                key={i} 
                className="rounded-2xl border border-white/5 bg-slate-900/55 overflow-hidden transition-all duration-300 hover:border-[#FF6600]/20"
              >
                {/* Header/Question Trigger */}
                <button
                  onClick={() => toggleFAQ(i)}
                  className="w-full flex items-center justify-between p-5 md:p-6 text-left focus:outline-none transition-colors"
                >
                  <span className={`text-sm md:text-base font-bold text-white transition-colors duration-300 ${isOpen ? 'text-[#FF6600]' : ''}`}>
                    {faq.q}
                  </span>
                  <div className={`p-1 rounded-lg bg-white/5 text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#FF6600]' : ''}`}>
                    <ChevronDown size={18} />
                  </div>
                </button>

                {/* Answer Content Panel */}
                <div 
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? 'max-h-40 border-t border-white/5 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="p-5 md:p-6 text-xs md:text-sm text-slate-400 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
