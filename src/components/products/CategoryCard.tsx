import Link from 'next/link';
import type { Category } from '@/types';

type CategoryCardProps = {
  category: Category;
};

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link href={`/categories/${category.slug}`} className="group overflow-hidden rounded-[1.5rem] border border-slate-800 bg-slate-900/70 shadow-lg shadow-black/10 transition hover:-translate-y-1 hover:border-teal-400/40">
      <img src={category.image} alt={category.name} className="h-44 w-full object-cover" />
      <div className="p-5">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-white">{category.name}</h3>
          <span className="text-sm text-teal-300">{category.productCount} items</span>
        </div>
        <p className="mt-3 text-sm leading-6 text-slate-400">{category.description}</p>
      </div>
    </Link>
  );
}
