export function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-800 bg-slate-950/80 py-10">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 text-sm text-slate-400 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div>
          <p className="text-lg font-semibold tracking-[0.2em] text-white">BIGZICO</p>
          <p className="mt-3 max-w-sm leading-7">
            Trusted electronics and home appliance sales across Nigeria with genuine warranties and expert support.
          </p>
        </div>
        <div>
          <h3 className="text-base font-semibold text-white">Quick links</h3>
          <ul className="mt-4 space-y-2">
            <li><a href="/products" className="transition hover:text-teal-300">Shop now</a></li>
            <li><a href="/categories" className="transition hover:text-teal-300">Categories</a></li>
            <li><a href="/checkout" className="transition hover:text-teal-300">Checkout</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-base font-semibold text-white">Contact</h3>
          <ul className="mt-4 space-y-2">
            <li>support@bigzico.com</li>
            <li>+234 800 BIGZICO</li>
            <li>Lagos, Abuja, Port Harcourt</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
