import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  variant?: "hero" | "default" | "dark";
  className?: string;
}

export function SlideShell({ children, variant = "default", className = "" }: Props) {
  const bg =
    variant === "hero"
      ? "bg-hero"
      : variant === "dark"
        ? "bg-[oklch(0.11_0.012_250)]"
        : "bg-[oklch(0.14_0.012_250)]";
  return (
    <div className={`relative w-full h-full ${bg} text-foreground overflow-hidden grain ${className}`}>
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      <div className="absolute -top-60 left-1/2 -translate-x-1/2 w-[1400px] h-[700px] rounded-full bg-[radial-gradient(ellipse_at_center,oklch(0.6_0.1_235/0.28),transparent_70%)] blur-3xl pointer-events-none" />
      <div className="absolute -bottom-60 left-1/2 -translate-x-1/2 w-[1600px] h-[700px] rounded-full bg-[radial-gradient(ellipse_at_center,oklch(0.86_0.09_65/0.22),transparent_70%)] blur-3xl pointer-events-none" />
      
      <div className="relative w-full h-full">{children}</div>
    </div>
  );
}

export function SlideHeader({
  eyebrow,
  title,
  number,
}: {
  eyebrow?: string;
  title?: string;
  number?: string;
}) {
  return (
    <div className="flex items-start justify-between px-24 pt-20">
      <div>
        {eyebrow && (
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-px bg-electric" />
            <span className="font-mono text-sm uppercase tracking-[0.3em] text-electric">
              {eyebrow}
            </span>
          </div>
        )}
        {title && (
          <h2 className="text-6xl font-semibold tracking-tight max-w-4xl text-gradient">
            {title}
          </h2>
        )}
      </div>
      {number && (
        <div className="font-mono text-sm text-muted-foreground tracking-widest pt-2">
          {number}
        </div>
      )}
    </div>
  );
}

export function Waveform({ bars = 40, className = "" }: { bars?: number; className?: string }) {
  return (
    <div className={`flex items-center gap-[6px] ${className}`}>
      {Array.from({ length: bars }).map((_, i) => (
        <div
          key={i}
          className="w-px rounded-full bg-electric-gradient"
          style={{
            height: `${30 + Math.abs(Math.sin(i * 0.55)) * 70}%`,
            minHeight: 6,
            animation: `wave 1.${(i % 9) + 2}s ease-in-out ${i * 0.04}s infinite`,
            transformOrigin: "center",
            opacity: 0.85,
          }}
        />
      ))}
    </div>
  );
}
