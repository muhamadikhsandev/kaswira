"use client"

import React from 'react'

interface CardKPIProps {
  title: string
  value: number | string
  icon: React.ReactNode
  description?: string
  trend?: {
    value: number
    isPositive: boolean
  }
  variant?: 'success' | 'danger' | 'info' | 'warning'
  isCurrency?: boolean
}

export default function CardKPI({
  title,
  value,
  icon,
  description,
  trend,
  variant = 'info',
  isCurrency = false,
}: CardKPIProps) {
  // Format numeric value to Indonesian Rupiah if requested
  const formattedValue = React.useMemo(() => {
    if (isCurrency && typeof value === 'number') {
      return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }).format(value)
    }
    return value
  }, [value, isCurrency])

  // Style configurations based on variant
  const variantStyles = {
    success: {
      border: 'border-emerald-500/20 hover:border-emerald-500/40',
      iconBg: 'bg-emerald-500/10 text-emerald-400',
      glow: 'from-emerald-500/0 via-emerald-500/0 to-emerald-500/5',
      trendColor: 'text-emerald-400',
    },
    danger: {
      border: 'border-rose-500/20 hover:border-rose-500/40',
      iconBg: 'bg-rose-500/10 text-rose-400',
      glow: 'from-rose-500/0 via-rose-500/0 to-rose-500/5',
      trendColor: 'text-rose-400',
    },
    warning: {
      border: 'border-amber-500/20 hover:border-amber-500/40',
      iconBg: 'bg-amber-500/10 text-amber-400',
      glow: 'from-amber-500/0 via-amber-500/0 to-amber-500/5',
      trendColor: 'text-amber-400',
    },
    info: {
      border: 'border-sky-500/20 hover:border-sky-500/40',
      iconBg: 'bg-sky-500/10 text-sky-400',
      glow: 'from-sky-500/0 via-sky-500/0 to-sky-500/5',
      trendColor: 'text-sky-400',
    },
  }[variant]

  return (
    <div className={`relative overflow-hidden rounded-2xl bg-slate-900/40 border ${variantStyles.border} p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-black/50 backdrop-blur-md group`}>
      {/* Soft color glow effect on hover */}
      <div className={`absolute inset-0 bg-gradient-to-br ${variantStyles.glow} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

      <div className="flex items-center justify-between relative z-10">
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
            {title}
          </p>
          <h3 className="text-2xl font-black text-white tracking-tight">
            {formattedValue}
          </h3>
        </div>
        <div className={`p-3 rounded-xl ${variantStyles.iconBg} transition-transform duration-300 group-hover:scale-110`}>
          {icon}
        </div>
      </div>

      {(description || trend) && (
        <div className="mt-4 flex items-center gap-2 text-xs relative z-10">
          {trend && (
            <span className={`font-semibold ${trend.isPositive ? 'text-emerald-400' : 'text-rose-400'} bg-white/5 px-2 py-0.5 rounded-full`}>
              {trend.isPositive ? '+' : ''}
              {trend.value}%
            </span>
          )}
          {description && <span className="text-slate-500 font-medium">{description}</span>}
        </div>
      )}
    </div>
  )
}
