"use client"

import React, { useEffect, useState } from 'react'
import { createClient } from '@/utils/supabase/client'
import { AlertTriangle, Archive, RefreshCw } from 'lucide-react'
import { toast } from 'sonner'

interface ProductItem {
  id: string
  name: string
  sku: string
  stock: number
}

export default function LowStockAlert() {
  const [products, setProducts] = useState<ProductItem[]>([])
  const [loading, setLoading] = useState(true)
  const supabase = createClient()

  const fetchLowStock = async (showToast = false) => {
    try {
      setLoading(true)
      const { data, error } = await supabase
        .from('products')
        .select('id, name, sku, stock')
        .lt('stock', 10)
        .order('stock', { ascending: true })

      if (error) {
        throw error
      }

      setProducts(data || [])
      if (showToast) {
        toast.success('Peringatan stok berhasil diperbarui')
      }
    } catch (err: any) {
      console.error('Error fetching low stock:', err)
      toast.error(`Gagal memuat produk stok tipis: ${err.message || 'Terjadi kesalahan'}`)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchLowStock()
  }, [])

  // Stock status text & style helpers
  const getStockStatus = (stock: number) => {
    if (stock <= 0) {
      return {
        label: 'HABIS',
        badgeClass: 'bg-rose-500/10 text-rose-400 border-rose-500/20',
        progressBarClass: 'bg-rose-500/20 w-0',
        textClass: 'text-rose-400',
      }
    } else if (stock <= 3) {
      return {
        label: 'KRITIS',
        badgeClass: 'bg-orange-500/10 text-orange-400 border-orange-500/20',
        progressBarClass: 'bg-orange-500 w-1/3',
        textClass: 'text-orange-400',
      }
    } else {
      return {
        label: 'MENIPIS',
        badgeClass: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
        progressBarClass: 'bg-amber-500 w-2/3',
        textClass: 'text-amber-400',
      }
    }
  }

  return (
    <div className="bg-slate-900/40 border border-white/5 rounded-2xl p-6 backdrop-blur-md flex flex-col h-full">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <div className="p-2 bg-amber-500/10 text-amber-400 rounded-xl border border-amber-500/20 animate-pulse">
            <AlertTriangle size={18} />
          </div>
          <div>
            <h3 className="text-lg font-black text-white tracking-tight">Peringatan Stok</h3>
            <p className="text-xs text-slate-400 mt-1">Produk dengan stok di bawah 10 unit</p>
          </div>
        </div>
        <button
          onClick={() => fetchLowStock(true)}
          disabled={loading}
          className="p-2 bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white rounded-xl border border-white/5 transition-all hover:scale-105 active:scale-95 disabled:opacity-50"
          title="Refresh Stok"
        >
          <RefreshCw size={16} className={loading ? 'animate-spin' : ''} />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto max-h-[380px] pr-1 space-y-3 scrollbar-thin scrollbar-thumb-white/5">
        {loading ? (
          // Skeleton loading
          Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="p-4 rounded-xl border border-white/5 bg-slate-950/20 animate-pulse flex flex-col gap-2">
              <div className="flex justify-between">
                <div className="h-4 bg-white/5 rounded w-1/2"></div>
                <div className="h-4 bg-white/5 rounded w-16"></div>
              </div>
              <div className="h-3 bg-white/5 rounded w-1/3"></div>
            </div>
          ))
        ) : products.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-12 text-center text-slate-500 h-full">
            <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-3">
              <Archive size={20} />
            </div>
            <p className="text-sm font-semibold text-slate-300">Stok Aman & Stabil</p>
            <p className="text-xs text-slate-500 mt-1">Tidak ada produk yang stoknya menipis saat ini.</p>
          </div>
        ) : (
          products.map((product) => {
            const status = getStockStatus(product.stock)
            return (
              <div
                key={product.id}
                className="p-4 rounded-xl border border-white/5 bg-slate-950/20 hover:bg-white/5 hover:border-white/10 transition-all flex flex-col gap-3 group relative overflow-hidden"
              >
                {/* Visual side-border matching severity */}
                <div className={`absolute left-0 top-0 bottom-0 w-1 ${product.stock <= 0 ? 'bg-rose-500' : product.stock <= 3 ? 'bg-orange-500' : 'bg-amber-500'}`} />

                <div className="flex items-start justify-between gap-3 pl-2">
                  <div>
                    <h4 className="text-sm font-bold text-white leading-tight group-hover:text-[#FF6600] transition-colors">
                      {product.name}
                    </h4>
                    <p className="text-[10px] font-mono text-slate-500 font-bold uppercase tracking-wider mt-1">
                      SKU: {product.sku || '-'}
                    </p>
                  </div>
                  <span className={`inline-flex px-2 py-0.5 rounded-full text-[9px] font-black tracking-wider border ${status.badgeClass}`}>
                    {status.label}
                  </span>
                </div>

                <div className="pl-2">
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="text-slate-400">Sisa Stok</span>
                    <span className={`font-black ${status.textClass}`}>
                      {product.stock} Unit
                    </span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-950 rounded-full overflow-hidden">
                    <div className={`h-full rounded-full transition-all duration-500 ${status.progressBarClass}`} style={{ width: `${Math.min((product.stock / 10) * 100, 100)}%` }} />
                  </div>
                </div>
              </div>
            )
          })
        )}
      </div>
    </div>
  )
}
