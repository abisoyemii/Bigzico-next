import Link from 'next/link';

type HeroProps = {
  badge?: string;
  title: string;
  subtitle: string;
  primaryAction?: { label: string; href: string };
  secondaryAction?: { label: string; href: string };
  stats?: Array<{ label: string; value: string }>;
};

export function Hero({ badge = 'Trusted by Nigerian homes', title, subtitle, primaryAction, secondaryAction, stats = [{ label: 'Same day delivery', value: 'Lagos' }, { label: 'Certified tech support', value: '24/7' }, { label: 'Warranty', value: 'Genuine Parts' }] }: HeroProps) {
  return (
    <section className="relative overflow-hidden rounded-[2rem] border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-teal-950/80 px-6 py-16 shadow-2xl shadow-black/20 sm:px-10 lg:px-16 lg:py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(45,212,191,0.2),_transparent_34%)]" />
      <div className="relative grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="max-w-2xl">
          <div className="mb-5 inline-flex items-center rounded-full border border-teal-400/30 bg-teal-400/10 px-3 py-1 text-sm font-medium text-teal-300">
            {badge}
          </div>
          <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            {subtitle}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            {primaryAction ? (
              <Link href={primaryAction.href} className="rounded-full bg-teal-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-teal-400">
                {primaryAction.label}
              </Link>
            ) : null}
            {secondaryAction ? (
              <Link href={secondaryAction.href} className="rounded-full border border-slate-700 px-6 py-3 font-semibold text-white transition hover:border-teal-400 hover:text-teal-300">
                {secondaryAction.label}
              </Link>
            ) : null}
          </div>
        </div>

        <div className="rounded-[1.5rem] border border-slate-800 bg-slate-950/70 p-6 backdrop-blur">
          <div className="rounded-[1.25rem] border border-slate-800 bg-slate-900/80 p-5">
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-teal-300">Why BigZico</p>
            <div className="mt-6 space-y-4">
              {stats.map((stat) => (
                <div key={stat.label} className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950/70 px-4 py-3">
                  <span className="text-sm text-slate-400">{stat.label}</span>
                  <span className="text-sm font-semibold text-white">{stat.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
