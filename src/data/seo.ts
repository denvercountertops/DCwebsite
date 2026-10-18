export type PageMeta = { title: string; description: string; hero?: string }

export const pageMeta: Record<string, PageMeta> = {
  "/": {
    title: "Denver Countertops | Granite & Quartz Countertops in Denver, CO",
    description:
      "Custom granite, quartz and quartzite countertops — laser templated, CNC fabricated and installed in-house in 7–10 days. Family owned since 2002. Free quotes: (720) 620-1189.",
    hero: "/images/gallery/kitchen-2.webp",
  },
  "/countertops": {
    title: "Custom Granite & Quartz Countertops | Fabrication & Installation | Denver Countertops",
    description:
      "Kitchen, island, vanity and outdoor countertops made in our own Denver-area shop: digital laser templating, CNC fabrication, every edge profile, Karran and ESI sinks, and a 1-year workmanship warranty.",
    hero: "/images/gallery/kitchen-2.webp",
  },
  "/materials": {
    title: "Countertop Materials Guide | Granite, Quartz, Quartzite | Denver Countertops",
    description:
      "Compare granite, quartz, quartzite, marble and soapstone countertops — durability, care and best uses — then see 70+ granite variations in stock at our Englewood showroom.",
    hero: "/images/marble.jpg",
  },
  "/deals": {
    title: "Slab Liquidation Deals | Denver Countertops",
    description:
      "Overstock granite, quartz and quartzite slabs at liquidation prices in Denver. Inventory changes daily — place a slab on hold before it's gone.",
    hero: "/images/marble.jpg",
  },
  "/pricing": {
    title: "Countertop Pricing | Denver Countertops",
    description:
      "Transparent countertop pricing in Denver: Build Your Own from $18/sq ft, Standard full service at $42/sq ft, and the DC Value program. Try our ballpark estimator.",
    hero: "/images/gallery/kitchen-2.webp",
  },
  "/our-work": {
    title: "Our Work | Countertop Gallery | Denver Countertops",
    description:
      "Waterfall islands, full-height backsplashes, outdoor kitchens and more — countertop projects templated, fabricated and installed by Denver Countertops.",
    hero: "/images/projects/project-1.webp",
  },
  "/about": {
    title: "About Us | Denver Countertops",
    description:
      "Family owned since 2002, Denver Countertops fabricates and installs custom countertops across Colorado with our own team — we never subcontract.",
    hero: "/images/gallery/kitchen-3.webp",
  },
  "/services": {
    title: "Services | Countertops, Porcelain Walls, Repairs & Remodeling | Denver Countertops",
    description:
      "Custom countertops are our specialty. Our in-house team also handles porcelain wall panels, stone repairs and complete kitchen & bath remodels.",
    hero: "/images/gallery/kitchen-5.webp",
  },
  "/faq": {
    title: "Countertop FAQ | Denver Countertops",
    description:
      "Answers to 80+ countertop questions: materials, sinks, edge profiles, pricing, our process, installation, care and more.",
    hero: "/images/gallery/kitchen-5.webp",
  },
  "/contact": {
    title: "Contact Us | Free Countertop Quote | Denver Countertops",
    description:
      "Get a free countertop quote or visit our showroom at 2101 W College Ave, Englewood, CO. Call (720) 620-1189. Open Mon–Fri 8:30–5, Sat 9–1.",
  },
}

export const notFoundMeta: PageMeta = {
  title: "Page not found | Denver Countertops",
  description: "The page you're looking for couldn't be found.",
}

export const metaFor = (pathname: string) => pageMeta[pathname] ?? notFoundMeta
