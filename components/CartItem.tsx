'use client';
import { useBigzicoStore } from '@/lib/store';
import type { CartItem as CartItemType } from '@/lib/store';

export function CartItem({ item }: { item: CartItemType }) {
  const { increaseQuantity, decreaseQuantity, removeFromCart } = useBigzicoStore();

  return (
    <div className="flex flex-col gap-4 rounded-2xl border bg-white p-4 sm:flex-row">
      <img src={item.product.images[0]} alt={item.product.name} className="h-28 w-full rounded-xl object-cover sm:w-28" />
      <div className="flex-1">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-wide text-teal-600">{item.product.brand}</p>
            <h2 className="mt-1 font-semibold">{item.product.name}</h2>
          </div>
          <button onClick={() => removeFromCart(item.product.id)} className="text-sm text-gray-500 hover:text-red-600">Remove</button>
        </div>
        <p className="mt-3 font-bold">₦{(item.product.price * item.quantity).toLocaleString()}</p>
        <div className="mt-3 flex items-center gap-2">
          <button onClick={() => decreaseQuantity(item.product.id)} className="h-8 w-8 rounded border">-</button>
          <span className="min-w-8 text-center">{item.quantity}</span>
          <button onClick={() => increaseQuantity(item.product.id)} className="h-8 w-8 rounded border">+</button>
        </div>
      </div>
    </div>
  );
}
