import { sanityFetch } from "@/sanity/lib/fetch";
import { CASE_STUDY_BY_SLUG_QUERY } from "@/sanity/lib/queries";
import { CaseStudy } from "@/types/work";
import { notFound } from "next/navigation";
import { WorkDetailClient } from "@/components/layout/WorkDetailClient"; // Updated name
import { caseStudyMetadata } from "@/constants/metadata";
import { Metadata } from "next";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>; // Aligned with Next.js App Router typing specs
}): Promise<Metadata> {
    return caseStudyMetadata({ params });
}

export default async function WorkDetailPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const study = await sanityFetch<CaseStudy>({
        query: CASE_STUDY_BY_SLUG_QUERY,
        params: { slug: slug },
    });

    if (!study) {
        notFound();
    }

    return <WorkDetailClient study={study} />;
}