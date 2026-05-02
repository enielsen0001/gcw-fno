import React from 'react';

interface TimelineItem {
  id?: string | number;
  title: string;
  description: string;
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
  showNumbers = false,
  compact = false
}: TimelineProps) {
  return (
    <section className="space-y-12 fade-up-reveal">
      {title && (
        <h2 className="text-4xl text-foreground tracking-tight font-light">
          {title}
        </h2>
      )}

      <div className="relative">
        {/* The Vertical Architectural Line */}
        <div className="absolute left-0 top-0 bottom-0 w-px bg-border ml-[19px] lg:ml-5" />

        <div className="space-y-16">
          {items.map((item, index) => (
            <div
              key={item.id || index}
              className="group relative pl-16 last:pb-0"
            >
              {/* The Node: Switchable between a Dot and a Number */}
              <div className="absolute left-0 top-0 w-10 h-10 bg-background border border-border rounded-full flex items-center justify-center text-foreground text-sm font-medium transition-colors group-hover:border-primary group-hover:text-primary z-10">
                {showNumbers ? (
                  String(index + 1).padStart(2, '0')
                ) : (
                  <div className="w-2 h-2 rounded-full bg-primary/40 group-hover:bg-primary transition-colors" />
                )}
              </div>

              <div className="pt-1">
                <h3 className="text-2xl mb-4 text-foreground font-light tracking-tight group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-foreground/60 leading-relaxed text-lg max-w-2xl font-light">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}