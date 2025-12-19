import type { Post } from "../../domain/entities/Post"
import type { PostRepository } from "../ports/PostRepository"

export class GetPostBySlug {
  constructor(private postRepository: PostRepository) {}

  async execute(slug: string): Promise<Post | null> {
    if (!slug || slug.trim().length === 0) {
      throw new Error("El slug es requerido")
    }

    const post = await this.postRepository.findBySlug(slug)

    if (!post) {
      return null
    }

    // Business logic: solo retornar si está publicado
    if (!post.isPublished()) {
      return null
    }

    return post
  }
}
