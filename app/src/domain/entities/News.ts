export interface NewsProps {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  author: {
    id: string
    name: string
    bio: string
    avatar?: string
    email: string
  }
  category: string
  categorySlug: string
  categoryColor: string
  tags: string[]
  publishedAt: Date
  readingTimeMinutes: number
  featured: boolean
  breaking: boolean
}

export class News {
  private constructor(private props: NewsProps) {
    this.validate()
  }

  static create(props: NewsProps): News {
    return new News(props)
  }

  private validate(): void {
    if (!this.props.title || this.props.title.length < 5) {
      throw new Error("El título debe tener al menos 5 caracteres")
    }

    if (!this.props.excerpt || this.props.excerpt.length < 20) {
      throw new Error("El extracto debe tener al menos 20 caracteres")
    }
  }

  get id(): string {
    return this.props.id
  }
  get title(): string {
    return this.props.title
  }
  get slug(): string {
    return this.props.slug
  }
  get excerpt(): string {
    return this.props.excerpt
  }
  get content(): string {
    return this.props.content
  }
  get author() {
    return this.props.author
  }
  get category(): string {
    return this.props.category
  }
  get categorySlug(): string {
    return this.props.categorySlug
  }
  get categoryColor(): string {
    return this.props.categoryColor
  }
  get tags(): string[] {
    return [...this.props.tags]
  }
  get publishedAt(): Date {
    return this.props.publishedAt
  }
  get readingTimeMinutes(): number {
    return this.props.readingTimeMinutes
  }
  get isFeatured(): boolean {
    return this.props.featured
  }
  get isBreaking(): boolean {
    return this.props.breaking
  }

  isRecent(): boolean {
    const now = new Date()
    const hoursDiff = (now.getTime() - this.props.publishedAt.getTime()) / (1000 * 60 * 60)
    return hoursDiff < 24
  }

  matchesSearch(query: string): boolean {
    const lowerQuery = query.toLowerCase()
    return (
      this.props.title.toLowerCase().includes(lowerQuery) ||
      this.props.excerpt.toLowerCase().includes(lowerQuery) ||
      this.props.tags.some((tag) => tag.toLowerCase().includes(lowerQuery))
    )
  }

  toJSON() {
    return {
      id: this.props.id,
      title: this.props.title,
      slug: this.props.slug,
      excerpt: this.props.excerpt,
      content: this.props.content,
      author: this.props.author,
      category: this.props.category,
      categorySlug: this.props.categorySlug,
      categoryColor: this.props.categoryColor,
      tags: this.props.tags,
      publishedAt: this.props.publishedAt.toISOString(),
      readingTimeMinutes: this.props.readingTimeMinutes,
      featured: this.props.featured,
      breaking: this.props.breaking,
    }
  }
}
