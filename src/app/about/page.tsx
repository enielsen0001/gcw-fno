import Link from 'next/link';
import { competencies } from '../../constants/about';
import { PageHeader } from '@/components/ui/PageHeader';
import { LinkedinIcon } from '@/components/ui/SocialIcons';
import { FooterCTA } from '@/components/ui/FooterCTA';

export default function AboutPage() {
  return (
    <div className="relative min-h-screen bg-background">
      {/* Subtle Architectural Texture */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(var(--foreground) 0.5px, transparent 0.5px)`,
          backgroundSize: '32px 32px'
        }}
      />

      <div className="relative py-24 px-6 lg:px-12 max-w-7xl mx-auto">

        <PageHeader
          eyebrow="The Philosophy"
          title="Stack Agnostic. Structure Obsessed."
          subtitle="Building resilient systems with a timeless approach."
        />

        {/* Section 2: The Multimedia Approach (The "Artist" Angle) */}
        <div className="grid lg:grid-cols-12 gap-16 mb-40 items-start">
          <div className="lg:col-span-5 lg:order-2 fade-up-reveal stagger-2">
            <div className="aspect-[4/5] bg-muted/20 border border-border flex items-center justify-center p-12">
               {/* This space is designed for an architectural sketch or technical drawing */}
               <div className="text-center">
                  <p className="text-[10px] uppercase tracking-widest text-muted-foreground italic">
                    [ Multimedia Drawing / Technical Blueprint Placeholder ]
                  </p>
               </div>
            </div>
          </div>
          <div className="lg:col-span-6 lg:order-1 space-y-12 fade-up-reveal stagger-1">
            <h2 className="text-4xl tracking-tight text-foreground">
              Tactile Problem Solving
            </h2>
            <div className="space-y-6 text-lg text-foreground/70 leading-relaxed font-light">
              <p>
                My background in multimedia art and physical mechanical repair informs how I write code. Whether it's rigging a vintage cabinet hinge to work like new or refactoring a Laravel monolith into services, the goal is the same:
                <strong> Functional Longevity.</strong>
              </p>
              <p>
                I am a generalist by choice. By moving across the stack—from React and Vue to .NET and Shopify—I maintain a "birds-eye" view of architecture that specialized engineers often miss.
              </p>
            </div>
          </div>
        </div>

        {/* New Professional Background Section */}
<section className="py-24 border-t border-border">
  <div className="grid lg:grid-cols-2 gap-20">
    <div className="space-y-8 text-lg font-light text-foreground/80 leading-relaxed">
      <h3 className="text-xs uppercase tracking-[0.4em] text-primary/60 font-semibold">
        Professional Philosophy
      </h3>
      <p>
        I approach software the same way I approach physical systems: as an exercise in structural integrity. With over two decades of experience, I’ve learned that the most elegant solutions aren't just about clean code—they're about building environments that are resilient and maintainable.
      </p>
      <p>
        My background in customer service allows me to act as a translator between technical complexity and business needs. I don't just solve code problems; I identify the patterns that cause them, ensuring systems are rigged for long-term growth.
      </p>

      <Link
  href="https://linkedin.com/in/yourprofile"
  className="group inline-flex items-center gap-3 text-foreground/50 hover:text-primary transition-colors mt-8"
>
  <span className="text-[10px] uppercase tracking-[0.3em] font-bold">
    Detailed Professional History
  </span>
  <div className="h-px w-8 bg-border group-hover:w-12 group-hover:bg-primary transition-all" />
  <LinkedinIcon className="w-4 h-4" />
</Link>
    </div>

    <div className="bg-card/30 border border-border p-12 rounded-xl">
      <h4 className="text-xs uppercase tracking-[0.4em] text-primary/60 font-semibold mb-8">
        Core Competencies
      </h4>
      <div className="space-y-6">
        <div>
          <span className="text-sm font-bold block mb-1">Modernization</span>
          <p className="text-sm text-foreground/60">Transitioning legacy monoliths into modern, scalable architectures.</p>
        </div>
        <div>
          <span className="text-sm font-bold block mb-1">Design Engineering</span>
          <p className="text-sm text-foreground/60">Bridging the gap between high-fidelity UI and functional performance.</p>
        </div>
        <div>
          <span className="text-sm font-bold block mb-1">Autonomy</span>
          <p className="text-sm text-foreground/60">Building "set it and forget it" systems with minimal maintenance debt.</p>
        </div>

        {competencies.map((item, index) => (
              <div
                key={item.principle}
              >
                <span className="text-sm font-bold block mb-1">
                  {item.principle}
                </span>
                <p className="text-sm text-foreground/60">
                  {item.description}
                </p>
              </div>

            ))}
      </div>
    </div>
  </div>
</section>

        {/* Section 4: The Origin (Gray Coast Narrative) */}
        <div className="grid lg:grid-cols-12 gap-16 mb-40">
          <div className="lg:col-span-8 lg:col-start-3 text-center space-y-8 fade-up-reveal">
            <h2 className="text-4xl font-light tracking-tight">The Gray Coast Identity</h2>
            <p className="text-xl text-foreground/60 leading-relaxed font-light">
              Gray Coast Web represents a specific intersection: where the "gray" of legacy infrastructure meets the "coast" of modern deployment. Like a well-built harbor, architectural modernization requires respecting the environment while building for the next century of tides.
            </p>
          </div>
        </div>

        {/* Final CTA */}
        <FooterCTA
  variant="ghost"
  title="Let's find the isomorphisms."
  description="I semi-regularly share thoughts on Laravel, vanilla JS, and the ethics of autonomous systems."
  buttonText="Connect on LinkedIn"
  buttonHref="https://linkedin.com/in/your-profile"
/>
      </div>
    </div>
  );
}