const caseStudiesPreview = [
  {
    slug: "monolith-to-modular",
    title: "From Monolith to Modular",
    subtitle: "A Strangler Fig Transformation",
    description:
      "Incrementally extracted domain-specific services from a 10-year-old PHP monolith, enabling parallel team development and reducing deployment risk.",
    tags: ["Laravel", "API Design", "Microservices"],
    impact: "67% faster deployment cycles",
  },
  {
    slug: "legacy-api-modernization",
    title: "Legacy API Modernization",
    subtitle: "REST to GraphQL Migration",
    description:
      "Designed and implemented a GraphQL layer over existing REST endpoints, improving frontend developer experience while maintaining backward compatibility.",
    tags: ["GraphQL", "API Gateway", "Developer Experience"],
    impact: "3x faster feature development",
  },
  {
    slug: "database-architecture-redesign",
    title: "Database Architecture Redesign",
    subtitle: "From Shared DB to Service-Oriented",
    description:
      "Led data migration strategy for transitioning from shared database architecture to isolated service databases with event-driven synchronization.",
    tags: ["PostgreSQL", "Event Sourcing", "Data Migration"],
    impact: "89% reduction in deployment coupling",
  },
  {
    slug: "feature-flag-infrastructure",
    title: "Feature Flag Infrastructure",
    subtitle: "Progressive Rollout System",
    description:
      "Built enterprise feature flag system enabling gradual rollouts, A/B testing, and instant rollback capabilities for mission-critical features.",
    tags: ["LaunchDarkly", "DevOps", "Risk Mitigation"],
    impact: "Zero-downtime deployments",
  },
] as const;

