This file is a merged representation of the entire codebase, combined into a single document by Repomix.
The content has been processed where security check has been disabled.

# File Summary

## Purpose
This file contains a packed representation of the entire repository's contents.
It is designed to be easily consumable by AI systems for analysis, code review,
or other automated processes.

## File Format
The content is organized as follows:
1. This summary section
2. Repository information
3. Directory structure
4. Repository files (if enabled)
5. Multiple file entries, each consisting of:
  a. A header with the file path (## File: path/to/file)
  b. The full contents of the file in a code block

## Usage Guidelines
- This file should be treated as read-only. Any changes should be made to the
  original repository files, not this packed version.
- When processing this file, use the file path to distinguish
  between different files in the repository.
- Be aware that this file may contain sensitive information. Handle it with
  the same level of security as you would the original repository.

## Notes
- Some files may have been excluded based on .gitignore rules and Repomix's configuration
- Binary files are not included in this packed representation. Please refer to the Repository Structure section for a complete list of file paths, including binary files
- Files matching patterns in .gitignore are excluded
- Files matching default ignore patterns are excluded
- Security check has been disabled - content may contain sensitive information
- Files are sorted by Git change count (files with more changes are at the bottom)

# Directory Structure
```
__tests__/
  noticias/
    page.test.tsx/
      page.test.tsx
  src/
    application/
      use-cases/
        GetPosts.test.ts/
          GetPosts.test.ts
    domain/
      entities/
        Post.test.ts/
          Post.test.ts
      value-objects/
        Slug.test.ts/
          Slug.test.ts
    infrastructure/
      repositories/
        NewsRepositoryJSON.test.ts/
          NewsRepositoryJSON.test.ts
        PostRepositoryJSON.test.ts/
          PostRepositoryJSON.test.ts
    ui/
      atoms/
        DarkModeToggle.test.tsx/
          DarkModeToggle.test.tsx
        MagneticButton.test.tsx/
          MagneticButton.test.tsx
        RippleEffect.test.tsx/
          RippleEffect.test.tsx
        SkeletonCard.test.tsx/
          SkeletonCard.test.tsx
        Text/
          Animated.test.tsx/
            Animated.test.tsx
          Gradient.test.tsx/
            Gradient.test.tsx
          Reveal.test.tsx/
            Reveal.test.tsx
      molecules/
        NewsCard.test.tsx/
          NewsCard.test.tsx
        NewsCategoryFilter.test.tsx/
          NewsCategoryFilter.test.tsx
        NewsSearchBar.test.tsx/
          NewsSearchBar.test.tsx
        ParallaxImage.test.tsx/
          ParallaxImage.test.tsx
        PartnerCard.test.tsx/
          PartnerCard.test.tsx
        PostCard.test.tsx/
          PostCard.test.tsx
        TeamMemberCard.test.tsx/
          TeamMemberCard.test.tsx
        TimelineEvent.test.tsx/
          TimelineEvent.test.tsx
        ValueCard.test.tsx/
          ValueCard.test.tsx
      utils/
        Boundary.test.tsx/
          Boundary.test.tsx
        List.test.tsx/
          List.test.tsx
animations.css/
  animations.css
globals.css/
  globals.css
layout.tsx/
  layout.tsx
noticias/
  page.tsx/
    page.tsx
page.tsx/
  page.tsx
posts/
  [slug]/
    page.tsx/
      page.tsx
sobre-nosotros/
  page.tsx/
    page.tsx
src/
  application/
    ports/
      NewsRepository.ts/
        NewsRepository.ts
      PostRepository.ts/
        PostRepository.ts
    use-cases/
      GetNews.ts/
        GetNews.ts
      GetPostBySlug.ts/
        GetPostBySlug.ts
      GetPosts.ts/
        GetPosts.ts
      SearchPosts.ts/
        SearchPosts.ts
  domain/
    entities/
      Author.ts/
        Author.ts
      Category.ts/
        Category.ts
      News.ts/
        News.ts
      Post.ts/
        Post.ts
    value-objects/
      Slug.ts/
        Slug.ts
  infrastructure/
    data/
      news.json/
        news.json
      posts.json/
        posts.json
    repositories/
      NewsRepositoryJSON.ts/
        NewsRepositoryJSON.ts
      PostRepositoryJSON.ts/
        PostRepositoryJSON.ts
  ui/
    adapters/
      PostAdapter.ts/
        PostAdapter.ts
    components/
      atoms/
        Counter/
          index.tsx/
            index.tsx
        DarkModeToggle.tsx/
          DarkModeToggle.tsx
        index.ts/
          index.ts
        MagneticButton.tsx/
          MagneticButton.tsx
        RippleEffect.tsx/
          RippleEffect.tsx
        SkeletonCard.tsx/
          SkeletonCard.tsx
        Text/
          Animated.tsx/
            Animated.tsx
          Gradient.tsx/
            Gradient.tsx
          index.ts/
            index.ts
          Reveal.tsx/
            Reveal.tsx
      BreakingNewsTicker.tsx/
        BreakingNewsTicker.tsx
      Footer.tsx/
        Footer.tsx
      GSAPProvider.tsx/
        GSAPProvider.tsx
      molecules/
        index.ts/
          index.ts
        NewsCard.tsx/
          NewsCard.tsx
        NewsCategoryFilter.tsx/
          NewsCategoryFilter.tsx
        NewsSearchBar.tsx/
          NewsSearchBar.tsx
        ParallaxImage.tsx/
          ParallaxImage.tsx
        PartnerCard.tsx/
          PartnerCard.tsx
        PostCard.tsx/
          PostCard.tsx
        Section/
          Animated.tsx/
            Animated.tsx
          Categories.tsx/
            Categories.tsx
          FeaturedPosts.tsx/
            FeaturedPosts.tsx
          Hero.tsx/
            Hero.tsx
          Partners/
            data.ts/
              data.ts
            index.tsx/
              index.tsx
          Stats/
            data.ts/
              data.ts
            index.tsx/
              index.tsx
        TeamMemberCard.tsx/
          TeamMemberCard.tsx
        TimelineEvent.tsx/
          TimelineEvent.tsx
        ValueCard.tsx/
          ValueCard.tsx
      Navbar.tsx/
        Navbar.tsx
      NewsGrid.tsx/
        NewsGrid.tsx
      NewsHero.tsx/
        NewsHero.tsx
      NewsSidebar.tsx/
        NewsSidebar.tsx
      ReadingProgress.tsx/
        ReadingProgress.tsx
      RecentPostsSection.tsx/
        RecentPostsSection.tsx
      ScrollProgressSections.tsx/
        ScrollProgressSections.tsx
      ScrollStorySection.tsx/
        ScrollStorySection.tsx
      SearchBar.tsx/
        SearchBar.tsx
      utils/
        Boundary.tsx/
          Boundary.tsx
        index.ts/
          index.ts
        List.tsx/
          List.tsx
    hooks/
      useGSAP.ts/
        useGSAP.ts
```

# Files

## File: __tests__/noticias/page.test.tsx/page.test.tsx
```typescript
import React from "react"
import { renderToString } from "react-dom/server"
import { describe, expect, it } from "vitest"

import { Boundary } from "@/app/src/ui/components/utils/Boundary"
import { deriveCategories, deriveFilteredNews, derivePopularTags } from "@/app/noticias/page"

const sampleNews = [
  {
    id: "1",
    title: "Cambio climatico avanza",
    slug: "cambio-climatico-avanza",
    excerpt: "El cambio climatico se acelera en regiones costeras.",
    content: "contenido",
    author: { id: "a", name: "Ana", bio: "bio", email: "a@x.com" },
    category: "Medio Ambiente",
    categorySlug: "medio-ambiente",
    categoryColor: "#00aa00",
    tags: ["clima", "co2"],
    publishedAt: "2024-01-01T00:00:00.000Z",
    readingTimeMinutes: 4,
    featured: false,
    breaking: false,
  },
  {
    id: "2",
    title: "Tecnologia verde en alza",
    slug: "tecnologia-verde",
    excerpt: "Nuevas startups de energia limpia.",
    content: "contenido",
    author: { id: "b", name: "Beto", bio: "bio", email: "b@x.com" },
    category: "Tecnologia",
    categorySlug: "tecnologia",
    categoryColor: "#0000aa",
    tags: ["energia", "co2"],
    publishedAt: "2024-01-02T00:00:00.000Z",
    readingTimeMinutes: 3,
    featured: true,
    breaking: true,
  },
] as const

describe("deriveFilteredNews", () => {
  it("filtra por categoria y busqueda", () => {
    const filteredByCategory = deriveFilteredNews(sampleNews, {
      categorySlug: "tecnologia",
      searchQuery: "",
    })
    expect(filteredByCategory).toHaveLength(1)
    expect(filteredByCategory[0].slug).toBe("tecnologia-verde")

    const filteredBySearch = deriveFilteredNews(sampleNews, {
      categorySlug: null,
      searchQuery: "co2",
    })
    expect(filteredBySearch).toHaveLength(2)
  })
})

describe("deriveCategories", () => {
  it("agrega categorias con conteo", () => {
    const categories = deriveCategories(sampleNews)
    expect(categories).toEqual([
      {
        name: "Medio Ambiente",
        slug: "medio-ambiente",
        color: "#00aa00",
        count: 1,
      },
      {
        name: "Tecnologia",
        slug: "tecnologia",
        color: "#0000aa",
        count: 1,
      },
    ])
  })
})

describe("derivePopularTags", () => {
  it("devuelve tags unicos y limita cantidad", () => {
    const tags = derivePopularTags(sampleNews, 1)
    expect(tags).toEqual(["clima"])
  })
})

describe("Boundary", () => {
  it("muestra fallback cuando la condicion es falsa", () => {
    const html = renderToString(
      <Boundary when={false} fallback={<span>fallback</span>}>
        <span>child</span>
      </Boundary>,
    )
    expect(html).toContain("fallback")
    expect(html).not.toContain("child")
  })

  it("muestra children cuando la condicion es verdadera", () => {
    const html = renderToString(
      <Boundary when fallback={<span>fallback</span>}>
        <span>child</span>
      </Boundary>,
    )
    expect(html).toContain("child")
  })
})
```

## File: __tests__/src/application/use-cases/GetPosts.test.ts/GetPosts.test.ts
```typescript
import { PostRepository } from "@/app/src/application/ports/PostRepository"
import { GetPosts } from "@/app/src/application/use-cases/GetPosts"
import { Author } from "@/app/src/domain/entities/Author"
import { Category } from "@/app/src/domain/entities/Category"
import { Post } from "@/app/src/domain/entities/Post"
import { Slug } from "@/app/src/domain/value-objects/Slug"
import { describe, it, expect, beforeEach } from "vitest"
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
```

## File: __tests__/src/domain/entities/Post.test.ts/Post.test.ts
```typescript
import { Author } from "@/app/src/domain/entities/Author"
import { Category } from "@/app/src/domain/entities/Category"
import { Post } from "@/app/src/domain/entities/Post"
import { Slug } from "@/app/src/domain/value-objects/Slug"
import { describe, it, expect } from "vitest"

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
```

## File: __tests__/src/domain/value-objects/Slug.test.ts/Slug.test.ts
```typescript
import { describe, it, expect } from "vitest"
import { Slug } from "@/app/src/domain/value-objects/Slug"


describe("Slug Value Object", () => {
  describe("Creation from string", () => {
    it("should create valid slug", () => {
      // Given & When
      const slug = Slug.create("valid-slug")

      // Then
      expect(slug.value).toBe("valid-slug")
    })

    it("should throw error for invalid characters", () => {
      // When & Then
      expect(() => Slug.create("Invalid_Slug!")).toThrow()
    })

    it("should throw error if too short", () => {
      // When & Then
      expect(() => Slug.create("ab")).toThrow("El slug debe tener al menos 3 caracteres")
    })
  })

  describe("Creation from title", () => {
    it("should convert title to valid slug", () => {
      // Given & When
      const slug = Slug.fromTitle("Climate Change: Understanding the Crisis")

      // Then
      expect(slug.value).toBe("climate-change-understanding-the-crisis")
    })

    it("should remove accents", () => {
      // Given & When
      const slug = Slug.fromTitle("Energía Renovable")

      // Then
      expect(slug.value).toBe("energia-renovable")
    })

    it("should handle special characters", () => {
      // Given & When
      const slug = Slug.fromTitle("Test & Example!")

      // Then
      expect(slug.value).toBe("test-example")
    })

    it("should replace spaces with hyphens", () => {
      // Given & When
      const slug = Slug.fromTitle("Multiple   Spaces   Here")

      // Then
      expect(slug.value).toBe("multiple-spaces-here")
    })
  })
})
```

## File: __tests__/src/infrastructure/repositories/NewsRepositoryJSON.test.ts/NewsRepositoryJSON.test.ts
```typescript
import { describe, it, expect } from "vitest"
import { NewsRepositoryJSON } from "@/app/src/infrastructure/repositories/NewsRepositoryJSON"
import { News } from "@/app/src/domain/entities/News"

const baseAuthor = {
  id: "author-1",
  name: "Reporter One",
  bio: "Reporter bio",
  email: "reporter@example.com",
}

const createNews = (id: string, publishedAt: Date): News =>
  News.create({
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
    publishedAt,
    readingTimeMinutes: 4,
    featured: false,
    breaking: false,
  })

describe("NewsRepositoryJSON", () => {
  it("sorts recent news without mutating the source collection", async () => {
    const repository = new NewsRepositoryJSON()
    const newest = createNews("3", new Date("2024-03-03T00:00:00Z"))
    const middle = createNews("2", new Date("2024-02-02T00:00:00Z"))
    const oldest = createNews("1", new Date("2024-01-01T00:00:00Z"))

    ;(repository as any).news = [middle, newest, oldest]
    const originalOrder = ((repository as any).news as News[]).map((n) => n.id)

    const result = await repository.findRecent(3)

    expect(result.map((n) => n.id)).toEqual(["3", "2", "1"])
    expect(((repository as any).news as News[]).map((n) => n.id)).toEqual(originalOrder)
  })

  it("returns an empty array when there are no news items", async () => {
    const repository = new NewsRepositoryJSON()
    ;(repository as any).news = []

    const result = await repository.findRecent(5)

    expect(result).toEqual([])
    expect((repository as any).news).toEqual([])
  })

  it("keeps stable ordering for items with duplicate dates", async () => {
    const repository = new NewsRepositoryJSON()
    const duplicateDate = new Date("2024-01-15T00:00:00Z")
    const firstDuplicate = createNews("1", duplicateDate)
    const secondDuplicate = createNews("2", duplicateDate)
    const newest = createNews("3", new Date("2024-02-01T00:00:00Z"))

    ;(repository as any).news = [firstDuplicate, secondDuplicate, newest]

    const result = await repository.findRecent(3)

    expect(result.map((n) => n.id)).toEqual(["3", "1", "2"])
  })
})
```

## File: __tests__/src/infrastructure/repositories/PostRepositoryJSON.test.ts/PostRepositoryJSON.test.ts
```typescript
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
```

## File: __tests__/src/ui/atoms/DarkModeToggle.test.tsx/DarkModeToggle.test.tsx
```typescript
import React from "react"
import { renderToString } from "react-dom/server"
import { describe, expect, it } from "vitest"
import { DarkModeToggle } from "@ui/components/atoms/DarkModeToggle"

describe("DarkModeToggle", () => {
  it("se renderiza sin lanzar errores en SSR", () => {
    expect(() => renderToString(<DarkModeToggle />)).not.toThrow()
  })
})
```

## File: __tests__/src/ui/atoms/MagneticButton.test.tsx/MagneticButton.test.tsx
```typescript
import React from "react"
import { renderToString } from "react-dom/server"
import { describe, expect, it } from "vitest"
import { MagneticButton } from "@ui/components/atoms/MagneticButton"

describe("MagneticButton", () => {
  it("incluye su contenido", () => {
    const html = renderToString(<MagneticButton>contenido</MagneticButton>)
    expect(html).toContain("contenido")
  })
})
```

## File: __tests__/src/ui/atoms/RippleEffect.test.tsx/RippleEffect.test.tsx
```typescript
import React from "react"
import { renderToString } from "react-dom/server"
import { describe, expect, it } from "vitest"
import { RippleEffect } from "@ui/components/atoms/RippleEffect"

describe("RippleEffect", () => {
  it("renderiza sus children", () => {
    const html = renderToString(
      <RippleEffect>
        <button>click</button>
      </RippleEffect>,
    )
    expect(html).toContain("click")
  })
})
```

## File: __tests__/src/ui/atoms/SkeletonCard.test.tsx/SkeletonCard.test.tsx
```typescript
import React from "react"
import { renderToString } from "react-dom/server"
import { describe, expect, it } from "vitest"
import { SkeletonCard, SkeletonGrid } from "@ui/components/atoms/SkeletonCard"

describe("Skeletons", () => {
  it("renderiza SkeletonCard con texto accesible", () => {
    const html = renderToString(<SkeletonCard />)
    expect(html).toContain("Cargando artículo")
  })

  it("SkeletonGrid renderiza el numero de items solicitado", () => {
    const html = renderToString(<SkeletonGrid count={2} />)
    const matches = html.match(/Cargando artículo/g) || []
    expect(matches.length).toBe(2)
  })
})
```

## File: __tests__/src/ui/atoms/Text/Animated.test.tsx/Animated.test.tsx
```typescript
import React from "react"
import { renderToString } from "react-dom/server"
import { describe, expect, it } from "vitest"
import { AnimatedText } from "@ui/components/atoms/Text/Animated"

describe("AnimatedText", () => {
  it("muestra el texto", () => {
    const html = renderToString(<AnimatedText>texto animado</AnimatedText>)
    expect(html).toContain("texto animado")
  })
})
```

## File: __tests__/src/ui/atoms/Text/Gradient.test.tsx/Gradient.test.tsx
```typescript
import React from "react"
import { renderToString } from "react-dom/server"
import { describe, expect, it } from "vitest"
import { GradientText } from "@ui/components/atoms/Text/Gradient"

describe("GradientText", () => {
  it("renderiza el texto con gradiente", () => {
    const html = renderToString(<GradientText text="gradiente" />)
    expect(html).toContain("gradiente")
  })
})
```

## File: __tests__/src/ui/atoms/Text/Reveal.test.tsx/Reveal.test.tsx
```typescript
import React from "react"
import { renderToString } from "react-dom/server"
import { describe, expect, it } from "vitest"
import { TextReveal } from "@ui/components/atoms/Text/Reveal"

describe("TextReveal", () => {
  it("divide el texto en elementos revelables", () => {
    const html = renderToString(<TextReveal text="uno dos" revealType="words" />)
    expect(html).toContain("uno")
    expect(html).toContain("dos")
  })
})
```

## File: __tests__/src/ui/molecules/NewsCard.test.tsx/NewsCard.test.tsx
```typescript
import React from "react"
import { renderToString } from "react-dom/server"
import { describe, expect, it } from "vitest"
import { NewsCard } from "@ui/components/molecules/NewsCard"

const sampleNews = {
  id: "1",
  title: "Titulo de noticia",
  slug: "titulo-noticia",
  excerpt: "Extracto breve de la noticia",
  category: "Medio Ambiente",
  categoryColor: "#00aa00",
  author: { name: "Ana", avatar: "" },
  publishedAt: new Date().toISOString(),
  readingTimeMinutes: 3,
  featured: false,
  breaking: false,
}

describe("NewsCard", () => {
  it("renderiza titulo y extracto", () => {
    const html = renderToString(<NewsCard news={sampleNews} />)
    expect(html).toContain("Titulo de noticia")
    expect(html).toContain("Extracto breve")
  })
})
```

## File: __tests__/src/ui/molecules/NewsCategoryFilter.test.tsx/NewsCategoryFilter.test.tsx
```typescript
import React from "react"
import { renderToString } from "react-dom/server"
import { describe, expect, it } from "vitest"
import { NewsCategoryFilter } from "@ui/components/molecules/NewsCategoryFilter"

describe("NewsCategoryFilter", () => {
  it("muestra categorias", () => {
    const html = renderToString(
      <NewsCategoryFilter
        categories={[{ name: "Categoria", slug: "cat", color: "#000", count: 2 }]}
        activeCategory={null}
        onCategoryChange={() => {}}
      />,
    )
    expect(html).toContain("Categoria")
  })
})
```

## File: __tests__/src/ui/molecules/NewsSearchBar.test.tsx/NewsSearchBar.test.tsx
```typescript
import React from "react"
import { renderToString } from "react-dom/server"
import { describe, expect, it } from "vitest"
import { NewsSearchBar } from "@ui/components/molecules/NewsSearchBar"

describe("NewsSearchBar", () => {
  it("renderiza placeholder", () => {
    const html = renderToString(<NewsSearchBar onSearch={() => {}} placeholder="Buscar" />)
    expect(html).toContain("Buscar")
  })
})
```

## File: __tests__/src/ui/molecules/ParallaxImage.test.tsx/ParallaxImage.test.tsx
```typescript
import React from "react"
import { renderToString } from "react-dom/server"
import { describe, expect, it } from "vitest"
import { ParallaxImage } from "@ui/components/molecules/ParallaxImage"

describe("ParallaxImage", () => {
  it("renderiza con alt", () => {
    const html = renderToString(<ParallaxImage src="/placeholder.svg" alt="imagen" />)
    expect(html.toLowerCase()).toContain("imagen")
  })
})
```

## File: __tests__/src/ui/molecules/PartnerCard.test.tsx/PartnerCard.test.tsx
```typescript
import React from "react"
import { renderToString } from "react-dom/server"
import { describe, expect, it } from "vitest"
import { PartnerCard } from "@ui/components/molecules/PartnerCard"

describe("PartnerCard", () => {
  it("muestra nombre y categoria", () => {
    const html = renderToString(
      <PartnerCard
        name="EcoPartner"
        description="Socio sostenible"
        logo="/logo.png"
        website="https://example.com"
        category="Alianzas"
      />,
    )
    expect(html).toContain("EcoPartner")
    expect(html).toContain("Alianzas")
  })
})
```

## File: __tests__/src/ui/molecules/PostCard.test.tsx/PostCard.test.tsx
```typescript
import React from "react"
import { renderToString } from "react-dom/server"
import { describe, expect, it } from "vitest"
import { PostCard } from "@ui/components/molecules/PostCard"
import { PostDTO } from "@/app/src/ui/adapters/PostAdapter"

const post: PostDTO = {
  id: "p1",
  title: "Post titulo",
  slug: "post-titulo",
  excerpt: "Extracto de post",
  content: "contenido",
  author: { name: "Autor", bio: "bio", avatar: "", },
  categories: [{ name: "Cat", slug: "cat", color: "#111" }],
  tags: ["tag"],
  publishedAt: new Date().toISOString(),
  readingTimeMinutes: 5,
  featured: false,
}

describe("PostCard", () => {
  it("renderiza titulo y excerpt", () => {
    const html = renderToString(<PostCard post={post} />)
    expect(html).toContain("Post titulo")
    expect(html).toContain("Extracto de post")
  })
})
```

## File: __tests__/src/ui/molecules/TeamMemberCard.test.tsx/TeamMemberCard.test.tsx
```typescript
import React from "react"
import { renderToString } from "react-dom/server"
import { describe, expect, it } from "vitest"
import { TeamMemberCard } from "@ui/components/molecules/TeamMemberCard"

const member = {
  name: "Equipo",
  role: "Rol",
  bio: "Bio",
  image: "/foto.png",
  social: { twitter: "https://twitter.com", linkedin: "https://linkedin.com" },
}

describe("TeamMemberCard", () => {
  it("muestra nombre y rol", () => {
    const html = renderToString(<TeamMemberCard member={member} index={0} />)
    expect(html).toContain("Equipo")
    expect(html).toContain("Rol")
  })
})
```

## File: __tests__/src/ui/molecules/TimelineEvent.test.tsx/TimelineEvent.test.tsx
```typescript
import React from "react"
import { renderToString } from "react-dom/server"
import { describe, expect, it } from "vitest"
import { TimelineEvent } from "@ui/components/molecules/TimelineEvent"

describe("TimelineEvent", () => {
  it("renderiza titulo y fecha", () => {
    const html = renderToString(
      <TimelineEvent
        title="Hito"
        description="Descripcion"
        year="2024"
        index={0}
      />,
    )
    expect(html).toContain("Hito")
    expect(html).toContain("2024")
  })
})
```

## File: __tests__/src/ui/molecules/ValueCard.test.tsx/ValueCard.test.tsx
```typescript
import React from "react"
import { renderToString } from "react-dom/server"
import { describe, expect, it } from "vitest"
import { ValueCard } from "@ui/components/molecules/ValueCard"

describe("ValueCard", () => {
  it("muestra titulo y descripcion", () => {
    const html = renderToString(<ValueCard icon={<span>*</span>} title="Valor" description="Descripcion" index={0} />)
    expect(html).toContain("Valor")
    expect(html).toContain("Descripcion")
  })
})
```

## File: __tests__/src/ui/utils/Boundary.test.tsx/Boundary.test.tsx
```typescript
import React from "react"
import { renderToString } from "react-dom/server"
import { describe, expect, it } from "vitest"
import { Boundary } from "@ui/components/utils/Boundary"

describe("Boundary", () => {
  it("renderiza fallback cuando when es falso", () => {
    const html = renderToString(
      <Boundary when={false} fallback={<span>fallback</span>}>
        <span>child</span>
      </Boundary>,
    )
    expect(html).toContain("fallback")
    expect(html).not.toContain("child")
  })

  it("renderiza children cuando when es verdadero", () => {
    const html = renderToString(
      <Boundary when fallback={<span>fallback</span>}>
        <span>child</span>
      </Boundary>,
    )
    expect(html).toContain("child")
  })
})
```

## File: __tests__/src/ui/utils/List.test.tsx/List.test.tsx
```typescript
import React from "react"
import { renderToString } from "react-dom/server"
import { describe, expect, it, vi } from "vitest"
import { List } from "@ui/components/utils"

const Item = ({ item }: { item: { label: string }; index: number }) => <span>{item.label}</span>

describe("List", () => {
  it("renderiza cada elemento usando el componente Render", () => {
    const data = [{ label: "uno" }, { label: "dos" }]

    const html = renderToString(<List data={data} Render={Item} />)

    expect(html).toContain('role="list"')
    expect(html).toContain("uno")
    expect(html).toContain("dos")
  })

  it("usa getKey para asignar keys estables", () => {
    const data = [{ label: "a" }, { label: "b" }]
    const getKey = vi.fn((item: { label: string }) => item.label)

    renderToString(<List data={data} Render={Item} getKey={getKey} />)

    expect(getKey).toHaveBeenCalledTimes(2)
    expect(getKey).toHaveBeenCalledWith({ label: "a" }, 0)
    expect(getKey).toHaveBeenCalledWith({ label: "b" }, 1)
  })

  it("no renderiza nada cuando data esta vacio", () => {
    const html = renderToString(<List data={[]} Render={Item} />)

    expect(html).toBe("")
  })
})
```

## File: animations.css/animations.css
```css
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Clases utilitarias para fade-in animations */
.animate-fade-in-up {
  animation: fade-in-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) both;
}

.animate-fade-in {
  animation: fade-in 0.4s ease-out both;
}

/* Stagger delays para elementos de lista */
.animate-stagger-1 {
  animation-delay: 0.1s;
}

.animate-stagger-2 {
  animation-delay: 0.2s;
}

.animate-stagger-3 {
  animation-delay: 0.3s;
}

.animate-stagger-4 {
  animation-delay: 0.4s;
}

.animate-stagger-5 {
  animation-delay: 0.5s;
}

.animate-stagger-6 {
  animation-delay: 0.6s;
}

/* ============================================
   2. HOVER EFFECTS (Cards & Interactive)
   ============================================ */

.card-hover {
  transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.2s cubic-bezier(0.16, 1, 0.3, 1), border-color
    0.2s ease;
}

.card-hover:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
}

.card-hover:active {
  transform: translateY(-2px);
}

/* ============================================
   3. LINK UNDERLINE ANIMATION
   ============================================ */

.link-animated {
  position: relative;
  text-decoration: none;
  transition: color 0.2s ease;
}

.link-animated::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -2px;
  width: 0;
  height: 2px;
  background-color: currentColor;
  transition: width 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.link-animated:hover::after,
.link-animated:focus::after {
  width: 100%;
}

/* ============================================
   4. SKELETON LOADING
   ============================================ */

@keyframes skeleton-loading {
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
}

.skeleton {
  background: linear-gradient(90deg, hsl(var(--muted)) 0%, hsl(var(--muted) / 0.5) 50%, hsl(var(--muted)) 100%);
  background-size: 200% 100%;
  animation: skeleton-loading 1.5s ease-in-out infinite;
  border-radius: 0.375rem;
}

/* Skeleton variants */
.skeleton-text {
  height: 1rem;
  width: 100%;
  margin-bottom: 0.5rem;
}

.skeleton-title {
  height: 2rem;
  width: 80%;
  margin-bottom: 1rem;
}

.skeleton-card {
  height: 300px;
  width: 100%;
}

.skeleton-avatar {
  height: 3rem;
  width: 3rem;
  border-radius: 9999px;
}

/* ============================================
   5. PROGRESS & DIDACTIC ANIMATIONS
   ============================================ */

@keyframes progress-bar {
  from {
    transform: scaleX(0);
    transform-origin: left;
  }
  to {
    transform: scaleX(1);
    transform-origin: left;
  }
}

.progress-animated {
  animation: progress-bar 1s cubic-bezier(0.16, 1, 0.3, 1) both;
}

/* Reading progress indicator */
.reading-progress {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: hsl(var(--primary));
  transform-origin: left;
  z-index: 50;
}

/* Pulse para llamar atención (botones importantes) */
@keyframes pulse-subtle {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.8;
  }
}

.pulse-subtle {
  animation: pulse-subtle 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

/* ============================================
   6. INTERACTIVE FEEDBACK
   ============================================ */

.button-press {
  transition: transform 0.1s ease;
}

.button-press:active {
  transform: scale(0.97);
}

/* Ripple effect para buttons */
.button-ripple {
  position: relative;
  overflow: hidden;
}

.button-ripple::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  transform: translate(-50%, -50%);
  transition: width 0.6s, height 0.6s;
}

.button-ripple:active::before {
  width: 300px;
  height: 300px;
}

/* ============================================
   7. ACCESSIBILITY - RESPETO A REDUCED MOTION
   ============================================ */

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }

  /* Mantener solo transiciones de opacidad y color */
  .card-hover {
    transition: opacity 0.2s ease, color 0.2s ease;
  }

  .card-hover:hover {
    transform: none;
    opacity: 0.9;
  }

  .skeleton {
    animation: none;
    opacity: 0.6;
  }
}

/* ============================================
   8. VIEW TRANSITIONS API (Progressive Enhancement)
   ============================================ */

@supports (view-transition-name: none) {
  ::view-transition-old(root),
  ::view-transition-new(root) {
    animation-duration: 0.3s;
  }

  ::view-transition-old(root) {
    animation-name: fade-out;
  }

  ::view-transition-new(root) {
    animation-name: fade-in;
  }

  @keyframes fade-out {
    to {
      opacity: 0;
    }
  }
}

/* ============================================
   9. UTILITY CLASSES
   ============================================ */

.transition-smooth {
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.transition-fast {
  transition: all 0.15s ease;
}

.hover-lift:hover {
  transform: translateY(-2px);
}

.hover-scale:hover {
  transform: scale(1.02);
}

/* Focus visible para teclado */
.focus-ring:focus-visible {
  outline: 2px solid hsl(var(--primary));
  outline-offset: 2px;
}
```

## File: globals.css/globals.css
```css
@import "tailwindcss";
@import "tw-animate-css";

@custom-variant dark (&:is(.dark *));

/* Eco-friendly color palette with green sustainable theme */
:root {
  --background: oklch(0.99 0 0);
  --foreground: oklch(0.15 0 0);
  --card: oklch(1 0 0);
  --card-foreground: oklch(0.15 0 0);
  --popover: oklch(1 0 0);
  --popover-foreground: oklch(0.15 0 0);
  /* Primary: Sustainable green */
  --primary: oklch(0.55 0.18 145);
  --primary-foreground: oklch(0.99 0 0);
  --secondary: oklch(0.96 0 0);
  --secondary-foreground: oklch(0.15 0 0);
  --muted: oklch(0.96 0 0);
  --muted-foreground: oklch(0.5 0 0);
  --accent: oklch(0.96 0.02 145);
  --accent-foreground: oklch(0.15 0 0);
  --destructive: oklch(0.577 0.245 27.325);
  --destructive-foreground: oklch(0.99 0 0);
  --border: oklch(0.9 0 0);
  --input: oklch(0.9 0 0);
  --ring: oklch(0.55 0.18 145);
  --chart-1: oklch(0.55 0.18 145);
  --chart-2: oklch(0.65 0.2 200);
  --chart-3: oklch(0.7 0.15 80);
  --chart-4: oklch(0.6 0.22 25);
  --chart-5: oklch(0.5 0.16 280);
  --radius: 0.5rem;
  --sidebar: oklch(0.985 0 0);
  --sidebar-foreground: oklch(0.145 0 0);
  --sidebar-primary: oklch(0.55 0.18 145);
  --sidebar-primary-foreground: oklch(0.985 0 0);
  --sidebar-accent: oklch(0.97 0 0);
  --sidebar-accent-foreground: oklch(0.205 0 0);
  --sidebar-border: oklch(0.922 0 0);
  --sidebar-ring: oklch(0.708 0 0);
}

.dark {
  --background: oklch(0.12 0 0);
  --foreground: oklch(0.95 0 0);
  --card: oklch(0.15 0 0);
  --card-foreground: oklch(0.95 0 0);
  --popover: oklch(0.15 0 0);
  --popover-foreground: oklch(0.95 0 0);
  /* Primary: Lighter green for dark mode */
  --primary: oklch(0.65 0.18 145);
  --primary-foreground: oklch(0.12 0 0);
  --secondary: oklch(0.22 0 0);
  --secondary-foreground: oklch(0.95 0 0);
  --muted: oklch(0.22 0 0);
  --muted-foreground: oklch(0.65 0 0);
  --accent: oklch(0.25 0.02 145);
  --accent-foreground: oklch(0.95 0 0);
  --destructive: oklch(0.5 0.2 27.325);
  --destructive-foreground: oklch(0.95 0 0);
  --border: oklch(0.25 0 0);
  --input: oklch(0.25 0 0);
  --ring: oklch(0.65 0.18 145);
  --chart-1: oklch(0.65 0.18 145);
  --chart-2: oklch(0.7 0.2 200);
  --chart-3: oklch(0.75 0.15 80);
  --chart-4: oklch(0.65 0.22 25);
  --chart-5: oklch(0.6 0.16 280);
  --sidebar: oklch(0.18 0 0);
  --sidebar-foreground: oklch(0.95 0 0);
  --sidebar-primary: oklch(0.65 0.18 145);
  --sidebar-primary-foreground: oklch(0.95 0 0);
  --sidebar-accent: oklch(0.22 0 0);
  --sidebar-accent-foreground: oklch(0.95 0 0);
  --sidebar-border: oklch(0.25 0 0);
  --sidebar-ring: oklch(0.45 0 0);
}

@theme inline {
  --font-sans: "Geist", "Geist Fallback";
  --font-mono: "Geist Mono", "Geist Mono Fallback";
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);
  --color-popover: var(--popover);
  --color-popover-foreground: var(--popover-foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-secondary: var(--secondary);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);
  --color-destructive: var(--destructive);
  --color-destructive-foreground: var(--destructive-foreground);
  --color-border: var(--border);
  --color-input: var(--input);
  --color-ring: var(--ring);
  --color-chart-1: var(--chart-1);
  --color-chart-2: var(--chart-2);
  --color-chart-3: var(--chart-3);
  --color-chart-4: var(--chart-4);
  --color-chart-5: var(--chart-5);
  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);
  --color-sidebar: var(--sidebar);
  --color-sidebar-foreground: var(--sidebar-foreground);
  --color-sidebar-primary: var(--sidebar-primary);
  --color-sidebar-primary-foreground: var(--sidebar-primary-foreground);
  --color-sidebar-accent: var(--sidebar-accent);
  --color-sidebar-accent-foreground: var(--sidebar-accent-foreground);
  --color-sidebar-border: var(--sidebar-border);
  --color-sidebar-ring: var(--sidebar-ring);
}

@layer base {
  * {
    @apply border-border outline-ring/50;
  }
  body {
    @apply bg-background text-foreground;
  }

  /* Smooth dark mode transitions */
  html {
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  html.dark {
    color-scheme: dark;
  }

  /* Optimized for OLED screens in dark mode */
  .dark body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
}

/* Focus states for accessibility */
@layer components {
  .focus-ring {
    @apply focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background;
  }

  .focus-visible-ring {
    @apply focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background;
  }
}
```

## File: layout.tsx/layout.tsx
```typescript
import React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import "./animations.css"
import { GSAPProvider } from "./src/ui/components/GSAPProvider"
import { Navbar } from "./src/ui/components/Navbar"
import { Footer } from "./src/ui/components/Footer"


const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "MAC-IDAFE - Red Macaronesia de centros escolares par ala educación ambiental",
  description:
    "Aprende sobre sostenibilidad, cambio climático, biodiversidad y prácticas ecológicas. Contenido educativo de calidad sobre medio ambiente.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f9fafb" },
    { media: "(prefers-color-scheme: dark)", color: "#1e1e1e" },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="bg-background" suppressHydrationWarning>
      <body className={`font-sans antialiased`}>
        <GSAPProvider>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </GSAPProvider>
        <Analytics />
      </body>
    </html>
  )
}
```

## File: noticias/page.tsx/page.tsx
```typescript
"use client"
import React from "react"
import { useState, useEffect } from "react"
import { NewsRepositoryJSON } from "@infrastructure/repositories/NewsRepositoryJSON"
import { GetNews } from "@application/use-cases/GetNews"
import type { News as NewsEntity } from "@domain/entities/News"
import { BreakingNewsTicker } from "@ui/components/BreakingNewsTicker"
import { NewsHero } from "@ui/components/NewsHero"
import { NewsGrid } from "@ui/components/NewsGrid"
import { NewsSidebar } from "@ui/components/NewsSidebar"
import { Boundary } from "@/app/src/ui/components/utils/Boundary"
import { NewsCategoryFilter, NewsSearchBar } from "@ui/components/molecules"


// Initialize use case with repository
const newsRepository = new NewsRepositoryJSON()
const getNews = new GetNews(newsRepository)

type NewsView = ReturnType<NewsEntity["toJSON"]>

type CategorySummary = {
  name: string
  slug: string
  color: string
  count: number
}

type FilterParams = {
  categorySlug: string | null
  searchQuery: string
}

// Pure helpers keep filtering logic testable and separate from render concerns.
export function deriveFilteredNews(allNews: NewsView[], filters: FilterParams): NewsView[] {
  const { categorySlug, searchQuery } = filters
  let result = [...allNews]

  if (categorySlug) {
    result = result.filter((n) => n.categorySlug === categorySlug)
  }

  if (searchQuery) {
    const query = searchQuery.toLowerCase()
    result = result.filter(
      (n) =>
        n.title.toLowerCase().includes(query) ||
        n.excerpt.toLowerCase().includes(query) ||
        n.tags.some((tag: string) => tag.toLowerCase().includes(query)),
    )
  }

  return result
}

export function deriveCategories(allNews: NewsView[]): CategorySummary[] {
  return allNews.reduce<CategorySummary[]>((acc, news) => {
    const existing = acc.find((c) => c.slug === news.categorySlug)
    if (existing) {
      existing.count++
      return acc
    }

    acc.push({
      name: news.category,
      slug: news.categorySlug,
      color: news.categoryColor,
      count: 1,
    })
    return acc
  }, [])
}

export function derivePopularTags(allNews: NewsView[], limit = 10): string[] {
  return Array.from(new Set(allNews.flatMap((n) => n.tags))).slice(0, limit)
}

export default function NoticiasPage() {
  const [allNews, setAllNews] = useState<NewsView[]>([])
  const [filteredNews, setFilteredNews] = useState<NewsView[]>([])
  const [breakingNews, setBreakingNews] = useState<NewsView[]>([])
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function loadNews() {
      try {
        setLoading(true)
        setError(null)
        const news = await getNews.execute()
        const newsData = news.map((n) => n.toJSON())
        setAllNews(newsData)
        setFilteredNews(newsData)

        const breaking = await getNews.getBreaking()
        setBreakingNews(breaking.map((n) => n.toJSON()))
      } catch (err) {
        setError("No pudimos cargar las noticias. Intenta de nuevo.")
        setAllNews([])
        setFilteredNews([])
        setBreakingNews([])
      } finally {
        setLoading(false)
      }
    }
    loadNews()
  }, [])

  useEffect(() => {
    setFilteredNews(deriveFilteredNews(allNews, { categorySlug: activeCategory, searchQuery }))
  }, [activeCategory, searchQuery, allNews])

  // Extract unique categories with counts
  const categories = deriveCategories(allNews)

  // Extract popular tags
  const popularTags = derivePopularTags(allNews)

  return (
    <main className="min-h-screen bg-background">
      {/* Breaking News Ticker */}
      {breakingNews.length > 0 && <BreakingNewsTicker news={breakingNews} />}

      {/* Hero Section */}
      <NewsHero />

      {/* Main Content */}
      <div className="container mx-auto px-4 pb-20">
        {/* Search and Filters */}
        <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between mb-8">
          <NewsSearchBar onSearch={setSearchQuery} placeholder="Buscar por tema, titulo o etiqueta..." />
          <div className="w-full lg:w-auto overflow-x-auto pb-2 lg:pb-0">
            <NewsCategoryFilter
              categories={categories}
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
            />
          </div>
        </div>

        {/* Results count */}
        <Boundary
          when={!!activeCategory || !!searchQuery}
          fallback={<div className="mb-6">&nbsp;</div>}
        >
          <div className="mb-6 text-sm text-muted-foreground">
            {filteredNews.length} {filteredNews.length === 1 ? "resultado" : "resultados"}
            {activeCategory && ` en "${categories.find((c) => c.slug === activeCategory)?.name}"`}
            {searchQuery && ` para "${searchQuery}"`}
          </div>
        </Boundary>

        {/* Main Grid + Sidebar */}
        <div className="grid lg:grid-cols-[1fr_320px] gap-8">
          {/* News Grid */}
          <Boundary
            when={!loading}
            fallback={
              <div className="text-center py-20" role="status" aria-live="polite">
                <div className="text-6xl mb-4" aria-hidden="true">
                  ⏳
                </div>
                <h3 className="text-xl font-bold mb-2">Cargando noticias</h3>
                <p className="text-muted-foreground">Espera un momento mientras obtenemos las últimas novedades.</p>
              </div>
            }
          >
            <Boundary
              when={!error}
              fallback={
                <div className="text-center py-20" role="alert" aria-live="assertive">
                  <div className="text-6xl mb-4" aria-hidden="true">
                    ⚠️
                  </div>
                  <h3 className="text-xl font-bold mb-2">No se pudieron cargar las noticias</h3>
                  <p className="text-muted-foreground">{error}</p>
                </div>
              }
            >
              <Boundary
                when={filteredNews.length > 0}
                fallback={
                  <div className="text-center py-20">
                    <div className="text-6xl mb-4" aria-hidden="true">
                      🔍
                    </div>
                    <h3 className="text-xl font-bold mb-2">No se encontraron noticias</h3>
                    <p className="text-muted-foreground">Intenta con otros terminos de busqueda o categorias.</p>
                  </div>
                }
              >
                <NewsGrid news={filteredNews} showFeatured={!activeCategory && !searchQuery} />
              </Boundary>
            </Boundary>
          </Boundary>

          {/* Sidebar */}
          <NewsSidebar recentNews={allNews.slice(0, 5)} popularTags={popularTags} />
        </div>
      </div>
    </main>
  )
}
```

## File: page.tsx/page.tsx
```typescript
import { GetPosts } from "@application/use-cases/GetPosts"
import { PostRepositoryJSON } from "@infrastructure/repositories/PostRepositoryJSON"
import { PostAdapter } from "@ui/adapters/PostAdapter"
import { CategoriesSection } from "@ui/components/molecules/Section/Categories"
import { FeaturedPostsSection } from "@ui/components/molecules/Section/FeaturedPosts"
import { HeroSection } from "@ui/components/molecules/Section/Hero"
import { PartnersSection } from "@ui/components/molecules/Section/Partners"
import { RecentPostsSection } from "@ui/components/RecentPostsSection"
import { ScrollProgressSections } from "@ui/components/ScrollProgressSections"
import { StatsSection } from "@ui/components/molecules/Section/Stats"


export const metadata = {
  title: "MAC-IDAFE - Red Macaronesia de centros escolares par ala educación ambiental",
  description:
    "Aprende sobre sostenibilidad, cambio climático, biodiversidad y prácticas ecológicas. Contenido educativo de calidad sobre medio ambiente.",
}

const sections = [
  { id: "hero", title: "Inicio" },
  { id: "stats", title: "Estadísticas" },
  { id: "featured", title: "Destacados" },
  { id: "categories", title: "Categorías" },
  { id: "recent", title: "Recientes" },
  { id: "partners", title: "Partners" },
]

export default async function HomePage() {
  // Dependency Injection
  const postRepository = new PostRepositoryJSON()
  const getPosts = new GetPosts(postRepository)

  // Execute use case
  const posts = await getPosts.execute()
  const featuredPosts = posts.filter((p) => p.isFeatured)
  const recentPosts = posts.slice(0, 6)

  // Adapt to DTOs for UI
  const featuredDTOs = PostAdapter.toDTOList(featuredPosts)
  const recentDTOs = PostAdapter.toDTOList(recentPosts)

  return (
    <div className="min-h-screen bg-background">
      <ScrollProgressSections sections={sections} />

      <HeroSection />
      <section id="stats">
        <StatsSection />
      </section>
      <section id="featured">
        <FeaturedPostsSection posts={featuredDTOs} />
      </section>
      <section id="categories">
        <CategoriesSection />
      </section>
      <section id="recent">
        <RecentPostsSection posts={recentDTOs} />
      </section>
      <section id="partners">
        <PartnersSection />
      </section>
    </div>
  )
}
```

## File: posts/[slug]/page.tsx/page.tsx
```typescript
import { notFound } from "next/navigation"
import Link from "next/link"
import { PostRepositoryJSON } from "@infrastructure/repositories/PostRepositoryJSON"
import { GetPostBySlug } from "@application/use-cases/GetPostBySlug"
import { PostAdapter } from "@ui/adapters/PostAdapter"
import { ReadingProgress } from "@ui/components/ReadingProgress"

interface PostPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata({ params }: PostPageProps) {
  const { slug } = await params
  const postRepository = new PostRepositoryJSON()
  const getPostBySlug = new GetPostBySlug(postRepository)
  const post = await getPostBySlug.execute(slug)

  if (!post) {
    return {
      title: "Artículo no encontrado",
    }
  }

  return {
    title: `${post.title} | MAC-IDAFE`,
    description: post.excerpt,
  }
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params

  // Dependency Injection
  const postRepository = new PostRepositoryJSON()
  const getPostBySlug = new GetPostBySlug(postRepository)

  // Execute use case
  const post = await getPostBySlug.execute(slug)

  if (!post) {
    notFound()
  }

  // Adapt to DTO for UI
  const postDTO = PostAdapter.toDTO(post)

  const publishedDate = new Date(postDTO.publishedAt).toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <div className="min-h-screen bg-background">
      <ReadingProgress />

      {/* Navigation */}
      <nav className="border-b border-border bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors link-animated focus-ring"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Volver al inicio
          </Link>
        </div>
      </nav>

      {/* Article */}
      {/* Add fade-in animation to article */}
      <article className="max-w-4xl mx-auto px-4 py-12 animate-fade-in">
        {/* Header */}
        <header className="mb-8">
          {postDTO.featured && (
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4">
              ⭐ Artículo Destacado
            </span>
          )}

          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">{postDTO.title}</h1>

          <p className="text-xl text-muted-foreground mb-6 text-pretty">{postDTO.excerpt}</p>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 pb-6 border-b border-border">
            <div className="flex items-center gap-3">
              {postDTO.author.avatar && (
                <img
                  src={postDTO.author.avatar || "/placeholder.svg"}
                  alt={postDTO.author.name}
                  className="w-12 h-12 rounded-full"
                />
              )}
              <div>
                <div className="font-medium text-foreground">{postDTO.author.name}</div>
                <div className="text-sm text-muted-foreground">{postDTO.author.bio}</div>
              </div>
            </div>
            <span className="text-muted-foreground">•</span>
            <time dateTime={postDTO.publishedAt} className="text-muted-foreground">
              {publishedDate}
            </time>
            <span className="text-muted-foreground">•</span>
            <span className="text-muted-foreground">{postDTO.readingTimeMinutes} min lectura</span>
          </div>

          {/* Categories & Tags */}
          {/* Add hover effects to category links */}
          <div className="flex flex-wrap gap-3 mt-6">
            {postDTO.categories.map((category) => (
              <Link
                key={category.slug}
                href={`/category/${category.slug}`}
                className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium border transition-smooth hover-lift focus-ring"
                style={{
                  backgroundColor: category.color ? `${category.color}15` : undefined,
                  borderColor: category.color || "var(--border)",
                  color: category.color || "var(--foreground)",
                }}
              >
                {category.icon && <span>{category.icon}</span>}
                {category.name}
              </Link>
            ))}
          </div>
        </header>

        {/* Content */}
        <div className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-foreground prose-a:text-primary prose-strong:text-foreground prose-ul:text-foreground prose-ol:text-foreground">
          <div
            dangerouslySetInnerHTML={{
              __html: postDTO.content.replace(/\n/g, "<br />"),
            }}
          />
        </div>

        {/* Tags */}
        {postDTO.tags.length > 0 && (
          <div className="mt-12 pt-8 border-t border-border">
            <h3 className="text-sm font-medium text-muted-foreground mb-3">Etiquetas:</h3>
            {/* Add hover effects to tags */}
            <div className="flex flex-wrap gap-2">
              {postDTO.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-sm rounded-full bg-muted text-muted-foreground transition-smooth hover-scale"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </article>
    </div>
  )
}
```

## File: sobre-nosotros/page.tsx/page.tsx
```typescript
import { TextReveal } from "@/app/src/ui/components/atoms/Text/Reveal"
import { GradientText } from "@/app/src/ui/components/atoms/Text/Gradient"
import { MagneticButton } from "@/app/src/ui/components/atoms/MagneticButton"
import { Counter } from "@/app/src/ui/components/atoms/Counter"
import { ScrollStorySection } from "@ui/components/ScrollStorySection"
import { AnimatedSection } from "@/app/src/ui/components/molecules/Section/Animated"
import { ParallaxImage, TeamMemberCard, TimelineEvent, ValueCard } from "@ui/components/molecules"


export const metadata = {
  title: "Sobre Nosotros - MAC-IDAFE",
  description:
    "Conoce al equipo detrás de MAC-IDAFE, nuestra misión de educación ambiental y cómo trabajamos por un futuro sostenible.",
}

const teamMembers = [
  {
    name: "María García",
    role: "Fundadora y Directora Editorial",
    bio: "Bióloga marina con 15 años de experiencia en conservación. Apasionada por comunicar la ciencia de forma accesible.",
    image: "/professional-woman-environmental-scientist-portrai.jpg",
    social: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    name: "Carlos Ruiz",
    role: "Editor de Cambio Climático",
    bio: "Periodista ambiental y autor de tres libros sobre sostenibilidad. Especialista en políticas climáticas internacionales.",
    image: "/professional-man-journalist-portrait-outdoors.jpg",
    social: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    name: "Ana Torres",
    role: "Especialista en Biodiversidad",
    bio: "Ecóloga con doctorado en conservación de ecosistemas. Ha trabajado en proyectos en 12 países de Latinoamérica.",
    image: "/professional-woman-ecologist-portrait-nature.jpg",
    social: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    name: "Diego Mendoza",
    role: "Director de Tecnología Sostenible",
    bio: "Ingeniero ambiental especializado en energías renovables y tecnologías limpias para el desarrollo sostenible.",
    image: "/professional-man-engineer-renewable-energy-portrai.jpg",
    social: {
      linkedin: "https://linkedin.com",
    },
  },
]

const timelineEvents = [
  {
    year: "2019",
    title: "El Inicio del Sueño Verde",
    description:
      "MAC-IDAFE nace como un pequeño proyecto personal de María García, con solo 5 artículos sobre conservación marina.",
  },
  {
    year: "2020",
    title: "Crecimiento Orgánico",
    description: "Alcanzamos 10,000 lectores mensuales. Se une Carlos Ruiz como primer colaborador oficial del equipo.",
  },
  {
    year: "2021",
    title: "Expansión del Equipo",
    description: "Formamos un equipo de 4 expertos. Lanzamos nuestra primera serie educativa sobre cambio climático.",
  },
  {
    year: "2022",
    title: "Reconocimiento Internacional",
    description:
      "Premio al Mejor Blog de Educación Ambiental. Colaboraciones con WWF y Greenpeace para contenido exclusivo.",
  },
  {
    year: "2023",
    title: "Impacto Global",
    description:
      "Superamos 1 millón de lectores. Lanzamos programa de educación para escuelas en 5 países hispanohablantes.",
  },
  {
    year: "2024",
    title: "Nueva Era Digital",
    description:
      "Rediseño completo con tecnología eco-friendly. Compromiso carbono neutral y servidor alimentado por renovables.",
  },
]

const values = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
        />
      </svg>
    ),
    title: "Transparencia",
    description:
      "Citamos todas nuestras fuentes y mantenemos independencia editorial. La verdad científica guía nuestro trabajo.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
        />
      </svg>
    ),
    title: "Educación",
    description: "Creemos que el conocimiento es poder. Simplificamos conceptos complejos sin perder rigor científico.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
        />
      </svg>
    ),
    title: "Pasión",
    description:
      "Amamos nuestro planeta y esa pasión se refleja en cada artículo. Escribimos desde el corazón y la experiencia.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
        />
      </svg>
    ),
    title: "Comunidad",
    description:
      "Construimos una comunidad global de personas comprometidas con el medio ambiente. Juntos somos más fuertes.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
        />
      </svg>
    ),
    title: "Acción",
    description:
      "No solo informamos, inspiramos a actuar. Cada artículo incluye pasos concretos para generar cambio real.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
        />
      </svg>
    ),
    title: "Sostenibilidad",
    description:
      "Practicamos lo que predicamos. Nuestro sitio usa servidores verdes y minimizamos nuestra huella digital.",
  },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ParallaxImage src="/aerial-view-green-forest-with-river-sustainable-na.jpg" alt="Bosque verde vista aérea" className="w-full h-full" />
          <div className="absolute inset-0 bg-linear-to-b from-background/80 via-background/60 to-background" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <AnimatedSection animation="fade">
            <span className="inline-block px-4 py-2 mb-6 text-sm font-medium bg-primary/10 text-primary rounded-full">
              Nuestra Historia
            </span>
          </AnimatedSection>

          <TextReveal
            text="Educando para un Futuro"
            as="h1"
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4"
            revealType="words"
          />

          <div className="mb-8">
            <GradientText text="Más Sostenible" as="span" className="text-4xl md:text-6xl lg:text-7xl font-bold" />
          </div>

          <AnimatedSection animation="fade">
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground leading-relaxed">
              Somos un equipo de científicos, periodistas y apasionados del medio ambiente comprometidos con
              democratizar el conocimiento ambiental.
            </p>
          </AnimatedSection>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Mission Section */}
      <ScrollStorySection className="py-24 bg-card/50" revealDirection="up">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <TextReveal
                text="Nuestra Misión"
                as="h2"
                className="text-3xl md:text-4xl font-bold text-foreground mb-6"
                revealType="words"
              />
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  En MAC-IDAFE creemos que la educación ambiental es la herramienta más poderosa para transformar nuestra
                  relación con el planeta. Nuestro objetivo es hacer que la ciencia del medio ambiente sea accesible,
                  interesante y, sobre todo,
                  <strong className="text-foreground"> accionable</strong>.
                </p>
                <p>
                  Cada día, millones de personas buscan entender cómo sus acciones impactan el medio ambiente. Nosotros
                  respondemos esas preguntas con información verificada, libre de alarmismo innecesario pero sin
                  minimizar la urgencia de la acción climática.
                </p>
                <p>
                  No vendemos miedo, <strong className="text-foreground">vendemos esperanza informada</strong>. Porque
                  creemos que cuando las personas entienden los problemas, también pueden ser parte de las soluciones.
                </p>
              </div>
            </div>
            <div className="relative">
              <ParallaxImage
                src="/team-planting-trees-environmental-volunteers.jpg"
                alt="Equipo plantando árboles"
                className="rounded-2xl overflow-hidden aspect-4/3"
              />
            </div>
          </div>
        </div>
      </ScrollStorySection>

      {/* Stats Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <Counter value={1200000} suffix="+" label="Lectores anuales" />
            <Counter value={850} suffix="+" label="Artículos publicados" />
            <Counter value={25} suffix="" label="Países alcanzados" />
            <Counter value={50} suffix="+" label="Escuelas aliadas" />
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <TextReveal
              text="Nuestros Valores"
              as="h2"
              className="text-3xl md:text-4xl font-bold text-foreground mb-4"
              revealType="words"
            />
            <p className="max-w-2xl mx-auto text-muted-foreground">
              Los principios que guían cada decisión editorial y cada interacción con nuestra comunidad.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <ValueCard
                key={value.title}
                icon={value.icon}
                title={value.title}
                description={value.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <TextReveal
              text="Nuestra Historia"
              as="h2"
              className="text-3xl md:text-4xl font-bold text-foreground mb-4"
              revealType="words"
            />
            <p className="max-w-2xl mx-auto text-muted-foreground">
              De un pequeño blog a una plataforma de educación ambiental con impacto global.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto space-y-12">
            {timelineEvents.map((event, index) => (
              <TimelineEvent
                key={event.year}
                year={event.year}
                title={event.title}
                description={event.description}
                index={index}
                isLast={index === timelineEvents.length - 1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <TextReveal
              text="Conoce al Equipo"
              as="h2"
              className="text-3xl md:text-4xl font-bold text-foreground mb-4"
              revealType="words"
            />
            <p className="max-w-2xl mx-auto text-muted-foreground">
              Expertos apasionados que trabajan cada día para traerte el mejor contenido ambiental.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <TeamMemberCard key={member.name} member={member} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <ScrollStorySection className="py-24 bg-primary/5" revealDirection="up">
        <div className="container mx-auto px-4 text-center">
          <TextReveal
            text="Únete a la Comunidad"
            as="h2"
            className="text-3xl md:text-4xl font-bold text-foreground mb-6"
            revealType="words"
          />
          <p className="max-w-2xl mx-auto text-muted-foreground mb-8">
            Suscríbete a nuestro newsletter y recibe cada semana las mejores noticias, artículos educativos y consejos
            prácticos para vivir de forma más sostenible.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <MagneticButton
              as="a"
              href="/noticias"
              className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors"
            >
              Explorar Noticias
            </MagneticButton>
            <MagneticButton
              as="a"
              href="mailto:contacto@ecoblog.com"
              className="px-8 py-4 bg-card text-foreground border border-border rounded-full font-medium hover:bg-card/80 transition-colors"
            >
              Contactar
            </MagneticButton>
          </div>
        </div>
      </ScrollStorySection>
    </main>
  )
}
```

## File: src/application/ports/NewsRepository.ts/NewsRepository.ts
```typescript
import type { News } from "@domain/entities/News"

export interface NewsFilters {
  category?: string
  featured?: boolean
  breaking?: boolean
  search?: string
}

export interface NewsRepository {
  findAll(filters?: NewsFilters): Promise<News[]>
  findBySlug(slug: string): Promise<News | null>
  findFeatured(limit?: number): Promise<News[]>
  findBreaking(): Promise<News[]>
  findRecent(limit?: number): Promise<News[]>
}
```

## File: src/application/ports/PostRepository.ts/PostRepository.ts
```typescript
import type { Post } from "@domain/entities/Post"

export interface PostFilters {
  category?: string
  tag?: string
  author?: string
  featured?: boolean
  search?: string
}

export interface PostRepository {
  findAll(filters?: PostFilters): Promise<Post[]>
  findBySlug(slug: string): Promise<Post | null>
  findById(id: string): Promise<Post | null>
  findFeatured(limit?: number): Promise<Post[]>
  findRecent(limit?: number): Promise<Post[]>
  search(query: string): Promise<Post[]>
}
```

## File: src/application/use-cases/GetNews.ts/GetNews.ts
```typescript
import type { NewsRepository, NewsFilters } from "@application/ports/NewsRepository"
import type { News } from "@domain/entities/News"

export class GetNews {
  constructor(private repository: NewsRepository) {}

  async execute(filters?: NewsFilters): Promise<News[]> {
    return this.repository.findAll(filters)
  }

  async getFeatured(limit?: number): Promise<News[]> {
    return this.repository.findFeatured(limit)
  }

  async getBreaking(): Promise<News[]> {
    return this.repository.findBreaking()
  }

  async getRecent(limit?: number): Promise<News[]> {
    return this.repository.findRecent(limit)
  }

  async getBySlug(slug: string): Promise<News | null> {
    return this.repository.findBySlug(slug)
  }
}
```

## File: src/application/use-cases/GetPostBySlug.ts/GetPostBySlug.ts
```typescript
import type { Post } from "@domain/entities/Post"
import type { PostRepository } from "@application/ports/PostRepository"

export class GetPostBySlug {
  constructor(private postRepository: PostRepository) {}

  async execute(slug: string): Promise<Post | null> {
    if (!slug || slug.trim().length === 0) {
      throw new Error("El slug es requerido")
    }

    const post = await this.postRepository.findBySlug(slug)

    if (!post) {
      return null
    }

    // Business logic: solo retornar si está publicado
    if (!post.isPublished()) {
      return null
    }

    return post
  }
}
```

## File: src/application/use-cases/GetPosts.ts/GetPosts.ts
```typescript
import type { Post } from "@domain/entities/Post"
import type { PostRepository, PostFilters } from "@application/ports/PostRepository"

export class GetPosts {
  constructor(private postRepository: PostRepository) {}

  async execute(filters?: PostFilters): Promise<Post[]> {
    const posts = await this.postRepository.findAll(filters)

    // Business logic: solo retornar posts publicados
    const publishedPosts = posts.filter((post) => post.isPublished())

    // Ordenar por fecha de publicación (más recientes primero)
    return publishedPosts.sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime())
  }
}
```

## File: src/application/use-cases/SearchPosts.ts/SearchPosts.ts
```typescript
import type { Post } from "@domain/entities/Post"
import type { PostRepository } from "@application/ports/PostRepository"

export class SearchPosts {
  constructor(private postRepository: PostRepository) {}

  async execute(query: string): Promise<Post[]> {
    if (!query || query.trim().length < 2) {
      return []
    }

    const normalizedQuery = query.trim().toLowerCase()
    const results = await this.postRepository.search(normalizedQuery)

    // Business logic: filtrar publicados y ordenar por relevancia
    const publishedResults = results.filter((post) => post.isPublished())

    // Priorizar posts featured en resultados
    return publishedResults.sort((a, b) => {
      if (a.isFeatured && !b.isFeatured) return -1
      if (!a.isFeatured && b.isFeatured) return 1
      return b.publishedAt.getTime() - a.publishedAt.getTime()
    })
  }
}
```

## File: src/domain/entities/Author.ts/Author.ts
```typescript
export interface AuthorProps {
  id: string
  name: string
  bio: string
  avatar?: string
  email: string
}

export class Author {
  private constructor(private props: AuthorProps) {
    this.validate()
  }

  static create(props: AuthorProps): Author {
    return new Author(props)
  }

  private validate(): void {
    if (!this.props.name || this.props.name.length < 2) {
      throw new Error("El nombre del autor debe tener al menos 2 caracteres")
    }

    if (!this.isValidEmail(this.props.email)) {
      throw new Error("Email inválido")
    }
  }

  private isValidEmail(email: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  get id(): string {
    return this.props.id
  }

  get name(): string {
    return this.props.name
  }

  get bio(): string {
    return this.props.bio
  }

  get avatar(): string | undefined {
    return this.props.avatar
  }

  get email(): string {
    return this.props.email
  }

  toJSON() {
    return {
      id: this.props.id,
      name: this.props.name,
      bio: this.props.bio,
      avatar: this.props.avatar,
      email: this.props.email,
    }
  }
}
```

## File: src/domain/entities/Category.ts/Category.ts
```typescript
export interface CategoryProps {
  id: string
  name: string
  slug: string
  description: string
  icon?: string
  color?: string
}

export class Category {
  private constructor(private props: CategoryProps) {
    this.validate()
  }

  static create(props: CategoryProps): Category {
    return new Category(props)
  }

  private validate(): void {
    if (!this.props.name || this.props.name.length < 2) {
      throw new Error("El nombre de la categoría debe tener al menos 2 caracteres")
    }

    if (!this.props.slug || !/^[a-z0-9-]+$/.test(this.props.slug)) {
      throw new Error("El slug debe contener solo letras minúsculas, números y guiones")
    }
  }

  get id(): string {
    return this.props.id
  }

  get name(): string {
    return this.props.name
  }

  get slug(): string {
    return this.props.slug
  }

  get description(): string {
    return this.props.description
  }

  get icon(): string | undefined {
    return this.props.icon
  }

  get color(): string | undefined {
    return this.props.color
  }

  toJSON() {
    return {
      id: this.props.id,
      name: this.props.name,
      slug: this.props.slug,
      description: this.props.description,
      icon: this.props.icon,
      color: this.props.color,
    }
  }
}
```

## File: src/domain/entities/News.ts/News.ts
```typescript
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
```

## File: src/domain/entities/Post.ts/Post.ts
```typescript
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
```

## File: src/domain/value-objects/Slug.ts/Slug.ts
```typescript
export class Slug {
  private readonly _value: string

  private constructor(value: string) {
    this._value = this.normalize(value)
    this.validate()
  }

  static create(value: string): Slug {
    return new Slug(value)
  }

  static fromTitle(title: string): Slug {
    const normalized = title
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "") // Remove accents
      .replace(/[^a-z0-9\s-]/g, "") // Remove special chars
      .trim()
      .replace(/\s+/g, "-") // Replace spaces with hyphens
      .replace(/-+/g, "-") // Remove duplicate hyphens

    return new Slug(normalized)
  }

  private normalize(value: string): string {
    return value.toLowerCase().trim()
  }

  private validate(): void {
    if (!this._value || this._value.length < 3) {
      throw new Error("El slug debe tener al menos 3 caracteres")
    }

    if (!/^[a-z0-9-]+$/.test(this._value)) {
      throw new Error("El slug solo puede contener letras minúsculas, números y guiones")
    }

    if (this._value.startsWith("-") || this._value.endsWith("-")) {
      throw new Error("El slug no puede empezar ni terminar con guión")
    }
  }

  get value(): string {
    return this._value
  }

  equals(other: Slug): boolean {
    return this._value === other._value
  }

  toString(): string {
    return this._value
  }
}
```

## File: src/infrastructure/data/news.json/news.json
```json
[
  {
    "id": "news-1",
    "title": "COP29: Histórico acuerdo para triplicar energías renovables",
    "slug": "cop29-acuerdo-triplicar-renovables",
    "excerpt": "Los líderes mundiales alcanzan un compromiso sin precedentes para acelerar la transición energética global hacia fuentes limpias.",
    "content": "# COP29: Histórico acuerdo para triplicar energías renovables\n\nEn una decisión histórica, los 196 países participantes en la COP29 han acordado triplicar la capacidad global de energías renovables para 2030.\n\n## Puntos clave del acuerdo\n\n1. **Triplicar renovables**: De 3.400 GW actuales a 10.200 GW\n2. **Duplicar eficiencia**: Mejorar la eficiencia energética al doble del ritmo actual\n3. **Financiación**: $300 mil millones anuales para países en desarrollo\n\n## Reacciones internacionales\n\nEl acuerdo ha sido celebrado por organizaciones ambientales, aunque algunas señalan que los plazos deberían ser más ambiciosos.",
    "author": {
      "id": "author-1",
      "name": "María García",
      "bio": "Especialista en política climática internacional",
      "avatar": "/placeholder.svg?height=80&width=80",
      "email": "maria.garcia@ecoblog.example"
    },
    "category": "Política Ambiental",
    "categorySlug": "politica-ambiental",
    "categoryColor": "#3b82f6",
    "tags": ["COP29", "renovables", "acuerdo climático"],
    "publishedAt": "2024-12-15T08:00:00Z",
    "readingTimeMinutes": 4,
    "featured": true,
    "breaking": true
  },
  {
    "id": "news-2",
    "title": "Amazon: Nuevo récord de deforestación detenida en Brasil",
    "slug": "amazon-record-deforestacion-detenida",
    "excerpt": "Las políticas de protección del gobierno brasileño logran reducir la deforestación en un 45% respecto al año anterior.",
    "content": "# Amazon: Nuevo récord de deforestación detenida en Brasil\n\nEl gobierno de Brasil ha anunciado que la deforestación en la Amazonía ha caído un 45% en comparación con el año anterior.\n\n## Medidas implementadas\n\n- Refuerzo de la vigilancia satelital\n- Mayor presencia de agentes ambientales\n- Multas más severas a infractores\n- Programas de desarrollo sostenible\n\n## Impacto esperado\n\nSe estima que esta reducción evitará la emisión de 150 millones de toneladas de CO2.",
    "author": {
      "id": "author-3",
      "name": "Ana López",
      "bio": "Corresponsal ambiental en Sudamérica",
      "avatar": "/placeholder.svg?height=80&width=80",
      "email": "ana.lopez@ecoblog.example"
    },
    "category": "Conservación",
    "categorySlug": "conservacion",
    "categoryColor": "#10b981",
    "tags": ["amazonas", "deforestación", "brasil"],
    "publishedAt": "2024-12-14T14:30:00Z",
    "readingTimeMinutes": 5,
    "featured": true,
    "breaking": false
  },
  {
    "id": "news-3",
    "title": "Tesla presenta batería solar con 30 años de vida útil",
    "slug": "tesla-bateria-solar-30-anos",
    "excerpt": "La nueva tecnología de almacenamiento promete revolucionar la energía doméstica con una durabilidad sin precedentes.",
    "content": "# Tesla presenta batería solar con 30 años de vida útil\n\nTesla ha revelado su nueva generación de baterías Powerwall con una vida útil garantizada de 30 años.\n\n## Especificaciones técnicas\n\n- **Capacidad**: 20 kWh\n- **Eficiencia**: 98%\n- **Garantía**: 30 años\n- **Precio**: 40% menor que la generación anterior\n\n## Disponibilidad\n\nLas primeras unidades llegarán al mercado europeo en el primer trimestre de 2025.",
    "author": {
      "id": "author-2",
      "name": "Carlos Martínez",
      "bio": "Editor de tecnología limpia",
      "avatar": "/placeholder.svg?height=80&width=80",
      "email": "carlos.martinez@ecoblog.example"
    },
    "category": "Tecnología Verde",
    "categorySlug": "tecnologia-verde",
    "categoryColor": "#f59e0b",
    "tags": ["tesla", "baterías", "energía solar"],
    "publishedAt": "2024-12-13T10:00:00Z",
    "readingTimeMinutes": 3,
    "featured": false,
    "breaking": false
  },
  {
    "id": "news-4",
    "title": "ONU declara 2025 como Año Internacional del Océano",
    "slug": "onu-2025-ano-internacional-oceano",
    "excerpt": "La iniciativa busca movilizar recursos y conciencia global para proteger los ecosistemas marinos amenazados.",
    "content": "# ONU declara 2025 como Año Internacional del Océano\n\nLa Asamblea General de las Naciones Unidas ha designado 2025 como el Año Internacional del Océano.\n\n## Objetivos principales\n\n1. Reducir la contaminación plástica marina en un 50%\n2. Proteger el 30% de los océanos como áreas marinas protegidas\n3. Restaurar ecosistemas de arrecifes de coral\n4. Implementar prácticas de pesca sostenible\n\n## Eventos programados\n\nSe celebrarán cumbres en Lisboa, Tokio y Ciudad del Cabo durante todo el año.",
    "author": {
      "id": "author-3",
      "name": "Ana López",
      "bio": "Bióloga marina y periodista ambiental",
      "avatar": "/placeholder.svg?height=80&width=80",
      "email": "ana.lopez@ecoblog.example"
    },
    "category": "Océanos",
    "categorySlug": "oceanos",
    "categoryColor": "#06b6d4",
    "tags": ["océanos", "ONU", "conservación marina"],
    "publishedAt": "2024-12-12T16:00:00Z",
    "readingTimeMinutes": 4,
    "featured": true,
    "breaking": false
  },
  {
    "id": "news-5",
    "title": "Europa aprueba ley para prohibir microplásticos en cosméticos",
    "slug": "europa-prohibe-microplasticos-cosmeticos",
    "excerpt": "La nueva regulación entrará en vigor en 2025 y eliminará 500.000 toneladas de microplásticos anuales.",
    "content": "# Europa aprueba ley para prohibir microplásticos en cosméticos\n\nLa Unión Europea ha aprobado una legislación histórica que prohíbe los microplásticos añadidos intencionalmente en productos cosméticos.\n\n## Alcance de la prohibición\n\n- Exfoliantes faciales y corporales\n- Pastas de dientes\n- Geles de ducha\n- Productos de maquillaje\n- Protectores solares\n\n## Impacto estimado\n\nSe previene la liberación de más de 500.000 toneladas de microplásticos al medio ambiente cada año.",
    "author": {
      "id": "author-1",
      "name": "María García",
      "bio": "Especialista en política ambiental europea",
      "avatar": "/placeholder.svg?height=80&width=80",
      "email": "maria.garcia@ecoblog.example"
    },
    "category": "Legislación",
    "categorySlug": "legislacion",
    "categoryColor": "#8b5cf6",
    "tags": ["microplásticos", "europa", "cosméticos"],
    "publishedAt": "2024-12-11T09:00:00Z",
    "readingTimeMinutes": 3,
    "featured": false,
    "breaking": false
  },
  {
    "id": "news-6",
    "title": "Científicos descubren nueva especie de coral resistente al calor",
    "slug": "nueva-especie-coral-resistente-calor",
    "excerpt": "El hallazgo en aguas del Pacífico abre esperanzas para la restauración de arrecifes afectados por el cambio climático.",
    "content": "# Científicos descubren nueva especie de coral resistente al calor\n\nUn equipo internacional de biólogos marinos ha identificado una nueva especie de coral con resistencia natural al blanqueamiento térmico.\n\n## Características únicas\n\n- Tolera temperaturas hasta 2°C superiores a otras especies\n- Mantiene simbiosis con algas incluso bajo estrés térmico\n- Recuperación rápida tras eventos de calor extremo\n\n## Aplicaciones potenciales\n\nLos investigadores planean utilizar los genes de esta especie para desarrollar programas de restauración de arrecifes.",
    "author": {
      "id": "author-3",
      "name": "Ana López",
      "bio": "Bióloga marina especializada en corales",
      "avatar": "/placeholder.svg?height=80&width=80",
      "email": "ana.lopez@ecoblog.example"
    },
    "category": "Ciencia",
    "categorySlug": "ciencia",
    "categoryColor": "#ec4899",
    "tags": ["corales", "biodiversidad", "investigación"],
    "publishedAt": "2024-12-10T11:30:00Z",
    "readingTimeMinutes": 5,
    "featured": false,
    "breaking": false
  }
]
```

## File: src/infrastructure/data/posts.json/posts.json
```json
[
  {
    "id": "1",
    "title": "Cambio Climático: Entendiendo la Crisis Global",
    "slug": "cambio-climatico-crisis-global",
    "excerpt": "Una introducción completa al cambio climático, sus causas, efectos y qué podemos hacer para mitigar su impacto en nuestro planeta.",
    "content": "# Cambio Climático: Entendiendo la Crisis Global\n\nEl cambio climático es uno de los desafíos más urgentes que enfrenta la humanidad. Las temperaturas globales han aumentado aproximadamente 1.1°C desde la era preindustrial, principalmente debido a las emisiones de gases de efecto invernadero.\n\n## Causas Principales\n\n1. **Combustibles fósiles**: La quema de carbón, petróleo y gas natural libera CO2 a la atmósfera\n2. **Deforestación**: La pérdida de bosques reduce la capacidad del planeta para absorber CO2\n3. **Agricultura intensiva**: Las prácticas agrícolas modernas generan metano y óxido nitroso\n\n## Efectos Observados\n\n- Aumento del nivel del mar\n- Eventos climáticos extremos más frecuentes\n- Pérdida de biodiversidad\n- Cambios en patrones de precipitación\n\n## Qué Podemos Hacer\n\nCada persona puede contribuir a la solución:\n\n- Reducir el consumo de energía\n- Usar transporte sostenible\n- Consumir productos locales y de temporada\n- Apoyar políticas climáticas progresistas\n\nLa acción colectiva es fundamental para enfrentar este desafío global.",
    "author": {
      "id": "author-1",
      "name": "María García",
      "bio": "Especialista en cambio climático y sostenibilidad ambiental",
      "avatar": "/placeholder.svg?height=80&width=80",
      "email": "maria.garcia@ecoblog.example"
    },
    "categories": [
      {
        "id": "cat-1",
        "name": "Cambio Climático",
        "slug": "cambio-climatico",
        "description": "Artículos sobre el calentamiento global y sus efectos",
        "icon": "🌡️",
        "color": "#ef4444"
      }
    ],
    "tags": ["clima", "sostenibilidad", "medio ambiente"],
    "publishedAt": "2024-01-15T10:00:00Z",
    "readingTimeMinutes": 5,
    "featured": true
  },
  {
    "id": "2",
    "title": "Guía Completa de Reciclaje en el Hogar",
    "slug": "guia-reciclaje-hogar",
    "excerpt": "Aprende a reciclar correctamente en casa con esta guía práctica que te ayudará a reducir tu huella ambiental.",
    "content": "# Guía Completa de Reciclaje en el Hogar\n\nEl reciclaje es una de las formas más accesibles de contribuir a la protección del medio ambiente. Sin embargo, es importante hacerlo correctamente para que sea efectivo.\n\n## Tipos de Materiales Reciclables\n\n### Plásticos\n- **PET (1)**: Botellas de agua y refrescos\n- **HDPE (2)**: Envases de detergente y champú\n- **PP (5)**: Tapas y contenedores de comida\n\n### Papel y Cartón\n- Periódicos y revistas\n- Cajas de cartón (deben estar limpias y secas)\n- Papel de oficina\n\n### Vidrio\n- Botellas y frascos\n- Debe separarse por color en algunos municipios\n\n### Metales\n- Latas de aluminio\n- Latas de conservas\n\n## Consejos Prácticos\n\n1. **Limpia los envases**: Asegúrate de que estén vacíos y enjuagados\n2. **Separa correctamente**: Usa contenedores diferentes para cada material\n3. **Reduce el volumen**: Aplasta botellas y cajas para ahorrar espacio\n4. **Conoce tu sistema local**: Las normas varían según la localidad\n\n## Más Allá del Reciclaje\n\nRecuerda la regla de las 3R: **Reducir**, **Reutilizar** y **Reciclar**, en ese orden de prioridad.\n\nEl mejor residuo es el que no se genera.",
    "author": {
      "id": "author-2",
      "name": "Carlos Martínez",
      "bio": "Educador ambiental con 10 años de experiencia",
      "avatar": "/placeholder.svg?height=80&width=80",
      "email": "carlos.martinez@ecoblog.example"
    },
    "categories": [
      {
        "id": "cat-2",
        "name": "Reciclaje",
        "slug": "reciclaje",
        "description": "Todo sobre reciclaje y gestión de residuos",
        "icon": "♻️",
        "color": "#10b981"
      }
    ],
    "tags": ["reciclaje", "residuos", "hogar sostenible"],
    "publishedAt": "2024-01-20T14:30:00Z",
    "readingTimeMinutes": 7,
    "featured": true
  },
  {
    "id": "3",
    "title": "Energías Renovables: El Futuro es Ahora",
    "slug": "energias-renovables-futuro",
    "excerpt": "Descubre cómo las energías renovables están transformando el panorama energético mundial y cómo puedes aprovecharlas.",
    "content": "# Energías Renovables: El Futuro es Ahora\n\nLa transición hacia energías limpias es fundamental para combatir el cambio climático y garantizar un futuro sostenible.\n\n## Tipos de Energías Renovables\n\n### Energía Solar\nLa energía del sol se captura mediante paneles fotovoltaicos o sistemas térmicos. Es la fuente de energía renovable que más rápido crece.\n\n**Ventajas:**\n- Abundante y accesible\n- Costos decrecientes\n- Mantenimiento mínimo\n\n### Energía Eólica\nGenerada por la fuerza del viento a través de aerogeneradores.\n\n**Ventajas:**\n- Muy eficiente\n- No genera emisiones\n- Uso múltiple del terreno\n\n### Energía Hidroeléctrica\nAprovecha la energía del agua en movimiento.\n\n### Biomasa\nUtiliza materia orgánica para generar energía.\n\n## Energías Renovables en Casa\n\nPuedes aprovechar las renovables en tu hogar:\n\n1. **Paneles solares**: Para electricidad o agua caliente\n2. **Aerogeneradores pequeños**: En zonas con viento constante\n3. **Biomasa**: Estufas de pellets\n\n## El Impacto Global\n\nLas renovables representan ya más del 30% de la capacidad eléctrica mundial y siguen creciendo exponencialmente.\n\nLa combinación de políticas públicas, innovación tecnológica y conciencia ciudadana está acelerando esta transformación necesaria.",
    "author": {
      "id": "author-1",
      "name": "María García",
      "bio": "Especialista en cambio climático y sostenibilidad ambiental",
      "avatar": "/placeholder.svg?height=80&width=80",
      "email": "maria.garcia@ecoblog.example"
    },
    "categories": [
      {
        "id": "cat-3",
        "name": "Energía",
        "slug": "energia",
        "description": "Energías renovables y eficiencia energética",
        "icon": "⚡",
        "color": "#f59e0b"
      }
    ],
    "tags": ["energía solar", "renovables", "sostenibilidad"],
    "publishedAt": "2024-01-25T09:00:00Z",
    "readingTimeMinutes": 6,
    "featured": false
  },
  {
    "id": "4",
    "title": "Biodiversidad: Por Qué Cada Especie Importa",
    "slug": "biodiversidad-cada-especie-importa",
    "excerpt": "La biodiversidad es esencial para el equilibrio de los ecosistemas. Aprende por qué debemos proteger cada forma de vida.",
    "content": "# Biodiversidad: Por Qué Cada Especie Importa\n\nLa biodiversidad es la variedad de vida en la Tierra, y cada especie juega un papel crucial en el equilibrio de los ecosistemas.\n\n## ¿Qué es la Biodiversidad?\n\nComprende tres niveles:\n\n1. **Diversidad genética**: Variación dentro de las especies\n2. **Diversidad de especies**: Variedad de organismos\n3. **Diversidad de ecosistemas**: Variedad de hábitats\n\n## Por Qué es Importante\n\n### Servicios Ecosistémicos\n- **Polinización**: Las abejas polinizan el 75% de los cultivos\n- **Purificación del agua**: Los humedales filtran contaminantes\n- **Control de plagas**: Los depredadores naturales mantienen el equilibrio\n- **Captura de carbono**: Los bosques absorben CO2\n\n### Valor Intrínseco\nCada especie tiene derecho a existir, independientemente de su utilidad para los humanos.\n\n## Amenazas Actuales\n\n- Pérdida de hábitat\n- Cambio climático\n- Contaminación\n- Especies invasoras\n- Sobreexplotación\n\n## Cómo Proteger la Biodiversidad\n\n1. **Crea hábitats**: Jardines con plantas nativas\n2. **Reduce pesticidas**: Opta por control biológico\n3. **Consume responsable**: Apoya productos sostenibles\n4. **Educa**: Comparte conocimiento sobre la importancia de la biodiversidad\n\n## Un Futuro Biodiverso\n\nProteger la biodiversidad no es solo una cuestión ambiental, es fundamental para nuestra supervivencia y bienestar.",
    "author": {
      "id": "author-3",
      "name": "Ana López",
      "bio": "Bióloga especializada en conservación de especies",
      "avatar": "/placeholder.svg?height=80&width=80",
      "email": "ana.lopez@ecoblog.example"
    },
    "categories": [
      {
        "id": "cat-4",
        "name": "Biodiversidad",
        "slug": "biodiversidad",
        "description": "Conservación de especies y ecosistemas",
        "icon": "🦋",
        "color": "#8b5cf6"
      }
    ],
    "tags": ["biodiversidad", "conservación", "ecosistemas"],
    "publishedAt": "2024-02-01T11:00:00Z",
    "readingTimeMinutes": 8,
    "featured": true
  }
]
```

## File: src/infrastructure/repositories/NewsRepositoryJSON.ts/NewsRepositoryJSON.ts
```typescript
import type { NewsRepository, NewsFilters } from "@application/ports/NewsRepository"
import { News } from "@domain/entities/News"
import newsData from "@infrastructure/data/news.json"

export class NewsRepositoryJSON implements NewsRepository {
  private news: News[]

  constructor() {
    this.news = newsData.map((item) =>
      News.create({
        ...item,
        publishedAt: new Date(item.publishedAt),
      }),
    )
  }

  async findAll(filters?: NewsFilters): Promise<News[]> {
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

  async findBySlug(slug: string): Promise<News | null> {
    return this.news.find((n) => n.slug === slug) || null
  }

  async findFeatured(limit = 4): Promise<News[]> {
    return this.news
      .filter((n) => n.isFeatured)
      .sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime())
      .slice(0, limit)
  }

  async findBreaking(): Promise<News[]> {
    return this.news.filter((n) => n.isBreaking)
  }

  async findRecent(limit = 6): Promise<News[]> {
    const sortedNews = [...this.news].sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime())
    return sortedNews.slice(0, limit)
  }
}
```

## File: src/infrastructure/repositories/PostRepositoryJSON.ts/PostRepositoryJSON.ts
```typescript
import { Post } from "@domain/entities/Post"
import { Author } from "@domain/entities/Author"
import { Category } from "@domain/entities/Category"
import { Slug } from "@domain/value-objects/Slug"
import type { PostRepository, PostFilters } from "@application/ports/PostRepository"
import postsData from "@infrastructure/data/posts.json"

export class PostRepositoryJSON implements PostRepository {
  private posts: Post[]

  constructor() {
    this.posts = this.loadPosts()
  }

  private loadPosts(): Post[] {
    return postsData.map((data) => {
      const author = Author.create({
        id: data.author.id,
        name: data.author.name,
        bio: data.author.bio,
        avatar: data.author.avatar,
        email: data.author.email,
      })

      const categories = data.categories.map((cat) =>
        Category.create({
          id: cat.id,
          name: cat.name,
          slug: cat.slug,
          description: cat.description,
          icon: cat.icon,
          color: cat.color,
        }),
      )

      return Post.create({
        id: data.id,
        title: data.title,
        slug: Slug.create(data.slug),
        content: data.content,
        excerpt: data.excerpt,
        author,
        categories,
        tags: data.tags,
        publishedAt: new Date(data.publishedAt),
        updatedAt: undefined,
        readingTimeMinutes: data.readingTimeMinutes,
        featured: data.featured,
      })
    })
  }

  async findAll(filters?: PostFilters): Promise<Post[]> {
    let result = [...this.posts]

    if (filters?.category) {
      result = result.filter((post) => post.hasCategory(filters.category!))
    }

    if (filters?.tag) {
      result = result.filter((post) => post.hasTag(filters.tag!))
    }

    if (filters?.featured !== undefined) {
      result = result.filter((post) => post.isFeatured === filters.featured)
    }

    if (filters?.search) {
      result = result.filter((post) => post.matchesSearchQuery(filters.search!))
    }

    return result
  }

  async findBySlug(slug: string): Promise<Post | null> {
    const post = this.posts.find((p) => p.slug.value === slug)
    return post || null
  }

  async findById(id: string): Promise<Post | null> {
    const post = this.posts.find((p) => p.id === id)
    return post || null
  }

  async findFeatured(limit = 3): Promise<Post[]> {
    return this.posts.filter((post) => post.isFeatured).slice(0, limit)
  }

  async findRecent(limit = 5): Promise<Post[]> {
    const sortedPosts = [...this.posts].sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime())
    return sortedPosts.slice(0, limit)
  }

  async search(query: string): Promise<Post[]> {
    return this.posts.filter((post) => post.matchesSearchQuery(query))
  }
}
```

## File: src/ui/adapters/PostAdapter.ts/PostAdapter.ts
```typescript
import type { Post } from "@domain/entities/Post"
import type { Category } from "@domain/entities/Category"

export interface PostDTO {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  author: {
    name: string
    avatar?: string
    bio: string
  }
  categories: CategoryDTO[]
  tags: string[]
  publishedAt: string
  readingTimeMinutes: number
  featured: boolean
}

export interface CategoryDTO {
  name: string
  slug: string
  icon?: string
  color?: string
}

export class PostAdapter {
  static toDTO(post: Post): PostDTO {
    return {
      id: post.id,
      title: post.title,
      slug: post.slug.value,
      excerpt: post.excerpt,
      content: post.content,
      author: {
        name: post.author.name,
        avatar: post.author.avatar,
        bio: post.author.bio,
      },
      categories: post.categories.map((cat) => this.categoryToDTO(cat)),
      tags: post.tags,
      publishedAt: post.publishedAt.toISOString(),
      readingTimeMinutes: post.readingTimeMinutes,
      featured: post.isFeatured,
    }
  }

  static toDTOList(posts: Post[]): PostDTO[] {
    return posts.map((post) => this.toDTO(post))
  }

  private static categoryToDTO(category: Category): CategoryDTO {
    return {
      name: category.name,
      slug: category.slug,
      icon: category.icon,
      color: category.color,
    }
  }
}
```

## File: src/ui/components/atoms/Counter/index.tsx/index.tsx
```typescript
"use client"

import { useCountUp } from "../../../hooks/useGSAP"

interface CounterProps {
  value: number
  suffix?: string
  duration?: number
  className?: string
  label: string
}

export function Counter({ value, suffix = "", duration = 2, className = "", label }: CounterProps) {
  const { ref } = useCountUp(value, duration, suffix)

  return (
    <div className={`text-center ${className}`}>
      <span
        ref={ref}
        className="block text-4xl md:text-5xl font-bold text-primary"
        aria-label={`${value}${suffix} ${label}`}
      >
        0{suffix}
      </span>
      <span className="block mt-2 text-sm md:text-base text-muted-foreground">{label}</span>
    </div>
  )
}
```

## File: src/ui/components/atoms/DarkModeToggle.tsx/DarkModeToggle.tsx
```typescript
"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"

export function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false)
  const [mounted, setMounted] = useState(false)
  const toggleRef = useRef<HTMLButtonElement>(null)
  const sunRef = useRef<SVGSVGElement>(null)
  const moonRef = useRef<SVGSVGElement>(null)

  // Initialize theme from system preference or localStorage
  useEffect(() => {
    setMounted(true)
    const saved = localStorage.getItem("theme")
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches

    if (saved === "dark" || (!saved && prefersDark)) {
      setIsDark(true)
      document.documentElement.classList.add("dark")
    }
  }, [])

  // Animate toggle and update theme
  const toggleTheme = () => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const newIsDark = !isDark

    if (!prefersReducedMotion) {
      // Animate icons
      const tl = gsap.timeline()

      if (newIsDark) {
        tl.to(sunRef.current, { scale: 0, rotate: -90, opacity: 0, duration: 0.3 }).to(
          moonRef.current,
          { scale: 1, rotate: 0, opacity: 1, duration: 0.3 },
          "-=0.1",
        )
      } else {
        tl.to(moonRef.current, { scale: 0, rotate: 90, opacity: 0, duration: 0.3 }).to(
          sunRef.current,
          { scale: 1, rotate: 0, opacity: 1, duration: 0.3 },
          "-=0.1",
        )
      }

      // Animate page transition
      gsap.to("body", {
        opacity: 0.95,
        duration: 0.15,
        yoyo: true,
        repeat: 1,
      })
    }

    setIsDark(newIsDark)
    localStorage.setItem("theme", newIsDark ? "dark" : "light")

    if (newIsDark) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }

  if (!mounted) return null

  return (
    <button
      ref={toggleRef}
      onClick={toggleTheme}
      className="relative w-12 h-12 rounded-full bg-secondary hover:bg-accent flex items-center justify-center transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-ring"
      aria-label={isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
    >
      {/* Sun icon */}
      <svg
        ref={sunRef}
        className="absolute w-6 h-6 text-amber-500"
        style={{ opacity: isDark ? 0 : 1, transform: isDark ? "scale(0) rotate(-90deg)" : "scale(1) rotate(0)" }}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <circle cx="12" cy="12" r="5" />
        <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
      </svg>
      {/* Moon icon */}
      <svg
        ref={moonRef}
        className="absolute w-6 h-6 text-blue-400"
        style={{ opacity: isDark ? 1 : 0, transform: isDark ? "scale(1) rotate(0)" : "scale(0) rotate(90deg)" }}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
      </svg>
    </button>
  )
}
```

## File: src/ui/components/atoms/index.ts/index.ts
```typescript
export * from "./DarkModeToggle"
export * from "./MagneticButton"
export * from "./RippleEffect"
export * from "./Text"
export * from "./SkeletonCard"
```

## File: src/ui/components/atoms/MagneticButton.tsx/MagneticButton.tsx
```typescript
"use client"

import React from "react"
import { useRef, type ReactNode, type MouseEvent } from "react"
import { gsap } from "gsap"

interface MagneticButtonProps {
  children: ReactNode
  className?: string
  strength?: number
  onClick?: () => void
  href?: string
  as?: "button" | "a"
}

export function MagneticButton({
  children,
  className = "",
  strength = 0.3,
  onClick,
  href,
  as = "button",
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLButtonElement | HTMLAnchorElement>(null)
  const contentRef = useRef<HTMLSpanElement>(null)

  const handleMouseMove = (e: MouseEvent) => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion) return

    const button = buttonRef.current
    const content = contentRef.current
    if (!button || !content) return

    const rect = button.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2

    gsap.to(button, {
      x: x * strength,
      y: y * strength,
      duration: 0.3,
      ease: "power2.out",
    })

    gsap.to(content, {
      x: x * strength * 0.5,
      y: y * strength * 0.5,
      duration: 0.3,
      ease: "power2.out",
    })
  }

  const handleMouseLeave = () => {
    const button = buttonRef.current
    const content = contentRef.current
    if (!button || !content) return

    gsap.to([button, content], {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: "elastic.out(1, 0.3)",
    })
  }

  const Component = as === "a" ? "a" : "button"

  return (
    <Component
      ref={buttonRef as any}
      className={`relative inline-flex items-center justify-center overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      href={href}
    >
      <span ref={contentRef} className="relative z-10">
        {children}
      </span>
    </Component>
  )
}
```

## File: src/ui/components/atoms/RippleEffect.tsx/RippleEffect.tsx
```typescript
"use client"

