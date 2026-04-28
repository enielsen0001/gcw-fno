import Link from 'next/link';
import { notFound } from 'next/navigation';
import { sanityFetch } from '@/sanity/lib/fetch';
import { SERVICE_BY_SLUG_QUERY } from '@/sanity/lib/queries';
import { ServiceIcon } from '@/components/ui/ServiceIcon';
import { CheckCircle2 } from 'lucide-react';
import { groq } from 'next-sanity';

export default async function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const service = await sanityFetch<any>({
    query: SERVICE_BY_SLUG_QUERY,
    params: { slug: slug }
  });

  // If Sanity returns nothing, trigger the Next.js 404 page
  if (!service) {
    notFound();
  }

  return (
    <div className="py-16 px-6 lg:px-12">
      <div className="max-w-5xl mx-auto">
        <Link
          href="/services"
          className="inline-flex items-center text-foreground/60 hover:text-foreground mb-8 transition-colors group"
        >
          <span className="mr-2 transition-transform group-hover:-translate-x-1">←</span>
          Back to Services
        </Link>

        {/* Hero Section */}
        <div className="mb-12 animate-fade-up">
          <ServiceIcon
            iconName={service.icon}
            className="w-16 h-16 mb-6 text-primary stroke-[1.5]"
          />
          <h1 className="text-5xl md:text-6xl tracking-tight mb-6 text-foreground">
            {service.title}
          </h1>
          <p className="text-2xl text-foreground/60 leading-relaxed">
            {service.shortDescription}
          </p>
        </div>

        {/* Value Proposition */}
        <div className="mb-16 p-8 rounded-lg bg-card border border-border animate-fade-up delay-100">
          <h2 className="text-3xl tracking-tight mb-4 text-foreground">
            Value Proposition
          </h2>
          <p className="text-xl text-foreground/70 leading-relaxed">
            {service.valueProposition}
          </p>
        </div>

        {/* Process Timeline */}
        <div className="mb-16 animate-fade-up delay-200">
          <h2 className="text-4xl tracking-tight mb-8 text-foreground">
            Process
          </h2>
          <div className="space-y-8">
            {service.process?.map((step: any, index: number) => (
              <div
                key={index}
                className="relative pl-12 pb-8 border-l-2 border-border last:border-l-0 last:pb-0"
              >
                <div className="absolute left-0 top-0 -translate-x-1/2 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                  {index + 1}
                </div>
                <h3 className="text-2xl mb-3 text-foreground">
                  {step.phase}
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        {service.testimonials && service.testimonials.length > 0 && (
          <div className="mb-16 animate-fade-up delay-300">
            <h2 className="text-4xl tracking-tight mb-8 text-foreground">
              Client Success
            </h2>
            <div className="space-y-6">
              {service.testimonials.map((testimonial: any, index: number) => (
                <div
                  key={index}
                  className="p-8 rounded-lg bg-card border border-border"
                >
                  <CheckCircle2 className="w-8 h-8 mb-4 text-primary" />
                  <blockquote className="text-xl text-foreground/80 mb-4 leading-relaxed italic">
                    "{testimonial.quote}"
                  </blockquote>
                  <p className="text-foreground/60">
                    — {testimonial.author}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Final CTA */}
        <div className="p-12 rounded-lg bg-primary text-primary-foreground animate-fade-up delay-400">
          <h2 className="text-3xl tracking-tight mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-primary-foreground/90 mb-6 leading-relaxed max-w-2xl">
            Let's discuss how {service.title.toLowerCase()} can help your organization achieve its technical and business objectives.
          </p>
          <Link
            href="/contact"
            className="inline-block py-3 px-6 rounded-md bg-primary-foreground text-primary hover:bg-primary-foreground/90 transition-colors font-medium"
          >
            Schedule a Consultation
          </Link>
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const services = await sanityFetch<any[]>({
    query: groq`*[_type == "service"]{ "slug": slug.current }`
  });

  return services.map((service) => ({
    slug: service.slug,
  }));
}