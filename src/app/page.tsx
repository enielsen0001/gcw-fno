import Image from "next/image";
import Link from "next/link";
import { WorkCard } from "@/components/ui/WorkCard";
import heroImage from "@/../public/images/dot-line-graphic.jpg";
import { ArrowRight } from "lucide-react";
import { homeMetadata } from "@/constants/metadata";
import { homeContent } from "@/constants/page-content";
import { sanityFetch } from "@/sanity/lib/fetch";
import {
    CASE_STUDIES_PREVIEW_QUERY,
} from "@/sanity/lib/queries";
import { Work } from "@/types/work";

export const metadata = homeMetadata;


export function HeroAsymmetricSplit() {
    const { hero } = homeContent;

    return (
        <section className="border-b border-border relative w-full min-h-[calc(100vh-var(--spacing)*16)] flex items-center overflow-hidden bg-background text-foreground transition-colors duration-300">
            {/* Background Image Container */}
            <div className="absolute inset-0">
                <Image
                    src={heroImage}
                    alt=""
                    fill
                    priority
                    sizes="100vw"
                    fetchPriority="high"
                    className="object-cover object-right dark:opacity-40 transition-opacity duration-300"
                />
                {/* Dark Mode Gradient Overlay to guarantee legibility */}
                <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/40 to-transparent dark:from-background dark:via-background/80 dark:to-transparent" />
            </div>

            {/* Main Content Area */}
            <div className="w-full max-w-7xl mx-auto relative z-10 flex items-center py-8 lg:py-16 px-6 lg:px-12">
                <div className="space-y-4 md:space-y-12 rounded-[1rem] bg-card/85 dark:bg-card/90 backdrop-blur-md border border-border/40 p-8 md:p-10 relative right-0 md:-right-10 shadow-2xl transition-all duration-300">
                    <div className="space-y-8">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.05] mb-4">
                            {hero.heading.ln1} <br />
                            <span className="font-serif italic font-normal text-fg-70 mt-3 block">
                                {hero.heading.ln2}
                            </span>
                        </h1>

                        <p className="text-fg-80 text-base sm:text-lg leading-relaxed max-w-xl font-light">
                            {hero.subheading}
                        </p>
                    </div>

                    <div className="pt-4">
                        <Link
                            href={hero.ctaLink}
                            className="btn-dark text-sm uppercase tracking-widest font-mono"
                        >
                            {hero.cta}
                        </Link>
                    </div>
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
            <HeroAsymmetricSplit />


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
                                <p key={idx} className="text-base md:text-lg leading-relaxed text-fg-80">
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
                            className="group flex items-center gap-4 text-sm uppercase tracking-[0.3em] font-medium text-muted-foreground hover:text-primary transition-all"
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