import React from "react"
import { useRef, useState, type MouseEvent, type ReactNode } from "react"

interface RippleEffectProps {
  children: ReactNode
  className?: string
  color?: string
}

interface Ripple {
  x: number
  y: number
  size: number
  id: number
}

export function RippleEffect({ children, className = "", color = "rgba(255, 255, 255, 0.3)" }: RippleEffectProps) {
  const [ripples, setRipples] = useState<Ripple[]>([])
  const containerRef = useRef<HTMLDivElement>(null)
  const nextId = useRef(0)

  const handleClick = (e: MouseEvent) => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion) return

    const container = containerRef.current
    if (!container) return

    const rect = container.getBoundingClientRect()
    const size = Math.max(rect.width, rect.height) * 2
    const x = e.clientX - rect.left - size / 2
    const y = e.clientY - rect.top - size / 2

    const newRipple: Ripple = { x, y, size, id: nextId.current++ }
    setRipples((prev) => [...prev, newRipple])

    // Remove ripple after animation
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== newRipple.id))
    }, 600)
  }

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`} onClick={handleClick}>
      {children}
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="absolute rounded-full animate-ripple pointer-events-none"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: ripple.size,
            height: ripple.size,
            backgroundColor: color,
          }}
        />
      ))}
      <style jsx>{`
        @keyframes ripple {
          0% {
            transform: scale(0);
            opacity: 1;
          }
          100% {
            transform: scale(1);
            opacity: 0;
          }
        }
        .animate-ripple {
          animation: ripple 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  )
}
```

## File: src/ui/components/atoms/SkeletonCard.tsx/SkeletonCard.tsx
```typescript
import React from "react"
export function SkeletonCard() {
  return (
    <div className="bg-card rounded-lg border border-border overflow-hidden p-6">
      {/* Title */}
      <div className="skeleton skeleton-title" aria-hidden="true" />

      {/* Categories */}
      <div className="flex gap-2 mb-4">
        <div className="skeleton h-6 w-20" aria-hidden="true" />
        <div className="skeleton h-6 w-24" aria-hidden="true" />
      </div>

      {/* Excerpt */}
      <div className="space-y-2 mb-4">
        <div className="skeleton skeleton-text" aria-hidden="true" />
        <div className="skeleton skeleton-text" aria-hidden="true" />
        <div className="skeleton skeleton-text w-3/4" aria-hidden="true" />
      </div>

      {/* Footer */}
      <div className="flex items-center gap-3">
        <div className="skeleton skeleton-avatar" aria-hidden="true" />
        <div className="skeleton h-4 w-32" aria-hidden="true" />
      </div>

      <span className="sr-only">Cargando artículo...</span>
    </div>
  )
}

