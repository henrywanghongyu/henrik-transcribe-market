import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'node:path'

// Project pages live under /<repo>/. When a custom domain is attached, build with
// VITE_BASE=/ and SITE_URL=https://your-domain (see README).
const base = process.env.VITE_BASE ?? '/henrik-transcribe-market/'
const siteUrl = (process.env.SITE_URL ?? 'https://henrywanghongyu.github.io/henrik-transcribe-market').replace(/\/$/, '')

// Fills the absolute URLs that Open Graph / JSON-LD need, and emits robots.txt, sitemap.xml and 404.html
// so a domain change only ever touches the two variables above.
function siteMeta(): Plugin {
  return {
    name: 'site-meta',
    transformIndexHtml: (html) => html.replaceAll('__SITE_URL__', siteUrl),
    generateBundle() {
      const pages = ['', 'privacy/', 'imagine-privacy/']
      this.emitFile({
        type: 'asset',
        fileName: 'sitemap.xml',
        source: `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${pages
          .map((p) => `  <url><loc>${siteUrl}/${p}</loc></url>`)
          .join('\n')}\n</urlset>\n`,
      })
      this.emitFile({
        type: 'asset',
        fileName: 'robots.txt',
        source: `User-agent: *\nAllow: /\nSitemap: ${siteUrl}/sitemap.xml\n`,
      })
      this.emitFile({
        type: 'asset',
        fileName: '404.html',
        source: `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Page not found – Henrik Transcribe</title><meta name="robots" content="noindex"><meta http-equiv="refresh" content="4;url=${base}"><style>body{margin:0;min-height:100vh;display:grid;place-items:center;font:17px/1.5 -apple-system,BlinkMacSystemFont,"SF Pro Text",system-ui,sans-serif;background:#fbfbfd;color:#1d1d1f}main{text-align:center;padding:24px}a{color:#2f6fdd}@media(prefers-color-scheme:dark){body{background:#0b0c10;color:#f5f5f7}a{color:#6ea2ff}}</style></head><body><main><h1>That page doesn’t exist.</h1><p>Taking you back to <a href="${base}">Henrik Transcribe</a>…</p></main></body></html>`,
      })
    },
  }
}

export default defineConfig({
  base,
  plugins: [react(), tailwindcss(), siteMeta()],
  resolve: { alias: { '@': path.resolve(import.meta.dirname, 'src') } },
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(import.meta.dirname, 'index.html'),
        privacy: path.resolve(import.meta.dirname, 'privacy/index.html'),
        imaginePrivacy: path.resolve(import.meta.dirname, 'imagine-privacy/index.html'),
      },
    },
  },
})
