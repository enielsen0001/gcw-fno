"use client";

import { CaseStudy, RelevantLink } from "@/types/work";
import { FooterCTA } from "../ui/FooterCTA";
import { PageHeader } from "../ui/PageHeader";
import { caseStudyDetailsContent } from "@/constants/page-content";
import { ArrowUpRight } from "lucide-react";
import InfoBadge from "../ui/InfoBadge";
import { CustomPortableText } from "../ui/CustomPortableText"; // Import your styled component wrapper

export function WorkDetailClient({ study }: { study: CaseStudy }) {
    const { navigation, sections, sidebar, footerDefaults } = caseStudyDetailsContent;

    return (
        <article className="min-h-screen py-24 px-6 lg:px-12 selection:bg-primary selection:text-primary-foreground">
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
                        {/* Executive Summary Block */}
                        <section className="grid md:grid-cols-2 gap-16 border-t border-border pt-12">
                            <div className="space-y-6">
                                <h3 className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">
                                    {sections.challenge.label}
                                </h3>
                                {/* Your styled rich-text handling inline italicized styling safely */}
                                <div className="border-l-2 border-primary/10 pl-6 italic">
                                    <CustomPortableText value={study.executiveSummary.challenge} />
                                </div>
                            </div>
                            <div className="space-y-6">
                                <h3 className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">
                                    {sections.approach.label}
                                </h3>
                                <div>
                                    <CustomPortableText value={study.executiveSummary.approach} />
                                </div>
                            </div>
                        </section>

                        {/* Architectural Decisions Block */}
                        <section className="space-y-12">
                            <h2 className="text-4xl tracking-tight">{sections.decisions.title}</h2>
                            <div className="grid md:grid-cols-2 gap-8">
                                {study.solution?.keyDecisions?.map((decision: any, index: number) => (
                                    <div
                                        key={index}
                                        className="p-8 border border-border bg-card/20 rounded-lg flex flex-col justify-between hover:border-primary/30 transition-colors duration-300"
                                    >
                                        <div>
                                            <div className="flex gap-4 mb-4">
                                                <span className="text-xs font-mono text-primary pt-1">
                                                    [{String(index + 1).padStart(2, "0")}]
                                                </span>
                                                <h4 className="text-xl font-medium tracking-tight">
                                                    {decision.title}
                                                </h4>
                                            </div>
                                            <div>
                                                <CustomPortableText value={decision.rationale} />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Development Phases / Timeline */}
                        <section className="space-y-16">
                            <h2 className="text-4xl tracking-tight">{sections.execution.title}</h2>
                            <div className="relative">
                                {study.solution.technicalImplementation.map((phase: any, index: number) => (
                                    <div
                                        key={index}
                                        className="group relative pl-16 pb-20 border-l border-border last:border-l-0 last:pb-0"
                                    >
                                        <div className="absolute left-0 top-0 -translate-x-1/2 w-10 h-10 bg-background border border-border rounded-full flex items-center justify-center text-fg-40 text-sm transition-all group-hover:border-primary group-hover:text-primary">
                                            {String(index + 1).padStart(2, "0")}
                                        </div>
                                        <h4 className="text-2xl font-medium mb-4 group-hover:text-primary transition-colors">
                                            {phase.phase}
                                        </h4>
                                        <div className="max-w-3xl">
                                            <CustomPortableText value={phase.details} />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* System Outcomes Tray */}
                        {Array.isArray(study.outcomes) && study.outcomes.length > 0 && (
                            <section className="bg-card border border-border p-12 lg:p-16 rounded-lg fade-up-reveal">
                                <h3 className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-16">
                                    {sections.outcomes.label}
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                                    {study.outcomes.map(
                                        (outcome: any, index: number) => (
                                            <div key={index} className="space-y-4">
                                                <div className="h-px w-12 bg-primary/30 mb-6" />
                                                <h5 className="text-sm font-semibold uppercase tracking-wider text-foreground">
                                                    {outcome.label}
                                                </h5>
                                                <p className="text-fg-70 text-sm font-light leading-relaxed">
                                                    {outcome.description}
                                                </p>
                                            </div>
                                        ),
                                    )}
                                </div>
                            </section>
                        )}
                    </main>

                    {/* Contextual Info Sidebar */}
                    <aside className="lg:w-80 shrink-0 space-y-8 fade-up-reveal">
                        <div className="sticky top-28 space-y-1 border-t border-border pt-12">
                            {/* Strategic Engineering Role Allocation */}
                            {study.context.role && (
                                <div className="pb-8">
                                    <label className="text-[10px] uppercase tracking-[0.4em] text-primary block mb-3 font-semibold">
                                        Allocation
                                    </label>
                                    <p className="text-lg font-medium text-foreground">
                                        {study.context.role}
                                    </p>
                                </div>
                            )}

                            <div className="pb-8">
                                <label className="text-[10px] uppercase tracking-[0.4em] text-primary block mb-3 font-semibold">
                                    {sidebar.contextLabel}
                                </label>
                                <div className="space-y-1">
                                    <p className="text-base font-light">
                                        {study.context.industry}
                                    </p>
                                    <p className="text-xs text-muted-foreground italic">
                                        {study.context.timeline}
                                    </p>
                                </div>
                            </div>

                            <div className="pb-8">
                                <label className="text-[10px] uppercase tracking-[0.4em] text-primary block mb-4 font-semibold">
                                    {sidebar.architectureLabel}
                                </label>
                                <div className="flex flex-wrap gap-2">
                                    {study.context.technologies.map((tech: string) => (
                                        <InfoBadge variant="subtle" key={tech}>
                                            {tech}
                                        </InfoBadge>
                                    ))}
                                </div>
                            </div>

                            {study.relevantLinks && study.relevantLinks.length > 0 && (
                                <div className="pt-8 border-t border-border/50">
                                    <label className="text-[10px] uppercase tracking-[0.4em] text-primary block mb-4 font-semibold">
                                        {sidebar.artifactsLabel}
                                    </label>
                                    <div className="space-y-4">
                                        {study.relevantLinks.map((link: RelevantLink, index: number) => (
                                            <a
                                                key={index}
                                                href={link.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="group inline-flex items-center text-sm text-fg-70 gap-1.5 hover:text-primary transition-colors"
                                            >
                                                <span className="border-b border-transparent group-hover:border-primary/30 transition-colors">
                                                    {link.label}
                                                </span>
                                                <ArrowUpRight className="w-4 h-4 text-fg-40 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </aside>
                </div>

                <FooterCTA
                    variant="outline"
                    title={study.footerCTA?.title || footerDefaults.title}
                    description={study.footerCTA?.description || footerDefaults.description}
                    buttonText={study.footerCTA?.buttonText || footerDefaults.buttonText}
                />
            </div>
        </article>
    );
}