import { Bug, HelpCircle, Mail, Star } from 'lucide-react'
import { site } from '@/content/site'
import { home } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const { links } = site
const mail = (subject: string, body = '') =>
  `mailto:${links.supportEmail}?subject=${encodeURIComponent(subject)}${body ? `&body=${encodeURIComponent(body)}` : ''}`

const problemTemplate = [
  'What happened:',
  '',
  'What I expected:',
  '',
  'Steps to reproduce:',
  '1. ',
  '',
  'App: Henrik Transcribe for Mac / iPhone (version: )',
  'macOS / iOS version: ',
].join('\n')

/** Embed form of a Tally share link (https://tally.so/r/<id> -> https://tally.so/embed/<id>). */
function tallyEmbed(url: string) {
  const id = url.match(/tally\.so\/(?:r|embed)\/([A-Za-z0-9]+)/)?.[1]
  return id ? `https://tally.so/embed/${id}?alignLeft=1&hideTitle=1&transparentBackground=1` : ''
}

const cards = [
  {
    Icon: Mail,
    title: 'Send feedback',
    body: 'Ideas, wishes, things you love or would change — it all goes straight to the developer and is read personally.',
    action: { label: 'Email feedback', href: mail('Henrik Transcribe feedback') },
  },
  {
    Icon: Bug,
    title: 'Report a problem',
    body: 'Tell us what happened and how to make it happen again. On Mac, Help › Send Feedback fills in your app and macOS versions for you, and Help › Show Diagnostic Log finds the log to attach.',
    action: { label: 'Report a problem', href: mail('Henrik Transcribe problem report', problemTemplate) },
  },
  {
    Icon: Star,
    title: 'Rate on the App Store',
    body: 'A rating or a short review helps other people find the app — and tells us what works.',
    action: { label: 'Write a review', href: links.writeReview, external: true },
  },
  {
    Icon: HelpCircle,
    title: 'Common questions',
    body: 'Pricing, privacy, syncing with your iPhone, system audio permissions and more.',
    action: { label: 'Read the FAQ', href: home('#faq') },
  },
]

export function Support() {
  const form = links.feedbackForm ? tallyEmbed(links.feedbackForm) : ''
  return (
    <main className="mx-auto max-w-4xl px-5 py-16 sm:px-8 md:py-24">
      <p className="text-sm font-semibold uppercase tracking-[0.12em] text-brand">Help &amp; Feedback</p>
      <h1 className="mt-3 text-4xl font-semibold leading-tight sm:text-5xl">How can we help?</h1>
      <p className="mt-4 max-w-2xl text-lg text-muted">
        {site.name} is made by one developer, {site.developer}. Every message is read — questions, bug reports and ideas
        all shape the next version for Mac and iPhone.
      </p>

      <ul className="mt-12 grid gap-5 sm:grid-cols-2">
        {cards.map(({ Icon, title, body, action }) => (
          <li key={title} className="flex flex-col rounded-3xl border border-line bg-surface p-7">
            <span className="grid size-11 place-items-center rounded-xl bg-brand-soft text-brand"><Icon className="size-5" aria-hidden /></span>
            <h2 className="mt-5 text-xl font-semibold tracking-tight">{title}</h2>
            <p className="mt-2 flex-1 text-muted">{body}</p>
            <a
              href={action.href}
              {...('external' in action && action.external ? { target: '_blank', rel: 'noopener' } : {})}
              className={cn(buttonVariants({ size: 'sm' }), 'mt-6 w-fit')}
            >
              {action.label}
            </a>
          </li>
        ))}
      </ul>

      {form && (
        <section aria-labelledby="form-title" className="mt-16">
          <h2 id="form-title" className="text-2xl font-semibold tracking-tight sm:text-3xl">Quick feedback form</h2>
          <p className="mt-2 text-muted">No email needed — answer a few questions and press Submit.</p>
          <iframe
            src={form}
            title="Henrik Transcribe feedback form"
            loading="lazy"
            className="mt-6 h-[640px] w-full rounded-2xl border border-line bg-surface"
          />
        </section>
      )}

      <p className="mt-16 text-sm text-muted">
        Prefer plain email? Write to <a className="text-brand underline-offset-4 hover:underline" href={`mailto:${links.supportEmail}`}>{links.supportEmail}</a>.
        Please don’t send recordings unless we ask — your audio is private, and we never need it to fix most problems.
      </p>
    </main>
  )
}
