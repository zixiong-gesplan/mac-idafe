import React from "react"
import { renderToString } from "react-dom/server"
import { describe, expect, it } from "vitest"
import { DarkModeToggle } from "@ui/components/atoms/DarkModeToggle"

describe("DarkModeToggle", () => {
  it("se renderiza sin lanzar errores en SSR", () => {
    expect(() => renderToString(<DarkModeToggle />)).not.toThrow()
  })
})
