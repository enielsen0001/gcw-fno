import {
  Database,
  GitBranch,
  Layers,
  Shield,
  Zap,
  Code2,
  ArrowUpRight,
} from "lucide-react";


export const servicesData = [
  {
    slug: 'technical-audits',
    icon: Database,
    title: 'Technical Audits',
    shortDescription: 'Comprehensive analysis of legacy systems to identify modernization opportunities and technical debt reduction strategies.',
    valueProposition: 'Gain clarity on your system\'s current state and a clear roadmap for modernization that balances risk, cost, and business value.',
    process: [
      {
        phase: 'Discovery & Documentation',
        description: 'Deep dive into existing architecture, data flows, and technical dependencies. Document current system capabilities and constraints.',
      },
      {
        phase: 'Risk Assessment',
        description: 'Identify technical debt hotspots, security vulnerabilities, and areas of highest business impact.',
      },
      {
        phase: 'Opportunity Analysis',
        description: 'Map modernization opportunities to business goals. Prioritize initiatives by ROI and risk reduction.',
      },
      {
        phase: 'Strategic Roadmap',
        description: 'Deliver actionable recommendations with phased implementation plan and resource requirements.',
      },
    ],
    testimonials: [
      {
        quote: 'The technical audit gave us the confidence to move forward with our modernization strategy. The roadmap was clear, realistic, and aligned with our business objectives.',
        author: 'CTO, Enterprise SaaS',
      },
    ],
  },
  {
    slug: 'api-first-stewardship',
    icon: GitBranch,
    title: 'API-First Stewardship',
    shortDescription: 'Transforming monolithic architectures into modular, API-driven systems using strangler fig and incremental migration patterns.',
    valueProposition: 'Evolve your architecture incrementally without the risk of big-bang rewrites, enabling team autonomy and faster iteration cycles.',
    process: [
      {
        phase: 'API Design & Contracts',
        description: 'Establish API-first design principles and create contracts that support both current and future system states.',
      },
      {
        phase: 'Strangler Fig Implementation',
        description: 'Incrementally route traffic to new services while maintaining legacy system stability.',
      },
      {
        phase: 'Migration Choreography',
        description: 'Coordinate data migration, feature parity validation, and gradual traffic shifting.',
      },
      {
        phase: 'Legacy Decommissioning',
        description: 'Safely retire legacy components once new services achieve full feature parity and production stability.',
      },
    ],
    testimonials: [
      {
        quote: 'The strangler fig approach allowed us to modernize our core platform without disrupting our customers. We shipped new features throughout the migration.',
        author: 'VP Engineering, Fintech Platform',
      },
    ],
  },
  {
    slug: 'architectural-modernization',
    icon: Layers,
    title: 'Architectural Modernization',
    shortDescription: 'Strategic planning and execution of system-wide refactoring initiatives that minimize risk while maximizing business value.',
    valueProposition: 'Transform your architecture to support current scale and future growth without sacrificing system stability or team velocity.',
    process: [
      {
        phase: 'Current State Assessment',
        description: 'Map existing architecture, identify coupling points, and understand system boundaries.',
      },
      {
        phase: 'Target Architecture Design',
        description: 'Design future-state architecture that aligns with business goals and technical constraints.',
      },
      {
        phase: 'Migration Strategy',
        description: 'Create phased migration plan with clear success criteria and rollback procedures.',
      },
      {
        phase: 'Execution & Validation',
        description: 'Implement architectural changes iteratively with continuous validation and monitoring.',
      },
    ],
    testimonials: [
      {
        quote: 'The architectural modernization unlocked parallel team development and cut our deployment times by more than half.',
        author: 'Head of Platform, E-commerce',
      },
    ],
  },
  {
    slug: 'developer-experience',
    icon: Zap,
    title: 'Developer Experience',
    shortDescription: 'Building internal tooling and establishing patterns that empower development teams to ship faster and more reliably.',
    valueProposition: 'Improve engineering productivity and reduce cognitive load through better tooling, documentation, and development workflows.',
    process: [
      {
        phase: 'DX Assessment',
        description: 'Survey team pain points, measure current productivity metrics, and identify friction in development workflows.',
      },
      {
        phase: 'Tooling Strategy',
        description: 'Design internal developer platform strategy including local development, testing, and deployment tooling.',
      },
      {
        phase: 'Implementation & Adoption',
        description: 'Build or integrate tools that reduce manual work and improve development feedback loops.',
      },
      {
        phase: 'Documentation & Enablement',
        description: 'Create comprehensive documentation and establish patterns that scale across the engineering organization.',
      },
    ],
    testimonials: [
      {
        quote: 'Our engineers went from dreading infrastructure work to confidently shipping changes daily. The DX improvements paid for themselves immediately.',
        author: 'Engineering Manager, SaaS Startup',
      },
    ],
  },
  {
    slug: 'legacy-system-stewardship',
    icon: Shield,
    title: 'Legacy System Stewardship',
    shortDescription: 'Maintaining and incrementally improving existing systems while planning the path toward modern architecture.',
    valueProposition: 'Keep legacy systems running reliably while making strategic improvements that extend their lifespan and reduce maintenance burden.',
    process: [
      {
        phase: 'Stabilization',
        description: 'Address critical issues, improve monitoring, and establish operational baselines for legacy systems.',
      },
      {
        phase: 'Incremental Improvement',
        description: 'Identify high-value, low-risk improvements that reduce technical debt and improve maintainability.',
      },
      {
        phase: 'Knowledge Transfer',
        description: 'Document system behavior, architectural decisions, and operational procedures for team continuity.',
      },
      {
        phase: 'Evolution Planning',
        description: 'Create long-term modernization strategy that balances business needs with technical realities.',
      },
    ],
    testimonials: [
      {
        quote: 'We thought our legacy system was beyond hope, but the stewardship approach gave us a path forward that actually worked.',
        author: 'Director of Engineering, Healthcare',
      },
    ],
  },
  {
    slug: 'technical-strategy',
    icon: Code2,
    title: 'Technical Strategy',
    shortDescription: 'Senior-level guidance on technology selection, architectural decisions, and long-term engineering roadmap planning.',
    valueProposition: 'Make confident technical decisions backed by industry expertise and aligned with your business objectives.',
    process: [
      {
        phase: 'Context Gathering',
        description: 'Understand business goals, technical constraints, team capabilities, and organizational structure.',
      },
      {
        phase: 'Options Analysis',
        description: 'Evaluate technology choices and architectural approaches with clear tradeoff analysis.',
      },
      {
        phase: 'Decision Framework',
        description: 'Establish decision-making criteria and processes that scale beyond individual choices.',
      },
      {
        phase: 'Roadmap Development',
        description: 'Create multi-quarter technical roadmap aligned with business priorities and team capacity.',
      },
    ],
    testimonials: [
      {
        quote: 'Having a senior technical advisor who understands both the technical and business sides was invaluable for our scaling phase.',
        author: 'CEO, Growth-Stage Startup',
      },
    ],
  },
];


