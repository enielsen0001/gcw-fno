import { sanityFetch } from "@/sanity/lib/fetch";
import { CASE_STUDY_BY_SLUG_QUERY } from "@/sanity/lib/queries";
import { Work } from "@/types/work";

const SITE_URL = "https://erikanielsen.dev";

const initialsFavicon = `data:image/svg+xml,${encodeURIComponent(`
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
    <rect width="32" height="32" rx="6" fill="#0F172A"/>
    <text x="50%" y="50%" dominant-baseline="central" text-anchor="middle" fill="#F8FAFC" font-family="sans-serif" font-weight="700" font-size="14">
      EN
    </text>
  </svg>
`)}`;

export const baseMetadata = {
    title: {
        default: "Erika Nielsen | Senior Frontend & Product Experience Engineer",
        template: "%s | Erika Nielsen",
    },
    description:
        "Senior frontend development, clean UI architecture, product experience engineering, and full-stack system integration.",
    icons: {
        icon: [
            { url: initialsFavicon, type: "image/svg+xml" },
        ],
        apple: "/apple-touch-icon.png",
    },
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
                alt: "Erika Nielsen. Senior Front-End Engineering. erikanielsne.dev",
            },
        ],
    },
};

export const homeMetadata = {
    ...baseMetadata,
    title: "Erika Nielsen | Senior Frontend & Product Experience Engineer",
};

export const aboutMetadata = {
    title: "About",
    description:
        "Senior frontend engineer and product experience developer focused on clean UI architecture, thoughtful design systems, and robust full-stack integrations.",
};

export const caseStudyIndexMetadata = {
    title: "Work",
    description:
        "Technical execution, interface design, architectural choices, and system integration projects built for performance and long-term maintainability.",
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
        description: `Technical case study: Architectural decisions, front-end execution, and system integrations for ${study?.title}.`,
    };
}

export const contactMetadata = {
    title: "Contact",
    description:
        "Get in touch regarding web development, front-end architecture, or general technical discussions.",
};