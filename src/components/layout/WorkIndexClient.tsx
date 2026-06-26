"use client";

import { useState, useMemo } from "react";
import { Work } from "@/types/work";
import { WorkListRow } from "../ui/WorkListRow";
import { PageHeader } from "../ui/PageHeader";
import { caseStudiesContent } from "@/constants/page-content";

export function WorkIndexClient({
    initialData,
}: {
    initialData: Work[];
}) {
    const [selectedTag, setSelectedTag] = useState<string | null>(null);


    const allTags = useMemo(() => {
        if (!initialData) return [];
        return Array.from(
            new Set(initialData.flatMap((study) => study.tags || [])),
        ).sort((a, b) => a.localeCompare(b));
    }, [initialData]);

    const filteredStudies = useMemo(() => {
        return selectedTag
            ? initialData.filter((study) => study.tags?.includes(selectedTag))
            : initialData;
    }, [selectedTag, initialData]);

    const { header, filter } = caseStudiesContent;

    return (
        <main id="main-content" className="py-24 px-6 lg:px-12">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16 fade-up-reveal">
                    <PageHeader
                        title={header.title}
                        description={header.description}
                    />
                </div>

                {/* Filter Controls */}
                <fieldset className="mb-12 pl-4 py-2 border-l-2 border-muted/40 fade-up-reveal stagger-1 p-0 max-w-5xl">
                    <legend className="sr-only">Filter projects by tag</legend>
                    <div className="flex flex-wrap gap-1.5">
                        <button
                            onClick={() => setSelectedTag(null)}
                            aria-pressed={selectedTag === null}
                            className={`px-2.5 py-0.5 text-xs font-medium rounded-full border transition-all duration-200 ${selectedTag === null
                                    ? "bg-primary/10 text-primary border-transparent hover:bg-primary/15"
                                    : "bg-transparent border-transparent text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                                }`}
                        >
                            {filter.allLabel}
                        </button>
                        {allTags.map((tag) => (
                            <button
                                key={tag}
                                onClick={() => setSelectedTag(tag)}
                                aria-pressed={selectedTag === tag}
                                className={`px-2.5 py-0.5 text-xs font-medium rounded-full border transition-all duration-200 ${selectedTag === tag
                                        ? "bg-primary/10 text-primary border-transparent hover:bg-primary/15"
                                        : "bg-transparent border-transparent text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                                    }`}
                            >
                                {tag}
                            </button>
                        ))}
                    </div>
                </fieldset>

                {/* Grid Deck */}
                <section aria-labelledby="projects-heading" className="grid md:grid-cols-1">
                    <h2 id="projects-heading" className="sr-only">Projects</h2>
                    {filteredStudies.map((study, index) => (
                        <WorkListRow
                            key={study._id}
                            work={study}
                            index={index}
                        />
                    ))}
                </section>
            </div>
        </main>
    );
}