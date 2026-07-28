import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  const products = await prisma.product.findMany({
    include: {
      category: true,
      reviews: true
    },
    orderBy: { createdAt: 'desc' }
  });

  return NextResponse.json(products);
}

export async function POST(request: Request) {
  const body = await request.json();

  const product = await prisma.product.create({
    data: {
      name: body.name,
      slug: body.slug,
      description: body.description,
      shortDescription: body.shortDescription,
      price: body.price,
      compareAtPrice: body.compareAtPrice,
      stock: body.stock,
      sku: body.sku,
      brand: body.brand,
      categoryId: body.categoryId,
      images: body.images || [],
      thumbnail: body.thumbnail,
      isFeatured: body.isFeatured ?? false,
      isActive: body.isActive ?? true,
      tags: body.tags || [],
      warranty: body.warranty,
      dimensions: body.dimensions,
      weight: body.weight,
      rating: 0,
      reviewCount: 0
    }
  });

  return NextResponse.json(product, { status: 201 });
}
