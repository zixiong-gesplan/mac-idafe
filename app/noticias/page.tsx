"use client"

import { useState, useEffect } from "react"
import { NewsRepositoryJSON } from "@infrastructure/repositories/NewsRepositoryJSON"
import { GetNews } from "@application/use-cases/GetNews"
import { BreakingNewsTicker } from "@ui/components/BreakingNewsTicker"
import { NewsHero } from "@ui/components/NewsHero"
import { NewsSearchBar } from "@ui/components/NewsSearchBar"
import { NewsCategoryFilter } from "@ui/components/NewsCategoryFilter"
import { NewsGrid } from "@ui/components/NewsGrid"
import { NewsSidebar } from "@ui/components/NewsSidebar"
import { Boundary } from "../src/ui/components/Boundary"


// Initialize use case with repository
const newsRepository = new NewsRepositoryJSON()
const getNews = new GetNews(newsRepository)

export default function NoticiasPage() {
  const [allNews, setAllNews] = useState<any[]>([])
  const [filteredNews, setFilteredNews] = useState<any[]>([])
  const [breakingNews, setBreakingNews] = useState<any[]>([])
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState("")

  useEffect(() => {
    async function loadNews() {
      const news = await getNews.execute()
      const newsData = news.map((n) => n.toJSON())
      setAllNews(newsData)
      setFilteredNews(newsData)

      const breaking = await getNews.getBreaking()
      setBreakingNews(breaking.map((n) => n.toJSON()))
    }
    loadNews()
  }, [])

  useEffect(() => {
    let result = [...allNews]

    if (activeCategory) {
      result = result.filter((n) => n.categorySlug === activeCategory)
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

    setFilteredNews(result)
  }, [activeCategory, searchQuery, allNews])

  // Extract unique categories with counts
  const categories = allNews.reduce((acc: any[], news) => {
    const existing = acc.find((c) => c.slug === news.categorySlug)
    if (existing) {
      existing.count++
    } else {
      acc.push({
        name: news.category,
        slug: news.categorySlug,
        color: news.categoryColor,
        count: 1,
      })
    }
    return acc
  }, [])

  // Extract popular tags
  const popularTags = Array.from(new Set(allNews.flatMap((n) => n.tags))).slice(0, 10)

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
            when={filteredNews.length > 0}
            fallback={
              <div className="text-center py-20">
                <div className="text-6xl mb-4" aria-hidden="true">🔍</div>
                <h3 className="text-xl font-bold mb-2">No se encontraron noticias</h3>
                <p className="text-muted-foreground">Intenta con otros terminos de busqueda o categorias.</p>
              </div>
            }
          >
            <NewsGrid news={filteredNews} showFeatured={!activeCategory && !searchQuery} />
          </Boundary>

          {/* Sidebar */}
          <NewsSidebar recentNews={allNews.slice(0, 5)} popularTags={popularTags} />
        </div>
      </div>
    </main>
  )
}

