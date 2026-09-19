import { StoreButtons } from '@/components/StoreButtons'
import { Reveal } from '@/components/Reveal'
import { asset } from '@/lib/utils'

export function Download() {
  return (
    <section id="download" className="mx-auto w-full max-w-6xl px-5 pb-24 sm:px-8 md:pb-32">
      <Reveal>
        <div className="rounded-[2rem] bg-ink px-6 py-16 text-center text-bg sm:px-12 md:py-20">
          <img src={asset('images/common/app-icon.webp')} alt="" width={72} height={72} className="mx-auto size-[72px] rounded-2xl" />
          <h2 className="mx-auto mt-8 max-w-2xl text-4xl font-semibold leading-[1.08] sm:text-5xl">Start transcribing — privately.</h2>
          <p className="mx-auto mt-5 max-w-xl text-lg opacity-75">Free live recording on both apps. One purchase unlocks the rest on Mac and iPhone.</p>
          {/* StoreButtons invert on a light ground; here the panel is already ink, so flip the badge colours. */}
          <div className="mt-9 flex justify-center [&_a]:bg-bg [&_a]:text-ink">
            <StoreButtons className="justify-center" />
          </div>
        </div>
      </Reveal>
    </section>
  )
}
