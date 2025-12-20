import { randomUUID } from "crypto"
import type { NewsRepository } from "@application/ports/NewsRepository"
import { slugify } from "@application/utils/slugify"
import { News } from "@domain/entities/News"

export interface CreateNewsInput {
  id?: string
  title: string
  slug?: string
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
  categorySlug?: string
  categoryColor: string
  tags: string[]
  publishedAt: Date
  readingTimeMinutes: number
  featured?: boolean
  breaking?: boolean
}

export class CreateNews {
  constructor(private repository: NewsRepository) {}

  async execute(input: CreateNewsInput): Promise<News> {
    const news = News.create({
      id: input.id ?? randomUUID(),
      title: input.title,
      slug: input.slug ?? slugify(input.title),
      excerpt: input.excerpt,
      content: input.content,
      author: input.author,
      category: input.category,
      categorySlug: input.categorySlug ?? slugify(input.category),
      categoryColor: input.categoryColor,
      tags: input.tags,
      publishedAt: new Date(input.publishedAt),
      readingTimeMinutes: input.readingTimeMinutes,
      featured: input.featured ?? false,
      breaking: input.breaking ?? false,
    })

    return this.repository.create(news)
  }
}
