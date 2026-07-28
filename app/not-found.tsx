import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[50vh] max-w-2xl flex-col items-center justify-center px-4 py-12 text-center">
      <h2 className="font-display text-3xl font-bold">Page not found</h2>
      <p className="mt-3 text-gray-600">The page you are looking for is not available right now.</p>
      <Link href="/products" className="mt-6 rounded-full bg-teal-600 px-6 py-3 font-semibold text-white hover:bg-teal-700">Explore Products</Link>
    </main>
  );
}
