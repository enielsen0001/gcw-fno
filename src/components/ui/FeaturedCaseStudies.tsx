'use client';

import Link from 'next/link';
import { Service } from '@/types/service';
import { CaseStudy } from '@/types/case-study';
import { ArrowRight } from 'lucide-react';

interface ServiceDetailProps {
  service: Service;
  relatedCaseStudies?: CaseStudy[]; // Pass these in from your GROQ query
}

export function FeaturedCaseStudies({ relatedCaseStudies }: { relatedCaseStudies?: CaseStudy[] }) {
  // Only render the section if there are actually linked studies
  if (!relatedCaseStudies || relatedCaseStudies.length === 0) return null;

  return (
    <section className="py-32 border-t border-border fade-up-reveal">
      <div className="space-y-16">
        <header className="flex flex-col md:flex-row justify-between items-end gap-8">
          <div className="max-w-2xl space-y-6">
            <h3 className="text-xs uppercase tracking-[0.4em] text-primary-60 font-semibold">
              Transformation Portfolio
            </h3>
            <h2 className="text-4xl lg:text-5xl font-light">
              See this service in action.
            </h2>
          </div>

          <Link
            href="/case-studies"
            className="group flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-fg-40 hover:text-primary transition-colors"
          >
            View All Work
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {relatedCaseStudies.map((study) => (
            <Link
              key={study.slug}
              href={`/case-studies/${study.slug}`}
              className="group relative block p-8 border border-border bg-card/20 rounded-xl hover:border-primary/30 transition-all duration-500 overflow-hidden"
            >
              {/* Subtle hover background accent */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative z-10 space-y-6">
                <div className="flex justify-between items-start">

                  {study.featuredMetric && (
                    <span className="text-primary font-mono text-sm">
                      {typeof study.featuredMetric === 'string'
                        ? study.featuredMetric
                        : study.featuredMetric.value}
                    </span>
                  )}
                </div>

                <div className="space-y-3">
                  <h4 className="text-xl font-medium group-hover:text-primary transition-colors">
                    {study.title}
                  </h4>
                  <p className="text-sm text-fg-60 line-clamp-3 font-light leading-relaxed">
                    {study.cardDescription}
                  </p>
                </div>

                <div className="pt-4 flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-bold text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
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