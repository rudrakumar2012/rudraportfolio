import { NextResponse } from "next/server";

export async function GET() {
  const targetUrl = process.env.STOCKSAGE_API_URL || "https://stock-sage-ai-eight.vercel.app/";

  try {
    const response = await fetch(targetUrl, {
      method: "GET",
      next: { revalidate: 60 },
      signal: AbortSignal.timeout(10000),
    });

    if (response.ok) {
      return NextResponse.json({ status: "LIVE" });
    } else {
      return NextResponse.json({ status: "OFFLINE" });
    }
  } catch {
    return NextResponse.json({ status: "UNREACHABLE" });
  }
}
