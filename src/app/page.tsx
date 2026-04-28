import Image from "next/image";
import Link from "next/link";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { CaseStudyCard } from "@/components//ui/CaseStudyCard";
import { caseStudiesPreview } from "@/constants/case-studies";
import { services } from '@/constants/services';
import heroImage from "@/../public/images/gray-horizon.jpg";

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
      <div className="absolute inset-0 bg-background/40 backdrop-blur-[2px] z-10" />

      <div className="max-w-7xl mx-auto relative z-20">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl tracking-tight mb-8 text-foreground leading-none">
            Modernizing Legacy Systems for Modern Growth
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 mb-12 max-w-2xl leading-relaxed">
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
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl tracking-tight mb-4 text-foreground">
              Stewardship Services
            </h2>
            <p className="text-xl text-foreground/60 max-w-3xl">
              Specialized expertise in modernizing and maintaining
              complex software systems.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={service.slug} {...service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl tracking-tight mb-4 text-foreground">
              Transformation Portfolio
            </h2>
            <p className="text-xl text-foreground/60 max-w-3xl">
              Real-world examples of architectural modernization and legacy system evolution.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {caseStudiesPreview.map((study, index) => (
              <CaseStudyCard key={study.slug} {...study} index={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}