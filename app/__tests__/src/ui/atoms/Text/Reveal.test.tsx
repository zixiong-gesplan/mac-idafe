import React from "react"
import { renderToString } from "react-dom/server"
import { describe, expect, it } from "vitest"
import { TextReveal } from "@ui/components/atoms/Text/Reveal"

describe("TextReveal", () => {
  it("divide el texto en elementos revelables", () => {
    const html = renderToString(<TextReveal text="uno dos" revealType="words" />)
    expect(html).toContain("uno")
    expect(html).toContain("dos")
  })
})
