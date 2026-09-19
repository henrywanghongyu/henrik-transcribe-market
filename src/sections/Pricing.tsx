import { Check } from 'lucide-react'
import { Section, SectionHeading } from '@/components/Section'
import { Reveal } from '@/components/Reveal'
import { cn } from '@/lib/utils'
import { plans } from '@/content/site'

export function Pricing() {
  return (
    <section id="pricing" className="bg-surface-2">
      <Section>
        <SectionHeading
          eyebrow="Pricing"
          title="Free to record. One purchase for everything else."
          body="Live transcription costs nothing. Unlock files, web links and the full Mac toolkit with a subscription or a one-time Lifetime license — one purchase covers your Mac and your iPhone."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {plans.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.06}>
              <article
                className={cn(
                  'relative flex h-full flex-col rounded-3xl border bg-surface p-7',
                  p.highlight ? 'border-brand ring-2 ring-brand' : 'border-line',
                )}
              >
                {p.badge && (
                  <span className="absolute -top-3 left-7 rounded-full bg-brand px-3 py-1 text-xs font-semibold text-brand-ink">{p.badge}</span>
                )}
                <h3 className="text-lg font-semibold tracking-tight">{p.name}</h3>
                <p className="mt-4 flex items-baseline gap-2">
                  <span className="text-4xl font-semibold tracking-tight tabular-nums">{p.price}</span>
                  <span className="text-sm text-muted">{p.cadence}</span>
                </p>
                <p className="mt-3 text-sm text-muted">{p.blurb}</p>
                <ul className="mt-6 space-y-3 border-t border-line pt-6 text-sm">
                  {p.perks.map((perk) => (
                    <li key={perk} className="flex gap-2.5"><Check className="mt-0.5 size-4 shrink-0 text-brand" aria-hidden />{perk}</li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
        <p className="mx-auto mt-8 max-w-3xl text-center text-sm text-muted">
          Prices in USD; your local App Store price may differ. Subscriptions renew automatically until cancelled — manage or cancel any time in your Apple ID settings. Purchases are made in the App Store.
        </p>
      </Section>
    </section>
  )
}
