import Link from 'next/link'
import { ArrowLeft, BookOpen, FileText, ShieldAlert, Scale, CheckSquare, HelpCircle } from 'lucide-react'
import Logo from '@/components/landing/Logo'

export const metadata = {
  title: 'Ketentuan Layanan - Kaswira POS',
  description: 'Ketentuan dan syarat layanan resmi (Terms of Service) untuk penggunaan aplikasi Kaswira Point of Sale (POS).',
}

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-[#020617] text-slate-300 selection:bg-orange-500/30 selection:text-white">
      {/* BACKGROUND EFFECTS */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(234,88,12,0.08)_0%,transparent_50%)] pointer-events-none" />
      <div className="absolute top-1/4 -right-20 w-[400px] h-[400px] bg-orange-600/5 rounded-full blur-[120px] pointer-events-none" />
      
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
            <BookOpen size={32} />
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-white tracking-tight">
            Ketentuan Layanan
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
              1. Ketentuan Umum
            </h2>
            <p className="leading-relaxed text-sm md:text-base">
              Ketentuan Layanan ini mengatur penggunaan Anda atas aplikasi **Kaswira** (selanjutnya disebut "Layanan"). Dengan mendaftar, mengakses, atau menggunakan Layanan Kaswira, Anda menyatakan bahwa Anda telah membaca, memahami, dan menyetujui seluruh ketentuan yang tercantum dalam dokumen ini. Jika Anda tidak menyetujui salah satu ketentuan, Anda tidak diperkenankan menggunakan Layanan ini.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <CheckSquare className="text-[#FF6600]" size={20} />
              2. Pendaftaran & Keamanan Akun
            </h2>
            <p className="leading-relaxed text-sm md:text-base">
              Untuk menikmati fitur lengkap Kaswira POS, Anda diharuskan membuat akun pengguna, baik melalui pendaftaran manual maupun integrasi **Google Sign-In**.
            </p>
            <ul className="list-disc list-inside pl-4 space-y-2 text-sm">
              <li>Anda bertanggung jawab menjaga kerahasiaan kredensial login akun Anda.</li>
              <li>Anda wajib memberikan informasi bisnis yang akurat, lengkap, dan terbaru.</li>
              <li>Anda bertanggung jawab penuh atas segala aktivitas transaksi penjualan yang dilakukan di bawah akun Anda.</li>
              <li>Jika terjadi kebocoran keamanan atau penggunaan tanpa izin atas akun Anda, Anda wajib segera melaporkannya ke tim dukungan Kaswira.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Scale className="text-[#FF6600]" size={20} />
              3. Penggunaan Layanan yang Diperbolehkan
            </h2>
            <p className="leading-relaxed text-sm md:text-base">
              Kaswira memberikan Anda hak non-eksklusif dan tidak dapat dipindahtangankan untuk menggunakan sistem kasir kami untuk keperluan bisnis Anda sendiri (seperti pencatatan produk, pengelolaan stok, transaksi kasir, dan peninjauan laporan bisnis). Anda dilarang keras untuk:
            </p>
            <ul className="list-disc list-inside pl-4 space-y-2 text-sm">
              <li>Melakukan rekayasa balik (*reverse engineering*), memodifikasi, atau menyalin kode sumber aplikasi Kaswira.</li>
              <li>Menggunakan Layanan untuk aktivitas transaksi yang melanggar hukum yang berlaku di wilayah Republik Indonesia.</li>
              <li>Mengunggah data berbahaya seperti virus, malware, atau skrip eksploitasi lainnya ke dalam sistem database kami.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <ShieldAlert className="text-[#FF6600]" size={20} />
              4. Batasan Tanggung Jawab
            </h2>
            <p className="leading-relaxed text-sm md:text-base">
              Aplikasi Kaswira disediakan "sebagaimana adanya" (*as is*) tanpa jaminan dalam bentuk apa pun. Kami berusaha sebaik mungkin menjaga kestabilan sistem, namun kami tidak bertanggung jawab atas:
            </p>
            <ul className="list-disc list-inside pl-4 space-y-2 text-sm">
              <li>Kerugian finansial, operasional, atau data transaksi yang timbul akibat kesalahan input data oleh pengguna.</li>
              <li>Gangguan server atau koneksi internet pengguna yang mengakibatkan proses transaksi kasir terhambat untuk sementara waktu.</li>
              <li>Kehilangan perangkat keras kasir yang mengakibatkan hilangnya sesi login lokal.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <BookOpen className="text-[#FF6600]" size={20} />
              5. Penangguhan & Penghentian Akun
            </h2>
            <p className="leading-relaxed text-sm md:text-base">
              Kami berhak untuk menangguhkan atau menghapus akun Anda secara permanen jika Anda terbukti melanggar Ketentuan Layanan ini atau melakukan tindakan manipulasi ilegal terhadap database sistem Kaswira. 
            </p>
            <p className="leading-relaxed text-sm md:text-base">
              Anda juga berhak menghentikan penggunaan Layanan ini kapan saja dengan cara menghapus data Anda dan menutup akun melalui permintaan ke email resmi dukungan kami.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <HelpCircle className="text-[#FF6600]" size={20} />
              6. Perubahan Ketentuan Layanan
            </h2>
            <p className="leading-relaxed text-sm md:text-base">
              Kami berhak memperbarui Ketentuan Layanan ini dari waktu ke waktu guna menyesuaikan dengan kebijakan hukum atau pembaruan integrasi sistem pihak ketiga (seperti Google OAuth). Kami akan memberitahu Anda mengenai perubahan materiil melalui email atau pengumuman di aplikasi. Penggunaan berkelanjutan setelah pembaruan diterbitkan berarti Anda menyetujui perubahan tersebut.
            </p>
            <div className="p-4 rounded-xl bg-white/5 border border-white/5 text-sm space-y-1 mt-2">
              <p><strong className="text-white">Email Dukungan:</strong> muhamadikhsan.dev@gmail.com</p>
              <p><strong className="text-white">Situs Resmi:</strong> kaswira.vercel.app</p>
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
