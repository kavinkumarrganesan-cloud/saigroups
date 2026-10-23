import { businessConfig } from "@/config/business";
import { PaintScene } from "@/components/PaintScene";
import { EnquiryForm } from "@/components/EnquiryForms";
import Link from "next/link";

export const metadata = {
  title: "Sai Paint House — Colours, Finishes & Painting Solutions",
  description: "Explore interior & exterior paints, primers, wood & metal finishes, waterproofing and accessories at Sai Paint House — part of Sai Groups.",
};

export default function PaintPage() {
  return (
    <main className="bg-[#FFF8F0]">
      <section className="relative overflow-hidden bg-[#0F1113] text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B2C]/20 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-[1320px] px-6 py-12 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs tracking-widest text-white/70">SAI PAINT HOUSE • SAI GROUPS</div>
              <h1 className="mt-4 text-[48px] font-[800] leading-[0.9] tracking-tight md:text-[60px]" style={{ fontFamily: "var(--font-space)" }}>{businessConfig.paint.headline}</h1>
              <p className="mt-4 max-w-[540px] text-sm leading-7 text-white/65">{businessConfig.paint.sub} Warm white, charcoal and stone — with a vibrant Sai accent for confidence.</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#enquiry" className="rounded-full bg-[#FF6B2C] px-6 py-3 text-sm font-semibold text-white">Enquire About Paint</a>
                <a href="#products" className="rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white">Explore Products</a>
              </div>
              <div className="mt-6 flex flex-wrap gap-2 text-xs text-white/60">
                <span className="rounded-full border border-white/15 px-3 py-1.5">Interior & Exterior</span>
                <span className="rounded-full border border-white/15 px-3 py-1.5">Primers & Waterproofing</span>
                <span className="rounded-full border border-white/15 px-3 py-1.5">Colour Consultation</span>
              </div>
            </div>
            <div className="relative rounded-[24px] bg-white p-2">
              <img src="https://images.unsplash.com/photo-1562259949-e8e7689d7828?q=80&w=900&auto=format&fit=crop" alt="paint store" className="h-[360px] w-full rounded-[16px] object-cover" />
              <div className="absolute bottom-6 left-6 rounded-2xl bg-[#0F1113] px-5 py-4 text-white shadow-xl">
                <div className="text-xs tracking-widest text-white/60">IN-STORE PROMISE</div>
                <div className="mt-1 text-sm font-semibold">Guidance on shades, finishes & quantities — no guesswork.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1320px] px-6 py-10 lg:px-8">
        <PaintScene />
        <p className="mt-3 text-center text-xs text-black/40">Interactive colour-preview: realistic materials, soft shadows, scroll-friendly and respectful of reduced-motion.</p>
      </section>

      <section id="products" className="mx-auto max-w-[1320px] px-6 py-8 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="text-xs tracking-[0.2em] text-black/40">PRODUCT & SERVICE CATEGORIES</div>
            <h2 className="mt-2 text-[30px] font-bold tracking-tight">Editable catalogue — owner can update anytime.</h2>
            <p className="mt-2 text-sm text-black/60">Inventory shown is based on typical paint retail structure. Only confirmed items are presented as guaranteed offerings; placeholders are marked replaceable.</p>
          </div>
          <Link href="#enquiry" className="rounded-full bg-black px-5 py-2.5 text-sm font-semibold text-white">Request Details</Link>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {businessConfig.paint.categories.map((c) => (
            <div key={c.title} className="group overflow-hidden rounded-[22px] bg-white border border-black/5 shadow-sm hover:shadow-xl transition">
              <div className="relative h-[200px] overflow-hidden">
                <img src={c.image} alt={c.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                <span className="absolute left-3 top-3 rounded-full bg-white px-3 py-1 text-xs font-semibold">{c.title}</span>
              </div>
              <div className="p-5">
                <p className="text-sm leading-6 text-black/60">{c.desc}</p>
                <p className="mt-2 text-xs text-black/40">{c.note}</p>
                <a href="#enquiry" className="mt-4 inline-flex rounded-full bg-[#0F1113] px-4 py-2 text-xs font-semibold text-white">Enquire Now</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white border-y border-black/5">
        <div className="mx-auto max-w-[1320px] px-6 py-10 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="rounded-2xl bg-[#FFF1E6] p-6 border border-[#FF6B2C]/20">
              <div className="text-sm font-semibold">Colour Consultation</div>
              <p className="mt-1 text-sm text-black/60">Bring photos of your space. We’ll suggest palettes, finishes and quantities — not just product names.</p>
            </div>
            <div className="rounded-2xl bg-[#0F1113] p-6 text-white">
              <div className="text-sm font-semibold">Quantity Guidance</div>
              <p className="mt-1 text-sm text-white/60">Tell us area in sq ft or BHK size; we estimate litres needed and wastage — honest, no overselling.</p>
            </div>
            <div className="rounded-2xl bg-white border border-black/10 p-6">
              <div className="text-sm font-semibold">After-Sales Support</div>
              <p className="mt-1 text-sm text-black/60">Reorder codes saved. Touch-up shades matched quickly from your past selection.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="enquiry" className="mx-auto max-w-[1320px] px-6 py-12 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.05fr]">
          <div>
            <div className="text-xs tracking-[0.2em] text-black/40">PAINT HOUSE ENQUIRY</div>
            <h3 className="mt-2 text-3xl font-bold leading-tight">Let’s get your walls ready.</h3>
            <p className="mt-3 text-sm leading-7 text-black/60">Share what you’re painting and where. We’ll respond with options, pricing guidance and availability. No fake instant quote — real help.</p>
            <div className="mt-6 rounded-2xl border border-black/10 bg-white p-4 text-sm">
              <div className="font-semibold">Prefer Maps?</div>
              <a href={businessConfig.parent.mapsUrl} target="_blank" className="text-[#FF6B2C] underline">Open Sai Groups on Google Maps for directions & hours →</a>
            </div>
          </div>
          <EnquiryForm type="paint" title="Request Paint Details" subtitle="We’ll call/WhatsApp with the right shades and quantities." accent="#FF6B2C" />
        </div>
      </section>
    </main>
  );
}
