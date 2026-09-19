import { asset, home } from '@/lib/utils'
import { site } from '@/content/site'

export function Footer() {
  const { links } = site
  const privacy = links.privacy.startsWith('http') ? links.privacy : home(links.privacy)
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-12 sm:px-8 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm">
          <div className="flex items-center gap-2.5 font-semibold tracking-tight">
            <img src={asset('images/common/app-icon.webp')} alt="" width={28} height={28} className="size-7 rounded-md" />
            {site.name}
          </div>
          <p className="mt-3 text-sm text-muted">{site.tagline} No ads. No tracking. Your audio never leaves your device.</p>
        </div>
        <ul className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-muted">
          <li><a className="hover:text-ink" href={privacy}>Privacy Policy</a></li>
          <li><a className="hover:text-ink" href={links.terms} target="_blank" rel="noopener">Terms of Use (EULA)</a></li>
          <li>
            <a className="hover:text-ink" href={links.supportEmail ? `mailto:${links.supportEmail}` : home('#faq')}>Support</a>
          </li>
        </ul>
      </div>
      <p className="mx-auto max-w-6xl px-5 pb-10 text-xs leading-relaxed text-muted sm:px-8">
        © {site.year} {site.developer}. Mac and iPhone are trademarks of Apple Inc. App Store is a service mark of Apple Inc. YouTube is a trademark of Google LLC. {site.name} is not affiliated with Apple or Google.
      </p>
    </footer>
  )
}
