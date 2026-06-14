import Image from "next/image";
import Link from "next/link";
import { WorkCard } from "@/components/ui/WorkCard";
import heroImage from "@/../public/images/gray-beach.jpg";
import { ArrowRight } from "lucide-react";
import { homeMetadata } from "@/constants/metadata";
import { homeContent } from "@/constants/page-content";
import { sanityFetch } from "@/sanity/lib/fetch";
import {
    CASE_STUDIES_PREVIEW_QUERY,
} from "@/sanity/lib/queries";
import { Work } from "@/types/work";

export const metadata = homeMetadata;


function HeroAsymmetricSplit() {
    const { hero } = homeContent;

    return (
        <section className="relative w-full min-h-screen flex flex-col justify-center md:flex-row overflow-hidden bg-white text-zinc-900">

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
                    alt="A dramatic, minimalist black and white photograph of a stormy ocean under a heavy, dark overcast sky, featuring textured rolling waves with white seafoam breaking near the shore."
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                    fetchPriority="high"
                    className="object-cover object-center grayscale hover:grayscale-0 transition-all duration-700 ease-in-out scale-105"
                />

                {/* Editorial Image Attribution */}
                <div className="absolute bottom-4 right-4 z-20 pointer-events-auto select-none backdrop-blur-md bg-black/10 text-[10px] font-mono uppercase tracking-widest text-white/90 px-3 py-1.5 rounded-sm border border-white/10 transition-opacity duration-300 opacity-60 group-hover/panel:opacity-100">
                    Photo by{" "}
                    <a
                        href="https://unsplash.com/@anniespratt?utm_source=portfolio&utm_medium=referral"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary underline underline-offset-4 decoration-white/30 transition-colors font-bold"
                    >
                        Annie Spratt
                    </a>{" "}
                    on{" "}
                    <a
                        href="https://unsplash.com?utm_source=portfolio&utm_medium=referral"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary underline underline-offset-4 decoration-white/30 transition-colors font-bold"
                    >
                        Unsplash
                    </a>
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