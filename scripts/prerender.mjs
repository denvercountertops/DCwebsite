import { mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs"
import { dirname, join } from "node:path"
import { fileURLToPath, pathToFileURL } from "node:url"

const root = join(dirname(fileURLToPath(import.meta.url)), "..")
const dist = join(root, "dist")
const ssrDir = join(root, "dist-ssr")

// Netlify sets URL to the site's primary address (the custom domain once one is connected).
const site = (process.env.SITE_URL || process.env.URL || "https://www.denvercounter.com").replace(/\/$/, "")

const { render, pageMeta, notFoundMeta, faqs } = await import(pathToFileURL(join(ssrDir, "entry-server.js")).href)
const template = readFileSync(join(dist, "index.html"), "utf8")

const esc = (s) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;")

function headFor(path, meta, { indexable }) {
  const url = path === "/" ? `${site}/` : `${site}${path}`
  const image = `${site}/images/og-image.jpg`
  return [
    `<meta name="description" content="${esc(meta.description)}" />`,
    indexable ? `<link rel="canonical" href="${url}" />` : `<meta name="robots" content="noindex" />`,
    meta.hero ? `<link rel="preload" as="image" href="${meta.hero}" fetchpriority="high" />` : "",
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="Denver Countertops" />`,
    `<meta property="og:title" content="${esc(meta.title)}" />`,
    `<meta property="og:description" content="${esc(meta.description)}" />`,
    indexable ? `<meta property="og:url" content="${url}" />` : "",
    `<meta property="og:image" content="${image}" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
  ]
    .filter(Boolean)
    .join("\n    ")
}

const faqSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.flatMap((g) =>
    g.items.map((it) => ({ "@type": "Question", name: it.q, acceptedAnswer: { "@type": "Answer", text: it.a } }))
  ),
}).replace(/</g, "\\u003c")

function page(path, meta, opts) {
  const extra = path === "/faq" ? `\n    <script type="application/ld+json">${faqSchema}</script>` : ""
  return template
    .replace(/<title>.*?<\/title>/, `<title>${esc(meta.title)}</title>`)
    .replace("<!--app-head-->", headFor(path, meta, opts) + extra)
    .replace('<div id="root"></div>', `<div id="root">${render(path)}</div>`)
}

// Nested pages live under _pages/ and are served via rewrites, so a top-level page
// (deals.html) never collides with a same-named folder (deals/).
const routes = Object.keys(pageMeta)
const rewrites = []
for (const path of routes) {
  const nested = path.split("/").length > 2
  const file = path === "/" ? "index.html" : nested ? `_pages${path}.html` : `${path.slice(1)}.html`
  mkdirSync(dirname(join(dist, file)), { recursive: true })
  writeFileSync(join(dist, file), page(path, pageMeta[path], { indexable: true }))
  if (nested) rewrites.push(`${path}  /${file}  200`)
}
const redirectsFile = join(dist, "_redirects")
writeFileSync(redirectsFile, `${readFileSync(redirectsFile, "utf8").trimEnd()}\n\n# Pre-rendered nested pages\n${rewrites.join("\n")}\n`)
writeFileSync(join(dist, "404.html"), page("/404", notFoundMeta, { indexable: false }))

const today = new Date().toISOString().slice(0, 10)
writeFileSync(
  join(dist, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${routes
    .map((p) => `  <url><loc>${p === "/" ? `${site}/` : `${site}${p}`}</loc><lastmod>${today}</lastmod></url>`)
    .join("\n")}\n</urlset>\n`
)
writeFileSync(join(dist, "robots.txt"), `User-agent: *\nAllow: /\n\nSitemap: ${site}/sitemap.xml\n`)

rmSync(ssrDir, { recursive: true, force: true })
console.log(`Prerendered ${routes.length} pages + 404 for ${site}`)
