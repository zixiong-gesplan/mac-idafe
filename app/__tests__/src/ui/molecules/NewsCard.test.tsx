import React from "react"
import { renderToString } from "react-dom/server"
import { describe, expect, it } from "vitest"
import { NewsCard } from "@ui/components/molecules/NewsCard"

const sampleNews = {
  id: "1",
  title: "Titulo de noticia",
  slug: "titulo-noticia",
  excerpt: "Extracto breve de la noticia",
  category: "Medio Ambiente",
  categoryColor: "#00aa00",
  author: { name: "Ana", avatar: "" },
  publishedAt: new Date().toISOString(),
  readingTimeMinutes: 3,
  featured: false,
  breaking: false,
}

describe("NewsCard", () => {
  it("renderiza titulo y extracto", () => {
    const html = renderToString(<NewsCard news={sampleNews} />)
    expect(html).toContain("Titulo de noticia")
    expect(html).toContain("Extracto breve")
  })
})
