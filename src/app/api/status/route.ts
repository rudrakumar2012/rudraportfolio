import { NextResponse } from "next/server";

export async function GET() {
  const targetUrl = "https://stock-sage-ai-eight.vercel.app/";
  
  try {
    const response = await fetch(targetUrl, {
      method: "GET",
      next: { revalidate: 60 }, // Cache for 60 seconds
    });
    
    if (response.ok) {
      return NextResponse.json({ status: "LIVE" });
    } else {
      return NextResponse.json({ status: "OFFLINE" });
    }
  } catch (error) {
    return NextResponse.json({ status: "UNREACHABLE" });
  }
}
