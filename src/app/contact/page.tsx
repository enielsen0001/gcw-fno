import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";
import { PageHeader } from "@/components/ui/PageHeader";
import { contactMetadata } from "@/constants/metadata";
import { contactContent } from "@/constants/page-content";

export const metadata = contactMetadata;

export default function ContactPage() {
    const { header, main, channels, sidebar, footer } = contactContent;
    const IconMap = {
        email: (
            <Mail className="w-6 h-6 text-primary transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3" />
        ),
        linkedin: (
            <LinkedinIcon className="w-6 h-6 text-primary transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3" />
        ),
        github: (
            <GithubIcon className="w-6 h-6 text-primary transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-0.5" />
        ),
    };

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
                            {channels.map((channel, index) => (
                                <a
                                    key={index}
                                    href={channel.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-4 p-4 rounded-lg bg-card border border-border
               transition-all duration-300 ease-out group
               hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1"
                                >
                                    <div className="p-2 rounded-md bg-primary/5 transition-colors group-hover:bg-primary/10">
                                        {IconMap[
                                            channel.type as keyof typeof IconMap
                                        ] || null}
                                    </div>
                                    <div>
                                        <p className="text-foreground font-medium group-hover:text-primary transition-colors mb-0">
                                            {channel.label}
                                        </p>
                                        <p className="text-sm text-fg-70 mb-0">
                                            {channel.description}
                                        </p>
                                    </div>
                                </a>
                            ))}
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

                <div className="p-16 text-center rounded-sm border transition-all duration-500 bg-primary/5 text-foreground border-primary/10">
                    <h2 className="text-4xl font-light mb-8">{footer.title}</h2>

                    {footer.text.map((paragraph, index) => (
                        <p
                            key={index}
                            className="text-fg-80 mb-6 max-w-2xl mx-auto font-light"
                        >
                            {paragraph}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    );
}
