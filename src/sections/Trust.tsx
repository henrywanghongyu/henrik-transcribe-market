import { Cpu, Gift, ShieldCheck, Languages } from 'lucide-react'
import { Reveal } from '@/components/Reveal'

const items = [
  { Icon: ShieldCheck, title: '100% on-device', body: 'Audio never uploaded' },
  { Icon: Gift, title: 'Live recording is free', body: 'Unlimited, forever' },
  { Icon: Cpu, title: 'Apple Silicon fast', body: 'Neural Engine / Core ML' },
  { Icon: Languages, title: '99+ languages', body: '30+ on iPhone' },
]

export function Trust() {
  return (
    <section className="mx-auto mt-24 max-w-6xl px-5 sm:px-8 md:mt-32">
      <Reveal>
        <ul className="grid grid-cols-2 gap-6 rounded-3xl border border-line bg-surface p-6 sm:p-8 lg:grid-cols-4">
          {items.map(({ Icon, title, body }) => (
            <li key={title} className="flex items-start gap-3">
              <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-brand-soft text-brand"><Icon className="size-5" aria-hidden /></span>
              <div>
                <p className="font-semibold leading-tight">{title}</p>
                <p className="mt-1 text-sm text-muted">{body}</p>
              </div>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  )
}
