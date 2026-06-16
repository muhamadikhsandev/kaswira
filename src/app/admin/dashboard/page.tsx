"use client"

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/utils/supabase/client'
import { toast } from 'sonner'
import { 
  DollarSign, 
  TrendingUp, 
  TrendingDown, 
  Package, 
  LogOut, 
  RefreshCw, 
  ShieldAlert,
  User,
  LayoutDashboard
} from 'lucide-react'

// Import modular components
import CardKPI from '@/components/dashboard/CardKPI'
import RecentSalesTable from '@/components/dashboard/RecentSalesTable'
import LowStockAlert from '@/components/dashboard/LowStockAlert'
import Logo from '@/components/landing/Logo'

export default function SuperadminDashboard() {
  const router = useRouter()
  const supabase = createClient()

  // Authentication & Profile State
  const [loadingAuth, setLoadingAuth] = useState(true)
  const [adminName, setAdminName] = useState('Superadmin')
  const [adminAvatar, setAdminAvatar] = useState<string | null>(null)

  // KPI Metrics State
  const [totalSales, setTotalSales] = useState(0)
  const [totalExpenses, setTotalExpenses] = useState(0)
  const [activeProductsCount, setActiveProductsCount] = useState(0)
  const [loadingKPI, setLoadingKPI] = useState(true)

  // Combined Refresh state
  const [refreshKey, setRefreshKey] = useState(0)

  // Auth & Admin Guard check
  useEffect(() => {
    const checkAdminSession = async () => {
      try {
        setLoadingAuth(true)
        const { data: { session } } = await supabase.auth.getSession()
        
        if (!session) {
          toast.error('Sesi berakhir. Harap masuk kembali ke portal admin.')
          router.push('/admin/login')
          return
        }

        const user = session.user
        const userEmail = user?.email || ''

        // 2. Ambil role dari app_metadata user
        const userRole = user?.app_metadata?.role
        let isAdmin = userRole === 'super_admin'

        // 3. Cadangan (Double Check): Jika metadata kosong, check langsung ke tabel profiles
        if (!isAdmin && user?.id) {
          const { data: profileData } = await supabase
            .from('profiles')
            .select('role')
            .eq('id', user.id)
            .single()

          if (profileData && profileData.role === 'super_admin') {
            isAdmin = true
          }
        }

        if (!isAdmin) {
          // Kick out non-admin users from admin dashboard
          await supabase.auth.signOut()
          toast.error('Sesi tidak valid atau Anda tidak memiliki akses admin.')
          router.push('/admin/login')
          return
        }

        // Fetch profile details
        const { data: profile, error } = await supabase
          .from('profiles')
          .select('full_name, avatar_url')
          .eq('id', user.id)
          .single()

        if (!error && profile) {
          if (profile.full_name) setAdminName(profile.full_name)
          if (profile.avatar_url) setAdminAvatar(profile.avatar_url)
        } else {
          setAdminName(userEmail.split('@')[0] || 'Superadmin')
        }

      } catch (err) {
        console.error('Superadmin session check error:', err)
        router.push('/admin/login')
      } finally {
        setLoadingAuth(false)
      }
    }

    checkAdminSession()
  }, [router, supabase])

  // Load KPI Metrics
  const fetchKPIData = async () => {
    try {
      setLoadingKPI(true)

      // 1. Fetch Sales for SUM
      const { data: sales, error: salesError } = await supabase
        .from('sales')
        .select('total_amount')

      if (salesError) throw salesError
      const sumSales = sales?.reduce((acc, curr) => acc + (Number(curr.total_amount) || 0), 0) || 0
      setTotalSales(sumSales)

      // 2. Fetch Expenses for SUM
      const { data: expenses, error: expensesError } = await supabase
        .from('expenses')
        .select('amount')

      if (expensesError) throw expensesError
      const sumExpenses = expenses?.reduce((acc, curr) => acc + (Number(curr.amount) || 0), 0) || 0
      setTotalExpenses(sumExpenses)

      // 3. Fetch Active Products Count
      const { count, error: productsError } = await supabase
        .from('products')
        .select('*', { count: 'exact', head: true })

      if (productsError) throw productsError
      setActiveProductsCount(count || 0)

    } catch (err: any) {
      console.error('Error loading Superadmin KPI:', err)
      toast.error(`Gagal memuat ringkasan KPI: ${err.message || 'Terjadi kesalahan'}`)
    } finally {
      setLoadingKPI(false)
    }
  }

  // Trigger KPI fetch when auth succeeds or refreshKey increments
  useEffect(() => {
    if (!loadingAuth) {
      fetchKPIData()
    }
  }, [loadingAuth, refreshKey])

  // Trigger manual refresh across the dashboard
  const handleRefreshAll = async () => {
    setRefreshKey(prev => prev + 1)
    toast.promise(fetchKPIData(), {
      loading: 'Memperbarui data superadmin...',
      success: 'Seluruh data superadmin berhasil diperbarui!',
      error: 'Gagal memperbarui data',
    })
  }

  // Logout Handler
  const handleLogout = async () => {
    try {
      const { error } = await supabase.auth.signOut()
      if (error) throw error

      toast.success('Sesi superadmin diakhiri')
      router.push('/admin/login')
      router.refresh()
    } catch (err: any) {
      toast.error(`Gagal keluar: ${err.message || 'Terjadi kesalahan'}`)
    }
  }

  // Calculated Profit
  const netProfit = totalSales - totalExpenses

  if (loadingAuth) {
    return (
      <div className="min-h-screen bg-[#020617] flex items-center justify-center text-white">
        <div className="flex flex-col items-center gap-4">
          <div className="w-10 h-10 border-4 border-orange-500 border-t-transparent rounded-full animate-spin" />
          <p className="text-sm font-semibold text-slate-400">Memverifikasi Hak Akses Admin...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 w-full max-w-7xl mx-auto space-y-8 relative z-10">
      {/* Background neon glows */}
      <div className="absolute top-0 left-0 right-0 h-[300px] bg-gradient-to-b from-orange-600/5 via-transparent to-transparent pointer-events-none -z-10" />
      <div className="absolute -top-40 right-10 w-[400px] h-[400px] bg-orange-600/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Title greeting banner */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 bg-slate-900/20 border border-white/5 p-6 rounded-2xl backdrop-blur-md">
        <div>
          <h1 className="text-2xl font-black text-white tracking-tight">Dashboard Ringkasan Platform</h1>
          <p className="text-sm text-slate-400 mt-1">Mengawasi seluruh transaksi, performa profitabilitas, dan stok inventori sistem Kaswira.</p>
        </div>
        <div className="flex items-center gap-3 self-start md:self-auto">
          <button
            onClick={handleRefreshAll}
            disabled={loadingKPI}
            className="px-4 py-2 bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white rounded-xl border border-white/5 flex items-center gap-2 text-xs font-bold transition-all hover:scale-105 active:scale-95 disabled:opacity-50"
          >
            <RefreshCw size={14} className={loadingKPI ? 'animate-spin' : ''} />
            <span>Refresh Data</span>
          </button>
          <div className="flex items-center gap-1.5 text-xs font-bold text-slate-400 bg-white/5 px-3 py-2 rounded-xl border border-white/5">
            <LayoutDashboard size={14} className="text-orange-500" />
            <span>Sistem RLS: Disabled</span>
          </div>
        </div>
      </div>

      {/* KPI Summary Grid */}
      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* 1. Total Penjualan */}
          <CardKPI
            title="Total Penjualan"
            value={loadingKPI ? 'Loading...' : totalSales}
            isCurrency={!loadingKPI}
            icon={<DollarSign size={20} />}
            variant="success"
            description="Pendapatan bruto sistem"
          />

          {/* 2. Total Pengeluaran */}
          <CardKPI
            title="Total Pengeluaran"
            value={loadingKPI ? 'Loading...' : totalExpenses}
            isCurrency={!loadingKPI}
            icon={<TrendingDown size={20} />}
            variant="danger"
            description="Beban operasional outlet"
          />

          {/* 3. Profit Bersih */}
          <CardKPI
            title="Profit Bersih"
            value={loadingKPI ? 'Loading...' : netProfit}
            isCurrency={!loadingKPI}
            icon={<TrendingUp size={20} />}
            variant={netProfit >= 0 ? 'success' : 'danger'}
            description="Akumulasi profit bersih platform"
          />

          {/* 4. Total Produk Aktif */}
          <CardKPI
            title="Total Produk"
            value={loadingKPI ? '...' : activeProductsCount}
            icon={<Package size={20} />}
            variant="info"
            description="Total SKU aktif terdaftar"
          />
        </div>
      </section>

      {/* Insights: Recent Transactions & Low Stock Alerts */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Recent Sales Table */}
        <div className="lg:col-span-8 h-full" key={`admin-sales-${refreshKey}`}>
          <RecentSalesTable />
        </div>

        {/* Low Stock Widget */}
        <div className="lg:col-span-4 h-full" key={`admin-stock-${refreshKey}`}>
          <LowStockAlert />
        </div>
      </section>
    </div>
  )
}
