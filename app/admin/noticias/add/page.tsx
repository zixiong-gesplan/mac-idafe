"use client"

import { useTransition } from "react"
import { useRouter } from "next/navigation"
import { Toaster, toast } from "sonner"
import { NewsForm } from "../components/NewsForm"
import { buildEmptyValues, toNewsPayload, type NewsFormValues } from "../schema"

export default function CreateNewsPage() {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()

  const submit = async (values: NewsFormValues) => {
    const payload = toNewsPayload(values)
    const response = await fetch("/api/admin/news", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })

    const body = await response.json().catch(() => ({}))

    if (!response.ok) {
      throw new Error((body as { error?: string }).error || "No se pudo crear la noticia")
    }
  }

  const handleSubmit = (values: NewsFormValues) => {
    startTransition(() => {
      void (async () => {
        try {
          await submit(values)
          toast.success("Noticia creada")
          router.refresh()
          router.push("/admin/noticias")
        } catch (error) {
          toast.error(error instanceof Error ? error.message : "No se pudo crear la noticia")
        }
      })()
    })
  }

  return (
    <div className="space-y-8">
      <Toaster position="top-right" richColors closeButton />
      <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-muted-foreground">Crear noticia</p>
            <h2 className="text-xl font-semibold text-foreground">Nueva noticia</h2>
          </div>
          <button
            type="button"
            onClick={() => router.push("/admin/noticias")}
            className="text-sm text-muted-foreground hover:text-foreground underline-offset-4 hover:underline"
          >
            Volver al listado
          </button>
        </div>

        <NewsForm mode="create" initialValues={buildEmptyValues()} onSubmit={handleSubmit} saving={isPending} />
      </section>
    </div>
  )
}
