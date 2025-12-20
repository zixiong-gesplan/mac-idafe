"use client"

import { useEffect, useMemo, useState } from "react"
import Link from "next/link"
import { Toaster, toast } from "sonner"
import { cn } from "@/lib/utils"
import type { NewsDTO } from "./types"

export default function AdminNewsListPage() {
  const [news, setNews] = useState<NewsDTO[]>([])
  const [loading, setLoading] = useState(true)
  const [deletingId, setDeletingId] = useState<string | null>(null)
  const [search, setSearch] = useState("")

  const filteredNews = useMemo(() => {
    if (!search) return news
    const query = search.toLowerCase()
    return news.filter(
      (item) =>
        item.title.toLowerCase().includes(query) ||
        item.excerpt.toLowerCase().includes(query) ||
        item.tags.some((tag) => tag.toLowerCase().includes(query)),
    )
  }, [news, search])

  const fetchNews = async () => {
    setLoading(true)
    try {
      const res = await fetch("/api/admin/news", { cache: "no-store" })
      if (!res.ok) throw new Error("No se pudo cargar el listado")
      const data: NewsDTO[] = await res.json()
      setNews(data)
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "No se pudo cargar el listado")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchNews()
  }, [])

  const handleDelete = async (id: string) => {
    const item = news.find((n) => n.id === id)
    const confirmed = window.confirm(`¿Eliminar "${item?.title ?? "esta noticia"}"?`)
    if (!confirmed) return
    setDeletingId(id)
    try {
      const res = await fetch(`/api/admin/news/${id}`, { method: "DELETE" })
      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.error || "No se pudo eliminar la noticia")
      }
      toast.success("Noticia eliminada")
      setNews((prev) => prev.filter((n) => n.id !== id))
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "No se pudo eliminar la noticia")
    } finally {
      setDeletingId(null)
    }
  }

  return (
    <div className="space-y-8">
      <Toaster position="top-right" richColors closeButton />
      <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
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
            <Link
              href="/admin/noticias/add"
              className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition"
            >
              Crear noticia
            </Link>
          </div>
        </div>

        <div className="mt-6 grid gap-3">
          {loading ? (
            <div className="text-sm text-muted-foreground">Cargando noticias...</div>
          ) : filteredNews.length === 0 ? (
            <div className="text-sm text-muted-foreground">No hay noticias que coincidan.</div>
          ) : (
            filteredNews.map((item) => (
              <article
                key={item.id}
                className={cn("rounded-lg border border-border bg-background p-4 transition hover:border-primary/50")}
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs rounded-full bg-muted px-2 py-1 text-muted-foreground">
                        {item.category}
                      </span>
                      {item.featured && (
                        <span className="text-xs rounded-full bg-primary/10 text-primary px-2 py-1">Destacada</span>
                      )}
                      {item.breaking && (
                        <span className="text-xs rounded-full bg-destructive/10 text-destructive px-2 py-1">
                          Urgente
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">{item.excerpt}</p>
                    <div className="text-xs text-muted-foreground">
                      Publicada el {new Date(item.publishedAt).toLocaleString("es-ES")} ·{" "}
                      {item.readingTimeMinutes} min de lectura
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
    </div>
  )
}
