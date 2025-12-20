import type { NewsRepository } from "@application/ports/NewsRepository"

export class DeleteNews {
  constructor(private repository: NewsRepository) {}

  async execute(id: string): Promise<void> {
    const existing = await this.repository.findById(id)
    if (!existing) {
      throw new Error("La noticia no existe")
    }

    await this.repository.delete(id)
  }
}
