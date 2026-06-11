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

function HeroBlueprint() {
    const { hero } = homeContent;

    return (
        <section className="relative w-full min-h-screen bg-[#fafafa] text-zinc-900 font-sans flex flex-col justify-between pt-24 pb-12 px-6 lg:px-12 overflow-hidden">
            {/* Structural Grid Lines (The Blueprint Effect) */}
            <div className="absolute inset-y-0 left-1/2 w-px bg-zinc-200/60 hidden md:block z-0" />
            <div className="absolute inset-x-0 bottom-1/3 h-px bg-zinc-200/60 hidden md:block z-0" />

            {/* TOP AREA: Massive Tracking Headline */}
            <div className="relative z-10 w-full max-w-7xl mx-auto md:pt-12">
                <h1 className="text-[9vw] sm:text-[8vw] lg:text-[7.5vw] font-black tracking-tight leading-[0.85] uppercase text-zinc-900 font-sans select-none">
                    {hero.heading.ln1} <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-900 via-zinc-700 to-zinc-400">
                        {hero.heading.ln2}
                    </span>
                </h1>
            </div>

            {/* BOTTOM AREA: Asymmetric Information Grid */}
            <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 pt-16 md:pt-24 items-end">

                {/* Meta Details Tagged like a blueprint */}
                <div className="text-xs font-mono uppercase tracking-widest text-zinc-400 space-y-1 hidden md:block">
                    <p>// SITE ARCHITECTURE v2.0</p>
                    <p>// LOC: 43.1656° N, 86.2553° W</p>
                    <p>// EXECUTION: SINGLE-THREADED / STACK-AGNOSTIC</p>
                </div>

                {/* Pitch Copy & Clean Text Link CTA */}
                <div className="max-w-xl md:ml-auto flex flex-col items-start space-y-8">
                    <p className="text-zinc-600 text-lg sm:text-xl leading-relaxed font-light">
                        {hero.subheading}
                    </p>

                    <Link
                        href={hero.ctaLink}
                        className="group relative inline-flex items-center text-sm font-mono uppercase tracking-widest font-bold py-2 text-zinc-900"
                    >
                        <span>{hero.cta}</span>
                        <span className="absolute bottom-0 left-0 w-full h-[2px] bg-zinc-900 origin-bottom-right scale-x-0 transition-transform duration-300 group-hover:origin-bottom-left group-hover:scale-x-100" />
                        <svg className="w-4 h-4 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </Link>
                </div>

            </div>
        </section>
    );
}

function HeroAsymmetricSplit() {
    const { hero } = homeContent;

    return (
        <section className="relative w-full min-h-screen flex flex-col md:flex-row overflow-hidden bg-white text-zinc-900">

            {/* LEFT SIDE: Copy & Conversion (60% Width on Desktop) */}
            <div className="w-full md:w-[60%] flex flex-col justify-center gap-4 md:gap-12 p-8 sm:p-12 lg:p-16 z-10">

                {/* Core Message Container */}
                <div className="max-w-2xl space-y-8">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-900 leading-[1.05] mb-4">
                        {hero.heading.ln1} <br />
                        <span className="font-serif italic font-normal text-zinc-600 mt-3 block">{hero.heading.ln2}</span>
                    </h1>

                    <p className="text-zinc-600 text-base sm:text-lg leading-relaxed max-w-xl font-light">
                        {hero.subheading}
                    </p>
                </div>

                {/* Absolute Bottom Left Link */}
                <div className="pt-4 md:pt-0">
                    <Link
                        href={hero.ctaLink}
                        className="btn-dark text-sm uppercase tracking-widest font-mono"
                    >
                        {hero.cta}
                    </Link>
                </div>
            </div>

            {/* RIGHT SIDE: Immersive Pure Imagery Panel (40% Width on Desktop) */}
            <div className="relative w-full h-[45vh] md:h-screen md:w-[40%] bg-zinc-100 overflow-hidden hidden md:block">
                <Image
                    src={heroImage}
                    alt="Gray Horizon Background"
                    fill
                    priority
                    className="object-cover object-center grayscale hover:grayscale-0 transition-all duration-700 ease-in-out scale-105"
                />

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
                                <p key={idx} className="text-base md:text-lg leading-relaxed  text-foreground/3030">
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