import homepageData from '@/src/data/homepage.json';

export function PaymentPlan() {
  const data = homepageData.paymentPlan;

  return (
    <section className="border-y border-amber-100 bg-gradient-to-r from-amber-50 to-orange-50 py-12 sm:py-16" aria-label="Payment plans">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 lg:grid-cols-2 lg:items-center">
        <div>
          <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-700 sm:text-sm">
            {data.badge}
          </span>
          <h2 className="font-display text-2xl font-bold sm:text-3xl md:text-4xl">{data.title}</h2>
          <p className="mt-4 mb-6 text-sm text-gray-600 sm:text-base">{data.description}</p>
          <div className="mb-6 space-y-3 sm:space-y-4">
            {data.features.map((feature: any) => (
              <div key={feature.title} className="flex items-center gap-3 rounded-xl bg-white/80 p-3 sm:gap-4 sm:p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-600 sm:h-12 sm:w-12">✓</div>
                <div>
                  <p className="text-sm font-semibold">{feature.title}</p>
                  <p className="text-xs text-gray-500 sm:text-sm">{feature.copy}</p>
                </div>
              </div>
            ))}
          </div>
          <a href={data.button.href} className="inline-flex items-center gap-2 rounded-full bg-amber-600 px-6 py-3 font-semibold text-white transition hover:bg-amber-700">{data.button.text}</a>
        </div>
        <div className="rounded-3xl border border-amber-100 bg-white p-4 shadow-xl sm:p-8">
          <h3 className="mb-4 text-center text-lg font-bold sm:text-xl">{data.calculator.title}</h3>
          <div className="space-y-4 sm:space-y-6">
            <div>
              <label className="mb-2 block text-xs font-medium sm:text-sm">{data.calculator.priceLabel} <span className="font-bold text-teal-600">{data.calculator.priceDefault}</span></label>
              <input type="range" min={data.calculator.priceRange.min} max={data.calculator.priceRange.max} step={data.calculator.priceRange.step} defaultValue={150000} className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200 accent-teal-600" />
              <div className="mt-1 flex justify-between text-[10px] text-gray-400 sm:text-xs"><span>₦50k</span><span>₦500k</span></div>
            </div>
            <div>
              <label className="mb-2 block text-xs font-medium sm:text-sm">{data.calculator.planLabel}</label>
              <div className="grid grid-cols-3 gap-2 sm:gap-3">
                {data.calculator.plans.map((plan: any) => (
                  <button key={plan.value} className="rounded-lg bg-teal-600 py-2 text-xs font-semibold text-white sm:text-sm">{plan.label}</button>
                ))}
              </div>
            </div>
            <div className="rounded-xl bg-gray-50 p-3 text-center sm:p-4">
              <p className="mb-1 text-xs text-gray-500 sm:text-sm">{data.calculator.monthlyLabel}</p>
              <p className="text-2xl font-bold text-teal-600 sm:text-3xl">{data.calculator.monthlyDefault}</p>
              <p className="mt-1 text-[10px] text-gray-400 sm:text-xs">{data.calculator.disclaimer}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
