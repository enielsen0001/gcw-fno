'use client';

import Link from 'next/link';
import { CaseStudy, RelatedLink } from '@/types/case-study';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { PageHeader } from '../ui/PageHeader';

export function CaseStudyDetailClientCopy({ study }: { study: CaseStudy }) {
  return (
    <article className="min-h-screen py-16 px-6 lg:px-12 selection:bg-primary/20">
      <div className="max-w-7xl mx-auto">

        <PageHeader
                            title={study.title}
                            subtitle={study.subtitle}
                            tags={study.tags}
                            backLink={{ href: '/case-studies', label: 'Back to Portfolio' }}
                        />

        <div className="flex flex-col lg:flex-row gap-20">
          <main className="flex-1 space-y-32">

            {/* Executive Summary */}
            {(study.executiveSummary?.challenge || study.executiveSummary?.approach) && (
              <section className="grid md:grid-cols-2 gap-16 border-t border-border pt-12 fade-up-reveal">
                {study.executiveSummary.challenge && (
                  <div className="space-y-6">
                    <h3 className="text-xs uppercase tracking-[0.3em] text-primary/60 font-semibold">The Challenge</h3>
                    <p className="text-foreground/80 text-xl font-light leading-relaxed italic border-l-2 border-primary/10 pl-6">
                      {study.executiveSummary.challenge}
                    </p>
                  </div>
                )}
                {study.executiveSummary.approach && (
                  <div className="space-y-6">
                    <h3 className="text-xs uppercase tracking-[0.3em] text-primary/60 font-semibold">The Approach</h3>
                    <p className="text-foreground/80 text-xl font-light leading-relaxed">
                      {study.executiveSummary.approach}
                    </p>
                  </div>
                )}
              </section>
            )}

            {/* Key Decisions Section */}
            {study.keyDecisions?.length > 0 && (
              <section className="space-y-12 fade-up-reveal">
                <h2 className="text-4xl">Pivotal Decisions</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  {study.keyDecisions.map((decision: any, index: number) => (
                    <div key={index} className="p-8 border border-border bg-card/20 rounded-lg">
                      <div className="flex gap-4 mb-4">
                         <span className="text-xs font-mono text-primary/40">[{String(index + 1).padStart(2, '0')}]</span>
                         <h4 className="text-lg font-medium">{decision.title}</h4>
                      </div>
                      <p className="text-foreground/60 text-sm leading-relaxed">
                        {decision.rationale}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Technical Execution Timeline */}
            {study.solution?.technicalImplementation?.length > 0 && (
              <section className="space-y-16 fade-up-reveal">
                <h2 className="text-4xl">Technical Execution</h2>
                <div className="relative">
                  {study.solution.technicalImplementation.map((phase: any, index: number) => (
                    <div key={index} className="group relative pl-16 pb-20 border-l border-border last:border-l-0 last:pb-0">
                      <div className="absolute left-0 top-0 -translate-x-1/2 w-10 h-10 bg-background border border-border rounded-full flex items-center justify-center text-foreground/40 text-sm transition-all group-hover:border-primary group-hover:text-primary">
                        {String(index + 1).padStart(2, '0')}
                      </div>
                      <h4 className="text-2xl mb-4 group-hover:text-primary transition-colors">{phase.phase}</h4>
                      <p className="text-foreground/60 text-lg max-w-2xl font-light">
                        {phase.details}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Generalized Outcomes Section */}
            {study.outcomes?.length > 0 && (
              <section className="bg-card border border-border p-12 lg:p-16 rounded-xl fade-up-reveal">
                <h3 className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-16">Key Outcomes</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
                  {study.outcomes.map((outcome: any, index: number) => (
                    <div key={index} className="space-y-4">
                      <div className="h-px w-12 bg-primary/30 mb-6" />
                      <h5 className="text-sm font-semibold uppercase tracking-wider">{outcome.label}</h5>
                      <p className="text-foreground/60 font-light leading-relaxed">
                        {outcome.description}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </main>

          {/* Sticky Sidebar */}
          <aside className="lg:w-80 shrink-0">
            <div className="sticky top-12 space-y-12 border-t border-border pt-12 fade-up-reveal">

              <div className="space-y-8">
                {study.context?.industry && (
                  <div>
                    <label className="text-[10px] uppercase tracking-[0.4em] text-primary/50 block mb-3 font-semibold">Industry</label>
                    <p className="text-lg font-light text-foreground/80">{study.context.industry}</p>
                  </div>
                )}

                {study.context?.timeline && (
                  <div>
                    <label className="text-[10px] uppercase tracking-[0.4em] text-primary/50 block mb-3 font-semibold">Timeline</label>
                    <p className="text-lg font-light text-foreground/80">{study.context.timeline}</p>
                  </div>
                )}

                {study.context?.technologies?.length > 0 && (
                  <div>
                    <label className="text-[10px] uppercase tracking-[0.4em] text-primary/50 block mb-4 font-semibold">Architecture</label>
                    <div className="flex flex-wrap gap-2">
                      {study.context.technologies.map((tech: string) => (
                        <span key={tech} className="px-2 py-1 bg-muted/20 text-foreground/70 text-[10px] tracking-wider rounded-sm border border-border/30">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {!!study.relevantLinks?.length && (
                <div className="pt-12 border-t border-border/50">
                  <label className="text-[10px] uppercase tracking-[0.4em] text-primary/50 block mb-6 font-semibold">Artifacts</label>
                  <nav className="space-y-4">
                    {study.relevantLinks.map((link: RelatedLink, index: number) => (
                      <a
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-between text-sm text-foreground/60 hover:text-primary transition-colors"
                      >
                        <span className="border-b border-transparent group-hover:border-primary/30 transition-all">
                          {link.label}
                        </span>
                        <ExternalLink className="w-3 h-3 text-foreground/30 group-hover:text-primary transition-all" />
                      </a>
                    ))}
                  </nav>
                </div>
              )}
            </div>
          </aside>
        </div>

        {/* Footer CTA */}
        <footer className="mt-48 pt-24 border-t border-border">
          <div className="bg-primary p-12 lg:p-20 text-primary-foreground rounded-xl flex flex-col md:flex-row justify-between items-center gap-12 fade-up-reveal">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-light mb-8 leading-tight">
                {study.footerCTA?.title || "Modernize your legacy footprint."}
              </h2>
              <p className="text-primary-foreground/70 text-xl font-light leading-relaxed">
                {study.footerCTA?.description || "Every system evolves. Let's discuss how to transition yours toward a stable, modern future."}
              </p>
            </div>
            <Link href="/contact" className="px-10 py-5 bg-primary-foreground text-primary text-xs uppercase tracking-[0.2em] font-bold hover:bg-white transition-all whitespace-nowrap">
              Start a Conversation
            </Link>
          </div>
        </footer>
      </div>
    </article>
  );
}