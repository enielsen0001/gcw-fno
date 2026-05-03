import { sanityFetch } from "@/sanity/lib/fetch";
import { CASE_STUDY_BY_SLUG_QUERY } from "@/sanity/lib/queries";
import { CaseStudy } from "@/types/case-study";
import { notFound } from "next/navigation";
import { CaseStudyDetailClient } from "@/components/layout/CaseStudyDetailClient";
import { caseStudyMetadata } from "@/constants/metadata";
import { Metadata } from "next";

export async function generateMetadata({
    params,
}: {
    params: { slug: string };
}): Promise<Metadata> {
    return caseStudyMetadata({ params: Promise.resolve(params) });
}

export default async function CaseStudyPage({
    params,
}: {
    params: { slug: string };
}) {
    const { slug } = await params;
    const study = await sanityFetch<CaseStudy>({
        query: CASE_STUDY_BY_SLUG_QUERY,
        params: { slug: slug },
    });

    if (!study) {
        notFound();
    }

    return <CaseStudyDetailClient study={study} />;
}
