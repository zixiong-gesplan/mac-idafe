'use client'

import { useEffect, useState } from 'react'
import { components } from '@/app/src/ui/adapters/mdx-components'
import type { MDXComponents } from 'mdx/types'

type MdxComponent = React.ComponentType<{ components?: MDXComponents }>

interface PostClientProps {
  slug: string
}

export function PostClient({ slug }: PostClientProps) {
  const [Post, setPost] = useState<MdxComponent | null>(null)

  useEffect(() => {
    let isMounted = true
    import(`@/app/mdx-pages/${slug}.mdx`).then((mod) => {
      if (isMounted) {
        setPost(() => mod.default)
      }
    })

    return () => {
      isMounted = false
    }
  }, [slug])

  if (!Post) return null

  return <main className="prose prose-invert mx-auto my-8 px-4 sm:px-8 lg:px-16 mt-20">
      <Post components={components} />
    </main>
}
