"use client"

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Eye, EyeOff, Lock, Mail, ArrowRight, Loader2, ArrowLeft, ShieldCheck } from 'lucide-react'
import Logo from '@/components/landing/Logo'
import { createClient } from '@/utils/supabase/client'
import { toast } from 'sonner'

export default function AdminLoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const supabase = createClient()

  const handleAdminLogin = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email || !password) {
      toast.error('Harap isi semua kolom email dan password')
      return
    }

    setIsLoading(true)

    try {
      // 1. Lakukan autentikasi menggunakan Supabase Auth
      const { data, error: authError } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (authError) {
        toast.error('Kredensial salah atau Anda tidak memiliki akses admin.')
        setIsLoading(false)
        return
      }

      // 2. Ambil role dari app_metadata user
      const userRole = data.user?.app_metadata?.role
      let isAdmin = userRole === 'super_admin'

      // 3. Cadangan (Double Check): Jika metadata kosong, check langsung ke tabel profiles
      if (!isAdmin && data.user?.id) {
        const { data: profileData } = await supabase
          .from('profiles')
          .select('role')
          .eq('id', data.user.id)
          .single()

        if (profileData && profileData.role === 'super_admin') {
          isAdmin = true
        }
      }

      // 4. Jika terbukti BUKAN super_admin, paksa sign out dan tolak akses
      if (!isAdmin) {
        await supabase.auth.signOut()
        toast.error('Kredensial salah atau Anda tidak memiliki akses admin.')
        setIsLoading(false)
        return
      }

      // 5. Sukses tembus sebagai Superadmin
      toast.success('Selamat datang kembali, Superadmin!')
      
      // Redirect ke halaman dashboard admin
      router.push('/admin/dashboard')
      router.refresh()
    } catch (err: any) {
      console.error('Admin login error:', err)
      toast.error('Terjadi kesalahan saat mencoba masuk.')
      setIsLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-[#020617] text-white flex flex-col justify-center items-center p-4 relative overflow-hidden selection:bg-orange-500/30">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(234,88,12,0.08)_0%,transparent_60%)] pointer-events-none" />
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-orange-600/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-orange-600/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Main card */}
      <div className="w-full max-w-md z-10">
        {/* Logo and navigation links */}
        <div className="flex justify-between items-center mb-8">
          <Link href="/" className="hover:opacity-90 transition-opacity">
            <Logo />
          </Link>
          <Link 
            href="/" 
            className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-400 hover:text-[#FF6600] transition-colors group"
          >
            <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-0.5" />
            Ke Beranda
          </Link>
        </div>

        {/* Portal card */}
        <div className="bg-slate-900/40 border border-white/10 rounded-2xl p-8 backdrop-blur-xl shadow-2xl relative">
          {/* Subtle neon outline */}
          <div className="absolute inset-0 border border-orange-500/10 rounded-2xl pointer-events-none" />
          
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-1.5 text-[9px] font-black text-[#FF6600] tracking-[0.25em] uppercase bg-orange-500/10 border border-orange-500/20 px-3 py-1.5 rounded-full mb-4">
              <ShieldCheck size={12} />
              <span>SUPERADMIN PORTAL</span>
            </div>
            <h2 className="text-2xl font-black tracking-tight text-white">
              Login Admin Kaswira
            </h2>
            <p className="text-xs text-slate-400 mt-2">
              Gunakan akun admin terverifikasi untuk mengakses dashboard
            </p>
          </div>

          <form onSubmit={handleAdminLogin} className="space-y-5">
            <div>
              <label htmlFor="email" className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">
                Alamat Email Admin
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
                  placeholder="admin@company.com"
                  className="block w-full pl-10 pr-4 py-3 bg-slate-950/50 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#FF6600]/50 focus:border-[#FF6600] transition-all text-sm"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">
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
                  autoComplete="current-password"
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

            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex justify-center items-center mt-2 py-3.5 px-4 bg-[#FF6600] hover:bg-[#ff7a20] disabled:bg-slate-800 disabled:text-slate-500 text-white rounded-xl text-xs font-black uppercase tracking-wider transition-all hover:scale-[1.02] active:scale-98 shadow-[0_10px_20px_-8px_rgba(255,102,0,0.35)] disabled:shadow-none"
            >
              {isLoading ? (
                <Loader2 size={16} className="animate-spin mr-2" />
              ) : (
                <>
                  Masuk Ke Dashboard
                  <ArrowRight size={16} className="ml-2" />
                </>
              )}
            </button>
          </form>
        </div>

        {/* Back link for normal users */}
        <div className="text-center mt-6">
          <Link 
            href="/login" 
            className="text-xs font-bold text-slate-500 hover:text-white transition-colors"
          >
            Bukan Admin? Masuk ke Portal Owner di sini
          </Link>
        </div>
      </div>
    </main>
  )
}