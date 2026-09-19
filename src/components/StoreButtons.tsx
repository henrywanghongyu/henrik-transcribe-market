import { Laptop, Smartphone } from 'lucide-react'
import { site } from '@/content/site'
import { cn } from '@/lib/utils'

const stores = [
  { key: 'mac', small: 'Download on the', big: 'Mac App Store', Icon: Laptop, href: site.links.macAppStore },
  { key: 'ios', small: 'Download on the', big: 'App Store', Icon: Smartphone, href: site.links.iosAppStore },
] as const

/** Badge-style buttons. Swap for Apple's official badge artwork when you have the store URLs (see README). */
export function StoreButtons({ className }: { className?: string }) {
  return (
    <div className={cn('flex flex-wrap items-center gap-3', className)}>
      {stores.map(({ key, small, big, Icon, href }) => {
        const live = href !== ''
        return (
          <a
            key={key}
            href={live ? href : undefined}
            aria-disabled={!live || undefined}
            target={live ? '_blank' : undefined}
            rel={live ? 'noopener' : undefined}
            className={cn(
              'flex h-14 items-center gap-3 rounded-xl bg-ink px-5 text-bg transition-transform hover:-translate-y-0.5',
              !live && 'pointer-events-none opacity-60',
            )}
          >
            <Icon className="size-7" strokeWidth={1.6} aria-hidden />
            <span className="flex flex-col text-left leading-tight">
              <span className="text-[0.7rem] opacity-80">{live ? small : 'Coming soon to the'}</span>
              <span className="text-lg font-semibold tracking-tight">{big}</span>
            </span>
          </a>
        )
      })}
    </div>
  )
}
