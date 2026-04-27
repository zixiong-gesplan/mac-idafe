import React from "react"
import { renderToString } from "react-dom/server"
import { describe, expect, it, vi } from "vitest"
import { ErrorState } from "@ui/components/shared/ErrorState"

describe("ErrorState", () => {
  it("renderiza titulo, mensaje y boton de reintento", () => {
    const onRetry = vi.fn()
    const html = renderToString(
      <ErrorState
        title="Error de carga"
        message="No fue posible obtener la informacion"
        onRetry={onRetry}
      />,
    )

    expect(html).toContain("Error de carga")
    expect(html).toContain("No fue posible obtener la informacion")
    expect(html).toContain("Reintentar")
  })
})
