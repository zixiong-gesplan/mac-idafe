import React from "react"
import { renderToString } from "react-dom/server"
import { describe, expect, it } from "vitest"
import { InfoCard } from "@ui/components/shared/InfoCard"

describe("InfoCard", () => {
  it("renderiza titulo y CTA con enlace", () => {
    const html = renderToString(
      <InfoCard
        title="Recurso"
        description="Descripcion"
        href="/recursos/test"
        ctaLabel="Ver mas"
      />,
    )

    expect(html).toContain("Recurso")
    expect(html).toContain("Descripcion")
    expect(html).toContain("Ver mas")
  })
})
