import Link from 'next/link';
import Image from 'next/image';

export function BrandLogo({ compact = false, className = '' }: { compact?: boolean; className?: string }) {
  return (
    <Link href="/" className={`flex shrink-0 items-center gap-2 ${className}`}>
      <Image 
        src="/images/bigzico.jpeg" 
        alt="BIGZICO Logo" 
        width={40} 
        height={40} 
        className="h-auto w-auto rounded-lg object-cover"
        priority
      />
      {!compact && <span className="hidden font-display text-2xl font-bold text-brand-primary sm:block">BIGZICO</span>}
    </Link>
  );
}
