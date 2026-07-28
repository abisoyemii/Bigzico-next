"use client";

import { useState } from 'react';

export default function AdminProductsPage() {
  const [form, setForm] = useState({
    name: '',
    slug: '',
    description: '',
    shortDescription: '',
    price: '',
    compareAtPrice: '',
    stock: '',
    sku: '',
    brand: '',
    categoryId: '',
    thumbnail: '',
    images: '',
    tags: '',
    warranty: '',
    dimensions: '',
    weight: '',
    isFeatured: false,
    isActive: true
  });

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    window.alert(`${form.name || 'Product'} saved locally for preview.`);
  };

  return (
    <main className="page-transition mx-auto max-w-4xl px-4 py-12">
      <p className="text-sm font-semibold uppercase tracking-widest text-teal-600">Frontend preview</p>
      <h1 className="mt-2 font-display text-4xl font-bold">Admin Product Management</h1>
      <p className="mt-2 text-gray-600">This form currently previews the product workflow locally. Database persistence will be added after UI migration approval.</p>
      <form onSubmit={handleSubmit} className="mt-6 space-y-4 rounded-xl border p-6">
        <input className="w-full rounded border p-2" placeholder="Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
        <input className="w-full rounded border p-2" placeholder="Slug" value={form.slug} onChange={(e) => setForm({ ...form, slug: e.target.value })} />
        <textarea className="w-full rounded border p-2" placeholder="Description" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} />
        <input className="w-full rounded border p-2" placeholder="Short description" value={form.shortDescription} onChange={(e) => setForm({ ...form, shortDescription: e.target.value })} />
        <input className="w-full rounded border p-2" placeholder="Price" value={form.price} onChange={(e) => setForm({ ...form, price: e.target.value })} />
        <input className="w-full rounded border p-2" placeholder="Compare at price" value={form.compareAtPrice} onChange={(e) => setForm({ ...form, compareAtPrice: e.target.value })} />
        <input className="w-full rounded border p-2" placeholder="Stock" value={form.stock} onChange={(e) => setForm({ ...form, stock: e.target.value })} />
        <input className="w-full rounded border p-2" placeholder="SKU" value={form.sku} onChange={(e) => setForm({ ...form, sku: e.target.value })} />
        <input className="w-full rounded border p-2" placeholder="Brand" value={form.brand} onChange={(e) => setForm({ ...form, brand: e.target.value })} />
        <input className="w-full rounded border p-2" placeholder="Category ID" value={form.categoryId} onChange={(e) => setForm({ ...form, categoryId: e.target.value })} />
        <input className="w-full rounded border p-2" placeholder="Thumbnail URL" value={form.thumbnail} onChange={(e) => setForm({ ...form, thumbnail: e.target.value })} />
        <input className="w-full rounded border p-2" placeholder="Images (comma separated)" value={form.images} onChange={(e) => setForm({ ...form, images: e.target.value })} />
        <input className="w-full rounded border p-2" placeholder="Tags (comma separated)" value={form.tags} onChange={(e) => setForm({ ...form, tags: e.target.value })} />
        <input className="w-full rounded border p-2" placeholder="Warranty" value={form.warranty} onChange={(e) => setForm({ ...form, warranty: e.target.value })} />
        <input className="w-full rounded border p-2" placeholder="Dimensions" value={form.dimensions} onChange={(e) => setForm({ ...form, dimensions: e.target.value })} />
        <input className="w-full rounded border p-2" placeholder="Weight" value={form.weight} onChange={(e) => setForm({ ...form, weight: e.target.value })} />
        <label className="flex items-center gap-2">
          <input type="checkbox" checked={form.isFeatured} onChange={(e) => setForm({ ...form, isFeatured: e.target.checked })} />
          Featured
        </label>
        <label className="flex items-center gap-2">
          <input type="checkbox" checked={form.isActive} onChange={(e) => setForm({ ...form, isActive: e.target.checked })} />
          Active
        </label>
        <button className="rounded bg-black px-4 py-2 text-white" type="submit">Create product</button>
      </form>
    </main>
  );
}
