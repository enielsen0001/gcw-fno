"use client";

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import { DarkModeToggle } from '@/components/ui/DarkModeToggle';
// Assuming your logo is in the public folder for Next.js
import logo from '@/../public/images/gcw-logo.svg';
import { navLinks } from '@/constants/layout';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === '/' && pathname === '/') return true;
    if (path !== '/' && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-2">
              <Image src={logo} alt="Gray Coast Web Logo" width={48} height={48} className="h-12 w-12" />
              <div className="flex flex-col leading-tight">
                <span className="text-med font-bold tracking-tight text-foreground hover:text-primary transition-colors leading-none">Gray<br/> Coast <br/>Web</span>
              </div>
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <nav className="flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`hover-underline transition-colors ${
                    isActive(link.path)
                      ? 'text-foreground'
                      : 'text-fg-70 hover:text-foreground'
                  }`}
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
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-6 border-t border-border bg-background">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`py-2 transition-colors ${
                    isActive(link.path)
                      ? 'text-foreground font-medium'
                      : 'text-fg-70 hover:text-foreground'
                  }`}
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
  );
}