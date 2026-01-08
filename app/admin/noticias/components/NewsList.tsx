"use client"

import { useMemo, useOptimistic, useState, useTransition } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Toaster, toast } from "sonner"
import { cn } from "@/lib/utils"
import type { NewsDTO } from "../types"

type OptimisticAction =
  | { type: "delete"; id: string }
  | { type: "replace"; news: NewsDTO[] }

export function NewsList({ initialNews }: { initialNews: NewsDTO[] }) {
  const router = useRouter()
  const [refreshing, setRefreshing] = useState(false)
  const [news, setNews] = useState(initialNews)
  const [optimisticNews, applyOptimistic] = useOptimistic<NewsDTO[], OptimisticAction>(news, (current, action) => {
    if (action.type === "delete") {
      return current.filter((item) => item.id !== action.id)
    }
    if (action.type === "replace") {
      return action.news
    }
    return current
  })
  const [deletingId, setDeletingId] = useState<string | null>(null)
  const [search, setSearch] = useState("")
  const [isPending, startTransition] = useTransition()

  const filteredNews = useMemo(() => {
    if (!search) return optimisticNews
    const query = search.toLowerCase()
    return optimisticNews.filter(
      (item) =>
        item.title.toLowerCase().includes(query) ||
        item.excerpt.toLowerCase().includes(query) ||
        item.tags.some((tag) => tag.toLowerCase().includes(query)),
    )
  }, [optimisticNews, search])

  const refreshNews = () => {
    setRefreshing(true)
    void (async () => {
      try {
        const response = await fetch("/api/admin/news", { cache: "no-store" })
        const body = (await response.json().catch(() => ({}))) as { error?: string } | NewsDTO[]

        if (!response.ok || !Array.isArray(body)) {
          throw new Error(!Array.isArray(body) && body.error ? body.error : "No se pudo refrescar el listado")
        }

        startTransition(() => {
          setNews(body)
          applyOptimistic({ type: "replace", news: body })
          router.refresh()
        })
        toast.success("Listado actualizado")
      } catch (error) {
        toast.error(error instanceof Error ? error.message : "No se pudo refrescar el listado")
      } finally {
        setRefreshing(false)
      }
    })()
  }

  const handleDelete = async (id: string) => {
    const item = news.find((n) => n.id === id)
    const confirmed = window.confirm(`Eliminar "${item?.title ?? "esta noticia"}"?`)
    if (!confirmed) return

    const currentNews = news
    setDeletingId(id)
    applyOptimistic({ type: "delete", id })

    try {
      const response = await fetch(`/api/admin/news/${id}`, { method: "DELETE" })
      const body = (await response.json().catch(() => ({}))) as { error?: string }

      if (!response.ok) {
        throw new Error(body.error || "No se pudo eliminar la noticia")
      }

      toast.success("Noticia eliminada")
      startTransition(() => {
        setNews((prev) => prev.filter((n) => n.id !== id))
        router.refresh()
      })
    } catch (error) {
      applyOptimistic({ type: "replace", news: currentNews })
      toast.error(error instanceof Error ? error.message : "No se pudo eliminar la noticia")
    } finally {
      setDeletingId(null)
    }
  }

  return (
    <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
      <Toaster position="top-right" richColors closeButton />
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-muted-foreground">Controla el contenido publico</p>
          <h2 className="text-xl font-semibold text-foreground">Noticias</h2>
        </div>
        <div className="flex flex-wrap gap-3">
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar por titulo o etiqueta..."
            className="w-full sm:w-64 rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
          />
          <button
            type="button"
            onClick={refreshNews}
            disabled={refreshing || isPending}
            className="rounded-lg border border-border px-4 py-2 text-sm text-muted-foreground hover:bg-muted/60 transition disabled:opacity-60"
          >
            {refreshing || isPending ? "Actualizando..." : "Refrescar"}
          </button>
          <Link
            href="/admin/noticias/add"
            className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition"
          >
            Crear noticia
          </Link>
        </div>
      </div>

      <div className="mt-6 grid gap-3">
        {filteredNews.length === 0 ? (
          <div className="text-sm text-muted-foreground">
            {search ? "No hay noticias que coincidan con la busqueda." : "No hay noticias disponibles."}
          </div>
        ) : (
          filteredNews.map((item) => (
            <article
              key={item.id}
              className={cn("rounded-lg border border-border bg-background p-4 transition hover:border-primary/50")}
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs rounded-full bg-muted px-2 py-1 text-muted-foreground">{item.category}</span>
                    {item.featured && (
                      <span className="text-xs rounded-full bg-primary/10 text-primary px-2 py-1">Destacada</span>
                    )}
                    {item.breaking && (
                      <span className="text-xs rounded-full bg-destructive/10 text-destructive px-2 py-1">Urgente</span>
                    )}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">{item.excerpt}</p>
                  <div className="text-xs text-muted-foreground">
                    Publicada el {new Date(item.publishedAt).toLocaleString("es-ES")} - {item.readingTimeMinutes} min de
                    lectura
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Link
                    href={`/admin/noticias/${item.id}`}
                    className="rounded-md border border-border px-3 py-2 text-sm hover:bg-muted transition"
                  >
                    Editar
                  </Link>
                  <button
                    type="button"
                    onClick={() => handleDelete(item.id)}
                    disabled={deletingId === item.id}
                    className="rounded-md border border-destructive/50 px-3 py-2 text-sm text-destructive hover:bg-destructive/10 transition disabled:opacity-60"
                  >
                    {deletingId === item.id ? "Eliminando..." : "Eliminar"}
                  </button>
                </div>
              </div>
            </article>
          ))
        )}
      </div>
    </section>
  )
}