export function SkeletonGrid({ count = 6 }: { count?: number }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: count }, (_, i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  )
}
```

## File: src/ui/components/atoms/Text/Animated.tsx/Animated.tsx
```typescript
"use client"

import React from "react"
import { useTextReveal } from "../../../hooks/useGSAP"

interface AnimatedTextProps {
  children: string
  as?: "h1" | "h2" | "h3" | "p" | "span"
  className?: string
}

export function AnimatedText({ children, as: Tag = "p", className = "" }: AnimatedTextProps) {
  const ref = useTextReveal<HTMLElement>()

  return (
    <Tag ref={ref as any} className={className}>
      {children}
    </Tag>
  )
}
```

## File: src/ui/components/atoms/Text/Gradient.tsx/Gradient.tsx
```typescript
"use client"
import React from "react"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"

interface GradientTextProps {
  text: string
  className?: string
  as?: "h1" | "h2" | "h3" | "p" | "span"
  colors?: string[]
  animationDuration?: number
}

export function GradientText({
  text,
  className = "",
  as: Component = "span",
  colors = ["var(--primary)", "#10b981", "#06b6d4", "var(--primary)"],
  animationDuration = 5,
}: GradientTextProps) {
  const textRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion) return

    const element = textRef.current
    if (!element) return

    // Animate gradient position
    gsap.to(element, {
      backgroundPosition: "200% center",
      duration: animationDuration,
      ease: "none",
      repeat: -1,
    })
  }, [animationDuration])

  const gradientStyle = {
    backgroundImage: `linear-gradient(90deg, ${colors.join(", ")})`,
    backgroundSize: "200% auto",
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    color: "transparent",
  }

  return (
    <Component ref={textRef as any} className={className} style={gradientStyle}>
      {text}
    </Component>
  )
}
```

## File: src/ui/components/atoms/Text/index.ts/index.ts
```typescript
export * from './Animated';
export * from './Gradient';
export * from './Reveal';
```

## File: src/ui/components/atoms/Text/Reveal.tsx/Reveal.tsx
```typescript
"use client"
import React from "react"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

