import { sanityFetch } from "@/sanity/lib/fetch";
import {
    CASE_STUDY_BY_SLUG_QUERY,
    SERVICE_BY_SLUG_QUERY,
} from "@/sanity/lib/queries";
import { CaseStudy } from "@/types/case-study";

const SITE_URL = "https://www.graycoastweb.com";

export const baseMetadata = {
    title: {
        default: "GrayCoast | Web Design & Asset Lifecycle Engineering",
        template: "%s | GrayCoast",
    },
    description:
        "Senior front-end development and high-fidelity digitization for artists and legacy software modernization.",
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
    title: "GrayCoast | Senior Web Development & Digital Archival",
};

export const aboutMetadata = {
    title: "About",
    description:
        "The intersection of software architecture and tactile problem-solving. Lead by a senior generalist focused on delivery and cooperation.",
};

export const servicesIndexMetadata = {
    title: "Services",
    description:
        "Specializing in Laravel/Vanilla JS modernization, responsive web design, and asset security for artists.",
};

export async function serviceDetailMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const service = await sanityFetch<any>({
        query: SERVICE_BY_SLUG_QUERY,
        params: { slug: slug },
    });

    return {
        title: service?.title,
        description:
            service?.excerpt ||
            `Expert ${service?.title} services by GrayCoast.`,
    };
}

export const caseStudyIndexMetadata = {
    title: "Case Studies",
    description:
        "A deep dive into software modernization projects and the Asset Lifecycle Engine.",
};

export async function caseStudyMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const study = await sanityFetch<CaseStudy>({
        query: CASE_STUDY_BY_SLUG_QUERY,
        params: { slug: slug },
    });

    return {
        title: `${study?.title} Project`,
        description: `Case study: How we modernized ${study?.title} using high-fidelity digitization and secure archival.`,
    };
}

export const contactMetadata = {
    title: "Contact",
    description:
        "Get in touch to discuss legacy project modernization or professional web design.",
};
