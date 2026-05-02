/**
 * Sanity specific helper types
 */
export interface SanitySlug {
  _type: "slug";
  current: string;
}

/**
 * Case Study Sub-Interfaces
 */
export interface CaseStudyMetric {
  value: string; // Renamed from 'metric' to match Sanity schema 'featuredMetric.value'
  label: string; // Renamed from 'detail' to match Sanity schema 'featuredMetric.label'
}

export interface KeyDecision {
  title: string; // Updated from 'decision' to 'title'
  rationale: string;
}

export interface TechnicalPhase {
  phase: string;
  details: string;
}

export interface CaseStudyOutcome {
  label: string;
  description: string;
}

export interface RelatedLink {
  label: string;
  url: string;
  type?: 'external' | 'github' | 'docs' | 'other';
}

export interface FooterCTA {
  title?: string;
  description?: string;
  buttonText?: string;
}

/**
 * Main Case Study Interface
 */
export interface CaseStudy {
  _id?: string;
  _type: "caseStudy";
  title: string;
  slug: string;
  subtitle: string;
  tags: string[];

  // Preview specific fields
  cardDescription: string;
  featuredMetric?: string;

  context: {
    industry: string;
    timeline: string;
    technologies: string[];
    // problemStatement is handled by executiveSummary.challenge in the new layout
  };

  executiveSummary: {
    challenge: string;
    approach: string;
    impact?: CaseStudyMetric[]; // Keep if you still use the 4-column metric tray
  };

  // Modernized to match the flat structure in our new component
  keyDecisions: KeyDecision[];

  solution: {
    technicalImplementation: TechnicalPhase[];
    // architecturalApproach is often covered in 'approach' or 'keyDecisions'
  };

  outcomes: CaseStudyOutcome[];

  relevantLinks?: RelatedLink[];
  footerCTA?: FooterCTA;
}