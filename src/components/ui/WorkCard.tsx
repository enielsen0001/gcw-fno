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

    const { slug, title, subtitle, cardDescription, tags, featuredMetric, context } = work;
    const staggerClass = `stagger-${Math.min(index + 1, 4)}`;

    // Defend against structured data leaks: force runtime evaluation to strings
    const renderSubtitle = typeof subtitle === 'string' ? subtitle : '';
    const renderDescription = typeof cardDescription === 'string' ? cardDescription : '';

    return (
        <Link
            href={`/work/${slug}`}
            className={`
                group relative p-8 rounded-lg border border-border bg-card
                fade-up-reveal ${staggerClass} flex flex-col justify-between
                transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]
                hover:-translate-y-1 hover:border-primary/40
            `}
        >
            <div className="space-y-4">
                <div>
                    <div className="flex items-start justify-between gap-4 mb-2">
                        <h3 className="group-hover:text-primary transition-colors duration-300 m-0 text-2xl font-semibold tracking-tight text-foreground">
                            {title}
                        </h3>
                        <ArrowUpRight className="w-5 h-5 text-fg-40 shrink-0 transition-all duration-500 group-hover:text-primary" />
                    </div>

                    {context?.role && (
                        <span className="text-xs uppercase font-semibold tracking-wider text-primary/90 block mb-1">
                            {context.role}
                        </span>
                    )}
                    {/* Safeguarded rendering */}
                    <p className="text-xs uppercase tracking-wide text-fg-50 m-0 leading-tight">
                        {renderSubtitle}
                    </p>
                </div>

                {/* Safeguarded rendering */}
                <p className="text-fg-70 text-base leading-relaxed m-0">
                    {renderDescription}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                    {tags?.map((tag: any) => {
                        // Crucial fix: If a tag is returning an object like {label, value}, extract the text string safely
                        const tagLabel = typeof tag === 'object' && tag !== null ? (tag.label || tag.value || "") : tag;
                        return (
                            <InfoBadge key={String(tagLabel)} variant="subtle">
                                {String(tagLabel)}
                            </InfoBadge>
                        );
                    })}
                </div>
            </div>

            {/* Crucial Fix: Ensure featuredMetric is strictly a primitive string before appending to JSX */}
            {featuredMetric && typeof featuredMetric === 'string' && (
                <div className="pt-4 mt-6 border-t border-border">
                    <p className="text-sm font-medium text-primary m-0 leading-tight">
                        {featuredMetric}
                    </p>
                </div>
            )}
        </Link>
    );
}