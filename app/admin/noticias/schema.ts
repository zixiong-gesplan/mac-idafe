import { z } from "zod"
import type { NewsDTO } from "./types"

export const newsFormSchema = z.object({
  id: z.string().optional(),
  title: z.string().min(5, "Minimo 5 caracteres"),
  slug: z.string().optional(),
  excerpt: z.string().min(20, "Minimo 20 caracteres"),
  content: z.string().min(20, "Minimo 20 caracteres"),
  category: z.string().min(2, "Ingresa una categoria"),
  categorySlug: z.string().optional(),
  categoryColor: z.string().min(1, "Color obligatorio"),
  tags: z.string().optional(),
  publishedAt: z.string().min(1, "Fecha obligatoria"),
  readingTimeMinutes: z.preprocess((value) => Number(value), z.number().int().positive()),
  featured: z.boolean().default(false),
  breaking: z.boolean().default(false),
  authorName: z.string().min(2, "Nombre obligatorio"),
  authorEmail: z.string().email("Email invalido"),
  authorBio: z.string().min(10, "Bio muy corta"),
  authorAvatar: z.string().url("URL invalida").optional().or(z.literal("")),
  authorId: z.string().optional(),
})

export type NewsFormValues = z.infer<typeof newsFormSchema>

export const buildEmptyValues = (): NewsFormValues => ({
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

export const formatDateForInput = (value: string) => {
  const date = new Date(value)
  const iso = date.toISOString()
  return iso.slice(0, 16)
}

export const mapNewsToFormValues = (news: NewsDTO): NewsFormValues => ({
  id: news.id,
  title: news.title,
  slug: news.slug,
  excerpt: news.excerpt,
  content: news.content,
  category: news.category,
  categorySlug: news.categorySlug,
  categoryColor: news.categoryColor,
  tags: news.tags.join(", "),
  publishedAt: formatDateForInput(news.publishedAt),
  readingTimeMinutes: news.readingTimeMinutes,
  featured: news.featured,
  breaking: news.breaking,
  authorName: news.author.name,
  authorEmail: news.author.email,
  authorBio: news.author.bio,
  authorAvatar: news.author.avatar || "",
  authorId: news.author.id,
})

export const toNewsPayload = (values: NewsFormValues, existing?: NewsDTO) => {
  const tags =
    values.tags
      ?.split(",")
      .map((tag) => tag.trim())
      .filter(Boolean) ?? []

  const authorId = values.authorId?.trim() || existing?.author.id

  return {
    id: values.id ?? existing?.id,
    title: values.title,
    slug: values.slug?.trim() || existing?.slug,
    excerpt: values.excerpt,
    content: values.content,
    author: {
      id: authorId,
      name: values.authorName,
      bio: values.authorBio,
      avatar: values.authorAvatar?.trim() || existing?.author.avatar,
      email: values.authorEmail,
    },
    category: values.category,
    categorySlug: values.categorySlug?.trim() || existing?.categorySlug,
    categoryColor: values.categoryColor,
    tags,
    publishedAt: new Date(values.publishedAt).toISOString(),
    readingTimeMinutes: Number(values.readingTimeMinutes),
    featured: values.featured,
    breaking: values.breaking,
  }
}
