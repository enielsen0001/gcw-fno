import { defineType, defineField } from 'sanity'

export const csPhase = defineType({
  name: 'cs-phase',
  type: 'object',
  title: 'Case Study Phase',
  fields: [
    defineField({ name: 'phase', type: 'string', title: 'Phase Name' }),
    defineField({ name: 'details', type: 'text', title: 'Details', rows: 4 }),
  ]
})