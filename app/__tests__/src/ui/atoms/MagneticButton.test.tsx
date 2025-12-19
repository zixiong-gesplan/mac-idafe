import React from "react"
import { renderToString } from "react-dom/server"
import { describe, expect, it } from "vitest"
import { MagneticButton } from "@ui/components/atoms/MagneticButton"

describe("MagneticButton", () => {
  it("incluye su contenido", () => {
    const html = renderToString(<MagneticButton>contenido</MagneticButton>)
    expect(html).toContain("contenido")
  })
})
