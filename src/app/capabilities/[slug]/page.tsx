import { notFound } from "next/navigation";
import { sanityFetch } from "@/sanity/lib/fetch";
import { CAPABILITY_BY_SLUG_QUERY } from "@/sanity/lib/queries"; // Updated query target
import { groq } from "next-sanity";
import Timeline from "@/components/ui/Timeline";
import { FeaturedWork } from "@/components/ui/FeaturedWork"; // Updated component name
import { PageHeader } from "@/components/ui/PageHeader";
import { FooterCTA } from "@/components/ui/FooterCTA";
import { CustomPortableText } from "@/components/ui/CustomPortableText";
import { Metadata } from "next";
import { serviceDetailMetadata } from "@/constants/metadata";
import { capabilityIndexContent } from "@/constants/page-content";

// Aligned with standard Next.js App Router async params mapping spec
export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    return serviceDetailMetadata({ params });
}

export default async function CapabilityDetailPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const capability = await sanityFetch<any>({
        query: CAPABILITY_BY_SLUG_QUERY,
        params: { slug: slug },
    });

    if (!capability) {
        notFound();
    }

    const { footer } = capabilityIndexContent;

    return (
        <div className="py-24 px-6 lg:px-12">
            <div className="max-w-6xl mx-auto">
                <PageHeader
                    title={capability.title}
                    description={capability.shortDescription}
                    backLink={{
                        href: "/capabilities",
                        label: "Back to All Capabilities",
                    }}
                    iconName={capability.icon}
                />

                {/* 03. Technical Scope & Practical Utility Grid */}
                <section className="grid lg:grid-cols-3 gap-16 mb-32 border-t border-border pt-12">
                    <div className="lg:col-span-1">
                        <h2 className="text-xs uppercase tracking-[0.3em] text-primary font-semibold sticky top-28">
                            Execution & Utility
                        </h2>
                    </div>
                    <div className="lg:col-span-2 space-y-12">
                        {capability.capabilities?.map((item: any) => (
                            <div
                                key={item.term}
                                className="group border-b border-border pb-8 last:border-b-0 last:pb-0"
                            >
                                <h3 className="text-xl font-medium mb-3 group-hover:text-primary transition-colors">
                                    {item.term}
                                </h3>
                                <p className="text-fg-80 leading-relaxed max-w-2xl text-base font-light">
                                    {item.definition}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 04. Deep-Dive Focus Section */}
                <section className="grid lg:grid-cols-3 gap-16 mb-32 py-24 bg-card/20 -mx-6 px-6 lg:-mx-12 lg:px-12 rounded-lg border border-border/40">
                    <div className="lg:col-span-1">
                        <h2 className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">
                            Core Approach
                        </h2>
                    </div>
                    <div className="lg:col-span-2">
                        <div className="text-fg-80 max-w-3xl font-light leading-relaxed mb-12">
                            {/* Uses Portable Text wrapper to support paragraphs/inline code blocks inside your text narratives */}
                            <CustomPortableText value={capability.valueProposition} />
                        </div>

                        {/* Bulleted Grid Deck of Target Pain Points */}
                        <div className="grid md:grid-cols-2 gap-6">
                            {capability.solutions?.map((item: string) => (
                                <div
                                    key={item}
                                    className="flex items-start gap-3 text-sm text-fg-70 font-light"
                                >
                                    <span className="text-primary font-mono select-none pt-0.5">→</span>
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 05. Development Pathways Timeline */}
                <section className="grid lg:grid-cols-3 gap-16 mb-32">
                    <div className="lg:col-span-1">
                        <h2 className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">
                            Development Pathway
                        </h2>
                    </div>
                    <div className="lg:col-span-2">
                        <Timeline items={capability.process || []} compact={true} />
                    </div>
                </section>

                {/* Related Portfolio Work Component Node */}
                <FeaturedWork relatedWorks={capability.featuredCaseStudies} />

                {/* Closing Form Action Funnel */}
                <FooterCTA
                    title={capability.footerCTA?.title || "Have a similar project to build?"}
                    description={
                        capability.footerCTA?.description ||
                        "Let's look at your system architecture constraints and figure out a resilient path forward."
                    }
                    buttonText={capability.footerCTA?.buttonText || "Start a Conversation"}
                    variant={capability.footerCTA?.variant || "ghost"}
                    buttonHref="/contact"
                />
            </div>
        </div>
    );
}

// Pre-builds static HTML endpoints for quick delivery metrics
export async function generateStaticParams() {
    const capabilities = await sanityFetch<any[]>({
        query: groq`*[_type == "capability"]{ "slug": slug.current }`,
    });

    return capabilities.map((item) => ({
        slug: item.slug,
    }));
}