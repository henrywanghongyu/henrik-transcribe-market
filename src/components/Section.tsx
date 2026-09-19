import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { Reveal } from './Reveal'

export function Section({ id, className, children }: { id?: string; className?: string; children: ReactNode }) {
  return (
    <section id={id} className={cn('mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 md:py-28', className)}>
      {children}
    </section>
  )
}

export function SectionHeading({ eyebrow, title, body, align = 'center' }: { eyebrow: string; title: string; body?: string; align?: 'center' | 'left' }) {
  return (
    <Reveal className={cn('max-w-2xl', align === 'center' && 'mx-auto text-center')}>
      <p className="text-sm font-semibold uppercase tracking-[0.12em] text-brand">{eyebrow}</p>
      <h2 className="mt-3 text-4xl font-semibold leading-[1.08] sm:text-5xl">{title}</h2>
      {body && <p className="mt-5 text-lg text-muted">{body}</p>}
    </Reveal>
  )
}
