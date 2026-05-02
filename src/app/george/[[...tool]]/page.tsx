import type { Metadata } from 'next';
import StudioClient from './StudioClient';

export const metadata: Metadata = {
  title: 'Engine | GrayCoast',
  robots: { index: false, follow: false }, // Hide from search engines
};

// Next.js static params config if needed
export const dynamic = 'force-dynamic';

export default function StudioPage() {
  return <StudioClient />;
}