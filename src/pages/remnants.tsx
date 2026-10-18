import { Check, Phone, Ruler } from "lucide-react"
import { Link } from "react-router"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CtaBand, PageHero } from "@/components/site/hero"
import { useQuote } from "@/components/site/quote-context"
import { SectionHeading } from "@/components/site/section-heading"
import { business, remnants, remnantUses } from "@/data/site"

const usd = (n: number) => n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 })

export default function RemnantsPage() {
  const { openQuote } = useQuote()
  const ask = (message?: string) => openQuote({ title: "Ask about remnants", project: "Remnant", message })

  return (
    <>
      <PageHero
        eyebrow="Remnants"
        title="Stone remnants for smaller projects."
        intro="Leftover pieces of granite, quartz and quartzite from full-slab jobs — a budget-friendly way to get real stone on a vanity, fireplace or bar top."
        image="/images/slabs/whisper-white.webp"
      />

      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <div>
            <SectionHeading eyebrow="What's a remnant?" title="Big-project stone, small-project price." align="left">
              When a full slab is cut for a kitchen, the leftover pieces become remnants. We sell them at a discount — just
              bring your measurements so we can match a piece to your space.
            </SectionHeading>
            <div className="reveal mt-8 flex flex-wrap gap-3">
              <Button
                onClick={() => ask()}
                className="h-12 rounded-sm bg-brand-red px-7 text-xs font-semibold tracking-[0.18em] uppercase hover:bg-brand-red-dark"
              >
                Ask about remnants
              </Button>
              <Button asChild variant="outline" className="h-12 rounded-sm border-navy-800/30 px-7 text-xs font-semibold tracking-[0.18em] text-navy-800 uppercase">
                <a href={business.phoneHref}>
                  <Phone /> {business.phone}
                </a>
              </Button>
            </div>
          </div>
          <div className="reveal rounded-sm bg-stone-50 p-8">
            <p className="eyebrow text-brand-red">Perfect for</p>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {remnantUses.map((u) => (
                <li key={u} className="flex items-center gap-2 text-navy-900">
                  <Check className="size-4 shrink-0 text-brand-red" /> {u}
                </li>
              ))}
            </ul>
            <p className="mt-6 border-t border-stone-200 pt-5 text-sm leading-relaxed text-muted-foreground">
              Tip: measure the cabinet or area (width × depth) before you visit. Remnants come in whatever size is left
              over, so having your numbers ready helps us find the right piece fast.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-stone-50 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading eyebrow="Current remnants" title="What's in the yard right now." align="left">
            Remnant inventory changes every week as new jobs are cut.
          </SectionHeading>

          {remnants.length > 0 ? (
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {remnants.map((r) => (
                <article key={r.name + r.size} className="reveal flex flex-col overflow-hidden rounded-sm bg-white shadow-sm">
                  <div className="relative aspect-[16/10] bg-stone-100">
                    <img src={r.image} alt={`${r.name} ${r.type.toLowerCase()} remnant`} loading="lazy" className="size-full object-cover" />
                    <Badge className="absolute top-3 right-3 rounded-sm bg-white/95 px-2.5 py-1 text-[0.7rem] font-semibold tracking-wider text-navy-900">
                      {r.type.toUpperCase()}
                    </Badge>
                  </div>
                  <div className="flex flex-1 flex-col gap-3 p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="font-heading text-2xl text-navy-900">{r.name}</h3>
                        <p className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
                          <Ruler className="size-3.5" /> {r.size}
                        </p>
                      </div>
                      {r.price !== undefined && <p className="font-heading text-3xl text-brand-red">{usd(r.price)}</p>}
                    </div>
                    <Button
                      onClick={() => ask(`I'm interested in the ${r.name} ${r.type} remnant (${r.size}).`)}
                      className="mt-auto h-11 rounded-sm bg-navy-800 text-[0.7rem] font-semibold tracking-[0.16em] uppercase hover:bg-navy-600"
                    >
                      Place on hold
                    </Button>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="reveal mt-12 grid gap-6 rounded-sm border border-stone-200 bg-white p-8 md:grid-cols-[1fr_auto] md:items-center md:p-10">
              <div>
                <p className="font-heading text-2xl text-navy-900">Call for today's remnant list</p>
                <p className="mt-2 max-w-2xl leading-relaxed text-muted-foreground">
                  Remnants move fast. Call or send us your measurements and we'll tell you what we have in stock that fits —
                  or visit the showroom and see them in person.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
                <Button asChild className="h-12 rounded-sm bg-brand-red px-7 text-xs font-semibold tracking-[0.18em] uppercase hover:bg-brand-red-dark">
                  <a href={business.phoneHref}>
                    <Phone /> Call {business.phone}
                  </a>
                </Button>
                <Button
                  variant="outline"
                  onClick={() => ask()}
                  className="h-12 rounded-sm border-navy-800/30 px-7 text-xs font-semibold tracking-[0.18em] text-navy-800 uppercase"
                >
                  Send my measurements
                </Button>
              </div>
            </div>
          )}

          <p className="mt-10 text-sm text-muted-foreground">
            Need a full slab instead?{" "}
            <Link to="/deals" className="font-semibold text-navy-800 underline underline-offset-4 hover:text-brand-red">
              See our full slab liquidation deals
            </Link>
            .
          </p>
        </div>
      </section>
      <CtaBand />
    </>
  )
}
