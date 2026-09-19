import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { asset, cn, home } from '@/lib/utils'
import { site, videos } from '@/content/site'
import { buttonVariants } from '@/components/ui/button'

const links = [
  { href: '#mac', label: 'Mac' },
  { href: '#iphone', label: 'iPhone' },
  { href: '#compare', label: 'Compare' },
  ...(videos.length > 0 ? [{ href: '#videos', label: 'Videos' }] : []),
  { href: '#pricing', label: 'Pricing' },
  { href: '#faq', label: 'FAQ' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-bg/80 backdrop-blur-xl">
      <nav aria-label="Main" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href={home()} className="flex items-center gap-2.5 font-semibold tracking-tight">
          <img src={asset('images/common/app-icon.webp')} alt="" width={32} height={32} className="size-8 rounded-lg" />
          {site.name}
        </a>

        <ul className="hidden items-center gap-8 text-[0.92rem] text-muted md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={home(l.href)} className="transition-colors hover:text-ink">{l.label}</a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a href={home('#download')} className={cn(buttonVariants({ size: 'sm' }), 'hidden sm:inline-flex')}>Get the apps</a>
          <button
            type="button"
            className="grid size-10 place-items-center rounded-full text-ink hover:bg-surface-2 md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-line bg-bg px-5 pb-5 pt-2 md:hidden">
          <ul className="flex flex-col">
            {[...links, { href: '#download', label: 'Get the apps' }].map((l) => (
              <li key={l.href}>
                <a href={home(l.href)} onClick={() => setOpen(false)} className="block py-3 text-lg font-medium">{l.label}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
