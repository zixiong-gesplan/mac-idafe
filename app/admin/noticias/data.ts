import { unstable_noStore as noStore } from "next/cache"
import type { NewsDTO } from "./types"

const baseUrl = "/api/admin/news"

export async function fetchNews(): Promise<NewsDTO[]> {
  noStore()
  const response = await fetch(baseUrl, { cache: "no-store" })

  if (!response.ok) {
    throw new Error("No se pudo cargar el listado de noticias")
  }

  return response.json()
}

export async function fetchNewsByIdOrSlug(idOrSlug: string): Promise<NewsDTO | null> {
  noStore()
  const response = await fetch(`${baseUrl}/${idOrSlug}`, { cache: "no-store" })

  if (response.status === 404) {
    return null
  }

  if (!response.ok) {
    throw new Error("No se pudo cargar la noticia solicitada")
  }

  return response.json()
}
