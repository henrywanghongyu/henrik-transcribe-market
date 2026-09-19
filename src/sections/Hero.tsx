import { Lock, Sparkles } from 'lucide-react'
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
          <p className="mx-auto inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-1.5 text-sm text-muted">
            <Sparkles className="size-4 text-brand" aria-hidden /> Live recording is free — forever
          </p>
          <h1 className="mt-6 text-5xl font-semibold leading-[1.03] sm:text-6xl md:text-7xl">
            Private transcription for Mac and iPhone.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted sm:text-xl">
            Whisper AI that runs entirely on your device. Record live, transcribe files and links, and on Mac summarize with a local AI — no cloud, no uploads, no ads.
          </p>
          <StoreButtons className="mt-9 justify-center" />
          <p className="mt-5 inline-flex items-center gap-2 text-sm text-muted">
            <Lock className="size-4" aria-hidden /> Your audio never leaves your device
          </p>
        </Reveal>

        <Reveal delay={0.1} className="relative mx-auto mt-14 max-w-5xl md:mt-20">
          <Screenshot
            src="images/mac/summary.webp"
            alt="Henrik Transcribe on Mac: a transcript with an AI summary and a Talk to Transcript chat."
            width={1280}
            height={800}
            frame="mac"
            priority
          />
          <div className="absolute -bottom-10 right-2 w-[28%] max-w-[210px] sm:right-6 md:-bottom-14 md:right-[-2%]">
            <Screenshot
              src="images/iphone/transcribe.webp"
              alt="Henrik Transcribe on iPhone with Record, File and Web tabs."
              width={750}
              height={1623}
              frame="phone"
              priority
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
