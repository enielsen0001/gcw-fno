import { footerContent } from "@/constants/page-content";
import Link from "next/link";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";

export function Footer() {
    const { cta, legal, bottom } = footerContent;

    // Strict UI mapping for social icon configurations
    const socialChannels = [
        {
            name: "GitHub",
            href: "https://github.com/enielsen0001", // Replace with your profile link
            icon: <GithubIcon className="w-5 h-5 text-zinc-700 dark:text-zinc-300 transition-all duration-300 transform group-hover:text-primary group-hover:-translate-y-0.5" />
        },
        {
            name: "LinkedIn",
            href: "https://www.linkedin.com/in/enielsen0001", // Replace with your profile link
            icon: <LinkedinIcon className="w-5 h-5 text-zinc-700 dark:text-zinc-300 transition-all duration-300 transform group-hover:text-primary group-hover:-translate-y-0.5" />
        }
    ];

    return (
        <footer className="py-16 px-6 lg:px-12 border-t border-border/50 bg-background transition-colors duration-300">
            <div className="max-w-6xl mx-auto">

                {/* Upper Frame: Asymmetric Split Layout */}
                <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">

                    {/* Copy Column */}
                    <div className="max-w-xl space-y-4">
                        <h2 className="text-2xl sm:text-3xl tracking-tight  text-foreground font-semibold balance">
                            {cta.title.split('<br>').map((line, index, array) => (
                                <span key={index}>
                                    {line}
                                    {index < array.length - 1 && <br />}
                                </span>
                            ))}
                        </h2>
                        <p className="text-fg-80 text-sm leading-relaxed font-light max-w-md">
                            {cta.description}
                        </p>
                        <div className="pt-2">
                            <Link href={cta.buttonHref} className="btn-ghost text-xs">
                                {cta.buttonText}
                            </Link>
                        </div>
                    </div>

                    {/* Right Column: Horizontal Social SVG Bar */}
                    <div className="flex items-center gap-4 shrink-0 pt-2">
                        {socialChannels.map((channel) => (
                            <a
                                key={channel.name}
                                href={channel.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`Visit our ${channel.name} profile`}
                                className="group p-2.5 rounded-md border border-border/50 bg-card/40 hover:border-primary/40 hover:bg-card transition-all duration-300 shadow-[0_2px_8px_-3px_rgba(0,0,0,0.05)]"
                            >
                                <span aria-hidden="true">
                                    {channel.icon}
                                </span>
                            </a>
                        ))}
                    </div>
                </div>

                {/* Lower Frame: High-Contrast Monospace Baseline */}
                <div className="pt-8 border-t border-border/40 flex flex-col md:flex-row justify-between items-baseline gap-4 font-mono text-xs">

                    {/* Copyright & Tagline */}
                    <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 text-fg-60">
                        <span className="font-medium text-foreground">
                            © {new Date().getFullYear()} {bottom.brandName}
                        </span>
                        {bottom.tagline && (
                            <span className="text-fg-40 font-light hidden sm:inline" aria-hidden="true">
                                — {bottom.tagline}
                            </span>
                        )}
                    </div>

                    {/* Legal Compliance link (Accessible and structured) */}
                    <div>
                        <Link
                            href={legal.privacy.href}
                            className="text-zinc-700 dark:text-zinc-300 hover:text-primary transition-colors duration-200 underline underline-offset-4 decoration-border/80"
                        >
                            {legal.privacy.name}
                        </Link>
                    </div>
                </div>

            </div>
        </footer>
    );
}