import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, message } = body;

  if (!name || !email || !message) {
    return NextResponse.json({ message: "Something is wrong" }, { status: 400 });
  }

  return NextResponse.json({ message: "Thank you for message" }, { status: 200 });
}