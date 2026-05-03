import { sanityFetch } from "@/sanity/lib/fetch";
import { ALL_CASE_STUDIES_QUERY } from "@/sanity/lib/queries";
import { CaseStudiesClient } from "@/components/layout/CaseStudiesClient";
import { CaseStudy } from "@/types/case-study";
import { caseStudyIndexMetadata } from "@/constants/metadata";

export const metadata = caseStudyIndexMetadata;

export default async function CaseStudiesPage() {
    const caseStudiesData: CaseStudy[] = await sanityFetch<CaseStudy[]>({
        query: ALL_CASE_STUDIES_QUERY,
    });

    return <CaseStudiesClient initialData={caseStudiesData} />;
}
