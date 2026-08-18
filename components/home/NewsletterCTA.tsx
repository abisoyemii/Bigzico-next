import homepageData from '@/src/data/homepage.json';

export function NewsletterCTA() {
  const { label, title, description, inputPlaceholder, buttonText } = homepageData.newsletter;

  return (
    <section className="mx-auto max-w-7xl px-4 py-8">
      <div className="rounded-[32px] bg-gradient-to-r from-brand-primary to-teal-800 px-6 py-10 text-center text-white shadow-xl sm:px-10 lg:px-16">
        <p className="text-sm font-semibold uppercase tracking-widest text-teal-200">{label}</p>
        <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">{title}</h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm text-teal-50 sm:text-base">{description}</p>
        <form className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row">
          <input type="email" placeholder={inputPlaceholder} className="flex-1 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-white placeholder:text-teal-100 outline-none" />
          <button type="submit" className="rounded-full bg-white px-6 py-3 font-semibold text-brand-primary hover:bg-gray-100">{buttonText}</button>
        </form>
      </div>
    </section>
  );
}
