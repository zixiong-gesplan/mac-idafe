import React from "react"
import { renderToString } from "react-dom/server"
import { describe, expect, it } from "vitest"
import { NewsSearchBar } from "@ui/components/molecules/NewsSearchBar"

describe("NewsSearchBar", () => {
  it("renderiza placeholder", () => {
    const html = renderToString(<NewsSearchBar onSearch={() => {}} placeholder="Buscar" />)
    expect(html).toContain("Buscar")
  })
})
