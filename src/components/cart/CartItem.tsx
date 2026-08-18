import Link from 'next/link';
import type { CartItemType } from '@/types';

type CartItemProps = {
  item: CartItemType;
};

export function CartItem({ item }: CartItemProps) {
  return (
    <div className="flex items-center gap-4 rounded-[1.25rem] border border-slate-800 bg-slate-900/70 p-4">
      <img src={item.image} alt={item.name} className="h-20 w-20 rounded-xl object-cover" />
      <div className="flex-1">
        <Link href={`/products/${item.slug}`} className="text-lg font-semibold text-white transition hover:text-teal-300">
          {item.name}
        </Link>
        <p className="mt-2 text-sm text-slate-400">Qty: {item.quantity}</p>
        <p className="mt-2 text-sm font-semibold text-teal-300">₦{(item.price * item.quantity).toLocaleString()}</p>
      </div>
      <button className="rounded-full border border-slate-700 px-3 py-2 text-sm text-slate-300 transition hover:border-teal-400 hover:text-teal-300">
        Remove
      </button>
    </div>
  );
}
