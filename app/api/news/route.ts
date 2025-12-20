import { NextResponse } from "next/server"
import type { NewsFilters } from "@application/ports/NewsRepository"
import { GetNews } from "@application/use-cases/GetNews"
import { NewsRepositoryJSON } from "@infrastructure/repositories/NewsRepositoryJSON"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

export async function GET(request: Request) {
  const url = new URL(request.url)
  const filters: NewsFilters = {}

  const category = url.searchParams.get("category")
  const featured = url.searchParams.get("featured")
  const breaking = url.searchParams.get("breaking")
  const search = url.searchParams.get("search")
  const limitParam = url.searchParams.get("limit")

  if (category) filters.category = category
  if (featured !== null) filters.featured = featured === "true"
  if (breaking !== null) filters.breaking = breaking === "true"
  if (search) filters.search = search

  const repository = new NewsRepositoryJSON()
  const useCase = new GetNews(repository)

  try {
    const news = await useCase.execute(filters)
    const limited = limitParam ? news.slice(0, Number(limitParam)) : news
    return NextResponse.json(limited.map((n) => n.toJSON()))
  } catch (error) {
    const message = error instanceof Error ? error.message : "No se pudieron cargar las noticias"
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
