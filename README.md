# Denver Countertops website

Built with React + Vite, Tailwind CSS and shadcn/ui.

## Run it locally

```bash
npm install
npm run dev
```

## Update content

Most text, prices, slab deals, reviews, FAQs and service areas are in `src/data/site.ts`.

- **Slab liquidation deals:** edit the `slabs` list. Put new slab photos in `public/images/slabs/`.
- **Gallery photos:** add images to `public/images/gallery/` and list them in `gallery`.
- **Quote form:** set `FORM_ENDPOINT` to your form webhook (GoHighLevel/LeadConnector, Formspree, etc.). Until it's set, the form asks visitors to call.

## Publish

```bash
npm run build
```

Upload the contents of the `dist/` folder to any static host (Netlify, Vercel, Cloudflare Pages, or your current host).

The build pre-renders every page to its own HTML file (`about.html`, `countertops.html`, …) with its own title, description and share tags, plus a `404.html`, `robots.txt` and `sitemap.xml`. Netlify and Cloudflare Pages serve `/about` from `about.html` automatically.

- **Site address:** the sitemap and share links use Netlify's `URL` setting (your custom domain once it's connected). Set a `SITE_URL` environment variable to override it.
- **Adding a page:** add a route in `src/App.tsx` and its title/description in `src/data/seo.ts`.
- **Old addresses:** `public/_redirects` sends old denvercounter.com page addresses to the new pages.
