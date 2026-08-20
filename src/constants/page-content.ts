export const homeContent = {
    hero: {
        heading: {
            ln1: "Senior Front-End Engineering.",
            ln2: "Complex Applications & UI Engineering.",
        },
        subheading:
            "Translating high-level product goals into performant, accessible, and maintainable web applications.",
        cta: "Explore the Work",
        ctaLink: "/work",
    },
    portfolio: {
        sectionId: "work",
        title: "Flexible front-end and full-stack solutions.",
        description: [
            "I bridge the space between complex code, UI design, and real-world utility. My work spans full-stack application modernizations, design systems, interactive data dashboards, and custom internal workflows.",
            "Explore the selected projects below to see how I approach structural rescues and ground - up builds"
        ],
        viewAllText: "View All Work",
        ctaLink: "/work",
    },
};

export const caseStudiesContent = {
    header: {
        title: "Work & Problem Solving",
        description:
            "A collection of projects showing how I approach complex software challenges, from modernizing established legacy codebases to building clean, maintainable tools from scratch.",
    },
    filter: {
        allLabel: "All Projects",
    },
};

export const caseStudyDetailsContent = {
    navigation: {
        backLabel: "Back to All Projects",
        backHref: "/work",
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
        title: "Senior Web Application <br>& Interface Engineering",
        subtitle: "I build clean, reliable digital products by looking at the whole application, not just the front end. Backed by deep UI expertise and practical full-stack fundamentals, I comfortably navigate back-end APIs, custom data flows, and legacy code to turn complex software challenges into maintainable, easy-to-use tools."
    },
    philosophy: {
        label: "How I Work",
        content: [
            "I choose to work broadly across the stack. Over a decade of agency and product experience has taught me that digital products thrive when engineering and interface design work together from day one. Looking at the full system helps me spot bottlenecks early, write cleaner integrations, and ensure technical decisions support a great user experience.",
            "Tools and frameworks change, but solid engineering fundamentals do not. Whether a project requires restructuring a database schema, mapping out UI flows in Figma, or automating internal workflows, I focus on breaking down ambiguity and leaving behind systems that are simple to maintain.",
            "I build software with curiosity, care, and attention to detail. I enjoy taking complex or fragile systems apart, understanding how they work, and rebuilding them so they run predictably, scale cleanly, and serve the people using them."
        ],
        linkedinLabel: "Detailed Professional History",
        linkedinHref: "https://www.linkedin.com/in/enielsen0001",
    },
    competencies: {
        label: "Core Execution Capabilities",
        defaults: [
            {
                principle: "Interface Design & UX",
                description:
                    "Mapping user flows, building interactive prototypes in Figma, and designing clear information architectures. Translating complex business logic into accessible, human interfaces.",
            },
            {
                principle: "Front-End UI Architecture",
                description:
                    "Building fast, component-driven production code. Writing clean, semantic front-ends in React, Next.js, and Vue while balancing visual fidelity with long-term performance.",
            },
            {
                principle: "Full-Stack Systems & Integration",
                description:
                    "Structuring reliable back-end services, designing clean APIs, and wiring headless platforms or third-party tools into existing codebases without adding technical debt.",
            },
            {
                principle: "Technical Discovery & Strategy",
                description:
                    "Taking ambiguous product goals or legacy system challenges and breaking them down into clear technical requirements and early prototypes.",
            },
            {
                principle: "System Stewardship & Longevity",
                description:
                    "Building for long-term maintainability. Leaving behind clean architecture, solid documentation, and organized code bases that internal teams can easily manage.",
            },
        ],
    },
    toolkit: {
        label: "Technical & Design Toolset",
        description: "A focused, practical set of tools leveraged to move projects from initial discovery to production.",
        categories: [
            {
                type: "Design & Strategy",
                items: ["Figma", "Interface Design", "Wireframing", "User Flow Mapping", "Information Architecture"]
            },
            {
                type: "Front-End & UI",
                items: ["React", "Next.js", "Vue", "TypeScript", "JavaScript (ES6+)", "Tailwind CSS", "SCSS"]
            },
            {
                type: "Back-End & Systems",
                items: ["Laravel", "PHP", "Node.js", "REST & GraphQL APIs", "Technical Documentation"]
            },
            {
                type: "Platforms & CMS",
                items: ["Sanity.io", "Shopify & Liquid", "WordPress", "Custom Headless Architecture"]
            }
        ]
    },
    identity: {
        title: "Working With Me",
        description:
            [
                "Good engineering relies on clear communication, open technical discussions, and pragmatic decisions. I thrive in environments where information is shared freely and teams collaborate to solve tough problems.",
                "I bring a steady, organized approach to development. My day-to-day work centers on unblocking technical hurdles, documenting how systems work, and writing software that stands up to real-world use."
            ]
    },
    footer: {
        title: "Let's build something useful together.",
        description:
            "Whether you need an experienced front-end architect, support on a high-variety application, or help untangling a complex legacy migration, let's connect.",
        buttonText: "Connect on LinkedIn",
        buttonHref: "https://www.linkedin.com/in/enielsen0001",
    },
};

