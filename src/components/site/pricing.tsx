import { useState } from "react"
import { Calculator, Check, Minus, Plus } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { pricingPrograms } from "@/data/site"
import { cn } from "@/lib/utils"
import { SectionHeading } from "./section-heading"
import { useQuote } from "./quote-context"

const usd = (n: number) => n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 })

type Program = "standard" | "byo"

function Counter({ label, hint, value, onChange }: { label: string; hint: string; value: number; onChange: (n: number) => void }) {
  return (
    <div className="flex items-center justify-between gap-4 py-3">
      <div>
        <p className="text-sm font-medium text-navy-900">{label}</p>
        <p className="text-xs text-muted-foreground">{hint}</p>
      </div>
      <div className="flex items-center gap-1 rounded-sm border border-stone-200 bg-white">
        <Button variant="ghost" size="icon" aria-label={`Fewer ${label}`} onClick={() => onChange(Math.max(0, value - 1))}>
          <Minus />
        </Button>
        <span className="w-6 text-center text-sm font-semibold tabular-nums" aria-live="polite">{value}</span>
        <Button variant="ghost" size="icon" aria-label={`More ${label}`} onClick={() => onChange(Math.min(6, value + 1))}>
          <Plus />
        </Button>
      </div>
    </div>
  )
}

function Estimator() {
  const { openQuote } = useQuote()
  const [program, setProgram] = useState<Program>("standard")
  const [sqft, setSqft] = useState(45)
  const [sinks, setSinks] = useState(1)
  const [vanities, setVanities] = useState(0)
  const [cutouts, setCutouts] = useState(0)

  const total =
    program === "standard"
      ? sqft * 42
      : sqft * (18 + 12) + 250 + sinks * 200 + vanities * 150 + cutouts * 150

  const summary =
    program === "standard"
      ? `Standard Service, about ${sqft} sq ft`
      : `Build Your Own, about ${sqft} sq ft, ${sinks} undermount sink(s), ${vanities} vanity sink(s), ${cutouts} extra cutout(s)`

  return (
    <div className="reveal grid overflow-hidden rounded-sm border border-stone-200 bg-white lg:grid-cols-[1.2fr_1fr]">
      <div className="p-6 sm:p-10">
        <p className="eyebrow flex items-center gap-2 text-brand-red">
          <Calculator className="size-4" /> Ballpark estimator
        </p>
        <h3 className="mt-3 font-heading text-3xl text-navy-900">Estimate your labor cost in seconds.</h3>

        <div className="mt-8 grid grid-cols-2 gap-2 rounded-sm bg-stone-100 p-1" role="radiogroup" aria-label="Program">
          {(["standard", "byo"] as const).map((p) => (
            <button
              key={p}
              role="radio"
              aria-checked={program === p}
              onClick={() => setProgram(p)}
              className={cn(
                "h-11 rounded-[3px] text-xs font-semibold tracking-wider uppercase transition-colors",
                program === p ? "bg-navy-800 text-white shadow" : "text-navy-900 hover:bg-white"
              )}
            >
              {p === "standard" ? "Standard · $42/sf" : "Build Your Own"}
            </button>
          ))}
        </div>

        <div className="mt-8">
          <div className="flex items-baseline justify-between">
            <label htmlFor="sqft" className="text-sm font-medium text-navy-900">Countertop area</label>
            <span className="font-heading text-2xl text-navy-800 tabular-nums">{sqft} sq ft</span>
          </div>
          <Slider
            id="sqft"
            min={10}
            max={150}
            step={1}
            value={[sqft]}
            onValueChange={(v) => setSqft(v[0])}
            className="mt-4"
            aria-label="Countertop square footage"
          />
          <p className="mt-2 text-xs text-muted-foreground">
            Tip: a typical kitchen is 30–50 sq ft; a single vanity is 6–10 sq ft.
          </p>
        </div>

        {program === "byo" && (
          <div className="mt-6 divide-y divide-stone-200 border-y border-stone-200 animate-in fade-in slide-in-from-top-2">
            <Counter label="Undermount sinks" hint="$200 each" value={sinks} onChange={setSinks} />
            <Counter label="Vanity sinks" hint="$150 each" value={vanities} onChange={setVanities} />
            <Counter label="Cooktop / extra cutouts" hint="$150 each" value={cutouts} onChange={setCutouts} />
          </div>
        )}
      </div>

      <div className="flex flex-col justify-between gap-8 bg-navy-900 p-6 text-white sm:p-10">
        <div>
          <p className="eyebrow text-white/60">Estimated fabrication &amp; installation</p>
          <p className="mt-3 font-heading text-6xl tabular-nums md:text-7xl">{usd(total)}</p>
          <ul className="mt-6 grid gap-2 text-sm text-white/75">
            {program === "standard" ? (
              <>
                <li className="flex gap-2"><Check className="mt-0.5 size-4 shrink-0 text-white" /> Basic edges, cutouts &amp; faucet holes included</li>
                <li className="flex gap-2"><Check className="mt-0.5 size-4 shrink-0 text-white" /> Template through installation</li>
              </>
            ) : (
              <>
                <li className="flex gap-2"><Check className="mt-0.5 size-4 shrink-0 text-white" /> $18/sf fabrication + $12/sf installation</li>
                <li className="flex gap-2"><Check className="mt-0.5 size-4 shrink-0 text-white" /> Includes $250 template appointment</li>
                <li className="flex gap-2"><Check className="mt-0.5 size-4 shrink-0 text-white" /> Paid at the start of the project</li>
              </>
            )}
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-xs leading-relaxed text-white/55">
            Ballpark only — material is priced separately, and edge upgrades, removal and final measurements will
            change your price. Your exact quote is confirmed after a free on-site template.
          </p>
          <Button
            onClick={() =>
              openQuote({ title: "Get my exact price", message: `Estimator: ${summary} — ballpark ${usd(total)} labor.` })
            }
            className="h-12 rounded-sm bg-brand-red text-xs font-semibold tracking-[0.2em] uppercase hover:bg-brand-red-dark"
          >
            Get my exact price
          </Button>
        </div>
      </div>
    </div>
  )
}

