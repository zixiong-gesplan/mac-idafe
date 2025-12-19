import type { NewsRepository, NewsFilters } from "@application/ports/NewsRepository"
import type { News } from "@domain/entities/News"

export class GetNews {
  constructor(private repository: NewsRepository) {}

  async execute(filters?: NewsFilters): Promise<News[]> {
    return this.repository.findAll(filters)
  }

  async getFeatured(limit?: number): Promise<News[]> {
    return this.repository.findFeatured(limit)
  }

  async getBreaking(): Promise<News[]> {
    return this.repository.findBreaking()
  }

  async getRecent(limit?: number): Promise<News[]> {
    return this.repository.findRecent(limit)
  }

  async getBySlug(slug: string): Promise<News | null> {
    return this.repository.findBySlug(slug)
  }
}
