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
      name: 'cardDescription',
      title: 'Grid Preview Description',
      type: 'text',
      rows: 2,
      description: 'The short hook used on the homepage/index cards.'
    }),
    defineField({
      name: 'shortDescription',
      title: 'Hero Summary',
      type: 'text',
      rows: 3,
      description: 'The high-level narrative for the top of the detail page.'
    }),

    // The Jargon Decoder
    defineField({
      name: 'capabilities',
      title: 'Capabilities & Jargon',
      description: 'Bridge the gap between technical complexity and business value.',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'term', title: 'Technical Term', type: 'string' },
          { name: 'definition', title: 'Business Translation', type: 'text', rows: 3 }
        ]
      }]
    }),

    defineField({
      name: 'valueProposition',
      title: 'Deep-Dive Narrative',
      description: 'The long-form explanation of your unique approach to this service.',
      type: 'text',
      rows: 6
    }),

    // Quick-scan Solution List
    defineField({
      name: 'solutions',
      title: 'Target Problems',
      description: 'Direct pain points this service solves (e.g., "Architectural Debt").',
      type: 'array',
      of: [{ type: 'string' }]
    }),

    // Process Array
    defineField({
      name: 'process',
      title: 'The Engagement Methodology',
      description: 'How you move from audit to delivery.',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'phase', type: 'string' },
          { name: 'description', title: 'Details', type: 'text', rows: 3 }
        ]
      }]
    }),

    // Cross-Linking: Service -> Case Studies
    defineField({
      name: 'featuredCaseStudies',
      title: 'Related Case Studies',
      description: 'Link specific portfolio pieces that prove your expertise in this service.',
      type: 'array',
      of: [{
        type: 'reference',
        to: [{ type: 'caseStudy' }]
      }]
    }),

    // Testimonials
    defineField({
      name: 'testimonials',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'quote', type: 'text' },
          { name: 'author', type: 'string' },
          { name: 'role', title: 'Author Role/Company', type: 'string' }
        ]
      }]
    }),
    defineField({
      name: 'footerCTA',
      title: 'Footer Call to Action',
      type: 'object',
      description: 'Optional: Customize the closure of this service page.',
      fields: [
        {
          name: 'title',
          type: 'string',
          initialValue: 'Ready to modernize your footprint?'
        },
        {
          name: 'description',
          type: 'text',
          rows: 3,
          initialValue: "Every system evolves. Let's discuss how to transition yours toward a stable, modern future."
        },
        {
          name: 'buttonText',
          type: 'string',
          initialValue: 'Start a Conversation'
        },
        {
          name: 'variant',
          type: 'string',
          options: {
            list: [
              { title: 'Solid (High Contrast)', value: 'solid' },
              { title: 'Outline (Minimal)', value: 'outline' }
            ]
          },
          initialValue: 'solid'
        }
      ]
    }),
  ],
})