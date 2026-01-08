export type NewsView = {
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

export type CategorySummary = {
  name: string
  slug: string
  color: string
  count: number
}

export type FilterParams = {
  categorySlug: string | null
  searchQuery: string
}

export function deriveFilteredNews(allNews: NewsView[], filters: FilterParams): NewsView[] {
  const { categorySlug, searchQuery } = filters
  let result = [...allNews]

  if (categorySlug) {
    result = result.filter((newsItem) => newsItem.categorySlug === categorySlug)
  }

  if (searchQuery) {
    const query = searchQuery.toLowerCase()
    result = result.filter(
      (newsItem) =>
        newsItem.title.toLowerCase().includes(query) ||
        newsItem.excerpt.toLowerCase().includes(query) ||
        newsItem.tags.some((tag: string) => tag.toLowerCase().includes(query)),
    )
  }

  return result
}

export function deriveCategories(allNews: NewsView[]): CategorySummary[] {
  return allNews.reduce<CategorySummary[]>((accumulator, newsItem) => {
    const existing = accumulator.find((category) => category.slug === newsItem.categorySlug)
    if (existing) {
      existing.count++
      return accumulator
    }

    accumulator.push({
      name: newsItem.category,
      slug: newsItem.categorySlug,
      color: newsItem.categoryColor,
      count: 1,
    })
    return accumulator
  }, [])
}

export function derivePopularTags(allNews: NewsView[], limit = 10): string[] {
  return Array.from(new Set(allNews.flatMap((newsItem) => newsItem.tags))).slice(0, limit)
}
