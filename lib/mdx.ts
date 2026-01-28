import { promises as fs } from "fs"
import path from "path"
import matter from "gray-matter"
import readingTime from "reading-time"

const MDX_DIR = path.join(process.cwd(), "app", "mdx-pages")

export async function getMdxSlugs(): Promise<string[]> {
  const entries = await fs.readdir(MDX_DIR, { withFileTypes: true })
  return entries
    .filter((entry) => entry.isFile() && entry.name.endsWith(".mdx"))
    .map((entry) => entry.name.replace(/\.mdx$/, ""))
}

export async function getMdxPost(slug: string) {
  const filePath = path.join(MDX_DIR, `${slug}.mdx`)
  const raw = await fs.readFile(filePath, "utf8")
  const { data, content } = matter(raw)
  const stats = readingTime(content)

  return {
    slug,
    data,
    content,
    readingTimeMinutes: Math.max(1, Math.round(stats.minutes)),
  }
}
