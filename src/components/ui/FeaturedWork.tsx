"use client";

import Link from "next/link";
import { Work } from "@/types/work";
import { ArrowRight } from "lucide-react";

interface FeaturedWorkProps {
    relatedWorks?: Work[];
}

export function FeaturedWork({ relatedWorks }: FeaturedWorkProps) {
    if (!relatedWorks || relatedWorks.length === 0) return null;

    return (
        <section className="py-32 border-t border-border fade-up-reveal">
            <div className="space-y-16">
                <header className="flex flex-col md:flex-row justify-between items-end gap-8">
                    <div className="max-w-2xl space-y-4">
                        <span className="text-[10px] uppercase tracking-[0.4em] text-primary font-bold block">
                            Proof in Practice
                        </span>
                        <h2 className="text-4xl lg:text-5xl font-light tracking-tight text-foreground">
                            See This Capability in Action
                        </h2>
                    </div>

                    <Link
                        href="/work"
                        className="group flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-bold text-fg-50 hover:text-primary transition-colors"
                    >
                        View All Work
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                </header>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {relatedWorks?.map((work) => (
                        <Link
                            key={work.slug}
                            href={`/work/${work.slug}`} // Relocated safely to work dynamic node paths
                            className="group relative block p-8 border border-border bg-card/20 rounded-lg hover:border-primary/40 transition-all duration-500 flex flex-col justify-between"
                        >
                            <div className="space-y-6 relative z-10">
                                <div className="flex justify-between items-start">
                                    {work.featuredMetric && (
                                        <span className="text-primary font-mono text-xs uppercase tracking-wider">
                                            {work.featuredMetric}
                                        </span>
                                    )}
                                </div>

                                <div className="space-y-2">
                                    <h4 className="text-xl font-medium group-hover:text-primary transition-colors duration-300">
                                        {work.title}
                                    </h4>
                                    <p className="text-sm text-fg-70 line-clamp-3 font-light leading-relaxed m-0">
                                        {work.cardDescription}
                                    </p>
                                </div>

                                <div className="pt-2 flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-bold text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                                    Read Case Study <ArrowRight className="w-3 h-3" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}