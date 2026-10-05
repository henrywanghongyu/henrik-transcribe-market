import { Mic } from 'lucide-react'
import { StoreButtons } from '@/components/StoreButtons'
import { Reveal } from '@/components/Reveal'

/** Full-width brand band that repeats the headline offer between sections, with the download buttons. */
export function FreeBanner() {
  return (
    <section aria-labelledby="free-banner-title" className="bg-brand text-brand-ink">
      <div className="mx-auto max-w-6xl px-5 py-14 text-center sm:px-8 md:py-20">
        <Reveal>
          <span className="mx-auto grid size-14 place-items-center rounded-2xl bg-brand-ink/15" aria-hidden>
            <Mic className="size-7" />
          </span>
          <h2 id="free-banner-title" className="mx-auto mt-6 max-w-3xl text-4xl font-semibold leading-[1.05] sm:text-5xl md:text-6xl">
            Live recording is free. Forever.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg opacity-90 sm:text-xl">
            Unlimited length, every language, on your Mac and your iPhone — no subscription, no sign-up, no ads.
          </p>
          {/* Badges are ink-on-light elsewhere; on the brand ground they read better light. */}
          <div className="mt-9 flex justify-center [&_a]:bg-bg [&_a]:text-ink">
            <StoreButtons className="justify-center" />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
