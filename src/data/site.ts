export const business = {
  name: "Denver Countertops",
  phone: "(720) 620-1189",
  phoneHref: "tel:+17206201189",
  address: "2101 W College Ave, Englewood, CO 80110",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=2101+W+College+Ave+Englewood+CO+80110",
  mapsEmbed: "https://www.google.com/maps?q=2101+W+College+Ave,+Englewood,+CO+80110&output=embed",
  facebook: "https://facebook.com/thedenvercountertops",
  hours: [
    { days: "Monday – Friday", time: "8:30am – 5:00pm" },
    { days: "Saturday", time: "9:00am – 1:00pm" },
    { days: "Sunday", time: "Closed" },
  ],
}

// Paste your GoHighLevel "Inbound Webhook" trigger URL here (https://services.leadconnectorhq.com/hooks/...).
export const FORM_ENDPOINT = ""

export type NavItem = { label: string; to: string; note?: string; children?: NavItem[] }

export const navLinks: NavItem[] = [
  { label: "Countertops", to: "/countertops" },
  { label: "Materials", to: "/materials" },
  {
    label: "Slab Deals",
    to: "/deals",
    children: [
      { label: "Full Slab Deals", to: "/deals", note: "Overstock slabs at liquidation prices" },
      { label: "Remnants", to: "/deals/remnants", note: "For vanities, fireplaces & small projects" },
    ],
  },
  { label: "Pricing", to: "/pricing" },
  { label: "Our Work", to: "/our-work" },
  { label: "Services", to: "/services" },
  {
    label: "About",
    to: "/about",
    children: [
      { label: "About Us", to: "/about", note: "Family owned since 2002" },
      { label: "Service Areas", to: "/service-areas", note: "Denver metro & Front Range" },
      { label: "Blog", to: "/blog", note: "Countertop & remodeling tips" },
      { label: "FAQ", to: "/faq", note: "80+ answers" },
    ],
  },
  { label: "Contact", to: "/contact" },
]

export const flatNav = navLinks.flatMap((l) => l.children ?? [l])

export const warranty = "1-year warranty on fabrication and installation workmanship"

export const countertopRooms = [
  { title: "Kitchen countertops", text: "Perimeter counters, full kitchens and complete replacements — templated, fabricated and installed by our team." },
  { title: "Islands & bar tops", text: "Statement islands, seating overhangs and bar tops, with corbels when extra support is needed." },
  { title: "Bathroom vanities", text: "Single and double vanities with undermount sink cutouts — remnants make smaller projects budget-friendly." },
  { title: "Outdoor kitchens", text: "Sun-safe granite colors for patios and outdoor kitchens that hold up to Colorado weather." },
  { title: "Fireplaces & window sills", text: "Fireplace surrounds and stone window sills to tie the whole home together." },
  { title: "Commercial projects", text: "Countertops for offices, hospitality and commercial spaces, plus work for builders and contractors." },
]

export const fabricationSteps = [
  {
    title: "Digital laser templating",
    text: "Once your cabinets are set, our estimator captures precise measurements of your cabinets, walls and appliances with digital laser templating — the foundation of a perfect fit.",
    detail: "Measured in your home",
  },
  {
    title: "Slab selection & layout",
    text: "Pick your exact slab at our shop and be part of the layout, or trust our team to plan seams and vein flow. Vein matching and book-matching are available.",
    detail: "You choose your slab",
  },
  {
    title: "CNC fabrication",
    text: "Your countertops are cut and shaped on CNC machines in our own shop — precise dimensions, sink and cooktop cutouts, faucet holes and clean, consistent edge profiles.",
    detail: "Cut in our own shop",
  },
  {
    title: "Professional installation",
    text: "Our own installers — never subcontractors — set, level and seam your countertops and attach your sink. Most installs are finished in a single day.",
    detail: "Typically 7–10 days after template",
  },
]

