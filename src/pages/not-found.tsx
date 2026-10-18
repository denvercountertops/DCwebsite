import { Link } from "react-router"
import { Button } from "@/components/ui/button"
import { PageHero } from "@/components/site/hero"

export default function NotFoundPage() {
  return (
    <>
      <PageHero eyebrow="Not found" title="We couldn't find that page." image="/images/marble.jpg" />
      <section className="bg-white py-20">
        <div className="mx-auto flex max-w-7xl flex-col items-start gap-6 px-4 sm:px-6">
          <p className="text-lg text-muted-foreground">The page may have moved. Try one of these instead:</p>
          <div className="flex flex-wrap gap-3">
            <Button asChild className="h-12 rounded-sm bg-navy-800 px-7 text-xs font-semibold tracking-[0.18em] uppercase">
              <Link to="/">Home</Link>
            </Button>
            <Button asChild variant="outline" className="h-12 rounded-sm px-7 text-xs font-semibold tracking-[0.18em] uppercase">
              <Link to="/deals">Slab deals</Link>
            </Button>
            <Button asChild variant="outline" className="h-12 rounded-sm px-7 text-xs font-semibold tracking-[0.18em] uppercase">
              <Link to="/contact">Contact</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
