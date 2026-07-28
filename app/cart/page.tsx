'use client';
import Link from 'next/link';
import { useState } from 'react';
import { products } from '@/lib/mock-data';

export default function CartPage() {
  const [quantities, setQuantities] = useState<Record<string, number>>({ [products[0].id]: 1, [products[1].id]: 1 });
  const items = products.slice(0, 2);
  const total = items.reduce((sum, product) => sum + product.price * (quantities[product.id] ?? 1), 0);
  return <main className="page-transition mx-auto max-w-7xl px-4 py-12"><p className="text-sm font-semibold uppercase tracking-widest text-teal-600">Your basket</p><h1 className="mt-2 font-display text-4xl font-bold">Shopping Cart</h1><div className="mt-8 grid gap-8 lg:grid-cols-[1fr_360px]"><div className="space-y-4">{items.map((product) => <div key={product.id} className="flex gap-4 rounded-2xl border bg-white p-4"><img src={product.image} alt={product.name} className="h-28 w-28 rounded-xl object-cover" /><div className="flex-1"><p className="text-xs uppercase tracking-wide text-teal-600">{product.brand}</p><h2 className="mt-1 font-semibold">{product.name}</h2><p className="mt-2 font-bold">₦{product.price.toLocaleString()}</p><div className="mt-2 flex items-center gap-2"><button onClick={() => setQuantities({ ...quantities, [product.id]: Math.max(1, (quantities[product.id] ?? 1) - 1) })} className="h-8 w-8 rounded border">-</button><span>{quantities[product.id] ?? 1}</span><button onClick={() => setQuantities({ ...quantities, [product.id]: (quantities[product.id] ?? 1) + 1 })} className="h-8 w-8 rounded border">+</button></div></div></div>)}</div><aside className="h-fit rounded-2xl border bg-white p-6"><h2 className="font-display text-xl font-bold">Order Summary</h2><div className="mt-5 flex justify-between border-t pt-4 font-bold"><span>Total</span><span>₦{total.toLocaleString()}</span></div><Link href="/checkout" className="mt-6 block rounded-full bg-teal-600 px-6 py-3 text-center font-semibold text-white hover:bg-teal-700">Proceed to Checkout</Link></aside></div></main>;
}
