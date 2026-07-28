"use client";

export function SearchBar({ value, onChange }: { value: string; onChange: (value: string) => void }) {
  return (
    <input
      value={value}
      onChange={(event) => onChange(event.target.value)}
      placeholder="Search products..."
      className="w-full rounded-lg border border-gray-300 px-4 py-2"
    />
  );
}
