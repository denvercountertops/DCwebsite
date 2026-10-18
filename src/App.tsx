import { useLayoutEffect } from "react"
import { Route, Routes, useLocation } from "react-router"
import { useReveal } from "@/hooks/use-reveal"
import { Footer, MobileCtaBar } from "@/components/site/contact"
import { Header } from "@/components/site/header"
import { QuoteProvider } from "@/components/site/quote-context"
import { metaFor } from "@/data/seo"
import AboutPage from "@/pages/about"
import ContactPage from "@/pages/contact"
import CountertopsPage from "@/pages/countertops"
import DealsPage from "@/pages/deals"
import FaqPage from "@/pages/faq"
import HomePage from "@/pages/home"
import MaterialsPage from "@/pages/materials"
import NotFoundPage from "@/pages/not-found"
import OurWorkPage from "@/pages/our-work"
import PricingPage from "@/pages/pricing"
import ServicesPage from "@/pages/services"

function ScrollManager() {
  const { pathname, hash } = useLocation()
  useLayoutEffect(() => {
    document.title = metaFor(pathname).title
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: "instant" })
    } else {
      window.scrollTo({ top: 0, behavior: "instant" })
    }
  }, [pathname, hash])
  useReveal(pathname)
  return null
}

export default function App() {
  return (
    <QuoteProvider>
      <ScrollManager />
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:bg-white focus:p-3">
        Skip to content
      </a>
      <Header />
      <main id="main" className="pb-14 sm:pb-0">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/countertops" element={<CountertopsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/deals" element={<DealsPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/our-work" element={<OurWorkPage />} />
          <Route path="/materials" element={<MaterialsPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
      <MobileCtaBar />
    </QuoteProvider>
  )
}
