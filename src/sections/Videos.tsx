import { useState } from 'react'
import { Play } from 'lucide-react'
import { Section, SectionHeading } from '@/components/Section'
import { Reveal } from '@/components/Reveal'
import { asset, cn } from '@/lib/utils'
import { videos, type Video } from '@/content/site'

const platformLabel = { mac: 'Mac', iphone: 'iPhone', both: 'Mac & iPhone' } as const

/** Click-to-load embed: no third-party requests until play is pressed (youtube-nocookie.com). */
function VideoCard({ video }: { video: Video }) {
  const [playing, setPlaying] = useState(false)
  return (
    <article>
      <div className="relative aspect-video overflow-hidden rounded-2xl border border-line bg-[#0d0e12] shadow-float">
        {playing ? (
          <iframe
            className="absolute inset-0 size-full"
            src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&rel=0`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
          />
        ) : (
          <button type="button" onClick={() => setPlaying(true)} aria-label={`Play video: ${video.title}`} className="group absolute inset-0 grid place-items-center">
            {video.poster && <img src={asset(video.poster)} alt="" loading="lazy" className="absolute inset-0 size-full object-cover" />}
            <span className="relative grid size-16 place-items-center rounded-full bg-brand text-brand-ink shadow-lg transition-transform group-hover:scale-105">
              <Play className="ml-0.5 size-7 fill-current" aria-hidden />
            </span>
          </button>
        )}
      </div>
      <p className="mt-4 text-xs font-semibold uppercase tracking-[0.12em] text-brand">{platformLabel[video.platform]}</p>
      <h3 className="mt-1 text-lg font-semibold tracking-tight">{video.title}</h3>
      <p className="mt-1 text-muted">{video.description}</p>
    </article>
  )
}

export function Videos() {
  if (videos.length === 0) return null
  const [lead, ...rest] = videos
  return (
    <Section id="videos">
      <SectionHeading eyebrow="Watch" title="See it in action." body="Short walkthroughs of the Mac and iPhone apps." />
      <div className="mt-14 space-y-10">
        <Reveal className="mx-auto max-w-4xl"><VideoCard video={lead} /></Reveal>
        {rest.length > 0 && (
          <div
            className={cn(
              'mx-auto grid gap-10 sm:grid-cols-2',
              rest.length % 3 === 0 && 'lg:grid-cols-3',
              rest.length % 3 !== 0 && 'max-w-4xl',
              rest.length === 1 && 'max-w-md sm:grid-cols-1',
            )}
          >
            {rest.map((v, i) => <Reveal key={v.id} delay={(i % 3) * 0.06}><VideoCard video={v} /></Reveal>)}
          </div>
        )}
      </div>
    </Section>
  )
}
