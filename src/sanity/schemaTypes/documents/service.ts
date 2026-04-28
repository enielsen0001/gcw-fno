import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string' }),
    defineField({ name: 'slug', type: 'slug', options: { source: 'title' } }),
    defineField({
      name: 'icon',
      type: 'string',
      description: 'The Lucide icon name (e.g., Database, GitBranch, Shield)'
    }),
    defineField({
      name: 'shortDescription',
      type: 'text',
      rows: 3,
      description: 'Used for cards and lists.'
    }),
    defineField({ name: 'valueProposition', type: 'text', rows: 3 }),

    // Process Array
    defineField({
      name: 'process',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'phase', type: 'string' },
          { name: 'description', type: 'text' }
        ]
      }]
    }),

    // Testimonials Array
    defineField({
      name: 'testimonials',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'quote', type: 'text' },
          { name: 'author', type: 'string' }
        ]
      }]
    })
  ],
})