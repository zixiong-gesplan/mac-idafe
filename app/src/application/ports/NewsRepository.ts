import type { News } from "@domain/entities/News"

export interface NewsFilters {
  category?: string
  featured?: boolean
  breaking?: boolean
  search?: string
}

export interface NewsRepository {
  findAll(filters?: NewsFilters): Promise<News[]>
  findById(id: string): Promise<News | null>
  findBySlug(slug: string): Promise<News | null>
  findFeatured(limit?: number): Promise<News[]>
  findBreaking(): Promise<News[]>
  findRecent(limit?: number): Promise<News[]>
  create(news: News): Promise<News>
  update(news: News): Promise<News>
  delete(id: string): Promise<void>
}