export const contactContent = {
    header: {
        title: "Get in Touch.",
        subtitle:
            "Whether you want to discuss front-end architecture, talk through a complex software problem, or just connect professionally, my inbox is open.",
    },
    main: {
        title: "Start a Conversation",
        description: [
            "Feel free to reach out directly via email or connect on LinkedIn. I am always happy to network with fellow engineers, discuss industry trends, or connect over interesting technical challenges.",
            "I typically respond within one business day.",
        ],
    },
    channels: [
        {
            label: "Direct Email",
            value: "hello@erikanielsen.dev",
            href: "mailto:hello@erikanielsen.dev",
            type: "email",
            description: "Reach out directly for technical questions, networking, or just to say hello.",
        },
        {
            label: "LinkedIn",
            value: "Connect professionally",
            href: "https://www.linkedin.com/in/enielsen0001",
            type: "linkedin",
            description: "View my full professional history and network.",
        },
        {
            label: "GitHub",
            value: "View source code",
            href: "https://github.com/enielsen0001",
            type: "github",
            description: "Explore my repositories, personal builds, and code samples.",
        },
    ],
    sidebar: {
        consultation: {
            title: "Core Areas of Expertise",
            text: "My daily work and technical focus revolve around:",
            items: [
                "Front-end UI architecture and design systems",
                "Full-application integration and API wiring",
                "Modernizing fragile legacy codebases cleanly",
                "Building internal tools and automated workflows",
            ],
        },
        intake: {
            title: "Topics I Enjoy Discussing",
            text: "Always open to exchanging ideas on:",
            items: [
                "Scaling modern front-end frameworks (React, Vue, Next.js)",
                "Strategies for refactoring technical debt",
                "Headless architecture and CMS integrations",
                "Practical uses for AI and emerging tech in daily development"
            ],
        },
    },
};

export const headerContent = {
    navigation: [
        { path: "/", label: "Home" },
        { path: "/work", label: "Work" },
        { path: "/about", label: "About" },
        { path: "/contact", label: "Contact" },
    ],
};

export const footerContent = {
    cta: {
        title: "Interested in working together or talking shop?",
        description:
            "I am always glad to connect with other engineers, product leaders, and teams working on interesting technical problems. Drop me a line anytime.",
        buttonText: "Reach Out",
        buttonHref: "/contact",
    },
    legal: {
        privacy: { name: "Privacy Policy", href: "/privacy" }
    },
    bottom: {
        brandName: "Erika Nielsen",
        tagline: "Cross-Stack Engineering & Product Experience Architecture.",
    },
};

export const privacyPolicyContent = {
    title: "Privacy Policy",
    lastUpdated: "July 2026",
    sections: [
        {
            heading: "1. Information We Collect",
            body: "We do not require you to provide any personal information to browse this website. However, we use third-party tracking software, specifically Google Analytics, to automatically collect certain non-personally identifiable information when you visit. This includes your IP address, browser type, operating system, referring URLs, device characteristics, and anonymized patterns of how you interact with our pages."
        },
        {
            heading: "2. How We Use Your Information",
            body: "The traffic data collected via Google Analytics is utilized strictly for performance monitoring, site optimization, and user experience enhancements. It helps us understand which case studies or technical posts are engaging to visitors and ensures the application runs smoothly across different devices. This data is aggregated and anonymized; we do not use it to identify individual users or cross-reference it with personal identities."
        },
        {
            heading: "3. Cookies and Tracking Technologies",
            body: "Google Analytics utilizes cookies, small text files placed on your device, to collect standard internet log data and visitor behavior patterns. You have the right to accept or refuse these cookies. Most web browsers automatically accept cookies, but you can typically modify your browser settings to decline them, or use a private browsing mode (like Incognito) if you prefer."
        },
        {
            heading: "4. Third-Party Data Sharing",
            body: "We do not sell, trade, or lease any data collected from this website to outside third parties. Data processing is handled entirely through Google's secure analytics infrastructure and is subject to Google's standard Privacy Policy and data protection terms."
        },
        {
            heading: "5. Contact Information",
            body: "If you have any questions regarding this privacy policy or the tracking metrics used on this application, feel free to reach out via our contact page."
        }
    ]
};