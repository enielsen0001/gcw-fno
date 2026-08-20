import { sanityFetch } from "@/sanity/lib/fetch";
import { CASE_STUDY_BY_SLUG_QUERY } from "@/sanity/lib/queries";
import { Work } from "@/types/work";

const SITE_URL = "https://erikanielsen.dev";

export const baseMetadata = {
    title: {
        default: "Erika Nielsen | Senior Web Application & Interface Engineer",
        template: "%s | Erika Nielsen",
    },
    description:
        "Senior web application engineering, clean UI architecture, systems integration, and legacy codebase modernization.",
    icons: {
        icon: [
            { url: "/favicon.ico", sizes: "any" },
            { url: "/favicon.svg", type: "image/svg+xml" },
            { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
        ],
        apple: [
            { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
        ],
    },
    manifest: "/site.webmanifest",
    openGraph: {
        type: "website",
        locale: "en_US",
        url: SITE_URL,
        siteName: "Erika Nielsen",
        images: [
            {
                url: "/images/end-og-image-v2.png",
                width: 1200,
                height: 630,
                alt: "Erika Nielsen. Senior Web Application & Interface Engineer. erikanielsen.dev",
            },
        ],
    },
};

export const homeMetadata = {
    ...baseMetadata,
    title: "Erika Nielsen | Senior Web Application & Interface Engineer",
};

export const aboutMetadata = {
    title: "About",
    description:
        "Senior engineer focused on clean UI architecture, system integrations, internal workflows, and maintainable web applications.",
};

export const caseStudyIndexMetadata = {
    title: "Work",
    description:
        "A collection of engineering projects featuring full-stack application modernizations, design systems, and workflow automations built for performance and maintainability.",
};

export async function caseStudyMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const study = await sanityFetch<Work>({
        query: CASE_STUDY_BY_SLUG_QUERY,
        params: { slug: slug },
    });

    return {
        title: `${study?.title} Project`,
        description: `Technical case study: Architectural decisions, application engineering, and system integrations for ${study?.title}.`,
    };
}

export const contactMetadata = {
    title: "Contact",
    description:
        "Get in touch regarding web application engineering, UI architecture, or general technical discussions.",
};