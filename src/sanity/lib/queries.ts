// ONLY GROQ string constants
/* example use: const caseStudies = await sanityFetch<any[]>({
    query: ALL_CASE_STUDIES_QUERY
  })
*/

// src/sanity/lib/queries.ts
import { groq } from 'next-sanity'

// Fragment for repeated card data to keep things DRY
const CASE_STUDY_CARD_FIELDS = groq`
  "slug": slug.current,
  title,
  subtitle,
  cardDescription,
  tags,
  featuredMetric
`

export const ALL_CASE_STUDIES_QUERY = groq`
  *[_type == "caseStudy"] | order(_createdAt desc) {
    ${CASE_STUDY_CARD_FIELDS}
  }
`

export const CASE_STUDY_BY_SLUG_QUERY = groq`
  *[_type == "caseStudy" && slug.current == $slug][0] {
    ...,
    "impact": executiveSummary.impact[] {
       metric,
       detail
    }
  }
`

// For the landing page cards
export const SERVICE_CARD_QUERY = groq`
  *[_type == "service"] | order(title asc) {
    "slug": slug.current,
    title,
    icon,
    "description": shortDescription
  }
`

// For the service detail pages
export const SERVICE_BY_SLUG_QUERY = groq`
  *[_type == "service" && slug.current == $slug][0] {
    ...,
    process[] {
      phase,
      description
    },
    testimonials[] {
      quote,
      author
    }
  }
`