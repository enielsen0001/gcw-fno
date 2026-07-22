import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import InfoBadge from "./InfoBadge";
import { Work } from "@/types/work";
import React from "react";

interface WorkCardProps {
    work: Work;
    index: number;
}

export function WorkCard({ index, work }: WorkCardProps) {
    if (!work) {
        return null;
    }

    const { slug, title, cardDescription, tags, featuredMetric, context } = work;
    const staggerClass = `stagger-${Math.min(index + 1, 4)}`;

    // Defend against structured data leaks: force runtime evaluation to strings
    const renderDescription = typeof cardDescription === 'string' ? cardDescription : '';

    return (
        <div
            className={`
                group relative p-8 rounded-lg border border-border bg-card
                fade-up-reveal ${staggerClass} flex flex-col justify-between
                transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]
                hover:-translate-y-1 hover:border-primary/40
                shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)]
            `}
        >
            <div className="space-y-5">
                <div>
                    {context?.role && (
                        <span className="text-[12px] uppercase font-bold tracking-widest text-muted-foreground block mb-2.5">
                            {context.role}
                        </span>
                    )}

                    <div className="flex items-start justify-between gap-4">
                        <h3 className="group-hover:text-primary transition-colors duration-300 m-0 text-2xl font-semibold tracking-tight text-foreground balance">
                            <Link
                                href={`/work/${slug}`}
                                className="focus:outline-none after:absolute after:inset-0 after:content-[''] after:z-10"
                            >
                                {title}
                            </Link>
                        </h3>
                        <ArrowUpRight className="w-5 h-5 text-muted-foreground/60 shrink-0 transition-all duration-300 transform group-hover:text-primary group-hover:translate-x-[5px] group-hover:-translate-y-[5px] mt-1" />
                    </div>
                </div>

                {/* Narrative: Cleaner contrast weight */}
                <p className="text-foreground/80 text-base leading-relaxed m-0 mb-4 font-normal">
                    {renderDescription}
                </p>

                {/* Tech Tags - given relative z-20 so they stay interactive if needed over the link layer */}
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 pt-1 relative z-20 text-[12px] font-mono text-muted-foreground">
                    {tags?.map((tag: any, index: number) => {
                        const tagLabel = typeof tag === 'object' && tag !== null ? (tag.label || tag.value || "") : tag;

                        return (
                            <React.Fragment key={tagLabel}>
                                <span
                                    key={tagLabel}
                                    className="px-2 py-0.5 font-mono tracking-wider text-muted-foreground bg-muted/50 rounded-none"
                                >
                                    {tagLabel}
                                </span>
                            </React.Fragment>
                        );
                    })}
                </div>
            </div>

            {/* Premium Impact Metric Anchor */}
            {featuredMetric && typeof featuredMetric === 'string' && (
                <div className="pt-4 mt-6 border-t border-border/60">
                    <p className="text-sm font-medium text-primary m-0 leading-tight flex items-center gap-2">
                        {featuredMetric}
                    </p>
                </div>
            )}
        </div>
    );
}