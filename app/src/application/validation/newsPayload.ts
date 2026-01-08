import { randomUUID } from "crypto"
import { z } from "zod"

export const newsPayloadSchema = z.object({
  id: z.string().optional(),
  title: z.string().min(5, "El título debe tener al menos 5 caracteres"),
  slug: z.string().min(3, "El slug debe tener al menos 3 caracteres").optional(),
  excerpt: z.string().min(20, "El extracto debe tener al menos 20 caracteres"),
  content: z.string().min(20, "El contenido debe tener al menos 20 caracteres"),
  author: z.object({
    id: z
      .string()
      .min(1, "El autor debe tener un id")
      .optional()
      .default(() => randomUUID()),
    name: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
    bio: z.string().min(10, "La bio debe tener al menos 10 caracteres"),
    avatar: z.string().url().optional().or(z.literal("").transform(() => undefined)),
    email: z.string().email("Email inválido"),
  }),
  category: z.string().min(2, "La categoría es obligatoria"),
  categorySlug: z.string().min(2, "El slug de categoría es obligatorio").optional(),
  categoryColor: z.string().min(1, "El color de categoría es obligatorio"),
  tags: z.array(z.string().min(1)).default([]),
  publishedAt: z.preprocess((value) => new Date(value as string), z.date()),
  readingTimeMinutes: z.preprocess(
    (value) => (typeof value === "string" ? Number(value) : value),
    z.number().int().positive("El tiempo de lectura debe ser mayor a 0"),
  ),
  featured: z.boolean().default(false),
  breaking: z.boolean().default(false),
})

export type NewsPayload = z.infer<typeof newsPayloadSchema>