export const edgeProfiles = [
  { name: "Eased", note: "Our standard edge — clean and modern, with softened corners.", path: "M0 15 H95 Q100 15 100 20 V40 Q100 45 95 45 H0 Z", included: true },
  { name: "Bevel", note: "An angled cut along the top edge for a crisp, tailored look.", path: "M0 15 H88 L100 27 V45 H0 Z" },
  { name: "Half bullnose", note: "Rounded top, flat bottom — a soft, family-friendly edge.", path: "M0 15 H84 A16 16 0 0 1 100 31 V45 H0 Z" },
  { name: "Full bullnose", note: "Fully rounded top and bottom for a smooth, classic finish.", path: "M0 15 H85 A15 15 0 0 1 85 45 H0 Z" },
  { name: "Ogee", note: "A decorative S-curve profile for traditional and elegant kitchens.", path: "M0 15 H80 C88 15 88 24 94 26 C100 28 100 33 100 37 V45 H0 Z" },
  { name: "Mitered", note: "Two pieces joined at 45° for a thick, dramatic slab look.", path: "M0 15 H100 V42 H92 V23 H0 Z", miter: true },
  { name: "Waterfall", note: "The stone continues down the side of your island in one continuous piece.", path: "M0 15 H100 V66 H92 V23 H0 Z", miter: true, floor: true },
]

export const sinkBrands = [
  {
    brand: "Karran",
    type: "Composite quartz-blend sinks",
    text: "Composite sinks resist scratches, stains and heat, and hold up to daily kitchen use much like natural stone.",
    points: ["Scratch, stain & heat resistant", "Range of styles and colors", "Farmhouse styles available"],
  },
  {
    brand: "ESI Sinks",
    type: "Stainless steel sinks",
    text: "Classic stainless steel in a range of styles. Higher-gauge sinks resist dents and scratches — we'll help you pick a gauge suited to your household.",
    points: ["Range of styles", "Higher gauges resist dents & scratches", "Help choosing the right gauge"],
  },
]

export const sinkMounts = [
  { name: "Undermount", text: "Installed beneath the countertop for a seamless look and easy wipe-down." },
  { name: "Top-mount (drop-in)", text: "Sits in a cutout with its rim visible on top of the counter." },
  { name: "Farmhouse (apron-front)", text: "A wide, exposed front panel that extends past the cabinet face, with a deep basin and a classic statement look." },
]

export const templateChecklist = [
  "Cabinets installed and anchored in their final position",
  "Sink, faucet and cooktop chosen — specs on hand for cutouts",
  "An adult home to confirm layout, seams and overhangs",
  "Old countertops removed — or tear-out & haul-away added to your quote",
  "A licensed plumber lined up to reconnect your sink after install",
]

export const overhangGuide = [
  { label: "3cm stone", value: "Up to 10\"", note: "unsupported overhang" },
  { label: "2cm stone", value: "Up to 6\"", note: "unsupported overhang" },
  { label: "Deeper seating", value: "Corbels", note: "installed for support" },
]

export const materialSwatches = [
  { name: "Granite", image: "/images/slabs/whisper-white.webp", position: "50% 50%", text: "Natural, heat-resistant and one-of-a-kind. 70+ variations in stock." },
  { name: "Quartz", image: "/images/slabs/calacatta-ocellio.webp", position: "80% 80%", text: "Non-porous, low-maintenance and consistent. Never needs sealing." },
  { name: "Quartzite", image: "/images/slabs/platinum.webp", position: "50% 50%", text: "Natural stone as tough as granite, with marble-like veining." },
  { name: "Marble", image: "/images/marble.jpg", position: "50% 50%", text: "Timeless luxury for islands, bars and bathrooms." },
]

export const aboutStory = [
  "Denver Countertops has been proudly providing Colorado with beautiful custom fabricated and installed countertops and more since 2002. Our number one priority is to ensure an excellent customer service experience, combining exceptional stone quality with the outstanding services we provide.",
  "We want you to be completely satisfied with your experience from the first moments of your design to the successful installation and completion of your project. We strive to make your entire experience working with us easy and enjoyable.",
  "From measuring to fabrication and installation, we make sure that your project is handled by the best professionals in the industry. Our teams of fabricators and installation specialists pay special attention to every detail, ensuring that your project is done on time and finished beautifully. We take great pride in our work, and we want our customers to feel that same pride in their new countertops and stonework.",
]

export const trustPoints = [
  "Family owned since 2002",
  "We never subcontract — one team from template to install",
  "7–10 day turnaround",
  "Denver's largest in-stock slab selection",
]

export const stats = [
  { value: "2002", label: "Family owned since" },
  { value: "7–10", label: "Days, template to install" },
  { value: "100%", label: "In-house. Never subcontracted" },
  { value: "70+", label: "Granite variations in stock" },
]

