import { sanityFetch } from "@/sanity/lib/fetch";
import {
    CASE_STUDY_BY_SLUG_QUERY,
} from "@/sanity/lib/queries";
import { Work } from "@/types/work";

const SITE_URL = "https://www.graycoastweb.com";

export const baseMetadata = {
    title: {
        default: "GrayCoast | Senior Cross-Stack Engineering & Ecosystem Orchestration",
        template: "%s | GrayCoast",
    },
    description:
        "Senior front-end development, full-stack application engineering, and seamless platform integration without agency overhead.",
    openGraph: {
        type: "website",
        locale: "en_US",
        url: SITE_URL,
        siteName: "GrayCoast",
        images: [
            {
                url: "/images/gcw-og-image.png",
                width: 1424,
                height: 752,
                alt: "Gray Coast Web",
            },
        ],
    },
};

export const homeMetadata = {
    ...baseMetadata,
    title: "GrayCoast | Senior Cross-Stack Engineering",
};

export const aboutMetadata = {
    title: "About",
    description:
        "Meet an experienced, stack-agnostic generalist focused on full-stack infrastructure, clean UI architecture, and long-term product success.",
};

export const caseStudyIndexMetadata = {
    title: "Work", // Updated from Case Studies
    description:
        "Explore real-world technical execution, architectural choices, and system integration projects designed for long-term health.",
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
        description: `Technical deep dive: Architectural choices, integration solutions, and engineering execution for ${study?.title}.`,
    };
}

export const contactMetadata = {
    title: "Contact",
    description:
        "Start a technical discovery conversation regarding your product features, agency projects, or ecosystem integration needs.",
};