export const caseStudiesData = [
  {
    slug: 'monolith-to-modular',
    title: 'From Monolith to Modular',
    subtitle: 'A Strangler Fig Transformation',
    summary: 'Incrementally extracted domain-specific services from a 10-year-old PHP monolith, enabling parallel team development and reducing deployment risk.',
    tags: ['Laravel', 'API Design', 'Microservices'],
    executiveSummary: {
      challenge: 'A mature SaaS platform built on a decade-old Laravel monolith faced severe scaling constraints. Multiple teams were blocked by deployment conflicts, feature development took months instead of weeks, and the risk of breaking changes prevented innovation.',
      approach: 'Implemented a strangler fig pattern to incrementally extract bounded contexts into independent services while maintaining system stability and zero customer downtime.',
      impact: [
        { metric: '67% faster deployment cycles', detail: 'From 2-week release cycles to continuous deployment' },
        { metric: '4x increase in team velocity', detail: 'Teams now deploy independently without coordination overhead' },
        { metric: 'Zero production incidents', detail: 'During 14-month migration period' },
        { metric: '40% reduction in infrastructure costs', detail: 'Through targeted service scaling instead of monolith scaling' },
      ],
    },
    context: {
      industry: 'Enterprise SaaS',
      teamSize: '45 engineers across 6 teams',
      timeline: '14 months',
      technologies: ['Laravel', 'PostgreSQL', 'Redis', 'Docker', 'Kubernetes', 'GraphQL'],
      problemStatement: 'The monolithic architecture had become the primary constraint on business growth. The platform served 500+ enterprise customers processing millions of transactions daily, but the technical foundation prevented the organization from capitalizing on market opportunities. New features required cross-team coordination, testing cycles took weeks, and the risk of regression meant teams avoided refactoring. The business needed to move faster, but the architecture made that impossible.',
    },
    solution: {
      architecturalApproach: 'Rather than attempting a risky big-bang rewrite, we implemented the strangler fig pattern—incrementally extracting bounded contexts while routing traffic intelligently between the monolith and new services.',
      keyDecisions: [
        {
          decision: 'API-First Domain Extraction',
          rationale: 'Each extracted domain would expose a versioned API contract, allowing parallel development and independent deployment cycles.',
        },
        {
          decision: 'Read/Write Split Migration',
          rationale: 'New services handled writes immediately while gradually migrating read paths, reducing migration risk and allowing fast rollback.',
        },
        {
          decision: 'Shared Event Bus',
          rationale: 'Event-driven architecture enabled loose coupling between services while maintaining data consistency across system boundaries.',
        },
        {
          decision: 'Feature Flag Infrastructure',
          rationale: 'Progressive rollouts and instant rollback capabilities provided safety net during migration.',
        },
      ],
      technicalImplementation: [
        {
          phase: 'Foundation (Months 1-3)',
          details: 'Built shared infrastructure: API gateway, event bus, monitoring, and feature flag system. Established contracts and migration patterns that would scale across all future extractions.',
        },
        {
          phase: 'First Extraction (Months 4-6)',
          details: 'Extracted billing domain as proof of concept. This established the migration playbook and surfaced cross-cutting concerns before scaling the pattern.',
        },
        {
          phase: 'Parallel Extraction (Months 7-12)',
          details: 'Multiple teams extracted their respective domains simultaneously using the proven pattern: user management, notifications, reporting, and integrations.',
        },
        {
          phase: 'Optimization (Months 13-14)',
          details: 'Refined service boundaries, optimized cross-service communication, and decommissioned legacy monolith code paths.',
        },
      ],
    },
    outcomes: {
      businessImpact: 'The architectural transformation unlocked the product roadmap that had been blocked for years. Teams now ship features independently, A/B test at scale, and iterate based on customer feedback within days instead of quarters. The business captured two major enterprise contracts that would have been impossible to deliver on the legacy architecture.',
      technicalImpact: 'Engineers report dramatically improved developer experience. Local development is faster, testing is more reliable, and the system is more observable. The bounded context extraction forced teams to clarify domain boundaries, improving code quality and reducing cross-team dependencies.',
      lessonsLearned: [
        'Start with infrastructure and patterns before extracting domains—the upfront investment pays dividends when scaling the approach.',
        'Feature flags are non-negotiable for zero-downtime migrations—they provide the safety net that enables confidence.',
        'Extract the most painful domain first to build organizational trust, even if it\'s not the cleanest extraction from a technical perspective.',
        'Event-driven architecture requires different operational muscle—invest in observability early.',
      ],
    },
  },
  {
    slug: 'legacy-api-modernization',
    title: 'Legacy API Modernization',
    subtitle: 'REST to GraphQL Migration',
    summary: 'Designed and implemented a GraphQL layer over existing REST endpoints, improving frontend developer experience while maintaining backward compatibility.',
    tags: ['GraphQL', 'API Gateway', 'Developer Experience'],
    executiveSummary: {
      challenge: 'Frontend teams were bottlenecked by a rigid REST API that required multiple round-trips for common use cases and frequent backend coordination for new features.',
      approach: 'Built a GraphQL federation layer that unified existing REST services while maintaining backward compatibility for legacy clients.',
      impact: [
        { metric: '3x faster feature development', detail: 'Frontend teams ship without backend coordination' },
        { metric: '70% reduction in API requests', detail: 'From 8-12 requests per page load to 1-2 GraphQL queries' },
        { metric: '90% adoption within 6 months', detail: 'All new features built on GraphQL' },
        { metric: 'Zero breaking changes', detail: 'Legacy REST APIs maintained full compatibility' },
      ],
    },
    context: {
      industry: 'E-commerce Platform',
      teamSize: '12 frontend engineers, 8 backend engineers',
      timeline: '8 months',
      technologies: ['GraphQL', 'Apollo Federation', 'Node.js', 'REST APIs', 'TypeScript'],
      problemStatement: 'The frontend application made 8-12 REST API calls to render a single product page. Each new feature required backend API changes, creating coordination overhead and slowing feature development. Mobile apps suffered from poor performance on slow connections. The business needed faster iteration cycles and better mobile performance.',
    },
    solution: {
      architecturalApproach: 'Rather than rewriting backend services, we built a GraphQL federation layer that composed existing REST APIs into a unified graph, giving frontends the flexibility they needed without disrupting working systems.',
      keyDecisions: [
        {
          decision: 'Federation Over Monolithic GraphQL',
          rationale: 'Allow teams to own their domain schemas and evolve independently rather than creating a centralized bottleneck.',
        },
        {
          decision: 'Gradual Migration Strategy',
          rationale: 'Support both REST and GraphQL simultaneously, allowing teams to migrate incrementally without big-bang cutover.',
        },
        {
          decision: 'TypeScript Code Generation',
          rationale: 'Generate TypeScript types from GraphQL schemas to provide compile-time safety and excellent IDE support.',
        },
      ],
      technicalImplementation: [
        {
          phase: 'Foundation (Months 1-2)',
          details: 'Set up Apollo Federation gateway, established schema design patterns, and created developer tooling for local GraphQL development.',
        },
        {
          phase: 'Initial Schema (Months 3-4)',
          details: 'Federated product catalog and user services into initial unified graph. Proved the pattern with one critical user journey.',
        },
        {
          phase: 'Team Enablement (Months 5-6)',
          details: 'Trained teams on GraphQL patterns, established best practices, and rolled out code generation tooling.',
        },
        {
          phase: 'Full Rollout (Months 7-8)',
          details: 'All major domains federated into the graph. Frontend teams migrated critical paths from REST to GraphQL.',
        },
      ],
    },
    outcomes: {
      businessImpact: 'Frontend teams now ship features 3x faster without waiting for backend API changes. Mobile app performance improved dramatically, reducing bounce rates on slow connections. The unified graph enabled new product experiences that were previously too expensive to build.',
      technicalImpact: 'Developer experience improved across both frontend and backend teams. Frontends gained flexibility and type safety. Backends maintained autonomy while benefiting from clearer domain boundaries enforced by schema design.',
      lessonsLearned: [
        'Federation complexity is worth it for team autonomy—the alternative is a centralized schema team that becomes a bottleneck.',
        'TypeScript code generation is a game-changer for frontend adoption—the DX improvements drive migration.',
        'Maintain REST APIs longer than you think necessary—some clients will never migrate and that\'s okay.',
      ],
    },
  },
  {
    slug: 'database-architecture-redesign',
    title: 'Database Architecture Redesign',
    subtitle: 'From Shared DB to Service-Oriented',
    summary: 'Led data migration strategy for transitioning from shared database architecture to isolated service databases with event-driven synchronization.',
    tags: ['PostgreSQL', 'Event Sourcing', 'Data Migration'],
    executiveSummary: {
      challenge: 'Multiple services sharing a single PostgreSQL database created coupling, prevented independent scaling, and made schema changes high-risk cross-team coordination efforts.',
      approach: 'Migrated to service-owned databases with event-driven synchronization, maintaining data consistency while eliminating shared database coupling.',
      impact: [
        { metric: '89% reduction in deployment coupling', detail: 'Services now deploy independently without schema coordination' },
        { metric: '5x improvement in query performance', detail: 'Through service-specific database optimization' },
        { metric: 'Zero data loss', detail: 'During migration of 2.4TB across 180 tables' },
        { metric: '60% reduction in deadlocks', detail: 'By eliminating cross-service transactions' },
      ],
    },
    context: {
      industry: 'Financial Services',
      teamSize: '8 backend engineers, 2 DBAs',
      timeline: '10 months',
      technologies: ['PostgreSQL', 'Apache Kafka', 'Debezium', 'Docker', 'Python'],
      problemStatement: 'Six microservices shared a single PostgreSQL database, creating false service boundaries. Any schema change required coordination across all teams. Database locks from one service impacted others. The shared database prevented independent scaling and made it impossible to optimize queries for specific service needs.',
    },
    solution: {
      architecturalApproach: 'Each service received its own PostgreSQL database. Event sourcing patterns enabled services to maintain eventually consistent projections of data owned by other services, eliminating the need for cross-service database queries.',
      keyDecisions: [
        {
          decision: 'Event-Driven Data Synchronization',
          rationale: 'Rather than synchronous cross-service queries, services publish domain events that others consume to build local projections.',
        },
        {
          decision: 'Change Data Capture (CDC)',
          rationale: 'Use Debezium to capture database changes as events during migration, ensuring no writes were lost during cutover.',
        },
        {
          decision: 'Dual-Write Migration Pattern',
          rationale: 'Write to both old and new databases during migration, allowing safe rollback and gradual traffic shifting.',
        },
      ],
      technicalImplementation: [
        {
          phase: 'Data Ownership Mapping (Months 1-2)',
          details: 'Analyzed 180 tables to determine canonical data ownership. Identified aggregate boundaries and established event contracts.',
        },
        {
          phase: 'Event Infrastructure (Months 3-4)',
          details: 'Built event bus (Kafka), set up CDC pipeline (Debezium), and created event schema registry.',
        },
        {
          phase: 'Service-by-Service Migration (Months 5-9)',
          details: 'Migrated one service at a time: provision new database, implement dual-write, validate consistency, shift reads, decommission old tables.',
        },
        {
          phase: 'Optimization & Cleanup (Month 10)',
          details: 'Removed dual-write logic, optimized service-specific indexes, and decommissioned shared database.',
        },
      ],
    },
    outcomes: {
      businessImpact: 'Teams now deploy database schema changes independently without cross-team coordination. This eliminated a major source of deployment delays and enabled faster feature development. The isolated databases also enabled service-specific scaling, reducing infrastructure costs.',
      technicalImpact: 'Query performance improved dramatically when teams could optimize indexes for their specific access patterns. The event-driven architecture forced clearer thinking about data ownership and domain boundaries. Debugging became easier with service-isolated data.',
      lessonsLearned: [
        'Data ownership decisions are the hardest part—invest heavily in getting aggregate boundaries right before migration.',
        'Change Data Capture is essential for zero-data-loss migrations—don\'t trust application-level dual writes alone.',
        'Eventually consistent systems require different mental models—invest in team education and observability.',
      ],
    },
  },
  {
    slug: 'feature-flag-infrastructure',
    title: 'Feature Flag Infrastructure',
    subtitle: 'Progressive Rollout System',
    summary: 'Built enterprise feature flag system enabling gradual rollouts, A/B testing, and instant rollback capabilities for mission-critical features.',
    tags: ['LaunchDarkly', 'DevOps', 'Risk Mitigation'],
    executiveSummary: {
      challenge: 'All-or-nothing feature releases created unacceptable risk for a platform serving millions of users. Rollbacks required emergency deploys, and A/B testing was impossible.',
      approach: 'Implemented enterprise feature flag infrastructure with progressive rollout capabilities, empowering teams to ship features incrementally with instant rollback.',
      impact: [
        { metric: 'Zero-downtime deployments', detail: 'Features deployed dark and enabled progressively' },
        { metric: '95% reduction in rollback time', detail: 'From 45-minute emergency deploys to instant flag toggle' },
        { metric: '10x increase in A/B experiments', detail: 'From quarterly experiments to continuous testing' },
        { metric: '100% team adoption', detail: 'Within 4 months across all engineering teams' },
      ],
    },
    context: {
      industry: 'Social Media Platform',
      teamSize: '30 engineers across 5 product teams',
      timeline: '5 months',
      technologies: ['LaunchDarkly', 'React', 'Node.js', 'DataDog', 'Kubernetes'],
      problemStatement: 'Feature releases were high-stress events. Any bug discovered post-deploy required an emergency rollback, creating pressure to avoid shipping ambitious features. Product teams wanted to A/B test ideas but lacked the infrastructure. The business needed to ship faster while reducing risk.',
    },
    solution: {
      architecturalApproach: 'Integrated LaunchDarkly across frontend and backend systems with standardized patterns for progressive rollouts, percentage-based targeting, and metric-driven decision making.',
      keyDecisions: [
        {
          decision: 'Managed Service Over Self-Hosted',
          rationale: 'LaunchDarkly provides enterprise reliability and eliminates operational overhead of managing flag infrastructure.',
        },
        {
          decision: 'Targeting Rules + Metrics',
          rationale: 'Combine targeting flexibility with automated metric collection to enable data-driven rollout decisions.',
        },
        {
          decision: 'Flag Lifecycle Automation',
          rationale: 'Automatically detect stale flags and enforce cleanup to prevent technical debt accumulation.',
        },
      ],
      technicalImplementation: [
        {
          phase: 'Foundation (Month 1)',
          details: 'Integrated LaunchDarkly SDKs across frontend and backend. Established flag naming conventions and usage patterns.',
        },
        {
          phase: 'Pattern Establishment (Month 2)',
          details: 'Built reusable React components and backend middleware for common flag patterns. Created developer documentation and examples.',
        },
        {
          phase: 'Observability Integration (Month 3)',
          details: 'Connected flags to DataDog for automated metric tracking. Built dashboards showing flag usage and impact metrics.',
        },
        {
          phase: 'Team Enablement (Months 4-5)',
          details: 'Trained teams on progressive rollout strategies. Established runbooks for flag-based incidents. Implemented automated flag cleanup.',
        },
      ],
    },
    outcomes: {
      businessImpact: 'Product teams ship features confidently, knowing they can instantly disable them if issues arise. A/B testing became routine rather than exceptional, enabling data-driven product decisions. Faster shipping velocity combined with lower risk unlocked more ambitious feature development.',
      technicalImpact: 'Engineering culture shifted from "deploy and hope" to "deploy dark and validate." Teams embrace progressive rollouts as standard practice. The ability to instantly roll back features without deploys eliminated emergency weekend deployments.',
      lessonsLearned: [
        'Feature flags are cultural, not just technical—invest heavily in team education and establishing patterns.',
        'Flag cleanup discipline is critical—automate detection of stale flags or they become technical debt.',
        'Observability integration is non-negotiable—flags without metrics are just boolean configs.',
      ],
    },
  },
] as const;


export { caseStudiesPreview, caseStudiesData };