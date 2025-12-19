import { describe, it, expect } from "vitest"
import { Post } from "@/domain/entities/Post"
import { Author } from "@/domain/entities/Author"
import { Category } from "@/domain/entities/Category"
import { Slug } from "@/domain/value-objects/Slug"

describe("Post Entity", () => {
  const mockAuthor = Author.create({
    id: "1",
    name: "Test Author",
    bio: "Test bio",
    email: "test@example.com",
  })

  const mockCategory = Category.create({
    id: "1",
    name: "Test Category",
    slug: "test-category",
    description: "Test description",
  })

  describe("Creation and Validation", () => {
    it("should create a valid post", () => {
      // Given
      const props = {
        id: "1",
        title: "Test Post",
        slug: Slug.create("test-post"),
        content: "A".repeat(100),
        excerpt: "Test excerpt",
        author: mockAuthor,
        categories: [mockCategory],
        tags: ["test"],
        publishedAt: new Date(),
        readingTimeMinutes: 5,
        featured: false,
      }

      // When
      const post = Post.create(props)

      // Then
      expect(post).toBeDefined()
      expect(post.title).toBe("Test Post")
      expect(post.slug.value).toBe("test-post")
    })

    it("should throw error if title is too short", () => {
      // Given
      const props = {
        id: "1",
        title: "AB", // Too short
        slug: Slug.create("test-post"),
        content: "A".repeat(100),
        excerpt: "Test excerpt",
        author: mockAuthor,
        categories: [mockCategory],
        tags: ["test"],
        publishedAt: new Date(),
        readingTimeMinutes: 5,
        featured: false,
      }

      // When & Then
      expect(() => Post.create(props)).toThrow("El título debe tener al menos 3 caracteres")
    })

    it("should throw error if content is too short", () => {
      // Given
      const props = {
        id: "1",
        title: "Test Post",
        slug: Slug.create("test-post"),
        content: "Short", // Too short
        excerpt: "Test excerpt",
        author: mockAuthor,
        categories: [mockCategory],
        tags: ["test"],
        publishedAt: new Date(),
        readingTimeMinutes: 5,
        featured: false,
      }

      // When & Then
      expect(() => Post.create(props)).toThrow("El contenido debe tener al menos 100 caracteres")
    })

    it("should throw error if no categories", () => {
      // Given
      const props = {
        id: "1",
        title: "Test Post",
        slug: Slug.create("test-post"),
        content: "A".repeat(100),
        excerpt: "Test excerpt",
        author: mockAuthor,
        categories: [], // Empty
        tags: ["test"],
        publishedAt: new Date(),
        readingTimeMinutes: 5,
        featured: false,
      }

      // When & Then
      expect(() => Post.create(props)).toThrow("El post debe tener al menos una categoría")
    })
  })

  describe("Business Logic", () => {
    it("should correctly identify published posts", () => {
      // Given
      const pastDate = new Date(Date.now() - 86400000) // Yesterday
      const futureDate = new Date(Date.now() + 86400000) // Tomorrow

      const publishedPost = Post.create({
        id: "1",
        title: "Published Post",
        slug: Slug.create("published-post"),
        content: "A".repeat(100),
        excerpt: "Test excerpt",
        author: mockAuthor,
        categories: [mockCategory],
        tags: ["test"],
        publishedAt: pastDate,
        readingTimeMinutes: 5,
        featured: false,
      })

      const unpublishedPost = Post.create({
        id: "2",
        title: "Unpublished Post",
        slug: Slug.create("unpublished-post"),
        content: "A".repeat(100),
        excerpt: "Test excerpt",
        author: mockAuthor,
        categories: [mockCategory],
        tags: ["test"],
        publishedAt: futureDate,
        readingTimeMinutes: 5,
        featured: false,
      })

      // When & Then
      expect(publishedPost.isPublished()).toBe(true)
      expect(unpublishedPost.isPublished()).toBe(false)
    })

    it("should correctly identify posts with specific category", () => {
      // Given
      const post = Post.create({
        id: "1",
        title: "Test Post",
        slug: Slug.create("test-post"),
        content: "A".repeat(100),
        excerpt: "Test excerpt",
        author: mockAuthor,
        categories: [mockCategory],
        tags: ["test"],
        publishedAt: new Date(),
        readingTimeMinutes: 5,
        featured: false,
      })

      // When & Then
      expect(post.hasCategory("test-category")).toBe(true)
      expect(post.hasCategory("other-category")).toBe(false)
    })

    it("should match search queries correctly", () => {
      // Given
      const post = Post.create({
        id: "1",
        title: "Climate Change Article",
        slug: Slug.create("climate-change"),
        content: "A".repeat(100),
        excerpt: "An article about global warming",
        author: mockAuthor,
        categories: [mockCategory],
        tags: ["climate", "environment"],
        publishedAt: new Date(),
        readingTimeMinutes: 5,
        featured: false,
      })

      // When & Then
      expect(post.matchesSearchQuery("climate")).toBe(true)
      expect(post.matchesSearchQuery("warming")).toBe(true)
      expect(post.matchesSearchQuery("environment")).toBe(true)
      expect(post.matchesSearchQuery("unrelated")).toBe(false)
    })
  })
})
