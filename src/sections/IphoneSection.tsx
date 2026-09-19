import { Check } from 'lucide-react'
import { Section, SectionHeading } from '@/components/Section'
import { Reveal } from '@/components/Reveal'
import { Screenshot } from '@/components/Screenshot'
import { iphoneFeatures, iphoneScreens } from '@/content/site'

export function IphoneSection() {
  return (
    <section id="iphone" className="bg-surface-2">
      <Section>
        <SectionHeading
          eyebrow="On iPhone"
          title="Transcribe on the go — completely offline."
          body="Record live speech and watch it turn into text on your iPhone. Free forever for live recording; a license adds audio files and web links."
        />

        <div className="mt-16 grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="grid grid-cols-3 items-start gap-3 sm:gap-6 lg:col-span-7">
            {iphoneScreens.map((s, i) => (
              <Reveal key={s.image} delay={i * 0.08} className={i === 1 ? 'mt-8 sm:mt-14' : ''}>
                <figure>
                  <Screenshot src={s.image} alt={s.alt} width={750} height={1623} frame="phone" />
                  <figcaption className="mt-4 text-center text-xs text-muted sm:text-sm">{s.caption}</figcaption>
                </figure>
              </Reveal>
            ))}
          </div>

          <Reveal className="lg:col-span-5">
            <ul className="space-y-6">
              {iphoneFeatures.map((f) => (
                <li key={f.title} className="flex gap-4">
                  <span className="mt-1 grid size-6 shrink-0 place-items-center rounded-full bg-brand text-brand-ink">
                    <Check className="size-4" aria-hidden />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold tracking-tight">{f.title}</h3>
                    <p className="text-muted">{f.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>
    </section>
  )
}
