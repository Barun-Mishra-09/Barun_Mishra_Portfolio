import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cn } from '@/lib/utils'

const buttonVariants = {
  default:
    'bg-blue-600 text-white hover:bg-blue-500 shadow-sm shadow-blue-600/20 active:translate-y-px',
  outline:
    'border border-white/10 bg-transparent text-slate-200 hover:bg-white/[0.04] hover:text-white hover:border-white/20 active:translate-y-px',
  secondary:
    'bg-[#101722] text-slate-200 border border-white/10 hover:bg-[#162030] hover:text-white active:translate-y-px',
  ghost:
    'text-slate-400 hover:text-white hover:bg-white/[0.04]',
  link:
    'text-blue-400 underline-offset-4 hover:underline p-0 h-auto',
}

const buttonSizes = {
  default: 'h-10 px-4 py-2 text-sm',
  sm: 'h-8 rounded-md px-3 text-xs',
  lg: 'h-12 rounded-lg px-6 text-base font-medium',
  icon: 'h-10 w-10',
}

const Button = React.forwardRef(
  ({ className, variant = 'default', size = 'default', asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(
          'inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#05070B] disabled:pointer-events-none disabled:opacity-50',
          buttonVariants[variant] || buttonVariants.default,
          buttonSizes[size] || buttonSizes.default,
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button }
