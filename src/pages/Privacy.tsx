import { site } from '@/content/site'
import { home } from '@/lib/utils'

const sections: { title: string; body: React.ReactNode }[] = [
  {
    title: 'Your audio stays on your device',
    body: (
      <p>
        {site.name} transcribes speech on your Mac or iPhone. We never collect, store or transmit your audio, your transcripts, your speaker labels or your AI summaries, and there is no cloud processing. Nothing you record is sent to us or to any AI service. The only time your transcripts leave the device is when you turn on <strong>Sync with Mac</strong> (below), which saves them in your own cloud drive.
      </p>
    ),
  },
  {
    title: 'AI features run on your device',
    body: (
      <>
        <p>AI Summary and Talk to Transcript (Ask) use one of two language models, both of which run entirely on your device:</p>
        <ul>
          <li><strong>Apple Intelligence</strong> — Apple’s on-device foundation model, built into iOS and macOS on supported devices.</li>
          <li><strong>Qwen</strong> — an open-source model made by Alibaba’s Qwen team. If you choose it, the app downloads the model file once from Hugging Face (huggingface.co) and then runs it locally. Only the model file is downloaded; Hugging Face sees the download request (like any website you visit) but never receives your transcripts.</li>
        </ul>
        <p>Your transcripts, questions and summaries are not sent to Apple, Alibaba, Hugging Face or any other AI service. The same applies to transcription (Whisper, or Apple’s speech recognizer in on-device-only mode) and to speaker identification.</p>
      </>
    ),
  },
  {
    title: 'Sync with Mac (optional, off by default)',
    body: (
      <>
        <p>
          If you turn on Sync with Mac, {site.name} keeps your transcripts in step between your iPhone and Mac through a folder you choose in your own cloud drive: iCloud Drive, Google Drive, Dropbox, OneDrive or another folder. Before anything is saved there, the app asks for your permission and names the drive and the company that runs it.
        </p>
        <ul>
          <li><strong>What is saved:</strong> each transcript’s title and text, plus its date, length, language, word count, source (such as the file name or web link it came from) and favorite mark, as files in that folder. Audio, speaker data and AI summaries stay on the device that made them.</li>
          <li><strong>Who stores it:</strong> the company that runs the drive you chose — Apple (iCloud Drive), Google (Google Drive), Dropbox, or Microsoft (OneDrive) — under its own privacy policy, through that drive’s own app. {site.name} does not sign in to the drive, has no server of its own and never receives these files.</li>
          <li><strong>Why:</strong> only so the same transcripts appear in the app on your other device.</li>
          <li><strong>Your control:</strong> turn sync off at any time in Settings › Sync with Mac. The files already in the folder stay there until you delete them in the drive.</li>
        </ul>
      </>
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
          <li><strong>Download AI models</strong> — speech-recognition and language models are fetched from public model hosts (Hugging Face) and then run locally.</li>
          <li><strong>Fetch a web link you paste</strong> — the app contacts the site you named to download that media, then transcribes it on your device.</li>
          <li><strong>Verify your subscription or purchase</strong> — handled by Apple’s App Store.</li>
          <li><strong>Sync with Mac</strong>, if you turn it on — your cloud drive’s own app uploads the transcript files to your drive (see above).</li>
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
        The apps ask for microphone access to record live speech and voice memos. On Mac, recording your system audio or a single app’s audio also needs Screen &amp; System Audio Recording permission; the app uses it for sound only and never saves or shares your screen. On iPhone, if you choose Apple’s built-in speech recognizer, the app also asks for Speech Recognition permission; it is used in on-device mode only. You can withdraw any of these permissions at any time in System Settings.
      </p>
    ),
  },
  {
    title: 'Data on your device',
    body: <p>Recordings, voice memos, transcripts and session history are stored locally by the app. Deleting the app, or deleting a session inside it, removes that data from your device. A deleted voice memo stays in Recently Deleted for 30 days, then is removed; you can also remove it permanently at once.</p>,
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
      <p className="mt-3 text-muted">Last updated October 12, 2026 · Applies to {site.name} for Mac and iPhone</p>
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
