import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export const metadata: Metadata = { title: 'BIGZICO | Premium Home Appliances & Technician Services', description: "Nigeria's trusted destination for genuine home appliances and professional technician services." };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><Navbar /><div className="h-[116px] md:h-[160px]" />{children}<Footer /></body></html>;
}