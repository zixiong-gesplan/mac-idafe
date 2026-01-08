import { NextResponse } from "next/server"
import type { NewsFilters } from "@application/ports/NewsRepository"
import { GetNews } from "@application/use-cases/GetNews"
import { CreateNews } from "@application/use-cases/CreateNews"
import { newsPayloadSchema } from "@application/validation/newsPayload"
import { NewsRepositoryJSON } from "@infrastructure/repositories/NewsRepositoryJSON"
import { ZodError } from "zod"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

export async function GET(request: Request) {
  const noStore = { headers: { "Cache-Control": "no-store" } }
  const url = new URL(request.url)
  const filters: NewsFilters = {}

  const category = url.searchParams.get("category")
  const featured = url.searchParams.get("featured")
  const breaking = url.searchParams.get("breaking")
  const search = url.searchParams.get("search")

  if (category) filters.category = category
  if (featured !== null) filters.featured = featured === "true"
  if (breaking !== null) filters.breaking = breaking === "true"
  if (search) filters.search = search

  const repository = new NewsRepositoryJSON()
  const getNews = new GetNews(repository)

  try {
    const news = await getNews.execute(filters)
    return NextResponse.json(news.map((n) => n.toJSON()), noStore)
  } catch (error) {
    const message = error instanceof Error ? error.message : "No se pudieron cargar las noticias"
    return NextResponse.json({ error: message }, { status: 500, ...noStore })
  }
}

export async function POST(request: Request) {
  const noStore = { headers: { "Cache-Control": "no-store" } }

  try {
    const body = await request.json()
    const payload = newsPayloadSchema.parse(body)

    const repository = new NewsRepositoryJSON()
    const createNews = new CreateNews(repository)

    const created = await createNews.execute(payload)
    return NextResponse.json(created.toJSON(), { status: 201, ...noStore })
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json({ errors: error.flatten().fieldErrors }, { status: 400, ...noStore })
    }

    const message = error instanceof Error ? error.message : "No se pudo crear la noticia"
    return NextResponse.json({ error: message }, { status: 500, ...noStore })
  }
}
