'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import homepageData from '@/src/data/homepage.json';

const slides = homepageData.hero.slides;

export function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => setActive((current) => (current + 1) % slides.length), 5000);
    return () => window.clearInterval(timer);
  }, []);

  const slide = slides[active];

  return (
    <section className="relative min-h-[500px] overflow-hidden bg-brand-primary text-white md:min-h-[600px]">
      {slides.map((item, index) => (
        <div
          key={item.image}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ${
            index === active ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url(https://images.unsplash.com/${item.image}?auto=format&fit=crop&w=1600&q=80)`,
          }}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/90 to-teal-900/55" />
      <div className="relative z-10 mx-auto flex min-h-[500px] max-w-7xl items-center px-4 py-16 md:min-h-[600px]">
        <div className="hero-slide-content max-w-2xl space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm">
            <span className="h-2 w-2 animate-pulse rounded-full bg-teal-300" />
            {slide.eyebrow}
          </span>
          <h1 className="font-display text-4xl font-bold leading-tight sm:text-6xl">{slide.title}</h1>
          <p className="max-w-lg text-base text-gray-200 sm:text-lg">{slide.copy}</p>
          <div className="flex flex-wrap gap-3">
            {slide.buttons.map((button: any) => (
              <Link
                key={button.text}
                href={button.href}
                className={`rounded-full px-7 py-3 font-semibold transition ${
                  button.variant === 'primary'
                    ? 'bg-teal-600 hover:bg-teal-700'
                    : 'border border-white/30 bg-white/10 backdrop-blur hover:bg-white/20'
                }`}
              >
                {button.text}
              </Link>
            ))}
          </div>
          <div className="flex gap-8 border-t border-white/20 pt-5">
            {slide.stats.map((stat: any) => (
              <div key={stat.label}>
                <strong className="text-2xl text-teal-300">{stat.value}</strong>
                <p className="text-xs text-gray-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <button
        onClick={() => setActive((active - 1 + slides.length) % slides.length)}
        className="absolute left-3 top-1/2 z-20 rounded-full bg-black/40 px-4 py-3 text-xl hover:bg-teal-600"
        aria-label="Previous slide"
      >
        ‹
      </button>
      <button
        onClick={() => setActive((active + 1) % slides.length)}
        className="absolute right-3 top-1/2 z-20 rounded-full bg-black/40 px-4 py-3 text-xl hover:bg-teal-600"
        aria-label="Next slide"
      >
        ›
      </button>
      <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {slides.map((item, index) => (
          <button
            key={item.image}
            onClick={() => setActive(index)}
            className={`h-2 rounded-full transition-all ${
              index === active ? 'w-8 bg-teal-400' : 'w-2 bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}