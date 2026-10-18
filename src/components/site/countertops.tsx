import { ArrowRight, Check, ShieldCheck, Store } from "lucide-react"
import { Link } from "react-router"
import {
  countertopRooms,
  edgeProfiles,
  fabricationSteps,
  materialSwatches,
  overhangGuide,
  sinkBrands,
  sinkMounts,
  templateChecklist,
  warranty,
} from "@/data/site"
import { SectionHeading } from "./section-heading"

export function CountertopRooms() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <div className="reveal relative">
          <div className="aspect-[4/5] overflow-hidden rounded-sm lg:sticky lg:top-28">
            <img
              src="/images/gallery/kitchen-3.webp"
              alt="Speckled white quartz island with charcoal cabinets"
              loading="lazy"
              className="size-full object-cover"
            />
          </div>
          <div className="absolute -right-3 -bottom-6 hidden max-w-[15rem] bg-navy-900 p-6 text-white shadow-xl sm:block lg:-right-8">
            <p className="font-heading text-4xl">2002</p>
            <p className="mt-1 text-sm text-white/75">Fabricating and installing countertops across Colorado.</p>
          </div>
        </div>

        <div>
          <SectionHeading eyebrow="Countertops are what we do" title="Custom countertops for every room." align="left">
            Every countertop is measured, cut and installed by our own team — whether it's a full kitchen, a single vanity
            or a commercial project.
          </SectionHeading>
          <ul className="mt-10 grid gap-px overflow-hidden rounded-sm border border-stone-200 bg-stone-200 sm:grid-cols-2">
            {countertopRooms.map((r, i) => (
              <li key={r.title} className="reveal bg-white p-6" style={{ transitionDelay: `${i * 60}ms` }}>
                <span className="font-heading text-sm text-brand-red">0{i + 1}</span>
                <h3 className="mt-1 font-heading text-xl text-navy-900">{r.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{r.text}</p>
              </li>
            ))}
          </ul>
          <Link
            to="/countertops"
            className="reveal mt-8 inline-flex items-center gap-1.5 border-b border-navy-800 pb-0.5 text-[0.7rem] font-semibold tracking-[0.18em] text-navy-800 uppercase transition-colors hover:border-brand-red hover:text-brand-red"
          >
            Explore our countertop work <ArrowRight className="size-3.5" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export function Fabrication({ showLink = false }: { showLink?: boolean }) {
  return (
    <section className="relative isolate overflow-hidden bg-ink py-20 text-white md:py-28">
      <img src="/images/marble.jpg" alt="" loading="lazy" className="absolute inset-0 -z-20 size-full object-cover opacity-[0.07]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading eyebrow="Fabrication & installation" title="From slab to installed — all under one roof." align="left" light>
            We never subcontract. The same team that measures your kitchen cuts your stone and installs it — so nothing gets
            lost between steps.
          </SectionHeading>
          {showLink && (
            <Link
              to="/countertops"
              className="reveal inline-flex h-12 shrink-0 items-center gap-2 rounded-sm border border-white/40 px-7 text-xs font-semibold tracking-[0.18em] uppercase transition-colors hover:bg-white hover:text-ink"
            >
              See how we work <ArrowRight className="size-4" />
            </Link>
          )}
        </div>

        <ol className="mt-14 grid gap-px overflow-hidden rounded-sm border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-4">
          {fabricationSteps.map((s, i) => (
            <li key={s.title} className="reveal flex flex-col gap-4 bg-ink p-8" style={{ transitionDelay: `${i * 90}ms` }}>
              <span className="font-heading text-6xl leading-none text-brand-red">0{i + 1}</span>
              <h3 className="font-heading text-2xl">{s.title}</h3>
              <p className="text-sm leading-relaxed text-white/70">{s.text}</p>
              <p className="eyebrow mt-auto border-t border-white/10 pt-4 text-white/50">{s.detail}</p>
            </li>
          ))}
        </ol>

        <dl className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-4">
          {[
            { v: "7–10", l: "Days from template to install" },
            { v: "1 day", l: "Typical installation" },
            { v: "1 year", l: "Workmanship warranty" },
            { v: "100%", l: "In-house — never subcontracted" },
          ].map((s) => (
            <div key={s.l} className="reveal border-l-2 border-brand-red pl-4">
              <dd className="font-heading text-4xl">{s.v}</dd>
              <dt className="mt-1 text-xs tracking-wide text-white/60 uppercase">{s.l}</dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

function EdgeDiagram({ path, miter, floor }: { path: string; miter?: boolean; floor?: boolean }) {
  return (
    <svg viewBox="-4 4 112 66" className="h-20 w-full" aria-hidden="true">
      <path d={path} className="fill-stone-200 stroke-navy-800" strokeWidth="1.5" strokeLinejoin="round" />
      {miter && <path d="M92 23 L100 15" className="stroke-navy-800" strokeWidth="1" strokeDasharray="2 2" />}
      {floor && <path d="M60 66 H108" className="stroke-muted-foreground" strokeWidth="1" />}
    </svg>
  )
}

export function EdgeProfiles() {
  return (
    <section className="bg-stone-50 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading eyebrow="The finishing details" title="Choose your edge profile.">
          The edge is the detail everyone touches. Standard edges — squared or gently rounded — are included in our base
          fabrication pricing. Premium profiles like ogee, bullnose and waterfall take more labor and typically cost more per linear
          foot.
        </SectionHeading>

        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4">
          {edgeProfiles.map((e, i) => (
            <figure
              key={e.name}
              className="reveal relative flex flex-col rounded-sm border border-stone-200 bg-white p-5 transition-colors hover:border-navy-800/40"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              {e.included && (
                <span className="absolute top-3 right-3 rounded-sm bg-navy-100 px-2 py-0.5 text-[0.6rem] font-semibold tracking-wider text-navy-800 uppercase">
                  Included
                </span>
              )}
              <EdgeDiagram path={e.path} miter={e.miter} floor={e.floor} />
              <figcaption className="mt-4">
                <p className="font-heading text-xl text-navy-900">{e.name}</p>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{e.note}</p>
              </figcaption>
            </figure>
          ))}
          <Link
            to="/contact"
            className="reveal group flex flex-col justify-between rounded-sm bg-navy-900 p-5 text-white transition-colors hover:bg-navy-800"
          >
            <Store className="size-7" />
            <div className="mt-6">
              <p className="font-heading text-xl">See and feel them in person</p>
              <p className="mt-1 text-xs leading-relaxed text-white/75">
                Our showroom has edge profile samples you can touch before you decide.
              </p>
              <span className="mt-3 inline-flex items-center gap-1 text-[0.65rem] font-semibold tracking-[0.16em] uppercase">
                Visit the showroom <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
              </span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}

export function Sinks() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading eyebrow="Sinks & cutouts" title="The right sink, cut and fit with your countertops." align="left">
          Choose a sink from our partners and we'll cut, fit and attach it as part of your countertop project — or buy a
          sink on its own.
        </SectionHeading>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {sinkBrands.map((b, i) => (
            <article
              key={b.brand}
              className="reveal flex flex-col rounded-sm border border-stone-200 p-8"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <p className="eyebrow text-brand-red">{b.type}</p>
              <h3 className="mt-2 font-heading text-4xl text-navy-900">{b.brand}</h3>
              <p className="mt-4 leading-relaxed text-muted-foreground">{b.text}</p>
              <ul className="mt-6 grid gap-2 border-t border-stone-200 pt-6 text-sm text-navy-900 sm:grid-cols-3">
                {b.points.map((p) => (
                  <li key={p} className="flex items-start gap-2">
                    <Check className="mt-0.5 size-4 shrink-0 text-brand-red" /> {p}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="reveal mt-6 grid gap-px overflow-hidden rounded-sm bg-stone-200 md:grid-cols-3">
          {sinkMounts.map((m) => {
            const farmhouse = m.name.startsWith("Farmhouse")
            return (
              <div key={m.name} className={farmhouse ? "bg-navy-900 p-8 text-white" : "bg-stone-50 p-8"}>
                <h3 className={farmhouse ? "font-heading text-2xl" : "font-heading text-2xl text-navy-900"}>{m.name}</h3>
                <p className={farmhouse ? "mt-2 text-sm leading-relaxed text-white/80" : "mt-2 text-sm leading-relaxed text-muted-foreground"}>
                  {m.text}
                  {farmhouse && " We offer several farmhouse styles in composite quartz."}
                </p>
              </div>
            )
          })}
        </div>

        <div className="reveal mt-6 grid gap-6 rounded-sm border border-stone-200 p-6 sm:p-8 md:grid-cols-[1fr_1.4fr] md:items-center md:gap-10">
          <div>
            <p className="font-heading text-2xl text-navy-900">Already have countertops?</p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              We can often retrofit an undermount sink into your existing countertop, depending on the material and setup.
              Call us to talk through your kitchen.
            </p>
          </div>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-navy-900">
            {["Undermount kitchen sinks", "Vanity sinks", "Cooktop cutouts", "Faucet holes", "Sink attachment", "Vein matching"].map((t) => (
              <li key={t} className="flex items-center gap-2">
                <Check className="size-4 text-brand-red" /> {t}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export function MaterialSwatches() {
  return (
    <section className="border-t border-stone-200 bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading eyebrow="Shop by material" title="Denver's largest in-stock slab selection." align="left">
            Granite, quartz, quartzite and marble from the industry's best suppliers — come see and choose your exact slab.
          </SectionHeading>
          <Link
            to="/materials"
            className="reveal inline-flex shrink-0 items-center gap-1.5 border-b border-navy-800 pb-0.5 text-[0.7rem] font-semibold tracking-[0.18em] text-navy-800 uppercase hover:border-brand-red hover:text-brand-red"
          >
            Compare materials <ArrowRight className="size-3.5" />
          </Link>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {materialSwatches.map((m, i) => (
            <Link
              key={m.name}
              to="/materials"
              className="reveal group relative isolate flex aspect-[3/4] flex-col justify-end overflow-hidden rounded-sm p-6 text-white"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <img
                src={m.image}
                alt={`${m.name} slab`}
                loading="lazy"
                style={{ objectPosition: m.position }}
                className="absolute inset-0 -z-10 size-full scale-110 object-cover transition-transform duration-700 group-hover:scale-125"
              />
              <span className="absolute inset-0 -z-10 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
              <h3 className="font-heading text-3xl">{m.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/85">{m.text}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export function InstallPrep() {
  return (
    <section className="border-t border-stone-200 bg-white py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-3">
        <div className="reveal rounded-sm border border-stone-200 p-8 lg:col-span-2">
          <p className="eyebrow text-brand-red">Getting ready</p>
          <h2 className="mt-3 font-heading text-3xl text-navy-900 md:text-4xl">Before your template appointment</h2>
          <p className="mt-3 text-muted-foreground">A little prep keeps your project on our 7–10 day timeline.</p>
          <ul className="mt-6 grid gap-3">
            {templateChecklist.map((t, i) => (
              <li key={t} className="flex items-start gap-4 border-b border-stone-200 pb-3 last:border-0">
                <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-navy-100 text-xs font-semibold text-navy-800">
                  {i + 1}
                </span>
                <span className="pt-0.5 text-navy-900">{t}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-6">
          <div className="reveal rounded-sm bg-stone-50 p-8">
            <p className="eyebrow text-brand-red">Island seating</p>
            <h3 className="mt-3 font-heading text-2xl text-navy-900">Overhang guide</h3>
            <dl className="mt-5 grid gap-4">
              {overhangGuide.map((o) => (
                <div key={o.label} className="flex items-baseline justify-between gap-4 border-b border-stone-200 pb-3 last:border-0">
                  <dt className="text-sm text-muted-foreground">{o.label}</dt>
                  <dd className="text-right">
                    <span className="font-heading text-2xl text-navy-800">{o.value}</span>
                    <span className="block text-xs text-muted-foreground">{o.note}</span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="reveal flex flex-1 flex-col justify-center rounded-sm bg-navy-900 p-8 text-white">
            <ShieldCheck className="size-8 text-white" />
            <p className="mt-4 font-heading text-2xl">Backed by our warranty</p>
            <p className="mt-2 text-sm leading-relaxed text-white/75">
              Every countertop we fabricate and install includes a {warranty}.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
