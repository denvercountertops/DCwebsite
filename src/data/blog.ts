// Posts migrated from denvercounter.com/blog-page.
export type BlogBlock =
  | { type: "h2" | "h3" | "p" | "quote"; text: string }
  | { type: "ul" | "ol"; items: string[] }
  | { type: "img"; src: string; alt: string; w: number; h: number }

export type BlogPost = {
  slug: string
  oldSlug: string
  category: string
  title: string
  date: string
  readTime: string
  description: string
  cover: { src: string; w: number; h: number } | null
  blocks: BlogBlock[]
}

const allPosts: BlogPost[] = [
  {
    "slug": "countertop-buying-mistakes",
    "oldSlug": "7-Mistakes",
    "category": "Buying guide",
    "title": "7 Mistakes Homeowners Make When Buying Countertops (And How to Avoid Them)",
    "date": "February 12, 2026",
    "readTime": "4 min read",
    "description": "At Denver Countertops LLC, we’ve helped homeowners and designers across the Denver area choose quartz, granite, marble, quartzite, and more. Here are the most common mistakes we see (and exactly how to avoid them) so your project stays on budget, on schedule, and looks amazing for years.",
    "cover": {
      "src": "/images/blog/countertop-buying-mistakes/1.webp",
      "w": 715,
      "h": 379
    },
    "blocks": [
      {
        "type": "p",
        "text": "Buying new countertops is exciting — but it’s also one of those decisions that can get expensive fast if a few key details get missed."
      },
      {
        "type": "p",
        "text": "At Denver Countertops LLC, we’ve helped homeowners and designers across the Denver area choose quartz, granite, marble, quartzite, and more. Here are the most common mistakes we see (and exactly how to avoid them) so your project stays on budget, on schedule, and looks amazing for years."
      },
      {
        "type": "h2",
        "text": "1) Choosing a material based only on looks"
      },
      {
        "type": "p",
        "text": "A slab can be beautiful in the showroom and still be a poor fit for your lifestyle."
      },
      {
        "type": "p",
        "text": "Avoid it: Start with how you live."
      },
      {
        "type": "ul",
        "items": [
          "Busy kitchen, kids, lots of cooking? Quartz is often a great low-maintenance option.",
          "Love natural stone? Make sure you understand sealing, etching, and what “patina” can look like over time.",
          "Want a bold statement? Ask about veining, movement, and how seams may land."
        ]
      },
      {
        "type": "img",
        "alt": "2",
        "src": "/images/blog/countertop-buying-mistakes/2.webp",
        "w": 717,
        "h": 311
      },
      {
        "type": "h2",
        "text": "2) Not confirming what’s included in the quote"
      },
      {
        "type": "p",
        "text": "Many countertop quotes look similar, but the details can vary a lot."
      },
      {
        "type": "p",
        "text": "Avoid it: Ask for a clear breakdown before you approve."
      },
      {
        "type": "ul",
        "items": [
          "Demo/removal of old countertops",
          "Sink and cooktop cutouts",
          "Edge profile",
          "Backsplash (if included)",
          "Plumbing disconnect/reconnect (often handled by others)",
          "Any special fabrication needs (waterfall edges, mitered edges, custom details)"
        ]
      },
      {
        "type": "p",
        "text": "Designers: This is also the best time to confirm lead times and installation windows so your overall project schedule stays clean."
      },
      {
        "type": "img",
        "alt": "3",
        "src": "/images/blog/countertop-buying-mistakes/3.webp",
        "w": 579,
        "h": 258
      },
      {
        "type": "h2",
        "text": "3) Waiting too long to pick sinks, faucets, and appliances"
      },
      {
        "type": "p",
        "text": "Your sink choice impacts cutouts, faucet hole placement, and sometimes even cabinet modifications."
      },
      {
        "type": "p",
        "text": "Avoid it: Choose your sink early."
      },
      {
        "type": "ul",
        "items": [
          "Undermount vs. drop-in",
          "Single bowl vs. double bowl",
          "Farmhouse/apron-front sinks (often require cabinet planning)"
        ]
      },
      {
        "type": "p",
        "text": "If you’re working with a designer, align on the sink model and specs before templating so everything fits the first time."
      },
      {
        "type": "img",
        "alt": "4",
        "src": "/images/blog/countertop-buying-mistakes/4.webp",
        "w": 688,
        "h": 387
      },
      {
        "type": "h2",
        "text": "4) Underestimating how important templating is"
      },
      {
        "type": "p",
        "text": "Templating is the step where exact measurements are captured for fabrication. If something changes after templating, it can cause delays or rework."
      },
      {
        "type": "p",
        "text": "Avoid it: Make sure the space is truly ready before template day."
      },
      {
        "type": "ul",
        "items": [
          "Cabinets installed, level, and secured",
          "Final cabinet fillers and panels in place",
          "Walls finished (or at least final thickness known)",
          "Cooktop/range and sink specs confirmed"
        ]
      },
      {
        "type": "img",
        "alt": "5",
        "src": "/images/blog/countertop-buying-mistakes/5.webp",
        "w": 380,
        "h": 274
      },
      {
        "type": "h2",
        "text": "5) Ignoring seam placement (until it’s too late)"
      },
      {
        "type": "p",
        "text": "Seams are normal — the goal is to place them strategically and make them as clean as possible."
      },
      {
        "type": "p",
        "text": "Avoid it: Talk about seams before fabrication."
      },
      {
        "type": "ul",
        "items": [
          "Ask where seams are likely to be placed and why",
          "For dramatic veining, ask about best-effort vein matching and what’s realistic",
          "Consider how lighting and sightlines will affect what you notice day-to-day."
        ]
      },
      {
        "type": "img",
        "alt": "6",
        "src": "/images/blog/countertop-buying-mistakes/6.webp",
        "w": 398,
        "h": 345
      },
      {
        "type": "h2",
        "text": "6) Picking the wrong edge profile for the design (or the budget)"
      },
      {
        "type": "p",
        "text": "Edges can change the whole look of a kitchen — and some edges add meaningful fabrication time."
      },
      {
        "type": "p",
        "text": "Avoid it: Match the edge to the style and the use."
      },
      {
        "type": "ul",
        "items": [
          "Clean and modern: eased or straight edges",
          "Traditional: ogee or more decorative profiles",
          "High-traffic kitchens: consider edges that are easier to maintain and less prone to chipping"
        ]
      },
      {
        "type": "p",
        "text": "If you’re trying to stay within budget, ask which edge options give the best look without adding unnecessary cost."
      },
      {
        "type": "img",
        "alt": "7",
        "src": "/images/blog/countertop-buying-mistakes/7.webp",
        "w": 718,
        "h": 408
      },
      {
        "type": "h2",
        "text": "7) Not planning for the timeline (and rushing the wrong parts)"
      },
      {
        "type": "p",
        "text": "Countertops are often one of the last steps in a remodel, but they depend on several earlier steps being done correctly."
      },
      {
        "type": "p",
        "text": "Avoid it: Build a realistic timeline."
      },
      {
        "type": "ul",
        "items": [
          "Material selection and slab availability",
          "Template appointment",
          "Fabrication time",
          "Installation day"
        ]
      },
      {
        "type": "p",
        "text": "If you’re on a tight schedule, ask early about options and what’s required to keep things moving."
      },
      {
        "type": "img",
        "alt": "8",
        "src": "/images/blog/countertop-buying-mistakes/8.webp",
        "w": 265,
        "h": 181
      },
      {
        "type": "h2",
        "text": "Quick checklist before you buy"
      },
      {
        "type": "p",
        "text": "·You’ve chosen your material based on lifestyle, not just looks"
      },
      {
        "type": "p",
        "text": "·Your quote clearly lists what’s included"
      },
      {
        "type": "p",
        "text": "·Sink and appliance specs are selected and confirmed"
      },
      {
        "type": "p",
        "text": "·Cabinets are installed and ready before templating"
      },
      {
        "type": "p",
        "text": "·You’ve discussed seam placement and expectations"
      },
      {
        "type": "p",
        "text": "·Your edge profile matches your design and budget"
      },
      {
        "type": "p",
        "text": "·Your timeline is realistic from selection to install."
      },
      {
        "type": "h2",
        "text": "Want help choosing the right countertop?"
      },
      {
        "type": "p",
        "text": "If you’re a homeowner planning a remodel or a designer coordinating a project, we’re happy to help you make the process smooth."
      },
      {
        "type": "p",
        "text": "Denver Countertops LLC is family-owned and operated, and we’re known for fast turnaround, competitive pricing, and attention to detail."
      },
      {
        "type": "p",
        "text": "Visit www.denvercounter.com or stop by our showroom in Englewood to get started."
      },
      {
        "type": "img",
        "alt": "9",
        "src": "/images/blog/countertop-buying-mistakes/9.webp",
        "w": 499,
        "h": 226
      }
    ]
  },
  {
    "slug": "how-to-remove-old-countertops",
    "oldSlug": "How-to-Remove-Old-Countertops",
    "category": "Remodeling",
    "title": "How to Remove Old Countertops (Without Damaging Your Cabinets)",
    "date": "February 12, 2026",
    "readTime": "4 min read",
    "description": "Removing an old countertop sounds simple—until you realize it’s tied into plumbing, backsplash tile, adhesive, and sometimes even your cabinets. Whether you’re upgrading to quartz, granite, or another surface, a clean removal is the first step to a smooth installation.",
    "cover": {
      "src": "/images/blog/how-to-remove-old-countertops/1.webp",
      "w": 717,
      "h": 405
    },
    "blocks": [
      {
        "type": "p",
        "text": "02/04/26 Second art"
      },
      {
        "type": "h2",
        "text": "Removal of Old Countertops (Homeowner Guide)"
      },
      {
        "type": "p",
        "text": "Removing an old countertop sounds simple—until you realize it’s tied into plumbing, backsplash tile, adhesive, and sometimes even your cabinets. Whether you’re upgrading to quartz, granite, or another surface, a clean removal is the first step to a smooth installation."
      },
      {
        "type": "p",
        "text": "Below is a clear guide to what happens during countertop removal, how to prepare, and how to avoid the most common problems."
      },
      {
        "type": "h2",
        "text": "Why countertop removal matters"
      },
      {
        "type": "p",
        "text": "A rushed removal can cause:"
      },
      {
        "type": "ul",
        "items": [
          "Damaged cabinets (especially around the top rails)",
          "Broken drywall or torn paint behind a backsplash",
          "Plumbing leaks from rushed disconnects",
          "Extra labor costs if the old top is harder to remove than expected"
        ]
      },
      {
        "type": "p",
        "text": "A professional removal protects your kitchen, keeps the project on schedule, and helps your new countertops fit correctly."
      },
      {
        "type": "img",
        "alt": "1",
        "src": "/images/blog/how-to-remove-old-countertops/2.webp",
        "w": 354,
        "h": 240
      },
      {
        "type": "h2",
        "text": "What’s involved in removing old countertops"
      },
      {
        "type": "p",
        "text": "Most countertop removals include a few key steps:"
      },
      {
        "type": "ol",
        "items": [
          "Protect the area Floors, cabinet faces, and walkways are covered to reduce dust and prevent scratches.",
          "Disconnect plumbing (sink, faucet, disposal, dishwasher line if needed) Water is shut off and the sink is disconnected safely before anything is lifted.",
          "Cut caulk and separate the countertop from the wall This prevents drywall paper from tearing and reduces damage behind the backsplash area.",
          "Release fasteners and adhesive Old tops may be held by screws from inside the cabinets, construction adhesive, silicone, or a mix of all three.",
          "Remove the countertop in sections (when needed) Some materials can be heavy and brittle. Cutting into manageable sections helps prevent cabinet damage and makes removal safer.",
          "Clean and prep for the next step Leftover adhesive is scraped, debris is removed, and the cabinet tops are checked for level and support."
        ]
      },
      {
        "type": "h2",
        "text": "Different materials remove differently"
      },
      {
        "type": "p",
        "text": "Not all countertops come off the same way:"
      },
      {
        "type": "ul",
        "items": [
          "Laminate countertops: Often easier, but can still be heavily glued down.",
          "Tile countertops: Messier—more dust and debris, and the substrate can be stubborn.",
          "Granite / stone tops: Very heavy and can crack; removal usually takes more time and manpower.",
          "Concrete tops: Can be extremely heavy and may require extra precautions."
        ]
      },
      {
        "type": "p",
        "text": "If you’re not sure what you have, a quick photo can usually tell a pro what to expect."
      },
      {
        "type": "img",
        "alt": "3",
        "src": "/images/blog/how-to-remove-old-countertops/3.webp",
        "w": 358,
        "h": 241
      },
      {
        "type": "h2",
        "text": "How to prepare your kitchen before removal day"
      },
      {
        "type": "p",
        "text": "To keep the removal fast and smooth, here’s what we recommend:"
      },
      {
        "type": "ul",
        "items": [
          "Clear everything off the counters and out of the sink base cabinet",
          "Remove items from the top drawers near the sink (dust and vibration happen)",
          "Make a path from the kitchen to the exit (we’ll be carrying heavy pieces)",
          "Plan for the sink to be unusable during the work window",
          "Keep pets and kids away from the work area for safety"
        ]
      },
      {
        "type": "h2",
        "text": "Common mistakes to avoid (DIY removal)"
      },
      {
        "type": "p",
        "text": "DIY can work in some cases, but the most common issues we see are:"
      },
      {
        "type": "ul",
        "items": [
          "Pulling too hard and breaking cabinet rails",
          "Cutting the backsplash without protecting the wall",
          "Forgetting to shut off water or disconnecting plumbing incorrectly",
          "Cracking stone and creating a bigger mess (and heavier pieces to haul)"
        ]
      },
      {
        "type": "p",
        "text": "If your cabinets are staying, it’s usually worth having removal handled carefully so you don’t turn a countertop upgrade into a cabinet repair project."
      },
      {
        "type": "img",
        "alt": "4",
        "src": "/images/blog/how-to-remove-old-countertops/4.webp",
        "w": 472,
        "h": 480
      },
      {
        "type": "h2",
        "text": "Do you need to remove the backsplash too?"
      },
      {
        "type": "p",
        "text": "Sometimes yes, sometimes no. It depends on:"
      },
      {
        "type": "ul",
        "items": [
          "Whether the backsplash sits on top of the countertop",
          "If the new countertop thickness changes",
          "How clean you want the final look"
        ]
      },
      {
        "type": "p",
        "text": "A quick on-site look (or a couple photos) can help decide the best approach."
      },
      {
        "type": "img",
        "alt": "5",
        "src": "/images/blog/how-to-remove-old-countertops/5.webp",
        "w": 384,
        "h": 262
      },
      {
        "type": "h2",
        "text": "Final thoughts"
      },
      {
        "type": "p",
        "text": "Countertop removal is more than “rip it out.” Done right, it protects your cabinets, keeps your remodel on schedule, and sets up your new countertops for a clean, professional finish."
      },
      {
        "type": "p",
        "text": "If you’re planning new countertops and want a smooth start, we can help you understand what removal will involve and what to expect before installation day."
      },
      {
        "type": "p",
        "text": "Call to action (edit with your info): Ready to upgrade your kitchen or bathroom countertops? Contact Denver Countertops for a fast quote and scheduling options."
      },
      {
        "type": "img",
        "alt": "6",
        "src": "/images/blog/how-to-remove-old-countertops/6.webp",
        "w": 288,
        "h": 144
      },
      {
        "type": "ul",
        "items": [
          "Slabs Liquidation. -"
        ]
      },
      {
        "type": "p",
        "text": "Example: Denver Granite Marble Quartzite Countertops & Slabs | Wholesale"
      },
      {
        "type": "p",
        "text": "Shop Our Products- See Our Entire Stone Inventory!"
      },
      {
        "type": "img",
        "alt": "6",
        "src": "/images/blog/how-to-remove-old-countertops/7.webp",
        "w": 654,
        "h": 536
      },
      {
        "type": "p",
        "text": "Granite Colonial white 136x78"
      },
      {
        "type": "p",
        "text": "Price Range $1,200-$500Only 1 in Stock. Order Soon!!"
      },
      {
        "type": "img",
        "alt": "7",
        "src": "/images/blog/how-to-remove-old-countertops/8.webp",
        "w": 658,
        "h": 442
      },
      {
        "type": "p",
        "text": "Granite New Venitian Gold 136x78"
      },
      {
        "type": "p",
        "text": "Price Range $1,200-$500Only 1 in Stock. Order Soon!!"
      },
      {
        "type": "img",
        "alt": "8",
        "src": "/images/blog/how-to-remove-old-countertops/9.webp",
        "w": 627,
        "h": 334
      },
      {
        "type": "p",
        "text": "Quartzite Marine Blue 122x75"
      },
      {
        "type": "p",
        "text": "Price Range $4,500-$2,000Only 2 in Stock. Order Soon!!"
      },
      {
        "type": "img",
        "alt": "9",
        "src": "/images/blog/how-to-remove-old-countertops/10.webp",
        "w": 673,
        "h": 363
      },
      {
        "type": "p",
        "text": "Granite Blue Dunes 136x79"
      },
      {
        "type": "p",
        "text": "Price Range $1,200- $500. Order Soon!!"
      }
    ]
  },
  {
    "slug": "countertop-warranty-guide",
    "oldSlug": "countertop-warranty-guide-redesign",
    "category": "Warranty",
    "title": "Understanding Your Countertop Warranty",
    "date": "September 28, 2026",
    "readTime": "1 min read",
    "description": "Countertop coverage rarely comes from one document. The slab manufacturer may cover qualifying material defects; the fabricator may cover workmanship involving seams, edges, cutouts, and finish; and the installer may cover qualifying installation wor",
    "cover": {
      "src": "/images/blog/countertop-warranty-guide/1.webp",
      "w": 512,
      "h": 258
    },
    "blocks": [
      {
        "type": "p",
        "text": "What is covered, what is not, and the questions to ask before installation."
      },
      {
        "type": "p",
        "text": "Countertop coverage rarely comes from one document. The slab manufacturer may cover qualifying material defects; the fabricator may cover workmanship involving seams, edges, cutouts, and finish; and the installer may cover qualifying installation workmanship."
      },
      {
        "type": "p",
        "text": "A product warranty generally addresses a verified defect in the slab or manufactured surface. Coverage varies by brand and material."
      },
      {
        "type": "p",
        "text": "Fabrication warranties usually concern how the material was cut and finished: seams, edge profiles, sink and cooktop cutouts, polish, and other shop work. Installation coverage usually concerns setting, leveling, securing, and completing the countertop installation."
      },
      {
        "type": "h2",
        "text": "Common Exclusions"
      },
      {
        "type": "img",
        "alt": "",
        "src": "/images/blog/countertop-warranty-guide/2.webp",
        "w": 1229,
        "h": 499
      },
      {
        "type": "p",
        "text": "Save the proposal, contract, invoice, slab labels, layout approval, care guide, registration confirmation, and final photographs. Keep records for plumbing, cabinet, and appliance work as well. Photograph the entire area and take close-up images in good light. Note when the issue appeared, whether it changed, and what happened immediately before it was noticed."
      },
      {
        "type": "p",
        "text": "The first step is identifying whether the concern is material, fabrication, installation, maintenance, or another trade. Who provides each warranty? Warranty documents are easiest to understand before the project begins."
      },
      {
        "type": "p",
        "text": "A warranty often expects the homeowner to follow written care instructions. After installation, take clear photographs of the entire kitchen, seams, sink, cooktop, edges, overhangs, and backsplash. Instead of asking only, “How long is the warranty?” ask, “If this specific problem happens, who inspects it, what documentation is required, and which costs are included?” That question reveals how the product, fabrication, and installation warranties work together."
      }
    ]
  },
  {
    "slug": "countertop-renovation-budget",
    "oldSlug": "budgeting-for-a-countertop-renovation",
    "category": "Pricing",
    "title": "Budgeting for a Countertop Renovation",
    "date": "October 07, 2026",
    "readTime": "2 min read",
    "description": "The countertop price is only one part of a renovation. A realistic budget should include material, fabrication, template, installation, edge work, sink and cooktop cutouts, tear out, disposal, plumbing, supports, backsplash, and possible cabinet prep",
    "cover": {
      "src": "/images/blog/countertop-renovation-budget/1.webp",
      "w": 724,
      "h": 363
    },
    "blocks": [
      {
        "type": "img",
        "alt": "",
        "src": "/images/blog/countertop-renovation-budget/2.webp",
        "w": 291,
        "h": 13
      },
      {
        "type": "img",
        "alt": "",
        "src": "/images/blog/countertop-renovation-budget/3.webp",
        "w": 724,
        "h": 391
      },
      {
        "type": "p",
        "text": "What actually drives the cost - and how to plan before choosing your slab."
      },
      {
        "type": "p",
        "text": "The countertop price is only one part of a renovation. A realistic budget should include material, fabrication, template, installation, edge work, sink and cooktop cutouts, tear out, disposal, plumbing, supports, backsplash, and possible cabinet preparation."
      },
      {
        "type": "p",
        "text": "Stone type, color, finish, thickness, availability, and slab size create the starting point. Two materials with a similar square-foot price can produce different totals if one requires an additional slab."
      },
      {
        "type": "p",
        "text": "Countertops are not priced only by the finished square footage. Pieces must fit safely inside the slab while respecting defects, movement, edge direction, and fabrication clearances."
      },
      {
        "type": "h2",
        "text": "Choosing the Right Option"
      },
      {
        "type": "h2",
        "text": "Edges, Cutouts, And Details"
      },
      {
        "type": "img",
        "alt": "",
        "src": "/images/blog/countertop-renovation-budget/4.webp",
        "w": 792,
        "h": 294
      },
      {
        "type": "p",
        "text": "Stairs, elevators, narrow doors, long carries, finished floors, occupied homes, and oversized pieces influence installation planning. Heavy 3cm stone or large islands may require additional installers or a seam when a single piece cannot be handled safely. Set aside a reasonable contingency for conditions that cannot be confirmed until demolition, such as out-of-level cabinets, hidden water damage, wall repair, electrical changes, or sink-base reinforcement. The contingency is not permission to spend more; it prevents one surprise from stopping the project."
      },
      {
        "type": "p",
        "text": "You may save by choosing an in-stock color, using a remnant for a small vanity, simplifying the edge, keeping the existing layout, or selecting a standard sink. Bring a rough sketch with dimensions, photos of the room and access path, cabinet plans, material preferences, sink and appliance models, edge ideas, and backsplash goals. One proposal may include template, standard edges, sink cutout, installation, and disposal while others list them separately."
      },
      {
        "type": "p",
        "text": "List the features that matter most: a particular natural slab, a seam-free island, full height backsplash, premium edge, new sink, easier care, or a strict completion date. Rush fabrication, delayed fixtures, incomplete cabinets, and changes after template can create extra trips or lost production time. Share a comfortable target range rather than asking only for the cheapest material."
      },
      {
        "type": "p",
        "text": "Ready to explore your countertop options?"
      },
      {
        "type": "img",
        "alt": "",
        "src": "/images/blog/countertop-renovation-budget/5.webp",
        "w": 257,
        "h": 62
      }
    ]
  }
]

export const posts = [...allPosts].sort((a, b) => Date.parse(b.date) - Date.parse(a.date))
