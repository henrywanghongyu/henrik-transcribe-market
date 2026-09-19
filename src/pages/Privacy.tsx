import { site } from '@/content/site'
import { home } from '@/lib/utils'

const sections: { title: string; body: React.ReactNode }[] = [
  {
    title: 'Your audio stays on your device',
    body: (
      <p>
        {site.name} transcribes speech on your Mac or iPhone. We never collect, store or transmit your audio, your transcripts, your speaker labels or your AI summaries. There is no cloud processing, and nothing you record is sent to us or to any third party.
      </p>
    ),
  },
  {
    title: 'No accounts, no ads, no tracking',
    body: <p>You do not need an account to use {site.name}. The apps contain no advertising and no analytics or tracking of your activity.</p>,
  },
  {
    title: 'When the apps use the internet',
    body: (
      <>
        <p>An internet connection is used only to:</p>
        <ul>
          <li><strong>Download AI models</strong> — speech-recognition and language models are fetched from public model hosts and then run locally.</li>
          <li><strong>Fetch a web link you paste</strong> — the app contacts the site you named to download that media, then transcribes it on your device.</li>
          <li><strong>Verify your subscription or purchase</strong> — handled by Apple’s App Store.</li>
        </ul>
        <p>Transcription, speaker diarization and AI analysis never leave your device.</p>
      </>
    ),
  },
  {
    title: 'Purchases',
    body: <p>Subscriptions and the Lifetime license are sold and billed by Apple. We do not receive your payment details. Cancellation and billing are managed in your Apple ID settings.</p>,
  },
  {
    title: 'Permissions',
    body: (
      <p>
        The apps ask for microphone access to record live speech. On iPhone, if you choose Apple’s built-in speech recognizer, the app also asks for Speech Recognition permission; it is used in on-device mode only. You can withdraw either permission at any time in system Settings.
      </p>
    ),
  },
  {
    title: 'Data on your device',
    body: <p>Recordings, transcripts and session history are stored locally by the app. Deleting the app, or deleting a session inside it, removes that data from your device.</p>,
  },
  {
    title: 'Changes to this policy',
    body: <p>If this policy changes, the updated version will be posted on this page with a new date.</p>,
  },
  {
    title: 'Contact',
    body: site.links.supportEmail ? (
      <p>Questions about privacy? Email <a href={`mailto:${site.links.supportEmail}`}>{site.links.supportEmail}</a>.</p>
    ) : (
      <p>Questions about privacy? Use the support link on our App Store listing.</p>
    ),
  },
]

export function Privacy() {
  return (
    <main className="mx-auto w-full max-w-3xl px-5 py-16 sm:px-8 md:py-24">
      <a href={home()} className="text-sm text-muted hover:text-ink">← Back to {site.name}</a>
      <h1 className="mt-6 text-4xl font-semibold leading-tight sm:text-5xl">Privacy Policy</h1>
      <p className="mt-3 text-muted">Last updated September 19, 2026 · Applies to {site.name} for Mac and iPhone</p>
      <div className="mt-12 space-y-10">
        {sections.map((s) => (
          <section key={s.title}>
            <h2 className="text-2xl font-semibold">{s.title}</h2>
            <div className="mt-3 space-y-3 text-muted [&_a]:text-brand [&_a]:underline [&_li]:mt-2 [&_strong]:font-semibold [&_strong]:text-ink [&_ul]:list-disc [&_ul]:pl-6">{s.body}</div>
          </section>
        ))}
      </div>
    </main>
  )
}
