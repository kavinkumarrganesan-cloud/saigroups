"use client";
import { useState } from "react";

type Props = { type: "paint" | "event" | "general"; title: string; subtitle: string; accent?: string };

export function EnquiryForm({ type, title, subtitle, accent = "#0F1113" }: Props) {
  const [loading, setLoading] = useState(false);
  const [ok, setOk] = useState<string | null>(null);
  const [err, setErr] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const payload: any = Object.fromEntries(fd.entries());
    payload.type = type;
    if (!payload.name || !payload.phone) { setErr("Name and phone are required."); return; }
    if (String(payload.phone).length < 8) { setErr("Enter a valid phone number."); return; }
    setLoading(true); setErr(null); setOk(null);
    try {
      const res = await fetch("/api/enquiries", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed");
      setOk("Thank you — your enquiry was received. Our team will respond shortly.");
      (e.target as HTMLFormElement).reset();
    } catch (e: any) { setErr(e.message); } finally { setLoading(false); }
  }

  return (
    <form onSubmit={onSubmit} className="rounded-[24px] border border-black/10 bg-white p-6 shadow-[0_16px_40px_rgba(0,0,0,0.06)]">
      <div className="flex items-baseline justify-between gap-4">
        <div>
          <div className="text-lg font-semibold text-[#0F1213]">{title}</div>
          <div className="mt-1 text-sm text-black/60">{subtitle}</div>
        </div>
        <span className="hidden rounded-full px-3 py-1 text-xs font-semibold text-white md:inline-flex" style={{ background: accent }}>{type.toUpperCase()}</span>
      </div>
      <div className="mt-6 grid gap-4">
        <div className="grid gap-4 md:grid-cols-2">
          <label className="text-xs font-medium text-black/70">Full Name *<input name="name" required placeholder="Your name" className="mt-1 w-full rounded-xl border border-black/10 bg-[#FFFCF8] px-4 py-3 text-sm outline-none focus:border-black/30" /></label>
          <label className="text-xs font-medium text-black/70">Phone *<input name="phone" required placeholder="+91 …" className="mt-1 w-full rounded-xl border border-black/10 bg-[#FFFCF8] px-4 py-3 text-sm outline-none focus:border-black/30" /></label>
        </div>
        {type === "paint" ? (
          <>
            <div className="grid gap-4 md:grid-cols-2">
              <label className="text-xs font-medium text-black/70">Category<input name="category" placeholder="Interior / Exterior / Waterproofing" className="mt-1 w-full rounded-xl border border-black/10 bg-[#FFFCF8] px-4 py-3 text-sm outline-none" /></label>
              <label className="text-xs font-medium text-black/70">Approx. Quantity / Project Size<input name="quantity" placeholder="e.g., 2 BHK, 1800 sq ft" className="mt-1 w-full rounded-xl border border-black/10 bg-[#FFFCF8] px-4 py-3 text-sm outline-none" /></label>
            </div>
            <label className="text-xs font-medium text-black/70">Location<input name="location" placeholder="Area / City" className="mt-1 w-full rounded-xl border border-black/10 bg-[#FFFCF8] px-4 py-3 text-sm outline-none" /></label>
          </>
        ) : type === "event" ? (
          <>
            <div className="grid gap-4 md:grid-cols-2">
              <label className="text-xs font-medium text-black/70">Event Type<input name="eventType" placeholder="Wedding / Birthday / Corporate…" className="mt-1 w-full rounded-xl border border-black/10 bg-[#FFFCF8] px-4 py-3 text-sm outline-none" /></label>
              <label className="text-xs font-medium text-black/70">Preferred Date<input name="eventDate" type="date" className="mt-1 w-full rounded-xl border border-black/10 bg-[#FFFCF8] px-4 py-3 text-sm outline-none" /></label>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <label className="text-xs font-medium text-black/70">Venue / Location<input name="venue" placeholder="Hall, home, city" className="mt-1 w-full rounded-xl border border-black/10 bg-[#FFFCF8] px-4 py-3 text-sm outline-none" /></label>
              <label className="text-xs font-medium text-black/70">Guest Count<input name="guests" placeholder="e.g., 120" className="mt-1 w-full rounded-xl border border-black/10 bg-[#FFFCF8] px-4 py-3 text-sm outline-none" /></label>
            </div>
            <label className="text-xs font-medium text-black/70">Budget Range (optional)<select name="budget" className="mt-1 w-full rounded-xl border border-black/10 bg-[#FFFCF8] px-4 py-3 text-sm outline-none"><option value="">Select</option><option>Under ₹50k</option><option>₹50k - ₹1.5L</option><option>₹1.5L - ₹3L</option><option>₹3L+</option></select></label>
          </>
        ) : (
          <label className="text-xs font-medium text-black/70">Interested In<select name="category" className="mt-1 w-full rounded-xl border border-black/10 bg-[#FFFCF8] px-4 py-3 text-sm outline-none"><option value="">Select</option><option>Sai Paint House</option><option>Sai Event</option><option>Both</option></select></label>
        )}
        <label className="text-xs font-medium text-black/70">Message<textarea name="message" rows={4} placeholder="Tell us a bit more…" className="mt-1 w-full rounded-xl border border-black/10 bg-[#FFFCF8] px-4 py-3 text-sm outline-none" /></label>
        {err && <div className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">{err}</div>}
        {ok && <div className="rounded-xl bg-green-50 px-4 py-3 text-sm text-green-800">{ok}</div>}
        <button disabled={loading} className="rounded-full px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90 disabled:opacity-60" style={{ background: accent }}>{loading ? "Sending…" : "Send Enquiry"}</button>
        <p className="text-center text-xs text-black/40">We never share your details. Responses via phone/WhatsApp — verified number on request.</p>
      </div>
    </form>
  );
}
