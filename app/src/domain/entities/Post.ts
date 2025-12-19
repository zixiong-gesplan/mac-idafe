import type { Slug } from "../value-objects/Slug"
import type { Author } from "./Author"
import type { Category } from "./Category"

export interface PostProps {
  id: string
  title: string
  slug: Slug
  content: string
  excerpt: string
  author: Author
  categories: Category[]
  tags: string[]
  publishedAt: Date
  updatedAt?: Date
  readingTimeMinutes: number
  featured: boolean
}

export class Post {
  private constructor(private props: PostProps) {
    this.validate()
  }

  static create(props: PostProps): Post {
    return new Post(props)
  }

  private validate(): void {
    if (!this.props.title || this.props.title.length < 3) {
      throw new Error("El título debe tener al menos 3 caracteres")
    }

    if (!this.props.content || this.props.content.length < 100) {
      throw new Error("El contenido debe tener al menos 100 caracteres")
    }

    if (this.props.categories.length === 0) {
      throw new Error("El post debe tener al menos una categoría")
    }

    if (this.props.readingTimeMinutes < 1) {
      throw new Error("El tiempo de lectura debe ser al menos 1 minuto")
    }
  }

  // Getters
  get id(): string {
    return this.props.id
  }

  get title(): string {
    return this.props.title
  }

  get slug(): Slug {
    return this.props.slug
  }

  get content(): string {
    return this.props.content
  }

  get excerpt(): string {
    return this.props.excerpt
  }

  get author(): Author {
    return this.props.author
  }

  get categories(): Category[] {
    return [...this.props.categories]
  }

  get tags(): string[] {
    return [...this.props.tags]
  }

  get publishedAt(): Date {
    return this.props.publishedAt
  }

  get updatedAt(): Date | undefined {
    return this.props.updatedAt
  }

  get readingTimeMinutes(): number {
    return this.props.readingTimeMinutes
  }

  get isFeatured(): boolean {
    return this.props.featured
  }

  // Business logic
  isPublished(): boolean {
    return this.props.publishedAt <= new Date()
  }

  hasCategory(categorySlug: string): boolean {
    return this.props.categories.some((cat) => cat.slug === categorySlug)
  }

  hasTag(tag: string): boolean {
    return this.props.tags.includes(tag.toLowerCase())
  }

  matchesSearchQuery(query: string): boolean {
    const lowerQuery = query.toLowerCase()
    return (
      this.props.title.toLowerCase().includes(lowerQuery) ||
      this.props.excerpt.toLowerCase().includes(lowerQuery) ||
      this.props.content.toLowerCase().includes(lowerQuery) ||
      this.props.tags.some((tag) => tag.toLowerCase().includes(lowerQuery))
    )
  }

  toJSON() {
    return {
      id: this.props.id,
      title: this.props.title,
      slug: this.props.slug.value,
      content: this.props.content,
      excerpt: this.props.excerpt,
      author: this.props.author.toJSON(),
      categories: this.props.categories.map((cat) => cat.toJSON()),
      tags: this.props.tags,
      publishedAt: this.props.publishedAt.toISOString(),
      updatedAt: this.props.updatedAt?.toISOString(),
      readingTimeMinutes: this.props.readingTimeMinutes,
      featured: this.props.featured,
    }
  }
}
