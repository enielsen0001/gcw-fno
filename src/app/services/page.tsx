import Link from 'next/link';
import { sanityFetch } from '@/sanity/lib/fetch';
import { SERVICE_CARD_QUERY } from '@/sanity/lib/queries';
import { ServiceIcon } from '@/components/ui/ServiceIcon';

export default async function ServicesPage() {
  // Fetch the data from Sanity
  const services = await sanityFetch<any[]>({
    query: SERVICE_CARD_QUERY
  });

  console.log('Fetched services:', services); // Debug log to verify data structure

  return (
    <div className="py-16 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-16 animate-fade-up">
          <h1 className="text-5xl md:text-6xl tracking-tight mb-6 text-foreground">
            Stewardship Services
          </h1>
          <p className="text-xl md:text-2xl text-foreground/60 max-w-3xl leading-relaxed">
            Specialized expertise in modernizing and maintaining complex software systems.
            Each service is designed to balance technical excellence with pragmatic business outcomes.
          </p>
        </div>

        {/* Dynamic Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group p-8 rounded-lg border border-border bg-card hover:border-primary/30 transition-all animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }} // Clean way to stagger
            >
              <ServiceIcon
                iconName={service.icon}
                className="w-12 h-12 mb-6 text-primary stroke-[1.5]"
              />
              <h2 className="text-2xl mb-4 text-foreground group-hover:text-primary transition-colors">
                {service.title}
              </h2>
              <p className="text-foreground/60 leading-relaxed mb-6">
                {service.description}
              </p>
              <div className="text-primary group-hover:underline">
                Learn more →
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-24 p-12 rounded-lg bg-card border border-border animate-fade-up">
          <h2 className="text-3xl tracking-tight mb-4 text-foreground">
            Custom Engagements
          </h2>
          <p className="text-foreground/60 mb-6 leading-relaxed max-w-2xl">
            Every organization has unique challenges. If you need a combination of services or have
            specific requirements not listed here, let's discuss a custom engagement tailored to your needs.
          </p>
          <Link
            href="/contact"
            className="inline-block py-3 px-6 rounded-md bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors"
          >
            Schedule a Consultation
          </Link>
        </div>
      </div>
    </div>
  );
}