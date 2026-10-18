import { ArrowRight, Check } from "lucide-react"
import { Link } from "react-router"
import { Button } from "@/components/ui/button"
import { services } from "@/data/site"
import { cn } from "@/lib/utils"
import { useQuote } from "./quote-context"

const projectFor = (id: string) =>
  ({ countertops: "Kitchen countertops", "porcelain-walls": "Porcelain walls", repairs: "Repair", remodeling: "Full kitchen or bath remodel" })[id]

export function ServicesDetail() {
  const { openQuote } = useQuote()

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-20 px-4 sm:px-6 md:gap-28">
        {services.map((s, i) => (
          <article key={s.id} id={s.id} className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div className={cn("reveal relative aspect-[4/3] overflow-hidden rounded-sm", i % 2 === 1 && "lg:order-2")}>
              <img src={s.image} alt="" loading="lazy" className="size-full object-cover" />
              <span className="absolute bottom-0 left-0 bg-white px-5 py-3 font-heading text-3xl text-brand-red">0{i + 1}</span>
            </div>
            <div className="reveal">
              {s.id === "countertops" ? (
                <p className="eyebrow text-brand-red">Our specialty</p>
              ) : (
                s.subtitle && <p className="eyebrow text-navy-600">{s.subtitle}</p>
              )}
              <h2 className="mt-2 font-heading text-4xl leading-tight text-navy-900 md:text-5xl">{s.title}</h2>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{s.description}</p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2 text-navy-900">
                    <Check className="size-4 text-brand-red" /> {b}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                {s.id === "countertops" ? (
                  <Button asChild className="h-12 rounded-sm bg-brand-red px-7 text-xs font-semibold tracking-[0.18em] uppercase hover:bg-brand-red-dark">
                    <Link to="/countertops">
                      Explore our countertops <ArrowRight />
                    </Link>
                  </Button>
                ) : (
                  <Button
                    onClick={() => openQuote({ project: projectFor(s.id), title: s.title })}
                    className="h-12 rounded-sm bg-navy-800 px-7 text-xs font-semibold tracking-[0.18em] uppercase hover:bg-navy-600"
                  >
                    Request an estimate
                  </Button>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
