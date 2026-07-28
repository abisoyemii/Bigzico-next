import homepageData from '@/src/data/homepage.json';

export function HowItWorks() {
  const { title, subtitle, steps } = homepageData.howItWorks;

  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:py-16" aria-label="How it works">
      <div className="mb-8 text-center sm:mb-12">
        <h2 className="font-display text-2xl font-bold sm:text-3xl md:text-4xl">{title}</h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm text-gray-600 sm:text-base">{subtitle}</p>
      </div>
      <div className="relative grid gap-4 sm:gap-8 lg:grid-cols-4">
        <div className="absolute left-0 right-0 top-1/2 z-0 hidden h-0.5 -translate-y-1/2 bg-gradient-to-r from-teal-600 via-teal-400 to-teal-600 opacity-30 lg:block" />
        {steps.map((step, index) => (
          <div key={step.title} className="relative z-10 text-center">
            <div className={`mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl text-2xl font-bold text-white shadow-lg sm:h-20 sm:w-20 sm:text-3xl ${index === 0 ? 'bg-gradient-to-br from-teal-500 to-teal-700' : index === 1 ? 'bg-gradient-to-br from-teal-600 to-cyan-600' : index === 2 ? 'bg-gradient-to-br from-cyan-600 to-blue-600' : 'bg-gradient-to-br from-blue-600 to-teal-600'}`}>
              {index + 1}
            </div>
            <h3 className="mb-2 font-bold text-base sm:text-lg">{step.title}</h3>
            <p className="text-xs text-gray-500 sm:text-sm">{step.copy}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
