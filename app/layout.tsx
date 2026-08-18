import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ThemeProvider } from '@/components/layout/ThemeProvider';

export const metadata: Metadata = { title: 'BIGZICO | Premium Home Appliances & Technician Services', description: "Nigeria's trusted destination for genuine home appliances and professional technician services." };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" suppressHydrationWarning><body><Script id="theme-init" strategy="beforeInteractive">{`(function() {
    var stored = localStorage.getItem('theme');
    if (stored === 'dark' || (!stored && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    }
  })();`}</Script><ThemeProvider><Navbar /><div className="h-[116px] md:h-[160px]" />{children}<Footer /></ThemeProvider></body></html>;
}