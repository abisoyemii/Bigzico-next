import homepageData from '@/src/data/homepage.json';

export function WhyChoose() {
  const { title, subtitle, reasons } = homepageData.whyChoose;

  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:py-16" aria-label="Why choose us">
      <div className="mb-8 text-center sm:mb-12">
        <h2 className="font-display text-2xl font-bold sm:text-3xl md:text-4xl">{title}</h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm text-gray-600 sm:text-base">{subtitle}</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
        {reasons.map((reason: any) => (
          <div key={reason.title} className="rounded-2xl border border-gray-100 bg-white p-4 text-center shadow-lg sm:p-6">
            <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-500 to-teal-700 text-2xl text-white shadow-lg sm:h-20 sm:w-20">
              {reason.icon}
            </div>
            <h3 className="mb-1 font-bold text-base sm:text-xl">{reason.title}</h3>
            <p className="text-xs text-gray-500 sm:text-sm">{reason.copy}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
