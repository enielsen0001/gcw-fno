import { footerLinksCol1, footerLinksCol2 } from '@/constants/layout';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="py-16 px-6 lg:px-12 border-t border-border bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div>
            <h2 className="text-3xl tracking-tight mb-4 text-foreground">
              Let's Build Something Resilient
            </h2>
            <p className="text-fg-70 mb-6 leading-relaxed">
              If you're ready to modernize your legacy systems or need strategic guidance on architectural decisions, let's talk.
            </p>
            <Link
              href="/contact"
              className="btn-ghost"
            >
              Get in Touch
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="mb-4 font-semibold text-foreground">Navigation</h3>
              <nav className="flex flex-col gap-3">
                {footerLinksCol1.map((item) => (
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
              <h3 className="mb-4 font-semibold text-foreground">Legal</h3>
              <nav className="flex flex-col gap-3">
                {footerLinksCol2.map((item) => (
                <Link key={item.name} href="{item.href}" className="footer-link">
                 {item.name}
                </Link>))}
              </nav>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-fg-50 text-sm">
            © {new Date().getFullYear()} GrayCoastWeb. All rights reserved.
          </p>
          <p className="text-fg-50 text-sm italic">
            Architectural Modernization & Legacy System Stewardship
          </p>
        </div>
      </div>
    </footer>
  );
}