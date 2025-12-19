import React from "react"
import { renderToString } from "react-dom/server"
import { describe, expect, it } from "vitest"
import { RippleEffect } from "@ui/components/atoms/RippleEffect"

describe("RippleEffect", () => {
  it("renderiza sus children", () => {
    const html = renderToString(
      <RippleEffect>
        <button>click</button>
      </RippleEffect>,
    )
    expect(html).toContain("click")
  })
})
