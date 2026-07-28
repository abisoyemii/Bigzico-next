'use client';
import { useState } from 'react';
import homepageData from '@/src/data/homepage.json';

export function AnnouncementBar() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  const { text, dismissText } = homepageData.announcement;

  return (
    <div className="border-b border-white/10 bg-brand-primary text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 text-sm">
        <p className="font-medium">
          {text}
        </p>
        <button onClick={() => setDismissed(true)} className="rounded-full border border-white/20 px-3 py-1 text-xs font-semibold hover:bg-white/10" aria-label="Dismiss announcement">
          {dismissText}
        </button>
      </div>
    </div>
  );
}
