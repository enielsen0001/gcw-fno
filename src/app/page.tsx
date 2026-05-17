import Image from "next/image";
import Link from "next/link";
import { CapabilityCard } from "@/components/ui/CapabilityCard";
import { WorkCard } from "@/components/ui/WorkCard";
import heroImage from "@/../public/images/gray-horizon.jpg";
import { ArrowRight } from "lucide-react";
import { homeMetadata } from "@/constants/metadata";
import { homeContent } from "@/constants/page-content";
import { sanityFetch } from "@/sanity/lib/fetch";
import {
    CASE_STUDIES_PREVIEW_QUERY,
    SERVICE_CARD_QUERY,
} from "@/sanity/lib/queries";
import { Capability } from "@/types/capability";
import { Work } from "@/types/work";

export const metadata = homeMetadata;

function Hero() {
    const { hero } = homeContent;

    return (
        <section className="relative pt-12 pb-24 px-6 lg:px-12 overflow-hidden min-h-[60vh] flex items-center">
            <Image
                src={heroImage}
                alt="Gray Horizon Background"
                fill
                priority
                className="object-cover z-0"
            />
            {/* Overlay to ensure text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-white from-0% to-transparent to-50% z-10" />

            <div className="max-w-7xl mx-auto relative z-20">
                <div className="max-w-4xl">
                    <h1 className="text-5xl md:text-6xl lg:text-7xl tracking-tight mb-8 text-foreground leading-none">
                        {hero.heading}
                    </h1>
                    <p className="text-xl md:text-2xl text-fg-80 mb-12 max-w-2xl leading-relaxed">
                        {hero.subheading}
                    </p>
                    <Link href={hero.ctaLink} className="btn-ghost mist">
                        {hero.cta}
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default async function HomePage() {
    const { capabilitiesContent, portfolio } = homeContent;

    const serviceCards = await sanityFetch<Capability[]>({
        query: SERVICE_CARD_QUERY,
    });
    const caseStudyCardsPreview = await sanityFetch<Work[]>({
        query: CASE_STUDIES_PREVIEW_QUERY,
    });

    return (
        <>
            <Hero />

            {/* Capabilities Section */}
            <section className="py-24 px-6 lg:px-12 bg-card">
                <div className="max-w-7xl mx-auto">
                    <header className="mb-16">
                        <h2 className="text-4xl md:text-5xl">
                            {capabilitiesContent.title}
                        </h2>
                        <p className="text-xl text-fg-70 max-w-3xl">
                            {capabilitiesContent.description}
                        </p>
                    </header>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {serviceCards.map((capability: Capability, index: number) => (
                            <CapabilityCard key={capability._id} capability={capability} index={index} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Portfolio Work Section */}
            <section className="py-24 px-6 lg:px-12">
                <div className="max-w-7xl mx-auto">
                    <header className="mb-16">
                        <h2 className="text-4xl md:text-5xl">
                            {portfolio.title}
                        </h2>
                        <p className="text-xl text-fg-70 max-w-3xl">
                            {portfolio.description}
                        </p>
                    </header>

                    <div className="grid md:grid-cols-2 gap-8 mb-16">
                        {caseStudyCardsPreview?.map((work: Work, index: number) => (
                            <WorkCard
                                key={work._id}
                                work={work}
                                index={index}
                            />
                        ))}
                    </div>

                    <div className="flex justify-center pt-8">
                        <Link
                            href={portfolio.ctaLink}
                            className="group flex items-center gap-4 text-xs uppercase tracking-[0.3em] font-medium text-muted-foreground hover:text-primary transition-all"
                        >
                            <span>{portfolio.cta}</span>
                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}