import { describe, it, expect } from "vitest"
import { NewsRepositoryJSON } from "@/app/src/infrastructure/repositories/NewsRepositoryJSON"
import { News } from "@/app/src/domain/entities/News"

const baseAuthor = {
  id: "author-1",
  name: "Reporter One",
  bio: "Reporter bio",
  email: "reporter@example.com",
}

const createNews = (id: string, publishedAt: Date): News =>
  News.create({
    id,
    title: `News ${id}`,
    slug: `news-${id}`,
    excerpt: `Excerpt for news ${id} with enough detail`,
    content: `Content for news ${id}`,
    author: baseAuthor,
    category: "Tech",
    categorySlug: "tech",
    categoryColor: "#000000",
    tags: ["tech"],
    publishedAt,
    readingTimeMinutes: 4,
    featured: false,
    breaking: false,
  })

describe("NewsRepositoryJSON", () => {
  it("sorts recent news without mutating the source collection", async () => {
    const repository = new NewsRepositoryJSON()
    const newest = createNews("3", new Date("2024-03-03T00:00:00Z"))
    const middle = createNews("2", new Date("2024-02-02T00:00:00Z"))
    const oldest = createNews("1", new Date("2024-01-01T00:00:00Z"))

    ;(repository as any).news = [middle, newest, oldest]
    const originalOrder = ((repository as any).news as News[]).map((n) => n.id)

    const result = await repository.findRecent(3)

    expect(result.map((n) => n.id)).toEqual(["3", "2", "1"])
    expect(((repository as any).news as News[]).map((n) => n.id)).toEqual(originalOrder)
  })

  it("returns an empty array when there are no news items", async () => {
    const repository = new NewsRepositoryJSON()
    ;(repository as any).news = []

    const result = await repository.findRecent(5)

    expect(result).toEqual([])
    expect((repository as any).news).toEqual([])
  })

  it("keeps stable ordering for items with duplicate dates", async () => {
    const repository = new NewsRepositoryJSON()
    const duplicateDate = new Date("2024-01-15T00:00:00Z")
    const firstDuplicate = createNews("1", duplicateDate)
    const secondDuplicate = createNews("2", duplicateDate)
    const newest = createNews("3", new Date("2024-02-01T00:00:00Z"))

    ;(repository as any).news = [firstDuplicate, secondDuplicate, newest]

    const result = await repository.findRecent(3)

    expect(result.map((n) => n.id)).toEqual(["3", "1", "2"])
  })
})
