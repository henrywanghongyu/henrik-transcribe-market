import { site } from '@/content/site'
import { home } from '@/lib/utils'

// Privacy policy for the Mac app Henrik Imagine AI (a separate app from Henrik Transcribe).
// Keep this in step with the app's own Privacy & Your Data window (HenrikImageEditor
// Views/PrivacyView.swift): same connections, same local data, same controls.
const APP = 'Henrik Imagine AI'

const sections: { title: string; body: React.ReactNode }[] = [
  {
    title: 'Everything is created on your Mac',
    body: (
      <p>
        {APP} generates and edits images, transcribes your voice and tidies your prompts on your Mac. We never collect, store or transmit your prompts, your images, your voice or your transcripts. There is no cloud processing, and nothing you create is sent to us or to any third party.
      </p>
    ),
  },
  {
    title: 'No accounts, no ads, no tracking',
    body: (
      <p>
        You do not need an account to use {APP}. The app contains no advertising, no analytics and no tracking of your activity. The AI libraries it uses have their usage reporting switched off, and image generation runs with network access disabled.
      </p>
    ),
  },
  {
    title: 'When the app uses the internet',
    body: (
      <>
        <p>An internet connection is used only to download things, never to upload what you make:</p>
        <ul>
          <li><strong>AI models</strong>, when you download them in Models &amp; Setup: the speech-recognition model and the image model (Qwen-Image-2.1) from Hugging Face, and the AI engine from Google Drive.</li>
          <li><strong>Demo example images</strong> from Hugging Face, when you open the examples.</li>
          <li><strong>Links you click</strong>, such as the model license, which open in your web browser.</li>
        </ul>
        <p>These services receive an ordinary download request (such as your IP address, as with any website), never your prompts, images or recordings. Their own privacy policies apply to those requests.</p>
      </>
    ),
  },
  {
    title: 'Permissions',
    body: (
      <p>
        The app asks for microphone access so you can speak a prompt. It records only while you are recording in the prompt bar, and the audio is transcribed on your Mac. It can open only the images you choose to add and save only where you choose. You can withdraw microphone access at any time in System Settings › Privacy &amp; Security.
      </p>
    ),
  },
  {
    title: 'Data on your Mac',
    body: (
      <>
        <p>
          The app stores your images, prompts, voice recordings and their transcripts, and troubleshooting logs (which include your prompts) on your Mac. They never leave it unless you export or send them yourself.
        </p>
        <p>
          In the app, <strong>Privacy &amp; Your Data</strong> shows what is stored and lets you delete your voice recordings, your logs, or all your images and sessions; <strong>Models &amp; Setup</strong> lets you delete the downloaded models. Deleting the app removes all of it.
        </p>
      </>
    ),
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

export function ImaginePrivacy() {
  return (
    <main className="mx-auto w-full max-w-3xl px-5 py-16 sm:px-8 md:py-24">
      <a href={home()} className="text-sm text-muted hover:text-ink">← Back to {site.name}</a>
      <h1 className="mt-6 text-4xl font-semibold leading-tight sm:text-5xl">Privacy Policy</h1>
      <p className="mt-3 text-muted">Last updated September 25, 2026 · Applies to {APP} for Mac</p>
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