interface TextRevealProps {
  text: string
  className?: string
  as?: "h1" | "h2" | "h3" | "p" | "span"
  revealType?: "words" | "chars" | "lines"
  staggerDelay?: number
}

export function TextReveal({
  text,
  className = "",
  as: Component = "p",
  revealType = "words",
  staggerDelay = 0.05,
}: TextRevealProps) {
  const containerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion) return

    const container = containerRef.current
    if (!container) return

    const ctx = gsap.context(() => {
      const elements = container.querySelectorAll(".reveal-item")

      gsap.fromTo(
        elements,
        {
          opacity: 0,
          y: 30,
          rotateX: -90,
        },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 0.8,
          stagger: staggerDelay,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: container,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        },
      )
    }, container)

    return () => ctx.revert()
  }, [staggerDelay])

  // Split text based on revealType
  const splitText = () => {
    if (revealType === "chars") {
      return text.split("").map((char, i) => (
        <span key={i} className="reveal-item inline-block" style={{ perspective: "1000px" }}>
          {char === " " ? "\u00A0" : char}
        </span>
      ))
    }

    if (revealType === "words") {
      return text.split(" ").map((word, i) => (
        <span key={i} className="reveal-item inline-block mr-[0.25em]" style={{ perspective: "1000px" }}>
          {word}
        </span>
      ))
    }

    // lines
    return text.split("\n").map((line, i) => (
      <span key={i} className="reveal-item block" style={{ perspective: "1000px" }}>
        {line}
      </span>
    ))
  }

  return (
    <Component ref={containerRef as any} className={`overflow-hidden ${className}`}>
      {splitText()}
    </Component>
  )
}
```

## File: src/ui/components/BreakingNewsTicker.tsx/BreakingNewsTicker.tsx
```typescript
"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import Link from "next/link"
import { List } from "./utils"

