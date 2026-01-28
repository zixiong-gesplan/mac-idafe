import createMDX from '@next/mdx'
import { createRequire } from 'module'

const require = createRequire(import.meta.url)
 
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  // Optionally, add any other Next.js config below
}
 
const withMDX = createMDX({
  // Add markdown plugins here, as desired
  extension: /\.(md|mdx)$/,
  options: {
    // Use resolvable module paths to keep options serializable for Turbopack.
    remarkPlugins: [require.resolve('remark-gfm')],
    rehypePlugins: [
      require.resolve('rehype-slug'),
      [require.resolve('rehype-autolink-headings'), { behavior: 'wrap' }],
    ],
  },
})
 
// Merge MDX config with Next.js config
export default withMDX(nextConfig)