export const services = [
  {
    id: "countertops",
    title: "Custom Countertops",
    image: "/images/gallery/kitchen-3.webp",
    description:
      "Countertops are our main product and what we've done since 2002. Granite, quartz, quartzite and marble for kitchens, islands, vanities and more — laser templated, CNC fabricated in our own shop, and installed by our own team in 7–10 days.",
    bullets: ["Digital laser templating", "CNC fabrication", "Any edge profile", "1-year workmanship warranty"],
  },
  {
    id: "porcelain-walls",
    title: "Vertical Applications",
    subtitle: "Porcelain Walls",
    image: "/images/marble.jpg",
    description:
      "Porcelain wall panel installation in Dekton, Neolith and solid surfaces. Upgrade your space with a clean, modern look for showers, backsplashes, fireplaces and accent walls.",
    bullets: ["Shower surrounds", "Full-height backsplashes", "Fireplace surrounds", "Commercial lobbies"],
  },
  {
    id: "repairs",
    title: "Repairs & Services",
    image: "/images/gallery/kitchen-5.webp",
    description:
      "Chipped edge? Loose seam? Stain or crack? Fast, professional repairs for quartz, granite, and more.",
    bullets: ["Chips & cracks", "Seam issues", "Re-leveling", "Cutout adjustments"],
  },
  {
    id: "remodeling",
    title: "All-in-One Remodeling",
    image: "/images/gallery/kitchen-2.webp",
    description:
      "Remodeling shouldn't feel like managing 5 different contractors. Get complete kitchen & bathroom remodeling in one place. One call. One team. One finished remodel.",
    bullets: ["Countertops", "Drywall removal", "Tile", "Plumbing & electrical"],
  },
]

export type SlabType = "Quartz" | "Granite" | "Quartzite"

// Add remnant pieces here (photo in public/images/remnants/). Leave empty to show the "call for current remnants" panel.
export const remnants: {
  name: string
  type: SlabType | "Marble" | "Soapstone"
  size: string
  price?: number
  image: string
}[] = []

export const remnantUses = [
  "Bathroom vanities",
  "Fireplace surrounds",
  "Bar tops & desks",
  "Laundry & utility rooms",
  "Small islands & galley kitchens",
  "Shower benches & window sills",
]

export const slabs: {
  name: string
  type: SlabType
  thickness: string
  size: string
  regular: number
  sale: number
  available: number
  image: string
}[] = [
  { name: "Vortex", type: "Quartz", thickness: "3cm", size: "136 × 76", regular: 1800, sale: 900, available: 2, image: "/images/slabs/vortex.webp" },
  { name: "New Venetian Gold", type: "Granite", thickness: "3cm", size: "126 × 75", regular: 1100, sale: 700, available: 1, image: "/images/slabs/new-venetian-gold.webp" },
  { name: "Whisper White", type: "Granite", thickness: "3cm", size: "113 × 75", regular: 1800, sale: 800, available: 1, image: "/images/slabs/whisper-white.webp" },
  { name: "Platinum", type: "Quartzite", thickness: "3cm", size: "127 × 75", regular: 3100, sale: 1200, available: 1, image: "/images/slabs/platinum.webp" },
  { name: "Gris Paris", type: "Granite", thickness: "3cm", size: "126 × 76", regular: 1100, sale: 500, available: 1, image: "/images/slabs/gris-paris.webp" },
  { name: "Calacatta Ocellio", type: "Quartz", thickness: "3cm", size: "106 × 37", regular: 750, sale: 400, available: 1, image: "/images/slabs/calacatta-ocellio.webp" },
]

export const pricingPrograms = [
  {
    name: "Build Your Own",
    tag: "Most flexible",
    price: "$18",
    unit: "per sq ft, starting",
    description:
      "Pick from our full list of services — Standard or Premium — and design your project your way, whether it's a kitchen, bathroom, or anything else. Works with early payment at the start of the project.",
    features: [
      "$18 / sq ft fabrication",
      "$12 / sq ft installation",
      "$250 template appointment",
      "$200 undermount sink fabrication",
      "$200 vein matching per slab",
      "$150 cutout (sink / cooktop)",
      "$150 vanity sink fabrication",
      "$80 sink attachment",
      "Removal — price varies",
    ],
  },
  {
    name: "Standard Service",
    tag: "Most popular",
    price: "$42",
    unit: "per sq ft, full service",
    featured: true,
    description:
      "Includes all of our standard services, and you're not limited on style — we work with material from any of our suppliers. You choose the material; we fabricate and install it.",
    features: [
      "Any supplier's material",
      "Basic edges included",
      "Cutouts & faucet holes included",
      "Template through installation",
      "Material priced separately",
    ],
  },
  {
    name: "DC Value",
    tag: "Formerly the contractor program",
    price: "Ask",
    unit: "for the color list",
    description:
      "Partnered with Daltile and trusted by hundreds of contractors across Colorado. Pay only for the square footage you need — no overbuying — from the 10 most popular colors we keep in stock.",
    features: [
      "Pay only for the sq ft you need",
      "10 most popular colors in stock",
      "Daltile partnership",
      "Fast, simple quotes",
    ],
  },
]

