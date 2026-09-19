import { Plus } from 'lucide-react'
import { Section, SectionHeading } from '@/components/Section'
import { Reveal } from '@/components/Reveal'
import { faqs, site } from '@/content/site'

export function Faq() {
  return (
    <Section id="faq" className="max-w-3xl">
      <SectionHeading eyebrow="FAQ" title="Questions, answered." />
      <Reveal className="mt-12 divide-y divide-line border-y border-line">
        {faqs.map((f) => (
          <details key={f.q} className="group py-1">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-lg font-medium [&::-webkit-details-marker]:hidden">
              {f.q}
              <Plus className="size-5 shrink-0 text-muted transition-transform group-open:rotate-45" aria-hidden />
            </summary>
            <p className="pb-6 pr-10 text-muted">{f.a}</p>
          </details>
        ))}
      </Reveal>
      {site.links.supportEmail && (
        <p className="mt-8 text-center text-muted">
          Still stuck? <a className="text-brand underline-offset-4 hover:underline" href={`mailto:${site.links.supportEmail}`}>Email support</a>.
        </p>
      )}
    </Section>
  )
}
