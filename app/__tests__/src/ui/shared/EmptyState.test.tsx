import React from "react"
import { renderToString } from "react-dom/server"
import { describe, expect, it } from "vitest"
import { EmptyState } from "@ui/components/shared/EmptyState"

describe("EmptyState", () => {
  it("renderiza titulo y mensaje", () => {
    const html = renderToString(
      <EmptyState title="Sin resultados" message="No hay datos disponibles" icon=":(" />,
    )

    expect(html).toContain("Sin resultados")
    expect(html).toContain("No hay datos disponibles")
  })
})