export const processSteps = [
  {
    title: "Laser Templating & Budget",
    text: "We start with digital laser templating to capture precise measurements, then build a comprehensive budget for your countertops — so you know exactly what you're getting from step one.",
  },
  {
    title: "Design",
    text: "Our designers work hand-in-hand with you to choose your stone, edge profile, sink and faucet. Visit the shop and pick your exact slab.",
  },
  {
    title: "CNC Fabrication",
    text: "Your stone is cut and shaped on CNC machines in our own shop — precise cuts, cutouts and edge profiles, done quickly and efficiently.",
  },
  {
    title: "Installation",
    text: "Our own installation specialists bring your countertops straight to your home and install them quickly and efficiently — usually in a single day.",
  },
]

export const whyUs = [
  {
    title: "Huge Selection",
    text: "We proudly offer a wide variety of granite, quartz and quartzite. If you have something in mind, it's likely we have it.",
  },
  {
    title: "Precision Fabrication",
    text: "Digital laser templating and CNC fabrication in our own shop, finished by skilled craftsmen — the best professionals in the industry.",
  },
  {
    title: "Quick Turn-Around",
    text: "We work tirelessly to produce outstanding work on a quick, efficient timeline — typically 7–10 days from template to final installation.",
  },
  {
    title: "Backed by Our Warranty",
    text: "Every countertop we fabricate and install comes with a 1-year warranty on workmanship — plus industry-leading customer service.",
  },
]

export const gallery = [
  { src: "/images/projects/project-1.webp", alt: "Gray-veined stone waterfall island with undermount stainless sink and dark wood cabinets", w: 1448, h: 1086 },
  { src: "/images/projects/project-3.webp", alt: "Twin waterfall islands in white stone with bold black veining and black cabinets", w: 1642, h: 958 },
  { src: "/images/projects/project-6.webp", alt: "Waterfall island with a curved edge, full-height stone backsplash and stone range hood", w: 1024, h: 1536 },
  { src: "/images/projects/project-5.webp", alt: "White marble-look waterfall island and full-height backsplash with a brass chandelier", w: 1448, h: 1086 },
  { src: "/images/projects/project-7.webp", alt: "Large white stone island with seating overhang for five stools", w: 2000, h: 1459 },
  { src: "/images/projects/project-11.webp", alt: "Outdoor kitchen with stone countertops, built-in grills and bar seating", w: 1844, h: 853 },
  { src: "/images/projects/project-9.webp", alt: "Veined stone island on a navy shiplap base with matching perimeter countertops", w: 1448, h: 1086 },
  { src: "/images/projects/project-2.webp", alt: "White veined countertops and peninsula with an undermount double sink and lit base", w: 1448, h: 1086 },
  { src: "/images/projects/project-10.webp", alt: "Stone-clad range hood and full-height stone backsplash", w: 1024, h: 1536 },
  { src: "/images/projects/project-8.webp", alt: "White and brown granite countertops on rustic wood cabinets with undermount sink", w: 1448, h: 1086 },
  { src: "/images/gallery/kitchen-1.webp", alt: "Navy cabinet kitchen with white quartz countertops and brass hardware", w: 1024, h: 682 },
  { src: "/images/gallery/kitchen-2.webp", alt: "White kitchen with a thick-edge quartz island and gold pendants", w: 1024, h: 683 },
  { src: "/images/gallery/kitchen-3.webp", alt: "Charcoal and white kitchen with speckled quartz island", w: 1024, h: 682 },
  { src: "/images/gallery/kitchen-4.webp", alt: "Navy kitchen with white countertops and hexagon tile backsplash", w: 1024, h: 682 },
  { src: "/images/gallery/kitchen-5.webp", alt: "Bright white kitchen with white quartz island and dark floors", w: 1024, h: 682 },
]

