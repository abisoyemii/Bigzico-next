import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const product = await prisma.products.findUnique({
      where: { id },
    });

    if (!product) {
      return NextResponse.json(
        { error: 'Product not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(product);
  } catch (error) {
    console.error('GET /api/products/[id] error:', error);

    return NextResponse.json(
      { error: 'Failed to fetch product' },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const body = await request.json();
    const { id } = await params;

    const product = await prisma.products.update({
      where: { id },
      data: {
        name: body.name,
        slug: body.slug,
        description: body.description,
        short_description: body.shortDescription,
        price: body.price,
        compare_at_price: body.compareAtPrice,
        stock: body.stock,
        sku: body.sku,
        brand: body.brand,
        category_id: body.categoryId,
        images: body.images ?? [],
        thumbnail: body.thumbnail,
        is_featured: body.isFeatured ?? false,
        is_active: body.isActive ?? true,
        tags: body.tags ?? [],
        warranty: body.warranty,
        dimensions: body.dimensions,
        weight: body.weight,
      },
    });

    return NextResponse.json(product);
  } catch (error) {
    console.error('PUT /api/products/[id] error:', error);

    return NextResponse.json(
      { error: 'Failed to update product' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    await prisma.products.delete({
      where: { id },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('DELETE /api/products/[id] error:', error);

    return NextResponse.json(
      { error: 'Failed to delete product' },
      { status: 500 }
    );
  }
}