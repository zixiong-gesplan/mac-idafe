"use client"

import { useEffect, useMemo, useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Toaster, toast } from "sonner"
import { cn } from "@/lib/utils"

type NewsDTO = {
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

const newsFormSchema = z.object({
  id: z.string().optional(),
  title: z.string().min(5, "Mínimo 5 caracteres"),
  slug: z.string().optional(),
  excerpt: z.string().min(20, "Mínimo 20 caracteres"),
  content: z.string().min(20, "Mínimo 20 caracteres"),
  category: z.string().min(2, "Ingresa una categoría"),
  categorySlug: z.string().optional(),
  categoryColor: z.string().min(1, "Color obligatorio"),
  tags: z.string().optional(),
  publishedAt: z.string().min(1, "Fecha obligatoria"),
  readingTimeMinutes: z.preprocess((value) => Number(value), z.number().int().positive()),
  featured: z.boolean().default(false),
  breaking: z.boolean().default(false),
  authorName: z.string().min(2, "Nombre obligatorio"),
  authorEmail: z.string().email("Email inválido"),
  authorBio: z.string().min(10, "Bio muy corta"),
  authorAvatar: z.string().url("URL inválida").optional().or(z.literal("")),
  authorId: z.string().optional(),
})

type NewsFormData = z.infer<typeof newsFormSchema>

const buildEmptyValues = (): NewsFormData => ({
  title: "",
  slug: "",
  excerpt: "",
  content: "",
  category: "",
  categorySlug: "",
  categoryColor: "#357a38",
  tags: "",
  publishedAt: new Date().toISOString().slice(0, 16),
  readingTimeMinutes: 4,
  featured: false,
  breaking: false,
  authorName: "",
  authorEmail: "",
  authorBio: "",
  authorAvatar: "",
  authorId: "",
})

const formatDateForInput = (value: string) => {
  const date = new Date(value)
  const iso = date.toISOString()
  return iso.slice(0, 16)
}

export default function AdminNewsPage() {
  const [news, setNews] = useState<NewsDTO[]>([])
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [deletingId, setDeletingId] = useState<string | null>(null)
  const [search, setSearch] = useState("")
  const [editing, setEditing] = useState<NewsDTO | null>(null)

  const form = useForm<NewsFormData>({
    resolver: zodResolver(newsFormSchema),
    defaultValues: buildEmptyValues(),
  })

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

  const onSubmit = async (values: NewsFormData) => {
    setSaving(true)
    const tags = values.tags
      ?.split(",")
      .map((tag) => tag.trim())
      .filter(Boolean) ?? []

    const payload = {
      id: editing?.id ?? values.id,
      title: values.title,
      slug: values.slug || undefined,
      excerpt: values.excerpt,
      content: values.content,
      author: {
        id: values.authorId || editing?.author.id || crypto.randomUUID(),
        name: values.authorName,
        bio: values.authorBio,
        avatar: values.authorAvatar || undefined,
        email: values.authorEmail,
      },
      category: values.category,
      categorySlug: values.categorySlug || undefined,
      categoryColor: values.categoryColor,
      tags,
      publishedAt: new Date(values.publishedAt),
      readingTimeMinutes: Number(values.readingTimeMinutes),
      featured: values.featured,
      breaking: values.breaking,
    }

    try {
      const response = await fetch(editing ? `/api/admin/news/${editing.id}` : "/api/admin/news", {
        method: editing ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })

      if (!response.ok) {
        const data = await response.json()
        throw new Error(data.error || "No se pudo guardar la noticia")
      }

      toast.success(editing ? "Noticia actualizada" : "Noticia creada")
      setEditing(null)
      form.reset(buildEmptyValues())
      await fetchNews()
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "No se pudo guardar la noticia")
    } finally {
      setSaving(false)
    }
  }

  const startEdit = (item: NewsDTO) => {
    setEditing(item)
    form.reset({
      id: item.id,
      title: item.title,
      slug: item.slug,
      excerpt: item.excerpt,
      content: item.content,
      category: item.category,
      categorySlug: item.categorySlug,
      categoryColor: item.categoryColor,
      tags: item.tags.join(", "),
      publishedAt: formatDateForInput(item.publishedAt),
      readingTimeMinutes: item.readingTimeMinutes,
      featured: item.featured,
      breaking: item.breaking,
      authorName: item.author.name,
      authorEmail: item.author.email,
      authorBio: item.author.bio,
      authorAvatar: item.author.avatar || "",
      authorId: item.author.id,
    })
  }

  const resetForm = () => {
    setEditing(null)
    form.reset(buildEmptyValues())
  }

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
      if (editing?.id === id) resetForm()
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
            <p className="text-sm text-muted-foreground">Controla el contenido público</p>
            <h2 className="text-xl font-semibold text-foreground">Noticias</h2>
          </div>
          <div className="flex gap-3">
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Buscar por título o etiqueta..."
              className="w-full sm:w-64 rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
            />
            <button
              type="button"
              onClick={resetForm}
              className="rounded-lg border border-border px-4 py-2 text-sm font-semibold text-foreground hover:bg-muted/60 transition"
            >
              Nueva noticia
            </button>
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
                className={cn(
                  "rounded-lg border border-border bg-background p-4 transition hover:border-primary/50",
                  editing?.id === item.id && "border-primary/70 shadow-sm",
                )}
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
                    <button
                      type="button"
                      onClick={() => startEdit(item)}
                      className="rounded-md border border-border px-3 py-2 text-sm hover:bg-muted transition"
                    >
                      Editar
                    </button>
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

      <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-muted-foreground">Formulario</p>
            <h2 className="text-xl font-semibold text-foreground">
              {editing ? "Editar noticia" : "Crear nueva noticia"}
            </h2>
          </div>
          {editing && (
            <button
              type="button"
              onClick={resetForm}
              className="text-sm text-muted-foreground hover:text-foreground underline-offset-4 hover:underline"
            >
              Cancelar edición
            </button>
          )}
        </div>

        <form onSubmit={form.handleSubmit(onSubmit)} className="mt-6 grid gap-6">
          <div className="grid gap-4 md:grid-cols-2">
            <label className="grid gap-2">
              <span className="text-sm font-medium text-foreground">Título</span>
              <input
                type="text"
                {...form.register("title")}
                className="rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
                placeholder="Título de la noticia"
              />
              {form.formState.errors.title && (
                <span className="text-xs text-destructive">{form.formState.errors.title.message}</span>
              )}
            </label>

            <label className="grid gap-2">
              <span className="text-sm font-medium text-foreground">Slug</span>
              <input
                type="text"
                {...form.register("slug")}
                className="rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
                placeholder="slug-url-amigable"
              />
            </label>
          </div>

          <label className="grid gap-2">
            <span className="text-sm font-medium text-foreground">Extracto</span>
            <textarea
              {...form.register("excerpt")}
              rows={3}
              className="rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
              placeholder="Resumen breve de la noticia"
            />
            {form.formState.errors.excerpt && (
              <span className="text-xs text-destructive">{form.formState.errors.excerpt.message}</span>
            )}
          </label>

          <label className="grid gap-2">
            <span className="text-sm font-medium text-foreground">Contenido</span>
            <textarea
              {...form.register("content")}
              rows={6}
              className="rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
              placeholder="Contenido completo de la noticia"
            />
            {form.formState.errors.content && (
              <span className="text-xs text-destructive">{form.formState.errors.content.message}</span>
            )}
          </label>

          <div className="grid gap-4 md:grid-cols-3">
            <label className="grid gap-2">
              <span className="text-sm font-medium text-foreground">Categoría</span>
              <input
                type="text"
                {...form.register("category")}
                className="rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
                placeholder="Ej: Sostenibilidad"
              />
            </label>

            <label className="grid gap-2">
              <span className="text-sm font-medium text-foreground">Slug categoría</span>
              <input
                type="text"
                {...form.register("categorySlug")}
                className="rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
                placeholder="Ej: sostenibilidad"
              />
            </label>

            <label className="grid gap-2">
              <span className="text-sm font-medium text-foreground">Color categoría</span>
              <input
                type="color"
                {...form.register("categoryColor")}
                className="h-10 rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
              />
            </label>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <label className="grid gap-2">
              <span className="text-sm font-medium text-foreground">Fecha de publicación</span>
              <input
                type="datetime-local"
                {...form.register("publishedAt")}
                className="rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
              />
            </label>

            <label className="grid gap-2">
              <span className="text-sm font-medium text-foreground">Tiempo de lectura (min)</span>
              <input
                type="number"
                min={1}
                {...form.register("readingTimeMinutes", { valueAsNumber: true })}
                className="rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
              />
              {form.formState.errors.readingTimeMinutes && (
                <span className="text-xs text-destructive">
                  {form.formState.errors.readingTimeMinutes.message?.toString()}
                </span>
              )}
            </label>

            <label className="grid gap-2">
              <span className="text-sm font-medium text-foreground">Etiquetas (separadas por coma)</span>
              <input
                type="text"
                {...form.register("tags")}
                className="rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
                placeholder="educación, clima, energía"
              />
            </label>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <label className="grid gap-2">
              <span className="text-sm font-medium text-foreground">Autor</span>
              <input
                type="text"
                {...form.register("authorName")}
                className="rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
                placeholder="Nombre del autor"
              />
            </label>

            <label className="grid gap-2">
              <span className="text-sm font-medium text-foreground">Email autor</span>
              <input
                type="email"
                {...form.register("authorEmail")}
                className="rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
                placeholder="autor@email.com"
              />
            </label>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <label className="grid gap-2">
              <span className="text-sm font-medium text-foreground">Bio autor</span>
              <textarea
                {...form.register("authorBio")}
                rows={3}
                className="rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
                placeholder="Perfil corto del autor"
              />
            </label>

            <label className="grid gap-2">
              <span className="text-sm font-medium text-foreground">Avatar (URL)</span>
              <input
                type="url"
                {...form.register("authorAvatar")}
                className="rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
                placeholder="https://..."
              />
            </label>
          </div>

          <div className="flex flex-wrap gap-4">
            <label className="flex items-center gap-2 text-sm text-foreground">
              <input
                type="checkbox"
                {...form.register("featured")}
                className="h-4 w-4 rounded border-border text-primary focus:ring-primary"
              />
              Destacada
            </label>

            <label className="flex items-center gap-2 text-sm text-foreground">
              <input
                type="checkbox"
                {...form.register("breaking")}
                className="h-4 w-4 rounded border-border text-primary focus:ring-primary"
              />
              Urgente
            </label>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="submit"
              disabled={saving}
              className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition disabled:opacity-70"
            >
              {saving ? "Guardando..." : editing ? "Actualizar noticia" : "Crear noticia"}
            </button>
            <button
              type="button"
              onClick={resetForm}
              className="rounded-lg border border-border px-4 py-2 text-sm text-muted-foreground hover:bg-muted/60 transition"
            >
              Limpiar
            </button>
            <span className="text-xs text-muted-foreground">
              Guarda para ver los cambios reflejados en /noticias
            </span>
          </div>
        </form>
      </section>
    </div>
  )
}
