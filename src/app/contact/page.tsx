import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";
import { PageHeader } from "@/components/ui/PageHeader";
import { contactMetadata } from "@/constants/metadata";
import { contactContent } from "@/constants/page-content";
import { ContactCards } from "@/components/ui/ContactCards";

export const metadata = contactMetadata;

export default function ContactPage() {
    const { header, main, sidebar } = contactContent;

    return (
        <div className="py-16 px-6 lg:px-12">
            <div className="max-w-4xl mx-auto">
                <div className="mb-16">
                    <PageHeader
                        title={header.title}
                        subtitle={header.subtitle}
                    />
                </div>

                <div className="grid md:grid-cols-2 gap-12 mb-16">
                    <section>
                        <h2 className="text-3xl tracking-tight mb-6 text-foreground">
                            {main.title}
                        </h2>
                        {main.description.map((paragraph, index) => (
                            <p
                                key={index}
                                className="text-fg-80 mb-4 leading-relaxed"
                            >
                                {paragraph}
                            </p>
                        ))}

                        <div className="space-y-4">
                            <ContactCards />
                        </div>
                    </section>

                    <aside className="space-y-8">
                        <div className="p-8 rounded-lg bg-card border border-border">
                            <h3 className="text-xl mb-4 text-foreground font-semibold">
                                {sidebar.consultation.title}
                            </h3>
                            <p className="text-fg-70 leading-relaxed mb-4">
                                {sidebar.consultation.text}
                            </p>
                            <ul className="space-y-3">
                                {sidebar.consultation.items.map(
                                    (item, index) => (
                                        <li
                                            key={index}
                                            className="flex gap-2 text-fg-70"
                                        >
                                            <span className="text-primary ">
                                                •
                                            </span>
                                            <span>{item}</span>
                                        </li>
                                    ),
                                )}
                            </ul>
                        </div>

                        <div className="p-8 rounded-lg bg-card border border-border">
                            <h3 className="text-xl mb-4 text-foreground font-semibold">
                                {sidebar.intake.title}
                            </h3>
                            <p className="text-fg-70 leading-relaxed mb-4">
                                {sidebar.intake.text}
                            </p>
                            <ul className="space-y-3">
                                {sidebar.intake.items.map((item, index) => (
                                    <li
                                        key={index}
                                        className="flex gap-2 text-fg-70"
                                    >
                                        <span className="text-primary">•</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </aside>
                </div>

            </div>
        </div>
    );
}
