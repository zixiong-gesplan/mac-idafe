import React from "react"
import { renderToString } from "react-dom/server"
import { describe, expect, it } from "vitest"
import { ValueCard } from "@ui/components/molecules/ValueCard"

describe("ValueCard", () => {
  it("muestra titulo y descripcion", () => {
    const html = renderToString(<ValueCard icon={<span>*</span>} title="Valor" description="Descripcion" index={0} />)
    expect(html).toContain("Valor")
    expect(html).toContain("Descripcion")
  })
})
