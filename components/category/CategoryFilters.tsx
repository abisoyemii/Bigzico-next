export function CategoryFilters({ filters, activeFilter, onChange }: { filters: string[]; activeFilter: string; onChange: (filter: string) => void }) {
  return (
    <div className="flex flex-wrap gap-3">
      <button onClick={() => onChange('All')} className={`rounded-full px-4 py-2 text-sm font-semibold transition ${activeFilter === 'All' ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}>
        All
      </button>
      {filters.map((filter) => (
        <button key={filter} onClick={() => onChange(filter)} className={`rounded-full px-4 py-2 text-sm font-semibold transition ${activeFilter === filter ? 'bg-teal-600 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}>
          {filter}
        </button>
      ))}
    </div>
  );
}
