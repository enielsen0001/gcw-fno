import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import InfoBadge from "./InfoBadge";
import { Work } from "@/types/work";

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
        <Link
            href={`/work/${slug}`}
            className={`
                group relative p-8 rounded-lg border border-border bg-card
                fade-up-reveal ${staggerClass} flex flex-col justify-between
                transition-color transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]
                hover:-translate-y-1 hover:border-primary/40
                box-shadow: 0 4px 20px -2px rgba(0,0,0,0.05)
            `}
        >
            <div className="space-y-5">
                <div>
                    {/* Eyebrow: Elevated to the top with tracked out editorial style */}
                    {context?.role && (
                        <span className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground block mb-2.5">
                            {context.role}
                        </span>
                    )}

                    {/* Headline & Link Indicator */}
                    <div className="flex items-start justify-between gap-4">
                        <h3 className="group-hover:text-primary transition-colors duration-300 m-0 text-2xl font-semibold tracking-tight text-foreground balance">
                            {title}
                        </h3>
                        <ArrowUpRight className="w-5 h-5 text-muted-foreground/60 shrink-0 transition-all duration-300 transform group-hover:text-primary group-hover:translate-x-[5px] group-hover:-translate-y-[5px] mt-1" />
                    </div>
                </div>

                {/* Narrative: Cleaner contrast weight */}
                <p className="text-foreground/80 text-base leading-relaxed m-0 mb-4 font-normal">
                    {renderDescription}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 pt-1">
                    {tags?.map((tag: any) => {
                        const tagLabel = typeof tag === 'object' && tag !== null ? (tag.label || tag.value || "") : tag;

                        // Edge case patch: Quick runtime fix for the typo in the dataset
                        const cleanLabel = String(tagLabel) === "Pinea" ? "Pinia" : String(tagLabel);

                        return (
                            <InfoBadge key={cleanLabel} variant="subtle">
                                {cleanLabel}
                            </InfoBadge>
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
        </Link>
    );
}