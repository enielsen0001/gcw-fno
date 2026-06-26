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
            group relative flex items-center md:items-center justify-between py-8 border-b border-border/50
            fade-up-reveal ${staggerClass} transition-all duration-300
            hover:border-primary/40 px-2
        `}>
            <div className="flex items-start md:items-center flex-col md:flex-row gap-4 w-full">

                {/* Left Frame: Title, Short Description, & Micro Context */}
                <div className="flex flex-col gap-1 flex-grow pr-4">

                    <div className="flex flex-wrap items-center gap-3 text-xs font-mono tracking-wide relative z-20 mb-2">
                        {tags.slice(0, 3).map((tag: any, i: number) => {
                            const tagLabel = typeof tag === 'object' && tag !== null ? (tag.label || tag.value || "") : tag;


                            return (
                                <span key={tagLabel} className="flex items-center gap-3">
                                    {/* Divider: Replaced "/" with a decorative circle icon */}
                                    {i > 0 && (
                                        <Circle
                                            className="w-1 h-1 fill-zinc-400 text-zinc-400 dark:fill-zinc-600 dark:text-zinc-600 select-none"
                                            aria-hidden="true"
                                        />
                                    )}

                                    <span className="text-gray-500 group-hover:text-foreground transition-colors duration-200">
                                        {tagLabel}
                                    </span>
                                </span>
                            );
                        })}
                    </div>

                    <h3 className="text-2xl font-medium text-foreground group-hover:text-primary transition-colors duration-300 m-0 tracking-tight">
                        <Link
                            href={`/work/${slug}`}
                            className=" focus:outline-none after:absolute after:inset-0 after:content-[''] after:z-10"
                        >
                            {title}
                        </Link>
                    </h3>

                    {/* Short Description added beneath the title */}
                    {renderDescription && (
                        <p className="text-gray-500 group-hover:text-foreground m-0 max-w-3xl duration-300">
                            {renderDescription}
                        </p>
                    )}
                </div>

            </div>

            {/* Icon Indicator: Bumping up color weight to ensure visibility */}
            <ArrowRight className="w-6 h-6 ms-4 text-zinc-400 flex-shrink-0  group-hover:text-primary transition-colors transition-transform duration-300 transform group-hover:translate-x-1" aria-hidden="true" />

        </article>
    );
}