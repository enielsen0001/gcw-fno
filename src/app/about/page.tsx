import Link from "next/link";
import { PageHeader } from "@/components/ui/PageHeader";
import { LinkedinIcon } from "@/components/ui/SocialIcons";
import { FooterCTA } from "@/components/ui/FooterCTA";
import { aboutMetadata } from "@/constants/metadata";
import { aboutContent } from "@/constants/page-content";

export const metadata = aboutMetadata;

export default function AboutPage() {
    const { header, tactile, philosophy, competencies, identity, footer } =
        aboutContent;
    return (
        <div className="relative min-h-screen bg-background">
            {/* Subtle Architectural Texture */}
            <div
                className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage: `radial-gradient(var(--foreground) 0.5px, transparent 0.5px)`,
                    backgroundSize: "32px 32px",
                }}
            />

            <div className="relative py-24 px-6 lg:px-12 max-w-7xl mx-auto">
                <PageHeader
                    eyebrow={header.eyebrow}
                    title={header.title}
                    subtitle={header.subtitle}
                />

                <div className="grid lg:grid-cols-12 gap-16 mb-40 items-start">
                    <div className="lg:col-span-5 lg:order-2 fade-up-reveal stagger-2">
                        <div className="aspect-[4/5] bg-muted/20 border border-border flex items-center justify-center p-12">
                            <div className="text-center">
                                <p className="text-[10px] uppercase tracking-widest text-muted-foreground italic">
                                    [ Multimedia Drawing / Technical Blueprint
                                    Placeholder ]
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-6 lg:order-1 space-y-12 fade-up-reveal stagger-1">
                        <h2 className="text-4xl tracking-tight text-foreground">
                            {tactile.title}
                        </h2>
                        <div className="space-y-6 text-lg text-fg-70 leading-relaxed font-light">
                            {tactile.description.map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                        </div>
                    </div>
                </div>

                <section className="py-24 border-t border-border">
                    <div className="grid lg:grid-cols-2 gap-20">
                        <div className="space-y-8 text-lg font-light text-fg-80 leading-relaxed">
                            <h3 className="text-xs uppercase tracking-[0.4em] text-primary-60 font-semibold">
                                {philosophy.label}
                            </h3>
                            {philosophy.content.map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}

                            <Link
                                href={philosophy.linkedinHref}
                                className="group inline-flex items-center gap-3 text-fg-50 hover:text-primary transition-colors mt-8"
                            >
                                <span className="text-[10px] uppercase tracking-[0.3em] font-bold">
                                    {philosophy.linkedinLabel}
                                </span>
                                <div className="h-px w-8 bg-border group-hover:w-12 group-hover:bg-primary transition-all" />
                                <LinkedinIcon className="w-4 h-4" />
                            </Link>
                        </div>

                        <div className="bg-card/30 border border-border p-12 rounded-xl">
                            <h4 className="text-xs uppercase tracking-[0.4em] text-primary-60 font-semibold mb-8">
                                Core Competencies
                            </h4>
                            <div className="space-y-6">
                                {competencies.defaults.map((item, index) => (
                                    <div key={item.principle}>
                                        <span className="text-sm font-bold block mb-1">
                                            {item.principle}
                                        </span>
                                        <p className="text-sm text-fg-60">
                                            {item.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <div className="grid lg:grid-cols-12 gap-16 mb-40">
                    <div className="lg:col-span-8 lg:col-start-3 text-center space-y-8 fade-up-reveal">
                        <h2 className="text-4xl font-light tracking-tight">
                            {identity.title}
                        </h2>
                        <p className="text-xl text-fg-60 leading-relaxed font-light">
                            {identity.description}
                        </p>
                    </div>
                </div>

                {/* Final CTA */}
                <FooterCTA
                    variant="ghost"
                    title={footer.title}
                    description={footer.description}
                    buttonText={footer.buttonText}
                    buttonHref={footer.buttonHref}
                />
            </div>
        </div>
    );
}
