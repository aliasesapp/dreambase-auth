import { NextResponse } from "next/server";

export const runtime = 'edge';

// Hello world API route
export async function GET() {
  return NextResponse.json({ message: 'Hello, world!' });
}
