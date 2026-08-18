const categoryAliases: Record<string, string> = {
  refrigerators: 'Refrigerators',
  fridge: 'Refrigerators',
  'refrigerator': 'Refrigerators',
  freezers: 'Freezers',
  freezer: 'Freezers',
  'air-conditioners': 'Air Conditioners',
  'air conditioners': 'Air Conditioners',
  ac: 'Air Conditioners',
  washingmachines: 'Washing Machines',
  'washing machines': 'Washing Machines',
  televisions: 'Televisions',
  tv: 'Televisions',
  microwave: 'Microwaves',
  microwaves: 'Microwaves',
  generators: 'Generators',
  kitchenappliances: 'Kitchen Appliances',
  'kitchen appliances': 'Kitchen Appliances',
  blender: 'Kitchen Appliances',
  'small-appliances': 'Kitchen Appliances',
  laptops: 'Laptops',
  smartphone: 'Smartphones',
  smartphones: 'Smartphones',
  'others': 'Others',
  general: 'Others',
};

export function mapCategory(rawCategory?: string | null): { category: string; categorySlug: string } {
  const key = (rawCategory || 'others').trim().toLowerCase();
  const category = categoryAliases[key] || 'Others';
  const categorySlug = category.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'others';

  return { category, categorySlug };
}
