import { Check, Droplets, Home } from "lucide-react"
import { Link } from "react-router"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { materials } from "@/data/site"
import { SectionHeading } from "./section-heading"

export function Materials() {
  return (
    <section id="materials" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow="Material guide" title="Granite, quartz, or something else?">
          Every stone has its strengths. Compare them side by side — then come see the real slabs in our showroom.
        </SectionHeading>

        <Tabs defaultValue={materials[0].name} className="reveal mt-12 gap-8">
          <TabsList className="mx-auto flex h-auto w-full max-w-3xl flex-wrap justify-center gap-1 rounded-sm bg-stone-100 p-1">
            {materials.map((m) => (
              <TabsTrigger
                key={m.name}
                value={m.name}
                className="h-10 flex-none rounded-[3px] px-4 text-xs font-semibold tracking-wider text-navy-900 uppercase data-[state=active]:bg-navy-800 data-[state=active]:text-white sm:px-5"
              >
                {m.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {materials.map((m) => (
            <TabsContent key={m.name} value={m.name} className="animate-in fade-in slide-in-from-bottom-2 duration-500">
              <div className="grid gap-10 rounded-sm border border-stone-200 p-6 sm:p-10 md:grid-cols-[1.3fr_1fr]">
                <div>
                  <h3 className="font-heading text-4xl text-navy-900">{m.name}</h3>
                  <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{m.summary}</p>
                  <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                    {m.good.map((g) => (
                      <li key={g} className="flex items-start gap-2 text-sm text-navy-900">
                        <Check className="mt-0.5 size-4 shrink-0 text-brand-red" /> {g}
                      </li>
                    ))}
                  </ul>
                </div>
                <dl className="grid content-start gap-6 border-stone-200 md:border-l md:pl-10">
                  <div>
                    <dt className="eyebrow flex items-center gap-2 text-navy-600">
                      <Home className="size-4" /> Best for
                    </dt>
                    <dd className="mt-2 text-navy-900">{m.bestFor}</dd>
                  </div>
                  <div>
                    <dt className="eyebrow flex items-center gap-2 text-navy-600">
                      <Droplets className="size-4" /> Care
                    </dt>
                    <dd className="mt-2 text-navy-900">{m.care}</dd>
                  </div>
                  <Link
                    to="/contact"
                    className="mt-2 inline-flex items-center justify-center rounded-sm border border-navy-800 px-5 py-3 text-[0.7rem] font-semibold tracking-[0.18em] text-navy-800 uppercase transition-colors hover:bg-navy-800 hover:text-white"
                  >
                    See {m.name.toLowerCase()} in our showroom
                  </Link>
                </dl>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
