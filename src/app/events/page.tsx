import { businessConfig } from "@/config/business";
import { EventShowcase } from "@/components/EventShowcase";
import { EnquiryForm } from "@/components/EnquiryForms";

export const metadata = {
  title: "Sai Event — Planning, Decoration & Experiences",
  description: "Sai Event by Sai Groups: weddings, engagements, birthdays, family functions, corporate events and stage decoration — thoughtfully planned and beautifully executed.",
};

export default function EventsPage() {
  return (
    <main className="bg-[#FFF8F0]">
      <section className="relative overflow-hidden bg-[#140A10] text-white">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1600&auto=format&fit=crop" alt="hero" className="h-full w-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#140A10] via-[#140A10]/60 to-transparent" />
        </div>
        <div className="relative mx-auto max-w-[1320px] px-6 py-12 lg:px-8 lg:py-16">
          <div className="max-w-[760px]">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs tracking-widest text-white/70">SAI EVENT • SAI GROUPS</div>
            <h1 className="mt-4 text-[48px] font-bold leading-[0.9] tracking-tight md:text-[64px]" style={{ fontFamily: "var(--font-playfair)" }}>{businessConfig.event.headline}</h1>
            <p className="mt-4 max-w-[560px] text-sm leading-7 text-white/70">{businessConfig.event.sub}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#enquiry" className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#7C1C2B]">Plan Your Event</a>
              <a href="#work" className="rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur">Explore Our Work</a>
            </div>
            <div className="mt-6 flex flex-wrap gap-2 text-xs text-white/60">
              <span className="rounded-full border border-white/15 px-3 py-1.5">Floral Layers</span>
              <span className="rounded-full border border-white/15 px-3 py-1.5">Warm Lighting</span>
              <span className="rounded-full border border-white/15 px-3 py-1.5">Editorial Grids</span>
            </div>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <div className="rounded-[20px] bg-white/95 p-5 text-black backdrop-blur">
              <div className="text-xs tracking-widest text-black/40">SIGNATURE</div>
              <div className="mt-1 text-sm font-semibold">Layered image transitions & scroll reveals — never excessive.</div>
            </div>
            <div className="rounded-[20px] bg-[#7C1C2B] p-5 text-white">
              <div className="text-xs tracking-widest text-white/70">PALETTE</div>
              <div className="mt-1 text-sm font-semibold">Burgundy, champagne gold, ivory, blush & botanical green.</div>
            </div>
            <div className="rounded-[20px] bg-white/10 border border-white/15 p-5 text-white">
              <div className="text-xs tracking-widest text-white/60">TYPOGRAPHY</div>
              <div className="mt-1 text-sm font-semibold">Serif headings + clean sans — refined, readable, warm.</div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1320px] px-6 py-12 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="text-xs tracking-[0.2em] text-black/40">EVENT CATEGORIES</div>
            <h2 className="mt-2 text-3xl font-bold tracking-tight" style={{ fontFamily: "var(--font-playfair)" }}>Editable categories — only what you truly offer.</h2>
            <p className="mt-2 max-w-[600px] text-sm text-black/60">Owners can rename, reorder or hide categories. No invented services are displayed as guaranteed.</p>
          </div>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {businessConfig.event.categories.map(c => (
            <div key={c.title} className="group overflow-hidden rounded-[22px] bg-white border border-black/5">
              <div className="relative h-[220px] overflow-hidden">
                <img src={c.image} alt={c.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.05]" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-3 left-3 rounded-full bg-white px-3 py-1 text-xs font-semibold">{c.title}</div>
              </div>
              <div className="p-5">
                <p className="text-sm leading-6 text-black/60">{c.desc}</p>
                <a href="#enquiry" className="mt-3 inline-flex text-sm font-semibold text-[#7C1C2B]">Check availability →</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="work" className="bg-white border-y border-black/5">
        <div className="mx-auto max-w-[1320px] px-6 py-12 lg:px-8">
          <div className="text-xs tracking-[0.2em] text-black/40">PORTFOLIO</div>
          <h3 className="mt-2 text-3xl font-bold tracking-tight">A filterable editorial gallery.</h3>
          <p className="mt-2 max-w-[640px] text-sm text-black/60">Each project can include title, type, location (if approved), gallery, description and enquiry CTA. Replace stock with real Sai Event photos before claiming as client work.</p>
          <div className="mt-8">
            <EventShowcase />
          </div>
          <div className="mt-6 rounded-2xl border border-black/10 bg-[#FFF8F0] p-4 text-xs leading-5 text-black/60">Transparency: Until real project photos are linked, images are clearly temporary. We never represent concept imagery as completed work.</div>
        </div>
      </section>

      <section className="mx-auto max-w-[1320px] px-6 py-10 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-[20px] bg-[#1A0A0F] p-6 text-white">
            <div className="text-sm font-semibold">Our Approach</div>
            <p className="mt-2 text-sm leading-6 text-white/70">We listen first, then design the flow — entry, stage, seating and photo moments — so the day feels effortless.</p>
          </div>
          <div className="rounded-[20px] bg-white border border-black/5 p-6">
            <div className="text-sm font-semibold">What You Get</div>
            <p className="mt-2 text-sm leading-6 text-black/60">Mood boards, site visits (when needed), decor + lighting curation, vendor coordination and on-day execution.</p>
          </div>
          <div className="rounded-[20px] bg-[#FFEFD6] border border-black/5 p-6">
            <div className="text-sm font-semibold">Honest Pricing</div>
            <p className="mt-2 text-sm leading-6 text-black/60">Budget ranges, not fake fixed prices. Share guest count & venue — we propose a sensible scope.</p>
          </div>
        </div>
      </section>

      <section id="enquiry" className="mx-auto max-w-[1320px] px-6 pb-12 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.05fr]">
          <div className="rounded-[24px] bg-[#7C1C2B] p-8 text-white">
            <div className="text-xs tracking-[0.2em] text-white/60">EVENT BOOKING</div>
            <h3 className="mt-2 text-3xl font-bold leading-tight">Let’s design your celebration.</h3>
            <p className="mt-3 text-sm leading-7 text-white/70">Share event type, date and venue. We’ll check availability and propose a decor + execution plan — no commitment until you approve.</p>
            <div className="mt-6 rounded-2xl bg-white/10 border border-white/15 p-4">
              <div className="text-sm font-semibold">Quick link</div>
              <a href={businessConfig.parent.mapsUrl} target="_blank" className="text-sm underline text-white">View Sai Groups on Google Maps</a>
            </div>
          </div>
          <EnquiryForm type="event" title="Plan Your Event" subtitle="Weddings • Engagements • Birthdays • Corporate • Stage Decor" accent="#7C1C2B" />
        </div>
      </section>
    </main>
  );
}
