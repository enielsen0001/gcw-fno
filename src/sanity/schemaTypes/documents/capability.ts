import { defineField, defineType } from "sanity";

export default defineType({
    name: "capability",
    title: "Capability",
    type: "document",
    fields: [
        defineField({ name: "title", type: "string" }),
        defineField({
            name: "slug",
            type: "slug",
            options: { source: "title" },
        }),
        defineField({
            name: "icon",
            type: "string",
            description:
                "The Lucide icon name (e.g., Database, GitBranch, Terminal, Layers)",
        }),
        defineField({
            name: "cardDescription",
            title: "Grid Preview Description",
            type: "text",
            rows: 2,
            description: "The short hook used on the homepage/capabilities index cards.",
        }),
        defineField({
            name: "shortDescription",
            title: "Hero Summary",
            type: "text",
            rows: 3,
            description:
                "The high-level engineering summary for the top of the detail page.",
        }),

        defineField({
            name: "capabilities",
            title: "Technical Execution & Utility", // Better framing than 'Jargon Decoder'
            description:
                "Translate complex cross-stack engineering tasks into concrete business outcomes.",
            type: "array",
            of: [
                {
                    type: "object",
                    fields: [
                        {
                            name: "term",
                            title: "Technical Scope / Tool",
                            type: "string",
                            placeholder: "e.g., Headless CMS Integration"
                        },
                        {
                            name: "definition",
                            title: "Practical Utility / Value",
                            type: "text",
                            rows: 3,
                            placeholder: "e.g., Allows content editors to make updates safely without risking code regressions."
                        },
                    ],
                },
            ],
        }),

        defineField({
            name: "valueProposition",
            title: "Deep-Dive Narrative",
            description:
                "The engineering philosophy and approach taken to deliver this capability.",
            type: "text",
            rows: 6,
        }),

        defineField({
            name: "solutions",
            title: "Target Problems Solved",
            description:
                'Direct technical bottlenecks or system gaps you step in to fix (e.g., "API Disconnection", "Brittle Legacy UI").',
            type: "array",
            of: [{ type: "string" }],
        }),

        defineField({
            name: "process",
            title: "Development Pathways",
            description: "The pragmatic progression from discovery and plumbing to execution and launch.",
            type: "array",
            of: [
                {
                    type: "object",
                    fields: [
                        { name: "phase", type: "string", placeholder: "e.g., Technical Discovery & Auditing" },
                        {
                            name: "description",
                            title: "Details",
                            type: "text",
                            rows: 3,
                        },
                    ],
                },
            ],
        }),

        defineField({
            name: "featuredCaseStudies",
            title: "Related Work Pieces",
            description:
                "Link specific production engineering projects that prove your expertise in this capability.",
            type: "array",
            of: [
                {
                    type: "reference",
                    to: [{ type: "caseStudy" }],
                },
            ],
        }),

        defineField({
            name: "testimonials",
            title: "Feedback & Outcomes",
            type: "array",
            of: [
                {
                    type: "object",
                    fields: [
                        { name: "quote", type: "text" },
                        { name: "author", type: "string" },
                        {
                            name: "role",
                            title: "Role / Company",
                            type: "string",
                        },
                    ],
                },
            ],
        }),
        defineField({
            name: "footerCTA",
            title: "Footer Call to Action",
            type: "object",
            description:
                "Customize the closure of this capability details page.",
            fields: [
                {
                    name: "title",
                    type: "string",
                    initialValue: "Have a similar engineering hurdle to clear?",
                },
                {
                    name: "description",
                    type: "text",
                    rows: 3,
                    initialValue:
                        "Every digital system has its own quirks and historical constraints. Let's look at your stack and map out a clean path forward.",
                },
                {
                    name: "buttonText",
                    type: "string",
                    initialValue: "Start a Conversation",
                },
                {
                    name: "variant",
                    type: "string",
                    options: {
                        list: [
                            { title: "Ghost (Default Minimal)", value: "ghost" },
                            { title: "Solid (High Contrast)", value: "solid" },
                            { title: "Outline (Border Only)", value: "outline" },
                        ],
                    },
                    initialValue: "ghost",
                },
            ],
        }),
    ],
});