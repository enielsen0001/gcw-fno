import Image from "next/image";
import Link from "next/link";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { CaseStudyCard } from "@/components//ui/CaseStudyCard";
import { caseStudiesPreview } from "@/constants/case-studies";
import { services } from '@/constants/services';
import heroImage from "@/../public/images/gray-horizon.jpg";
import { ArrowRight, ArrowUpRight } from "lucide-react";

function Hero() {
  return (
    <section className="relative pt-12 pb-24 px-6 lg:px-12 overflow-hidden min-h-[60vh] flex items-center">
      <Image
        src={heroImage}
        alt="Gray Horizon Background"
        fill
        priority
        className="object-cover z-0"
      />
      {/* Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-white from-0% to-transparent to-50% z-10" />

      <div className="max-w-7xl mx-auto relative z-20">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl tracking-tight mb-8 text-foreground leading-none">
            Modernizing Legacy Systems for Modern Growth
          </h1>
          <p className="text-xl md:text-2xl text-fg-80 mb-12 max-w-2xl leading-relaxed">
            Strategic architectural modernization and legacy
            system stewardship for organizations ready to scale
            their technical foundation.
          </p>
          <Link href="/case-studies" className="btn-ghost">
            View Modernization Case Studies
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Services Section */}
      <section className="py-24 px-6 lg:px-12 bg-card">
    <div className="max-w-7xl mx-auto">
      <header className="mb-16">
        <h2 className="text-4xl md:text-5xl">
          Stewardship Services
        </h2>
        <p className="text-xl text-fg-60 max-w-3xl">
          Specialized expertise in modernizing and maintaining
          complex software systems.
        </p>
      </header>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceCard key={service.slug} {...service} index={index} />
        ))}
      </div>
    </div>
  </section>

  {/* Case Studies Section */}
  {/* Case Studies Section */}
<section className="py-24 px-6 lg:px-12">
  <div className="max-w-7xl mx-auto">
    <header className="mb-16">
      <h2 className="text-4xl md:text-5xl">
        Transformation Portfolio
      </h2>
      <p className="text-xl text-fg-70 max-w-3xl">
        Real-world examples of architectural modernization and legacy system evolution.
      </p>
    </header>

    {/* Sliced to 4 items */}
    <div className="grid md:grid-cols-2 gap-8 mb-16">
      {caseStudiesPreview.slice(0, 4).map((study, index) => (
        <CaseStudyCard
          key={study.slug}
          {...study}
          tags={[...study.tags]}
          index={index}
          />
      ))}
    </div>

    {/* View All Transition */}
    <div className="flex justify-center pt-8">
      <Link
        href="/case-studies"
        className="group flex items-center gap-4 text-xs uppercase tracking-[0.3em] font-medium text-muted-foreground hover:text-primary transition-all"
      >
        <span>Explore Full Portfolio</span>
        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
      </Link>
    </div>
  </div>
</section>
</>
  );
}