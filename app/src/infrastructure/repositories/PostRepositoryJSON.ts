import { Post } from "@domain/entities/Post"
import { Author } from "@domain/entities/Author"
import { Category } from "@domain/entities/Category"
import { Slug } from "@domain/value-objects/Slug"
import type { PostRepository, PostFilters } from "@application/ports/PostRepository"
import postsData from "@infrastructure/data/posts.json"

export class PostRepositoryJSON implements PostRepository {
  private posts: Post[]

  constructor() {
    this.posts = this.loadPosts()
  }

  private loadPosts(): Post[] {
    return postsData.map((data) => {
      const author = Author.create({
        id: data.author.id,
        name: data.author.name,
        bio: data.author.bio,
        avatar: data.author.avatar,
        email: data.author.email,
      })

      const categories = data.categories.map((cat) =>
        Category.create({
          id: cat.id,
          name: cat.name,
          slug: cat.slug,
          description: cat.description,
          icon: cat.icon,
          color: cat.color,
        }),
      )

      return Post.create({
        id: data.id,
        title: data.title,
        slug: Slug.create(data.slug),
        content: data.content,
        excerpt: data.excerpt,
        author,
        categories,
        tags: data.tags,
        publishedAt: new Date(data.publishedAt),
        updatedAt: undefined,
        readingTimeMinutes: data.readingTimeMinutes,
        featured: data.featured,
      })
    })
  }

  async findAll(filters?: PostFilters): Promise<Post[]> {
    let result = [...this.posts]

    if (filters?.category) {
      result = result.filter((post) => post.hasCategory(filters.category!))
    }

    if (filters?.tag) {
      result = result.filter((post) => post.hasTag(filters.tag!))
    }

    if (filters?.featured !== undefined) {
      result = result.filter((post) => post.isFeatured === filters.featured)
    }

    if (filters?.search) {
      result = result.filter((post) => post.matchesSearchQuery(filters.search!))
    }

    return result
  }

  async findBySlug(slug: string): Promise<Post | null> {
    const post = this.posts.find((p) => p.slug.value === slug)
    return post || null
  }

  async findById(id: string): Promise<Post | null> {
    const post = this.posts.find((p) => p.id === id)
    return post || null
  }

  async findFeatured(limit = 3): Promise<Post[]> {
    return this.posts.filter((post) => post.isFeatured).slice(0, limit)
  }

  async findRecent(limit = 5): Promise<Post[]> {
    return [...this.posts].sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime()).slice(0, limit)
  }

  async search(query: string): Promise<Post[]> {
    return this.posts.filter((post) => post.matchesSearchQuery(query))
  }
}
