/**
 * Everything you are likely to edit lives in this file: store links, support contact, videos, pricing.
 * Components read from here, so the layout never needs touching for routine updates.
 */

export const site = {
  name: 'Henrik Transcribe',
  developer: 'Henry Wang',
  year: 2026,
  tagline: 'Private AI transcription for your Mac and iPhone.',

  /** Paste the App Store URLs here once they are live, e.g. https://apps.apple.com/app/id1234567890.
   *  Empty string = the button renders as a disabled "Coming soon" button instead of a dead link. */
  links: {
    macAppStore: 'https://apps.apple.com/app/henrik-transcribe/id6767550920',
    iosAppStore: '',
    /** Shown in the footer and FAQ. Leave empty to hide. */
    supportEmail: '',
    terms: 'https://www.apple.com/legal/internet-services/itunes/dev/stdeula/',
    /** On-site privacy page. Point at the existing Google Doc instead if you prefer. */
    privacy: 'privacy/',
  },
}

export type Video = {
  /** The 11-character ID from youtube.com/watch?v=<ID> */
  id: string
  title: string
  description: string
  platform: 'mac' | 'iphone' | 'both'
  /** Optional poster under public/, e.g. 'images/videos/intro.webp'. Without one a neutral card is shown, so
   *  the page makes no request to YouTube until someone presses play. */
  poster?: string
}

/** Add videos here. While this list is empty the Videos section (and its nav link) stays hidden. */
export const videos: Video[] = []

export const macFeatures = {
  summary: {
    eyebrow: 'AI Summary & Talk to Transcript',
    title: 'Turn an hour of audio into a page you can act on.',
    body: 'A local AI assistant writes the summary, pulls out key points, action items and chapters, and answers follow-up questions with clickable source timestamps. Choose a length and a style — meeting, podcast, interview or lecture.',
    points: [
      'Short, Standard or Detailed summaries',
      'Summaries in the recording’s own language, with an English translation one click away',
      'Answers cite the exact moment in the recording',
      'Runs on your Mac — nothing is sent to the cloud',
    ],
    image: 'images/mac/summary.webp',
    width: 1600,
    height: 857,
    alt: 'Henrik Transcribe on Mac: a Swedish transcript with speaker labels, and an AI summary with Swedish and English (translated) tabs.',
  },
  speakers: {
    eyebrow: 'Speaker diarization',
    title: 'Know who said what.',
    body: 'Speakers are detected and labelled automatically, each turn is timestamped, and playback follows along word by word. Rename speakers, fix a line, and export the result.',
    points: [
      'Colour-coded speaker turns with per-speaker summary',
      'Synchronised audio playback, word or sentence level',
      'Speakers are identified on your Mac’s GPU, with a live progress bar and Cancel',
      'Export as TXT, DOCX, PDF, Markdown, SRT or VTT',
    ],
    image: 'images/mac/speakers.webp',
    width: 1600,
    height: 861,
    alt: 'An uploaded file transcribed with colour-coded speaker turns, word-level audio sync and a Speaker Summary panel.',
  },
  liveDiarization: {
    eyebrow: 'New · Speakers for live recordings',
    title: 'Recorded it live? Add the speakers afterwards.',
    body: 'Live transcription is instant; full speaker identification takes a closer listen. One click runs the full Speaker Diarization Engine on a live recording’s saved audio and opens the result as a new transcript — labelled by speaker, with the original left untouched.',
    points: [
      'Apply Full Speaker Diarization from any saved live recording',
      'The result is a new session; your original transcript stays as it is',
      'Summaries, Ask and export work on the result straight away',
    ],
    image: 'images/mac/live-diarization.webp',
    width: 1600,
    height: 858,
    alt: 'A saved live recording with the Apply Full Speaker Diarization button, a tip explaining it, and an AI summary.',
  },
  youtube: {
    eyebrow: 'YouTube Summary',
    title: 'Paste a link. Get the whole video, distilled.',
    body: 'Drop in a YouTube link for a full transcript, an AI summary, auto-detected chapters, key insights and a Q&A assistant for the video — all processed locally.',
    points: ['Summary, Insights, Chapters, Transcript and Ask tabs', 'Also works with Vimeo, SVT Play, podcasts and RSS, or direct MP3/MP4 links', 'Downloads the audio and transcribes it offline'],
    image: 'images/mac/youtube-summary.webp',
    width: 1600,
    height: 857,
    alt: 'The YouTube Summary window with a list of summarised videos and a detailed meeting-style summary.',
  },
  voiceMemos: {
    eyebrow: 'New · Voice Memos',
    title: 'Record now. Transcribe when you need to.',
    body: 'A dedicated recorder for ideas, lectures and interviews. Memos stay as audio you can replay, trim and share — and when you want the words, one click transcribes a memo on your Mac and opens the same Summary, Insights and Ask tools.',
    points: [
      'Record, pause and resume with a live waveform',
      'Scrub the waveform, skip 15 s, play at 0.75× to 2×; trim with a one-click revert',
      'Favorites, folders, search, and Recently Deleted for 30 days',
      'Share with AirDrop, Mail or Messages; export M4A, WAV or the transcript',
    ],
    image: 'images/mac/voice-memos.webp',
    width: 1600,
    height: 889,
    alt: 'The Voice Memos window: a list of recordings, a waveform player with speed control, and Transcript, Summary, Insights and Ask tabs.',
  },
}

