"use client"
import React, { useEffect, useState } from "react"
import { BreakingNewsTicker } from "@ui/components/BreakingNewsTicker"
import { NewsHero } from "@ui/components/NewsHero"
import { NewsGrid } from "@ui/components/NewsGrid"
import { NewsSidebar } from "@ui/components/NewsSidebar"
import { Boundary } from "@/app/src/ui/components/utils/Boundary"
import { NewsCategoryFilter, NewsSearchBar } from "@ui/components/molecules"

type NewsView = {
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
        const response = await fetch("/api/news", { cache: "no-store" })
        if (!response.ok) {
          throw new Error("No pudimos cargar las noticias")
        }
        const data: NewsView[] = await response.json()
        setAllNews(data)
        setFilteredNews(data)
        setBreakingNews(data.filter((n) => n.breaking))
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

  const categories = deriveCategories(allNews)
  const popularTags = derivePopularTags(allNews)

  return (
    <main className="min-h-screen bg-background">
      {breakingNews.length > 0 && <BreakingNewsTicker news={breakingNews} />}

      <NewsHero />

      <div className="container mx-auto px-4 pb-20">
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

        <Boundary when={!!activeCategory || !!searchQuery} fallback={<div className="mb-6">&nbsp;</div>}>
          <div className="mb-6 text-sm text-muted-foreground">
            {filteredNews.length} {filteredNews.length === 1 ? "resultado" : "resultados"}
            {activeCategory && ` en "${categories.find((c) => c.slug === activeCategory)?.name}"`}
            {searchQuery && ` para "${searchQuery}"`}
          </div>
        </Boundary>

        <div className="grid lg:grid-cols-[1fr_320px] gap-8">
          <Boundary
            when={!loading}
            fallback={
              <div className="text-center py-20" role="status" aria-live="polite">
                <div className="text-6xl mb-4" aria-hidden="true">
                  ?
                </div>
                <h3 className="text-xl font-bold mb-2">Cargando noticias</h3>
                <p className="text-muted-foreground">Espera un momento mientras obtenemos las Łltimas novedades.</p>
              </div>
            }
          >
            <Boundary
              when={!error}
              fallback={
                <div className="text-center py-20" role="alert" aria-live="assertive">
                  <div className="text-6xl mb-4" aria-hidden="true">
                    ??
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
                      ??
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

          <NewsSidebar recentNews={allNews.slice(0, 5)} popularTags={popularTags} />
        </div>
      </div>
    </main>
  )
}
