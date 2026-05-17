export default {
    name: "work",
    title: "Work / Case Study",
    type: "document",
    fields: [
        { name: "title", title: "Title", type: "string" },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: { source: "title" },
        },
        { name: "subtitle", title: "Project Subtitle / Setting", type: "text", rows: 3 },
        {
            name: "tags",
            title: "Tags",
            type: "array",
            of: [{ type: "string" }],
        },

        // Preview Fields for Cards
        {
            name: "cardDescription",
            title: "Grid Preview Description",
            type: "text",
            rows: 2,
            description:
                "The short, blunt hook used on the homepage and work portfolio grid cards.",
        },
        {
            name: "featuredMetric",
            title: "Featured Outcome Metric",
            type: "text",
            description:
                "Optional: A high-impact performance or business stat to highlight on the card (e.g., 'Core Web Vitals improved by 45%').",
        },

        {
            name: "context",
            title: "Project Setting",
            type: "object",
            fields: [
                {
                    name: "role",
                    title: "Your Specific Role / Allocation",
                    type: "string",
                    description: "e.g., Lead Cross-Stack Engineer, Sole Developer"
                },
                { name: "industry", title: "Industry", type: "string" },
                { name: "timeline", title: "Timeline", type: "string", description: "e.g., 6-week sprint, ongoing support" },
                {
                    name: "technologies",
                    title: "System Ecosystem / Tools Used",
                    type: "array",
                    of: [{ type: "string" }],
                },
            ],
        },

        {
            name: "executiveSummary",
            title: "Core Blueprint Summary",
            type: "object",
            fields: [
                {
                    name: "challenge",
                    title: "The Problem / Ambiguity",
                    type: "array",
                    of: [{ type: "block" }],
                    description: "What technical debt or business constraint needed to be solved? (Supports rich formatting and inline code highlights)."
                },
                {
                    name: "approach",
                    title: "The Engineering Path",
                    type: "array",
                    of: [{ type: "block" }],
                    description: "How did you map out the architecture and evaluate risks? (Supports rich text)."
                },
            ],
        },

        {
            name: "solution",
            title: "Technical Decisions & Execution",
            type: "object",
            fields: [
                {
                    name: "keyDecisions",
                    title: "Pivotal Architecture Choices",
                    type: "array",
                    of: [
                        {
                            type: "object",
                            fields: [
                                {
                                    name: "title",
                                    title: "The Dilemma / Choice",
                                    type: "string",
                                },
                                {
                                    name: "rationale",
                                    title: "Technical & Business Rationale",
                                    type: "array",
                                    of: [{ type: "block" }],
                                    description: "Why this tool or pattern was selected over alternatives."
                                },
                            ],
                        },
                    ],
                },
                {
                    name: "technicalImplementation",
                    title: "The Build & Integration Phases",
                    type: "array",
                    of: [
                        {
                            type: "object",
                            fields: [
                                { name: "phase", title: "Build Phase Name", type: "string" },
                                {
                                    name: "details",
                                    title: "Engineering Details",
                                    type: "array",
                                    of: [{ type: "block" }]
                                },
                            ],
                        },
                    ],
                },
            ],
        },

        {
            name: "outcomes",
            title: "System Outcomes",
            description: "Practical utility and long-term impact metrics for the product, team, and users.",
            type: "array",
            of: [
                {
                    type: "object",
                    fields: [
                        {
                            name: "label",
                            title: "Outcome Anchor",
                            type: "string",
                            description: "e.g., Code Longevity, Platform Interoperability",
                        },
                        {
                            name: "description",
                            title: "Practical Impact Details",
                            type: "text",
                            rows: 3,
                        },
                    ],
                },
            ],
        },

        {
            name: "relevantLinks",
            title: "Live URLs or Repository Proofs",
            type: "array",
            of: [
                {
                    type: "object",
                    fields: [
                        { name: "label", title: "Link Destination Label", type: "string" },
                        { name: "url", title: "URL", type: "url" },
                    ],
                },
            ],
        },

        {
            name: "footerCTA",
            title: "Footer Call to Action Override",
            type: "object",
            fields: [
                {
                    name: "title",
                    type: "string",
                    initialValue: "Have a similar problem to solve?",
                },
                {
                    name: "description",
                    type: "text",
                    initialValue: "Every software stack has its own unique hurdles. If any part of this project timeline sounds familiar, let's run a brief technical discovery talk.",
                },
                {
                    name: "buttonText",
                    type: "string",
                    initialValue: "Start a Conversation",
                },
            ],
        },
    ],
};