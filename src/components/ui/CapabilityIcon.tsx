import * as Icons from "lucide-react";
import { cn } from "@/lib/utils";

interface CapabilityIconProps {
    iconName: string;
    className?: string;
}

export const CapabilityIcon = ({ iconName, className }: CapabilityIconProps) => {
    // Dynamic lookups against Lucide dictionary object keys
    const LucideIcon = (Icons as any)[iconName] || Icons.HelpCircle;

    return (
        <LucideIcon
            className={cn(
                "w-10 h-10 text-primary stroke-[1.5]",
                className,
            )}
        />
    );
};