import React from "react"
import { renderToString } from "react-dom/server"
import { describe, expect, it } from "vitest"
import { PostCard } from "@ui/components/molecules/PostCard"
import { PostDTO } from "@/app/src/ui/adapters/PostAdapter"

const post: PostDTO = {
  id: "p1",
  title: "Post titulo",
  slug: "post-titulo",
  excerpt: "Extracto de post",
  content: "contenido",
  author: { name: "Autor", bio: "bio", avatar: "", },
  categories: [{ name: "Cat", slug: "cat", color: "#111" }],
  tags: ["tag"],
  publishedAt: new Date().toISOString(),
  readingTimeMinutes: 5,
  featured: false,
}

describe("PostCard", () => {
  it("renderiza titulo y excerpt", () => {
    const html = renderToString(<PostCard post={post} />)
    expect(html).toContain("Post titulo")
    expect(html).toContain("Extracto de post")
  })
})
