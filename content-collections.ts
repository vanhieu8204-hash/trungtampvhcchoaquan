import { defineCollection, defineConfig } from '@content-collections/core'
import { z } from 'zod'

function slugify(str: string): string {
  return str
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[đĐ]/g, 'd')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

const posts = defineCollection({
  name: 'posts',
  directory: 'content/posts',
  include: '**/*.md',
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    categories: z.array(z.string()),
    slug: z.string().optional(),
    image: z.string(),
    date: z.string(),
    content: z.string(),
  }),
  transform: async (doc) => {
    return {
      ...doc,
      slug: doc.slug || slugify(doc.title),
    }
  },
})

export default defineConfig({
  collections: [posts],
})
