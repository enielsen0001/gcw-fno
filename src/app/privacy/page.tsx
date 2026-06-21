import { privacyPolicyContent } from "@/constants/page-content";

export const metadata = {
    title: "Privacy Policy | GrayCoastWeb",
    description: "Privacy policy and data collection transparency disclosures.",
};

export default function PrivacyPage() {
    const { title, lastUpdated, sections } = privacyPolicyContent;

    return (
        <main className="py-24 px-6 lg:px-12 bg-background text-foreground transition-colors duration-300 min-h-screen">
            <div className="max-w-3xl mx-auto space-y-12">

                {/* Header Section */}
                <div className="border-b border-border/50 pb-8 space-y-2">
                    <h1 className="text-3xl sm:text-4xl font-bold tracking-tight m-0 text-foreground">
                        {title}
                    </h1>
                    <p className="font-mono text-xs text-fg-60 m-0">
                        Last Updated: {lastUpdated}
                    </p>
                </div>

                {/* Narrative Sections Layout */}
                <div className="space-y-10">
                    {sections.map((section) => (
                        <div key={section.heading} className="space-y-3">
                            <h2 className="text-lg font-semibold tracking-tight text-foreground">
                                {section.heading}
                            </h2>
                            <p className="text-fg-80 text-sm leading-relaxed m-0 font-light">
                                {section.body}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </main>
    );
}