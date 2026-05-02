import Link from 'next/link';
import { sanityFetch } from '@/sanity/lib/fetch';
import { SERVICE_CARD_QUERY } from '@/sanity/lib/queries';
import { ServiceIcon } from '@/components/ui/ServiceIcon';
import { ArrowUpRight } from 'lucide-react';
import { PageHeader } from '@/components/ui/PageHeader';
import { FooterCTA } from '@/components/ui/FooterCTA';

export default async function ServicesPage() {
  // Fetch the data from Sanity
  const services = await sanityFetch<any[]>({
    query: SERVICE_CARD_QUERY
  });

  return (
    <div className="py-16 px-6 lg:px-12">
  <div className="max-w-7xl mx-auto">
    <PageHeader
      title="Stewardship Services"
      description="Specialized expertise in modernizing and maintaining complex software systems. Each service is designed to balance technical excellence with pragmatic business outcomes."
    />

    {/* Capability List */}
    <div className="flex flex-col border-t border-border">
      {services.map((service, index) => (
        <Link
          key={service.slug}
          href={`/services/${service.slug}`}
          className="group relative py-12 flex flex-col md:flex-row md:items-center gap-8 border-b border-border transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:px-6 hover:bg-card/50"
          style={{ animationDelay: `${index * 100}ms` }}
        >

          {/* Icon Area */}
          <div className="shrink-0">
            <ServiceIcon
              iconName={service.icon}
              className="w-10 h-10 text-primary/40 group-hover:text-primary transition-colors duration-500"
            />
          </div>

          {/* Content Area */}
          <div className="flex-1">
            <h2 className="text-2xl mb-2 group-hover:text-primary transition-colors">
              {service.title}
            </h2>
            <p className="text-foreground/60 max-w-2xl">
              {service.description}
            </p>
          </div>

          {/* Action Arrow */}
          <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full border border-border group-hover:border-primary/30 group-hover:bg-primary/5 transition-all duration-500">
            <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-transform duration-500 " />
          </div>
        </Link>
      ))}
    </div>

    <FooterCTA
      title="Systems designed for the long haul"
      description="Whether you're paying down technical debt or architecting a new core, I focus on building stable, autonomous environments that grow with your team."
      buttonText="Discuss Your Architecture"
      variant="solid"
      buttonHref="/contact"
    />
  </div>
</div>
  );
}