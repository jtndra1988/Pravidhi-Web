import { NextResponse } from "next/server";

function isEmail(s: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
}

export async function POST(req: Request) {
  const body = (await req.json().catch(() => null)) as Record<string, string> | null;
  if (!body) return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });

  const required = ["name", "email", "department", "state", "org", "scope"];
  for (const k of required) {
    if (!String(body[k] || "").trim()) {
      return NextResponse.json({ error: `Missing field: ${k}` }, { status: 400 });
    }
  }
  if (!isEmail(String(body.email))) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  // Placeholder: integrate with email/CRM later.
  // For now we simply accept and return success.
  return NextResponse.json({ ok: true });
}
