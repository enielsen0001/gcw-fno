"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface FooterCTAProps {
    title: string;
    description: string;
    buttonText?: string;
    buttonHref?: string;
    variant?: "solid" | "outline" | "ghost";
    className?: string;
}

export function FooterCTA({
    title,
    description,
    buttonText = "Start a Conversation",
    buttonHref = "/contact",
    variant = "ghost",
    className,
}: FooterCTAProps) {
    // Mapping variants to your established "GrayCoast" palette
    const variants = {
        solid: "bg-primary text-primary-foreground border-transparent",
        outline: "bg-transparent text-foreground border-primary/20",
        ghost: "bg-primary/5 text-foreground border-primary/10",
    };

    return (
        <div className={cn("fade-up-reveal mt-32 lg:mt-48", className)}>
            <div
                className={cn(
                    "p-16 text-center rounded-sm border transition-all duration-500",
                    variants[variant],
                )}
            >
                <h2 className="text-4xl font-light mb-8">{title}</h2>

                <p
                    className={cn(
                        "mb-12 max-w-2xl mx-auto font-light",
                        variant === "solid"
                            ? "text-primary-20"
                            : "text-fg-70",
                    )}
                >
                    {description}
                </p>

                <Link
                    href={buttonHref}
                    className={cn(
                        "inline-flex items-center gap-2 px-8 py-3 tracking-[0.025em] leading-tight font-medium transition-all",
                        variant === "solid"
                            ? "border border-white bg-transparent text-primary-foreground hover:bg-white hover:text-primary"
                            : "border border-primary/20 hover:bg-white hover:text-primary",
                    )}
                >
                    {buttonText}
                    <ArrowRight className="w-4 h-4" />
                </Link>
            </div>
        </div>
    );
}
