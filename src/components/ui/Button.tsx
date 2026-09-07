import { type ReactNode } from 'react'
import { cn } from '@/lib/utils'

type Variant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'light'
type Size = 'sm' | 'md' | 'lg'

interface ButtonProps {
  children: ReactNode
  variant?: Variant
  size?: Size
  href?: string
  onClick?: () => void
  className?: string
  external?: boolean
  disabled?: boolean
  type?: 'button' | 'submit'
  ariaLabel?: string
}

const variantClasses: Record<Variant, string> = {
  primary:
    'bg-brand-primary text-white hover:bg-[#0b67a8] border border-transparent shadow-sm',
  secondary:
    'bg-brand-ink text-white hover:bg-black border border-transparent shadow-sm',
  outline:
    'border border-brand-border text-brand-ink hover:border-brand-primary hover:text-brand-primary bg-transparent',
  ghost:
    'border border-white/30 text-white hover:bg-white/10 bg-transparent',
  light:
    'bg-brand-paper text-brand-ink hover:bg-white border border-brand-border',
}

const sizeClasses: Record<Size, string> = {
  sm: 'px-4 py-2 text-xs',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-3.5 text-sm',
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className,
  external = false,
  disabled = false,
  type = 'button',
  ariaLabel,
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-full font-semibold uppercase tracking-[0.12em] transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary cursor-pointer'

  const classes = cn(base, variantClasses[variant], sizeClasses[size], disabled && 'opacity-50 pointer-events-none', className)

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        aria-label={ariaLabel}
      >
        {children}
      </a>
    )
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={classes}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  )
}