interface BreakingNews {
  id: string
  title: string
  slug: string
}

interface BreakingNewsTickerProps {
  news: BreakingNews[]
}

export function BreakingNewsTicker({ news }: BreakingNewsTickerProps) {
  const tickerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion || !contentRef.current) return

    const content = contentRef.current
    const contentWidth = content.scrollWidth

    gsap.to(content, {
      x: -contentWidth / 2,
      duration: 30,
      ease: "none",
      repeat: -1,
    })
  }, [news])

  if (news.length === 0) return null

  // Duplicate content for seamless loop
  const duplicatedNews = [...news, ...news]

  return (
    <div ref={tickerRef} className="relative overflow-hidden bg-destructive text-destructive-foreground py-2">
      <div className="flex items-center">
        <div className="shrink-0 px-4 font-bold text-sm flex items-center gap-2 border-r border-destructive-foreground/30 bg-destructive h-full">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
          </span>
          ÚLTIMA HORA
        </div>

        <div ref={contentRef} className="flex items-center whitespace-nowrap">
          <List
            data={duplicatedNews}
            Render={ ({item, index}:{item: BreakingNews, index:number}) => (
              <Link key={`${item.id}-${index}`} href={`/noticias/${item.slug}`} className="px-8 text-sm hover:underline">
                {item.title}
              </Link>
            )}
          />
        </div>
      </div>
    </div>
  )
}
```

## File: src/ui/components/Footer.tsx/Footer.tsx
```typescript
import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-lg font-semibold">
              <svg
                className="size-8 text-primary"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor" opacity="0.3" />
                <path
                  d="M2 17L12 22L22 17"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2 12L12 17L22 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>MAC-IDAFE</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Educación ambiental para un futuro sostenible. Juntos construimos un planeta más verde.
            </p>
            {/* Social media */}
            <div className="flex gap-4">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <svg className="size-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <svg className="size-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <svg className="size-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3-.882-.344-1.857-.048-1.055-.058-1.37-.058-4.041v-.468c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="size-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Navegación</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors nav-link"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  href="/noticias"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors nav-link"
                >
                  Noticias
                </Link>
              </li>
              <li>
                <Link
                  href="/categorias"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors nav-link"
                >
                  Categorías
                </Link>
              </li>
              <li>
                <Link
                  href="/sobre-nosotros"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors nav-link"
                >
                  Sobre Nosotros
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Recursos</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/guias"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors nav-link"
                >
                  Guías Educativas
                </Link>
              </li>
              <li>
                <Link
                  href="/glosario"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors nav-link"
                >
                  Glosario Ambiental
                </Link>
              </li>
              <li>
                <Link
                  href="/newsletter"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors nav-link"
                >
                  Newsletter
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors nav-link"
                >
                  Preguntas Frecuentes
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/privacidad"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors nav-link"
                >
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link
                  href="/terminos"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors nav-link"
                >
                  Términos de Uso
                </Link>
              </li>
              <li>
                <Link
                  href="/cookies"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors nav-link"
                >
                  Política de Cookies
                </Link>
              </li>
              <li>
                <Link
                  href="/contacto"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors nav-link"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-border pt-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} EcoBlog. Todos los derechos reservados.
            </p>
            <p className="text-sm text-muted-foreground">
              Construido con{" "}
              <span className="text-primary" aria-label="amor">
                ♥
              </span>{" "}
              por el planeta
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
```

## File: src/ui/components/GSAPProvider.tsx/GSAPProvider.tsx
```typescript
"use client"

