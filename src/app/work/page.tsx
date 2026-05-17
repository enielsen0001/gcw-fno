import { sanityFetch } from "@/sanity/lib/fetch";
import { ALL_CASE_STUDIES_QUERY } from "@/sanity/lib/queries";
import { WorkIndexClient } from "@/components/layout/WorkIndexClient"; // Updated component name
import { CaseStudy } from "@/types/work";
import { caseStudyIndexMetadata } from "@/constants/metadata"; // Tied into your updated Metadata

export const metadata = caseStudyIndexMetadata;

export default async function WorkPage() {
    const caseStudiesData: CaseStudy[] = await sanityFetch<CaseStudy[]>({
        query: ALL_CASE_STUDIES_QUERY,
    });

    return <WorkIndexClient initialData={caseStudiesData} />;
}