export const homeContent = {
    hero: {
        heading: "Senior Front-End Engineering. Stack-Agnostic Execution.",
        subheading:
            "Twelve years of agency and product experience spent bridging the gap between complex code, intentional UI design, and actual business outcomes. I build clean front-end architectures, rescue legacy systems, and help teams launch products without the overhead of a massive agency.",
        cta: "Explore the Work",
        ctaLink: "/work",
    },
    capabilitiesContent: {
        title: "Capabilities & Technical Scaffolding",
        description:
            "I don't sell packaged services or templated fixes. I bring cross-stack context and a decade plus of practical execution to solve messy digital problems and build stable software foundations.",
    },
    portfolio: {
        title: "Problem Solving in Practice",
        description:
            "A technical look at how I untangle ambiguity, make critical architectural choices, and deliver high-performance systems that last.",
        cta: "View All Work",
        ctaLink: "/work",
    },
};

export const capabilityIndexContent = {
    title: "Capabilities & Ecosystem Stewardship",
    description:
        "Technical systems require a balance of architectural planning and active, cross-stack execution. Below are the primary environments where I step in to help teams and independent businesses untangle infrastructure ambiguity. Explore each capability to see how we can build clean, stable software foundations that are genuinely useful.",
    footer: {
        title: "Architecture engineered for operational longevity",
        description:
            "From connecting disparate APIs and modernizing legacy setups to architecting custom platforms from the ground up, my focus is on building stable, cohesive environments that empower your team and support your project's long-term success.",
        buttonText: "Discuss Your Project",
        buttonHref: "/contact",
    },
};

export const capabilityDetailContent = {
    navigation: {
        linkText: "Back to All Capabilities",
        backLink: "/capabilities",
    },
    sections: {
        capabilities: {
            title: "Areas of Expertise",
        },
        solutions: {
            title: "Common Problems I Solve",
        },
        process: {
            title: "How We'll Work Together",
        },
    },
    footerCTA: {
        defaultTitle: "How can I help you move forward?",
        defaultDescription:
            "From technical roadmaps and architectural design to hands-on development and legacy support, I enjoy wearing the different hats required to get a project across the line. If you have a complex problem or a new idea, let's find the best way to tackle it together.",
        defaultButtonText: "Start a Conversation",
        defaultButtonHref: "/contact",
        defaultVariant: "solid",
    },
};

export const featuredCaseStudiesContent = {
    title: "See This Capability in Action",
    viewAllLink: {
        text: "View All Work",
        href: "/work",
    },
    cardLinkText: "Explore Project",
};

export const caseStudiesContent = {
    header: {
        title: "Work & Problem Solving",
        description:
            "A collection of projects where I have stepped in to find clarity and build solutions. These stories cover a range of challenges—from untangling complex legacy systems to launch new ideas with a solid technical foundation.",
    },
    filter: {
        allLabel: "All Projects",
    },
};

export const caseStudyDetailsContent = {
    navigation: {
        backLabel: "Back to All Projects",
        backHref: "/work", // Fixed: Pointed safely to your updated /work route
    },
    sections: {
        challenge: {
            label: "The Problem",
        },
        approach: {
            label: "Finding the Path",
        },
        decisions: {
            title: "Pivotal Choices",
        },
        execution: {
            title: "The Build",
        },
        outcomes: {
            label: "The Results",
        },
    },
    sidebar: {
        contextLabel: "The Setting",
        architectureLabel: "The Tech",
        artifactsLabel: "Project Assets",
    },
    footerDefaults: {
        title: "Have a similar problem to solve?",
        description:
            "Every project has its own unique hurdles. If any part of this story sounds familiar, I'd love to hear about what you're working on and see how I can help.",
        buttonText: "Start a Conversation",
    },
};

