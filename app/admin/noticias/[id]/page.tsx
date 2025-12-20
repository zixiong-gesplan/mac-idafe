"use client"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { Toaster, toast } from "sonner"
import { NewsForm } from "../components/NewsForm"
import type { NewsDTO } from "../types"
import { mapNewsToFormValues, toNewsPayload, type NewsFormValues } from "../schema"

export default function EditNewsPage() {
  const params = useParams<{ id: string | string[] }>()
  const router = useRouter()
  const idParam = Array.isArray(params?.id) ? params.id[0] : params?.id
  const [news, setNews] = useState<NewsDTO | null>(null)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    if (!idParam) {
      setLoading(false)
      return
    }

    const fetchNews = async () => {
      try {
        const res = await fetch(`/api/admin/news/${idParam}`, { cache: "no-store" })
        if (!res.ok) {
          throw new Error("No se pudo cargar la noticia")
        }
        const data: NewsDTO = await res.json()
        setNews(data)
      } catch (error) {
        toast.error(error instanceof Error ? error.message : "No se pudo cargar la noticia")
      } finally {
        setLoading(false)
      }
    }
    fetchNews()
  }, [idParam])

  const handleSubmit = async (values: NewsFormValues) => {
    if (!news) return
    setSaving(true)
    try {
      const payload = toNewsPayload(values, news)
      const res = await fetch(`/api/admin/news/${news.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.error || "No se pudo actualizar la noticia")
      }
      toast.success("Noticia actualizada")
      router.push("/admin/noticias")
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "No se pudo actualizar la noticia")
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="space-y-8">
      <Toaster position="top-right" richColors closeButton />
      <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-muted-foreground">Editar noticia</p>
            <h2 className="text-xl font-semibold text-foreground">{news?.title || "Cargando..."}</h2>
          </div>
          <button
            type="button"
            onClick={() => router.push("/admin/noticias")}
            className="text-sm text-muted-foreground hover:text-foreground underline-offset-4 hover:underline"
          >
            Volver al listado
          </button>
        </div>

        {loading ? (
          <p className="mt-4 text-sm text-muted-foreground">Cargando noticia...</p>
        ) : news ? (
          <NewsForm
            mode="edit"
            initialValues={mapNewsToFormValues(news)}
            onSubmit={handleSubmit}
            saving={saving}
            onCancel={() => router.push("/admin/noticias")}
          />
        ) : (
          <p className="mt-4 text-sm text-destructive">No se encontró la noticia solicitada.</p>
        )}
      </section>
    </div>
  )
}
