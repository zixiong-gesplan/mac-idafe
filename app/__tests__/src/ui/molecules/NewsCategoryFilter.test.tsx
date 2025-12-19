import React from "react"
import { renderToString } from "react-dom/server"
import { describe, expect, it } from "vitest"
import { NewsCategoryFilter } from "@ui/components/molecules/NewsCategoryFilter"

describe("NewsCategoryFilter", () => {
  it("muestra categorias", () => {
    const html = renderToString(
      <NewsCategoryFilter
        categories={[{ name: "Categoria", slug: "cat", color: "#000", count: 2 }]}
        activeCategory={null}
        onCategoryChange={() => {}}
      />,
    )
    expect(html).toContain("Categoria")
  })
})
