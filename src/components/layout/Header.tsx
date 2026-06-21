"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { DarkModeToggle } from "@/components/ui/DarkModeToggle";
import logo from "@/../public/images/gcw-logo.svg";
import { headerContent } from "@/constants/page-content";

export function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();
    const { navigation } = headerContent;

    const isActive = (path: string) => {
        if (path === "/" && pathname === "/") return true;
        if (path !== "/" && pathname.startsWith(path)) return true;
        return false;
    };

    return (
        <>
            <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-9999 focus:p-2 focus:bg-primary focus:text-primary-foreground focus:rounded">
                Skip to main content
            </a>
            <header className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-b border-border z-50">
                <div className="px-6 lg:px-12 py-2">
                    <div className="flex items-center justify-between max-w-7xl mx-auto ">
                        <div className="flex-shrink-0">
                            <Link href="/" className="flex items-center gap-2">
                                <Image
                                    src={logo}
                                    alt="Gray Coast Web Logo"
                                    width={48}
                                    height={48}
                                    className="h-12 w-12"
                                />
                                <div className="flex flex-col leading-tight">
                                    <span className="text-med font-bold tracking-tight text-foreground hover:text-primary transition-colors leading-none">
                                        Gray
                                        <br /> Coast <br />
                                        Web
                                    </span>
                                </div>
                            </Link>
                        </div>

                        <div className="hidden md:flex items-center gap-8">
                            <nav className="flex items-center gap-8">
                                {navigation.map((link) => (
                                    <Link
                                        key={link.path}
                                        href={link.path}
                                        className={`hover-underline transition-colors ${
                                            isActive(link.path)
                                                ? "text-foreground"
                                            : "text-fg-80 hover:text-foreground"
                                        }`}
                                        aria-current={isActive(link.path) ? "page" : undefined}
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </nav>
                            <DarkModeToggle />
                        </div>

                        <div className="md:hidden flex items-center gap-2">
                            <DarkModeToggle />
                            <button
                                className="p-2 text-foreground"
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                aria-label="Toggle menu"
                                aria-expanded={mobileMenuOpen}
                                aria-controls="mobile-menu"
                            >
                                {mobileMenuOpen ? (
                                    <X className="w-6 h-6" />
                                ) : (
                                    <Menu className="w-6 h-6" />
                                )}
                            </button>
                        </div>
                    </div>

                    {mobileMenuOpen && (
                        <div className="md:hidden py-6 border-t border-border bg-background" id="mobile-menu">
                            <nav className="flex flex-col gap-4">
                                {navigation.map((link) => (
                                    <Link
                                        key={link.path}
                                        href={link.path}
                                        className={`py-2 transition-colors ${
                                            isActive(link.path)
                                                ? "text-foreground font-medium"
                                                : "text-fg-70 hover:text-foreground"
                                        }`}
                                        aria-current={isActive(link.path) ? "page" : undefined}
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </nav>
                        </div>
                    )}
                </div>
            </header>
        </>
    );
}
