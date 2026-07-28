import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const categories = [
  {
    name: 'Refrigerators',
    slug: 'refrigerators',
    description: 'Energy-efficient fridge freezers for homes and offices.',
  },
  {
    name: 'Freezers',
    slug: 'freezers',
    description: 'Chest and upright freezers built for cold storage.',
  },
  {
    name: 'Air Conditioners',
    slug: 'air-conditioners',
    description: 'Cooling solutions for bedrooms, lounges, and commercial spaces.',
  },
  {
    name: 'Washing Machines',
    slug: 'washing-machines',
    description: 'Reliable automatic and semi-automatic washers.',
  },
  {
    name: 'Televisions',
    slug: 'televisions',
    description: 'Smart and LED televisions for entertainment.',
  },
  {
    name: 'Microwaves',
    slug: 'microwaves',
    description: 'Fast and efficient microwave ovens for modern kitchens.',
  },
  {
    name: 'Generators',
    slug: 'generators',
    description: 'Power backup solutions for homes and small businesses.',
  },
  {
    name: 'Kitchen Appliances',
    slug: 'kitchen-appliances',
    description: 'Cookers, blenders, and other essential kitchen tools.',
  },
];

const productTemplates = [
  {
    name: 'LG 2-Door Refrigerator',
    slug: 'lg-2-door-refrigerator',
    description: 'A spacious refrigerator with inverter cooling for Nigerian homes.',
    price: 485000,
    stock: 24,
    brand: 'LG',
    sku: 'LG-REF-001',
    thumbnail: 'https://res.cloudinary.com/demo/image/upload/v1710000000/bigzico/lg-fridge.jpg',
    images: [
      'https://res.cloudinary.com/demo/image/upload/v1710000000/bigzico/lg-fridge.jpg',
      'https://res.cloudinary.com/demo/image/upload/v1710000000/bigzico/lg-fridge-2.jpg',
    ],
    isFeatured: true,
  },
  {
    name: 'Samsung Frost Free Double Door',
    slug: 'samsung-frost-free-double-door',
    description: 'Elegant double-door refrigerator with efficient cooling performance.',
    price: 545000,
    stock: 18,
    brand: 'Samsung',
    sku: 'SAM-REF-002',
    thumbnail: 'https://res.cloudinary.com/demo/image/upload/v1710000000/bigzico/samsung-fridge.jpg',
    images: [
      'https://res.cloudinary.com/demo/image/upload/v1710000000/bigzico/samsung-fridge.jpg',
    ],
    isFeatured: false,
  },
  {
    name: 'Hisense Top Freezer Refrigerator',
    slug: 'hisense-top-freezer-refrigerator',
    description: 'Compact and durable fridge crafted for everyday household use.',
    price: 325000,
    stock: 31,
    brand: 'Hisense',
    sku: 'HIS-REF-003',
    thumbnail: 'https://res.cloudinary.com/demo/image/upload/v1710000000/bigzico/hisense-fridge.jpg',
    images: [
      'https://res.cloudinary.com/demo/image/upload/v1710000000/bigzico/hisense-fridge.jpg',
    ],
    isFeatured: false,
  },
];

async function main() {
  for (const category of categories) {
    const createdCategory = await prisma.category.upsert({
      where: { slug: category.slug },
      update: {},
      create: category,
    });

    for (const [index, product] of productTemplates.entries()) {
      const suffix = index + 1;
      await prisma.product.create({
        data: {
          name: `${product.name} - ${createdCategory.name}`,
          slug: `${product.slug}-${createdCategory.slug}-${suffix}`,
          description: product.description,
          shortDescription: product.description,
          price: product.price,
          stock: product.stock,
          sku: `${product.sku}-${suffix}`,
          brand: product.brand,
          categoryId: createdCategory.id,
          images: product.images,
          thumbnail: product.thumbnail,
          isFeatured: product.isFeatured,
          isActive: true,
          tags: [createdCategory.slug, product.brand.toLowerCase()],
          rating: 4.5,
          reviewCount: 5,
        },
      });
    }
  }
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
