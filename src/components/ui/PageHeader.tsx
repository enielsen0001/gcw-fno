"use client";

import Link from "next/link";
import * as Icons from "lucide-react";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface PageHeaderProps {
    title: string;
    eyebrow?: string;
    subtitle?: string;
    description?: string;
    backLink?: {
        href: string;
        label: string;
    };
    tags?: string[];
    iconName?: string;
    className?: string;
}

export function PageHeader({
    title,
    eyebrow,
    subtitle,
    description,
    backLink,
    tags,
    iconName, // Destructure and capitalize for component usage
    className,
}: PageHeaderProps) {
    const IconComponent = iconName
        ? (Icons[iconName as keyof typeof Icons] as LucideIcon)
        : undefined;

    return (
        <header className={cn("mb-20 lg:mb-32 fade-up-reveal", className)}>
            {/* Top Meta Row */}
            {(backLink || (tags && tags.length > 0)) && (
                <div className="flex flex-col gap-6 ">
                    {backLink && (
                        <Link
                            href={backLink.href}
                            className="group inline-flex items-center gap-3 text-fg-80 hover:text-primary transition-colors mb-12"
                        >
                            <Icons.ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                            <span className="text-[12px] uppercase tracking-[0.3em] font-bold">
                                {backLink.label}
                            </span>
                        </Link>
                    )}

                    {tags && tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-10">
                            {tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="px-3 py-1 text-[10px] uppercase tracking-widest border border-border text-muted-foreground rounded-sm bg-card/30"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    )}
                </div>
            )}

            {/* Main Headline Group */}
            <div className="max-w-5xl">
                <div className="flex flex-col md:flex-row md:items-start gap-8 lg:gap-12">
                    {/* Optional Icon: Placed to the side of the title on large screens */}
                    {IconComponent && (
                        <div className="p-4 rounded-xl bg-primary/5 border border-primary/10 shrink-0 hidden md:block">
                            <IconComponent className="w-10 h-10 text-primary stroke-[1.25]" />
                        </div>
                    )}

                    <div className="space-y-8">
                        <div className="space-y-4">
                            {/* Mobile/Small Screen Icon */}
                            {IconComponent && (
                                <IconComponent className="w-8 h-8 text-primary stroke-[1.5] mb-4 md:hidden" />
                            )}

                            {eyebrow && (
                                <span className="text-primary text-[14px] uppercase tracking-[0.4em] font-bold block mb-10">
                                    {eyebrow}
                                </span>
                            )}
                            <h1 className="text-5xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-foreground">
                                {title}
                            </h1>
                        </div>

                        {subtitle && (
                            <span className="text-xl lg:text-2xl text-fg-70 font-medium max-w-4xl leading-relaxed">
                                {subtitle}
                            </span>
                        )}

                        {description && (
                            <p className="text-xl lg:text-xl text-fg-70 max-w-3xl font-light leading-relaxed">
                                {description}
                            </p>
                        )}
                    </div>
                </div>
            </div>

            {/* Decorative Anchor */}
            {/* <div className="h-px w-[25%] bg-primary/20 mt-16" /> */}
        </header>
    );
}
