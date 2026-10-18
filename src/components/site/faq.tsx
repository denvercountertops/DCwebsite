import { useMemo, useState } from "react"
import { Search } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { business } from "@/data/site"
import { faqs } from "@/data/faqs"
import { cn } from "@/lib/utils"
import { SectionHeading } from "./section-heading"

const categories = ["All", ...faqs.map((f) => f.category)]

export function Faq({ initialCategory = "All", className }: { initialCategory?: string; className?: string }) {
  const [category, setCategory] = useState(initialCategory)
  const [query, setQuery] = useState("")

  const groups = useMemo(() => {
    const q = query.trim().toLowerCase()
    return faqs
      .filter((g) => category === "All" || g.category === category)
      .map((g) => ({
        ...g,
        items: g.items.filter((it) => !q || it.q.toLowerCase().includes(q) || it.a.toLowerCase().includes(q)),
      }))
      .filter((g) => g.items.length > 0)
  }, [category, query])

  const count = groups.reduce((n, g) => n + g.items.length, 0)

  return (
    <section id="faq" className={cn("bg-stone-50 py-20 md:py-28", className)}>
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading eyebrow="FAQ" title="Questions? We've got answers." align="left">
            Search or browse answers about materials, sinks, edges, pricing, and our process. Still wondering? Call{" "}
            <a href={business.phoneHref} className="font-semibold text-navy-800 underline underline-offset-4">
              {business.phone}
            </a>
            .
          </SectionHeading>

          <div className="reveal mt-8 lg:hidden">
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger aria-label="Topic" className="h-12 w-full rounded-sm bg-white data-[size=default]:h-12">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {categories.map((c) => (
                  <SelectItem key={c} value={c}>
                    {c === "All" ? "All topics" : c}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <ul className="reveal mt-8 hidden flex-col border-l border-stone-200 lg:flex">
            {categories.map((c) => (
              <li key={c}>
                <button
                  onClick={() => setCategory(c)}
                  aria-pressed={category === c}
                  className={cn(
                    "-ml-px w-full border-l-2 py-2 pl-4 text-left text-sm transition-colors",
                    category === c
                      ? "border-brand-red font-semibold text-navy-900"
                      : "border-transparent text-muted-foreground hover:text-navy-800"
                  )}
                >
                  {c === "All" ? "All topics" : c}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="reveal">
          <div className="relative">
            <Search className="pointer-events-none absolute top-1/2 left-4 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search questions — e.g. sealing, seams, farmhouse sink"
              aria-label="Search FAQ"
              className="h-12 rounded-sm bg-white pl-11"
            />
          </div>
          <p className="mt-3 text-sm text-muted-foreground" aria-live="polite">
            {count} {count === 1 ? "question" : "questions"}
          </p>

          {count === 0 ? (
            <p className="mt-6 rounded-sm border border-dashed border-stone-200 bg-white p-8 text-center text-muted-foreground">
              No matches. Give us a call at{" "}
              <a href={business.phoneHref} className="font-semibold text-navy-800 underline">{business.phone}</a> — we're happy to help.
            </p>
          ) : (
            <div className="mt-4 flex flex-col gap-8">
              {groups.map((g) => (
                <div key={g.category}>
                  {groups.length > 1 && <h3 className="eyebrow mb-3 text-brand-red">{g.category}</h3>}
                  <Accordion type="single" collapsible className="rounded-sm border border-stone-200 bg-white">
                    {g.items.map((it) => (
                      <AccordionItem key={it.q} value={it.q} className="border-stone-200 px-6">
                        <AccordionTrigger className="py-5 text-left text-base font-semibold text-navy-900 hover:no-underline">
                          {it.q}
                        </AccordionTrigger>
                        <AccordionContent className="pb-5 text-base leading-relaxed text-muted-foreground">{it.a}</AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
