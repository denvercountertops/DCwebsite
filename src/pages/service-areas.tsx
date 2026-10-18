import { ArrowRight, Check, MapPin } from "lucide-react"
import { Link, useParams } from "react-router"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Fabrication } from "@/components/site/countertops"
import { CtaBand, PageHero } from "@/components/site/hero"
import { useQuote } from "@/components/site/quote-context"
import { Reviews } from "@/components/site/reviews"
import { SectionHeading } from "@/components/site/section-heading"
import { cities, cityBySlug } from "@/data/cities"
import { business, serviceAreas } from "@/data/site"
import NotFoundPage from "./not-found"

export function ServiceAreasPage() {
  const listed = new Set(cities.flatMap((c) => [c.name, ...(c.areas ?? [])]))
  const others = serviceAreas.filter((a) => !listed.has(a))
  return (
    <>
      <PageHero
        eyebrow="Service Areas"
        title="Countertops across the Denver metro."
        intro="From our showroom in Englewood, our own team templates, fabricates and installs countertops throughout the Front Range."
        image="/images/projects/project-9.webp"
      />
      <section className="bg-stone-50 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {cities.map((c, i) => (
              <Link
                key={c.slug}
                to={`/service-areas/${c.slug}`}
                className="reveal group relative isolate flex aspect-[4/5] flex-col justify-end overflow-hidden rounded-sm p-5 text-white"
                style={{ transitionDelay: `${(i % 5) * 60}ms` }}
              >
                <img src={c.image} alt="" loading="lazy" className="absolute inset-0 -z-10 size-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <span className="absolute inset-0 -z-10 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <h2 className="font-heading text-2xl">{c.name}</h2>
                <p className="mt-1 text-xs text-white/75">{c.county}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-[0.65rem] font-semibold tracking-[0.16em] uppercase">
                  View area <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            ))}
          </div>
          <div className="reveal mt-12 rounded-sm border border-stone-200 bg-white p-8">
            <p className="eyebrow text-brand-red">Also serving</p>
            <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-navy-900">
              {others.map((a) => (
                <li key={a} className="flex items-center gap-1.5">
                  <MapPin className="size-3.5 text-brand-red" /> {a}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm text-muted-foreground">
              Don't see your city? Call{" "}
              <a href={business.phoneHref} className="font-semibold text-navy-800 underline underline-offset-4">{business.phone}</a> — we
              likely serve your area.
            </p>
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  )
}

export function CityPage() {
  const { city: slug } = useParams()
  const city = cityBySlug(slug)
  const { openQuote } = useQuote()
  if (!city) return <NotFoundPage />
  const nearby = city.nearby.map((s) => cityBySlug(s)).filter((c) => c !== undefined)

  const faqs = [
    {
      q: `Do you install countertops in ${city.name}?`,
      a: `Yes. Our own team templates, fabricates and installs countertops in ${city.name} and across the Denver metro. We never subcontract any part of the job.`,
    },
    {
      q: `How long does a countertop project take in ${city.name}?`,
      a: "Most projects run 7–10 business days from template to final installation, depending on material availability and project size. Most installs are finished in a single day.",
    },
    {
      q: "Can I see my slab before it's cut?",
      a: `Yes — visit our showroom at ${business.address} to pick your exact slab, see edge profile samples and be part of the layout.`,
    },
    {
      q: "Do you offer free estimates?",
      a: `Yes. Free consultations and estimates are always available — call ${business.phone} or request a quote online.`,
    },
  ]

  return (
    <>
      <PageHero
        eyebrow={`Service Areas › ${city.name}`}
        title={`Countertops in ${city.name}, CO`}
        intro={city.intro}
        image={city.image}
      />

      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
          <div>
            <SectionHeading eyebrow={city.county} title={`Custom countertops for ${city.name} homes.`} align="left">
              {city.detail}
            </SectionHeading>
            <ul className="reveal mt-8 grid gap-3 sm:grid-cols-2">
              {[
                "Kitchen countertops & islands",
                "Bathroom vanities",
                "Outdoor kitchens",
                "Fireplaces & window sills",
                "Every edge profile",
                "Karran & ESI sinks",
              ].map((t) => (
                <li key={t} className="flex items-center gap-2 text-navy-900">
                  <Check className="size-4 shrink-0 text-brand-red" /> {t}
                </li>
              ))}
            </ul>
            {city.areas && (
              <p className="reveal mt-8 text-sm text-muted-foreground">
                Including {city.areas.slice(0, -1).join(", ")} and {city.areas.at(-1)}.
              </p>
            )}
            <div className="reveal mt-8 flex flex-wrap gap-3">
              <Button
                onClick={() => openQuote({ title: `Free quote in ${city.name}`, message: `Project location: ${city.name}, CO.` })}
                className="h-12 rounded-sm bg-brand-red px-7 text-xs font-semibold tracking-[0.18em] uppercase hover:bg-brand-red-dark"
              >
                Get a free {city.name} quote
              </Button>
              <Button asChild variant="outline" className="h-12 rounded-sm border-navy-800/30 px-7 text-xs font-semibold tracking-[0.18em] text-navy-800 uppercase">
                <Link to="/our-work">
                  See our work <ArrowRight />
                </Link>
              </Button>
            </div>
          </div>

          <div className="reveal flex flex-col gap-6">
            <div className="rounded-sm bg-navy-900 p-8 text-white">
              <p className="eyebrow text-white/60">Showroom & slab yard</p>
              <p className="mt-3 font-heading text-2xl">{business.address}</p>
              <ul className="mt-4 grid gap-1 text-sm text-white/80">
                {business.hours.map((h) => (
                  <li key={h.days} className="flex justify-between gap-6">
                    <span>{h.days}</span>
                    <span>{h.time}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href={business.mapsUrl} target="_blank" rel="noreferrer" className="text-[0.7rem] font-semibold tracking-[0.16em] uppercase underline underline-offset-4">
                  Get directions
                </a>
                <a href={business.phoneHref} className="text-[0.7rem] font-semibold tracking-[0.16em] uppercase underline underline-offset-4">
                  {business.phone}
                </a>
              </div>
            </div>
            <Accordion type="single" collapsible className="rounded-sm border border-stone-200">
              {faqs.map((f) => (
                <AccordionItem key={f.q} value={f.q} className="border-stone-200 px-6">
                  <AccordionTrigger className="py-5 text-left text-base font-semibold text-navy-900 hover:no-underline">{f.q}</AccordionTrigger>
                  <AccordionContent className="pb-5 text-base leading-relaxed text-muted-foreground">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <Fabrication />
      <Reviews />

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <p className="eyebrow text-brand-red">Nearby service areas</p>
          <div className="mt-5 flex flex-wrap gap-3">
            {nearby.map((n) => (
              <Link
                key={n.slug}
                to={`/service-areas/${n.slug}`}
                className="rounded-sm border border-stone-200 px-5 py-3 font-heading text-xl text-navy-900 transition-colors hover:border-navy-800 hover:bg-stone-50"
              >
                {n.name}
              </Link>
            ))}
            <Link to="/service-areas" className="rounded-sm px-5 py-3 text-[0.7rem] font-semibold tracking-[0.16em] text-navy-800 uppercase hover:text-brand-red">
              All service areas →
            </Link>
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  )
}
