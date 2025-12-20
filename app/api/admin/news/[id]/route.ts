import { NextResponse } from "next/server"
import { ZodError } from "zod"
import { UpdateNews, UpdateNewsInput } from "@application/use-cases/UpdateNews"
import { DeleteNews } from "@application/use-cases/DeleteNews"
import { GetNews } from "@application/use-cases/GetNews"
import { newsPayloadSchema } from "@application/validation/newsPayload"
import { NewsRepositoryJSON } from "@infrastructure/repositories/NewsRepositoryJSON"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

type Params = {
  params: {
    id: string
  }
}

export async function GET(_request: Request, { params }: Params) {
  const repository = new NewsRepositoryJSON()
  const getNews = new GetNews(repository)

  try {
    const news = await getNews.getById(params.id)
    if (!news) {
      return NextResponse.json({ error: "Noticia no encontrada" }, { status: 404 })
    }
    return NextResponse.json(news.toJSON())
  } catch (error) {
    const message = error instanceof Error ? error.message : "No se pudo obtener la noticia"
    return NextResponse.json({ error: message }, { status: 500 })
  }
}

export async function PUT(request: Request, { params }: Params) {
  try {
    const body = await request.json()
    const payload = newsPayloadSchema.parse({ ...body, id: params.id })

    const repository = new NewsRepositoryJSON()
    const updateNews = new UpdateNews(repository)

    const updated = await updateNews.execute(payload as UpdateNewsInput)
    return NextResponse.json(updated.toJSON())
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json({ errors: error.flatten().fieldErrors }, { status: 400 })
    }

    const message = error instanceof Error ? error.message : "No se pudo actualizar la noticia"
    return NextResponse.json({ error: message }, { status: 500 })
  }
}

export async function DELETE(_request: Request, { params }: Params) {
  try {
    const repository = new NewsRepositoryJSON()
    const deleteNews = new DeleteNews(repository)
    await deleteNews.execute(params.id)
    return NextResponse.json({ ok: true })
  } catch (error) {
    const message = error instanceof Error ? error.message : "No se pudo eliminar la noticia"
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
