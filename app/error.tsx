'use client';

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <main className="mx-auto flex min-h-[50vh] max-w-2xl flex-col items-center justify-center px-4 py-12 text-center">
      <h2 className="font-display text-3xl font-bold">Something went wrong</h2>
      <p className="mt-3 text-gray-600">BIGZICO hit a snag while loading this page. Please try again.</p>
      <button onClick={() => reset()} className="mt-6 rounded-full bg-teal-600 px-6 py-3 font-semibold text-white hover:bg-teal-700">Try again</button>
    </main>
  );
}
