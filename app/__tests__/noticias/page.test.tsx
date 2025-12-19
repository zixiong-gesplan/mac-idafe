import React from "react"
import { renderToString } from "react-dom/server"
import { describe, expect, it } from "vitest"

import { Boundary } from "@ui/components/atoms/Boundary"
import { deriveCategories, deriveFilteredNews, derivePopularTags } from "@/app/noticias/page"

const sampleNews = [
  {
    id: "1",
    title: "Cambio climatico avanza",
    slug: "cambio-climatico-avanza",
    excerpt: "El cambio climatico se acelera en regiones costeras.",
    content: "contenido",
    author: { id: "a", name: "Ana", bio: "bio", email: "a@x.com" },
    category: "Medio Ambiente",
    categorySlug: "medio-ambiente",
    categoryColor: "#00aa00",
    tags: ["clima", "co2"],
    publishedAt: "2024-01-01T00:00:00.000Z",
    readingTimeMinutes: 4,
    featured: false,
    breaking: false,
  },
  {
    id: "2",
    title: "Tecnologia verde en alza",
    slug: "tecnologia-verde",
    excerpt: "Nuevas startups de energia limpia.",
    content: "contenido",
    author: { id: "b", name: "Beto", bio: "bio", email: "b@x.com" },
    category: "Tecnologia",
    categorySlug: "tecnologia",
    categoryColor: "#0000aa",
    tags: ["energia", "co2"],
    publishedAt: "2024-01-02T00:00:00.000Z",
    readingTimeMinutes: 3,
    featured: true,
    breaking: true,
  },
] as const

describe("deriveFilteredNews", () => {
  it("filtra por categoria y busqueda", () => {
    const filteredByCategory = deriveFilteredNews(sampleNews, {
      categorySlug: "tecnologia",
      searchQuery: "",
    })
    expect(filteredByCategory).toHaveLength(1)
    expect(filteredByCategory[0].slug).toBe("tecnologia-verde")

    const filteredBySearch = deriveFilteredNews(sampleNews, {
      categorySlug: null,
      searchQuery: "co2",
    })
    expect(filteredBySearch).toHaveLength(2)
  })
})

describe("deriveCategories", () => {
  it("agrega categorias con conteo", () => {
    const categories = deriveCategories(sampleNews)
    expect(categories).toEqual([
      {
        name: "Medio Ambiente",
        slug: "medio-ambiente",
        color: "#00aa00",
        count: 1,
      },
      {
        name: "Tecnologia",
        slug: "tecnologia",
        color: "#0000aa",
        count: 1,
      },
    ])
  })
})

describe("derivePopularTags", () => {
  it("devuelve tags unicos y limita cantidad", () => {
    const tags = derivePopularTags(sampleNews, 1)
    expect(tags).toEqual(["clima"])
  })
})

describe("Boundary", () => {
  it("muestra fallback cuando la condicion es falsa", () => {
    const html = renderToString(
      <Boundary when={false} fallback={<span>fallback</span>}>
        <span>child</span>
      </Boundary>,
    )
    expect(html).toContain("fallback")
    expect(html).not.toContain("child")
  })

  it("muestra children cuando la condicion es verdadera", () => {
    const html = renderToString(
      <Boundary when fallback={<span>fallback</span>}>
        <span>child</span>
      </Boundary>,
    )
    expect(html).toContain("child")
  })
})
