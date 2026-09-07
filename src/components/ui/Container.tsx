import { type ReactNode } from 'react'
import type { ElementType } from 'react'
import { cn } from '@/lib/utils'

interface ContainerProps {
  children: ReactNode
  className?: string
  as?: ElementType
}

export function Container({ children, className, as: Tag = 'div' }: ContainerProps) {
  return (
    <Tag className={cn('mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12', className)}>
      {children}
    </Tag>
  )
}
