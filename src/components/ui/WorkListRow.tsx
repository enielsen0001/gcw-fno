import Link from "next/link";
import { ArrowRight, Circle } from "lucide-react"; // Imported Circle for the tag divider
import { Work } from "@/types/work";

interface WorkListRowProps {
    work: Work;
    index: number;
}

export function WorkListRow({ index, work }: WorkListRowProps) {
    if (!work) return null;

    const { slug, title, cardDescription, tags } = work;
    const staggerClass = `stagger-${Math.min(index + 1, 4)}`;

    const renderDescription = typeof cardDescription === 'string' ? cardDescription : '';

    return (
        <article className={`
    group relative flex items-center justify-between py-8 border-b-2 border-border/50
    fade-up-reveal ${staggerClass} transition-all duration-300
    hover:border-primary/40 px-2
`}>
            <div className="flex items-start md:items-center flex-col md:flex-row gap-4 w-full">

                {/* Left Frame: Title, Short Description, & Micro Context */}
                <div className="flex flex-col gap-1 flex-grow pr-4">

                    {/* Tags Container */}
                    <div className="flex flex-wrap items-center gap-3 text-sm font-mono tracking-wide mb-2">
                        {tags.slice(0, 3).map((tag: any, i: number) => {
                            const tagLabel = typeof tag === 'object' && tag !== null ? (tag.label || tag.value || "") : tag;

                            return (
                                <span key={tagLabel} className="flex items-center gap-3">
                                    {i > 0 && (
                                        <span className="text-muted-foreground/30 font-normal" aria-hidden="true">/</span>
                                    )}

                                    <span className="font-medium uppercase tracking-wide text-muted-foreground group-hover:text-foreground transition-colors duration-200">
                                        {tagLabel}
                                    </span>
                                </span>
                            );
                        })}
                    </div>

                    <h3 className="text-3xl font-medium text-foreground group-hover:text-primary transition-colors duration-300 m-0 mb-2 tracking-tight">
                        {/* The stretched link overlay */}
                        <Link
                            href={`/work/${slug}`}
                            className="focus:outline-none focus-visible:underline after:absolute after:inset-0 after:content-[''] after:z-10"
                        >
                            {title}
                        </Link>
                    </h3>

                    {/* Short Description */}
                    {renderDescription && (
                        <p className="text-muted-foreground group-hover:text-foreground m-0 max-w-3xl transition-colors duration-300">
                            {renderDescription}
                        </p>
                    )}
                </div>

            </div>

            {/* Icon Indicator */}
            <ArrowRight
                className="w-6 h-6 ms-4 text-zinc-400 flex-shrink-0 group-hover:text-primary transition-all duration-300 transform group-hover:translate-x-1"
                aria-hidden="true"
            />
        </article>
    );
}