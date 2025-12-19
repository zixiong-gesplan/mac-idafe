import { describe, it, expect } from "vitest"
import { PostRepositoryJSON } from "@/app/src/infrastructure/repositories/PostRepositoryJSON"
import { Post } from "@/app/src/domain/entities/Post"
import { Author } from "@/app/src/domain/entities/Author"
import { Category } from "@/app/src/domain/entities/Category"
import { Slug } from "@/app/src/domain/value-objects/Slug"

const author = Author.create({
  id: "author-1",
  name: "Author One",
  bio: "Bio for author one",
  email: "author@example.com",
})

const category = Category.create({
  id: "category-1",
  name: "Tech",
  slug: "tech",
  description: "Tech category",
})

const createPost = (id: string, publishedAt: Date): Post =>
  Post.create({
    id,
    title: `Post ${id}`,
    slug: Slug.create(`post-${id}`),
    content: "A".repeat(120),
    excerpt: `Excerpt for post ${id}`,
    author,
    categories: [category],
    tags: ["tech"],
    publishedAt,
    updatedAt: undefined,
    readingTimeMinutes: 5,
    featured: false,
  })

describe("PostRepositoryJSON", () => {
  it("sorts recent posts without mutating the source collection", async () => {
    const repository = new PostRepositoryJSON()
    const newest = createPost("3", new Date("2024-12-01T00:00:00Z"))
    const middle = createPost("2", new Date("2024-06-01T00:00:00Z"))
    const oldest = createPost("1", new Date("2024-01-01T00:00:00Z"))

    ;(repository as any).posts = [middle, newest, oldest]
    const originalOrder = ((repository as any).posts as Post[]).map((post) => post.id)

    const result = await repository.findRecent(3)

    expect(result.map((post) => post.id)).toEqual(["3", "2", "1"])
    expect(((repository as any).posts as Post[]).map((post) => post.id)).toEqual(originalOrder)
  })

  it("returns an empty array when there are no posts", async () => {
    const repository = new PostRepositoryJSON()
    ;(repository as any).posts = []

    const result = await repository.findRecent(4)

    expect(result).toEqual([])
    expect((repository as any).posts).toEqual([])
  })

  it("keeps stable ordering for posts with duplicate dates", async () => {
    const repository = new PostRepositoryJSON()
    const duplicateDate = new Date("2024-05-10T00:00:00Z")
    const firstDuplicate = createPost("1", duplicateDate)
    const secondDuplicate = createPost("2", duplicateDate)
    const newest = createPost("3", new Date("2024-06-01T00:00:00Z"))

    ;(repository as any).posts = [firstDuplicate, secondDuplicate, newest]

    const result = await repository.findRecent(3)

    expect(result.map((post) => post.id)).toEqual(["3", "1", "2"])
  })
})
