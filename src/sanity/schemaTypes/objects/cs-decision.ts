import { defineType, defineField } from 'sanity'

export const csDecision = defineType({
  name: 'cs-decision',
  type: 'object',
  title: 'Case Study Decision',
  fields: [
    defineField({ name: 'decision', type: 'string', title: 'Decision Title' }),
    defineField({ name: 'rationale', type: 'text', title: 'Rationale', rows: 3 }),
  ]
})