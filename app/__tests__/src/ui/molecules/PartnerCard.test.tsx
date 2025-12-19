import React from "react"
import { renderToString } from "react-dom/server"
import { describe, expect, it } from "vitest"
import { PartnerCard } from "@ui/components/molecules/PartnerCard"

describe("PartnerCard", () => {
  it("muestra nombre y categoria", () => {
    const html = renderToString(
      <PartnerCard
        name="EcoPartner"
        description="Socio sostenible"
        logo="/logo.png"
        website="https://example.com"
        category="Alianzas"
      />,
    )
    expect(html).toContain("EcoPartner")
    expect(html).toContain("Alianzas")
  })
})
