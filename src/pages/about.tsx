import { BadgeCheck } from "lucide-react"
import { CtaBand, PageHero } from "@/components/site/hero"
import { Process, WhyUs } from "@/components/site/process"
import { Reviews } from "@/components/site/reviews"
import { aboutStory, stats } from "@/data/site"

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Colorado's family-owned stone shop since 2002."
        intro="Beautiful custom fabricated and installed countertops — handled by our own team from the first measurement to the final installation."
        image="/images/gallery/kitchen-3.webp"
        position="50% 60%"
      />

      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20">
          <div className="reveal">
            <p className="eyebrow flex items-center gap-3 text-brand-red">
              <span className="h-px w-8 bg-brand-red/60" /> Our story
            </p>
            <h2 className="mt-4 font-heading text-4xl leading-[1.08] text-navy-900 md:text-5xl">
              Exceptional stone. Outstanding service.
            </h2>
            <div className="mt-6 flex flex-col gap-5 text-lg leading-relaxed text-muted-foreground">
              {aboutStory.map((p) => (
                <p key={p.slice(0, 20)}>{p}</p>
              ))}
            </div>
          </div>
          <div className="reveal flex flex-col gap-6">
            <div className="aspect-[4/3] overflow-hidden rounded-sm">
              <img src="/images/gallery/kitchen-5.webp" alt="White kitchen with quartz island installed by Denver Countertops" loading="lazy" className="size-full object-cover" />
            </div>
            <div className="rounded-sm border border-stone-200 bg-stone-50 p-8">
              <p className="flex items-center gap-2 font-heading text-2xl text-navy-900">
                <BadgeCheck className="size-6 text-brand-red" /> Satisfaction guaranteed
              </p>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Our mission is for our customers to be 100% satisfied with their countertops and their overall experience
                with us. Don't take our word for it — come into our showroom or give us a call to see how we can make your
                countertop dreams a reality.
              </p>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-20 max-w-7xl px-4 sm:px-6">
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

      <Process />
      <WhyUs />
      <Reviews />
      <CtaBand />
    </>
  )
}