export const inputs = [
  {
    id: 'live',
    label: 'Live',
    title: 'Record and transcribe as you speak.',
    body: 'Capture your microphone, your Mac’s system audio or a single app, and words appear instantly — with optional on-device speaker labels. A waveform tracks the recording, then turns into a player so you can replay any moment under the transcript.',
    image: 'images/mac/live.webp',
    alt: 'The Live tab with System Audio and Choose App sources, a transcript, and a waveform player under it.',
  },
  {
    id: 'upload',
    label: 'Files',
    title: 'Drop in any audio or video file.',
    body: 'MP3, WAV, M4A, FLAC, AAC, MP4, MOV, MKV and more — over 50 formats. Transcripts arrive with timestamps and optional SRT/VTT subtitles.',
    image: 'images/mac/upload.webp',
    alt: 'The Upload tab with a drag-and-drop area for audio and video files.',
  },
  {
    id: 'web',
    label: 'Web links',
    title: 'Paste a link, skip the download.',
    body: 'YouTube, Vimeo, SVT Play & News, podcasts and RSS feeds, or direct MP3/MP4 links. The app fetches the audio and transcribes it offline.',
    image: 'images/mac/web.webp',
    alt: 'The Web tab listing supported sources: YouTube, Vimeo, SVT Play, podcasts and direct links.',
  },
]

export const workflows = [
  {
    title: 'Batch Transcribe',
    body: 'Queue many files in one window and let them run. Choose TXT, DOCX, PDF, Markdown, SRT or VTT output.',
    image: 'images/mac/batch.webp',
    alt: 'Batch Transcription window with a queue of files.',
  },
  {
    title: 'Watch Folders',
    body: 'Point the app at a folder. Every new file dropped in is transcribed automatically — a zero-touch pipeline.',
    image: 'images/mac/watch-folders.webp',
    alt: 'Watch Folders window that auto-transcribes new files.',
  },
  {
    title: 'Live Captions',
    body: 'A floating, real-time captions overlay for calls, streams or in-person conversations. Toggle it with ⌥C.',
    image: 'images/mac/live-captions.webp',
    alt: 'Live Captions window with audio source, language and overlay controls.',
  },
  {
    title: 'Podcast',
    body: 'A speaker-aware workflow for podcast production, with automatic multi-speaker labels and an editable transcript.',
    image: 'images/mac/podcast.webp',
    alt: 'Podcast Transcription window with an import area and speaker settings.',
  },
]

export const everyday = [
  {
    title: 'Meetings, menu bar & Shortcuts',
    body: 'When Zoom, Teams, FaceTime, Slack or a Google Meet tab starts using the microphone, a notification offers to record the call. Start and stop from the menu bar, and drive the app from Shortcuts, Raycast or Alfred with links.',
    image: 'images/mac/settings.webp',
    width: 1600,
    height: 960,
    alt: 'Settings: recording mode (microphone, system audio or both), meeting detection, and Show in Menu Bar with Shortcuts & Automation.',
  },
  {
    title: 'Your models, your choice',
    body: 'Pick the Whisper model that suits you — from Tiny to Large v3 Turbo — and the models for speaker identification and AI summaries. Download what you need, remove what you don’t; everything runs on your Mac.',
    image: 'images/mac/models.webp',
    width: 1600,
    height: 1051,
    alt: 'Settings › Models: Whisper models, the Whisper models for full speaker diarization with the engine status, and the local AI models.',
  },
]

