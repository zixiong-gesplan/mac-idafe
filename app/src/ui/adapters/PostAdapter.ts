import type { Post } from "@domain/entities/Post"
import type { Category } from "@domain/entities/Category"

export interface PostDTO {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  author: {
    name: string
    avatar?: string
    bio: string
  }
  categories: CategoryDTO[]
  tags: string[]
  publishedAt: string
  readingTimeMinutes: number
  featured: boolean
}

export interface CategoryDTO {
  name: string
  slug: string
  icon?: string
  color?: string
}

export class PostAdapter {
  static toDTO(post: Post): PostDTO {
    return {
      id: post.id,
      title: post.title,
      slug: post.slug.value,
      excerpt: post.excerpt,
      content: post.content,
      author: {
        name: post.author.name,
        avatar: post.author.avatar,
        bio: post.author.bio,
      },
      categories: post.categories.map((cat) => this.categoryToDTO(cat)),
      tags: post.tags,
      publishedAt: post.publishedAt.toISOString(),
      readingTimeMinutes: post.readingTimeMinutes,
      featured: post.isFeatured,
    }
  }

  static toDTOList(posts: Post[]): PostDTO[] {
    return posts.map((post) => this.toDTO(post))
  }

  private static categoryToDTO(category: Category): CategoryDTO {
    return {
      name: category.name,
      slug: category.slug,
      icon: category.icon,
      color: category.color,
    }
  }
}