export const aboutContent = {
    header: {
        title: "Cross-Stack Engineering.<br>Deliberate Execution.",
        subtitle: "A seasoned generalist focused on building elegant, genuinely useful web applications. I bridge the gap between complex infrastructure, seamless integration, and clean user experience.",
    },
    philosophy: {
        label: "How I Work",
        content: [
            "I am a generalist by choice. Having spent my career navigating the fast-paced, high-variety world of agency environments and product teams, I've learned that digital products thrive when they are guided by a broad technical perspective. Operating across multiple layers of a project allows me to see the whole system, anticipate bottlenecks early, and ensure that every technical decision aligns with the overarching business objectives.",
            "My hands-on execution spans the entire stack, from engineering robust full-stack infrastructure down to the browser. I am just as comfortable designing data models, creating system services, and architecting secure API endpoints as I am building highly performant, accessible user interfaces. This dual-sided technical capability means I can take total ownership of a feature or platform from database to display.",
            "Modern web engineering is rarely about writing code in an isolated sandbox; it is about ecosystem orchestration. A significant part of my value is evaluating third-party platforms, APIs, and microservices, and figuring out how to safely connect them with each other and with a client's existing infrastructure. Ultimately, my goal is always to build things that are both elegant and genuinely useful, ensuring the long-term success of the project, the product, the team, and the end user.",
        ],
        linkedinLabel: "Detailed Professional History",
        linkedinHref: "https://linkedin.com/in/yourprofile",
    },
    competencies: {
        label: "Core Execution Capabilities",
        defaults: [
            {
                principle: "Full-Stack Engineering & API Architecture",
                description:
                    "Designing maintainable database schemas, building reliable services, and architecting secure, well-documented API endpoints that form a stable foundation for application data flow.",
            },
            {
                principle: "Front-End UI Architecture",
                description:
                    "Translating complex logic into fast, accessible, and responsive user interfaces. Writing clean, component-driven production code that balances design fidelity with engineering integrity.",
            },
            {
                principle: "Ecosystem Integration & Orchestration",
                description:
                    "Evaluating and connecting third-party platforms, SaaS tools, and headless architectures. Streamlining data synchronization and bridging modern platforms with legacy systems safely.", // Fixed: Removed lingering "services" text reference
            },
            {
                principle: "Technical Discovery & Scoping",
                description:
                    "Translating ambiguous product visions or business objectives into concrete technical requirements, investigating edge cases, and prototyping proof-of-concepts to derisk production.",
            },
            {
                principle: "System Stewardship & Longevity",
                description:
                    "Approaching codebases with future maintainability in mind. Ensuring that the systems, integrations, and tools left behind are structured for the long-term health and success of the internal team.",
            },
        ],
    },
    toolkit: {
        label: "Technical & Design Ecosystem",
        description: "A versatile, battle-tested toolset leveraged to bridge the gap between initial discovery and a finished, high-performance product.",
        categories: [
            {
                type: "Front-End UI",
                items: ["React", "Next.js", "Vue", "Vanilla JS (ES6+)", "Tailwind CSS", "SCSS"]
            },
            {
                type: "Back-End & Systems",
                items: ["Laravel", "Node.js", "PHP", "REST & GraphQL APIs", "Technical Documentation"]
            },
            {
                type: "Platforms & CMS",
                items: ["Shopify & Liquid", "WordPress", "Sanity.io", "Custom Headless Architecture"]
            },
            {
                type: "Design & Logic",
                items: ["Figma", "Interface Design", "Wireframing", "User Flow Mapping", "Information Architecture"]
            }
        ]
    },
    identity: {
        title: "The Gray Coast Identity",
        description:
            "Gray Coast Web is named for the winters here on Lake Michigan—a season of heavy cloud cover, unpredictable environments, and low visibility. When software projects hit that same dark, overly complex phase where no one knows how to move forward, I step in to map out the route and handle the engineering. I navigate the technical unknowns and clean up the environment so you can clear the fog and ship a product that actually works.",
    },
    footer: {
        title: "Let's build something useful together.",
        description:
            "Whether you are looking to bring an experienced cross-stack engineer onto an established product team, need support on a high-variety agency project, or are an independent builder trying to safely integrate a new platform, let's connect.",
        buttonText: "Connect on LinkedIn",
        buttonHref: "https://linkedin.com/in/yourprofile",
    },
};

