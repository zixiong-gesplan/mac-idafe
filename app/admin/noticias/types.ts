export type NewsDTO = {
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
  publishedAt: string
  readingTimeMinutes: number
  featured: boolean
  breaking: boolean
}
