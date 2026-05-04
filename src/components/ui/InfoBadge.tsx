import React from "react";

interface InfoBadgeProps {
    children: React.ReactNode;
    className?: string;
    variant?: "subtle" | "outline" | "primary";
}

export default function InfoBadge({
    children,
    className = "",
    variant = "subtle",
}: InfoBadgeProps) {
    const variants = {
        subtle: "bg-muted/20 text-fg-80 border-border/30",
        outline: "bg-transparent text-fg-60 border-border",
        primary: "bg-primary/10 text-primary border-primary/20",
    };

    return (
        <span
            className={`
        px-2 py-1 text-[11px] font-medium tracking-wide rounded-sm border
        transition-all duration-300
        ${variants[variant]}
        ${className}
      `}
        >
            {children}
        </span>
    );
}
