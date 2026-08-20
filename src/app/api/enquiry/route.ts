import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { name, phone, email, destination, message } = body;

  if (!name || !phone) {
    return NextResponse.json({ error: "Name and phone are required" }, { status: 400 });
  }

  const apiUrl = process.env.CRM_API_URL;
  const apiKey = process.env.CRM_API_KEY;
  if (!apiUrl || !apiKey) {
    console.error("CRM_API_URL / CRM_API_KEY is not set");
    return NextResponse.json({ error: "Enquiry service not configured" }, { status: 500 });
  }

  const res = await fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-API-Key": apiKey,
    },
    body: JSON.stringify({
      name,
      phone,
      email: email || undefined,
      destination: destination || undefined,
      message: message || undefined,
      source: "Website",
    }),
  });

  if (!res.ok) {
    const errorBody = await res.text();
    console.error("CRM lead submission failed", res.status, errorBody);
    return NextResponse.json({ error: "Failed to send enquiry" }, { status: 502 });
  }

  return NextResponse.json({ success: true });
}
