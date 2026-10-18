import { createContext, useContext, useState, type ReactNode } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { QuoteForm, type QuotePreset } from "./quote-form"

type QuoteCtx = { openQuote: (preset?: QuotePreset & { title?: string }) => void }

const Ctx = createContext<QuoteCtx>({ openQuote: () => {} })

export const useQuote = () => useContext(Ctx)

export function QuoteProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false)
  const [preset, setPreset] = useState<(QuotePreset & { title?: string }) | undefined>()

  const openQuote: QuoteCtx["openQuote"] = (p) => {
    setPreset(p)
    setOpen(true)
  }

  return (
    <Ctx.Provider value={{ openQuote }}>
      {children}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-h-[92vh] overflow-y-auto rounded-md p-6 sm:max-w-lg sm:p-8">
          <DialogHeader>
            <p className="eyebrow text-brand-red">Free estimate</p>
            <DialogTitle className="font-heading text-3xl font-normal text-navy-900">
              {preset?.title ?? "Get my free quote"}
            </DialogTitle>
            <DialogDescription>
              Tell us a little about your project and our team will reach out — usually the same business day.
            </DialogDescription>
          </DialogHeader>
          <QuoteForm key={JSON.stringify(preset)} preset={preset} />
        </DialogContent>
      </Dialog>
    </Ctx.Provider>
  )
}
