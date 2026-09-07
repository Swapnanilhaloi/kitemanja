import { type ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  eyebrow?: string
  title: ReactNode
  subtitle?: ReactNode
  align?: 'left' | 'center'
  light?: boolean
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  light = false,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'mb-10',
        align === 'center' && 'text-center',
        className
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            'mb-3 text-[11px] font-semibold uppercase tracking-[0.22em]',
            light ? 'text-brand-accent' : 'text-brand-primary'
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          'font-display text-3xl font-bold leading-[1.15] tracking-tight sm:text-4xl lg:text-[2.75rem]',
          light ? 'text-white' : 'text-brand-ink'
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            'mt-4 max-w-2xl text-base leading-relaxed sm:text-lg',
            align === 'center' && 'mx-auto',
            light ? 'text-white/70' : 'text-brand-muted'
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
