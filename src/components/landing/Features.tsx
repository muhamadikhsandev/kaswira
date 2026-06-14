const features = [
  { title: "Manajemen Stok", desc: "Pantau pergerakan stok real-time dengan sistem Stock Movement.", icon: "📦" },
  { title: "Laporan Transaksi", desc: "Invoice otomatis dan rekap pendapatan harian yang akurat.", icon: "📊" },
  { title: "Loyalty Customer", desc: "Kelola data pelanggan dan sistem poin untuk tingkatkan retensi.", icon: "🤝" },
]

export default function Features() {
  return (
    <section className="py-20 px-6 bg-slate-950/50">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div key={i} className="p-8 rounded-[32px] bg-slate-900 border border-white/5 hover:border-orange-500/30 transition-all group">
              <div className="text-4xl mb-6">{f.icon}</div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-orange-500 transition-colors">{f.title}</h3>
              <p className="text-slate-400 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}