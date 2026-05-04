export interface ProjectContext {
    industry: string;
    timeline: string;
    technologies: string[];
}

export interface ExecutiveSummary {
    challenge: string;
    approach: string;
}

export interface KeyDecision {
    title: string;
    rationale: string;
}

export interface ImplementationPhase {
    phase: string;
    details: string;
}

export interface SolutionDetails {
    keyDecisions: KeyDecision[];
    technicalImplementation: ImplementationPhase[];
}

export interface Outcome {
    label: string;
    description: string;
}

export interface RelevantLink {
    label: string;
    url: string;
}

export interface CaseStudy {
    _id: string;
    _type: 'caseStudy';
    title: string;
    slug: {
        current: string;
    };
    subtitle: string;
    tags: string[];
    cardDescription: string;
    featuredMetric?: string; // Optional field
    context: ProjectContext;
    executiveSummary: ExecutiveSummary;
    solution: SolutionDetails;
    outcomes: Outcome[];
    relevantLinks?: RelevantLink[];
    footerCTA?: {
        title: string;
        description: string;
        buttonText: string;
    };
}