import homepageData from '@/src/data/homepage.json';

export function TrustFeatures() {
  const features = homepageData.trustFeatures;

  return (
    <section className="relative z-10 mx-2 -mt-8 rounded-2xl bg-white shadow-xl sm:mx-4">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-2 px-4 py-4 md:grid-cols-4 md:gap-4 md:py-6">
        {features.map((item: any) => (
          <div key={item.title} className="flex items-center gap-3 rounded-xl p-3 hover:bg-gray-50">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-teal-100 text-xl text-teal-600">
              {item.icon}
            </span>
            <span>
              <strong className="block text-xs sm:text-sm">{item.title}</strong>
              <small className="text-[10px] text-gray-500 sm:text-xs">{item.copy}</small>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
