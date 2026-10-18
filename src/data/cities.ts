export type City = {
  slug: string
  name: string
  county: string
  intro: string
  detail: string
  areas?: string[]
  nearby: string[]
  image: string
}

export const cities: City[] = [
  {
    slug: "denver",
    name: "Denver",
    county: "City and County of Denver",
    intro:
      "From Wash Park bungalows to LoDo lofts, we template, fabricate and install custom granite, quartz and quartzite countertops in homes across Denver.",
    detail:
      "Denver kitchens come in every shape — compact galley kitchens in older homes, open-concept remodels, and new builds with oversized islands. Our team measures each one with digital laser templating, so your countertops fit the space you actually have.",
    areas: ["Cherry Creek", "LoDo", "LoHi", "RiNo", "Wash Park", "Hilltop"],
    nearby: ["aurora", "lakewood", "centennial"],
    image: "/images/projects/project-7.webp",
  },
  {
    slug: "aurora",
    name: "Aurora",
    county: "Arapahoe, Adams & Douglas Counties",
    intro:
      "Custom countertops for homes across Aurora — Colorado's third-largest city — laser templated, CNC fabricated and installed by our own team.",
    detail:
      "Whether you're updating an established Aurora home or finishing a new build, we help you choose the right stone, edge and sink, then handle every step from template to install — typically in 7–10 days.",
    nearby: ["denver", "centennial", "thornton"],
    image: "/images/projects/project-9.webp",
  },
  {
    slug: "lakewood",
    name: "Lakewood",
    county: "Jefferson County",
    intro:
      "Granite, quartz and quartzite countertops for Lakewood homes just west of Denver along the foothills — fabricated in our own shop.",
    detail:
      "From kitchen refreshes to full remodels, Lakewood homeowners work directly with our team at every step. We never subcontract, so the people who measure your kitchen are the same team that cuts and installs your stone.",
    nearby: ["denver", "arvada", "centennial"],
    image: "/images/projects/project-5.webp",
  },
  {
    slug: "arvada",
    name: "Arvada",
    county: "Jefferson & Adams Counties",
    intro:
      "From Olde Town Arvada to newer neighborhoods to the west, we design, fabricate and install custom countertops throughout Arvada.",
    detail:
      "Choose from Denver's largest in-stock slab selection, see edge samples in our showroom, and get your countertops installed by our own crew — most installs are finished in a single day.",
    nearby: ["westminster", "lakewood", "broomfield"],
    image: "/images/projects/project-2.webp",
  },
  {
    slug: "westminster",
    name: "Westminster",
    county: "Adams & Jefferson Counties",
    intro:
      "Custom kitchen, island and vanity countertops for Westminster homes between Denver and Boulder along US-36.",
    detail:
      "We handle the whole job in-house: digital laser templating, CNC fabrication with clean, consistent edges, and professional installation backed by our 1-year workmanship warranty.",
    nearby: ["arvada", "broomfield", "thornton"],
    image: "/images/projects/project-3.webp",
  },
  {
    slug: "thornton",
    name: "Thornton",
    county: "Adams County",
    intro:
      "Granite, quartz and quartzite countertops for Thornton's north-metro neighborhoods — from established homes to brand-new builds.",
    detail:
      "Building or remodeling in Thornton? Our team works with homeowners and contractors alike, with straightforward pricing programs and a typical 7–10 day turnaround from template to install.",
    nearby: ["westminster", "broomfield", "aurora"],
    image: "/images/projects/project-1.webp",
  },
  {
    slug: "centennial",
    name: "Centennial",
    county: "Arapahoe County",
    intro:
      "Custom countertops for Centennial homes in the south metro — just a short drive from our Englewood showroom and slab yard.",
    detail:
      "Centennial homeowners can stop by our showroom at 2101 W College Ave in Englewood to pick their exact slab, see edge profile samples and talk through sinks and cutouts with our team.",
    nearby: ["castle-rock", "aurora", "denver"],
    image: "/images/projects/project-6.webp",
  },
  {
    slug: "boulder",
    name: "Boulder",
    county: "Boulder County",
    intro:
      "Custom granite, quartz and quartzite countertops for Boulder homes at the foot of the Flatirons — fabricated and installed by our own team.",
    detail:
      "From statement islands to outdoor kitchens built with sun-safe granite colors, we help Boulder homeowners pick stone that fits how they live, then template, cut and install it in-house.",
    nearby: ["broomfield", "westminster", "arvada"],
    image: "/images/projects/project-11.webp",
  },
  {
    slug: "broomfield",
    name: "Broomfield",
    county: "City and County of Broomfield",
    intro:
      "Kitchen, bath and island countertops for homes across Broomfield, between Denver and Boulder — templated, fabricated and installed in-house.",
    detail:
      "Choose granite, quartz, quartzite or marble, pick from every edge profile, and add a Karran composite or ESI stainless sink. We cut it all on our CNC machines and install it with our own crew.",
    nearby: ["boulder", "westminster", "thornton"],
    image: "/images/projects/project-8.webp",
  },
  {
    slug: "castle-rock",
    name: "Castle Rock",
    county: "Douglas County",
    intro:
      "Custom countertops for Castle Rock homes between Denver and Colorado Springs along I-25 — from kitchens and islands to outdoor living spaces.",
    detail:
      "Castle Rock homeowners get the same in-house process as our metro customers: digital laser templating at your home, CNC fabrication in our shop, and professional installation — typically 7–10 days after template.",
    nearby: ["centennial", "aurora", "denver"],
    image: "/images/projects/project-10.webp",
  },
]

export const cityBySlug = (slug?: string) => cities.find((c) => c.slug === slug)
