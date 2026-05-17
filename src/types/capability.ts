export interface TechnicalScopeUtility {
    _key?: string;
    term: string;       // Captures Technical Scope / Tool (e.g., "API Integration")
    definition: string; // Captures Practical Utility / Value (e.g., "Connects CRM smoothly")
}

export interface ProcessPhase {
    _key?: string;
    phase: string;
    description: string;
}

export interface Testimonial {
    _key?: string;
    quote: string;
    author: string;
    role?: string;
}

export interface FooterCTA {
    title: string;
    description: string;
    buttonText: string;
    variant: 'solid' | 'outline' | 'ghost';
}

export interface RelatedWorkPiece {
    _key: string;
    _ref: string;
    _type: string;
}

export interface Capability {
    _id: string;
    _type: 'capability';
    title: string;
    slug: string;
    icon: string;        // Lucide icon key name string
    cardDescription: string;
    shortDescription: string;
    capabilities?: TechnicalScopeUtility[];
    valueProposition: string;
    solutions: string[];
    process?: ProcessPhase[];
    featuredCaseStudies?: RelatedWorkPiece[];
    testimonials?: Testimonial[];
    footerCTA?: FooterCTA;
}