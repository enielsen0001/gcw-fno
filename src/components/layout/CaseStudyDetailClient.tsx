"use client";

import { CaseStudy, RelevantLink } from "@/types/case-study";
import { FooterCTA } from "../ui/FooterCTA";
import { PageHeader } from "../ui/PageHeader";
import { caseStudyDetailsContent } from "@/constants/page-content";
import { ArrowUp, ArrowUpRight, Badge } from "lucide-react";
import InfoBadge from "../ui/InfoBadge";

export function CaseStudyDetailClient({ study }: { study: CaseStudy }) {
    const { navigation, sections, sidebar, footerDefaults } =
        caseStudyDetailsContent;
    return (
        <article className="min-h-screen py-16 px-6 lg:px-12 selection:bg-primary selection:text-primary-foreground">
            <div className="max-w-7xl mx-auto">
                <PageHeader
                    title={study.title}
                    subtitle={study.subtitle}
                    tags={study.tags}
                    backLink={{
                        href: navigation.backHref,
                        label: navigation.backLabel,
                    }}
                />

                <div className="flex flex-col lg:flex-row gap-16">
                    <main className="flex-1 space-y-32">
                        {/* Executive Summary: Two-Column Clarity */}
                        <section className="grid md:grid-cols-2 gap-16 border-t border-border pt-12 fade-up-reveal">
                            <div className="space-y-6">
                                <h3 className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">
                                    {sections.challenge.label}
                                </h3>
                                <p className="text-fg-80 text-xl font-light leading-relaxed italic border-l-2 border-primary/10 pl-6">
                                    {study.executiveSummary.challenge}
                                </p>
                            </div>
                            <div className="space-y-6">
                                <h3 className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">
                                    {sections.approach.label}
                                </h3>
                                <p className="text-fg-80 text-xl font-light leading-relaxed">
                                    {study.executiveSummary.approach}
                                </p>
                            </div>
                        </section>

                        {/* Key Decisions: New Strategic Section */}
                        <section className="space-y-12 fade-up-reveal">
                            <h2 className="text-4xl">
                                {sections.decisions.title}
                            </h2>
                            <div className="grid md:grid-cols-2 gap-8">
                                {study.solution?.keyDecisions?.map(
                                    (decision: any, index: number) => (
                                        <div
                                            key={index}
                                            className="p-8 border border-border bg-card/20 rounded-lg group hover:border-primary/30 transition-colors"
                                        >
                                            <div className="flex gap-4 mb-4">
                                                <span className="text-xs font-mono text-primary">
                                                    [
                                                    {String(index + 1).padStart(
                                                        2,
                                                        "0",
                                                    )}
                                                    ]
                                                </span>
                                                <h4 className="text-lg font-medium">
                                                    {decision.title}
                                                </h4>
                                            </div>
                                            <p className="text-fg-70 text-sm leading-relaxed">
                                                {decision.rationale}
                                            </p>
                                        </div>
                                    ),
                                )}
                            </div>
                        </section>

                        {/* Technical Implementation Timeline */}
                        <section className="space-y-16 fade-up-reveal">
                            <h2 className="text-4xl">
                                {sections.execution.title}
                            </h2>
                            <div className="relative">
                                {study.solution.technicalImplementation.map(
                                    (phase: any, index: number) => (
                                        <div
                                            key={index}
                                            className="group relative pl-16 pb-20 border-l border-border last:border-l-0 last:pb-0"
                                        >
                                            <div className="absolute left-0 top-0 -translate-x-1/2 w-10 h-10 bg-background border border-border rounded-full flex items-center justify-center text-fg-40 text-sm transition-all group-hover:border-primary group-hover:text-primary">
                                                {String(index + 1).padStart(
                                                    2,
                                                    "0",
                                                )}
                                            </div>
                                            <h4 className="text-2xl mb-4 group-hover:text-primary transition-colors">
                                                {phase.phase}
                                            </h4>
                                            <p className="text-fg-70 text-lg max-w-2xl font-light">
                                                {phase.details}
                                            </p>
                                        </div>
                                    ),
                                )}
                            </div>
                        </section>

                        {/* General Outcomes Tray */}
                        {Array.isArray(study.outcomes) &&
                            study.outcomes.length > 0 && (
                                <section className="bg-card border border-border p-12 lg:p-16 rounded-xl fade-up-reveal">
                                    <h3 className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-16">
                                        {sections.outcomes.label}
                                    </h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
                                        {study.outcomes.map(
                                            (outcome: any, index: number) => (
                                                <div
                                                    key={index}
                                                    className="space-y-4"
                                                >
                                                    <div className="h-px w-12 bg-primary/30 mb-6" />
                                                    <h5 className="text-sm font-semibold uppercase tracking-wider">
                                                        {outcome.label}
                                                    </h5>
                                                    <p className="text-fg-70 font-light leading-relaxed">
                                                        {outcome.description}
                                                    </p>
                                                </div>
                                            ),
                                        )}
                                    </div>
                                </section>
                            )}
                    </main>

                    {/* Sticky Sidebar: Technical Context */}
                    <aside className="lg:w-80 space-y-8 fade-up-reveal">
                        <div className="sticky top-12 space-y-1 border-t border-border pt-12">
                            <div className="pb-8">
                                <label className="text-[10px] uppercase tracking-[0.4em] text-primary block mb-3">
                                    {sidebar.contextLabel}
                                </label>
                                <div className="space-y-1">
                                    <p className="text-lg font-light">
                                        {study.context.industry}
                                    </p>
                                    <p className="text-xs text-muted-foreground italic">
                                        {study.context.timeline}
                                    </p>
                                </div>
                            </div>

                            <div className="pb-8">
                                <label className="text-[10px] uppercase tracking-[0.4em] text-primary block mb-4">
                                    {sidebar.architectureLabel}
                                </label>
                                <div className="flex flex-wrap gap-2">
                                    {study.context.technologies.map(
                                        (tech: string) => (
                                            <InfoBadge
                                                variant="subtle"
                                                key={tech}
                                            >
                                                {tech}
                                            </InfoBadge>
                                        ),
                                    )}
                                </div>
                            </div>

                            {study.relevantLinks && (
                                <div className="pt-8 border-t border-border/50">
                                    <label className="text-[10px] uppercase tracking-[0.4em] text-primary block mb-4">
                                        {sidebar.artifactsLabel}
                                    </label>
                                    <div className="space-y-4">
                                        {study.relevantLinks.map(
                                            (
                                                link: RelevantLink,
                                                index: number,
                                            ) => (
                                                <a
                                                    key={index}
                                                    href={link.url}
                                                    className="group flex items-center text-sm text-fg-70 gap-2 hover:text-primary transition-colors"
                                                >
                                                    <span className="border-b border-transparent group-hover:border-primary/30">
                                                        {link.label}
                                                    </span>
                                                    <ArrowUpRight className="transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] relative opacity-0 group-hover:translate-x-[5px] group-hover:opacity-100" width={16} height={16} />
                                                </a>
                                            ),
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>
                    </aside>
                </div>

                <FooterCTA
                    variant="outline"
                    title={study.footerCTA?.title || footerDefaults.title}
                    description={
                        study.footerCTA?.description ||
                        footerDefaults.description
                    }
                    buttonText={
                        study.footerCTA?.buttonText || footerDefaults.buttonText
                    }
                />
            </div>
        </article>
    );
}
