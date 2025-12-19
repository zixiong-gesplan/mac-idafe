import type { Post } from "../../domain/entities/Post"
import type { PostRepository, PostFilters } from "../ports/PostRepository"

export class GetPosts {
  constructor(private postRepository: PostRepository) {}

  async execute(filters?: PostFilters): Promise<Post[]> {
    const posts = await this.postRepository.findAll(filters)

    // Business logic: solo retornar posts publicados
    const publishedPosts = posts.filter((post) => post.isPublished())

    // Ordenar por fecha de publicación (más recientes primero)
    return publishedPosts.sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime())
  }
}
