'use client';

import { useState } from 'react';
import { Copy, Check, Mail } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './SocialIcons';
import { contactContent } from '@/constants/page-content';

export function ContactCards() {
    const { channels } = contactContent;

    const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

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

    const handleCopy = (e: React.MouseEvent, text: string, index: number) => {
        e.preventDefault(); // Prevents navigating to the mailto: href
        e.stopPropagation();
        navigator.clipboard.writeText(text);
        setCopiedIndex(index);
        setTimeout(() => setCopiedIndex(null), 2000);
    };

    return (
        <div className="space-y-4">
            {channels.map((channel, index) => {
                const isMail = channel.href.startsWith('mailto:');
                const emailAddress = isMail ? channel.href.replace('mailto:', '') : null;

                return (
                    <a
                        key={index}
                        href={channel.href}
                        target={isMail ? '_self' : '_blank'}
                        rel={isMail ? undefined : 'noopener noreferrer'}
                        className="flex items-center gap-4 p-4 rounded-lg bg-card border border-border
                        transition-all duration-300 ease-out group
                        hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 relative"
                    >
                        {/* Icon Container */}
                        <div className="p-2 rounded-md bg-primary/5 transition-colors group-hover:bg-primary/10 flex-shrink-0">
                            {IconMap[channel.type as keyof typeof IconMap] || null}
                        </div>

                        {/* Text Container */}
                        <div className="flex-grow min-w-0 pr-2">
                            <p className="text-foreground font-medium group-hover:text-primary transition-colors mb-0">
                                {channel.label}
                            </p>

                            <p className="text-md md:text-sm text-fg-70 mb-0">
                                {channel.description}
                            </p>

                        </div>

                        {/* Copy Button (Only renders for mailto links) */}
                        {emailAddress && (
                            <button
                                type="button"
                                onClick={(e) => handleCopy(e, emailAddress, index)}
                                className="relative z-10 p-2 rounded-md bg-muted/60 hover:bg-muted text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary flex-shrink-0"
                                title="Copy email address"
                                aria-label="Copy email address"
                            >
                                {copiedIndex === index ? (
                                    <Check className="w-4 h-4 text-emerald-500" />
                                ) : (
                                    <Copy className="w-4 h-4" />
                                )}
                            </button>
                        )}
                    </a>
                );
            })}
        </div>
    );
}