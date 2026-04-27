import React from "react"
import { renderToString } from "react-dom/server"
import { describe, expect, it, vi } from "vitest"
import { FormShell } from "@ui/components/shared/FormShell"

describe("FormShell", () => {
  it("renderiza encabezado y children", () => {
    const onBack = vi.fn()
    const html = renderToString(
      <FormShell title="Formulario" description="Descripcion" onBack={onBack}>
        <form>
          <input name="nombre" />
        </form>
      </FormShell>,
    )

    expect(html).toContain("Formulario")
    expect(html).toContain("Descripcion")
    expect(html).toContain("Volver")
    expect(html).toContain("input")
  })
})
