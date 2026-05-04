import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Service } from "@/types/service";
import { ServiceIcon } from "./ServiceIcon";

interface ServiceCardProps {
    service: Service,
    index: number
}

export function ServiceCard({
    service, index}: ServiceCardProps) {
    const staggerClass = `stagger-${Math.min(index + 1, 6)}`;

    const { slug, title, cardDescription, icon } = service;

    return (
        <Link
            href={`/services/${slug}`}
            className={`
    group relative p-10 rounded-lg border border-border bg-background
    fade-up-reveal ${staggerClass}
    transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]
    hover:bg-card hover:border-primary/20
  `}
        >
            <div className="relative z-10">
                {/* Icon with Ring Effect */}
                <div className="mb-8 relative inline-flex items-center justify-center">
                    {/* <div className="absolute inset-0 scale-75 bg-primary/0 rounded-full group-hover:scale-150 group-hover:bg-primary/5 transition-all duration-500 ease-out" /> */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full aspect-square bg-primary/0 rounded-full scale-75 group-hover:scale-150 group-hover:bg-primary/5 transition-all duration-500 ease-out z-0"></div>
                    <ServiceIcon className="w-12 h-12 text-primary stroke-[1.25] relative z-10 transition-transform duration-500 group-hover:scale-110" iconName={icon} />
                </div>

                <h3 className="group-hover:text-primary transition-colors">
                    {title}
                </h3>

                <p className="text-fg-70 line-clamp-3">{cardDescription}</p>

                {/* Action Link */}
                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-medium text-muted-foreground group-hover:text-primary transition-all">
                    <span>Explore Capability</span>
                    <ChevronRight className="w-3 h-3 transition-transform duration-200 group-hover:translate-x-1" />
                </div>
            </div>

            {/* Bottom Accent Line */}
            <div className="absolute bottom-0 left-1/2 w-0 h-1 bg-primary transition-all duration-300 ease-out group-hover:w-full group-hover:left-0 rounded-b-lg" />
        </Link>
    );
}
