
'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { CaseStudy } from '@/types/case-study';

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

  console.log(initialData)

  return (
        <div className="py-16 px-6 lg:px-12">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16 fade-up-reveal">
                    <h1 className="text-5xl md:text-6xl tracking-tight mb-6 text-foreground">
                        Transformation Portfolio
                    </h1>
                    <p className="text-xl md:text-2xl text-foreground/60 max-w-3xl leading-relaxed">
                        Real-world case studies of architectural modernization and legacy system evolution.
                        Each transformation demonstrates strategic planning, incremental execution, and measurable business impact.
                    </p>
                </div>

                <div className="mb-12 fade-up-reveal stagger-1">
                    <div className="flex flex-wrap gap-3">
                        <button
                            onClick={() => setSelectedTag(null)}
                            className={`px-4 py-2 rounded-md btn-hover ${selectedTag === null
                                    ? 'bg-primary text-primary-foreground'
                                    : 'bg-card border border-border text-foreground/70 hover:border-primary/30'
                                }`}
                        >
                            All
                        </button>
                        {allTags.map((tag) => (
                            <button
                                key={tag}
                                onClick={() => setSelectedTag(tag)}
                                className={`px-4 py-2 rounded-md btn-hover ${selectedTag === tag
                                        ? 'bg-primary text-primary-foreground'
                                        : 'bg-card border border-border text-foreground/70 hover:border-primary/30'
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

                        return (
                            <Link
                                key={study.slug}
                                href={`/case-studies/${study.slug}`} // Changed 'to' to 'href'
                                className={`group relative p-8 rounded-lg border border-border bg-card hover:border-primary/30 transition-all fade-up-reveal ${staggerClass}`}
                            >
                                <div className="mb-6">
                                    <div className="flex items-start justify-between mb-2">
                                        <h2 className="text-2xl text-foreground group-hover:text-primary transition-colors">
                                            {study.title}
                                        </h2>
                                        <ArrowUpRight className="w-5 h-5 text-foreground/40 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                                    </div>
                                    <p className="text-foreground/50 mb-4">
                                        {study.subtitle}
                                    </p>
                                </div>

                                <p className="text-foreground/70 mb-6 leading-relaxed">
                                    {study.cardDescription}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {study.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-3 py-1 text-sm bg-muted text-foreground/70 rounded-md"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="pt-4 border-t border-border">
                                    <p className="text-primary font-medium">
                                        {study.featuredMetric}
                                    </p>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}