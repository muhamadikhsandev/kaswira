"use client"

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Eye, EyeOff, Lock, Mail, User, Store, ArrowRight, Loader2 } from 'lucide-react'
import Logo from '@/components/landing/Logo'
import { createClient } from '@/utils/supabase/client'

export default function RegisterPage() {
  const router = useRouter()
  const [name, setName] = useState('')
  const [businessName, setBusinessName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [agreeTerms, setAgreeTerms] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [googleLoading, setGoogleLoading] = useState(false)
  const [error, setError] = useState('')

  // Ambil instance browser client Supabase milikmu
  const supabase = createClient()

  // HANDLER REGISTRASI MANUAL (EMAIL & PASSWORD)
  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (!name || !businessName || !email || !password || !confirmPassword) {
      setError('Harap isi semua kolom')
      return
    }

    if (password !== confirmPassword) {
      setError('Konfirmasi kata sandi tidak cocok')
      return
    }

    if (!agreeTerms) {
      setError('Anda harus menyetujui Syarat dan Ketentuan')
      return
    }

    setIsLoading(true)

    const { error: authError } = await supabase.auth.signUp({
      email: email,
      password: password,
      options: {
        // Menyimpan nama owner dan nama usaha ke dalam user_metadata di auth.users
        data: {
          full_name: name,
          business_name: businessName,
        },
        // FIX: Mengubah 'redirectTo' menjadi 'emailRedirectTo' sesuai spesifikasi tipe data Supabase Auth SDK
        emailRedirectTo: `${window.location.origin}/auth/callback`,
      }
    })

    if (authError) {
      setError(authError.message || 'Gagal mendaftarkan akun baru')
      setIsLoading(false)
      return
    }

    setIsLoading(false)
    alert('Registrasi sukses! Silakan periksa inbox email Anda untuk memverifikasi akun.')
    router.push('/login')
  }

  // HANDLER REGISTRASI GOOGLE (OAuth)
  const handleGoogleRegister = async () => {
    setError('')
    setGoogleLoading(true)

    const { error: oAuthError } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/dashboard`,
      },
    })

    if (oAuthError) {
      setError(oAuthError.message || 'Gagal registrasi dengan Google')
      setGoogleLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-[#020617] text-white grid grid-cols-1 lg:grid-cols-12 relative overflow-hidden selection:bg-orange-500/30">
      {/* BRANDING SECTION (LEFT SIDE) */}
      <div className="hidden lg:flex lg:col-span-5 xl:col-span-6 relative flex-col justify-between p-12 bg-slate-950 border-r border-white/5 overflow-hidden">
        {/* Background Gradients & Glows */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(234,88,12,0.08)_0%,transparent_60%)]" />
        <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-orange-600/5 rounded-full blur-[120px] pointer-events-none" />
        
        {/* Logo at the top left */}
        <div className="relative z-10">
          <Link href="/" className="inline-block hover:opacity-95 transition-opacity">
            <Logo />
          </Link>
        </div>

        {/* Content in the middle */}
        <div className="relative z-10 max-w-md my-auto">
          <span className="inline-block text-[10px] font-black text-[#FF6600] tracking-[0.2em] uppercase bg-orange-500/10 border border-orange-500/20 px-3 py-1.5 rounded-full">
            KASWIRA SMART POS
          </span>
          <h1 className="text-4xl xl:text-5xl font-black leading-tight tracking-tight text-white mt-6 mb-6">
            Mulai Bisnis Anda <br />
            <span className="text-[#FF6600]">Sekranag Juga</span>
          </h1>
          <p className="text-slate-400 text-base xl:text-lg mb-8 leading-relaxed">
            Daftar akun Kaswira hari ini untuk menikmati kemudahan transaksi penjualan, pengelolaan inventaris instan, dan pantau performa bisnis Anda dari mana saja.
          </p>

          {/* Testimonial / Trust Badge */}
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm shadow-xl">
            <p className="italic text-slate-300 text-sm leading-relaxed">
              "Proses pendaftaran sangat cepat dan sistemnya langsung siap digunakan. Membantu kami memantau penjualan harian tanpa ribet."
            </p>
            <div className="mt-4 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#FF6600]/20 border border-[#FF6600]/40 flex items-center justify-center font-bold text-xs text-[#FF6600]">
                KC
              </div>
              <div>
                <p className="text-xs font-bold text-white">Kaswira Coffee</p>
                <p className="text-[10px] text-slate-500">Pemilik Bisnis Kuliner</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer info at the bottom */}
        <div className="relative z-10 flex items-center justify-between text-xs text-slate-500">
          <span>&copy; {new Date().getFullYear()} Kaswira. All rights reserved.</span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Bantuan</a>
            <a href="#" className="hover:text-white transition-colors">Kebijakan Privasi</a>
          </div>
        </div>
      </div>

      {/* FORM SECTION (RIGHT SIDE) */}
      <div className="lg:col-span-7 xl:col-span-6 flex flex-col justify-center px-4 sm:px-6 lg:px-16 xl:px-24 py-12 relative z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(234,88,12,0.04)_0%,transparent_50%)] pointer-events-none" />
        
        {/* Mobile Logo (only shown on mobile) */}
        <div className="lg:hidden flex justify-center mb-8">
          <Link href="/" className="hover:opacity-95 transition-opacity">
            <Logo />
          </Link>
        </div>

        <div className="w-full max-w-md mx-auto">
          {/* Header */}
          <div className="mb-8 text-center lg:text-left">
            <h2 className="text-3xl font-black tracking-tight text-white">
              Daftar Akun Baru
            </h2>
            <p className="mt-2 text-sm text-slate-400">
              Sudah punya akun?{' '}
              <Link href="/login" className="font-bold text-[#FF6600] hover:text-orange-400 transition-colors">
                Masuk sekarang
              </Link>
            </p>
          </div>

          <div className="bg-slate-900/40 backdrop-blur-xl py-8 px-6 shadow-2xl border border-white/10 rounded-2xl sm:px-10">
            {error && (
              <div className="mb-4 p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium">
                {error}
              </div>
            )}

            <form className="space-y-5" onSubmit={handleRegister}>
              <div>
                <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-slate-400">
                  Nama Lengkap
                </label>
                <div className="mt-2 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                    <User size={16} />
                  </div>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="John Doe"
                    className="block w-full pl-10 pr-4 py-3 bg-slate-950/50 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#FF6600]/50 focus:border-[#FF6600] transition-all text-sm"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="businessName" className="block text-xs font-bold uppercase tracking-wider text-slate-400">
                  Nama Bisnis / Toko
                </label>
                <div className="mt-2 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                    <Store size={16} />
                  </div>
                  <input
                    id="businessName"
                    name="businessName"
                    type="text"
                    required
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    placeholder="Kaswira Coffee"
                    className="block w-full pl-10 pr-4 py-3 bg-slate-950/50 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#FF6600]/50 focus:border-[#FF6600] transition-all text-sm"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-400">
                  Alamat Email
                </label>
                <div className="mt-2 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                    <Mail size={16} />
                  </div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@company.com"
                    className="block w-full pl-10 pr-4 py-3 bg-slate-950/50 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#FF6600]/50 focus:border-[#FF6600] transition-all text-sm"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-xs font-bold uppercase tracking-wider text-slate-400">
                  Kata Sandi
                </label>
                <div className="mt-2 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                    <Lock size={16} />
                  </div>
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="block w-full pl-10 pr-10 py-3 bg-slate-950/50 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#FF6600]/50 focus:border-[#FF6600] transition-all text-sm"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-500 hover:text-white transition-colors"
                  >
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>

              <div>
                <label htmlFor="confirmPassword" className="block text-xs font-bold uppercase tracking-wider text-slate-400">
                  Konfirmasi Kata Sandi
                </label>
                <div className="mt-2 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                    <Lock size={16} />
                  </div>
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showConfirmPassword ? 'text' : 'password'}
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="••••••••"
                    className="block w-full pl-10 pr-10 py-3 bg-slate-950/50 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#FF6600]/50 focus:border-[#FF6600] transition-all text-sm"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-500 hover:text-white transition-colors"
                  >
                    {showConfirmPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>

              <div className="flex items-center">
                <input
                  id="agree-terms"
                  name="agree-terms"
                  type="checkbox"
                  checked={agreeTerms}
                  onChange={(e) => setAgreeTerms(e.target.checked)}
                  className="h-4 w-4 rounded bg-slate-950/50 border-white/10 text-[#FF6600] focus:ring-[#FF6600]/50"
                />
                <label htmlFor="agree-terms" className="ml-2 block text-xs font-semibold text-slate-400">
                  Saya menyetujui{' '}
                  <a href="#" className="underline text-white hover:text-orange-400 transition-colors">
                    Syarat dan Ketentuan
                  </a>
                </label>
              </div>

              <div>
                <button
                  type="submit"
                  disabled={isLoading || googleLoading}
                  className="w-full flex justify-center items-center py-3.5 px-4 bg-[#FF6600] hover:bg-[#ff7a20] disabled:bg-slate-800 disabled:text-slate-500 text-white rounded-xl text-xs font-black uppercase tracking-wider transition-all hover:scale-[1.02] active:scale-98 shadow-[0_10px_20px_-8px_rgba(255,102,0,0.35)] disabled:shadow-none"
                >
                  {isLoading ? (
                    <Loader2 size={16} className="animate-spin mr-2" />
                  ) : (
                    <>
                      Daftar Sekarang
                      <ArrowRight size={16} className="ml-2" />
                    </>
                  )}
                </button>
              </div>
            </form>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-white/10" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="px-2 bg-slate-900/60 text-slate-500 font-bold tracking-wider">Atau daftar dengan</span>
                </div>
              </div>

              <div className="mt-6">
                <button
                  type="button"
                  onClick={handleGoogleRegister}
                  disabled={isLoading || googleLoading}
                  className="w-full flex items-center justify-center py-3 px-4 bg-white/5 hover:bg-white/10 disabled:bg-transparent border border-white/10 rounded-xl text-xs font-bold text-white transition-all active:scale-98"
                >
                  {googleLoading ? (
                    <Loader2 size={16} className="animate-spin mr-2" />
                  ) : (
                    <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                      <path
                        fill="#EA4335"
                        d="M12 5.04c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 1.74 14.93 1 12 1 7.37 1 3.4 3.66 1.39 7.56l3.89 3.02C6.2 7.79 8.89 5.04 12 5.04z"
                      />
                      <path
                        fill="#4285F4"
                        d="M23.49 12.27c0-.81-.07-1.59-.2-2.36H12v4.51h6.46c-.28 1.48-1.12 2.74-2.38 3.58l3.7 2.87c2.16-1.99 3.41-4.92 3.41-8.6z"
                      />
                      <path
                        fill="#34A853"
                        d="M12 23c3.24 0 5.97-1.07 7.96-2.91l-3.7-2.87c-1.03.69-2.35 1.1-4.26 1.1-3.11 0-5.74-2.11-6.68-4.96l-3.9 3.02C3.48 20.34 7.42 23 12 23z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M5.32 13.36a7.16 7.16 0 0 1 0-4.72l-3.9-3.02a11.957 11.957 0 0 0 0 10.76l3.9-3.02z"
                      />
                    </svg>
                  )}
                  Daftar dengan Google
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}