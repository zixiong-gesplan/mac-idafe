import { describe, it, expect, beforeEach, afterEach } from "vitest"
import { tmpdir } from "os"
import path from "path"
import { mkdtempSync, rmSync, writeFileSync, readFileSync } from "fs"
import { NewsRepositoryJSON } from "@/app/src/infrastructure/repositories/NewsRepositoryJSON"
import { News } from "@/app/src/domain/entities/News"

const baseAuthor = {
  id: "author-1",
  name: "Reporter One",
  bio: "Reporter bio",
  email: "reporter@example.com",
}

const newsRecord = (id: string, publishedAt: Date) => ({
  id,
  title: `News ${id}`,
  slug: `news-${id}`,
  excerpt: `Excerpt for news ${id} with enough detail`,
  content: `Content for news ${id}`,
  author: baseAuthor,
  category: "Tech",
  categorySlug: "tech",
  categoryColor: "#000000",
  tags: ["tech"],
  publishedAt: publishedAt.toISOString(),
  readingTimeMinutes: 4,
  featured: false,
  breaking: false,
})

const toEntity = (record: ReturnType<typeof newsRecord>): News =>
  News.create({
    ...record,
    publishedAt: new Date(record.publishedAt),
  })

describe("NewsRepositoryJSON", () => {
  let tempDir: string
  let dataFile: string

  const setupRepository = (records: ReturnType<typeof newsRecord>[]) => {
    writeFileSync(dataFile, JSON.stringify(records, null, 2))
    return new NewsRepositoryJSON(dataFile)
  }

  beforeEach(() => {
    tempDir = mkdtempSync(path.join(tmpdir(), "news-repo-"))
    dataFile = path.join(tempDir, "news.json")
  })

  afterEach(() => {
    rmSync(tempDir, { recursive: true, force: true })
  })

  it("sorts recent news without mutating the source collection", async () => {
    const newest = newsRecord("3", new Date("2024-03-03T00:00:00Z"))
    const middle = newsRecord("2", new Date("2024-02-02T00:00:00Z"))
    const oldest = newsRecord("1", new Date("2024-01-01T00:00:00Z"))

    const repository = setupRepository([middle, newest, oldest])
    const originalOrder = [middle.id, newest.id, oldest.id]

    const result = await repository.findRecent(3)

    expect(result.map((n) => n.id)).toEqual(["3", "2", "1"])
    expect((repository as any).news.map((n: News) => n.id)).toEqual(originalOrder)
  })

  it("creates and persists a new news item", async () => {
    const base = newsRecord("1", new Date("2024-01-01T00:00:00Z"))
    const repository = setupRepository([base])
    const newEntity = toEntity(
      newsRecord("2", new Date("2024-02-02T00:00:00Z")),
    )

    const created = await repository.create(newEntity)

    expect(created.id).toBe("2")
    const persisted = JSON.parse(readFileSync(dataFile, "utf-8")) as any[]
    expect(persisted.find((n) => n.id === "2")).toBeDefined()
  })

  it("updates an existing news item and saves changes", async () => {
    const base = newsRecord("1", new Date("2024-01-01T00:00:00Z"))
    const repository = setupRepository([base])
    const updated = toEntity({
      ...base,
      title: "Updated title",
    })

    const result = await repository.update(updated)

    expect(result.title).toBe("Updated title")
    const persisted = JSON.parse(readFileSync(dataFile, "utf-8")) as any[]
    expect(persisted.find((n) => n.id === "1")?.title).toBe("Updated title")
  })

  it("deletes an existing news item and persists the removal", async () => {
    const first = newsRecord("1", new Date("2024-01-01T00:00:00Z"))
    const second = newsRecord("2", new Date("2024-02-02T00:00:00Z"))
    const repository = setupRepository([first, second])

    await repository.delete("1")

    const persisted = JSON.parse(readFileSync(dataFile, "utf-8")) as any[]
    expect(persisted.map((n) => n.id)).toEqual(["2"])
  })
})
