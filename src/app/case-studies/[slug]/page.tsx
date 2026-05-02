import { sanityFetch } from '@/sanity/lib/fetch';
import { CASE_STUDY_BY_SLUG_QUERY } from '@/sanity/lib/queries';
import { CaseStudy } from '@/types/case-study';
import { notFound } from 'next/navigation';
import { CaseStudyDetailClientCopy } from '@/components/layout/CaseStudyDetailClientCopy';
import { CaseStudyDetailClient } from '@/components/layout/CaseStudyDetailClient';

export default async function CaseStudyPage({
    params,
}: {
    params: { slug: string };
}) {
    const { slug } = await params;
    const study = await sanityFetch<CaseStudy>({
        query: CASE_STUDY_BY_SLUG_QUERY,
        params: { slug: slug }
    });

    if (!study) {
        notFound();
    }

    return (
       <CaseStudyDetailClient study={study} />
    );
}