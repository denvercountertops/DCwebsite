import { StrictMode } from "react"
import { renderToString } from "react-dom/server"
import { StaticRouter } from "react-router"
import App from "./App"

export { faqs } from "./data/faqs"
export { notFoundMeta, pageMeta } from "./data/seo"

export function render(url: string) {
  return renderToString(
    <StrictMode>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </StrictMode>
  )
}
