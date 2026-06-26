"use client";

import { Work, RelevantLink } from "@/types/work";
import { FooterCTA } from "../ui/FooterCTA";
import { PageHeader } from "../ui/PageHeader";
import { caseStudyDetailsContent } from "@/constants/page-content";
import { ArrowUpRight } from "lucide-react";
import { CustomPortableText } from "../ui/CustomPortableText";

export function WorkDetailClient({ study }: { study: Work }) {
    const { navigation, sections, sidebar, footerDefaults } = caseStudyDetailsContent;

    return (
        <article className="min-h-screen px-6 lg:px-12 bg-background text-foreground transition-colors duration-300 selection:bg-primary selection:text-primary-foreground">
            <div className="max-w-4xl mx-auto"> {/* Tightened container max-width to optimize character line-length tracking */}

                {/* 1. Header Frame */}
                <PageHeader
                    title={study.title}
                    subtitle={study.subtitle}
                    tags={study.tags}
                    backLink={{
                        href: navigation.backHref,
                        label: navigation.backLabel,
                    }}
                />

                {/* 2. Horizontal Metadata Strip (Replaces the cramped aside column) */}
                <section aria-labelledby="metadata-heading" className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 my-12 border-y border-border/60 font-mono text-xs">
                    <h2 id="metadata-heading" className="sr-only">Project metadata</h2>
                    {study.context?.role && (
                        <div className="space-y-2">
                            <span className="text-primary uppercase tracking-wider block font-semibold">Contribution</span>
                            <p className="text-foreground text-sm m-0 font-sans font-medium">{study.context.role}</p>
                        </div>
                    )}
                    {(study.context?.industry || study.context?.timeline) && (
                    <div className="space-y-2">
                        <span className="text-primary uppercase tracking-wider block font-semibold">{sidebar.contextLabel}</span>
                        <div className="text-sm m-0 font-sans text-fg-80 space-y-0.5">
                            {study.context.industry && (
                                <p className="m-0 font-light">{study.context.industry}</p>
                            )}
                            {study.context.timeline && (
                                <p className="m-0 text-xs text-fg-60 italic">{study.context.timeline}</p>
                            )}
                        </div>
                    </div>
                    )}
                    {study.context?.technologies?.length > 0 && (
                    <div className="col-span-2 space-y-3">
                        <span className="text-primary uppercase tracking-wider block font-semibold">{sidebar.architectureLabel}</span>
                        <p className="text-foreground text-sm m-0 font-sans font-medium leading-relaxed">
                            {study.context.technologies.map((tech: string, index: number) => (
                                <span key={tech} className="inline-block">
                                    {tech}
                                    {index < study.context.technologies.length - 1 && (
                                        <span className="text-muted-foreground/40 font-mono mx-2" aria-hidden="true">//
                                        </span>
                                    )}
                                </span>
                            ))}
                        </p>
                    </div>
                    )}
                </section>

                {/* 3. Deep-Dive Storytelling Canvas */}
                <main id="main-content" className="space-y-32 pt-8">

                    {/* Executive Summary Block (Now wide and asymmetric) */}
                    <section aria-labelledby="challenge-heading" className="space-y-16 max-w-3xl">
                        {study.executiveSummary?.challenge && (
                            <div className="space-y-4">
                                <h3 id="challenge-heading" className="text-sm uppercase tracking-widest text-primary font-semibold font-mono">
                                    {sections.challenge.label}
                                </h3>
                                <div className="text-xl text-fg-80 font-light  leading-relaxed border-l-2 border-primary/20 pl-6">
                                    <CustomPortableText value={study.executiveSummary.challenge} />
                                </div>
                            </div>
                        )}

                        {study.executiveSummary?.approach && (

                            <div className="space-y-4">
                                <h3 id="approach-heading" className="text-sm uppercase tracking-widest text-primary font-semibold font-mono">
                                    {sections.approach.label}
                                </h3>
                                <div className="text-base text-fg-80 leading-relaxed font-light">
                                    <CustomPortableText value={study.executiveSummary.approach} />
                                </div>
                            </div>
                        )}
                    </section>

                    {study.solution?.keyDecisions?.length > 0 && (
                        <section aria-labelledby="decisions-heading" className="space-y-12">
                            <h2 id="decisions-heading" className="text-3xl mb-2 tracking-tight font-bold text-foreground">{sections.decisions.title}</h2>
                            <div className="space-y-6">
                                {study.solution?.keyDecisions?.map((decision: any, index: number) => (
                                    <div
                                        key={index}
                                        className="py-8 border-b border-border/60 bg-transparent flex flex-col md:flex-row items-start gap-3 md:gap-6 hover:bg-card/10 transition-colors duration-300"
                                    >
                                        <div className="flex items-center gap-3 font-mono shrink-0 select-none pt-1" aria-hidden="true">
                                            <span className="font-mono font-semibold text-sm text-primary" aria-hidden="true">
                                                //
                                            </span>

                                        </div>
                                        <div className="space-y-3 flex-1">
                                            <h4 className="text-xl font-semibold tracking-tight text-foreground m-0">
                                                {decision.title}
                                            </h4>
                                            <div className="text-sm text-fg-80 font-light leading-relaxed">
                                                <CustomPortableText value={decision.rationale} />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {study.solution?.technicalImplementation?.length > 0 && (
                        <section aria-labelledby="execution-heading" className="space-y-16">
                            <h2 id="execution-heading" className="text-3xl mb-2  tracking-tight font-bold text-foreground mb-2">{sections.execution.title}</h2>
                            <div className="space-y-12 py-8">
                                {study.solution.technicalImplementation.map((phase: any, index: number) => (
                                    <div
                                    key={index}
                                    className="relative grid md:grid-cols-[60px_1fr] gap-4 md:gap-8 items-start"
                                >
                                    <div className="font-mono text-sm text-primary pt-1.5" aria-hidden="true">
                                        Phase {String(index + 1).padStart(2, "0")}
                                    </div>
                                    <div className="space-y-3">
                                        <h4 className="text-2xl font-medium tracking-tight text-foreground m-0">
                                            {phase.phase}
                                        </h4>
                                        <div className="text-base text-fg-80 font-light leading-relaxed max-w-3xl">
                                            <CustomPortableText value={phase.details} />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                    )}

                    {/* Project Assets / Artifacts Section */}
                    {study.relevantLinks?.length && (
                        <section aria-labelledby="artifacts-heading" className="py-8 border-t border-border/60 space-y-6">
                            <h3 id="artifacts-heading" className="text-sm uppercase tracking-widest text-primary font-semibold font-mono">
                                {sidebar.artifactsLabel}
                            </h3>
                            <div className="flex flex-wrap gap-x-8 gap-y-3">
                                {study.relevantLinks.map((link: RelevantLink, index: number) => (
                                    <a
                                        key={index}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group inline-flex items-center text-sm text-fg-80 gap-1.5 hover:text-primary transition-colors font-mono"
                                    >
                                        <span className="underline underline-offset-4 decoration-border/80 group-hover:decoration-primary/40">
                                            {link.label}
                                        </span>
                                        <ArrowUpRight className="w-3.5 h-3.5 text-fg-40 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" aria-hidden="true" />
                                    </a>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* System Outcomes Tray */}
                    {Array.isArray(study.outcomes) && study.outcomes.length > 0 && (
                        <section aria-labelledby="outcomes-heading" className="bg-card/30 border border-border/60 p-10 lg:p-12 rounded-sm">
                            <h3 id="outcomes-heading" className="text-sm uppercase tracking-widest text-primary font-semibold font-mono">
                                {sections.outcomes.label}
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                {study.outcomes.map((outcome: any, index: number) => (
                                    <div key={index} className="space-y-2">
                                        <h5 className="text-base font-semibold text-foreground m-0">
                                            {outcome.label}
                                        </h5>
                                        <p className="text-fg-80 text-sm font-light leading-relaxed m-0">
                                            {outcome.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}
                </main>

                {/* 4. Footer Component Mapping */}
                <div className="pt-16">
                    <FooterCTA
                        variant="outline"
                        title={study.footerCTA?.title || footerDefaults.title}
                        description={study.footerCTA?.description || footerDefaults.description}
                        buttonText={study.footerCTA?.buttonText || footerDefaults.buttonText}
                    />
                </div>
            </div>
        </article>
    );
}