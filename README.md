# Henrik Transcribe — marketing site

Static landing page for **Henrik Transcribe** (macOS + iPhone), hosted on GitHub Pages.
Its job is to send visitors to the Mac App Store and the App Store — it does not host the apps.

**Stack:** React 19 · TypeScript · Vite · Tailwind CSS v4 · Motion · Lucide · shadcn/ui-style components
**Deploy:** GitHub Actions → GitHub Pages (`.github/workflows/deploy.yml`)

## Run locally

```bash
npm install
npm run dev        # http://localhost:5173/henrik-transcribe-market/
npm run build      # type-checks, then writes ./dist
npm run preview    # serves ./dist
```

## Where to edit things

Almost everything you'll change routinely is in **`src/content/site.ts`**:

| To change… | Edit |
| --- | --- |
| App Store / Mac App Store buttons | `site.links.macAppStore`, `site.links.iosAppStore` (empty = disabled "Coming soon" button) |
| Support email (footer + FAQ) | `site.links.supportEmail` (empty = hidden) |
| YouTube videos | the `videos` array — while it is empty the Videos section and its nav link are hidden |
| Pricing, FAQ, feature copy, Mac-vs-iPhone table | `plans`, `faqs`, `macFeatures`, `comparison`, … |

Pages: `index.html` (home) and `privacy/index.html` (Privacy Policy, from `src/pages/Privacy.tsx`).

### Adding a video
Upload to YouTube, then add `{ id: '<11-char id>', title, description, platform }` to `videos`.
Embeds are click-to-load (`youtube-nocookie.com`), so the page makes no request to YouTube until someone presses play.
Optionally add `poster: 'images/videos/<name>.webp'` (file in `public/images/videos/`).

### Replacing screenshots
Files live in `public/images/{mac,iphone,common}` and are referenced from `src/content/site.ts` and the hero.
Keep the file names and the site updates itself. Mac screenshots are WebP, 1600 px wide at their
natural height; put each one's `width`/`height` next to its `image` in `site.ts` (no layout shift).
iPhone screenshots are 750×1626 WebP.
Convert with any tool that writes WebP, e.g. `cwebp -q 88 -resize 1600 0 in.png -o out.webp`.

## Help & Feedback page and feedback form

`support/index.html` → `src/pages/Support.tsx`. It is the App Store **Support URL**
(`…/support/`) and is linked from the nav, the footer and the apps' Help & Feedback items.
Email links go to `site.links.supportEmail`.

### Adding a feedback form (Tally, free, no server needed)
GitHub Pages only serves static files, so the form itself lives at Tally; the page embeds it.
1. Sign in at <https://tally.so> (free plan), **Create form**, add your questions
   (e.g. Which app? · How satisfied are you? · What should we improve? · Email if you want a reply).
2. **Publish**, copy the share link (`https://tally.so/r/<id>`).
3. Paste it into `site.links.feedbackForm` in `src/content/site.ts`, commit and push — the
   "Quick feedback form" block appears on the Help & Feedback page.
4. Responses: Tally dashboard › your form › **Submissions** (table, filters, CSV export).
   Settings › **Notifications** emails you each new response; Integrations can forward to
   Google Sheets or Notion.

## Deploy to GitHub Pages

1. Push `main` to `henrywanghongyu/henrik-transcribe-market`.
2. Repo → **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Re-run the workflow if the first run started before Pages was enabled: **Actions → Deploy to GitHub Pages → Run workflow**.
4. Site: <https://henrywanghongyu.github.io/henrik-transcribe-market/>

### Custom domain (later)
1. Settings → Pages → Custom domain, and add the DNS records GitHub shows.
2. In `.github/workflows/deploy.yml`, set env on the build step: `VITE_BASE: /` and `SITE_URL: https://your-domain`.
   (`VITE_BASE` fixes asset paths; `SITE_URL` fills canonical/Open Graph/sitemap URLs.)

## Before you go public — checklist

- [ ] Paste the real App Store URLs into `src/content/site.ts` (Mac done 2026-10; iPhone once it is live), and swap the placeholder buttons for Apple's official badges (Apple's marketing resources — badge artwork has usage rules).
- [x] Re-capture the **iPhone** screenshots on a real device (2026-10).
- [ ] Set `site.links.supportEmail`.
- [ ] Review `src/pages/Privacy.tsx` against your current policy before using `…/privacy/` as the App Store Privacy Policy URL.
- [ ] Add YouTube videos when ready.

## Content rules (keep the site truthful)

- Live microphone transcription is free; file / web-link transcription and the Mac toolkit need a license (Monthly $1.99 · Annual $9.99 · Lifetime $19.99).
- One purchase covers Mac and iPhone through Apple's Universal Purchase / Apple ID — there is **no** Henrik Transcribe account.
- iPhone: iPhone only, iOS 16.4+, 30+ languages, WAV files / direct WAV links, no diarization, summaries or batch tools.
- Mac: macOS 12+, Apple Silicon, 99+ languages, full toolkit.
- Transcripts do not sync between devices.
