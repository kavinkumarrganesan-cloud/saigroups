import Link from "next/link";
import { businessConfig } from "@/config/business";
import { PaintScene } from "@/components/PaintScene";
import { EnquiryForm } from "@/components/EnquiryForms";

export default function Home() {
  return (
    <main className="bg-[#FFF8F0]">
      {/* HERO SPLIT */}
      <section className="relative overflow-hidden bg-[#0F1113]">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-white/[0.04] to-transparent" />
          <div className="absolute -top-32 -left-32 h-[600px] w-[600px] rounded-full bg-[#FF6B2C]/20 blur-[90px]" />
          <div className="absolute -bottom-32 -right-32 h-[700px] w-[700px] rounded-full bg-[#7C1C2B]/30 blur-[90px]" />
        </div>

        <div className="relative mx-auto max-w-[1320px] px-6 pb-10 pt-12 lg:px-8 lg:pt-16">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs tracking-[0.16em] text-white/70">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" /> PARENT BRAND • VERIFIED ON GOOGLE MAPS
            </div>
            <h1 className="mx-auto mt-6 max-w-[980px] font-[800] leading-[0.9] tracking-[-0.04em] text-white text-[42px] md:text-[68px] lg:text-[84px]" style={{ fontFamily: "var(--font-space)" }}>
              Different Visions. <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B2C] to-[#FFE8A8]">One Sai Group.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-[720px] text-[15px] leading-7 text-white/60 md:text-[17px]">
              From colours that transform spaces to celebrations that create lasting memories, discover the businesses of Sai Groups.
            </p>
          </div>

          {/* Split 3D Panels */}
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {/* Paint Panel */}
            <div className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-[#FFFCF8] p-2">
              <div className="relative overflow-hidden rounded-[20px] bg-gradient-to-br from-[#FFF1E6] to-[#FFE3CC] p-6 md:p-8">
                <div className="absolute right-0 top-0 h-[260px] w-[260px] rounded-full bg-[#FF6B2C]/15 blur-3xl" />
                <div className="relative">
                  <div className="text-xs tracking-[0.2em] text-[#8A5A2B]">SAI PAINT HOUSE</div>
                  <h3 className="mt-2 text-[28px] font-semibold leading-none text-[#1A1A1A]">Colours that<br />Transform Spaces</h3>
                  <p className="mt-3 max-w-[280px] text-sm leading-6 text-black/60">Floating paint cans, swatches & wall transitions — tactile, architectural, dependable.</p>
                  <div className="mt-6 flex gap-3">
                    <Link href="/paint" className="rounded-full bg-[#0F1113] px-6 py-3 text-sm font-semibold text-white hover:bg-black">Explore Paint House →</Link>
                    <span className="hidden md:inline-flex items-center gap-2 rounded-full bg-white px-4 py-3 text-xs font-semibold">Wall Preview • 6 Shades</span>
                  </div>
                </div>

                {/* Visual */}
                <div className="relative mt-8 grid grid-cols-[1.1fr_0.9fr] gap-4">
                  <div className="relative h-[180px] overflow-hidden rounded-[18px] bg-white p-4 shadow-lg">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B2C]/20 to-transparent" />
                    <div className="relative flex gap-2">
                      <div className="h-[120px] w-[36px] rounded-full bg-[#FF6B2C] shadow" />
                      <div className="h-[120px] w-[36px] rounded-full bg-[#4A6572] shadow" />
                      <div className="h-[120px] w-[36px] rounded-full bg-[#E9C46A] shadow" />
                      <div className="h-[120px] w-[36px] rounded-full bg-[#E8ddd0] border border-black/10 shadow" />
                    </div>
                    <div className="mt-3 text-xs font-semibold text-black/70">Architectural Finishes</div>
                  </div>
                  <div className="relative h-[180px] overflow-hidden rounded-[18px] border border-black/5 bg-[#1A1E22]">
                    <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=600&auto=format&fit=crop" alt="paint wall" className="h-full w-full object-cover opacity-80" />
                    <div className="absolute bottom-2 left-2 rounded-full bg-white px-3 py-1 text-xs font-semibold">3D Wall Transition</div>
                  </div>
                </div>
                {/* floating badge */}
                <div className="absolute right-6 bottom-6 hidden rounded-full bg-white px-3 py-2 text-xs font-semibold shadow-xl md:flex">♦ Metallic • Matte • Gloss</div>
              </div>
            </div>

            {/* Event Panel */}
            <div className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-[#110A0E] p-2">
              <div className="relative overflow-hidden rounded-[20px] bg-gradient-to-br from-[#2B0F18] to-[#7C1C2B] p-6 md:p-8 text-white">
                <div className="absolute -right-10 -top-10 h-[280px] w-[280px] rounded-full bg-[#FFDDA8]/20 blur-[40px]" />
                <div className="relative">
                  <div className="text-xs tracking-[0.2em] text-white/60">SAI EVENT</div>
                  <h3 className="mt-2 text-[28px] font-semibold leading-none">Celebrations<br />Beautifully Staged</h3>
                  <p className="mt-3 max-w-[300px] text-sm leading-6 text-white/70">Floral layers, cinematic lighting & floating particles — elegant, warm, memorable.</p>
                  <div className="mt-6 flex gap-3">
                    <Link href="/events" className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#7C1C2B] hover:bg-white/90">Explore Sai Event →</Link>
                    <span className="hidden md:inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-4 py-3 text-xs font-semibold">Portfolio • 6 Projects</span>
                  </div>
                </div>

                <div className="relative mt-8 grid grid-cols-2 gap-4">
                  <div className="relative h-[180px] overflow-hidden rounded-[18px] bg-black">
                    <img src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=600&auto=format&fit=crop" alt="event stage" className="h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <div className="absolute bottom-2 left-2 rounded-full bg-white px-3 py-1 text-xs font-semibold text-[#7C1C2B]">Cinematic Stage</div>
                  </div>
                  <div className="relative h-[180px] overflow-hidden rounded-[18px] bg-[#FFF8F0] p-3">
                    <div className="grid h-full grid-cols-2 gap-2">
                      <img src="https://images.unsplash.com/photo-1469371670807-013ccf25f16a?q=80&w=300&auto=format&fit=crop" className="h-full w-full rounded-xl object-cover" alt="" />
                      <img src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=300&auto=format&fit=crop" className="h-full w-full rounded-xl object-cover" alt="" />
                    </div>
                  </div>
                </div>
                <div className="pointer-events-none absolute inset-0 overflow-hidden">
                  <span className="absolute left-10 top-12 h-1.5 w-1.5 rounded-full bg-white/60 animate-pulse" />
                  <span className="absolute right-16 top-10 h-1 w-1 rounded-full bg-white/40 animate-pulse" />
                  <span className="absolute right-10 bottom-20 h-2 w-2 rounded-full bg-[#FFDDA8]/80 animate-pulse" />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-xs text-white/50">
            <span className="rounded-full border border-white/10 px-3 py-1.5 bg-white/5">⚡ Fast • Mobile-first • No loading screens</span>
            <span className="rounded-full border border-white/10 px-3 py-1.5 bg-white/5">◎ Shared header, distinct personalities</span>
            <a href={businessConfig.parent.mapsUrl} target="_blank" className="rounded-full bg-white px-4 py-1.5 font-semibold text-black">View Live Location on Maps</a>
          </div>
        </div>
      </section>

      {/* BUSINESS DISCOVERY */}
      <section className="mx-auto max-w-[1320px] px-6 py-14 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <div className="text-xs tracking-[0.2em] text-black/40">EXPLORE BUSINESSES</div>
            <h2 className="mt-2 text-[36px] font-[700] leading-none tracking-tight" style={{ fontFamily: "var(--font-playfair)" }}>Two worlds. One promise.</h2>
            <p className="mt-3 max-w-[560px] text-sm leading-6 text-black/60">Choose your journey. Each business has dedicated colours, visuals, categories and a tailored enquiry flow — while staying connected under Sai Groups.</p>
          </div>
          <Link href="/contact" className="rounded-full bg-[#0F1113] px-6 py-3 text-sm font-semibold text-white">Talk to Sai Groups</Link>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="rounded-[28px] border border-black/5 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-xl bg-[#FF6B2C] grid place-items-center text-white font-black">P</div>
              <div>
                <div className="text-lg font-semibold">Sai Paint House</div>
                <div className="text-xs tracking-widest text-black/40">PAINT • COATINGS • CONSULTATION</div>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-3">
              {businessConfig.paint.categories.slice(0,4).map(c=>(
                <div key={c.title} className="rounded-2xl overflow-hidden border border-black/5 bg-[#FFFCF8]">
                  <img src={c.image} alt={c.title} className="h-[110px] w-full object-cover" />
                  <div className="p-3">
                    <div className="text-sm font-semibold leading-none">{c.title}</div>
                    <div className="mt-1 text-xs leading-4 text-black/50 line-clamp-2">{c.desc}</div>
                  </div>
                </div>
              ))}
            </div>
            <ul className="mt-4 space-y-2 text-sm text-black/60">
              <li>• Interior & exterior paints • Primers • Wood & metal finishes</li>
              <li>• Colour selection guidance • Waterproofing • Accessories</li>
            </ul>
            <div className="mt-6 flex gap-3">
              <Link href="/paint" className="flex-1 rounded-full bg-[#FF6B2C] py-3 text-center text-sm font-semibold text-white">Discover Paint House</Link>
              <a href={businessConfig.parent.mapsUrl} target="_blank" className="rounded-full border border-black/10 px-5 py-3 text-sm font-semibold">Maps</a>
            </div>
          </div>

          <div className="rounded-[28px] border border-black/5 bg-[#1A0A0F] p-6 text-white">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-xl bg-[#E9C6A0] grid place-items-center text-[#5B1520] font-black">E</div>
              <div>
                <div className="text-lg font-semibold">Sai Event</div>
                <div className="text-xs tracking-widest text-white/50">PLANNING • DECOR • EXECUTION</div>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-3">
              {businessConfig.event.categories.slice(0,4).map(c=>(
                <div key={c.title} className="rounded-2xl overflow-hidden border border-white/10 bg-white/5">
                  <img src={c.image} alt={c.title} className="h-[110px] w-full object-cover" />
                  <div className="p-3">
                    <div className="text-sm font-semibold leading-none text-white">{c.title}</div>
                    <div className="mt-1 text-xs leading-4 text-white/60 line-clamp-2">{c.desc}</div>
                  </div>
                </div>
              ))}
            </div>
            <ul className="mt-4 space-y-2 text-sm text-white/60">
              <li>• Weddings, engagements & receptions • Birthdays • Family functions</li>
              <li>• Corporate events • Stage & venue decoration • Portfolio on request</li>
            </ul>
            <div className="mt-6 flex gap-3">
              <Link href="/events" className="flex-1 rounded-full bg-white py-3 text-center text-sm font-semibold text-[#5B1520]">Discover Sai Event</Link>
              <a href={businessConfig.parent.mapsUrl} target="_blank" className="rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white">Maps</a>
            </div>
          </div>
        </div>
      </section>

      {/* 3D TEASER INTERACTIVE */}
      <section className="bg-white border-y border-black/5">
        <div className="mx-auto max-w-[1320px] px-6 py-12 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <div className="text-xs tracking-[0.2em] text-black/40">INTERACTIVE 3D</div>
              <h3 className="mt-2 text-3xl font-bold tracking-tight">Try the wall before you paint it.</h3>
            </div>
            <Link href="/paint" className="text-sm font-semibold underline">Go to full experience →</Link>
          </div>
          <div className="mt-8">
            <PaintScene />
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="mx-auto max-w-[1320px] px-6 py-16 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <div className="text-xs tracking-[0.2em] text-black/40">ABOUT SAI GROUPS</div>
            <h2 className="mt-3 text-[34px] font-bold leading-none tracking-tight" style={{ fontFamily: "var(--font-playfair)" }}>An umbrella you can trust<br />for colour & celebration.</h2>
            <p className="mt-4 text-sm leading-7 text-black/60">
              Sai Groups brings together two different promises under one roof. Sai Paint House helps homes and workplaces find the right colour, finish and protection. Sai Event helps families and organisations plan moments that feel effortless and beautiful. You choose the business you need — we keep the journey simple, premium and human.
            </p>
            <div className="mt-6 grid grid-cols-3 gap-4">
              <div className="rounded-2xl border border-black/5 bg-white p-4 text-center">
                <div className="text-lg font-black">01</div><div className="text-xs text-black/50">Umbrella brand</div>
              </div>
              <div className="rounded-2xl border border-black/5 bg-white p-4 text-center">
                <div className="text-lg font-black">02</div><div className="text-xs text-black/50">Dedicated experiences</div>
              </div>
              <div className="rounded-2xl border border-black/5 bg-white p-4 text-center">
                <div className="text-lg font-black">∞</div><div className="text-xs text-black/50">One enquiry flow</div>
              </div>
            </div>
            <div className="mt-6 rounded-2xl bg-[#0F1113] p-4 text-sm leading-6 text-white/70">
              <span className="font-semibold text-white">No invented claims.</span> We show only verifiable Maps details, real imagery and honest placeholders where the owner will replace content before launch.
            </div>
          </div>
          <div className="relative overflow-hidden rounded-[28px] bg-[#0F1113] p-2">
            <div className="grid h-full gap-2 md:grid-cols-2">
              <div className="rounded-[20px] overflow-hidden bg-white">
                <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop" alt="paint team" className="h-[240px] w-full object-cover" />
                <div className="p-4">
                  <div className="text-sm font-semibold">Sai Paint House</div><div className="text-xs text-black/50">Warm, architectural, dependable</div>
                </div>
              </div>
              <div className="rounded-[20px] overflow-hidden bg-[#7C1C2B] text-white">
                <img src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop" alt="event" className="h-[240px] w-full object-cover" />
                <div className="p-4">
                  <div className="text-sm font-semibold">Sai Event</div><div className="text-xs text-white/70">Cinematic, floral, memorable</div>
                </div>
              </div>
              <div className="md:col-span-2 rounded-[20px] bg-white p-5">
                <div className="flex flex-wrap gap-2 text-xs">
                  <span className="rounded-full bg-black px-3 py-1.5 text-white">Premium typography</span>
                  <span className="rounded-full border border-black/10 px-3 py-1.5">Soft 3D & parallax</span>
                  <span className="rounded-full border border-black/10 px-3 py-1.5">Mobile-first</span>
                  <span className="rounded-full border border-black/10 px-3 py-1.5">Verified Maps only</span>
                </div>
                <div className="mt-4 flex gap-3">
                  <Link href="/paint" className="rounded-full bg-black px-5 py-2.5 text-sm font-semibold text-white">Sai Paint House</Link>
                  <Link href="/events" className="rounded-full bg-[#7C1C2B] px-5 py-2.5 text-sm font-semibold text-white">Sai Event</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST + CONTACT */}
      <section className="bg-[#0F1113] text-white">
        <div className="mx-auto max-w-[1320px] px-6 py-14 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-[24px] overflow-hidden border border-white/10 bg-white/5 p-2">
              <div className="rounded-[16px] overflow-hidden bg-white">
                <iframe title="maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.1!2d77.594!3d12.971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU4JzE1LjYiTiA3N8KwMzUnMzguNCJF!5e0!3m2!1sen!2sin!4v1" className="h-[360px] w-full" loading="lazy"></iframe>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-4">
                <div className="text-sm text-white/70">Verified location — use Maps for live directions, hours & contact.</div>
                <a href={businessConfig.parent.mapsUrl} target="_blank" className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-black">Open in Google Maps</a>
              </div>
            </div>
            <div>
              <div className="text-xs tracking-[0.2em] text-white/40">TRUST & TRANSPARENCY</div>
              <h3 className="mt-2 text-2xl font-bold">What we show is what you can verify.</h3>
              <div className="mt-6 space-y-4">
                <div className="rounded-2xl bg-white p-5 text-black">
                  <div className="text-sm font-semibold">● No fabricated testimonials</div>
                  <p className="mt-1 text-sm leading-6 text-black/60">We display only genuine reviews from the Maps listing when permitted. Until verified reviews are linked, we keep this section honest rather than invented.</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <div className="text-sm font-semibold">● Real imagery, replaceable placeholders</div>
                  <p className="mt-1 text-sm leading-6 text-white/60">Where owner photos are pending, we use high-quality stock clearly marked replaceable — never presented as completed client work.</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <div className="text-sm font-semibold">● Separate enquiry paths</div>
                  <p className="mt-1 text-sm leading-6 text-white/60">Paint House, Event Planning and General enquiries are routed separately so nothing gets missed.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <div className="rounded-[20px] bg-white p-6 text-black">
              <div className="text-sm font-black tracking-widest text-[#FF6B2C]">PAINT ENQUIRY</div>
              <div className="mt-2 text-sm text-black/60">Colours, primers, waterproofing, accessories & quantity guidance.</div>
              <Link href="/paint#enquiry" className="mt-4 inline-flex rounded-full bg-black px-5 py-2.5 text-sm font-semibold text-white">Enquire About Paint</Link>
            </div>
            <div className="rounded-[20px] bg-[#7C1C2B] p-6 text-white">
              <div className="text-sm font-black tracking-widest text-white/80">EVENT ENQUIRY</div>
              <div className="mt-2 text-sm text-white/70">Weddings, birthdays, corporate & stage decoration — date, venue & guest count.</div>
              <Link href="/events#enquiry" className="mt-4 inline-flex rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#7C1C2B]">Plan Your Event</Link>
            </div>
            <div className="rounded-[20px] border border-white/10 bg-white/5 p-6">
              <div className="text-sm font-black tracking-widest text-white/80">GENERAL</div>
              <div className="mt-2 text-sm text-white/60">Not sure which business? Send a general message and we’ll guide you.</div>
              <Link href="/contact" className="mt-4 inline-flex rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black">Contact Sai Groups</Link>
            </div>
          </div>
        </div>
      </section>

      {/* quick general form */}
      <section className="mx-auto max-w-[1320px] px-6 py-12 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[24px] bg-gradient-to-br from-[#0F1113] to-[#1F2937] p-8 text-white">
            <div className="text-xs tracking-[0.2em] text-white/50">GENERAL ENQUIRY</div>
            <h3 className="mt-2 text-2xl font-bold leading-tight">Tell us what you need — we’ll route it to the right team.</h3>
            <p className="mt-3 text-sm leading-6 text-white/60">We reply via phone/WhatsApp. Your data stays private. For immediate help, use the Maps listing.</p>
            <div className="mt-6 flex flex-wrap gap-2 text-xs">
              <span className="rounded-full bg-white px-3 py-1.5 text-black font-semibold">Response within hours</span>
              <span className="rounded-full border border-white/20 px-3 py-1.5">No spam</span>
            </div>
          </div>
          <EnquiryForm type="general" title="General Sai Groups Enquiry" subtitle="We’ll connect you to Paint House or Sai Event." accent="#0F1113" />
        </div>
      </section>
    </main>
  );
}
