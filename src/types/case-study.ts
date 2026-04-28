// Base internal Sanity fields
interface SanityMetadata {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
}

// Modular Sub-types
export interface Metric {
  _key: string;
  _type: 'cs-metric';
  detail: string;
  metric: string;
}

export interface Decision {
  _key: string;
  _type: 'cs-decision';
  decision: string;
  rationale: string;
}

export interface Phase {
  _key: string;
  _type: 'cs-phase';
  details: string;
  phase: string;
}

// Main Document Sections
export interface CaseStudyContext {
  industry: string;
  problemStatement: string;
  teamSize: string;
  technologies: string[];
  timeline: string;
}

export interface ExecutiveSummary {
  approach: string;
  challenge: string;
  impact: Metric[];
}

export interface Outcomes {
  businessImpact: string;
  lessonsLearned: string[];
  technicalImpact: string;
}

export interface Solution {
  architecturalApproach: string;
  keyDecisions: Decision[];
  technicalImplementation: Phase[];
}

// The Master CaseStudy Interface
export interface CaseStudy extends SanityMetadata {
  title: string;
  subtitle: string;
  summary: string;
  tags: string[];
  slug: string;
  context: CaseStudyContext;
  executiveSummary: ExecutiveSummary;
  cardDescription: string;
  featuredMetric: string;
  outcomes: Outcomes;
  solution: Solution;
}