import { useEffect, useRef, type ReactNode } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

interface GSAPProviderProps {
  children: ReactNode
}

export function GSAPProvider({ children }: GSAPProviderProps) {
  const initialized = useRef(false)

  useEffect(() => {
    if (initialized.current) return
    initialized.current = true

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    if (prefersReducedMotion) {
      // Disable all GSAP animations for users who prefer reduced motion
      gsap.globalTimeline.timeScale(0)
      return
    }

    // Set GSAP defaults for smooth animations
    gsap.defaults({
      ease: "power3.out",
      duration: 0.8,
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return <>{children}</>
}
```

## File: src/ui/components/molecules/index.ts/index.ts
```typescript
export { NewsCard } from "./NewsCard"
export { NewsCategoryFilter } from "./NewsCategoryFilter"
export { NewsSearchBar } from "./NewsSearchBar"
export { ParallaxImage } from "./ParallaxImage"
export { PartnerCard } from "./PartnerCard"
export { PostCard } from "./PostCard"
export { ValueCard } from "./ValueCard"
export { TimelineEvent } from "./TimelineEvent"
export { TeamMemberCard } from "./TeamMemberCard"
```

## File: src/ui/components/molecules/NewsCard.tsx/NewsCard.tsx
```typescript
"use client"
import React from "react"
import Link from "next/link"
import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { Boundary } from "../utils"

interface NewsCardProps {
  news: {
    id: string
    title: string
    slug: string
    excerpt: string
    category: string
    categoryColor: string
    author: { name: string; avatar?: string }
    publishedAt: string
    readingTimeMinutes: number
    featured: boolean
    breaking: boolean
  }
  index?: number
  variant?: "default" | "featured" | "compact"
}

export function NewsCard({ news, index = 0, variant = "default" }: NewsCardProps) {
  const cardRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion) return

    const card = cardRef.current
    if (!card) return

    // 3D tilt effect on hover
    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const centerX = rect.width / 2
      const centerY = rect.height / 2
      const rotateX = (y - centerY) / 20
      const rotateY = (centerX - x) / 20

      gsap.to(card, {
        rotateX: rotateX,
        rotateY: rotateY,
        duration: 0.3,
        ease: "power2.out",
        transformPerspective: 1000,
      })
    }

    const handleMouseLeave = () => {
      gsap.to(card, {
        rotateX: 0,
        rotateY: 0,
        duration: 0.5,
        ease: "elastic.out(1, 0.5)",
      })
    }

    card.addEventListener("mousemove", handleMouseMove)
    card.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      card.removeEventListener("mousemove", handleMouseMove)
      card.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  const publishedDate = new Date(news.publishedAt).toLocaleDateString("es-ES", {
    day: "numeric",
    month: "short",
    year: "numeric",
  })

  const timeAgo = getTimeAgo(new Date(news.publishedAt))

  if (variant === "featured") {
    return (
      <article
        ref={cardRef}
        className="group relative overflow-hidden rounded-2xl bg-card border border-border h-full min-h-100 flex flex-col"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Image placeholder */}
        <div className="relative h-48 overflow-hidden bg-linear-to-br from-primary/20 to-accent/20">
          <div className="absolute inset-0 opacity-20" style={{ backgroundColor: news.categoryColor }} />
          <Boundary
            when={news.breaking}
            fallback={null}
          >
            <div className="absolute top-4 left-4 px-3 py-1 bg-destructive text-destructive-foreground text-xs font-bold rounded-full animate-pulse">
              ÚLTIMA HORA
            </div>
          </Boundary>
          <div className="absolute bottom-4 left-4">
            <span
              className="px-3 py-1 rounded-full text-xs font-medium text-white"
              style={{ backgroundColor: news.categoryColor }}
            >
              {news.category}
            </span>
          </div>
        </div>

        <div className="flex-1 p-6 flex flex-col">
          <Link href={`/noticias/${news.slug}`} className="group/link flex-1">
            <h3 className="text-xl font-bold text-foreground mb-3 group-hover/link:text-primary transition-colors line-clamp-2 text-balance">
              {news.title}
            </h3>
            <p className="text-muted-foreground text-sm line-clamp-3 mb-4">{news.excerpt}</p>
          </Link>

          <div className="flex items-center justify-between text-xs text-muted-foreground mt-auto pt-4 border-t border-border">
            <div className="flex items-center gap-2">
              <img
                src={news.author.avatar || "/placeholder.svg?height=24&width=24"}
                alt={news.author.name}
                className="w-6 h-6 rounded-full"
              />
              <span>{news.author.name}</span>
            </div>
            <div className="flex items-center gap-3">
              <span>{timeAgo}</span>
              <span className="text-primary">{news.readingTimeMinutes} min</span>
            </div>
          </div>
        </div>
      </article>
    )
  }

  if (variant === "compact") {
    return (
      <article className="group flex gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors">
        <div className="w-2 h-full rounded-full shrink-0" style={{ backgroundColor: news.categoryColor }} />
        <div className="flex-1 min-w-0">
          <Link href={`/noticias/${news.slug}`}>
            <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2 text-sm">
              {news.title}
            </h4>
          </Link>
          <div className="flex items-center gap-2 mt-1 text-xs text-muted-foreground">
            <span>{news.category}</span>
            <span>·</span>
            <span>{timeAgo}</span>
          </div>
        </div>
      </article>
    )
  }

  return (
    <article
      ref={cardRef}
      className="group relative overflow-hidden rounded-xl bg-card border border-border p-5 hover:border-primary/50 transition-all duration-300"
      style={{
        transformStyle: "preserve-3d",
        animationDelay: `${index * 100}ms`,
      }}
    >
      {news.breaking && (
        <div className="absolute top-0 right-0 px-2 py-1 bg-destructive text-destructive-foreground text-[10px] font-bold rounded-bl-lg">
          URGENTE
        </div>
      )}

      <div className="flex items-start gap-3 mb-3">
        <span
          className="px-2.5 py-1 rounded-full text-xs font-medium"
          style={{
            backgroundColor: `${news.categoryColor}20`,
            color: news.categoryColor,
          }}
        >
          {news.category}
        </span>
        {news.featured && <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">Destacado</span>}
      </div>

      <Link href={`/noticias/${news.slug}`} className="block group/title">
        <h3 className="text-lg font-bold text-foreground mb-2 group-hover/title:text-primary transition-colors line-clamp-2">
          {news.title}
        </h3>
      </Link>

      <p className="text-muted-foreground text-sm line-clamp-2 mb-4">{news.excerpt}</p>

      <div className="flex items-center justify-between text-xs text-muted-foreground">
        <div className="flex items-center gap-2">
          <img
            src={news.author.avatar || "/placeholder.svg?height=20&width=20"}
            alt={news.author.name}
            className="w-5 h-5 rounded-full"
          />
          <span>{news.author.name}</span>
        </div>
        <span>{timeAgo}</span>
      </div>
    </article>
  )
}

function getTimeAgo(date: Date): string {
  const now = new Date()
  const diffMs = now.getTime() - date.getTime()
  const diffMins = Math.floor(diffMs / (1000 * 60))
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60))
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24))

  if (diffMins < 60) return `Hace ${diffMins} min`
  if (diffHours < 24) return `Hace ${diffHours}h`
  if (diffDays < 7) return `Hace ${diffDays}d`
  return date.toLocaleDateString("es-ES", { day: "numeric", month: "short" })
}
```

## File: src/ui/components/molecules/NewsCategoryFilter.tsx/NewsCategoryFilter.tsx
```typescript
"use client"

import React from "react"
import { useRef, useEffect } from "react"
import { gsap } from "gsap"

interface Category {
  name: string
  slug: string
  color: string
  count: number
}

interface NewsCategoryFilterProps {
  categories: Category[]
  activeCategory: string | null
  onCategoryChange: (slug: string | null) => void
}

export function NewsCategoryFilter({ categories, activeCategory, onCategoryChange }: NewsCategoryFilterProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const indicatorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion || !containerRef.current || !indicatorRef.current) return

    const activeButton = containerRef.current.querySelector(`[data-slug="${activeCategory || "all"}"]`)
    if (activeButton) {
      const rect = (activeButton as HTMLElement).getBoundingClientRect()
      const containerRect = containerRef.current.getBoundingClientRect()

      gsap.to(indicatorRef.current, {
        x: rect.left - containerRect.left,
        width: rect.width,
        duration: 0.3,
        ease: "power2.out",
      })
    }
  }, [activeCategory])

  return (
    <div ref={containerRef} className="relative flex flex-wrap gap-2 p-1 bg-muted rounded-xl">
      <div
        ref={indicatorRef}
        className="absolute top-1 left-1 h-[calc(100%-8px)] bg-background rounded-lg shadow-sm transition-all"
        style={{ width: 0 }}
      />

      <button
        data-slug="all"
        onClick={() => onCategoryChange(null)}
        className={`relative z-10 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
          activeCategory === null ? "text-foreground" : "text-muted-foreground hover:text-foreground"
        }`}
      >
        Todas
      </button>
      {categories.map((category) => (
        <button
          key={category.slug}
          data-slug={category.slug}
          onClick={() => onCategoryChange(category.slug)}
          className={`relative z-10 px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 ${
            activeCategory === category.slug ? "text-foreground" : "text-muted-foreground hover:text-foreground"
          }`}
        >
          <span className="w-2 h-2 rounded-full" style={{ backgroundColor: category.color }} />
          {category.name}
          <span className="text-xs opacity-60">({category.count})</span>
        </button>
      ))}
    </div>
  )
}
```

## File: src/ui/components/molecules/NewsSearchBar.tsx/NewsSearchBar.tsx
```typescript
"use client"

import React from "react"

import { useState, useRef, useEffect } from "react"
import { gsap } from "gsap"
import { Boundary } from "../utils"

interface NewsSearchBarProps {
  onSearch: (query: string) => void
  placeholder?: string
}

export function NewsSearchBar({ onSearch, placeholder = "Buscar noticias..." }: NewsSearchBarProps) {
  const [query, setQuery] = useState("")
  const [isFocused, setIsFocused] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion || !containerRef.current) return

    if (isFocused) {
      gsap.to(containerRef.current, {
        scale: 1.02,
        boxShadow: "0 0 0 3px var(--primary-20)",
        duration: 0.2,
        ease: "power2.out",
      })
    } else {
      gsap.to(containerRef.current, {
        scale: 1,
        boxShadow: "none",
        duration: 0.2,
        ease: "power2.out",
      })
    }
  }, [isFocused])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch(query)
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-xl">
      <div ref={containerRef} className="relative flex items-center bg-muted rounded-xl overflow-hidden transition-all">
        <span className="pl-4 text-muted-foreground">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </span>
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          className="flex-1 px-4 py-3 bg-transparent text-foreground placeholder:text-muted-foreground focus:outline-none text-base"
        />
        <Boundary
          when={query.length > 0}
          fallback={null}
        >
          <button
            type="button"
            onClick={() => {
              setQuery("")
              onSearch("")
            }}
            className="pr-4 text-muted-foreground hover:text-foreground transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </Boundary>
      </div>
    </form>
  )
}
```

## File: src/ui/components/molecules/ParallaxImage.tsx/ParallaxImage.tsx
```typescript
"use client"

import React from "react"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"

gsap.registerPlugin(ScrollTrigger)

interface ParallaxImageProps {
  src: string
  alt: string
  className?: string
  parallaxSpeed?: number
  zoomOnScroll?: boolean
}

export function ParallaxImage({
  src,
  alt,
  className = "",
  parallaxSpeed = 0.3,
  zoomOnScroll = false,
}: ParallaxImageProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion) return

    const container = containerRef.current
    const image = imageRef.current
    if (!container || !image) return

    const ctx = gsap.context(() => {
      // Parallax movement
      gsap.to(image, {
        yPercent: parallaxSpeed * 100,
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      })

      // Zoom effect
      if (!zoomOnScroll) {return}
      gsap.fromTo(
        image,
        { scale: 1.2 },
        {
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: container,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        },
      )
    }, container)

    return () => ctx.revert()
  }, [parallaxSpeed, zoomOnScroll])

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      <div ref={imageRef} className="relative w-full h-full" style={{ transform: "translateY(-15%)" }}>
        <Image src={src || "/placeholder.svg"} alt={alt} fill className="object-cover" sizes="100vw" />
      </div>
    </div>
  )
}
```

## File: src/ui/components/molecules/PartnerCard.tsx/PartnerCard.tsx
```typescript
import React from "react"

interface PartnerCardProps {
  name: string
  description: string
  logo: string
  website: string
  category: string
}

export function PartnerCard({ name, description, logo, website, category }: PartnerCardProps) {
  return (
    <a
      href={website}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col items-center gap-4 p-6 rounded-lg border border-border bg-card card-hover focus-ring transition-all"
    >
      <div className="w-full aspect-square max-w-32 flex items-center justify-center bg-muted/50 rounded-lg overflow-hidden">
        <img src={logo || "/placeholder.svg"} alt={`Logo de ${name}`} className="w-full h-full object-contain p-4" />
      </div>

      <div className="flex-1 text-center w-full">
        <div className="inline-block px-3 py-1 text-xs font-medium text-primary bg-primary/10 rounded-full mb-2">
          {category}
        </div>
        <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
          {name}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
      </div>

      <div className="flex items-center gap-2 text-sm text-primary font-medium">
        Visitar sitio web
        <svg
          className="w-4 h-4 group-hover:translate-x-1 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
          />
        </svg>
      </div>
    </a>
  )
}
```

## File: src/ui/components/molecules/PostCard.tsx/PostCard.tsx
```typescript
import React from "react"
import Link from "next/link"
import { PostDTO } from "../../adapters/PostAdapter"

