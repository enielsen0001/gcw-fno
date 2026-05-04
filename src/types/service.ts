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
    role?: string; // Optional since it wasn't marked validation: rule => rule.required()
}

export interface FooterCTA {
    title: string;
    description: string;
    buttonText: string;
    variant: 'solid' | 'outline';
}

export interface FeaturedCaseStudy {
    _key: string;
    _ref: string;
    _type: string;
}

export interface Service {
    _id: string;
    _type: 'service';
    title: string;
    slug: string;
    icon: string; // Lucide icon name
    cardDescription: string;
    shortDescription: string;
    capabilities?: Capability[];
    valueProposition: string;
    solutions: string[];
    process?: ProcessPhase[];
    featuredCaseStudies?: FeaturedCaseStudy[];
    testimonials?: Testimonial[];
    footerCTA?: FooterCTA;
}