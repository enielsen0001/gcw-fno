import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'caseStudy',
    title: 'Case Study',
    type: 'document',
    groups: [
        { name: 'info', title: 'Basic Info' },
        { name: 'content', title: 'Full Case Study' },
    ],
    fields: [
        defineField({ name: 'title', type: 'string', group: 'info' }),
        defineField({ name: 'slug', type: 'slug', options: { source: 'title' }, group: 'info' }),
        defineField({ name: 'subtitle', type: 'string', group: 'info' }),
        defineField({
            name: 'cardDescription',
            type: 'text',
            title: 'Card Description',
            description: 'Short snippet used on the listing page cards (approx. 150-200 characters).',
            rows: 3,
            group: 'info'
        }),
        defineField({
            name: 'featuredMetric',
            type: 'string',
            title: 'Featured Impact Metric',
            description: 'e.g., 67% faster deployment cycles',
            group: 'info'
        }),
        defineField({ name: 'summary', type: 'text', rows: 3, group: 'info' }),
        defineField({
            name: 'tags',
            type: 'array',
            of: [{ type: 'string' }],
            options: { layout: 'tags' },
            group: 'info'
        }),

        // Executive Summary
        defineField({
            name: 'executiveSummary',
            type: 'object',
            group: 'content',
            fields: [
                { name: 'challenge', type: 'text' },
                { name: 'approach', type: 'text' },
                { name: 'impact', type: 'array', of: [{ type: 'cs-metric' }] },
            ]
        }),

        // Context
        defineField({
            name: 'context',
            type: 'object',
            group: 'content',
            fields: [
                { name: 'industry', type: 'string' },
                { name: 'teamSize', type: 'string' },
                { name: 'timeline', type: 'string' },
                { name: 'technologies', type: 'array', of: [{ type: 'string' }] },
                { name: 'problemStatement', type: 'text' },
            ]
        }),

        // Solution
        defineField({
            name: 'solution',
            type: 'object',
            group: 'content',
            fields: [
                { name: 'architecturalApproach', type: 'text' },
                { name: 'keyDecisions', type: 'array', of: [{ type: 'cs-decision' }] },
                { name: 'technicalImplementation', type: 'array', of: [{ type: 'cs-phase' }] },
            ]
        }),

        // Outcomes
        defineField({
            name: 'outcomes',
            type: 'object',
            group: 'content',
            fields: [
                { name: 'businessImpact', type: 'text' },
                { name: 'technicalImpact', type: 'text' },
                { name: 'lessonsLearned', type: 'array', of: [{ type: 'string' }] },
            ]
        }),
    ],
    preview: {
        select: {
            title: 'title',
            subtitle: 'subtitle',
            metric: 'featuredMetric'
        },
        prepare({ title, subtitle, metric }) {
            return {
                title: title || 'Untitled Case Study',
                subtitle: `${subtitle} | ${metric || 'No metric set'}`
            }
        }
    }
})