import Link from "next/link";
import { PageHeader } from "@/components/ui/PageHeader";
import { LinkedinIcon } from "@/components/ui/SocialIcons";
import { FooterCTA } from "@/components/ui/FooterCTA";
import { aboutMetadata } from "@/constants/metadata";
import { aboutContent } from "@/constants/page-content";

export const metadata = aboutMetadata;

export default function AboutPage() {
    const { header, philosophy, competencies, toolkit, identity, footer } =
        aboutContent;

    return (
        <div className="relative min-h-screen bg-background">

            <div
                className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage: `radial-gradient(var(--foreground) 0.5px, transparent 0.5px)`,
                    backgroundSize: "32px 32px",
                }}
            />

            <div className="relative py-24 px-6 lg:px-12 max-w-7xl mx-auto">
                <PageHeader
                    title={header.title}
                    subtitle={header.subtitle}
                />

                {/* Narrative Section: Philosophy & Specializations */}
                <section className="py-24 border-t border-border">
                    <div className="grid lg:grid-cols-2 gap-20 items-start">
                        <div className="space-y-8 text-lg font-light text-fg-80 leading-relaxed">
                            <h3 className="text-xs uppercase tracking-widest text-primary font-semibold">
                                {philosophy.label}
                            </h3>
                            {philosophy.content.map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}

                            <Link
                                href={philosophy.linkedinHref}
                                className="group inline-flex items-center gap-3 text-fg-50 hover:text-primary transition-colors mt-8"
                            >
                                <span className="text-xs uppercase tracking-widest font-bold">
                                    {philosophy.linkedinLabel}
                                </span>
                                <div className="h-px w-8 bg-border group-hover:w-12 group-hover:bg-primary transition-all" />
                                <LinkedinIcon className="w-4 h-4" />
                            </Link>
                        </div>

                        <div className="bg-card/30 border border-border p-12 rounded-xl">
                            <h4 className="text-xs uppercase tracking-widest text-primary font-semibold mb-8">
                                {competencies.label}
                            </h4>
                            <div className="space-y-8">
                                {competencies.defaults.map((item) => (
                                    <div key={item.principle}>
                                        <span className="text-sm font-bold block mb-1">
                                            {item.principle}
                                        </span>
                                        <p className="text-sm text-fg-70">
                                            {item.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-24 border-t border-border">
                    <div className="grid lg:grid-cols-12 gap-12">
                        <div className="lg:col-span-4">
                            <h3 className="text-xs uppercase tracking-widest text-primary font-semibold mb-4">
                                {toolkit.label}
                            </h3>
                            <p className="text-sm text-fg-60 leading-relaxed">
                                {toolkit.description}
                            </p>
                        </div>

                        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                            {toolkit.categories.map((category) => (
                                <div key={category.type} className="space-y-4">
                                    <h5 className="text-xs uppercase tracking-widest text-muted-foreground font-bold border-b border-border pb-2">
                                        {category.type}
                                    </h5>
                                    <ul className="flex flex-wrap gap-x-4 gap-y-2">
                                        {category.items.map((item) => (
                                            <li key={item} className="text-sm text-fg-80 font-light">
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <div className="pt-32 border-t border-border">
                    <div className="max-w-3xl mx-auto text-center space-y-8">
                        <h2 className="text-4xl font-light tracking-tight">
                            {identity.title}
                        </h2>
                        {identity.description.map((paragraph, index) => (
                            <p
                                key={index}
                                className="text-xl text-fg-70 leading-relaxed font-light"
                            >
                                {paragraph}
                            </p>
                        ))}
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