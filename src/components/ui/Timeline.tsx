import React from "react";
import { CustomPortableText } from "./CustomPortableText";

interface TimelineItem {
    id?: string | number;
    title: string;
    description: any[]; // Configured to safely read Sanity Rich Text arrays
}

interface TimelineProps {
    title?: string;
    items: TimelineItem[];
    showNumbers?: boolean;
    compact?: boolean;
}

export default function Timeline({
    title,
    items,
    showNumbers = true, // Default to true to keep numbering aligned across paths
    compact = false,
}: TimelineProps) {
    return (
        <section className="space-y-12 fade-up-reveal">
            {title && (
                <h2 className="text-4xl text-foreground tracking-tight font-light">
                    {title}
                </h2>
            )}

            <div className="relative">
                <div className="absolute left-0 top-0 bottom-0 w-px bg-border ml-[19px]" />

                <div className="space-y-16">
                    {items.map((item, index) => (
                        <div
                            key={item.id || index}
                            className="group relative pl-16 last:pb-0"
                        >
                            <div className="absolute left-0 top-0 w-10 h-10 bg-background border border-border rounded-full flex items-center justify-center text-fg-50 text-xs font-mono transition-colors group-hover:border-primary group-hover:text-primary z-10">
                                {showNumbers ? (
                                    String(index + 1).padStart(2, "0")
                                ) : (
                                    <div className="w-2 h-2 rounded-full bg-primary/40 group-hover:bg-primary transition-colors" />
                                )}
                            </div>

                            <div className="pt-1">
                                {item.title && (
                                    <h3 className="text-2xl font-medium mb-4 text-foreground tracking-tight group-hover:text-primary transition-colors">
                                        {item.title}
                                    </h3>
                                )}

                                {item.description && (
                                    <div className="max-w-2xl font-light">
                                        <CustomPortableText value={item.description} />
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}