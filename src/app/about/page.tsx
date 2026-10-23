import { businessConfig } from "@/config/business";
import Link from "next/link";

export const metadata = { title: "About Sai Groups — Umbrella Brand" };

export default function AboutPage() {
  return (
    <main className="bg-[#FFF8F0]">
      <section className="mx-auto max-w-[1320px] px-6 py-12 lg:px-8">
        <div className="rounded-[28px] bg-[#0F1113] p-8 text-white md:p-10">
          <div className="text-xs tracking-[0.2em] text-white/50">ABOUT SAI GROUPS</div>
          <h1 className="mt-3 max-w-[800px] text-[38px] font-bold leading-[0.95] md:text-[48px]" style={{ fontFamily: "var(--font-playfair)" }}>Two businesses. One trusted group — built for your walls and your moments.</h1>
          <p className="mt-4 max-w-[700px] text-sm leading-7 text-white/70">Sai Groups exists to make choice simple. Instead of hunting for separate providers, you land on one premium gateway and pick the right expert: Sai Paint House for colour or Sai Event for celebrations. Shared trust, distinct craft.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/paint" className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black">Sai Paint House</Link>
            <Link href="/events" className="rounded-full bg-[#7C1C2B] px-6 py-3 text-sm font-semibold text-white">Sai Event</Link>
          </div>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          <div className="rounded-[22px] bg-white border border-black/5 p-6">
            <div className="text-sm font-semibold">Why an umbrella?</div>
            <p className="mt-2 text-sm leading-7 text-black/60">Different skills, one standard. Paint needs technical guidance; events need emotional intelligence. Sai Groups keeps both under one promise: clear information, honest pricing guidance, and human follow-through.</p>
          </div>
          <div className="rounded-[22px] bg-white border border-black/5 p-6">
            <div className="text-sm font-semibold">How it works</div>
            <p className="mt-2 text-sm leading-7 text-black/60">Visit Home to choose. Each business page has its own palette, story and enquiry flow. Your message goes to the right team — no confusion, no dead ends.</p>
          </div>
          <div className="rounded-[22px] bg-[#FFF1E6] border border-black/5 p-6">
            <div className="text-sm font-semibold">Transparency first</div>
            <p className="mt-2 text-sm leading-7 text-black/60">We never invent addresses, phone numbers, brands, reviews or guarantees. Everything is verified via Maps or marked as placeholder for the owner to replace before launch.</p>
          </div>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="rounded-[24px] bg-white border border-black/5 p-6">
            <h3 className="text-lg font-semibold">Content is editable by the owner</h3>
            <ul className="mt-3 space-y-2 text-sm text-black/60">
              <li>• Business names, logos, contact numbers, Maps link</li>
              <li>• Product & event categories, portfolio images</li>
              <li>• Hours, social links, enquiry destinations</li>
              <li>• Theme tokens (colours, typography) per business</li>
            </ul>
            <p className="mt-4 text-xs text-black/40">All of this lives in <code>src/config/business.ts</code> — no code rewrite needed.</p>
          </div>
          <div className="rounded-[24px] overflow-hidden bg-white border border-black/5">
            <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop" alt="about" className="h-[260px] w-full object-cover" />
            <div className="p-6">
              <div className="text-sm font-semibold">A premium, custom feel</div>
              <p className="mt-1 text-sm text-black/60">No generic template. Strong hierarchy, cinematic transitions, subtle 3D and fast performance — designed for trust, not just looks.</p>
              <a href={businessConfig.parent.mapsUrl} target="_blank" className="mt-3 inline-flex rounded-full bg-black px-5 py-2 text-sm font-semibold text-white">Verify on Google Maps</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
