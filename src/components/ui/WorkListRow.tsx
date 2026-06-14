import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Work } from "@/types/work";

interface WorkListRowProps {
    work: Work;
    index: number;
}

export function WorkListRow({ index, work }: WorkListRowProps) {
    if (!work) return null;

    const { slug, title, cardDescription, tags } = work;
    const staggerClass = `stagger-${Math.min(index + 1, 4)}`;

    // Fallback or short explicit summary line
    const renderDescription = typeof cardDescription === 'string' ? cardDescription : '';

    return (
        <Link
            href={`/work/${slug}`}
            className={`
                group flex items-center justify-between py-6 border-b border-border/50
                fade-up-reveal ${staggerClass} transition-all duration-300
                hover:border-primary/40 px-2
            `}
        >
            {/* Left Frame: Title & Micro Context */}
            <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8 flex-grow">
                <h3 className="text-lg font-medium text-foreground group-hover:text-primary transition-colors duration-300 m-0 tracking-tight">
                    {title}
                </h3>
            </div>

            {/* Right Frame: Monospace Scannable Tech Stack */}
            <div className="hidden sm:flex items-center gap-3 text-xs font-mono tracking-wide">
                {tags.slice(0, 3).map((tag: any, i: number) => {
                    const tagLabel = typeof tag === 'object' && tag !== null ? (tag.label || tag.value || "") : tag;
                    const cleanLabel = String(tagLabel) === "Pinea" ? "Pinia" : String(tagLabel);

                    return (
                        <span key={cleanLabel} className="flex items-center gap-3">
                            {/* Divider: Using a mid-tone gray since it's a non-text decorative element (3:1 threshold) */}
                            {i > 0 && <span className="text-zinc-400 font-light select-none">/</span>}

                            {/* Tag Text: Using deep zinc/slate tones to pass the 4.5:1 small text threshold */}
                            <span className="font-medium text-zinc-700 dark:text-zinc-300 group-hover:text-zinc-950 dark:group-hover:text-white transition-colors duration-200">
                                {cleanLabel}
                            </span>
                        </span>
                    );
                })}
            </div>

            {/* Icon Indicator: Bumping up color weight to ensure visibility */}
            <ArrowRight className="w-4 h-4 ms-4 text-zinc-400 group-hover:text-primary transition-colors transition-transform duration-300 transform group-hover:translate-x-1" />

        </Link>
    );
}