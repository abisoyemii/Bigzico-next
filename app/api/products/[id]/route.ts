import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  const product = await prisma.product.findUnique({
    where: { id },
    include: {
      category: true,
      reviews: {
        include: {
          user: {
            select: { id: true, name: true, email: true }
          }
        }
      }
    }
  });

  if (!product) {
    return NextResponse.json({ error: 'Product not found' }, { status: 404 });
  }

  return NextResponse.json(product);
}

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const body = await request.json();
  const { id } = await params;

  const product = await prisma.product.update({
    where: { id },
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
      isFeatured: body.isFeatured,
      isActive: body.isActive,
      tags: body.tags || [],
      warranty: body.warranty,
      dimensions: body.dimensions,
      weight: body.weight
    }
  });

  return NextResponse.json(product);
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  await prisma.product.delete({ where: { id } });

  return NextResponse.json({ success: true });
}
