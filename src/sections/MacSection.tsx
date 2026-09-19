import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Check } from 'lucide-react'
import { Section, SectionHeading } from '@/components/Section'
import { Reveal } from '@/components/Reveal'
import { Screenshot } from '@/components/Screenshot'
import { cn } from '@/lib/utils'
import { inputs, macFeatures, workflows } from '@/content/site'

type Feature = (typeof macFeatures)[keyof typeof macFeatures]

function FeatureRow({ feature, reverse }: { feature: Feature; reverse?: boolean }) {
  return (
    <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
      <Reveal className={cn('lg:col-span-5', reverse && 'lg:order-2')}>
        <p className="text-sm font-semibold uppercase tracking-[0.12em] text-brand">{feature.eyebrow}</p>
        <h3 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">{feature.title}</h3>
        <p className="mt-4 text-muted">{feature.body}</p>
        <ul className="mt-6 space-y-3">
          {feature.points.map((p) => (
            <li key={p} className="flex gap-3 text-[0.95rem]">
              <Check className="mt-1 size-4 shrink-0 text-brand" aria-hidden /> {p}
            </li>
          ))}
        </ul>
      </Reveal>
      <Reveal delay={0.08} className={cn('lg:col-span-7', reverse && 'lg:order-1')}>
        <Screenshot src={feature.image} alt={feature.alt} width={1280} height={800} frame="mac" />
      </Reveal>
    </div>
  )
}

function InputTabs() {
  const [active, setActive] = useState(inputs[0].id)
  const current = inputs.find((i) => i.id === active) ?? inputs[0]
  return (
    <div className="rounded-3xl border border-line bg-surface-2 p-5 sm:p-8 lg:p-10">
      <div role="tablist" aria-label="Ways to add audio" className="mx-auto flex w-fit max-w-full gap-1 overflow-x-auto rounded-full bg-surface p-1 ring-1 ring-line">
        {inputs.map((i) => (
          <button
            key={i.id}
            role="tab"
            id={`tab-${i.id}`}
            aria-selected={i.id === active}
            aria-controls={`panel-${i.id}`}
            onClick={() => setActive(i.id)}
            className={cn(
              'rounded-full px-5 py-2 text-sm font-medium transition-colors',
              i.id === active ? 'bg-brand text-brand-ink' : 'text-muted hover:text-ink',
            )}
          >
            {i.label}
          </button>
        ))}
      </div>

      <div className="mt-8 grid items-center gap-8 lg:grid-cols-12 lg:gap-12" role="tabpanel" id={`panel-${current.id}`} aria-labelledby={`tab-${current.id}`}>
        <div className="lg:col-span-4">
          <h3 className="text-2xl font-semibold leading-tight sm:text-3xl">{current.title}</h3>
          <p className="mt-4 text-muted">{current.body}</p>
        </div>
        <div className="lg:col-span-8">
          <AnimatePresence mode="wait">
            <motion.div key={current.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
              <Screenshot src={current.image} alt={current.alt} width={1280} height={800} frame="mac" />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}

export function MacSection() {
  return (
    <Section id="mac">
      <SectionHeading
        eyebrow="On Mac"
        title="A full transcription studio, on your desktop."
        body="Optimised for Apple Silicon and built for real workflows — from a single voice note to a folder of interviews."
      />

      <div className="mt-20 space-y-24 md:mt-28 md:space-y-32">
        <FeatureRow feature={macFeatures.summary} />
        <FeatureRow feature={macFeatures.speakers} reverse />
        <FeatureRow feature={macFeatures.youtube} />
      </div>

      <div className="mt-24 md:mt-32">
        <Reveal><h3 className="mb-8 text-center text-3xl font-semibold sm:text-4xl">Bring audio in any way you like.</h3></Reveal>
        <Reveal delay={0.05}><InputTabs /></Reveal>
      </div>

      <div className="mt-24 md:mt-32">
        <Reveal><h3 className="mb-10 text-center text-3xl font-semibold sm:text-4xl">Automate the busywork.</h3></Reveal>
        <div className="grid gap-6 sm:grid-cols-2">
          {workflows.map((w, i) => (
            <Reveal key={w.title} delay={(i % 2) * 0.08}>
              <article className="h-full overflow-hidden rounded-3xl border border-line bg-surface">
                <div className="p-3 pb-0 sm:p-4 sm:pb-0">
                  <Screenshot src={w.image} alt={w.alt} width={1280} height={800} frame="mac" className="shadow-none" />
                </div>
                <div className="p-6 sm:p-7">
                  <h4 className="text-xl font-semibold tracking-tight">{w.title}</h4>
                  <p className="mt-2 text-muted">{w.body}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  )
}
