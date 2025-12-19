import React from "react"
import { renderToString } from "react-dom/server"
import { describe, expect, it } from "vitest"
import { SkeletonCard, SkeletonGrid } from "@ui/components/atoms/SkeletonCard"

describe("Skeletons", () => {
  it("renderiza SkeletonCard con texto accesible", () => {
    const html = renderToString(<SkeletonCard />)
    expect(html).toContain("Cargando artículo")
  })

  it("SkeletonGrid renderiza el numero de items solicitado", () => {
    const html = renderToString(<SkeletonGrid count={2} />)
    const matches = html.match(/Cargando artículo/g) || []
    expect(matches.length).toBe(2)
  })
})