export const iphoneScreens = [
  { image: 'images/iphone/transcribe.webp', alt: 'Record screen on iPhone with Record, File and Web Link tabs and a Start Recording button.', caption: 'Record, File or Web Link' },
  { image: 'images/iphone/sessions.webp', alt: 'Transcripts screen on iPhone with search and a saved recording.', caption: 'Every transcript, searchable' },
  { image: 'images/iphone/sync.webp', alt: 'Settings › Sync with Mac on iPhone: iCloud Drive, Google Drive, Dropbox, OneDrive or another folder.', caption: 'Sync with your Mac' },
  { image: 'images/iphone/settings.webp', alt: 'Settings on iPhone: appearance, language, microphone and the live transcription engine.', caption: 'Whisper or Apple Speech' },
  { image: 'images/iphone/license.webp', alt: 'Plans on iPhone: the free plan and a Monthly plan with a 1-month free trial.', caption: 'Live recording is free' },
  { image: 'images/iphone/plans.webp', alt: 'Plans on iPhone: Monthly, Yearly and a one-time Lifetime License.', caption: 'Monthly, Yearly or Lifetime' },
]

export const iphoneFeatures = [
  { title: 'Live recording — free forever', body: 'Unlimited length, no subscription required, ever.' },
  { title: 'Choose your engine', body: 'Offline Whisper AI, or Apple’s built-in on-device speech recognizer. Both run entirely on your iPhone.' },
  { title: 'Audio file transcription', body: 'Transcribe pre-recorded WAV files on-device.' },
  { title: 'Web link transcription', body: 'Paste a direct link to a WAV file; the app downloads and transcribes it.' },
  { title: '30+ languages', body: 'With an English-optimised model for extra accuracy.' },
  { title: 'History & sharing', body: 'Transcripts save automatically with editable titles. Search them, copy, or share via the iOS Share Sheet.' },
  { title: 'Sync with your Mac', body: 'Keep iPhone and Mac transcripts in step through a folder in your own iCloud Drive, Google Drive, Dropbox or OneDrive — no account with us, no server of ours.' },
  { title: 'Light, Dark or Automatic', body: 'Follows your iPhone’s appearance, or pick one.' },
]

/** true = included, false = not available, string = detail */
export const comparison: { feature: string; mac: boolean | string; iphone: boolean | string }[] = [
  { feature: 'Live microphone transcription', mac: 'Free forever', iphone: 'Free forever' },
  { feature: 'Audio & video files', mac: '50+ formats', iphone: 'WAV files' },
  { feature: 'Web links', mac: 'YouTube, SVT, podcasts & more', iphone: 'Direct WAV links' },
  { feature: 'Languages', mac: '99+', iphone: '30+' },
  { feature: 'Speaker diarization', mac: true, iphone: false },
  { feature: 'AI Summary & Talk to Transcript', mac: true, iphone: false },
  { feature: 'YouTube Summary & chapters', mac: true, iphone: false },
  { feature: 'Voice Memos (record, trim, share, transcribe)', mac: true, iphone: false },
  { feature: 'Batch, Watch Folders, Live Captions, Podcast', mac: true, iphone: false },
  { feature: 'SRT & VTT subtitle export', mac: true, iphone: false },
  { feature: 'Whisper model manager', mac: true, iphone: false },
  { feature: 'Session history, copy & share', mac: true, iphone: true },
  { feature: 'Sync transcripts via your own cloud drive', mac: true, iphone: true },
  { feature: 'Meeting detection, menu bar & Shortcuts', mac: true, iphone: false },
  { feature: '100% on-device processing', mac: true, iphone: true },
  { feature: 'Requires', mac: 'macOS 12+, Apple Silicon', iphone: 'iOS 16.4+, iPhone' },
]

