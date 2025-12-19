import React from "react"
import { renderToString } from "react-dom/server"
import { describe, expect, it } from "vitest"
import { ParallaxImage } from "@ui/components/molecules/ParallaxImage"

describe("ParallaxImage", () => {
  it("renderiza con alt", () => {
    const html = renderToString(<ParallaxImage src="/placeholder.svg" alt="imagen" />)
    expect(html.toLowerCase()).toContain("imagen")
  })
})
