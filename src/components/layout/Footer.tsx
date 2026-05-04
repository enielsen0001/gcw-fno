import { footerContent } from "@/constants/page-content";
import Link from "next/link";

export function Footer() {
    const { cta, navigation, bottom } = footerContent;

    return (
        <footer className="py-16 px-6 lg:px-12 border-t border-border bg-background">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12 mb-12">
                    <div>
                        <h2 className="text-3xl tracking-tight mb-4 text-foreground">
                            {cta.title}
                        </h2>
                        <p className="text-fg-70 mb-6 leading-relaxed">
                            {cta.description}
                        </p>
                        <Link href={cta.buttonHref} className="btn-ghost">
                            {cta.buttonText}
                        </Link>
                    </div>

                    <div className="grid grid-cols-2 gap-8">
                        <div>
                            <h3 className="mb-4 font-semibold text-foreground">
                                {navigation.col1Title}
                            </h3>
                            <nav className="flex flex-col gap-3">
                                {navigation.col1Links.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={`${item.href}`}
                                        className="footer-link"
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </nav>
                        </div>

                        <div>
                            <h3 className="mb-4 font-semibold text-foreground">
                                {navigation.col2Title}
                            </h3>
                            <nav className="flex flex-col gap-3">
                                {navigation.col2Links.map((item) => (
                                    <Link
                                        key={item.name}
                                        href="{item.href}"
                                        className="footer-link"
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </nav>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-fg-50 text-sm">
                        © {new Date().getFullYear()} {bottom.brandName}. All
                        rights reserved.
                    </p>
                    <p className="text-fg-50 text-sm italic">
                        {bottom.tagline}
                    </p>
                </div>
            </div>
        </footer>
    );
}
