import { notFound } from "next/navigation";
import { sanityFetch } from "@/sanity/lib/fetch";
import { SERVICE_BY_SLUG_QUERY } from "@/sanity/lib/queries";
import { groq } from "next-sanity";
import Timeline from "@/components/ui/Timeline";
import { FeaturedCaseStudies } from "@/components/ui/FeaturedCaseStudies";
import { PageHeader } from "@/components/ui/PageHeader";
import { FooterCTA } from "@/components/ui/FooterCTA";
import { Metadata } from "next";
import { serviceDetailMetadata } from "@/constants/metadata";
import { serviceDetailContent } from "@/constants/page-content";

export async function generateMetadata({
    params,
}: {
    params: { slug: string };
}): Promise<Metadata> {
    return serviceDetailMetadata({ params: Promise.resolve(params) });
}

export default async function ServiceDetailPage({
    params,
}: {
    params: { slug: string };
}) {
    const { slug } = await params;
    const service = await sanityFetch<any>({
        query: SERVICE_BY_SLUG_QUERY,
        params: { slug: slug },
    });

    // If Sanity returns nothing, trigger the Next.js 404 page
    if (!service) {
        notFound();
    }

    const { sections, navigation, footerCTA } = serviceDetailContent;

    return (
        <div className="py-16 px-6 lg:px-12">
            <div className="max-w-6xl mx-auto">
                <PageHeader
                    title={service.title}
                    description={service.shortDescription}
                    backLink={{
                        href: navigation.backLink,
                        label: navigation.linkText,
                    }}
                    iconName={service.icon}
                />

                {/* 03. The Decoder Section: Jargon vs. Value */}
                <section className="grid lg:grid-cols-3 gap-16 mb-32">
                    <div className="lg:col-span-1">
                        <h2 className="text-sm uppercase tracking-[0.3em] text-primary font-semibold sticky top-24">
                            {sections.capabilities.title}
                        </h2>
                    </div>
                    <div className="lg:col-span-2 space-y-12">
                        {service.capabilities?.map((cap: any) => (
                            <div
                                key={cap.term}
                                className="group border-b border-border pb-8"
                            >
                                <h3 className="text-xl mb-3 group-hover:text-primary transition-colors">
                                    {cap.term}
                                </h3>
                                <p className="text-fg-80 leading-relaxed max-w-2xl">
                                    {/* This is where you explain what 'Legacy Refactoring' or 'CI/CD' means for them */}
                                    {cap.definition}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 04. The "Meet the Need" Section: Content Heavy / Headline Light */}
                <section className="grid lg:grid-cols-3 gap-16 mb-32 py-24 bg-card/30 -mx-6 px-6 lg:-mx-12 lg:px-12 rounded-xl">
                    <div className="lg:col-span-1">
                        <h2 className="text-sm uppercase tracking-[0.3em] text-primary font-semibold">
                            {sections.solutions.title}
                        </h2>
                    </div>
                    <div className="lg:col-span-2">
                        <div className="prose prose-invert prose-p:text-xl prose-p:font-light prose-p:text-fg-80">
                            <p>{service.valueProposition}</p>
                            <div className="mt-8 grid md:grid-cols-2 gap-8 not-prose">
                                {/* Dynamic list of pain points you solve */}
                                {service.solutions?.map((item: string) => (
                                    <div
                                        key={item}
                                        className="flex gap-3 text-sm text-fg-80 italic"
                                    >
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* 05. The Compact Process */}
                <section className="grid lg:grid-cols-3 gap-16 mb-32">
                    <div className="lg:col-span-1">
                        <h2 className="text-sm uppercase tracking-[0.3em] text-primary font-semibold">
                            {sections.process.title}
                        </h2>
                    </div>
                    <div className="lg:col-span-2">
                        <Timeline items={service.process} compact={true} />
                    </div>
                </section>

                <FeaturedCaseStudies
                    relatedCaseStudies={service.featuredCaseStudies}
                />

                <FooterCTA
                    title={service.footerCTA?.title || footerCTA.defaultTitle}
                    description={
                        service.footerCTA?.description ||
                        footerCTA.defaultDescription
                    }
                    buttonText={
                        service.footerCTA?.buttonText ||
                        footerCTA.defaultButtonText
                    }
                    variant={
                        service.footerCTA?.variant || footerCTA.defaultVariant
                    }
                    buttonHref={
                        service.footerCTA?.buttonHref ||
                        footerCTA.defaultButtonHref
                    }
                />
            </div>
        </div>
    );
}

export async function generateStaticParams() {
    const services = await sanityFetch<any[]>({
        query: groq`*[_type == "service"]{ "slug": slug.current }`,
    });

    return services.map((service) => ({
        slug: service.slug,
    }));
}