interface PostCardProps {
  post: PostDTO
}

export function PostCard({ post }: PostCardProps) {
  const publishedDate = new Date(post.publishedAt).toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <article className="bg-card rounded-lg border border-border overflow-hidden card-hover focus-ring">
      <Link href={`/posts/${post.slug}`} className="block p-6">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-foreground mb-2 link-animated transition-fast">{post.title}</h2>
            {post.featured && (
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                ⭐ Destacado
              </span>
            )}
          </div>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-3">
          {post.categories.map((category) => (
            <span
              key={category.slug}
              className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium border transition-smooth hover-lift"
              style={{
                backgroundColor: category.color ? `${category.color}15` : undefined,
                borderColor: category.color || "var(--border)",
                color: category.color || "var(--foreground)",
              }}
            >
              {category.icon && <span>{category.icon}</span>}
              {category.name}
            </span>
          ))}
        </div>

        {/* Excerpt */}
        <p className="text-muted-foreground mb-4 line-clamp-3 text-balance">{post.excerpt}</p>

        {/* Footer */}
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              {post.author.avatar && (
                <img
                  src={post.author.avatar || "/placeholder.svg"}
                  alt={post.author.name}
                  className="w-6 h-6 rounded-full"
                />
              )}
              <span>{post.author.name}</span>
            </div>
            <span>•</span>
            <time dateTime={post.publishedAt}>{publishedDate}</time>
          </div>
          <span>{post.readingTimeMinutes} min lectura</span>
        </div>
      </Link>
    </article>
  )
}
```

## File: src/ui/components/molecules/Section/Animated.tsx/Animated.tsx
```typescript
"use client"

import type { ReactNode } from "react"
import { useFadeInOnScroll, useStaggerOnScroll, useParallax } from "../../../hooks/useGSAP"

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  animation?: "fade" | "stagger" | "parallax"
  staggerDelay?: number
  parallaxSpeed?: number
}

export function AnimatedSection({
  children,
  className = "",
  animation = "fade",
  staggerDelay = 0.1,
  parallaxSpeed = 0.3,
}: AnimatedSectionProps) {
  const fadeRef = useFadeInOnScroll<HTMLDivElement>()
  const staggerRef = useStaggerOnScroll<HTMLDivElement>(staggerDelay)
  const parallaxRef = useParallax<HTMLDivElement>(parallaxSpeed)

  const ref = animation === "stagger" ? staggerRef : animation === "parallax" ? parallaxRef : fadeRef

  return (
    <section ref={ref} className={className}>
      {children}
    </section>
  )
}
```

## File: src/ui/components/molecules/Section/Categories.tsx/Categories.tsx
```typescript
"use client"

import Link from "next/link"
import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { List } from "@ui/components/utils"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const categories = [
  { name: "Cambio Climático", slug: "cambio-climatico", icon: "🌡️", color: "#ef4444", count: 24 },
  { name: "Reciclaje", slug: "reciclaje", icon: "♻️", color: "#10b981", count: 18 },
  { name: "Energía Renovable", slug: "energia", icon: "⚡", color: "#f59e0b", count: 15 },
  { name: "Biodiversidad", slug: "biodiversidad", icon: "🦋", color: "#8b5cf6", count: 21 },
]


const CategoryLink = ({
  slug,
  color,
  icon,
  name,
  count
}: {
  slug: string,
  color: string,
  icon: string,
  name: string,
  count: number
}) => (<Link
          key={slug}
          href={`/category/${slug}`}
          className="group block p-6 rounded-xl border-2 bg-card transition-colors duration-300"
          style={{ borderColor: color }}
        >
          <div className="text-5xl mb-4 transition-transform duration-300 group-hover:scale-110">
            {icon}
          </div>
          <h3 className="text-xl font-semibold text-foreground mb-2">{name}</h3>
          <p className="text-sm text-muted-foreground">{count} artículos</p>
          <div
            className="mt-4 h-1 rounded-full transition-all duration-500 group-hover:w-full w-0"
            style={{ backgroundColor: color }}
          />
        </Link>)

export function CategoriesSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion || !cardsRef.current) return

    const cards = cardsRef.current.children

    gsap.fromTo(
      cards,
      {
        opacity: 0,
        y: 60,
        rotateX: -15,
      },
      {
        opacity: 1,
        y: 0,
        rotateX: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      },
    )

    // Hover animations for each card
    Array.from(cards).forEach((card) => {
      const cardEl = card as HTMLElement

      cardEl.addEventListener("mouseenter", () => {
        gsap.to(cardEl, {
          y: -8,
          scale: 1.02,
          boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
          duration: 0.3,
          ease: "power2.out",
        })
      })

      cardEl.addEventListener("mouseleave", () => {
        gsap.to(cardEl, {
          y: 0,
          scale: 1,
          boxShadow: "0 0 0 rgba(0,0,0,0)",
          duration: 0.3,
          ease: "power2.out",
        })
      })
    })

    return () => {
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === sectionRef.current) st.kill()
      })
    }
  }, [])

  return (
    <section ref={sectionRef} className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Explora por Categoría</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Encuentra contenido especializado en las áreas que más te interesan.
          </p>
        </div>

        <div ref={cardsRef} className="" style={{ perspective: "1000px" }}>
          <List
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
            data={categories}
            Render={ ({item}) => (<CategoryLink  {... item} /> )}
          />
        </div>
      </div>
    </section>
  )
}
```

## File: src/ui/components/molecules/Section/FeaturedPosts.tsx/FeaturedPosts.tsx
```typescript
"use client"

import { AnimatedSection } from "./Animated"
import type { PostDTO } from "../../../adapters/PostAdapter"
import { AnimatedText } from "../../atoms"
import { PostCard } from "../PostCard"
import { List } from "@ui/components/utils"

interface FeaturedPostsSectionProps {
  posts: PostDTO[]
}

export function FeaturedPostsSection({ posts }: FeaturedPostsSectionProps) {
  if (posts.length === 0) return null

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection animation="fade" className="mb-10">
          <AnimatedText as="h2" className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Artículos Destacados
          </AnimatedText>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Contenido seleccionado por nuestro equipo editorial para inspirar el cambio ambiental.
          </p>
        </AnimatedSection>

        <AnimatedSection animation="stagger" staggerDelay={0.15}>
            <List
              className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
              data={posts}
              Render={ ({item}) => <PostCard key={item.id} post={item} />}
            />
        </AnimatedSection>
      </div>
    </section>
  )
}
```

## File: src/ui/components/molecules/Section/Hero.tsx/Hero.tsx
```typescript
"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { gsap } from "gsap"
import { MagneticButton } from "../../atoms/MagneticButton"
import { RippleEffect } from "../../atoms/RippleEffect"
import { GradientText } from "../../atoms"

export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const bgRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion) return

    const ctx = gsap.context(() => {
      // Initial hero animation timeline
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } })

      // Background gradient animation
      tl.fromTo(bgRef.current, { opacity: 0, scale: 1.1 }, { opacity: 1, scale: 1, duration: 1.2 })

      // Title animation with character split
      if (titleRef.current) {
        const chars = titleRef.current.querySelectorAll(".title-char")
        tl.fromTo(
          chars,
          { opacity: 0, y: 100, rotateX: -90 },
          { opacity: 1, y: 0, rotateX: 0, duration: 0.8, stagger: 0.02, ease: "back.out(1.7)" },
          "-=0.8",
        )
      }

      // Subtitle fade in
      tl.fromTo(subtitleRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8 }, "-=0.5")

      // CTA button animation
      tl.fromTo(
        ctaRef.current,
        { opacity: 0, y: 20, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 0.6 },
        "-=0.3",
      )

      // Floating animation for decorative elements
      gsap.to(".hero-float", {
        y: -15,
        duration: 2,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        stagger: 0.3,
      })
    }, heroRef)

    return () => ctx.revert()
  }, [])

  // Split title text for animation
  const titlePart1 = "Educación Ambiental para un "
  const titlePart2 = "Futuro Sostenible"

  return (
    <section id="hero" ref={heroRef} className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div ref={bgRef} className="absolute inset-0 bg-linear-to-b from-primary/10 via-primary/5 to-background" />

      {/* Decorative floating elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="hero-float absolute top-20 left-[10%] w-20 h-20 rounded-full bg-primary/10 blur-xl" />
        <div className="hero-float absolute top-40 right-[15%] w-32 h-32 rounded-full bg-accent/20 blur-2xl" />
        <div className="hero-float absolute bottom-32 left-[20%] w-24 h-24 rounded-full bg-primary/15 blur-xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-4 py-16">
        <h1
          ref={titleRef}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-balance leading-tight"
          style={{ perspective: "1000px" }}
        >
          {titlePart1.split("").map((char, i) => (
            <span key={i} className="title-char inline-block" style={{ transformStyle: "preserve-3d" }}>
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
          <GradientText
            text={titlePart2}
            as="span"
            className="inline"
            colors={["#22c55e", "#10b981", "#06b6d4", "#22c55e"]}
          />
        </h1>

        <p
          ref={subtitleRef}
          className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto text-pretty leading-relaxed"
        >
          Descubre contenido educativo sobre sostenibilidad, cambio climático, biodiversidad y buenas prácticas
          ecológicas para transformar nuestro mundo.
        </p>

        <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center">
          <MagneticButton strength={0.2}>
            <RippleEffect color="rgba(255,255,255,0.3)">
              <Link
                href="/articulos"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 font-medium text-lg hover:shadow-lg hover:shadow-primary/20"
              >
                Explorar artículos
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </RippleEffect>
          </MagneticButton>
          <MagneticButton strength={0.2}>
            <Link
              href="/sobre-nosotros"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-border text-foreground rounded-lg hover:bg-accent hover:border-accent transition-all duration-300 font-medium text-lg"
            >
              Conoce más
            </Link>
          </MagneticButton>
        </div>
      </div>
    </section>
  )
}
```

## File: src/ui/components/molecules/Section/Partners/data.ts/data.ts
```typescript
export const partners = [
  {
    name: "Gobierno de Canarias",
    description:
      "Servicio de Cambio Climático e Información Ambiental.",
    logo: "https://www.kinewa.com/wp-content/uploads/2018/03/LOGOS-A.SantaCruzTenerife-G.Canarias_GOBIERNO-DE-CANARIAS.png",
    website: "https://www.gobiernodecanarias.org/cambioclimatico/",
    category: "Conservación",
  },
  {
    name: "Gestión y Planeamiento Territorial y Ambiental S.A",
    description: "Dirección de Medioambiente Las Palmas y Cambio Climático.",
    logo: "/greenpeace-logo.jpg",
    website: "https://gesplan.es/",
    category: "Activismo",
  },
  {
    name: "Ocean Cleanup",
    description: "Tecnología innovadora para limpiar plásticos de océanos y ríos.",
    logo: "/ocean-cleanup-logo.jpg",
    website: "https://theoceancleanup.com",
    category: "Tecnología",
  },
  {
    name: "Reforestum",
    description: "Plataforma de reforestación para compensar huella de carbono plantando árboles.",
    logo: "/reforestum-tree-logo.jpg",
    website: "https://reforestum.com",
    category: "Reforestación",
  },
  {
    name: "Solar Energy International",
    description: "Educación y entrenamiento en energías renovables y construcción sostenible.",
    logo: "/solar-energy-logo.jpg",
    website: "https://www.solarenergy.org",
    category: "Energía",
  },
  {
    name: "Zero Waste Europe",
    description: "Red europea trabajando hacia la eliminación de residuos mediante diseño circular.",
    logo: "/zero-waste-europe-logo.jpg",
    website: "https://zerowasteeurope.eu",
    category: "Economía Circular",
  },
]
```

## File: src/ui/components/molecules/Section/Partners/index.tsx/index.tsx
```typescript
"use client"

import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { PartnerCard } from "../../PartnerCard"
import { partners } from "./data"
import { List } from "@ui/components/utils"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export function PartnersSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion) return

    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none none",
          },
        },
      )

      // Grid cards stagger animation
      if (gridRef.current) {
        gsap.fromTo(
          gridRef.current.children,
          {
            opacity: 0,
            y: 60,
            scale: 0.95,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.7,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: gridRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          },
        )
      }

      // CTA animation
      gsap.fromTo(
        ctaRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ctaRef.current,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        },
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-16 px-4 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div ref={titleRef} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Nuestros Partners</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Colaboramos con organizaciones líderes en sostenibilidad, conservación y educación ambiental para amplificar
            nuestro impacto.
          </p>
        </div>

        <List 
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          data={partners}
          Render={ ({item}) => <PartnerCard key={item.name} {...item} />}
        />

        <div ref={ctaRef} className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">¿Quieres colaborar con nosotros?</p>
          <a
            href="mailto:partners@ecoblog.org"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 font-medium hover:scale-105 hover:shadow-lg hover:shadow-primary/20"
          >
            Contactar
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
```

## File: src/ui/components/molecules/Section/Stats/data.ts/data.ts
```typescript
export const stats = [
  { value: 150, suffix: "+", label: "Artículos publicados" },
  { value: 50, suffix: "K", label: "Lectores mensuales" },
  { value: 25, suffix: "+", label: "Colaboradores expertos" },
  { value: 12, suffix: "", label: "Categorías temáticas" },
]
```

## File: src/ui/components/molecules/Section/Stats/index.tsx/index.tsx
```typescript
"use client"

import { Counter } from "../../../atoms/Counter"
import { useFadeInOnScroll } from "../../../../hooks/useGSAP"
import { List } from "@ui/components/utils"
import { stats } from "./data"

export function StatsSection() {
  const sectionRef = useFadeInOnScroll<HTMLDivElement>()

  return (
    <section ref={sectionRef} className="py-16 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <List
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          data={stats}
          Render={ ({item, index}) => (
            <Counter
              key={index}
              value={item.value}
              suffix={item.suffix}
              label={item.label}
              duration={2 + index * 0.2}
            />
          )}
        />
      </div>
    </section>
  )
}
```

## File: src/ui/components/molecules/TeamMemberCard.tsx/TeamMemberCard.tsx
```typescript
"use client"

import React from "react"

import { useRef, useEffect } from "react"
import Image from "next/image"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Boundary } from "../utils"

gsap.registerPlugin(ScrollTrigger)

interface TeamMember {
  name: string
  role: string
  bio: string
  image: string
  social: {
    twitter?: string
    linkedin?: string
  }
}

interface TeamMemberCardProps {
  member: TeamMember
  index: number
}

export function TeamMemberCard({ member, index }: TeamMemberCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion) return

    const card = cardRef.current
    if (!card) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 60, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          delay: index * 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        },
      )
    }, card)

    return () => ctx.revert()
  }, [index])

  const handleMouseMove = (e: React.MouseEvent) => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion) return

    const card = cardRef.current
    const image = imageRef.current
    if (!card || !image) return

    const rect = card.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5

    gsap.to(card, {
      rotateY: x * 10,
      rotateX: -y * 10,
      duration: 0.3,
      ease: "power2.out",
    })

    gsap.to(image, {
      scale: 1.1,
      duration: 0.3,
    })
  }

  const handleMouseLeave = () => {
    const card = cardRef.current
    const image = imageRef.current
    if (!card || !image) return

    gsap.to(card, {
      rotateY: 0,
      rotateX: 0,
      duration: 0.5,
      ease: "power3.out",
    })

    gsap.to(image, {
      scale: 1,
      duration: 0.3,
    })
  }

  return (
    <article
      ref={cardRef}
      className="group relative bg-card rounded-2xl overflow-hidden border border-border/50 hover:border-primary/30 transition-colors"
      style={{ perspective: "1000px", transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div ref={imageRef} className="relative h-64 overflow-hidden">
        <Image
          src={member.image || "/placeholder.svg"}
          alt={member.name}
          fill
          className="object-cover transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-linear-to-t from-card via-transparent to-transparent" />
      </div>

      <div className="relative p-6 -mt-12">
        <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>
        <p className="text-primary font-medium text-sm mb-3">{member.role}</p>
        <p className="text-muted-foreground text-sm leading-relaxed">{member.bio}</p>

        <div className="flex gap-3 mt-4">
          <Boundary
            when={member.social.twitter != undefined}
            fallback={null}
          >
            <a
              href={member.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label={`Twitter de ${member.name}`}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </Boundary>
          <Boundary
            when={member.social.linkedin != undefined}
            fallback={null}
          >
            <a
              href={member.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label={`LinkedIn de ${member.name}`}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </Boundary>
        </div>
      </div>
    </article>
  )
}
```

## File: src/ui/components/molecules/TimelineEvent.tsx/TimelineEvent.tsx
```typescript
"use client"
import React from "react"
import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

interface TimelineEventProps {
  year: string
  title: string
  description: string
  index: number
  isLast?: boolean
}

export function TimelineEvent({ year, title, description, index, isLast = false }: TimelineEventProps) {
  const eventRef = useRef<HTMLDivElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)
  const dotRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion) return

    const event = eventRef.current
    const line = lineRef.current
    const dot = dotRef.current
    if (!event || !line || !dot) return

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: event,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      })

      tl.fromTo(dot, { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.4, ease: "back.out(2)" })
        .fromTo(line, { scaleY: 0 }, { scaleY: 1, duration: 0.6, ease: "power2.out" }, "-=0.2")
        .fromTo(
          event.querySelector(".timeline-content"),
          { opacity: 0, x: index % 2 === 0 ? -30 : 30 },
          { opacity: 1, x: 0, duration: 0.5, ease: "power2.out" },
          "-=0.3",
        )
    }, event)

    return () => ctx.revert()
  }, [index])

  const isEven = index % 2 === 0

  return (
    <div
      ref={eventRef}
      className={`relative flex items-center gap-8 ${isEven ? "flex-row" : "flex-row-reverse"} md:flex-row`}
    >
      {/* Timeline line and dot */}
      <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 flex flex-col items-center h-full">
        <div ref={dotRef} className="relative z-10 w-4 h-4 bg-primary rounded-full ring-4 ring-primary/20" />
        {!isLast && (
          <div ref={lineRef} className="w-0.5 flex-1 bg-linear-to-b from-primary to-primary/20 origin-top" />
        )}
      </div>

      {/* Content */}
      <div
        className={`timeline-content ml-12 md:ml-0 md:w-5/12 ${
          isEven ? "md:pr-12 md:text-right" : "md:pl-12 md:ml-auto"
        }`}
      >
        <span className="inline-block px-3 py-1 mb-2 text-xs font-bold bg-primary/10 text-primary rounded-full">
          {year}
        </span>
        <h3 className="text-lg font-bold text-foreground mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  )
}
```

## File: src/ui/components/molecules/ValueCard.tsx/ValueCard.tsx
```typescript
"use client"
import React from "react"
import { useRef, useEffect, type ReactNode } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

interface ValueCardProps {
  icon: ReactNode
  title: string
  description: string
  index: number
}

export function ValueCard({ icon, title, description, index }: ValueCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion) return

    const card = cardRef.current
    if (!card) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 40, rotateX: -15 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 0.7,
          delay: index * 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        },
      )
    }, card)

    return () => ctx.revert()
  }, [index])

  return (
    <div
      ref={cardRef}
      className="group relative p-6 bg-card rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
      style={{ perspective: "1000px" }}
    >
      <div className="w-14 h-14 mb-4 flex items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-lg font-bold text-foreground mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
    </div>
  )
}
```

## File: src/ui/components/Navbar.tsx/Navbar.tsx
```typescript
"use client"

