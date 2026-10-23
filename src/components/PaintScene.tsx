"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { businessConfig } from "@/config/business";

export function PaintScene() {
  const [color, setColor] = useState(businessConfig.paint.colors[2]);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  return (
    <div
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setX(((e.clientX - rect.left) / rect.width - 0.5) * 20);
        setY(((e.clientY - rect.top) / rect.height - 0.5) * 20);
      }}
      className="relative overflow-hidden rounded-[28px] border border-black/5 bg-[#FFF8F0] p-6 md:p-8 shadow-[0_30px_80px_rgba(0,0,0,0.12)]"
    >
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Wall */}
        <div className="relative">
          <div className="text-xs tracking-[0.18em] text-black/40">INTERACTIVE PREVIEW</div>
          <div className="mt-2 text-[22px] font-semibold leading-none text-[#0F1213]">Watch colour take over the wall</div>
          <div
            className="relative mt-6 h-[320px] overflow-hidden rounded-[20px] border border-black/10"
            style={{ background: "#ece7df" }}
          >
            {/* wall surface */}
            <motion.div
              animate={{ backgroundColor: color.hex }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="absolute inset-0"
            />
            {/* light gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/25 via-transparent to-black/10" />
            {/* window light */}
            <div className="absolute left-6 top-6 h-[140px] w-[180px] rounded-xl bg-white/60 blur-[1px] border border-white/80">
              <div className="grid h-full grid-cols-2 gap-2 p-3">
                <div className="rounded-lg bg-white/80" /><div className="rounded-lg bg-white/80" />
                <div className="rounded-lg bg-white/80" /><div className="rounded-lg bg-white/80" />
              </div>
            </div>
            <div className="absolute right-8 bottom-8 h-24 w-[280px] rounded-full bg-black/10 blur-2xl" />
            <div className="absolute bottom-0 left-0 right-0 h-[18px] bg-black/5" />
            <motion.div style={{ x, y }} className="absolute right-8 top-8 rounded-full bg-white px-3 py-1 text-xs font-semibold shadow">
              {color.name} • {color.hex}
            </motion.div>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {businessConfig.paint.colors.map((c) => (
              <button
                key={c.hex}
                onClick={() => setColor(c)}
                className={`h-10 w-10 rounded-full border-2 transition ${color.hex === c.hex ? "border-black scale-110" : "border-white shadow"}`}
                style={{ background: c.hex }}
                aria-label={c.name}
              />
            ))}
          </div>
          <div className="mt-2 text-xs text-black/50">Tap a swatch. Works beautifully on mobile.</div>
        </div>

        {/* Can */}
        <div className="relative flex flex-col items-center justify-center rounded-[20px] bg-[#0F1213] p-6 text-white overflow-hidden">
          <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-[#FF6B2C]/30 blur-[50px]" />
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-white/10 blur-[40px]" />
          <motion.div
            style={{ x: x * 0.6, y: y * 0.6, rotateY: x * 0.5 } as any}
            className="relative z-10 flex flex-col items-center"
          >
            {/* can */}
            <div className="relative h-[210px] w-[160px]">
              <div className="absolute inset-x-2 top-0 h-6 rounded-full bg-gradient-to-b from-zinc-200 to-zinc-400 shadow-inner" />
              <div className="absolute inset-x-0 top-5 bottom-6 rounded-[18px] bg-gradient-to-b from-zinc-100 to-zinc-300 border border-white/60 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-60" style={{ transform: `translateX(${x}px)` }} />
                <div className="absolute inset-x-4 top-8 rounded-xl p-3 text-center" style={{ background: color.hex }}>
                  <div className="text-[10px] tracking-[0.2em] text-white/90">SAI</div>
                  <div className="text-sm font-black text-white">PAINT HOUSE</div>
                  <div className="mt-1 text-[10px] text-white/80">PREMIUM EMULSION</div>
                </div>
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1">
                  <span className="h-1.5 w-6 rounded-full bg-black/20" /><span className="h-1.5 w-6 rounded-full bg-black/10" />
                </div>
              </div>
              <div className="absolute inset-x-2 bottom-0 h-6 rounded-full bg-zinc-800" />
              {/* drips */}
              <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 2.5 }} className="absolute -bottom-2 left-8 h-10 w-3 rounded-full" style={{ background: color.hex }} />
              <motion.div animate={{ y: [0, 4, 0] }} transition={{ repeat: Infinity, duration: 2.8 }} className="absolute -bottom-1 right-12 h-6 w-2 rounded-full" style={{ background: color.hex }} />
            </div>
            <div className="mt-6 text-center">
              <div className="text-xs tracking-[0.2em] text-white/50">REALISTIC MATERIALS</div>
              <div className="mt-1 text-sm text-white/80">Metallic can • Cursor-responsive • Scroll-aware</div>
            </div>
          </motion.div>

          {/* floating swatches */}
          <motion.div animate={{ y: [0, -8, 0] }} transition={{ repeat: Infinity, duration: 3 }} className="absolute left-4 top-10 rotate-3 rounded-xl bg-white px-3 py-2 text-xs font-semibold text-black shadow-xl">Washable Matte</motion.div>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 3.2 }} className="absolute right-4 bottom-16 -rotate-2 rounded-xl bg-[#FF6B2C] px-3 py-2 text-xs font-semibold text-white shadow-xl">Weather Proof</motion.div>
        </div>
      </div>
    </div>
  );
}
