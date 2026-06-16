import Link from 'next/link'
import { ArrowLeft, Shield, Eye, Lock, FileText, UserCheck, HelpCircle } from 'lucide-react'
import Logo from '@/components/landing/Logo'

export const metadata = {
  title: 'Kebijakan Privasi - Kaswira POS',
  description: 'Kebijakan privasi resmi untuk aplikasi Kaswira Point of Sale (POS) dan manajemen bisnis.',
}

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#020617] text-slate-300 selection:bg-orange-500/30 selection:text-white">
      {/* BACKGROUND EFFECTS */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(234,88,12,0.08)_0%,transparent_50%)] pointer-events-none" />
      <div className="absolute top-1/4 -left-20 w-[400px] h-[400px] bg-orange-600/5 rounded-full blur-[120px] pointer-events-none" />
      
      {/* HEADER SECTION */}
      <header className="relative z-10 border-b border-white/5 bg-slate-950/50 backdrop-blur-md sticky top-0">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="hover:opacity-95 transition-opacity">
            <Logo />
          </Link>
          <Link 
            href="/login" 
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-[#FF6600] transition-colors group"
          >
            <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-1" />
            Kembali ke Login
          </Link>
        </div>
      </header>

      {/* CONTENT CONTAINER */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-12">
        {/* Title Area */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-orange-500/10 border border-orange-500/20 text-[#FF6600] mb-4">
            <Shield size={32} />
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-white tracking-tight">
            Kebijakan Privasi
          </h1>
          <p className="text-slate-500 text-sm mt-3">
            Terakhir Diperbarui: 17 Juni 2026
          </p>
        </div>

        {/* Content Box */}
        <div className="bg-slate-900/40 border border-white/10 rounded-2xl p-6 md:p-10 backdrop-blur-xl shadow-2xl space-y-8">
          
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <FileText className="text-[#FF6600]" size={20} />
              1. Pendahuluan
            </h2>
            <p className="leading-relaxed text-sm md:text-base">
              Selamat datang di **Kaswira**. Kami sangat menghargai privasi Anda dan berkomitmen untuk melindungi data pribadi Anda selaku pengguna aplikasi Point of Sale (POS) kami. Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, menyimpan, dan melindungi data pribadi Anda saat menggunakan aplikasi Kaswira.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Eye className="text-[#FF6600]" size={20} />
              2. Informasi yang Kami Kumpulkan
            </h2>
            <p className="leading-relaxed text-sm md:text-base">
              Kami mengumpulkan informasi tertentu untuk mengoperasikan sistem Kasir & POS secara efisien dan aman. Informasi tersebut mencakup:
            </p>
            <ul className="list-disc list-inside pl-4 space-y-2 text-sm">
              <li>
                <strong className="text-white">Informasi Autentikasi Pihak Ketiga:</strong> Saat Anda mendaftar atau masuk menggunakan <strong className="text-white">Google Sign-In</strong>, kami mengakses alamat email, nama profil, dan URL foto profil Anda sesuai dengan izin yang telah Anda berikan di akun Google Anda.
              </li>
              <li>
                <strong className="text-white">Informasi Profil Bisnis:</strong> Nama lengkap Anda, alamat email, kata sandi terenkripsi (jika menggunakan metode login manual), dan nama usaha/toko Anda.
              </li>
              <li>
                <strong className="text-white">Data Transaksi & Operasional:</strong> Pencatatan data produk, daftar transaksi penjualan, inventaris stok barang, dan laporan keuangan yang Anda input sendiri ke dalam aplikasi POS Kaswira.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <UserCheck className="text-[#FF6600]" size={20} />
              3. Penggunaan Informasi
            </h2>
            <p className="leading-relaxed text-sm md:text-base">
              Kami menggunakan data yang dikumpulkan untuk tujuan-tujuan berikut:
            </p>
            <ul className="list-disc list-inside pl-4 space-y-2 text-sm">
              <li>Menyediakan, memelihara, dan mengoptimalkan fungsi utama aplikasi Kasir Kaswira.</li>
              <li>Memproses proses autentikasi akun secara instan melalui sistem Google login.</li>
              <li>Menampilkan data profil Anda (nama dan foto) secara visual di dalam dashboard agar pengalaman pengguna menjadi lebih personal.</li>
              <li>Mengirimkan notifikasi penting terkait sistem, keamanan, atau pembaruan fitur melalui alamat email Anda.</li>
              <li>Kami berkomitmen untuk **tidak pernah menjual, menyewakan, atau menyebarluaskan** data pribadi Anda kepada pihak ketiga manapun untuk tujuan komersial atau periklanan.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Lock className="text-[#FF6600]" size={20} />
              4. Keamanan & Penyimpanan Data
            </h2>
            <p className="leading-relaxed text-sm md:text-base">
              Keamanan data Anda adalah prioritas utama kami. Kami menggunakan infrastruktur backend dari **Supabase** yang dilengkapi dengan protokol enkripsi canggih (SSL/TLS) saat data dikirimkan dan disimpan dalam basis data (encryption at rest & in transit).
            </p>
            <p className="leading-relaxed text-sm md:text-base text-[#FF6600]/80">
              *Harap diingat bahwa sistem login Google menggunakan token autentikasi yang aman. Kami tidak menyimpan kata sandi akun Google Anda di dalam database kami.*
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Shield className="text-[#FF6600]" size={20} />
              5. Hak Pengguna & Penghapusan Data
            </h2>
            <p className="leading-relaxed text-sm md:text-base">
              Sebagai pengguna, Anda memiliki hak penuh atas data Anda sendiri. Anda berhak untuk mengakses, mengubah, atau meminta penghapusan akun serta seluruh data usaha dan penjualan yang tersimpan di server kami.
            </p>
            <p className="leading-relaxed text-sm md:text-base">
              Jika Anda ingin menghapus akun Anda secara permanen beserta seluruh data terkait, silakan hubungi tim dukungan kami melalui alamat email yang tercantum di bagian akhir dokumen ini.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <HelpCircle className="text-[#FF6600]" size={20} />
              6. Kontak Kami
            </h2>
            <p className="leading-relaxed text-sm md:text-base">
              Jika Anda memiliki pertanyaan, saran, atau permintaan mengenai Kebijakan Privasi ini, silakan hubungi kami di:
            </p>
            <div className="p-4 rounded-xl bg-white/5 border border-white/5 text-sm space-y-1 mt-2">
              <p><strong className="text-white">Email Dukungan:</strong> muhamadikhsan.dev@gmail.com</p>
              <p><strong className="text-white">Alamat Website:</strong> kaswira.vercel.app</p>
              <p><strong className="text-white">Nama Perusahaan:</strong> Kaswira Brand Indonesia</p>
            </div>
          </section>
          
        </div>

        {/* Footer Area */}
        <div className="mt-8 text-center text-xs text-slate-500">
          <span>&copy; {new Date().getFullYear()} Kaswira. Seluruh hak cipta dilindungi undang-undang.</span>
        </div>
      </div>
    </main>
  )
}
