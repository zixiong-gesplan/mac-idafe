import { Suspense, use } from "react"
import { unstable_noStore as noStore } from "next/cache"
import { GetNews } from "@application/use-cases/GetNews"
import { NewsRepositoryJSON } from "@infrastructure/repositories/NewsRepositoryJSON"
import { NoticiasClient } from "./NoticiasClient"
import type { NewsView } from "./news-utils"

export const dynamic = "force-dynamic"

type NewsResponse = {
  news: NewsView[]
  error?: string
}

async function fetchNews(): Promise<NewsResponse> {
  noStore()

  const repository = new NewsRepositoryJSON()
  const getNews = new GetNews(repository)

  try {
    const news = await getNews.execute()
    return { news: news.map((item) => item.toJSON()) }
  } catch (error) {
    const message = error instanceof Error ? error.message : "No pudimos cargar las noticias. Intenta de nuevo."
    return { news: [], error: message }
  }
}

function NoticiasContent() {
  const { news, error } = use(fetchNews())
  return <NoticiasClient initialNews={news} error={error} />
}

function LoadingFallback() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-20" role="status" aria-live="polite">
        <div className="text-center">
          <div className="text-5xl mb-4" aria-hidden="true">
            ...
          </div>
          <h3 className="text-xl font-bold mb-2">Cargando noticias</h3>
          <p className="text-muted-foreground">Espera un momento mientras obtenemos las ultimas novedades.</p>
        </div>
      </div>
    </div>
  )
}

export default function NoticiasPage() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <NoticiasContent />
    </Suspense>
  )
}

export {
  deriveCategories,
  deriveFilteredNews,
  derivePopularTags,
  type CategorySummary,
  type FilterParams,
  type NewsView,
} from "./news-utils"
