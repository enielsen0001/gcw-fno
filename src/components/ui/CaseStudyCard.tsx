import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface CaseStudyProps {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  impact: string;
  index: number;
}

export function CaseStudyCard({ slug, title, subtitle, description, tags, impact, index }: CaseStudyProps) {
  const staggerClass = `stagger-${Math.min(index + 1, 4)}`;

  return (
    <Link
      href={`/case-studies/${slug}`}
      className={`group relative p-8 rounded-lg border border-border bg-card hover:border-primary/30 transition-all fade-up-reveal ${staggerClass}`}
    >
      <div className="mb-6">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-2xl text-foreground group-hover:text-primary transition-colors">
            {title}
          </h3>
          <ArrowUpRight className="w-5 h-5 text-foreground/40 group-hover:text-primary transition-all" />
        </div>
        <p className="text-foreground/50 mb-4">
          {subtitle}
        </p>
      </div>

      <p className="text-foreground/70 mb-6 leading-relaxed">
        {description}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 text-sm bg-muted text-foreground/70 rounded-md"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="pt-4 border-t border-border">
        <p className="text-primary font-medium">{impact}</p>
      </div>
    </Link>
  );
}