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
        <section className="relative w-full min-h-[calc(100vh-var(--spacing)*16)] flex flex-col justify-center md:flex-row overflow-hidden bg-background text-foreground">

            <div className="w-full md:w-[60%] flex flex-col justify-center p-8  lg:p-16 z-10 md:items-end">

                <div className="w-full max-w-xl lg:max-w-2xl xl:max-w-3xl space-y-4 md:space-y-12">

                    <div className="space-y-8">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.05] mb-4">
                            {hero.heading.ln1} <br />
                            {/* Italian serif phrase mapped to your secondary high-contrast gray hook */}
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
                </div></div>
            </div>

            {/* RIGHT SIDE: Immersive Pure Imagery Panel (40% Width on Desktop) */}
            {/* Swapped background fill to map to your system --card context container token */}
            <div className="relative w-full h-[45vh] md:min-h-[calc(100vh-var(--spacing)*16)] md:w-[40%] bg-card overflow-hidden hidden md:block group/panel">
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