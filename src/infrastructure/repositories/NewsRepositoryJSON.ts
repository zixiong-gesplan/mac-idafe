import type { NewsRepository, NewsFilters } from "../../application/ports/NewsRepository"
import { News } from "../../domain/entities/News"
import newsData from "../data/news.json"

export class NewsRepositoryJSON implements NewsRepository {
  private news: News[]

  constructor() {
    this.news = newsData.map((item) =>
      News.create({
        ...item,
        publishedAt: new Date(item.publishedAt),
      }),
    )
  }

  async findAll(filters?: NewsFilters): Promise<News[]> {
    let result = [...this.news]

    if (filters?.category) {
      result = result.filter((n) => n.categorySlug === filters.category)
    }

    if (filters?.featured !== undefined) {
      result = result.filter((n) => n.isFeatured === filters.featured)
    }

    if (filters?.breaking !== undefined) {
      result = result.filter((n) => n.isBreaking === filters.breaking)
    }

    if (filters?.search) {
      result = result.filter((n) => n.matchesSearch(filters.search!))
    }

    return result.sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime())
  }

  async findBySlug(slug: string): Promise<News | null> {
    return this.news.find((n) => n.slug === slug) || null
  }

  async findFeatured(limit = 4): Promise<News[]> {
    return this.news
      .filter((n) => n.isFeatured)
      .sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime())
      .slice(0, limit)
  }

  async findBreaking(): Promise<News[]> {
    return this.news.filter((n) => n.isBreaking)
  }

  async findRecent(limit = 6): Promise<News[]> {
    return this.news.sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime()).slice(0, limit)
  }
}