export const plans = [
  {
    name: 'Free',
    price: '$0',
    cadence: 'forever',
    blurb: 'Live microphone transcription — unlimited, on both apps. No subscription, no sign-up.',
    perks: ['Unlimited live recording', 'Every supported language', 'Mac and iPhone', 'No ads, ever'],
    highlight: false,
    free: true,
    badge: 'Free forever' as string | undefined,
  },
  {
    name: 'Monthly',
    price: '$1.99',
    cadence: 'per month',
    blurb: 'Unlocks everything else. Cancel anytime in your Apple ID settings.',
    perks: ['File & web-link transcription', 'Full Mac toolkit', 'Works on Mac and iPhone', '1-month free trial'],
    highlight: false,
    badge: undefined,
  },
  {
    name: 'Annual',
    price: '$9.99',
    cadence: 'per year',
    blurb: 'The best value — about 58% less than paying monthly.',
    perks: ['File & web-link transcription', 'Full Mac toolkit', 'Works on Mac and iPhone', '1-month free trial'],
    highlight: true,
    badge: 'Best value',
  },
  {
    name: 'Lifetime',
    price: '$19.99',
    cadence: 'one time',
    blurb: 'Pay once. Unlimited access, forever, on both apps.',
    perks: ['File & web-link transcription', 'Full Mac toolkit', 'Works on Mac and iPhone', 'No renewals'],
    highlight: false,
    badge: undefined,
  },
]

export const faqs = [
  {
    q: 'Is my audio uploaded anywhere?',
    a: 'No. Transcription, speaker labelling and AI summaries all run on your device. The internet is used only to download AI models, fetch a link you paste, or verify your subscription. We never collect, store or transmit your audio, and there are no ads or tracking.',
  },
  {
    q: 'What is free, and what needs a purchase?',
    a: 'Live microphone transcription is free forever, with no length limit. Transcribing audio and video files and web links — and, on Mac, the full toolkit — is unlocked by a Monthly or Annual subscription, or a one-time Lifetime purchase.',
  },
  {
    q: 'Does one purchase cover both my Mac and my iPhone?',
    a: 'Yes. Mac and iPhone share a single App Store purchase, so a subscription or Lifetime license unlocks both. Sign in with the same Apple ID on each device and use Restore Purchases if it doesn’t appear straight away.',
  },
  {
    q: 'Do I need to create an account?',
    a: 'No. There is no Henrik Transcribe account. Purchases are handled by Apple through your Apple ID.',
  },
  {
    q: 'Do my transcripts sync between Mac and iPhone?',
    a: 'Yes, through a folder in your own cloud drive — iCloud Drive, Google Drive, Dropbox, OneDrive or any folder you choose. Pick the same folder in Settings on your Mac and your iPhone. Titles, text and favorites sync; audio stays on the device that recorded it. There is no account with us and no server of ours: your cloud drive’s own app moves the files.',
  },
  {
    q: 'Which languages are supported?',
    a: 'The Mac app detects and transcribes 99+ languages. The iPhone app supports 30+ languages, plus an English-optimised model.',
  },
  {
    q: 'Can I transcribe a YouTube video?',
    a: 'On Mac, yes — paste the link and the app downloads the audio and transcribes it, or produces a full AI summary with chapters. On iPhone, web-link transcription accepts direct links to WAV audio files.',
  },
  {
    q: 'What is Voice Memos, and how is it different from a live transcription?',
    a: 'Voice Memos (Mac, ⇧⌘M) keeps recordings as audio first: record from your microphone, then replay, trim, organise in folders and share them. Nothing is transcribed until you ask — then the memo gets an on-device transcript, summary, insights and a Q&A assistant, and also appears in Sessions. Recordings never leave your Mac. Voice Memos is included with any subscription or the Lifetime license.',
  },
  {
    q: 'Why does recording system or app audio ask for Screen & System Audio Recording?',
    a: 'macOS only lets apps capture other apps’ sound through that permission. Henrik Transcribe uses it for sound only and never saves or shares your screen. If recording fails, open System Settings › Privacy & Security › Screen & System Audio Recording, turn on Henrik Transcribe, and restart the app; the app shows these steps with a button that opens the right page. Microphone recording doesn’t need this permission.',
  },
  {
    q: 'What do I need to run it?',
    a: 'Mac: macOS 12 or later on an Apple Silicon Mac (M1 or newer). iPhone: iOS 16.4 or later.',
  },
  {
    q: 'How do I cancel a subscription?',
    a: 'In your Apple ID subscription settings — Apple handles all billing and cancellation. A Lifetime purchase is one-time and never renews.',
  },
]
