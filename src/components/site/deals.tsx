import { useState } from "react"
import { ArrowRight, Phone, Ruler } from "lucide-react"
import { Link } from "react-router"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { business, slabs, type SlabType } from "@/data/site"
import { SectionHeading } from "./section-heading"
import { useQuote } from "./quote-context"

const filters: ("All" | SlabType)[] = ["All", "Quartz", "Granite", "Quartzite"]
const usd = (n: number) => n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 })

export function Deals({ limit }: { limit?: number }) {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All")
  const { openQuote } = useQuote()
  const filtered = filter === "All" ? slabs : slabs.filter((s) => s.type === filter)
  const shown = limit ? [...slabs].sort((a, b) => b.regular - b.sale - (a.regular - a.sale)).slice(0, limit) : filtered

  return (
    <section id="deals" className="relative overflow-hidden bg-navy-900 py-20 text-white md:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[url(/images/marble.jpg)] bg-cover bg-center opacity-[0.06] mix-blend-luminosity"
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading eyebrow="Slab liquidation" title="Premium slabs at liquidation prices." align="left" light>
            Overstock and liquidation material — first come, first served. Place a slab on hold before it's gone.
          </SectionHeading>
          {limit ? (
            <Button
              asChild
              variant="outline"
              className="reveal h-12 rounded-sm border-white/40 bg-transparent px-7 text-xs font-semibold tracking-[0.18em] text-white uppercase hover:bg-white hover:text-navy-900"
            >
              <Link to="/deals">
                See all {slabs.length} slab deals <ArrowRight />
              </Link>
            </Button>
          ) : (
          <Tabs value={filter} onValueChange={(v) => setFilter(v as typeof filter)} className="reveal w-full md:w-auto">
            <TabsList className="h-11 w-full rounded-sm bg-white/10 p-1 md:w-fit">
              {filters.map((f) => (
                <TabsTrigger
                  key={f}
                  value={f}
                  className="h-9 flex-1 rounded-[3px] px-2 text-[0.7rem] sm:px-4 sm:text-xs font-semibold tracking-wider text-white/75 uppercase data-[state=active]:bg-white data-[state=active]:text-navy-900"
                >
                  {f}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
          )}
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((s) => {
            const pct = Math.round((1 - s.sale / s.regular) * 100)
            return (
              <article
                key={s.name}
                className="group flex flex-col overflow-hidden rounded-sm bg-white text-ink shadow-xl animate-in fade-in zoom-in-95 duration-500"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
                  <img
                    src={s.image}
                    alt={`${s.name} ${s.type.toLowerCase()} slab`}
                    loading="lazy"
                    className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <Badge className="absolute top-3 left-3 rounded-sm bg-brand-red px-2.5 py-1 text-[0.7rem] font-bold tracking-wider text-white">
                    SAVE {pct}%
                  </Badge>
                  <Badge className="absolute top-3 right-3 rounded-sm bg-white/95 px-2.5 py-1 text-[0.7rem] font-semibold tracking-wider text-navy-900">
                    {s.type.toUpperCase()}
                  </Badge>
                </div>
                <div className="flex flex-1 flex-col gap-4 p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-heading text-2xl text-navy-900">{s.name}</h3>
                      <p className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
                        <Ruler className="size-3.5" /> {s.thickness} · {s.size} in
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground line-through">{usd(s.regular)}</p>
                      <p className="font-heading text-3xl text-brand-red">{usd(s.sale)}</p>
                    </div>
                  </div>
                  <p className="flex items-center gap-2 text-sm font-medium text-navy-800">
                    <span className="relative flex size-2">
                      <span className="absolute inline-flex size-full animate-ping rounded-full bg-brand-red/60" />
                      <span className="relative inline-flex size-2 rounded-full bg-brand-red" />
                    </span>
                    {s.available === 1 ? "Only 1 slab available" : `${s.available} slabs available`}
                  </p>
                  <div className="mt-auto grid grid-cols-2 gap-2 pt-2">
                    <Button
                      onClick={() =>
                        openQuote({
                          title: `Hold ${s.name}`,
                          project: "Liquidation slab",
                          message: `I'd like to place a hold on the ${s.thickness} ${s.name} ${s.type} slab (${s.size}) — sale ${usd(s.sale)}.`,
                        })
                      }
                      className="h-11 rounded-sm bg-navy-800 text-[0.7rem] font-semibold tracking-[0.16em] uppercase hover:bg-navy-600"
                    >
                      Place on hold
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="h-11 rounded-sm border-navy-800/30 text-[0.7rem] font-semibold tracking-[0.16em] text-navy-800 uppercase"
                    >
                      <a href={business.phoneHref}>
                        <Phone /> Call
                      </a>
                    </Button>
                  </div>
                </div>
              </article>
            )
          })}
        </div>

        <p className="mt-10 text-center text-sm text-white/65">
          Inventory changes daily. Call{" "}
          <a href={business.phoneHref} className="font-semibold text-white underline underline-offset-4">
            {business.phone}
          </a>{" "}
          to check availability now — remnants also available for vanities and fireplaces.
        </p>
      </div>
    </section>
  )
}
