import Link from "next/link";
import { businessConfig } from "@/config/business";

export function Footer() {
  return (
    <footer className="bg-[#0A0C0E] text-white">
      <div className="mx-auto max-w-[1320px] px-6 py-12 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="text-lg font-black tracking-[0.16em]">SAI GROUPS</div>
            <p className="mt-3 max-w-[520px] text-sm leading-6 text-white/60">
              Different Visions. One Sai Group. Premium paint solutions and memorable event experiences — united under one trusted umbrella.
            </p>
            <a href={businessConfig.parent.mapsUrl} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm text-white hover:bg-white hover:text-black transition">
              <span>●</span> View on Google Maps — Directions
            </a>
            <p className="mt-3 text-xs text-white/40">{businessConfig.parent.verifiedNote}</p>
          </div>
          <div>
            <div className="text-sm font-semibold tracking-widest text-white/80">BUSINESSES</div>
            <div className="mt-4 flex flex-col gap-2 text-sm text-white/60">
              <Link href="/paint" className="hover:text-white">Sai Paint House</Link>
              <Link href="/events" className="hover:text-white">Sai Event</Link>
              <Link href="/about" className="hover:text-white">About Sai Groups</Link>
              <Link href="/contact" className="hover:text-white">Contact & Enquiries</Link>
            </div>
          </div>
          <div>
            <div className="text-sm font-semibold tracking-widest text-white/80">ENQUIRE</div>
            <div className="mt-4 flex flex-col gap-2 text-sm text-white/60">
              <span>Paint House Enquiry → /paint</span>
              <span>Event Booking → /events</span>
              <span>General → /contact</span>
              <span className="mt-2 text-xs text-white/40">No phone/address is invented. Verify via Maps listing. Replace placeholders before launch.</span>
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/40 md:flex-row md:justify-between">
          <span>© {new Date().getFullYear()} Sai Groups. All rights reserved. Content configuration editable by owner.</span>
          <span>Built as premium custom experience — not a template.</span>
        </div>
      </div>
    </footer>
  );
}
