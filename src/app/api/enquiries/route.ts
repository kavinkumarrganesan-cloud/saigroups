import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import { enquiries } from "@/db/schema";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { type, name, phone, email, category, eventType, eventDate, venue, guests, budget, quantity, location, message } = body;
    if (!type || !name || !phone) return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    if (!["paint", "event", "general"].includes(type)) return NextResponse.json({ error: "Invalid type" }, { status: 400 });
    const [row] = await db.insert(enquiries).values({
      type, name: String(name).slice(0,120), phone: String(phone).slice(0,32), email: email ? String(email).slice(0,120) : null as any,
      category: category ? String(category).slice(0,120) : null as any,
      eventType: eventType ? String(eventType).slice(0,120) : null as any,
      eventDate: eventDate ? String(eventDate).slice(0,64) : null as any,
      venue: venue ? String(venue).slice(0,200) : null as any,
      guests: guests ? String(guests).slice(0,64) : null as any,
      budget: budget ? String(budget).slice(0,64) : null as any,
      quantity: quantity ? String(quantity).slice(0,120) : null as any,
      location: location ? String(location).slice(0,200) : null as any,
      message: message ? String(message) : null as any,
    }).returning();
    return NextResponse.json({ ok: true, id: row.id });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

export async function GET() {
  const rows = await db.select().from(enquiries).orderBy(enquiries.createdAt as any).limit(50);
  // simple: reverse
  return NextResponse.json({ enquiries: rows.reverse() });
}
