import Link from "next/link";
import { sanityFetch } from "@/sanity/lib/fetch";
import { ALL_CAPABILITIES_QUERY } from "@/sanity/lib/queries";
import { CapabilityIcon } from "@/components/ui/CapabilityIcon";
import { ArrowUpRight } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { FooterCTA } from "@/components/ui/FooterCTA";
import { servicesIndexMetadata } from "@/constants/metadata";
import { capabilityIndexContent } from "@/constants/page-content";
import { Capability } from "@/types/capability"; // Type-safe interface anchor

export const metadata = servicesIndexMetadata;

export default async function CapabilitiesPage() {
    // Queries your updated 'capability' documents from Sanity
    const capabilities = await sanityFetch<Capability[]>({
        query: ALL_CAPABILITIES_QUERY,
    });

    const { title, description, footer } = capabilityIndexContent;

    return (
        <div className="py-24 px-6 lg:px-12">
            <div className="max-w-7xl mx-auto">
                <PageHeader title={title} description={description} />

                {/* Capability Sequential List Structure */}
                <div className="flex flex-col border-t border-border mt-12">
                    {capabilities.map((capability, index) => (
                        <Link
                            key={capability.slug}
                            href={`/capabilities/${capability.slug}`}
                            className="group relative py-12 flex flex-col md:flex-row md:items-center gap-8 border-b border-border transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:px-6 hover:bg-card/50"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            {/* Technical Icon Display */}
                            <div className="shrink-0">
                                <CapabilityIcon
                                    iconName={capability.icon}
                                    className="w-10 h-10 text-primary-40 group-hover:text-primary transition-colors duration-500"
                                />
                            </div>

                            {/* Core Content Area */}
                            <div className="flex-1">
                                <h2 className="text-2xl font-medium tracking-tight mb-2 group-hover:text-primary transition-colors">
                                    {capability.title}
                                </h2>
                                <p className="text-fg-80 text-base max-w-3xl leading-relaxed m-0">
                                    {capability.cardDescription}
                                </p>
                            </div>

                            {/* Action Interaction Ring */}
                            <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full border border-border bg-transparent group-hover:border-primary/30 group-hover:bg-primary/5 transition-all duration-500">
                                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-transform duration-500" />
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Bottom Closure Funnel */}
                <FooterCTA
                    variant="solid"
                    title={footer.title}
                    description={footer.description}
                    buttonText={footer.buttonText}
                    buttonHref={footer.buttonHref}
                />
            </div>
        </div>
    );
}