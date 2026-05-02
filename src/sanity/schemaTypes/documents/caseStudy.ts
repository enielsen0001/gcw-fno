export default {
  name: 'caseStudy',
  title: 'Case Study',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } },
    { name: 'subtitle', title: 'Subtitle', type: 'text', rows: 3 },
    { name: 'tags', title: 'Tags', type: 'array', of: [{ type: 'string' }] },

    // Preview Fields for Cards
    {
      name: 'cardDescription',
      title: 'Card Description',
      type: 'text',
      rows: 2,
      description: 'The short hook used on the homepage/portfolio grid cards.'
    },
    {
      name: 'featuredMetric',
      title: 'Featured Metric',
      type: 'text',
      description: 'Optional: A high-impact stat to highlight on the card.',
    },

    {
      name: 'context',
      title: 'Project Context',
      type: 'object',
      fields: [
        { name: 'industry', type: 'string' },
        { name: 'timeline', type: 'string' },
        { name: 'technologies', type: 'array', of: [{ type: 'string' }] },
      ]
    },

    {
      name: 'executiveSummary',
      title: 'Executive Summary',
      type: 'object',
      fields: [
        { name: 'challenge', type: 'text', rows: 4 },
        { name: 'approach', type: 'text', rows: 4 },
      ]
    },

    {
      name: 'solution',
      title: 'Solution Details',
      type: 'object',
      fields: [
        {
          name: 'keyDecisions',
          title: 'Pivotal Decisions',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              { name: 'title', title: 'The Decision', type: 'string' },
              { name: 'rationale', title: 'Rationale', type: 'text', rows: 3 }
            ]
          }]
        },
        {
          name: 'technicalImplementation',
          title: 'Implementation Timeline',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              { name: 'phase', type: 'string' },
              { name: 'details', type: 'text', rows: 3 }
            ]
          }]
        }
      ]
    },

    {
      name: 'outcomes',
      title: 'Key Outcomes',
      description: 'Generalized impact beyond just performance metrics.',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'label', title: 'Outcome Label', type: 'string', description: 'e.g., Code Maintainability' },
          { name: 'description', title: 'Description', type: 'text', rows: 3 }
        ]
      }]
    },

    {
      name: 'relevantLinks',
      title: 'Relevant Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'label', title: 'Link Label', type: 'string' },
            { name: 'url', title: 'URL', type: 'url' },
          ]
        }
      ]
    },

    {
      name: 'footerCTA',
      title: 'Footer Call to Action',
      type: 'object',
      fields: [
        { name: 'title', type: 'string', initialValue: 'Facing Similar Challenges?' },
        { name: 'description', type: 'text', initialValue: "Every modernization journey is unique..." },
        { name: 'buttonText', type: 'string', initialValue: 'Schedule a Consultation' }
      ]
    }
  ]
}