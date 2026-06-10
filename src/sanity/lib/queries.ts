// src/sanity/lib/queries.ts
import { groq } from "next-sanity";

// Fragment for repeated card data to keep things DRY across Work grids
const WORK_CARD_FIELDS = groq`
  _id,
  "slug": slug.current,
  title,
  subtitle,
  cardDescription,
  tags,
  featuredMetric,
  context {
    role,
    industry,
    timeline
  }
`;


// Fetch all work pieces for the main portfolio index page
export const ALL_CASE_STUDIES_QUERY = groq`
  *[_type == "caseStudy"] | order(_createdAt desc) {
    ${WORK_CARD_FIELDS}
  }
`;

// Fetch a subset of work for the homepage preview layout
export const CASE_STUDIES_PREVIEW_QUERY = groq`
  *[_type == "caseStudy"] | order(_createdAt desc) [0...4] {
    ${WORK_CARD_FIELDS}
  }
`;

// Fetch a single work profile deep dive by slug
export const CASE_STUDY_BY_SLUG_QUERY = groq`
  *[_type == "caseStudy" && slug.current == $slug][0] {
    ...
  }
`;
