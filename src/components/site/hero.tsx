import { ArrowRight, ChevronRight, Phone, Star } from "lucide-react"
import { Link } from "react-router"
import { Button } from "@/components/ui/button"
import { business } from "@/data/site"
import { useQuote } from "./quote-context"

export function Hero() {
  const { openQuote } = useQuote()

  return (
    <section className="relative isolate flex min-h-[100svh] items-end overflow-hidden bg-ink text-white">
      <img
        src="/images/gallery/kitchen-2.webp"
        alt=""
        fetchPriority="high"
        className="absolute inset-0 -z-20 size-full scale-105 object-cover object-[50%_40%] animate-in fade-in zoom-in-110 duration-[1800ms]"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/80 via-black/45 to-black/35" />

      <div className="mx-auto w-full max-w-7xl px-4 pt-40 pb-16 sm:px-6 md:pb-24">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <p className="eyebrow mb-6 flex items-center gap-3 text-white/85 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <span className="h-px w-8 bg-white/50" />
            Family owned in Colorado since 2002
            <span className="h-px w-8 bg-white/50" />
          </p>
          <h1 className="font-heading text-[2.75rem] leading-[1.02] text-balance drop-shadow-sm sm:text-6xl md:text-7xl lg:text-[5.5rem] animate-in fade-in slide-in-from-bottom-6 duration-1000">
            Custom countertops, designed &amp; installed in <em className="text-white/90">7–10 days.</em>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/85 md:text-lg animate-in fade-in slide-in-from-bottom-6 duration-1000 [animation-delay:150ms] [animation-fill-mode:both]">
            Great service, professional installation, and competitive pricing. Granite, quartz, quartzite and marble —
            from Denver's largest in-stock slab selection, fabricated and installed by our own team.
          </p>

          <div className="mt-10 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row animate-in fade-in slide-in-from-bottom-6 duration-1000 [animation-delay:300ms] [animation-fill-mode:both]">
            <Button
              onClick={() => openQuote()}
              className="h-13 rounded-sm bg-brand-red px-8 text-xs font-semibold tracking-[0.2em] uppercase hover:bg-brand-red-dark"
            >
              Get my free quote
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-13 rounded-sm border-white/60 bg-white/5 px-8 text-xs font-semibold tracking-[0.2em] uppercase text-white backdrop-blur hover:bg-white hover:text-ink"
            >
              <Link to="/deals">
                Shop slab deals <ArrowRight />
              </Link>
            </Button>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-white/80">
            <span className="flex items-center gap-2">
              <span className="flex text-star">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-current" />
                ))}
              </span>
              5-star rated by Colorado homeowners
            </span>
            <span className="hidden h-4 w-px bg-white/30 sm:block" />
            <span>Member, Natural Stone Institute</span>
            <span className="hidden h-4 w-px bg-white/30 sm:block" />
            <span>100% in-house — we never subcontract</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export function PageHero({
  eyebrow,
  title,
  intro,
  image,
  position = "50% 50%",
}: {
  eyebrow: string
  title: string
  intro?: string
  image: string
  position?: string
}) {
  return (
    <section className="relative isolate overflow-hidden bg-ink text-white">
      <img
        src={image}
        alt=""
        fetchPriority="high"
        style={{ objectPosition: position }}
        className="absolute inset-0 -z-20 size-full object-cover animate-in fade-in duration-1000"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/80 via-black/55 to-black/45" />
      <div className="mx-auto flex min-h-[440px] max-w-7xl flex-col justify-end px-4 pt-36 pb-14 sm:px-6 md:min-h-[520px] md:pb-20">
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-1.5 text-xs tracking-wide text-white/70">
          <Link to="/" className="hover:text-white">Home</Link>
          <ChevronRight className="size-3.5" />
          <span className="text-white">{eyebrow}</span>
        </nav>
        <h1
          className={`max-w-4xl font-heading leading-[1.03] text-balance animate-in fade-in slide-in-from-bottom-4 duration-700 ${
            title.length > 45 ? "text-4xl md:text-6xl" : "text-5xl md:text-7xl"
          }`}
        >
          {title}
        </h1>
        {intro && (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/85 animate-in fade-in slide-in-from-bottom-4 duration-1000 md:text-lg">
            {intro}
          </p>
        )}
      </div>
    </section>
  )
}

export function CtaBand() {
  const { openQuote } = useQuote()
  return (
    <section className="bg-navy-900 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-4 py-16 sm:px-6 md:flex-row md:items-center md:py-20">
        <div className="reveal max-w-2xl">
          <p className="eyebrow text-white/65">The perfect countertop is just a call away</p>
          <h2 className="mt-3 font-heading text-4xl leading-tight md:text-5xl">Ready to start your project?</h2>
        </div>
        <div className="reveal flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <Button
            onClick={() => openQuote()}
            className="h-13 rounded-sm bg-brand-red px-8 text-xs font-semibold tracking-[0.2em] uppercase hover:bg-brand-red-dark"
          >
            Get my free quote
          </Button>
          <Button
            asChild
            variant="outline"
            className="h-13 rounded-sm border-white/40 bg-transparent px-8 text-xs font-semibold tracking-[0.2em] uppercase text-white hover:bg-white hover:text-navy-900"
          >
            <a href={business.phoneHref}>
              <Phone /> {business.phone}
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
