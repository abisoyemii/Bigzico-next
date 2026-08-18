import { NextResponse } from 'next/server';

export async function POST() {
  return NextResponse.json(
    {
      error: 'Product reviews are not available yet.',
    },
    { status: 501 }
  );
}