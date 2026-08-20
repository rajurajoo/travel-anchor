import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { name, phone, email, destination, message } = body;

  if (!name || !phone) {
    return NextResponse.json({ error: "Name and phone are required" }, { status: 400 });
  }

  const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
  if (!accessKey) {
    console.error("WEB3FORMS_ACCESS_KEY is not set");
    return NextResponse.json({ error: "Enquiry service not configured" }, { status: 500 });
  }

  const res = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      access_key: accessKey,
      subject: `New enquiry from ${name}${destination ? ` — ${destination}` : ""}`,
      from_name: "Travel Anchor Tours & Travels",
      name,
      phone,
      email: email || "Not provided",
      destination: destination || "Not specified",
      message: message || "No message",
    }),
  });

  const data = await res.json();
  if (!data.success) {
    console.error("Web3Forms submission failed", data);
    return NextResponse.json({ error: "Failed to send enquiry" }, { status: 502 });
  }

  return NextResponse.json({ success: true });
}
