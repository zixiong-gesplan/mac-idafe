"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Toaster, toast } from "sonner"
import { NewsForm } from "../components/NewsForm"
import { buildEmptyValues, toNewsPayload } from "../schema"

export default function CreateNewsPage() {
  const router = useRouter()
  const [saving, setSaving] = useState(false)

  const handleSubmit = async (values: ReturnType<typeof buildEmptyValues>) => {
    setSaving(true)
    try {
      const payload = toNewsPayload(values)
      const res = await fetch("/api/admin/news", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.error || "No se pudo crear la noticia")
      }
      toast.success("Noticia creada")
      router.push("/admin/noticias")
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "No se pudo crear la noticia")
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

        <NewsForm mode="create" initialValues={buildEmptyValues()} onSubmit={handleSubmit} saving={saving} />
      </section>
    </div>
  )
}
