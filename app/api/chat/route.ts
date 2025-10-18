import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { message } = await request.json();

  const reply = `You said: "${message}"`;

  return NextResponse.json({ reply });
}
