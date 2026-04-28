import {
  Database,
  GitBranch,
  Layers,
  Shield,
  Zap,
  Code2,
  ArrowUpRight,
} from "lucide-react";

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