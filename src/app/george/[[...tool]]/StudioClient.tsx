"use client";

import { useState, useEffect } from 'react';
import { NextStudio } from 'next-sanity/studio';
import config from '../../../../sanity.config';
import { useRouter } from 'next/navigation';

export default function StudioClient() {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const key = params.get('key');
    const unlockedSession = sessionStorage.getItem('graycoast_access');
    const secret = process.env.NEXT_PUBLIC_ADMIN_SECRET_KEY;

    if ((key && key === secret) || unlockedSession === 'true') {
      setIsUnlocked(true);
      sessionStorage.setItem('graycoast_access', 'true');
      if (key) {
        window.history.replaceState({}, '', window.location.pathname);
      }
    } else {
      router.push('/not-found');
    }
    setLoading(false);
  }, [router]);

  if (loading) {
    return (
      <div className="h-screen w-full bg-[#101112] flex items-center justify-center">
        <div className="text-[10px] uppercase tracking-[0.3em] text-foreground/20">
          Initializing Engine...
        </div>
      </div>
    );
  }

  if (!isUnlocked) return null;

  return (
    <div className="h-screen w-full">
      <NextStudio config={config} />
    </div>
  );
}