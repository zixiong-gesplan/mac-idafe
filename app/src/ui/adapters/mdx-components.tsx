'use client'

import type { MDXComponents } from 'mdx/types'
import Image, { ImageProps } from 'next/image'
 
// (Opcional) un helper para clases, si ya usas cn() / clsx, cámbialo
const cn = (...classes: Array<string | false | null | undefined>) =>
  classes.filter(Boolean).join(" ")

export const components = {
  // Headings
  h1: ({ children }) => (
    <h1 className="scroll-mt-24 text-4xl font-semibold tracking-tight text-foreground">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="scroll-mt-24 mt-10 text-2xl font-semibold tracking-tight text-foreground border-b border-border pb-2">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="scroll-mt-24 mt-8 text-xl font-semibold tracking-tight text-foreground">
      {children}
    </h3>
  ),
  h4: ({ children }) => (
    <h4 className="scroll-mt-24 mt-6 text-lg font-semibold tracking-tight text-foreground">
      {children}
    </h4>
  ),

  // Text
  p: ({ children }) => (
    <p className="mt-4 leading-7 text-foreground/90">{children}</p>
  ),
  strong: ({ children }) => (
    <strong className="font-semibold text-foreground">{children}</strong>
  ),
  em: ({ children }) => (
    <em className="italic text-foreground/90">{children}</em>
  ),

  // Links
  a: ({ children, href }) => (
    <a
      href={href}
      className="text-primary underline underline-offset-4 decoration-primary/40 hover:decoration-primary focus-visible-ring rounded-sm"
    >
      {children}
    </a>
  ),

  // Lists
  ul: ({ children }) => (
    <ul className="mt-4 ml-6 list-disc space-y-2 text-foreground/90">{children}</ul>
  ),
  ol: ({ children }) => (
    <ol className="mt-4 ml-6 list-decimal space-y-2 text-foreground/90">{children}</ol>
  ),
  li: ({ children }) => <li className="leading-7">{children}</li>,

  // Horizontal rule
  hr: () => <hr className="my-10 border-border" />,

  // Blockquote
  blockquote: ({ children }) => (
    <blockquote className="mt-6 border-l-4 border-primary/40 bg-accent/40 px-4 py-3 text-foreground/90 rounded-md">
      {children}
    </blockquote>
  ),

  // Images (Next/Image)
  img: (props) => (
    <span className="my-6 block overflow-hidden rounded-lg border border-border bg-card">
      <Image
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
        {...(props as ImageProps)}
        alt={(props as any).alt ?? ""}
      />
    </span>
  ),

  // Tables
  table: ({ children }) => (
    <div className="my-8 w-full overflow-x-auto rounded-lg border border-border">
      <table className="w-full text-sm">{children}</table>
    </div>
  ),
  thead: ({ children }) => (
    <thead className="bg-muted/60 text-foreground">{children}</thead>
  ),
  tbody: ({ children }) => <tbody className="bg-card">{children}</tbody>,
  tr: ({ children }) => (
    <tr className="border-b border-border last:border-b-0">{children}</tr>
  ),
  th: ({ children }) => (
    <th className="px-4 py-3 text-left font-semibold">{children}</th>
  ),
  td: ({ children }) => <td className="px-4 py-3 align-top">{children}</td>,

  // Inline code + code blocks
  code: ({ children }) => (
    <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-[0.9em] text-foreground">
      {children}
    </code>
  ),
  pre: ({ children }) => (
    <pre className="my-6 overflow-x-auto rounded-lg border border-border bg-card p-4 text-sm leading-6">
      {children}
    </pre>
  ),

  // “Callouts” (si en MDX usas <Callout type="info">...</Callout>)
  Callout: ({
    type = "info",
    title,
    children,
  }: {
    type?: "info" | "success" | "warning" | "danger"
    title?: string
    children: React.ReactNode
  }) => {
    const styles = {
      info: "border-primary/30 bg-accent/40",
      success: "border-primary/40 bg-primary/10",
      warning: "border-chart-3/40 bg-chart-3/10",
      danger: "border-destructive/40 bg-destructive/10",
    }[type]

    const titleStyles = {
      info: "text-primary",
      success: "text-primary",
      warning: "text-foreground",
      danger: "text-destructive",
    }[type]

    return (
      <div className={cn("my-6 rounded-lg border p-4", styles)}>
        {title ? (
          <div className={cn("mb-2 font-semibold", titleStyles)}>{title}</div>
        ) : null}
        <div className="text-foreground/90">{children}</div>
      </div>
    )
  },

  // “Badge” (si en MDX usas <Badge>Texto</Badge>)
  Badge: ({
    children,
    variant = "default",
  }: {
    children: React.ReactNode
    variant?: "default" | "secondary" | "outline"
  }) => {
    const styles = {
      default: "bg-primary text-primary-foreground",
      secondary: "bg-secondary text-secondary-foreground",
      outline: "border border-border bg-transparent text-foreground",
    }[variant]

    return (
      <span className={cn("inline-flex items-center rounded-md px-2 py-0.5 text-xs font-medium", styles)}>
        {children}
      </span>
    )
  },

  // “Figure” / caption (si en MDX usas <Figure caption="..."> <img .../> </Figure>)
  Figure: ({
    caption,
    children,
  }: {
    caption?: string
    children: React.ReactNode
  }) => (
    <figure className="my-8">
      {children}
      {caption ? (
        <figcaption className="mt-2 text-sm text-muted-foreground">{caption}</figcaption>
      ) : null}
    </figure>
  ),

  // “Kbd” para atajos
  Kbd: ({ children }: { children: React.ReactNode }) => (
    <kbd className="rounded border border-border bg-card px-1.5 py-0.5 font-mono text-xs text-foreground">
      {children}
    </kbd>
  ),

  // “Separator” por si quieres usarlo en MDX como <Separator />
  Separator: () => <div className="my-10 h-px w-full bg-border" />,
} satisfies MDXComponents

 
export function useMDXComponents(): MDXComponents {
  return components
}
