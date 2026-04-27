import React from "react"
import { renderToString } from "react-dom/server"
import { describe, expect, it } from "vitest"
import { SectionCardGrid } from "@ui/components/shared/SectionCardGrid"

describe("SectionCardGrid", () => {
  it("renderiza cabecera y contenido", () => {
    const html = renderToString(
      <SectionCardGrid title="Seccion" subtitle="Subtitulo" columns={2}>
        <article>Elemento</article>
      </SectionCardGrid>,
    )

    expect(html).toContain("Seccion")
    expect(html).toContain("Subtitulo")
    expect(html).toContain("Elemento")
  })
})
