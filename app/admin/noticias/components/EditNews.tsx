"use client"

import { useTransition } from "react"
import { useRouter } from "next/navigation"
import { Toaster, toast } from "sonner"
import { NewsForm } from "./NewsForm"
import { mapNewsToFormValues, toNewsPayload, type NewsFormValues } from "../schema"
import type { NewsDTO } from "../types"

type Props = {
  news: NewsDTO
}

export function EditNews({ news }: Props) {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()

  const submit = async (values: NewsFormValues) => {
    const payload = toNewsPayload(values, news)
    const response = await fetch(`/api/admin/news/${news.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })

    const body = await response.json().catch(() => ({}))

    if (!response.ok) {
      throw new Error((body as { error?: string }).error || "No se pudo actualizar la noticia")
    }
  }

  const handleSubmit = (values: NewsFormValues) => {
    startTransition(() => {
      void (async () => {
        try {
          await submit(values)
          toast.success("Noticia actualizada")
          router.refresh()
          router.push("/admin/noticias")
        } catch (error) {
          toast.error(error instanceof Error ? error.message : "No se pudo actualizar la noticia")
        }
      })()
    })
  }

  return (
    <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
      <Toaster position="top-right" richColors closeButton />
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-muted-foreground">Editar noticia</p>
          <h2 className="text-xl font-semibold text-foreground">{news.title}</h2>
        </div>
        <button
          type="button"
          onClick={() => router.push("/admin/noticias")}
          className="text-sm text-muted-foreground hover:text-foreground underline-offset-4 hover:underline"
        >
          Volver al listado
        </button>
      </div>

      <NewsForm
        mode="edit"
        initialValues={mapNewsToFormValues(news)}
        onSubmit={handleSubmit}
        saving={isPending}
        onCancel={() => router.push("/admin/noticias")}
      />
    </section>
  )
}
