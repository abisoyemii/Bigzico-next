import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const body = await request.json();
  const { id } = await params;

  const review = await prisma.review.create({
    data: {
      productId: id,
      userId: body.userId,
      rating: body.rating,
      title: body.title,
      comment: body.comment,
      isApproved: true
    }
  });

  return NextResponse.json(review, { status: 201 });
}
