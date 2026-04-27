import React from "react"
import { renderToString } from "react-dom/server"
import { describe, expect, it } from "vitest"
import { PostListCard } from "@ui/components/shared/PostListCard"

describe("PostListCard", () => {
  it("renderiza titulo y descripcion", () => {
    const html = renderToString(
      <PostListCard
        slug="slug-prueba"
        title="Titulo noticia"
        description="Descripcion noticia"
        date="2026-04-25"
      />,
    )

    expect(html).toContain("Titulo noticia")
    expect(html).toContain("Descripcion noticia")
    expect(html).toContain("Leer noticia")
  })
})
