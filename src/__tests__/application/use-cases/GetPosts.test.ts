import { describe, it, expect, beforeEach } from "vitest"
import { GetPosts } from "@/application/use-cases/GetPosts"
import { Post } from "@/domain/entities/Post"
import { Author } from "@/domain/entities/Author"
import { Category } from "@/domain/entities/Category"
import { Slug } from "@/domain/value-objects/Slug"
import type { PostRepository } from "@/application/ports/PostRepository"

// Mock Repository
class MockPostRepository implements PostRepository {
  private posts: Post[] = []

  setPosts(posts: Post[]) {
    this.posts = posts
  }

  async findAll(): Promise<Post[]> {
    return this.posts
  }

  async findBySlug(): Promise<Post | null> {
    return null
  }

  async findById(): Promise<Post | null> {
    return null
  }

  async findFeatured(): Promise<Post[]> {
    return []
  }

  async findRecent(): Promise<Post[]> {
    return []
  }

  async search(): Promise<Post[]> {
    return []
  }
}

describe("GetPosts Use Case", () => {
  let mockRepository: MockPostRepository
  let useCase: GetPosts

  const mockAuthor = Author.create({
    id: "1",
    name: "Test Author",
    bio: "Test bio",
    email: "test@example.com",
  })

  const mockCategory = Category.create({
    id: "1",
    name: "Test",
    slug: "test",
    description: "Test",
  })

  beforeEach(() => {
    mockRepository = new MockPostRepository()
    useCase = new GetPosts(mockRepository)
  })

  it("should return only published posts", async () => {
    // Given
    const publishedPost = Post.create({
      id: "1",
      title: "Published",
      slug: Slug.create("published"),
      content: "A".repeat(100),
      excerpt: "Test",
      author: mockAuthor,
      categories: [mockCategory],
      tags: [],
      publishedAt: new Date(Date.now() - 86400000), // Yesterday
      readingTimeMinutes: 5,
      featured: false,
    })

    const unpublishedPost = Post.create({
      id: "2",
      title: "Unpublished",
      slug: Slug.create("unpublished"),
      content: "A".repeat(100),
      excerpt: "Test",
      author: mockAuthor,
      categories: [mockCategory],
      tags: [],
      publishedAt: new Date(Date.now() + 86400000), // Tomorrow
      readingTimeMinutes: 5,
      featured: false,
    })

    mockRepository.setPosts([publishedPost, unpublishedPost])

    // When
    const result = await useCase.execute()

    // Then
    expect(result).toHaveLength(1)
    expect(result[0].id).toBe("1")
  })

  it("should sort posts by date (newest first)", async () => {
    // Given
    const oldPost = Post.create({
      id: "1",
      title: "Old Post",
      slug: Slug.create("old-post"),
      content: "A".repeat(100),
      excerpt: "Test",
      author: mockAuthor,
      categories: [mockCategory],
      tags: [],
      publishedAt: new Date("2024-01-01"),
      readingTimeMinutes: 5,
      featured: false,
    })

    const newPost = Post.create({
      id: "2",
      title: "New Post",
      slug: Slug.create("new-post"),
      content: "A".repeat(100),
      excerpt: "Test",
      author: mockAuthor,
      categories: [mockCategory],
      tags: [],
      publishedAt: new Date("2024-02-01"),
      readingTimeMinutes: 5,
      featured: false,
    })

    mockRepository.setPosts([oldPost, newPost])

    // When
    const result = await useCase.execute()

    // Then
    expect(result[0].id).toBe("2") // Newest first
    expect(result[1].id).toBe("1")
  })
})
