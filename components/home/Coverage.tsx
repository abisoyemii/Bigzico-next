import homepageData from '@/src/data/homepage.json';

export function Coverage() {
  const data = homepageData.coverage;
  const { cities } = homepageData.coverage;
  const { orders } = homepageData.coverage.liveTracker;

  return (
    <section className="bg-gradient-to-br from-brand-primary to-teal-900 py-12 text-white sm:py-20" aria-label="Service coverage">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 lg:grid-cols-2 lg:items-center">
        <div>
          <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-teal-300 sm:text-sm">
            {data.label}
          </span>
          <h2 className="font-display text-2xl font-bold sm:text-3xl md:text-4xl">We Deliver & Service <span className="text-teal-400">Across Nigeria</span></h2>
          <p className="mt-4 mb-6 text-sm text-gray-300 sm:text-base">{data.description}</p>
          <div className="mb-6 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
            {cities.map((city: any) => (
              <div key={city.name} className="rounded-xl bg-white/10 p-3 text-center transition hover:bg-white/20 sm:p-4">
                <p className="text-sm font-bold sm:text-base">{city.name}</p>
                <p className="mt-1 text-[10px] text-gray-400 sm:text-xs">{city.time}</p>
              </div>
            ))}
          </div>
          <a href={data.button.href} className="inline-flex items-center gap-2 rounded-full bg-teal-600 px-6 py-3 font-semibold transition hover:bg-teal-700">{data.button.text}</a>
        </div>
        <div className="rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur sm:p-8">
          <div className="mb-4 flex items-center justify-between sm:mb-6">
            <h3 className="text-lg font-bold sm:text-xl">{homepageData.coverage.liveTracker.title}</h3>
            <span className="flex items-center gap-2 text-xs text-green-400 sm:text-sm"><span className="h-2 w-2 animate-pulse rounded-full bg-green-400" /> {homepageData.coverage.liveTracker.activeLabel}</span>
          </div>
          <div className="space-y-3 sm:space-y-4">
            {orders.map((order: any) => (
              <div key={order.label} className="flex items-center gap-3 rounded-xl bg-white/10 p-3 sm:gap-4 sm:p-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/20 sm:h-10 sm:w-10">{order.icon}</div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-xs font-semibold sm:text-sm">{order.label}</p>
                  <div className="mt-1 h-1.5 w-full rounded-full bg-white/20 sm:h-2">
                    <div className={`h-1.5 rounded-full sm:h-2 ${ order.progress === 75 ? 'bg-teal-400' : order.progress === 40 ? 'bg-blue-400' : 'bg-purple-400'}`} style={{ width: `${order.progress}%` }} />
                  </div>
                </div>
                <span className="text-[10px] text-teal-200 sm:text-xs">{order.progress}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
