import React from "react"
import { renderToString } from "react-dom/server"
import { describe, expect, it } from "vitest"
import { PageHero } from "@ui/components/shared/PageHero"

describe("PageHero", () => {
  it("renderiza titulo y descripcion", () => {
    const html = renderToString(
      <PageHero
        title="Titulo de prueba"
        description="Descripcion de prueba"
        eyebrow="Etiqueta"
      />,
    )

    expect(html).toContain("Titulo de prueba")
    expect(html).toContain("Descripcion de prueba")
    expect(html).toContain("Etiqueta")
  })
})