import Link from "next/link"
import { useState, useEffect, useRef } from "react"
import { gsap } from "gsap"
import { DarkModeToggle } from "./atoms/DarkModeToggle"
import { MagneticButton } from "./atoms/MagneticButton"

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const navRef = useRef<HTMLElement>(null)
  const logoRef = useRef<HTMLAnchorElement>(null)
  const linksRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  // Scroll detection for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Initial animation
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion) return

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } })

    tl.fromTo(logoRef.current, { opacity: 0, x: -20 }, { opacity: 1, x: 0, duration: 0.6 })

    if (linksRef.current) {
      tl.fromTo(
        linksRef.current.children,
        { opacity: 0, y: -10 },
        { opacity: 1, y: 0, duration: 0.4, stagger: 0.08 },
        "-=0.3",
      )
    }

    tl.fromTo(ctaRef.current, { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 0.4 }, "-=0.2")
  }, [])

  // Mobile menu animation
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion) return

    const mobileMenu = document.getElementById("mobile-menu")
    if (!mobileMenu) return

    if (mobileMenuOpen) {
      gsap.fromTo(
        mobileMenu,
        { opacity: 0, height: 0 },
        { opacity: 1, height: "auto", duration: 0.3, ease: "power2.out" },
      )
      gsap.fromTo(
        mobileMenu.children,
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: 0.3, stagger: 0.05, delay: 0.1 },
      )
    }
  }, [mobileMenuOpen])

  return (
    <nav
      ref={navRef}
      className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
        scrolled ? "border-border/60 bg-background/95 backdrop-blur-md shadow-sm" : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            ref={logoRef}
            href="/"
            className="flex items-center gap-2 text-lg font-semibold text-foreground hover:text-primary transition-colors"
          >
            <svg
              className="size-8 text-primary"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor" opacity="0.3" />
              <path
                d="M2 17L12 22L22 17"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 12L12 17L22 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>MAC-IDAFE</span>
          </Link>

          {/* Desktop Navigation */}
          <div ref={linksRef} className="hidden md:flex md:items-center md:gap-8">
            <Link
              href="/"
              className="relative text-sm font-medium text-foreground hover:text-primary transition-colors group"
            >
              Inicio
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </Link>
            <Link
              href="/noticias"
              className="relative text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group"
            >
              Noticias
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </Link>
            <Link
              href="/sobre-nosotros"
              className="relative text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group"
            >
              Sobre Nosotros
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </Link>
          </div>

          <div ref={ctaRef} className="hidden md:flex md:items-center md:gap-4">
            <DarkModeToggle />
            <MagneticButton
              as="a"
              href="#"
              className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-ring"
            >
              Entrar
            </MagneticButton>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-2 md:hidden">
            <DarkModeToggle />
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-muted-foreground hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              <svg
                className="size-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12m-16.5 5.25h16.5" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div id="mobile-menu" className="md:hidden border-t border-border py-4 space-y-1 overflow-hidden">
            <Link
              href="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Inicio
            </Link>
            <Link
              href="/noticias"
              className="block px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Noticias
            </Link>
            <Link
              href="/categorias"
              className="block px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Categorías
            </Link>
            <Link
              href="/sobre-nosotros"
              className="block px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Sobre Nosotros
            </Link>
            <Link
              href="/contacto"
              className="block mx-3 mt-4 px-4 py-2 rounded-md text-center text-base font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contacto
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
```

## File: src/ui/components/NewsGrid.tsx/NewsGrid.tsx
```typescript
"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { NewsCard } from "./molecules"

gsap.registerPlugin(ScrollTrigger)

interface News {
  id: string
  title: string
  slug: string
  excerpt: string
  category: string
  categoryColor: string
  author: { name: string; avatar?: string }
  publishedAt: string
  readingTimeMinutes: number
  featured: boolean
  breaking: boolean
}

interface NewsGridProps {
  news: News[]
  title?: string
  showFeatured?: boolean
}

export function NewsGrid({ news, title, showFeatured = true }: NewsGridProps) {
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion || !gridRef.current) return

    const ctx = gsap.context(() => {
      const cards = gridRef.current?.querySelectorAll(".news-card-item")

      if (!cards) {return}
      gsap.fromTo(
        cards,
        { opacity: 0, y: 50, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      )
      
    }, gridRef)

    return () => ctx.revert()
  }, [news])

  const featuredNews = news.filter((n) => n.featured).slice(0, 2)
  const regularNews = showFeatured ? news.filter((n) => !n.featured) : news

  return (
    <section className="py-12">
      {title && <h2 className="text-2xl md:text-3xl font-bold mb-8 text-foreground">{title}</h2>}

      <div ref={gridRef}>
        {/* Featured news - larger cards */}
        {showFeatured && featuredNews.length > 0 && (
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {featuredNews.map((item, index) => (
              <div key={item.id} className="news-card-item">
                <NewsCard news={item} index={index} variant="featured" />
              </div>
            ))}
          </div>
        )}

        {/* Regular news grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {regularNews.map((item, index) => (
            <div key={item.id} className="news-card-item">
              <NewsCard news={item} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

## File: src/ui/components/NewsHero.tsx/NewsHero.tsx
```typescript
"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { GradientText } from "./atoms/Text/Gradient"
import { TextReveal } from "./atoms/Text/Reveal"

gsap.registerPlugin(ScrollTrigger)

export function NewsHero() {
  const heroRef = useRef<HTMLElement>(null)
  const bgRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion) return

    const ctx = gsap.context(() => {
      // Parallax background
      gsap.to(bgRef.current, {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      })

      // Floating elements
      gsap.to(".news-float-element", {
        y: -20,
        duration: 2,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
        stagger: 0.3,
      })
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={heroRef} className="relative overflow-hidden py-20 md:py-32">
      {/* Animated background */}
      <div ref={bgRef} className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl news-float-element" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl news-float-element" />
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Noticias en tiempo real
          </div>

          <TextReveal
            text="Noticias Ambientales"
            as="h1"
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
            revealType="words"
          />

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
            <GradientText text="que Importan" colors={["#10b981", "#06b6d4", "#3b82f6", "#10b981"]} />
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            Mantente informado sobre las últimas noticias ambientales, avances científicos y políticas climáticas de
            todo el mundo.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-12 max-w-lg mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary">24/7</div>
              <div className="text-sm text-muted-foreground">Cobertura</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary">50+</div>
              <div className="text-sm text-muted-foreground">Países</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary">100%</div>
              <div className="text-sm text-muted-foreground">Verificado</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
```

## File: src/ui/components/NewsSidebar.tsx/NewsSidebar.tsx
```typescript
"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { MagneticButton } from "./atoms/MagneticButton"
import { NewsCard } from "./molecules"

gsap.registerPlugin(ScrollTrigger)

interface SidebarNews {
  id: string
  title: string
  slug: string
  excerpt: string
  category: string
  categoryColor: string
  author: { name: string; avatar?: string }
  publishedAt: string
  readingTimeMinutes: number
  featured: boolean
  breaking: boolean
}

interface NewsSidebarProps {
  recentNews: SidebarNews[]
  popularTags: string[]
}

export function NewsSidebar({ recentNews, popularTags }: NewsSidebarProps) {
  const sidebarRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion || !sidebarRef.current) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".sidebar-item",
        { opacity: 0, x: 30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          stagger: 0.1,
          scrollTrigger: {
            trigger: sidebarRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        },
      )
    }, sidebarRef)

    return () => ctx.revert()
  }, [])

  return (
    <aside ref={sidebarRef} className="space-y-8">
      {/* Recent News */}
      <div className="sidebar-item bg-card rounded-2xl border border-border p-6">
        <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-primary rounded-full" />
          Noticias Recientes
        </h3>
        <div className="space-y-1">
          {recentNews.slice(0, 5).map((news) => (
            <NewsCard key={news.id} news={news} variant="compact" />
          ))}
        </div>
      </div>

      {/* Popular Tags */}
      <div className="sidebar-item bg-card rounded-2xl border border-border p-6">
        <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-accent rounded-full" />
          Temas Populares
        </h3>
        <div className="flex flex-wrap gap-2">
          {popularTags.map((tag) => (
            <MagneticButton
              key={tag}
              className="px-3 py-1.5 bg-muted rounded-full text-sm text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-colors"
              strength={0.2}
            >
              #{tag}
            </MagneticButton>
          ))}
        </div>
      </div>

      {/* Newsletter CTA */}
      <div className="sidebar-item bg-linear-to-br from-primary/10 to-accent/10 rounded-2xl border border-primary/20 p-6">
        <h3 className="text-lg font-bold mb-2">Boletín Ambiental</h3>
        <p className="text-sm text-muted-foreground mb-4">Recibe las noticias más importantes cada semana.</p>
        <form className="space-y-3">
          <input
            type="email"
            placeholder="tu@email.com"
            className="w-full px-4 py-2 bg-background rounded-lg border border-border text-base focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
          <MagneticButton className="w-full py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
            Suscribirse
          </MagneticButton>
        </form>
      </div>
    </aside>
  )
}
```

## File: src/ui/components/ReadingProgress.tsx/ReadingProgress.tsx
```typescript
"use client"

/**
 * UI Component - Reading Progress Bar
 * Barra de progreso de lectura para artículos largos
 */

import { useEffect, useState } from "react"

export function ReadingProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const scrollTop = window.scrollY

      const totalScrollable = documentHeight - windowHeight
      const currentProgress = (scrollTop / totalScrollable) * 100

      setProgress(Math.min(100, Math.max(0, currentProgress)))
    }

    // Initial check
    handleScroll()

    // Listen to scroll
    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      className="reading-progress"
      style={{
        transform: `scaleX(${progress / 100})`,
        transition: "transform 0.1s ease-out",
      }}
      role="progressbar"
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Progreso de lectura"
    />
  )
}
```

## File: src/ui/components/RecentPostsSection.tsx/RecentPostsSection.tsx
```typescript
"use client"

import { AnimatedSection } from "./molecules/Section/Animated"
import type { PostDTO } from "../adapters/PostAdapter"
import { PostCard } from "./molecules"
import { List } from "./utils"

interface RecentPostsSectionProps {
  posts: PostDTO[]
}

export function RecentPostsSection({ posts }: RecentPostsSectionProps) {
  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection animation="fade" className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Artículos Recientes</h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Las últimas publicaciones de nuestro equipo de expertos en sostenibilidad.
          </p>
        </AnimatedSection>

        <AnimatedSection animation="stagger" staggerDelay={0.12}>
            <List
              className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
              data={posts}
              Render={ ({item}) => <PostCard key={item.id} post={item} />}
            />
        </AnimatedSection>
      </div>
    </section>
  )
}
```

## File: src/ui/components/ScrollProgressSections.tsx/ScrollProgressSections.tsx
```typescript
"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

interface Section {
  id: string
  title: string
}

interface ScrollProgressSectionsProps {
  sections: Section[]
  className?: string
}

export function ScrollProgressSections({ sections, className = "" }: ScrollProgressSectionsProps) {
  const [activeSection, setActiveSection] = useState(0)
  const progressRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    sections.forEach((section, index) => {
      const element = document.getElementById(section.id)
      if (!element) return

      ScrollTrigger.create({
        trigger: element,
        start: "top center",
        end: "bottom center",
        onEnter: () => setActiveSection(index),
        onEnterBack: () => setActiveSection(index),
      })
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [sections])

  // Animate progress indicator
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion) return

    const progress = progressRef.current
    if (!progress) return

    gsap.to(progress, {
      scaleY: (activeSection + 1) / sections.length,
      duration: 0.4,
      ease: "power2.out",
    })
  }, [activeSection, sections.length])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav
      className={`fixed right-8 top-1/2 -translate-y-1/2 z-40 hidden lg:block ${className}`}
      aria-label="Navegación de secciones"
    >
      <div className="relative flex flex-col items-center gap-4">
        {/* Progress bar background */}
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-0.5 h-full bg-border rounded-full" />
        {/* Active progress */}
        <div
          ref={progressRef}
          className="absolute left-1/2 top-0 -translate-x-1/2 w-0.5 bg-primary rounded-full origin-top"
          style={{ height: "100%", transform: "scaleY(0)" }}
        />

        {sections.map((section, index) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className={`relative z-10 group flex items-center gap-3 ${
              index === activeSection ? "text-primary" : "text-muted-foreground"
            }`}
            aria-label={`Ir a ${section.title}`}
            aria-current={index === activeSection ? "true" : undefined}
          >
            {/* Dot indicator */}
            <span
              className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                index === activeSection
                  ? "bg-primary border-primary scale-125"
                  : "bg-background border-muted-foreground group-hover:border-primary"
              }`}
            />
            {/* Label tooltip */}
            <span
              className={`absolute right-full mr-4 px-2 py-1 text-sm whitespace-nowrap bg-card border border-border rounded shadow-lg opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300`}
            >
              {section.title}
            </span>
          </button>
        ))}
      </div>
    </nav>
  )
}
```

## File: src/ui/components/ScrollStorySection.tsx/ScrollStorySection.tsx
```typescript
"use client"

import { useEffect, useRef, type ReactNode } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

interface ScrollStorySectionProps {
  children: ReactNode
  className?: string
  parallaxIntensity?: number
  revealDirection?: "up" | "down" | "left" | "right"
}

export function ScrollStorySection({
  children,
  className = "",
  parallaxIntensity = 50,
  revealDirection = "up",
}: ScrollStorySectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion) return

    const section = sectionRef.current
    const content = contentRef.current
    if (!section || !content) return

    const ctx = gsap.context(() => {
      // Determine initial position based on direction
      const directions = {
        up: { y: 100, x: 0 },
        down: { y: -100, x: 0 },
        left: { y: 0, x: 100 },
        right: { y: 0, x: -100 },
      }

      const initialPos = directions[revealDirection]

      // Content reveal animation
      gsap.fromTo(
        content,
        {
          opacity: 0,
          ...initialPos,
        },
        {
          opacity: 1,
          y: 0,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "top 30%",
            scrub: 1,
          },
        },
      )

      // Parallax background effect
      gsap.to(section, {
        backgroundPositionY: `${parallaxIntensity}%`,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      })
    }, section)

    return () => ctx.revert()
  }, [parallaxIntensity, revealDirection])

  return (
    <div ref={sectionRef} className={`relative overflow-hidden ${className}`}>
      <div ref={contentRef}>{children}</div>
    </div>
  )
}
```

## File: src/ui/components/SearchBar.tsx/SearchBar.tsx
```typescript
"use client"

import React from "react"

/**
 * UI Component - Search Bar
 * Barra de búsqueda con accesibilidad
 */

import { useState } from "react"

interface SearchBarProps {
  onSearch: (query: string) => void
  placeholder?: string
}

export function SearchBar({ onSearch, placeholder = "Buscar artículos..." }: SearchBarProps) {
  const [query, setQuery] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch(query)
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto" role="search">
      <div className="relative">
        <label htmlFor="search" className="sr-only">
          Buscar artículos educativos
        </label>
        <input
          id="search"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
          className="w-full px-4 py-3 pl-12 text-base rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          aria-label="Campo de búsqueda de artículos"
        />
        <svg
          className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <button
          type="submit"
          className="absolute right-2 top-1/2 -translate-y-1/2 px-4 py-1.5 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        >
          Buscar
        </button>
      </div>
    </form>
  )
}
```

## File: src/ui/components/utils/Boundary.tsx/Boundary.tsx
```typescript
import React, { ReactNode } from "react"

type BoundaryProps = {
  when: boolean
  fallback: ReactNode
  children: ReactNode
}

export function Boundary({ when, fallback, children }: BoundaryProps) {
  return <div>{when ? children : fallback}</div>
}
```

## File: src/ui/components/utils/index.ts/index.ts
```typescript
export * from "./Boundary"
export * from "./List"
```

## File: src/ui/components/utils/List.tsx/List.tsx
```typescript
import React, { ComponentType, Key } from "react"

type RenderProps<T> = {
  item: T
  index: number
}

type ListProps<T> = {
  data: T[]
  Render: ComponentType<RenderProps<T>>
  className?: string
  getKey?: (item: T, index: number) => Key
  as?: "div" | "section" | "ul" | "ol"
}

export function List<T>({ data, Render, getKey, as: Component = "div", className }: ListProps<T>) {
  if (data.length === 0) {
    return null
  }

  return (
    <Component role="list" className={className}>
      {data.map((item, index) => (
        <Render key={getKey ? getKey(item, index) : index} item={item} index={index} />
      ))}
    </Component>
  )
}
```

## File: src/ui/hooks/useGSAP.ts/useGSAP.ts
```typescript
"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// Register plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

/**
 * Hook for fade-in animation on scroll
 */
export function useFadeInOnScroll<T extends HTMLElement>() {
  const ref = useRef<T>(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion || !ref.current) return

    gsap.fromTo(
      ref.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      },
    )

    return () => {
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === ref.current) st.kill()
      })
    }
  }, [])

  return ref
}

/**
 * Hook for staggered children animation on scroll
 */
export function useStaggerOnScroll<T extends HTMLElement>(staggerDelay = 0.1) {
  const ref = useRef<T>(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion || !ref.current) return

    const children = ref.current.children

    gsap.fromTo(
      children,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: staggerDelay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      },
    )

    return () => {
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === ref.current) st.kill()
      })
    }
  }, [staggerDelay])

  return ref
}

/**
 * Hook for parallax effect
 */
export function useParallax<T extends HTMLElement>(speed = 0.3) {
  const ref = useRef<T>(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion || !ref.current) return

    gsap.to(ref.current, {
      y: () => window.innerHeight * speed,
      ease: "none",
      scrollTrigger: {
        trigger: ref.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    })

    return () => {
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === ref.current) st.kill()
      })
    }
  }, [speed])

  return ref
}

/**
 * Hook for counting up animation
 */
export function useCountUp(endValue: number, duration = 2, suffix = "") {
  const ref = useRef<HTMLSpanElement>(null)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion || !ref.current || hasAnimated) {
      if (ref.current) ref.current.textContent = `${endValue}${suffix}`
      return
    }

    const counter = { value: 0 }

    gsap.to(counter, {
      value: endValue,
      duration,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ref.current,
        start: "top 85%",
        toggleActions: "play none none none",
        onEnter: () => setHasAnimated(true),
      },
      onUpdate: () => {
        if (ref.current) {
          ref.current.textContent = `${Math.round(counter.value)}${suffix}`
        }
      },
    })

    return () => {
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === ref.current) st.kill()
      })
    }
  }, [endValue, duration, suffix, hasAnimated])

  return { ref }
}

/**
 * Hook for text reveal animation
 */
export function useTextReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion || !ref.current) return

    gsap.fromTo(
      ref.current,
      {
        opacity: 0,
        y: 30,
        clipPath: "inset(100% 0% 0% 0%)",
      },
      {
        opacity: 1,
        y: 0,
        clipPath: "inset(0% 0% 0% 0%)",
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      },
    )

    return () => {
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === ref.current) st.kill()
      })
    }
  }, [])

  return ref
}

/**
 * Hook for magnetic button effect
 */
export function useMagneticEffect<T extends HTMLElement>(strength = 0.3) {
  const ref = useRef<T>(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion || !ref.current) return

    const element = ref.current

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      const deltaX = (e.clientX - centerX) * strength
      const deltaY = (e.clientY - centerY) * strength

      gsap.to(element, {
        x: deltaX,
        y: deltaY,
        duration: 0.3,
        ease: "power2.out",
      })
    }

    const handleMouseLeave = () => {
      gsap.to(element, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: "elastic.out(1, 0.5)",
      })
    }

    element.addEventListener("mousemove", handleMouseMove)
    element.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      element.removeEventListener("mousemove", handleMouseMove)
      element.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [strength])

  return ref
}
```
