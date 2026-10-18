import { Clock, MapPin, Phone } from "lucide-react"
import { Link } from "react-router"
import { useQuote } from "./quote-context"
import { business, navLinks, serviceAreas } from "@/data/site"
import { FacebookIcon } from "./section-heading"
import { QuoteForm } from "./quote-form"

export function Contact() {
  return (
    <section className="relative isolate overflow-hidden bg-ink pt-36 pb-20 text-white md:pt-44 md:pb-28">
      <img src="/images/gallery/kitchen-2.webp" alt="" className="absolute inset-0 -z-20 size-full object-cover opacity-25" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-black/90 via-black/80 to-navy-950/80" />

      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
        <div className="flex flex-col gap-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div>
            <p className="eyebrow flex items-center gap-3 text-white/70">
              <span className="h-px w-8 bg-white/40" /> Schedule a free consultation
            </p>
            <h1 className="mt-4 font-heading text-5xl leading-[1.05] md:text-7xl">Let's build your dream countertop.</h1>
            <p className="mt-5 text-lg leading-relaxed text-white/75">
              Call us or send a request — we'll schedule your template appointment and walk you through material options
              from there.
            </p>
          </div>

          <ul className="grid gap-5">
            <li>
              <a href={business.phoneHref} className="group flex items-center gap-4">
                <span className="flex size-12 items-center justify-center rounded-sm bg-brand-red"><Phone className="size-5" /></span>
                <span>
                  <span className="eyebrow block text-white/55">Call us</span>
                  <span className="font-heading text-2xl group-hover:underline">{business.phone}</span>
                </span>
              </a>
            </li>
            <li>
              <a href={business.mapsUrl} target="_blank" rel="noreferrer" className="group flex items-center gap-4">
                <span className="flex size-12 items-center justify-center rounded-sm bg-white/10"><MapPin className="size-5" /></span>
                <span>
                  <span className="eyebrow block text-white/55">Visit the showroom</span>
                  <span className="text-lg group-hover:underline">{business.address}</span>
                </span>
              </a>
            </li>
            <li className="flex items-start gap-4">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-sm bg-white/10"><Clock className="size-5" /></span>
              <span>
                <span className="eyebrow block text-white/55">Showroom hours</span>
                {business.hours.map((h) => (
                  <span key={h.days} className="flex justify-between gap-6 text-sm text-white/85 sm:w-72">
                    <span>{h.days}</span>
                    <span>{h.time}</span>
                  </span>
                ))}
              </span>
            </li>
          </ul>

          <div className="aspect-[16/9] overflow-hidden rounded-sm border border-white/10">
            <iframe
              title="Denver Countertops showroom map"
              src={business.mapsEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="size-full grayscale-[40%]"
            />
          </div>
        </div>

        <div className="self-start rounded-sm animate-in fade-in slide-in-from-bottom-4 duration-1000 border border-white/10 bg-white/[0.06] p-6 backdrop-blur sm:p-10">
          <h3 className="font-heading text-3xl">Get my free quote</h3>
          <p className="mt-2 mb-8 text-sm text-white/65">Takes about a minute. No obligation.</p>
          <QuoteForm dark />
        </div>
      </div>
    </section>
  )
}

const YEAR = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 md:grid-cols-[1.2fr_1fr_1.6fr]">
          <div className="flex flex-col gap-5">
            <img src="/images/logo.png" alt="Denver Countertops" width={499} height={226} loading="lazy" className="h-16 w-auto self-start" />
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              Custom granite, quartz and quartzite countertops — laser templated, fabricated and installed in-house since 2002. Member, Natural Stone Institute.
            </p>
            <div className="flex items-center gap-3">
              <a href={business.phoneHref} className="text-sm font-semibold text-navy-800">{business.phone}</a>
              <span className="h-4 w-px bg-stone-200" />
              <a href={business.facebook} target="_blank" rel="noreferrer" aria-label="Denver Countertops on Facebook" className="flex size-9 items-center justify-center rounded-sm bg-navy-800 text-white hover:bg-navy-600">
                <FacebookIcon className="size-4" />
              </a>
            </div>
          </div>

          <nav aria-label="Footer">
            <p className="eyebrow mb-4 text-navy-900">Explore</p>
            <ul className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
              {[{ label: "Home", to: "/" }, ...navLinks].map((l) => (
                <li key={l.to}><Link to={l.to} className="hover:text-navy-800">{l.label}</Link></li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="eyebrow mb-4 text-navy-900">Countertop remodeling in Colorado</p>
            <ul className="flex flex-wrap gap-x-3 gap-y-1.5 text-sm text-muted-foreground">
              {serviceAreas.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-14 flex flex-col justify-between gap-3 border-t border-stone-200 pt-6 text-xs text-muted-foreground sm:flex-row">
          <p>© {YEAR} Denver Countertops. All Rights Reserved.</p>
          <p>{business.address}</p>
        </div>
      </div>
    </footer>
  )
}

export function MobileCtaBar() {
  const { openQuote } = useQuote()
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 grid grid-cols-2 gap-px border-t border-white/10 bg-navy-950 pb-[env(safe-area-inset-bottom)] sm:hidden">
      <a href={business.phoneHref} className="flex h-14 items-center justify-center gap-2 text-xs font-semibold tracking-[0.16em] text-white uppercase">
        <Phone className="size-4" /> Call now
      </a>
      <button onClick={() => openQuote()} className="flex h-14 items-center justify-center bg-brand-red text-xs font-semibold tracking-[0.16em] text-white uppercase">
        Free quote
      </button>
    </div>
  )
}
