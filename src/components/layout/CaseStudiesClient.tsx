
'use client';

import { useState, useMemo } from 'react';
import { CaseStudy } from '@/types/case-study';
import { CaseStudyCard } from '../ui/CaseStudyCard';
import { PageHeader } from '../ui/PageHeader';
import { caseStudiesContent } from '@/constants/page-content';

export function CaseStudiesClient({ initialData }: { initialData: CaseStudy[] }) {
    const [selectedTag, setSelectedTag] = useState<string | null>(null);

    const allTags = useMemo(() => {
        return Array.from(
            new Set(initialData.flatMap((study) => study.tags))
        ).sort();
    }, [initialData]);

    const filteredStudies = useMemo(() => {
        return selectedTag
            ? initialData.filter((study) => study.tags.includes(selectedTag))
            : initialData;
    }, [selectedTag, initialData]);

    const { header, filter } = caseStudiesContent;

    return (
        <div className="py-16 px-6 lg:px-12">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16 fade-up-reveal">
                    <PageHeader
                        title={header.title}
                        description={header.description}
                    />
                </div>

                <div className="mb-12 fade-up-reveal stagger-1">
                    <div className="flex flex-wrap gap-3">
                        <button
                            onClick={() => setSelectedTag(null)}
                            className={`px-4 py-2 rounded-md btn-hover ${selectedTag === null
                                ? 'bg-primary text-primary-foreground'
                                : 'bg-card border border-border text-fg-70 hover:border-primary/30'
                                }`}
                        >
                            {filter.allLabel}
                        </button>
                        {allTags.map((tag) => (
                            <button
                                key={tag}
                                onClick={() => setSelectedTag(tag)}
                                className={`px-4 py-2 rounded-md btn-hover ${selectedTag === tag
                                    ? 'bg-primary text-primary-foreground'
                                    : 'bg-card border border-border text-fg-70 hover:border-primary/30'
                                    }`}
                            >
                                {tag}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {filteredStudies.map((study, index) => {
                        const staggerClass = `stagger-${Math.min(index + 1, 4)}`;
                        const impact = typeof study.featuredMetric === 'string'
                            ? study.featuredMetric
                            : study.featuredMetric?.value ?? '';

                        return (
                            <CaseStudyCard
                                key={study.slug}
                                slug={study.slug}
                                title={study.title}
                                subtitle={study.subtitle}
                                description={study.cardDescription}
                                tags={study.tags}
                                impact={impact}
                                index={0}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}