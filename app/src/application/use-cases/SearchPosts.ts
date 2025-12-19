import type { Post } from "../../domain/entities/Post"
import type { PostRepository } from "../ports/PostRepository"

export class SearchPosts {
  constructor(private postRepository: PostRepository) {}

  async execute(query: string): Promise<Post[]> {
    if (!query || query.trim().length < 2) {
      return []
    }

    const normalizedQuery = query.trim().toLowerCase()
    const results = await this.postRepository.search(normalizedQuery)

    // Business logic: filtrar publicados y ordenar por relevancia
    const publishedResults = results.filter((post) => post.isPublished())

    // Priorizar posts featured en resultados
    return publishedResults.sort((a, b) => {
      if (a.isFeatured && !b.isFeatured) return -1
      if (!a.isFeatured && b.isFeatured) return 1
      return b.publishedAt.getTime() - a.publishedAt.getTime()
    })
  }
}
