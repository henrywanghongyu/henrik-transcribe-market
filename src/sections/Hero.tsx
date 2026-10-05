import { Check, Lock, Mic } from 'lucide-react'
import { StoreButtons } from '@/components/StoreButtons'
import { Screenshot } from '@/components/Screenshot'
import { Reveal } from '@/components/Reveal'

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* soft brand glow behind the devices */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-40 -z-10 mx-auto h-[36rem] max-w-5xl rounded-full opacity-60 blur-3xl"
        style={{ background: 'radial-gradient(closest-side, var(--brand-soft), transparent)' }}
      />
      <div className="mx-auto max-w-6xl px-5 pb-16 pt-16 sm:px-8 md:pb-24 md:pt-24">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h1 className="text-5xl font-semibold leading-[1.03] sm:text-6xl md:text-7xl">
            Private transcription for Mac and iPhone.
          </h1>
          {/* The headline offer: live recording costs nothing, on both apps, with no time limit. */}
          <p className="mx-auto mt-6 inline-flex items-center gap-3 rounded-2xl bg-brand px-5 py-3 text-xl font-semibold text-brand-ink shadow-float sm:text-2xl md:text-3xl">
            <Mic className="size-6 shrink-0 md:size-7" aria-hidden />
            Live recording is free. Forever.
          </p>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted sm:text-xl">
            Whisper AI that runs entirely on your device. Record live, transcribe files and links, and on Mac keep Voice Memos and summarize with a local AI — no cloud, no uploads, no ads.
          </p>
          <StoreButtons className="mt-9 justify-center" />
          <ul className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-muted">
            <li className="inline-flex items-center gap-1.5">
              <Check className="size-4 text-brand" aria-hidden /> Free to download
            </li>
            <li className="inline-flex items-center gap-1.5">
              <Check className="size-4 text-brand" aria-hidden /> Unlimited live transcription — no subscription
            </li>
            <li className="inline-flex items-center gap-1.5">
              <Lock className="size-4" aria-hidden /> Your audio never leaves your device
            </li>
          </ul>
        </Reveal>

        <Reveal delay={0.1} className="relative mx-auto mt-14 max-w-5xl md:mt-20">
          <Screenshot
            src="images/mac/summary.webp"
            alt="Henrik Transcribe on Mac: a transcript with speaker labels and a bilingual AI summary."
            width={1600}
            height={857}
            frame="mac"
            priority
          />
          <div className="absolute -bottom-10 right-2 w-[28%] max-w-[210px] sm:right-6 md:-bottom-14 md:right-[-2%]">
            <Screenshot
              src="images/iphone/transcribe.webp"
              alt="Henrik Transcribe on iPhone, ready to record, with Record, File and Web Link tabs."
              width={750}
              height={1626}
              frame="phone"
              priority
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
