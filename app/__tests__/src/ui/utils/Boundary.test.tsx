import React from "react"
import { renderToString } from "react-dom/server"
import { describe, expect, it } from "vitest"
import { Boundary } from "@ui/components/utils/Boundary"

describe("Boundary", () => {
  it("renderiza fallback cuando when es falso", () => {
    const html = renderToString(
      <Boundary when={false} fallback={<span>fallback</span>}>
        <span>child</span>
      </Boundary>,
    )
    expect(html).toContain("fallback")
    expect(html).not.toContain("child")
  })

  it("renderiza children cuando when es verdadero", () => {
    const html = renderToString(
      <Boundary when fallback={<span>fallback</span>}>
        <span>child</span>
      </Boundary>,
    )
    expect(html).toContain("child")
  })
})
