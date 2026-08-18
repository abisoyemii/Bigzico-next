'use client';
import { useMemo, useState } from 'react';
import { useBigzicoStore } from '@/lib/store';

export default function CheckoutPage() {
  const { cart, cartTotal } = useBigzicoStore();
  const [submitted, setSubmitted] = useState(false);
  const shipping = useMemo(() => (cartTotal > 0 ? 15000 : 0), [cartTotal]);

  return (
    <main className="page-transition mx-auto max-w-5xl px-4 py-12">
      <p className="text-sm font-semibold uppercase tracking-widest text-teal-600">Secure checkout</p>
      <h1 className="mt-2 font-display text-4xl font-bold">Complete Your Purchase</h1>
      {submitted ? (
        <div className="mt-8 rounded-2xl bg-teal-50 p-8 text-center">
          <h2 className="font-display text-2xl font-bold text-teal-800">Order request received</h2>
          <p className="mt-2 text-teal-700">Your order request has been captured. Our team will confirm your delivery details shortly.</p>
        </div>
      ) : (
        <form onSubmit={(event) => { event.preventDefault(); setSubmitted(true); }} className="mt-8 grid gap-8 lg:grid-cols-[1fr_320px]">
          <div className="space-y-4 rounded-2xl border bg-white p-6">
            <h2 className="font-display text-xl font-bold">Delivery Details</h2>
            {['Full name', 'Phone number', 'Email address', 'Delivery address', 'City'].map((label) => (
              <input key={label} required placeholder={label} className="w-full rounded-xl border px-4 py-3 outline-none focus:border-teal-500" />
            ))}
            <select className="w-full rounded-xl border px-4 py-3">
              <option>Paystack</option>
              <option>Flutterwave</option>
              <option>Pay on Delivery</option>
            </select>
          </div>
          <aside className="h-fit rounded-2xl border bg-white p-6">
            <h2 className="font-display text-xl font-bold">Order Summary</h2>
            <div className="mt-4 space-y-3 text-sm text-gray-600">
              <div className="flex justify-between"><span>Items</span><span>{cart.length}</span></div>
              <div className="flex justify-between"><span>Subtotal</span><span>₦{cartTotal.toLocaleString()}</span></div>
              <div className="flex justify-between"><span>Shipping</span><span>₦{shipping.toLocaleString()}</span></div>
              <div className="flex justify-between border-t pt-3 font-bold text-slate-900"><span>Total</span><span>₦{(cartTotal + shipping).toLocaleString()}</span></div>
            </div>
            <button className="mt-6 w-full rounded-full bg-teal-600 px-6 py-3 font-semibold text-white hover:bg-teal-700">Place Order</button>
          </aside>
        </form>
      )}
    </main>
  );
}
