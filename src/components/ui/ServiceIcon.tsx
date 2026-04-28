import * as Icons from 'lucide-react';
import { cn } from '@/lib/utils';


interface ServiceIconProps {
  iconName: string;
  className?: string; // The override/additional classes
}

export const ServiceIcon = ({ iconName, className }: ServiceIconProps) => {
  // Fallback to 'HelpCircle' if the string from Sanity doesn't match a Lucide icon
  const LucideIcon = (Icons as any)[iconName] || Icons.HelpCircle;

  return (
    <LucideIcon
      className={cn(
        "w-10 h-10 mb-6 text-primary stroke-[1.5]",
        className // Your overrides
      )}
    />
  );
};