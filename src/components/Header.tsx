"use client";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0F1113]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1320px] items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[#0F1113] font-black tracking-tighter text-[18px]">S</div>
          <div>
            <div className="text-[15px] font-[800] tracking-[0.14em] text-white">SAI GROUPS</div>
            <div className="text-[10px] tracking-[0.18em] text-white/60 -mt-1">TWO BUSINESSES • ONE TRUSTED GROUP</div>
          </div>
        </Link>
        <nav className="hidden items-center gap-7 text-sm lg:flex">
          <Link href="/" className="text-white/80 hover:text-white">Home</Link>
          <Link href="/paint" className="text-white/80 hover:text-white">Sai Paint House</Link>
          <Link href="/events" className="text-white/80 hover:text-white">Sai Event</Link>
          <Link href="/about" className="text-white/80 hover:text-white">About</Link>
          <Link href="/contact" className="text-white/80 hover:text-white">Contact</Link>
          <Link href="/contact" className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#0F1113] hover:bg-white/90">Enquire Now</Link>
        </nav>
        <button onClick={() => setOpen(!open)} className="lg:hidden rounded-full border border-white/20 px-4 py-2 text-white text-sm">
          {open ? "Close" : "Menu"}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden border-t border-white/10 bg-[#0F1113] lg:hidden">
            <div className="flex flex-col gap-4 px-6 py-6 text-white">
              <Link href="/" onClick={() => setOpen(false)}>Home</Link>
              <Link href="/paint" onClick={() => setOpen(false)}>Sai Paint House — Paint & Finishes</Link>
              <Link href="/events" onClick={() => setOpen(false)}>Sai Event — Planning & Decor</Link>
              <Link href="/about" onClick={() => setOpen(false)}>About Sai Groups</Link>
              <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
              <Link href="/contact" className="mt-2 rounded-full bg-white px-5 py-3 text-center font-semibold text-[#0F1113]">Enquire Now</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