export const materials = [
  {
    name: "Granite",
    summary:
      "A natural stone quarried from the earth, so every slab is one-of-a-kind. Handles hot pots and pans well and offers unmatched natural beauty.",
    good: ["Heat-resistant", "Very hard & scratch-resistant", "One-of-a-kind patterns", "70+ variations in stock"],
    care: "Seal on installation and roughly every 1–2 years.",
    bestFor: "Busy kitchens, heavy cooking, outdoor kitchens (sun-safe colors)",
  },
  {
    name: "Quartz",
    summary:
      "Engineered from about 90%+ ground quartz mixed with resin. Non-porous and consistent slab to slab — many lines mimic Carrara or Calacatta marble.",
    good: ["Never needs sealing", "Stain & bacteria resistant", "Consistent color", "Most quartz brands carry a 10–15 yr warranty"],
    care: "Soap and water. Always use a trivet — quartz is more heat-sensitive.",
    bestFor: "Low-maintenance kitchens, bathrooms, families",
  },
  {
    name: "Quartzite",
    summary:
      "A natural stone formed from sandstone under heat and pressure. The durability of granite with veining that can resemble marble.",
    good: ["Among the hardest stones", "Marble-like veining", "Heat tolerant", "Natural & unique"],
    care: "Seal periodically like granite.",
    bestFor: "Statement kitchens that need to work hard",
  },
  {
    name: "Marble",
    summary:
      "Stunning and timeless, popular for islands, bars and bathrooms. Softer and more porous, so it scratches and stains more easily.",
    good: ["Timeless luxury look", "Beautiful veining", "Great for islands & baths"],
    care: "Wipe spills quickly; seal regularly; use trivets and cutting boards.",
    bestFor: "Showpiece islands, bars, lower-traffic surfaces",
  },
  {
    name: "Soapstone",
    summary:
      "A naturally non-porous stone that never needs sealing and develops a rich patina over time. Softer than granite, so it will show scratches.",
    good: ["Never needs sealing", "Non-porous", "Develops a lived-in patina"],
    care: "Mineral oil optional to deepen color.",
    bestFor: "Farmhouse and traditional kitchens",
  },
]

export const reviews = [
  {
    name: "El Guapo",
    text: "I just had an excellent experience with Denver Countertops. The team was professional, responsive, and committed to delivering a great result. Jesus, in particular, stood out with his guidance and genuine understanding of my needs. The workmanship and service were excellent from start to finish.",
  },
  {
    name: "Cindy D.",
    text: "EXCELLENT quality and service! I did a whole home remodel and had them replace all countertops and window sills. From the day I walked in, to the day of installation (and beyond) everyone was exceptionally friendly, helpful and accommodating. You won't be disappointed!!",
  },
  {
    name: "Stuart",
    text: "Extremely professional from start to finish. Great communication and support from everyone in the front office. Norma made the experience stress free. She helped us find the stone we liked and made it work within our budget. Installation turnaround time was extremely quick, and the installers were great.",
  },
  {
    name: "Teiko R",
    text: "Denver Countertops are the real deal! Their expertise, knowledge, and workmanship are top notch! Their pricing is very competitive and their lead time is spot on. Choose Denver Countertops!",
  },
  {
    name: "Alex T",
    text: "The Denver Countertops crew is amazing! Their professionalism and communication makes doing your granite, marble, quartz countertops stress-free.",
  },
]

export const serviceAreas = [
  "Arvada", "Aurora", "Berkeley", "Boulder", "Broomfield", "Castle Rock", "Centennial", "Cherry Creek",
  "Colorado Springs", "Denver", "Englewood", "Fort Collins", "Golden", "Greeley", "Hilltop", "Lakewood", "LoDo",
  "LoHi", "Longmont", "Loveland", "Pueblo", "RiNo", "Thornton", "Wash Park", "Westminster",
]

export const projectTypes = [
  "Kitchen countertops",
  "Island / bar top",
  "Bathroom vanity",
  "Outdoor kitchen",
  "Fireplace / window sills",
  "Commercial countertops",
  "Liquidation slab",
  "Remnant",
  "Porcelain walls",
  "Repair",
  "Full kitchen or bath remodel",
  "Other",
]