const services = [
  {
    slug: "technical-audits",
    icon: Database,
    title: "Technical Audits",
    description:
      "Comprehensive analysis of legacy systems to identify modernization opportunities and technical debt reduction strategies.",
  },
  {
    slug: "api-first-stewardship",
    icon: GitBranch,
    title: "API-First Stewardship",
    description:
      "Transforming monolithic architectures into modular, API-driven systems using strangler fig and incremental migration patterns.",
  },
  {
    slug: "architectural-modernization",
    icon: Layers,
    title: "Architectural Modernization",
    description:
      "Strategic planning and execution of system-wide refactoring initiatives that minimize risk while maximizing business value.",
  },
  {
    slug: "developer-experience",
    icon: Zap,
    title: "Developer Experience",
    description:
      "Building internal tooling and establishing patterns that empower development teams to ship faster and more reliably.",
  },
  {
    slug: "legacy-system-stewardship",
    icon: Shield,
    title: "Legacy System Stewardship",
    description:
      "Maintaining and incrementally improving existing systems while planning the path toward modern architecture.",
  },
  {
    slug: "technical-strategy",
    icon: Code2,
    title: "Technical Strategy",
    description:
      "Senior-level guidance on technology selection, architectural decisions, and long-term engineering roadmap planning.",
  },
] as const;

export { services };