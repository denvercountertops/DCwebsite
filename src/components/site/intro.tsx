import { ArrowRight } from "lucide-react"
import { Link } from "react-router"
import { stats } from "@/data/site"

export function Intro() {
  return (
    <section className="bg-stone-50">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 md:py-28 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
        <div className="reveal">
          <p className="eyebrow mb-4 flex items-center gap-3 text-brand-red">
            <span className="h-px w-8 bg-brand-red/60" /> Colorado's countertop specialists
          </p>
          <h2 className="font-heading text-4xl leading-[1.08] text-navy-900 md:text-5xl">
            The perfect countertop is just a call away.
          </h2>
        </div>
        <div className="reveal flex flex-col gap-5 text-base leading-relaxed text-muted-foreground md:text-lg">
          <p>
            We know that choosing the right stone and pattern for your countertops is immensely important — and
            stressful. With over 20 years of experience, we know how to get your project done while making the process
            an enjoyable and relaxed one.
          </p>
          <p>
            Our goal is simple: great service, professional installation, and competitive pricing — and to leave every
            customer completely satisfied with their new stonework.
          </p>
          <Link
            to="/about"
            className="mt-2 inline-flex items-center gap-1.5 self-start border-b border-navy-800 pb-0.5 text-[0.7rem] font-semibold tracking-[0.18em] text-navy-800 uppercase transition-colors hover:border-brand-red hover:text-brand-red"
          >
            Our story <ArrowRight className="size-3.5" />
          </Link>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 md:pb-28">
        <dl className="grid grid-cols-2 border-y border-stone-200 md:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="reveal flex flex-col gap-2 border-stone-200 px-2 py-8 text-center md:border-l md:first:border-l-0 [&:nth-child(2)]:border-l md:py-10"
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              <dt className="order-2 text-xs font-medium tracking-[0.14em] text-muted-foreground uppercase">{s.label}</dt>
              <dd className="order-1 font-heading text-5xl text-navy-800 md:text-6xl">{s.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
