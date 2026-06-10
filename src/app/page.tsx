import Image from "next/image";
import Link from "next/link";
import { WorkCard } from "@/components/ui/WorkCard";
import heroImage from "@/../public/images/gray-horizon.jpg";
import { ArrowRight } from "lucide-react";
import { homeMetadata } from "@/constants/metadata";
import { homeContent } from "@/constants/page-content";
import { sanityFetch } from "@/sanity/lib/fetch";
import {
    CASE_STUDIES_PREVIEW_QUERY,
} from "@/sanity/lib/queries";
import { Work } from "@/types/work";

export const metadata = homeMetadata;

function Hero() {
    const { hero } = homeContent;

    return (
        <section className="relative pt-12 md:pt-24 pb-24 px-6 lg:px-12 overflow-hidden min-h-[60vh] flex items-center">
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
                    <h1 className="home-hero-hl tracking-tight mb-8 text-foreground leading-none">
                        {hero.heading.ln1} <br />
                        {hero.heading.ln2}
                    </h1>
                    <p className="home-hero-subhl text-fg-80 mb-12 max-w-2xl leading-relaxed">
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
    const { portfolio } = homeContent;

    const caseStudyCardsPreview = await sanityFetch<Work[]>({
        query: CASE_STUDIES_PREVIEW_QUERY,
    });

    return (
        <>
            <Hero />

            {/* Portfolio Work Section */}
            <section className="py-24 px-6 lg:px-12">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-16 md:mb-20 flex flex-col gap-6 lg:gap-8 border-l-2 border-primary/20 pl-6 lg:pl-8">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance max-w-5xl">
                            {portfolio.title}
                        </h2>

                        {/* Loop through paragraph array to give the copy room to breathe */}
                        <div className="space-y-4 max-w-4xl">
                            {portfolio.description.map((paragraph: string, idx: number) => (
                                <p key={idx} className="text-base md:text-lg leading-relaxed text-muted-foreground/80">
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                    </div>

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
                            <span>{portfolio.viewAllText}</span>
                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}