import React from "react"
import { renderToString } from "react-dom/server"
import { describe, expect, it } from "vitest"
import { AnimatedText } from "@ui/components/atoms/Text/Animated"

describe("AnimatedText", () => {
  it("muestra el texto", () => {
    const html = renderToString(<AnimatedText>texto animado</AnimatedText>)
    expect(html).toContain("texto animado")
  })
})
