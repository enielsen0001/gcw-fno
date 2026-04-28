import Link from "next/link";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  slug: string;
  title: string;
  description: string;
  icon: LucideIcon;
  index: number;
}

export function ServiceCard({ slug, title, description, icon: Icon, index }: ServiceCardProps) {
  const staggerClass = `stagger-${Math.min(index + 1, 6)}`;

  return (
    <Link
      href={`/services/${slug}`}
      className={`group p-8 rounded-lg border border-border bg-background hover:border-primary/30 transition-all fade-up-reveal ${staggerClass}`}
    >
      <Icon className="w-10 h-10 mb-6 text-primary stroke-[1.5]" />
      <h3 className="text-xl mb-3 text-foreground group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="text-foreground/60 leading-relaxed">
        {description}
      </p>
    </Link>
  );
}