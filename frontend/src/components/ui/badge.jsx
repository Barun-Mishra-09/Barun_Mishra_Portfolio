import * as React from 'react'
import { cn } from '@/lib/utils'

const badgeVariants = {
  default: 'border-blue-500/30 bg-blue-500/10 text-blue-400',
  secondary: 'border-white/10 bg-white/[0.04] text-slate-300',
  outline: 'border-white/10 text-slate-400',
  success: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-400',
}

function Badge({ className, variant = 'default', ...props }) {
  return (
    <div
      className={cn(
        'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium tracking-wide transition-colors',
        badgeVariants[variant] || badgeVariants.default,
        className
      )}
      {...props}
    />
  )
}

export { Badge }
