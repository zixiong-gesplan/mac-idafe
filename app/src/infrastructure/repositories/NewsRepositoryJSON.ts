import path from "path"
import { promises as fs } from "fs"
import type { NewsRepository, NewsFilters } from "@application/ports/NewsRepository"
import { News } from "@domain/entities/News"

export class NewsRepositoryJSON implements NewsRepository {
  private news: News[] = []
  private loaded = false
  private readonly dataFilePath: string

  constructor(dataFilePath = path.join(process.cwd(), "app/src/infrastructure/data/news.json")) {
    this.dataFilePath = dataFilePath
  }

  private async ensureLoaded(): Promise<void> {
    if (this.loaded) return
    await this.reloadFromFile()
  }

  private async reloadFromFile(): Promise<void> {
    try {
      const raw = await fs.readFile(this.dataFilePath, "utf-8")
      const parsed = JSON.parse(raw) as any[]
      this.news = parsed.map((item) =>
        News.create({
          ...item,
          featured: item.featured ?? item.isFeatured ?? false,
          breaking: item.breaking ?? item.isBreaking ?? false,
          publishedAt: new Date(item.publishedAt),
        }),
      )
      this.loaded = true
    } catch (error) {
      throw new Error("No se pudo leer el almacИn de noticias")
    }
  }

  private async persist(): Promise<void> {
    try {
      const payload = JSON.stringify(this.news.map((n) => n.toJSON()), null, 2)
      await fs.writeFile(this.dataFilePath, payload, "utf-8")
    } catch (error) {
      throw new Error("No se pudo guardar el almacИn de noticias")
    }
  }

  async findAll(filters?: NewsFilters): Promise<News[]> {
    await this.ensureLoaded()
    let result = [...this.news]

    if (filters?.category) {
      result = result.filter((n) => n.categorySlug === filters.category)
    }

    if (filters?.featured !== undefined) {
      result = result.filter((n) => n.isFeatured === filters.featured)
    }

    if (filters?.breaking !== undefined) {
      result = result.filter((n) => n.isBreaking === filters.breaking)
    }

    if (filters?.search) {
      result = result.filter((n) => n.matchesSearch(filters.search!))
    }

    return result.sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime())
  }

  async findById(id: string): Promise<News | null> {
    await this.ensureLoaded()
    return this.news.find((n) => n.id === id) || null
  }

  async findBySlug(slug: string): Promise<News | null> {
    await this.ensureLoaded()
    return this.news.find((n) => n.slug === slug) || null
  }

  async findFeatured(limit = 4): Promise<News[]> {
    await this.ensureLoaded()
    return this.news
      .filter((n) => n.isFeatured)
      .sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime())
      .slice(0, limit)
  }

  async findBreaking(): Promise<News[]> {
    await this.ensureLoaded()
    return this.news.filter((n) => n.isBreaking)
  }

  async findRecent(limit = 6): Promise<News[]> {
    await this.ensureLoaded()
    const sortedNews = [...this.news].sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime())
    return sortedNews.slice(0, limit)
  }

  async create(news: News): Promise<News> {
    await this.ensureLoaded()
    this.news = [...this.news, news]
    await this.persist()
    return news
  }

  async update(news: News): Promise<News> {
    await this.ensureLoaded()
    const index = this.news.findIndex((n) => n.id === news.id)
    if (index === -1) {
      throw new Error("La noticia no existe")
    }

    const clone = [...this.news]
    clone[index] = news
    this.news = clone
    await this.persist()
    return news
  }

  async delete(id: string): Promise<void> {
    await this.ensureLoaded()
    this.news = this.news.filter((n) => n.id !== id)
    await this.persist()
  }
}
