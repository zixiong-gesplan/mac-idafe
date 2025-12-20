import type { NewsRepository } from "@application/ports/NewsRepository"
import { slugify } from "@application/utils/slugify"
import { News, type NewsProps } from "@domain/entities/News"
import type { CreateNewsInput } from "./CreateNews"

export type UpdateNewsInput = Partial<Omit<CreateNewsInput, "publishedAt">> & {
  id: string
  publishedAt?: Date
}

export class UpdateNews {
  constructor(private repository: NewsRepository) {}

  async execute(input: UpdateNewsInput): Promise<News> {
    const existing = await this.repository.findById(input.id)

    if (!existing) {
      throw new Error("La noticia no existe")
    }

    const updatedProps: NewsProps = {
      id: input.id,
      title: input.title ?? existing.title,
      slug: input.slug ?? slugify(input.title ?? existing.title),
      excerpt: input.excerpt ?? existing.excerpt,
      content: input.content ?? existing.content,
      author: input.author ?? { ...existing.author },
      category: input.category ?? existing.category,
      categorySlug: input.categorySlug ?? slugify(input.category ?? existing.category),
      categoryColor: input.categoryColor ?? existing.categoryColor,
      tags: input.tags ?? existing.tags,
      publishedAt: input.publishedAt ? new Date(input.publishedAt) : existing.publishedAt,
      readingTimeMinutes: input.readingTimeMinutes ?? existing.readingTimeMinutes,
      featured: input.featured ?? existing.isFeatured,
      breaking: input.breaking ?? existing.isBreaking,
    }

    const news = News.create(updatedProps)
    return this.repository.update(news)
  }
}
