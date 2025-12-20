import { describe, it, expect } from "vitest"
import type { NewsRepository, NewsFilters } from "@/app/src/application/ports/NewsRepository"
import { CreateNews } from "@/app/src/application/use-cases/CreateNews"
import { UpdateNews } from "@/app/src/application/use-cases/UpdateNews"
import { DeleteNews } from "@/app/src/application/use-cases/DeleteNews"
import { News, type NewsProps } from "@/app/src/domain/entities/News"

const baseAuthor = {
  id: "author-1",
  name: "Reporter One",
  bio: "Reporter bio",
  email: "reporter@example.com",
}

class InMemoryNewsRepository implements NewsRepository {
  constructor(private items: News[] = []) {}

  async findAll(filters?: NewsFilters): Promise<News[]> {
    let results = [...this.items]

    if (filters?.category) {
      results = results.filter((n) => n.categorySlug === filters.category)
    }
    if (filters?.featured !== undefined) {
      results = results.filter((n) => n.isFeatured === filters.featured)
    }
    if (filters?.breaking !== undefined) {
      results = results.filter((n) => n.isBreaking === filters.breaking)
    }
    if (filters?.search) {
      results = results.filter((n) => n.matchesSearch(filters.search!))
    }

    return results
  }

  async findById(id: string): Promise<News | null> {
    return this.items.find((n) => n.id === id) ?? null
  }

  async findBySlug(slug: string): Promise<News | null> {
    return this.items.find((n) => n.slug === slug) ?? null
  }

  async findFeatured(limit = 4): Promise<News[]> {
    return this.items.filter((n) => n.isFeatured).slice(0, limit)
  }

  async findBreaking(): Promise<News[]> {
    return this.items.filter((n) => n.isBreaking)
  }

  async findRecent(limit = 6): Promise<News[]> {
    return [...this.items].sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime()).slice(0, limit)
  }

  async create(news: News): Promise<News> {
    this.items.push(news)
    return news
  }

  async update(news: News): Promise<News> {
    const index = this.items.findIndex((n) => n.id === news.id)
    if (index === -1) throw new Error("Not found")
    this.items[index] = news
    return news
  }

  async delete(id: string): Promise<void> {
    this.items = this.items.filter((n) => n.id !== id)
  }
}

const createEntity = (overrides?: Partial<NewsProps>) =>
  News.create({
    id: "news-1",
    title: "Old title",
    slug: "old-title",
    excerpt: "Some longer excerpt for a news piece",
    content: "Full content of the article",
    author: baseAuthor,
    category: "Tech",
    categorySlug: "tech",
    categoryColor: "#000",
    tags: ["tech"],
    publishedAt: new Date("2024-01-01T00:00:00Z"),
    readingTimeMinutes: 4,
    featured: false,
    breaking: false,
    ...(overrides as any),
  })

describe("News use cases", () => {
  it("creates news with generated slugs and ids", async () => {
    const repository = new InMemoryNewsRepository()
    const useCase = new CreateNews(repository)

    const created = await useCase.execute({
      title: "Hello World News",
      excerpt: "This is an excerpt for the hello world news with enough length",
      content: "Long content for the hello world news article",
      author: baseAuthor,
      category: "Tech News",
      categoryColor: "#123456",
      tags: ["hello", "world"],
      publishedAt: new Date("2024-02-02T00:00:00Z"),
      readingTimeMinutes: 5,
      featured: true,
      breaking: false,
    })

    expect(created.slug).toBe("hello-world-news")
    expect(created.categorySlug).toBe("tech-news")
    expect(created.id).toBeDefined()
    const stored = await repository.findAll()
    expect(stored).toHaveLength(1)
  })

  it("updates news and regenerates slug when title changes", async () => {
    const existing = createEntity()
    const repository = new InMemoryNewsRepository([existing])
    const useCase = new UpdateNews(repository)

    const updated = await useCase.execute({
      id: existing.id,
      title: "New Title Here",
      featured: true,
    })

    expect(updated.title).toBe("New Title Here")
    expect(updated.slug).toBe("new-title-here")
    expect(updated.isFeatured).toBe(true)
  })

  it("removes news through delete use case", async () => {
    const existing = createEntity()
    const repository = new InMemoryNewsRepository([existing])
    const useCase = new DeleteNews(repository)

    await useCase.execute(existing.id)

    const remaining = await repository.findAll()
    expect(remaining).toHaveLength(0)
  })
})
