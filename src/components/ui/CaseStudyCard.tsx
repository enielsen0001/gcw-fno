import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import InfoBadge from "./InfoBadge";

interface CaseStudyProps {
    slug: string;
    title: string;
    subtitle: string;
    description: string;
    tags: string[];
    impact: string;
    index: number;
}

export function CaseStudyCard({ slug, title, subtitle, description, tags, impact, index }: CaseStudyProps) {
    const staggerClass = `stagger-${Math.min(index + 1, 4)}`;

    return (
<Link
    href={`/case-studies/${slug}`}
    className={`
        group relative p-8 rounded-lg border border-border bg-card
        fade-up-reveal ${staggerClass} flex flex-col
        transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]
        hover:-translate-y-1.15 hover:border-primary/40
        hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)]
        dark:hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)]
    `}
>
    <div className="">
        <div className="flex items-start justify-between mb-2">
            <h3 className="group-hover:text-primary transition-colors duration-300 mb-0 text-2xl tracking-tight text-foreground">
                {title}
            </h3>
            <ArrowUpRight
                className={`
                    w-5 h-5 text-fg-40 transition-all duration-500
                    ease-[cubic-bezier(0.34,1.56,0.64,1)]
                    group-hover:text-primary group-hover:scale-125
                    group-hover:translate-x-1 group-hover:-translate-y-1
                `}
            />
        </div>
        <p className="text-fg-60 uppercase leading-tight">
            {subtitle}
        </p>
    </div>

    <p className="text-fg-70 mb-6 ">
        {description}
    </p>

    <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag) => (
            <InfoBadge key={tag} variant="subtle">
                {tag}
            </InfoBadge>
        ))}
    </div>

    {impact &&
        <div className="pt-4 mt-auto border-t border-border transition-colors group-hover:border-primary/20">
            <p className="text-primary font-medium  m-0 leading-tight">{impact}</p>
        </div>
    }
</Link>
    );
}