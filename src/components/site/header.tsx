import { useEffect, useState } from "react"
import { ChevronDown, Menu, Phone } from "lucide-react"
import { Link, NavLink, useLocation } from "react-router"
import { Button } from "@/components/ui/button"
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { business, navLinks, trustPoints, type NavItem } from "@/data/site"
import { cn } from "@/lib/utils"
import { useQuote } from "./quote-context"

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { openQuote } = useQuote()
  const { pathname } = useLocation()

  const matches = (to: string) => (to === "/" ? pathname === "/" : pathname === to || pathname.startsWith(`${to}/`))
  const isActive = (l: NavItem) => matches(l.to) || !!l.children?.some((c) => matches(c.to))

  useEffect(() => {
    if (document.activeElement instanceof HTMLElement) document.activeElement.blur()
  }, [pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-40">
      <div
        className={cn(
          "hidden overflow-hidden bg-navy-950 text-white/80 transition-all duration-300 lg:block",
          scrolled ? "max-h-0" : "max-h-10"
        )}
      >
        <div className="mx-auto flex h-10 max-w-7xl items-center justify-between px-6 text-[0.72rem] tracking-wide">
          <ul className="flex items-center gap-6">
            {trustPoints.map((t) => (
              <li key={t} className="flex items-center gap-2">
                <span className="size-1 rounded-full bg-brand-red" />
                {t}
              </li>
            ))}
          </ul>
          <a href={business.phoneHref} className="flex items-center gap-2 font-semibold text-white hover:text-white/80">
            <Phone className="size-3.5" /> {business.phone}
          </a>
        </div>
      </div>

      <div
        className={cn(
          "transition-colors duration-300",
          scrolled
            ? "bg-white/95 shadow-[0_1px_0_rgba(0,0,0,0.06),0_8px_24px_-12px_rgba(11,44,90,0.25)] backdrop-blur"
            : "border-b border-white/15 bg-black/20 backdrop-blur-md"
        )}
      >
        <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-6 px-4 sm:px-6">
          <Link to="/" className="shrink-0" aria-label="Denver Countertops home">
            <img
              src="/images/logo.png"
              alt="Denver Countertops"
              width={499}
              height={226}
              className={cn("h-11 w-auto transition-[filter] duration-300 sm:h-12", !scrolled && "brightness-0 invert")}
            />
          </Link>

          <nav aria-label="Main" className="hidden xl:block">
            <ul className="flex items-center gap-6">
              {navLinks.map((l) => {
                const active = isActive(l)
                const linkCls = cn(
                  "relative flex items-center gap-1 py-2 text-[0.72rem] font-semibold tracking-[0.14em] uppercase transition-colors after:absolute after:bottom-0.5 after:left-0 after:h-0.5 after:w-0 after:transition-all hover:after:w-full",
                  scrolled ? "text-navy-900 after:bg-brand-red hover:text-navy-600" : "text-white after:bg-white",
                  active && "after:w-full"
                )
                if (!l.children) {
                  return (
                    <li key={l.to}>
                      <Link to={l.to} className={linkCls} aria-current={active ? "page" : undefined}>
                        {l.label}
                      </Link>
                    </li>
                  )
                }
                return (
                  <li key={l.to} className="group relative">
                    <Link to={l.to} className={linkCls} aria-haspopup="true">
                      {l.label}
                      <ChevronDown className="size-3.5 transition-transform group-hover:rotate-180 group-focus-within:rotate-180" />
                    </Link>
                    <div className="invisible absolute top-full left-1/2 z-50 w-72 -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                      <ul className="overflow-hidden rounded-sm border border-stone-200 bg-white p-2 shadow-[0_24px_48px_-16px_rgba(22,24,25,0.35)]">
                        {l.children.map((c) => (
                          <li key={c.to + c.label}>
                            <Link
                              to={c.to}
                              className={cn(
                                "block rounded-[3px] px-4 py-3 transition-colors hover:bg-stone-100",
                                pathname === c.to && "bg-stone-100"
                              )}
                            >
                              <span className="block text-sm font-semibold text-navy-900">{c.label}</span>
                              {c.note && <span className="mt-0.5 block text-xs text-muted-foreground">{c.note}</span>}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                )
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <Button
              onClick={() => openQuote()}
              className={cn(
                "hidden h-10 rounded-sm px-5 text-[0.7rem] font-semibold tracking-[0.18em] uppercase sm:inline-flex",
                scrolled
                  ? "bg-brand-red text-white hover:bg-brand-red-dark"
                  : "border border-white bg-white text-navy-900 hover:bg-white/85"
              )}
            >
              Get my free quote
            </Button>

            <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon-lg"
                  aria-label="Open menu"
                  className={cn("xl:hidden", scrolled ? "text-navy-900" : "text-white hover:bg-white/10 hover:text-white")}
                >
                  <Menu className="size-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[86vw] max-w-sm bg-navy-950 p-0 text-white">
                <SheetTitle className="sr-only">Menu</SheetTitle>
                <SheetDescription className="sr-only">Site navigation</SheetDescription>
                <div className="flex h-full flex-col overflow-y-auto px-7 pt-14 pb-8">
                  <img src="/images/logo.png" alt="" className="mb-6 h-12 w-auto self-start brightness-0 invert" />
                  <ul className="flex flex-col">
                    {[{ label: "Home", to: "/" } as NavItem, ...navLinks].map((l) => (
                      <li key={l.to} className="border-b border-white/10">
                        {l.children ? (
                          <>
                            <p className={cn("pt-3 font-heading text-2xl", isActive(l) && "text-brand-red")}>{l.label}</p>
                            <ul className="pt-1 pb-3">
                              {l.children.map((c) => (
                                <li key={c.to + c.label}>
                                  <NavLink
                                    to={c.to}
                                    end
                                    onClick={() => setMenuOpen(false)}
                                    className={({ isActive: a }) =>
                                      cn("block py-1.5 pl-4 text-base text-white/80", a && "text-brand-red")
                                    }
                                  >
                                    {c.label}
                                  </NavLink>
                                </li>
                              ))}
                            </ul>
                          </>
                        ) : (
                          <NavLink
                            to={l.to}
                            end
                            onClick={() => setMenuOpen(false)}
                            className={({ isActive: a }) => cn("block py-3 font-heading text-2xl", a && "text-brand-red")}
                          >
                            {l.label}
                          </NavLink>
                        )}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto flex flex-col gap-3 pt-8">
                    <SheetClose asChild>
                      <Button
                        onClick={() => openQuote()}
                        className="h-12 rounded-sm bg-brand-red text-xs font-semibold tracking-[0.2em] uppercase hover:bg-brand-red-dark"
                      >
                        Get my free quote
                      </Button>
                    </SheetClose>
                    <a
                      href={business.phoneHref}
                      className="flex h-12 items-center justify-center gap-2 rounded-sm border border-white/25 text-sm font-semibold"
                    >
                      <Phone className="size-4" /> {business.phone}
                    </a>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
