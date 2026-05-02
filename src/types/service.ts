import { CaseStudy } from './case-study'; // Adjust path as needed
import { SanitySlug } from './case-study';

/**
 * Service Sub-Interfaces
 */
export interface Capability {
  term: string;
  definition: string;
}

export interface ProcessPhase {
  phase: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role?: string;
}

/**
 * Main Service Interface
 */
export interface Service {
  _id: string;
  _type: 'service';
  title: string;
  slug: SanitySlug;
  icon: string; // The Lucide icon name string

  // High-level Narrative
  cardDescription: string;
  shortDescription: string;
  valueProposition: string;

  // Strategic Content
  capabilities: Capability[];
  solutions: string[]; // The "Target Problems" list
  process: ProcessPhase[];

  // Relationships
  featuredCaseStudies?: CaseStudy[];

  // Feedback
  testimonials?: Testimonial[];
}