export const contactContent = {
    header: {
        title: "Let's Talk Shop.",
        subtitle:
            "Whether you need an experienced engineer to scale up a product feature, support an agency sprint, or safely connect a messy ecosystem of platforms, I'm here to help.",
    },
    main: {
        title: "Start a Conversation",
        description: [
            "Every project begins with a straightforward technical discovery conversation. We'll discuss what you are looking to build, look at any existing integrations or legacy data constraints, and map out a practical development strategy.",
            "I typically respond within one business day. Let me know if you are working against an active production deadline or an agency launch schedule.",
        ],
    },
    channels: [
        {
            label: "Direct Email",
            value: "hello@graycoastweb.com",
            href: "mailto:hello@graycoastweb.com",
            type: "email",
            description: "Reach out directly with project briefs or technical requirements.",
        },
        {
            label: "LinkedIn",
            value: "Connect professionally",
            href: "https://linkedin.com/in/graycoastweb",
            type: "linkedin",
            description: "View my full professional profile and historical project timeline.",
        },
        {
            label: "GitHub",
            value: "View source code",
            href: "https://github.com/graycoastweb",
            type: "github",
            description: "Review repository structures, custom scripts, and architectural proofs.",
        },
    ],
    sidebar: {
        consultation: {
            title: "What We'll Map Out",
            text: "Our initial conversation is about discovering technical constraints, not a sales pitch. We will look at:",
            items: [
                "The current architectural bottlenecks or integration hurdles",
                "Your functional goals for the software, the team, and the end user",
                "The cleanest, most stable path forward for the project timeline",
                "Whether my cross-stack capabilities match your stack requirements",
            ],
        },
        intake: {
            title: "Helpful Context to Bring",
            text: "If you have these details ready, they are highly useful for skipping the baseline discovery steps:",
            items: [
                "A brief summary of your primary tech stack, hosting setup, or CMS platform",
                "What core functionality or system integration constitutes an immediate win",
                "Any rigid third-party API or deployment timeline constraints",
                "The general scope or target budget you have allocated for the engineering",
            ],
        },
    },
    footer: {
        title: "Still defining the project architecture?",
        text: [
            "That is completely fine. Many of the most impactful projects start as a general goal that requires technical discovery to become an actual plan.",
            "Feel free to reach out even if you are just evaluating platforms or running a preliminary proof-of-concept. A brief conversation can help cut through the ambiguity early.",
        ],
    },
};

export const headerContent = {
    navigation: [
        { path: "/", label: "Home" },
        { path: "/capabilities", label: "Capabilities" },
        { path: "/work", label: "Work" },
        { path: "/about", label: "About" },
        { path: "/contact", label: "Contact" },
    ],
};

export const footerContent = {
    cta: {
        title: "Have a complex problem<br>or a product to launch?",
        description:
            "From technical discovery and API architecture to full-stack execution and platform orchestration—I enjoy the variety of work it takes to get an application right. Let's find a practical, resilient path forward.",
        buttonText: "Start a Conversation",
        buttonHref: "/contact",
    },
    navigation: {
        col1Title: "Navigation",
        col2Title: "Legal",
        col1Links: [
            { name: "Capabilities", href: "/capabilities" },
            { name: "Work", href: "/work" },
            { name: "About", href: "/about" },
            { name: "Process", href: "/process" },
        ],
        col2Links: [
            { name: "Privacy Policy", href: "/privacy" },
            { name: "Terms of Service", href: "/terms" },
        ],
    },
    bottom: {
        brandName: "GrayCoastWeb",
        tagline: "Cross-Stack Engineering & Ecosystem Orchestration",
    },
};