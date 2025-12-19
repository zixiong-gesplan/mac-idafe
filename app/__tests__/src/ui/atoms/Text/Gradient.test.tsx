import React from "react"
import { renderToString } from "react-dom/server"
import { describe, expect, it } from "vitest"
import { GradientText } from "@ui/components/atoms/Text/Gradient"

describe("GradientText", () => {
  it("renderiza el texto con gradiente", () => {
    const html = renderToString(<GradientText text="gradiente" />)
    expect(html).toContain("gradiente")
  })
})
