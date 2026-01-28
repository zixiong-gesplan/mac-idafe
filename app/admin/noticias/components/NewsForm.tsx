"use client"

import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { newsFormSchema, type NewsFormValues, buildEmptyValues } from "../schema"

type Props = {
  mode: "create" | "edit"
  initialValues?: NewsFormValues
  onSubmit: (values: NewsFormValues) => Promise<void> | void
  saving?: boolean
  onCancel?: () => void
}

export function NewsForm({ mode, initialValues, onSubmit, saving = false, onCancel }: Props) {
  const form = useForm<NewsFormValues>({
    resolver: zodResolver(newsFormSchema),
    defaultValues: initialValues ?? buildEmptyValues(),
  })

  useEffect(() => {
    if (initialValues) {
      form.reset(initialValues)
    }
  }, [initialValues, form])

  const handleSubmit = form.handleSubmit(async (values) => {
    await onSubmit(values)
  })

  return (
    <form onSubmit={handleSubmit} className="mt-6 grid gap-6">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2">
          <span className="text-sm font-medium text-foreground">Titulo</span>
          <input
            type="text"
            {...form.register("title")}
            className="rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
            placeholder="Titulo de la noticia"
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
          <span className="text-sm font-medium text-foreground">Categoria</span>
          <input
            type="text"
            {...form.register("category")}
            className="rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
            placeholder="Ej: Sostenibilidad"
          />
        </label>

        <label className="grid gap-2">
          <span className="text-sm font-medium text-foreground">Slug categoria</span>
          <input
            type="text"
            {...form.register("categorySlug")}
            className="rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
            placeholder="Ej: sostenibilidad"
          />
        </label>

        <label className="grid gap-2">
          <span className="text-sm font-medium text-foreground">Color categoria</span>
          <input
            type="color"
            {...form.register("categoryColor")}
            className="h-10 rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
          />
        </label>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <label className="grid gap-2">
          <span className="text-sm font-medium text-foreground">Fecha de publicacion</span>
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
            placeholder="educacion, clima, energia"
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
          {saving ? "Guardando..." : mode === "edit" ? "Actualizar noticia" : "Crear noticia"}
        </button>
        <button
          type="button"
          onClick={() => form.reset(initialValues ?? buildEmptyValues())}
          className="rounded-lg border border-border px-4 py-2 text-sm text-muted-foreground hover:bg-muted/60 transition"
        >
          Limpiar
        </button>
        {onCancel && (
          <button
            type="button"
            onClick={onCancel}
            className="text-sm text-muted-foreground hover:text-foreground underline-offset-4 hover:underline"
          >
            Cancelar
          </button>
        )}
        <span className="text-xs text-muted-foreground">
          Guarda para ver los cambios reflejados en /noticias
        </span>
      </div>
    </form>
  )
}