export function Pricing() {
  return (
    <section id="pricing" className="bg-stone-50 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading eyebrow="Transparent pricing" title="A program for every project.">
          Choose the level of service that fits your budget — all fabricated and installed by our own team.
        </SectionHeading>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {pricingPrograms.map((p, i) => (
            <article
              key={p.name}
              className={cn(
                "reveal relative flex flex-col rounded-sm border p-8",
                p.featured ? "border-navy-800 bg-navy-800 text-white shadow-2xl lg:-my-4 lg:py-12" : "border-stone-200 bg-white"
              )}
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              <Badge
                className={cn(
                  "self-start rounded-sm px-2.5 py-1 text-[0.65rem] font-semibold tracking-[0.14em] uppercase",
                  p.featured ? "bg-brand-red text-white" : "bg-navy-100 text-navy-800"
                )}
              >
                {p.tag}
              </Badge>
              <h3 className={cn("mt-5 font-heading text-3xl", p.featured ? "text-white" : "text-navy-900")}>{p.name}</h3>
              <p className="mt-4 flex items-baseline gap-2">
                <span className={cn("font-heading text-6xl", p.featured ? "text-white" : "text-navy-800")}>{p.price}</span>
                <span className={cn("text-sm", p.featured ? "text-white/70" : "text-muted-foreground")}>{p.unit}</span>
              </p>
              <p className={cn("mt-4 text-sm leading-relaxed", p.featured ? "text-white/80" : "text-muted-foreground")}>
                {p.description}
              </p>
              <ul className={cn("mt-6 grid gap-2.5 border-t pt-6 text-sm", p.featured ? "border-white/15" : "border-stone-200")}>
                {p.features.map((f) => (
                  <li key={f} className="flex gap-2">
                    <Check className={cn("mt-0.5 size-4 shrink-0", p.featured ? "text-white" : "text-brand-red")} /> {f}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-16">
          <Estimator />
        </div>
      </div>
    </section>
  )
}
