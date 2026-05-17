export interface ProjectContext {
    role?: string;
    industry: string;
    timeline: string;
    technologies: string[];
}

export interface ExecutiveSummary {
    //  any[] to properly handle Portable Text blocks
    challenge: any[];
    approach: any[];
}

export interface KeyDecision {
    _key?: string;
    title: string;
    rationale: any[];   // any[] for rich-text documentation layout support
}

export interface ImplementationPhase {
    _key?: string;
    phase: string;
    details: any[];     // any[] for block processing layout support
}

export interface SolutionDetails {
    keyDecisions: KeyDecision[];
    technicalImplementation: ImplementationPhase[];
}

export interface Outcome {
    _key?: string;
    label: string;
    description: string;
}

export interface RelevantLink {
    _key?: string;
    label: string;
    url: string;
}

export interface Work {
    _id: string;
    _type: 'work';
    title: string;
    slug: string;
    subtitle: string;
    tags: string[];
    cardDescription: string;
    featuredMetric?: string;
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