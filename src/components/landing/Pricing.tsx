const plans = [
  {
    name: "Starter",
    price: "0",
    desc: "Cocok untuk UMKM baru yang ingin digitalisasi.",
    features: ["1 Kasir (User)", "Maks. 50 Produk", "Laporan Transaksi Harian", "Stock Movement Dasar"],
    highlight: false,
    cta: "Mulai Gratis"
  },
  {
    name: "Business",
    price: "149.000",
    desc: "Solusi lengkap untuk bisnis yang sedang berkembang.",
    features: ["User Tak Terbatas", "Produk Tak Terbatas", "Manajemen Loyalitas Pelanggan", "Laporan Penjualan Lanjut", "Multi-kategori Produk"],
    highlight: true,
    cta: "Pilih Business"
  },
  {
    name: "Enterprise",
    price: "499.000",
    desc: "Untuk manajemen inventory skala besar.",
    features: ["Semua Fitur Business", "Integrasi Multi-cabang", "Prioritas Support 24/7", "Analisis Prediksi Stok AI", "API Access"],
    highlight: false,
    cta: "Hubungi Sales"
  }
]

export default function Pricing() {
  return (
    <section className="py-24 px-6 relative overflow-hidden" id="pricing">
      {/* Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-600/10 blur-[120px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Investasi Untuk <span className="text-orange-500">Efisiensi</span></h2>
        <p className="text-slate-400">Pilih paket yang sesuai dengan skala bisnis Anda saat ini.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan, i) => (
          <div 
            key={i} 
            className={`relative p-8 rounded-[32px] border transition-all duration-300 ${
              plan.highlight 
              ? 'bg-slate-900 border-orange-500 shadow-2xl shadow-orange-600/10 scale-105 z-10' 
              : 'bg-slate-950 border-white/5 hover:border-white/20'
            }`}
          >
            {plan.highlight && (
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-orange-600 text-white text-[10px] font-black uppercase tracking-widest px-4 py-1 rounded-full">
                Paling Populer
              </span>
            )}
            
            <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
            <div className="mb-6">
              <span className="text-4xl font-black">Rp {plan.price}</span>
              <span className="text-slate-500 text-sm"> /bulan</span>
            </div>
            <p className="text-slate-400 text-sm mb-8 leading-relaxed">{plan.desc}</p>
            
            <ul className="space-y-4 mb-10">
              {plan.features.map((feat, idx) => (
                <li key={idx} className="flex items-center gap-3 text-sm text-slate-300">
                  <svg className="w-5 h-5 text-orange-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                  </svg>
                  {feat}
                </li>
              ))}
            </ul>

            <button className={`w-full py-4 rounded-2xl font-bold transition-all ${
              plan.highlight 
              ? 'bg-orange-600 hover:bg-orange-700 text-white shadow-lg shadow-orange-600/20' 
              : 'bg-white/5 hover:bg-white/10 text-white border border-white/10'
            }`}>
              {plan.cta}
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}