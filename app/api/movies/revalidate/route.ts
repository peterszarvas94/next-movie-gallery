import { NextRequest, NextResponse } from 'next/server';
import { revalidateTag } from 'next/cache';

export async function GET(_request: NextRequest) {
  revalidateTag("movies");
  return NextResponse.json({ tag: "movies", revalidated: true, now: Date.now() });
}
