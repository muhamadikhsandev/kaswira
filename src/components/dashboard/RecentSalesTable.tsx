"use client"

import React, { useEffect, useState } from 'react'
import { createClient } from '@/utils/supabase/client'
import { Calendar, ShoppingBag, User, DollarSign, RefreshCw } from 'lucide-react'
import { toast } from 'sonner'

interface SaleItem {
  id: string
  invoice_number: string
  total_amount: number
  payment_method: string
  created_at: string
  customers: {
    name: string
  } | null
}

export default function RecentSalesTable() {
  const [sales, setSales] = useState<SaleItem[]>([])
  const [loading, setLoading] = useState(true)
  const supabase = createClient()

  const fetchRecentSales = async (showToast = false) => {
    try {
      setLoading(true)
      const { data, error } = await supabase
        .from('sales')
        .select(`
          id,
          invoice_number,
          total_amount,
          payment_method,
          created_at,
          customers (
            name
          )
        `)
        .order('created_at', { ascending: false })
        .limit(10)

      if (error) {
        throw error
      }

      setSales((data as any) || [])
      if (showToast) {
        toast.success('Daftar transaksi berhasil diperbarui')
      }
    } catch (err: any) {
      console.error('Error fetching sales:', err)
      toast.error(`Gagal memuat transaksi: ${err.message || 'Terjadi kesalahan'}`)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchRecentSales()
  }, [])

  // Format currency
  const formatRupiah = (amount: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  // Format date
  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString)
      return date.toLocaleDateString('id-ID', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      })
    } catch (e) {
      return dateString
    }
  }

  // Get payment method badge color
  const getPaymentBadge = (method: string) => {
    const cleanMethod = method?.toUpperCase() || ''
    if (cleanMethod === 'CASH' || cleanMethod === 'TUNAI') {
      return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
    } else if (cleanMethod === 'QRIS' || cleanMethod === 'GOPAY' || cleanMethod === 'OVO') {
      return 'bg-sky-500/10 text-sky-400 border-sky-500/20'
    } else if (cleanMethod === 'TRANSFER' || cleanMethod === 'BANK') {
      return 'bg-purple-500/10 text-purple-400 border-purple-500/20'
    }
    return 'bg-slate-500/10 text-slate-400 border-slate-500/20'
  }

  return (
    <div className="bg-slate-900/40 border border-white/5 rounded-2xl p-6 backdrop-blur-md flex flex-col h-full">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-black text-white tracking-tight">Transaksi Terakhir</h3>
          <p className="text-xs text-slate-400 mt-1">10 penjualan terbaru dari outlet Anda</p>
        </div>
        <button
          onClick={() => fetchRecentSales(true)}
          disabled={loading}
          className="p-2 bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white rounded-xl border border-white/5 transition-all hover:scale-105 active:scale-95 disabled:opacity-50"
          title="Refresh Transaksi"
        >
          <RefreshCw size={16} className={loading ? 'animate-spin' : ''} />
        </button>
      </div>

      <div className="overflow-x-auto rounded-xl border border-white/5 bg-slate-950/20">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-white/5 bg-slate-900/60 text-slate-400 text-xs font-bold uppercase tracking-wider">
              <th className="py-4 px-5">Invoice</th>
              <th className="py-4 px-5">Pelanggan</th>
              <th className="py-4 px-5">Metode</th>
              <th className="py-4 px-5 text-right">Total</th>
              <th className="py-4 px-5">Tanggal</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5 text-sm">
            {loading ? (
              // Loading Skeleton rows
              Array.from({ length: 5 }).map((_, index) => (
                <tr key={index} className="animate-pulse">
                  <td className="py-4 px-5"><div className="h-4 bg-white/5 rounded w-24"></div></td>
                  <td className="py-4 px-5"><div className="h-4 bg-white/5 rounded w-32"></div></td>
                  <td className="py-4 px-5"><div className="h-4 bg-white/5 rounded w-16"></div></td>
                  <td className="py-4 px-5 text-right"><div className="h-4 bg-white/5 rounded w-20 ml-auto"></div></td>
                  <td className="py-4 px-5"><div className="h-4 bg-white/5 rounded w-28"></div></td>
                </tr>
              ))
            ) : sales.length === 0 ? (
              <tr>
                <td colSpan={5} className="py-12 text-center text-slate-500 font-medium">
                  <div className="flex flex-col items-center justify-center gap-2">
                    <ShoppingBag size={32} className="text-slate-600 mb-1" />
                    <span>Belum ada transaksi tercatat</span>
                  </div>
                </td>
              </tr>
            ) : (
              sales.map((sale) => (
                <tr
                  key={sale.id}
                  className="hover:bg-white/5 transition-colors group"
                >
                  <td className="py-4 px-5 font-mono font-bold text-white text-xs tracking-wide group-hover:text-[#FF6600] transition-colors">
                    {sale.invoice_number}
                  </td>
                  <td className="py-4 px-5 text-slate-300 font-medium">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-white/5 flex items-center justify-center text-slate-500 text-[10px]">
                        <User size={10} />
                      </div>
                      {sale.customers?.name || 'Pelanggan Umum'}
                    </div>
                  </td>
                  <td className="py-4 px-5">
                    <span className={`inline-flex px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider border ${getPaymentBadge(sale.payment_method)}`}>
                      {sale.payment_method || 'Tunai'}
                    </span>
                  </td>
                  <td className="py-4 px-5 text-right font-bold text-white">
                    {formatRupiah(sale.total_amount)}
                  </td>
                  <td className="py-4 px-5 text-slate-400 text-xs">
                    <div className="flex items-center gap-1.5">
                      <Calendar size={12} className="text-slate-500" />
                      {formatDate(sale.created_at)}
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
