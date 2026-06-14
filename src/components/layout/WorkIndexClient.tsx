"use client";

import { useState, useMemo } from "react";
import { Work } from "@/types/work";
import { WorkCard } from "../ui/WorkCard";
import { PageHeader } from "../ui/PageHeader";
import { caseStudiesContent } from "@/constants/page-content";

export function WorkIndexClient({
    initialData,
}: {
    initialData: Work[];
}) {
    const [selectedTag, setSelectedTag] = useState<string | null>(null);

    // Dynamic, data-driven array deduction for your tag filtering architecture
    const allTags = useMemo(() => {
        if (!initialData) return [];
        return Array.from(
            new Set(initialData.flatMap((study) => study.tags || [])),
        ).sort();
    }, [initialData]);

    const filteredStudies = useMemo(() => {
        return selectedTag
            ? initialData.filter((study) => study.tags?.includes(selectedTag))
            : initialData;
    }, [selectedTag, initialData]);

    const { header, filter } = caseStudiesContent;

    return (
        <div className="py-24 px-6 lg:px-12">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16 fade-up-reveal">
                    <PageHeader
                        title={header.title}
                        description={header.description}
                    />
                </div>

                {/* Filter Controls */}
                <div className="mb-12 fade-up-reveal stagger-1">
                    <div className="flex flex-wrap gap-3">
                        <button
                            onClick={() => setSelectedTag(null)}
                            className={`px-4 py-2 text-sm font-medium rounded-sm transition-all duration-200 ${selectedTag === null
                                    ? "bg-primary text-primary-foreground"
                                    : "bg-card border border-border text-fg-70 hover:border-primary/30"
                                }`}
                        >
                            {filter.allLabel}
                        </button>
                        {allTags.map((tag) => (
                            <button
                                key={tag}
                                onClick={() => setSelectedTag(tag)}
                                className={`px-4 py-2 text-sm font-medium rounded-sm transition-all duration-200 ${selectedTag === tag
                                        ? "bg-primary text-primary-foreground"
                                        : "bg-card border border-border text-fg-70 hover:border-primary/30"
                                    }`}
                            >
                                {tag}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Grid Deck */}
                <div className="grid md:grid-cols-2 gap-8">
                    {filteredStudies.map((study, index) => (
                        <WorkCard
                            key={study._id}
                            work={study}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}