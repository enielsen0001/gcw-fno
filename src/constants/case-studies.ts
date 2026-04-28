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

export { caseStudiesPreview };