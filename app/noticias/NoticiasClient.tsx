"use client"

import { useMemo, useState } from "react"
import { BreakingNewsTicker } from "@ui/components/BreakingNewsTicker"
import { NewsHero } from "@ui/components/NewsHero"
import { NewsGrid } from "@ui/components/NewsGrid"
import { NewsSidebar } from "@ui/components/NewsSidebar"
import { Boundary } from "@/app/src/ui/components/utils/Boundary"
import { NewsCategoryFilter, NewsSearchBar } from "@ui/components/molecules"
import {
  deriveCategories,
  deriveFilteredNews,
  derivePopularTags,
  type NewsView,
} from "@/app/noticias/news-utils"

type NoticiasClientProps = {
  initialNews: NewsView[]
  error?: string
}

export function NoticiasClient({ initialNews, error }: NoticiasClientProps) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const hasError = Boolean(error)

  const filteredNews = useMemo(
    () => deriveFilteredNews(initialNews, { categorySlug: activeCategory, searchQuery }),
    [initialNews, activeCategory, searchQuery],
  )
  const categories = useMemo(() => deriveCategories(initialNews), [initialNews])
  const popularTags = useMemo(() => derivePopularTags(initialNews), [initialNews])
  const breakingNews = useMemo(() => initialNews.filter((newsItem) => newsItem.breaking), [initialNews])

  return (
    <main className="min-h-screen bg-background">
      {breakingNews.length > 0 && <BreakingNewsTicker news={breakingNews} />}

      <NewsHero />

      <div className="container mx-auto px-4 pb-20">
        {!hasError && (
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
        )}

        {!hasError && (
          <Boundary when={!!activeCategory || !!searchQuery} fallback={<div className="mb-6">&nbsp;</div>}>
            <div className="mb-6 text-sm text-muted-foreground">
              {filteredNews.length} {filteredNews.length === 1 ? "resultado" : "resultados"}
              {activeCategory && ` en "${categories.find((category) => category.slug === activeCategory)?.name}"`}
              {searchQuery && ` para "${searchQuery}"`}
            </div>
          </Boundary>
        )}

        <div className="grid lg:grid-cols-[1fr_320px] gap-8">
          <Boundary
            when={!hasError}
            fallback={<ErrorMessage message={error ?? "No pudimos cargar las noticias. Intenta de nuevo."} />}
          >
            <Boundary when={filteredNews.length > 0} fallback={<EmptyResults />}>
              <NewsGrid news={filteredNews} showFeatured={!activeCategory && !searchQuery} />
            </Boundary>
          </Boundary>

          {!hasError && <NewsSidebar recentNews={initialNews.slice(0, 5)} popularTags={popularTags} />}
        </div>
      </div>
    </main>
  )
}

function EmptyResults() {
  return (
    <div className="text-center py-20">
      <div className="text-5xl mb-4" aria-hidden="true">
        :(
      </div>
      <h3 className="text-xl font-bold mb-2">No se encontraron noticias</h3>
      <p className="text-muted-foreground">Intenta con otros terminos de busqueda o categorias.</p>
    </div>
  )
}

function ErrorMessage({ message }: { message: string }) {
  return (
    <div className="text-center py-20" role="alert" aria-live="assertive">
      <div className="text-5xl mb-4" aria-hidden="true">
        :(
      </div>
      <h3 className="text-xl font-bold mb-2">No se pudieron cargar las noticias</h3>
      <p className="text-muted-foreground">{message}</p>
    </div>
  )
}
