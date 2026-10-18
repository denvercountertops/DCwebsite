import { processSteps, whyUs } from "@/data/site"
import { SectionHeading } from "./section-heading"

export function Process() {
  return (
    <section id="process" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading eyebrow="Our process" title="4 easy steps to a more beautiful home." align="left">
              Replacing your countertops can feel daunting — we get it. That's why we've streamlined everything, with
              one of the quickest turnarounds in the area.
            </SectionHeading>
            <div className="reveal mt-10 hidden aspect-[4/3] overflow-hidden rounded-sm lg:block">
              <img src="/images/gallery/kitchen-4.webp" alt="" loading="lazy" className="size-full object-cover" />
            </div>
          </div>

          <ol className="relative grid gap-4">
            {processSteps.map((s, i) => (
              <li
                key={s.title}
                className="reveal group grid grid-cols-[auto_1fr] gap-6 rounded-sm border border-stone-200 p-6 transition-colors hover:border-navy-800/40 hover:bg-stone-50 sm:p-8"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <span className="font-heading text-5xl leading-none text-brand-red/90 sm:text-6xl">0{i + 1}</span>
                <div>
                  <p className="eyebrow text-navy-600">Step {i + 1}</p>
                  <h3 className="mt-1 font-heading text-2xl text-navy-900 sm:text-3xl">{s.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}

export function WhyUs() {
  return (
    <section className="relative isolate overflow-hidden py-20 md:py-28">
      <img src="/images/marble.jpg" alt="" loading="lazy" className="absolute inset-0 -z-20 size-full object-cover" />
      <div className="absolute inset-0 -z-10 bg-white/70" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading eyebrow="Why Denver Countertops" title="Satisfaction guaranteed." />
        <div className="mt-14 grid gap-px overflow-hidden rounded-sm border border-white/60 bg-stone-200/70 shadow-xl sm:grid-cols-2 lg:grid-cols-4">
          {whyUs.map((w, i) => (
            <div
              key={w.title}
              className="reveal flex flex-col gap-3 bg-white/90 p-8 backdrop-blur"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <span className="h-0.5 w-10 bg-brand-red" />
              <h3 className="font-heading text-2xl text-navy-900">{w.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{w.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
