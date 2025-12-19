import type { Post } from "@domain/entities/Post"

export interface PostFilters {
  category?: string
  tag?: string
  author?: string
  featured?: boolean
  search?: string
}

export interface PostRepository {
  findAll(filters?: PostFilters): Promise<Post[]>
  findBySlug(slug: string): Promise<Post | null>
  findById(id: string): Promise<Post | null>
  findFeatured(limit?: number): Promise<Post[]>
  findRecent(limit?: number): Promise<Post[]>
  search(query: string): Promise<Post[]>
}
