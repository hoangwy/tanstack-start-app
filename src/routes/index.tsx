import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight, Maximize2, Grid3x3, Download, Radio } from "lucide-react";
import { ScaledSlide } from "@/components/deck/ScaledSlide";
import { slides } from "@/components/deck/slides";

export const Route = createFileRoute("/")({
  component: Deck,
  head: () => ({
    meta: [
      { title: "Fastcast + DNN × Onyx Processing — Partnership Proposal" },
      {
        name: "description",
        content:
          "A premium partnership proposal between Fastcast / The Daily News Now! and Onyx Processing — building the future of contextual audio advertising.",
      },
      { property: "og:title", content: "Fastcast × Onyx Processing" },
      { property: "og:description", content: "The future of contextual audio advertising." },
    ],
  }),
});

function Deck() {
  const [i, setI] = useState(0);
  const [grid, setGrid] = useState(false);
  const Active = slides[i].Component;

  const next = useCallback(() => setI((v) => Math.min(slides.length - 1, v + 1)), []);
  const prev = useCallback(() => setI((v) => Math.max(0, v - 1)), []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " " || e.key === "PageDown") { e.preventDefault(); next(); }
      else if (e.key === "ArrowLeft" || e.key === "PageUp") { e.preventDefault(); prev(); }
      else if (e.key.toLowerCase() === "g") setGrid((g) => !g);
      else if (e.key.toLowerCase() === "f") document.documentElement.requestFullscreen?.();
      else if (e.key === "Escape" && document.fullscreenElement) document.exitFullscreen?.();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  if (grid) {
    return (
      <div className="min-h-screen bg-background p-12">
        <header className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-electric-gradient flex items-center justify-center">
              <Radio className="w-5 h-5 text-background" />
            </div>
            <div>
              <div className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">Fastcast × Onyx</div>
              <div className="text-lg font-semibold">All slides</div>
            </div>
          </div>
          <button
            onClick={() => setGrid(false)}
            className="glass px-5 py-2.5 rounded-full text-sm hover:border-electric/50 transition"
          >
            Back to deck
          </button>
        </header>
        <div className="grid grid-cols-3 gap-6">
          {slides.map((s, idx) => (
            <button
              key={s.id}
              onClick={() => { setI(idx); setGrid(false); }}
              className="group text-left"
            >
              <div className="relative aspect-video rounded-2xl overflow-hidden border border-border group-hover:border-electric/60 transition">
                <ScaledSlide><s.Component /></ScaledSlide>
              </div>
              <div className="mt-3 flex items-center justify-between">
                <div className="text-sm font-medium">{s.title}</div>
                <div className="font-mono text-xs text-muted-foreground">{String(idx + 1).padStart(2, "0")}</div>
              </div>
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen bg-background flex flex-col overflow-hidden">
      {/* Top bar */}
      <header className="h-[70px] shrink-0 flex items-center justify-between px-6 border-b border-border">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-electric-gradient flex items-center justify-center">
            <Radio className="w-4 h-4 text-background" />
          </div>
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Fastcast × Onyx</div>
            <div className="text-sm font-medium">{slides[i].title}</div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <a
            href="/fastcast-x-onyx.pdf"
            download="Fastcast x Onyx.pdf"
            className="glass px-3 py-2 rounded-lg text-xs flex items-center gap-2 hover:border-electric/50 transition"
          >
            <Download className="w-3.5 h-3.5" /> PDF
          </a>
          <button
            onClick={() => setGrid(true)}
            className="glass px-3 py-2 rounded-lg text-xs flex items-center gap-2 hover:border-electric/50 transition"
            title="Grid (G)"
          >
            <Grid3x3 className="w-3.5 h-3.5" /> Grid
          </button>
          <button
            onClick={() => document.documentElement.requestFullscreen?.()}
            className="glass px-3 py-2 rounded-lg text-xs flex items-center gap-2 hover:border-electric/50 transition"
            title="Present (F)"
          >
            <Maximize2 className="w-3.5 h-3.5" /> Present
          </button>
        </div>
      </header>

      {/* Slide stage */}
      <main className="h-[calc(100vh-70px)] relative overflow-hidden">
        <ScaledSlide><Active /></ScaledSlide>

        {/* Nav controls */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3 glass-strong rounded-full px-4 py-2">
          <button
            onClick={prev}
            disabled={i === 0}
            className="w-9 h-9 rounded-full hover:bg-foreground/10 flex items-center justify-center disabled:opacity-30"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <div className="font-mono text-xs tracking-widest text-muted-foreground min-w-[60px] text-center">
            {String(i + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
          </div>
          <button
            onClick={next}
            disabled={i === slides.length - 1}
            className="w-9 h-9 rounded-full hover:bg-foreground/10 flex items-center justify-center disabled:opacity-30"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Progress bar */}
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-foreground/5">
          <div
            className="h-full bg-electric-gradient transition-all duration-500"
            style={{ width: `${((i + 1) / slides.length) * 100}%` }}
          />
        </div>
      </main>
    </div>
  );
}
