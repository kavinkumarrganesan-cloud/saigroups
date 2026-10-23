"use client";
import { useState } from "react";
import { businessConfig } from "@/config/business";
import { motion } from "framer-motion";

export function EventShowcase() {
  const [filter, setFilter] = useState("All");
  const cats = ["All", "Wedding", "Engagement", "Corporate", "Birthday", "Stage Decor"];
  const filtered = filter === "All" ? businessConfig.event.portfolio : businessConfig.event.portfolio.filter(p => p.type === filter);
  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {cats.map(c => (
          <button key={c} onClick={() => setFilter(c)} className={`rounded-full px-5 py-2 text-sm font-medium transition ${filter === c ? "bg-[#7C1C2B] text-white shadow" : "bg-white border border-black/10 text-black/70 hover:bg-black hover:text-white"}`}>{c}</button>
        ))}
      </div>
      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p, i) => (
          <motion.div key={p.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }} className="group overflow-hidden rounded-[22px] bg-white shadow-[0_12px_40px_rgba(0,0,0,0.08)] border border-black/5">
            <div className="relative h-[260px] overflow-hidden">
              <img src={p.image} alt={p.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.05]" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent" />
              <div className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-xs font-semibold">{p.type}</div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="text-lg font-semibold leading-none">{p.title}</div>
                <div className="mt-1 text-xs text-white/80">{p.location}</div>
              </div>
            </div>
            <div className="p-5">
              <p className="text-sm leading-6 text-black/60">{p.desc}</p>
              <a href="/contact" className="mt-4 inline-flex text-sm font-semibold text-[#7C1C2B]">Enquire for similar →</a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
