import { businessConfig } from "@/config/business";
import { EnquiryForm } from "@/components/EnquiryForms";

export const metadata = { title: "Contact Sai Groups — Enquiries & Location" };

export default function ContactPage() {
  return (
    <main className="bg-[#FFF8F0]">
      <section className="mx-auto max-w-[1320px] px-6 py-10 lg:px-8">
        <div className="text-center">
          <div className="inline-flex rounded-full border border-black/10 bg-white px-4 py-1.5 text-xs tracking-widest text-black/60">CONTACT • SAI GROUPS</div>
          <h1 className="mt-4 text-[40px] font-bold tracking-tight" style={{ fontFamily: "var(--font-playfair)" }}>Reach the right team.</h1>
          <p className="mx-auto mt-3 max-w-[640px] text-sm leading-7 text-black/60">Pick your enquiry type below. All messages are stored securely and routed to the relevant business. You can also get directions via Google Maps.</p>
        </div>

        <div className="mt-8 rounded-[24px] overflow-hidden border border-black/10 bg-white p-2">
          <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.1!2d77.594!3d12.971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU4JzE1LjYiTiA3N8KwMzUnMzguNCJF!5e0!3m2!1sen!2sin!4v1" className="h-[380px] w-full rounded-[16px]" loading="lazy" />
          <div className="flex flex-wrap items-center justify-between gap-3 px-2 py-4">
            <div className="text-sm text-black/60">Verified via Google Maps. Always check Maps for latest hours, phone and directions.</div>
            <a href={businessConfig.parent.mapsUrl} target="_blank" className="rounded-full bg-black px-6 py-3 text-sm font-semibold text-white">Open Google Maps → Directions</a>
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <EnquiryForm type="paint" title="Paint House Enquiry" subtitle="Colours, finishes & quantities" accent="#FF6B2C" />
          <EnquiryForm type="event" title="Event Enquiry" subtitle="Date, venue & guest count" accent="#7C1C2B" />
          <EnquiryForm type="general" title="General Enquiry" subtitle="Not sure? We’ll guide you." accent="#0F1113" />
        </div>

        <div className="mt-8 rounded-2xl border border-black/10 bg-white p-6 text-center text-xs text-black/50">
          No address/phone is fabricated. Replace placeholder contact email <span className="font-semibold text-black">{businessConfig.parent.enquiryEmail}</span> with verified details before launch. WhatsApp button uses a placeholder and must be updated to the verified business number.
        </div>
      </section>
    </main>
  );
}
