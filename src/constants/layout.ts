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

export {
    footerLinksCol1,
    footerLinksCol2
}