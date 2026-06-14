import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="border-t border-white/5 pt-20 pb-10 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Logo className="mb-6 -ml-5 md:-ml-7" />
            <p className="text-slate-400 max-w-sm leading-relaxed mb-6">
              Solusi Point of Sales terintegrasi untuk membantu pengusaha mengelola bisnis lebih cerdas, cepat, dan otomatis.
            </p>
            <div className="flex gap-4">
              {['FB', 'IG', 'TW', 'LI'].map((social) => (
                <div key={social} className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-xs font-bold text-slate-500 hover:border-orange-500 hover:text-orange-500 cursor-pointer transition-all">
                  {social}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6">Produk</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><a href="#" className="hover:text-orange-500 transition-colors">Fitur Kasir</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Manajemen Stok</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Laporan Laba Rugi</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Sistem Membership</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Perusahaan</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><a href="#" className="hover:text-orange-500 transition-colors">Tentang Kami</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Bantuan (FAQ)</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Kebijakan Privasi</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Kontak Kami</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:row items-center justify-between gap-4">
          <p className="text-[11px] text-slate-500 uppercase tracking-widest">
            © 2024 Kaswira POS. Developed with Next.js & Supabase.
          </p>
          <div className="flex gap-8 text-[11px] text-slate-600 uppercase tracking-widest">
            <span>Indonesia</span>
            <span>English</span>
          </div>
        </div>
      </div>
    </footer>
  )
}