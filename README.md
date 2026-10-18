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

The site has separate pages (`/about`, `/services`, `/deals`, `/pricing`, `/our-work`, `/materials`, `/faq`, `/contact`). The host must send every address to `index.html`. `public/_redirects` already does this on Netlify and Cloudflare Pages; other hosts need an equivalent "rewrite all to index.html" rule.
