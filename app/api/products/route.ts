import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { serializeProduct } from '@/lib/product-serializer';

export async function GET() {
  try {
    const products = await prisma.products.findMany({
      where: {
        is_active: true,
      },
      orderBy: {
        created_at: 'desc',
      },
    });

    return NextResponse.json(products.map(serializeProduct));
  } catch (error) {
    console.error('GET /api/products error:', error);

    return NextResponse.json(
      { error: 'Failed to fetch products' },
      { status: 500 }
    );
  }
}
