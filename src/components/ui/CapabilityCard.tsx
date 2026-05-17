import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Capability } from "@/types/capability"; // Swapped to updated model interface
import { CapabilityIcon } from "./CapabilityIcon"; // Removed duplicate ServiceIcon import

interface CapabilityCardProps {
    capability: Capability; // Renamed property to maintain semantic consistency
    index: number;
}

export function CapabilityCard({ capability, index }: CapabilityCardProps) {
    const staggerClass = `stagger-${Math.min(index + 1, 6)}`;
    const { slug, title, cardDescription, icon } = capability;

    return (
        <Link
            href={`/capabilities/${slug}`} // Points directly to updated sitemap path routing
            className={`
                group relative p-10 rounded-lg border border-border bg-background
                fade-up-reveal ${staggerClass} flex flex-col justify-between
                transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]
                hover:bg-card hover:border-primary/20
            `}
        >
            <div className="relative z-10 space-y-6">
                {/* Icon Layout Group */}
                <div className="relative inline-flex items-center justify-center">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full aspect-square bg-primary/0 rounded-full scale-75 group-hover:scale-150 group-hover:bg-primary/5 transition-all duration-500 ease-out z-0" />
                    <CapabilityIcon
                        className="w-12 h-12 text-primary stroke-[1.25] relative z-10 transition-transform duration-500 group-hover:scale-110"
                        iconName={icon}
                    />
                </div>

                {/* Text Content Block */}
                <div className="space-y-2">
                    <h3 className="m-0 text-2xl font-semibold tracking-tight text-foreground group-hover:text-primary transition-colors duration-300">
                        {title}
                    </h3>
                    <p className="text-fg-70 text-base leading-relaxed line-clamp-3 m-0">
                        {cardDescription}
                    </p>
                </div>

                {/* Interactive Link Indicator */}
                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-medium text-muted-foreground group-hover:text-primary transition-all duration-300 pt-2">
                    <span>Explore Capability</span>
                    <ChevronRight className="w-3 h-3 transition-transform duration-200 group-hover:translate-x-1" />
                </div>
            </div>

            {/* Micro-Interaction Accent Border */}
            <div className="absolute bottom-0 left-1/2 w-0 h-[3px] bg-primary transition-all duration-300 ease-out group-hover:w-full group-hover:left-0 rounded-b-lg" />
        </Link>
    );
}