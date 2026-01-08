import { Suspense, use } from "react"
import { NewsList } from "./components/NewsList"
import { fetchNews } from "./data"

function NewsListFallback() {
  return (
    <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
      <p className="text-sm text-muted-foreground">Cargando noticias...</p>
    </section>
  )
}

function NewsListBoundary({ promise }: { promise: ReturnType<typeof fetchNews> }) {
  const news = use(promise)
  return <NewsList initialNews={news} />
}

export default function AdminNewsListPage() {
  const newsPromise = fetchNews()

  return (
    <div className="space-y-8">
      <Suspense fallback={<NewsListFallback />}>
        <NewsListBoundary promise={newsPromise} />
      </Suspense>
    </div>
  )
}
