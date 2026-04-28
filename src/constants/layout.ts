const footerLinksCol1 = [
  { name: 'Services', href: '/services' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'About', href: '/about' },
  { name: 'Process', href: '/process' }
] as const;

const footerLinksCol2 = [
  { name: 'Privacy Policy', href: '/privacy' },
  { name: 'Terms of Service', href: '/terms' }
] as const;

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/services', label: 'Services' },
  { path: '/case-studies', label: 'Case Studies' },
  { path: '/about', label: 'About' },
  // { path: '/process', label: 'Process' },
  { path: '/contact', label: 'Contact' },
] as const;

export {
    footerLinksCol1,
    footerLinksCol2,
    navLinks
}