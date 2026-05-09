import { SlideShell, SlideHeader, Waveform } from "./SlideShell";
import {
  Mic2,
  Radio,
  Zap,
  TrendingUp,
  Users,
  Globe,
  Headphones,
  Building2,
  ShieldCheck,
  Sparkles,
  Rocket,
  Target,
  Calendar,
  Layers,
  PlayCircle,
  Youtube,
  Rss,
  Search,
  Apple,
  ArrowRight,
  CheckCircle2,
  XCircle,
  DollarSign,
  Wallet,
  Store,
  Briefcase,
  LineChart as LineIcon,
  Network,
  Car,
  Speaker,
  Wifi,
  RadioTower,
} from "lucide-react";

/* ───────────────────────── 1. COVER ───────────────────────── */
export function SlideCover() {
  return (
    <SlideShell variant="hero">
      <div className="absolute inset-0 flex flex-col justify-between px-24 py-20">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-electric-gradient flex items-center justify-center glow-electric">
              <Radio className="w-6 h-6 text-background" />
            </div>
            <div>
              <div className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
                Fastcast / DNN
              </div>
              <div className="text-lg font-medium">The Daily News Now!</div>
            </div>
          </div>
          <div className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Partnership Proposal · 2026
          </div>
        </div>

        <div className="space-y-7">
          <div className="flex items-center gap-4">
            <div className="px-4 py-2 rounded-full glass text-xs font-mono uppercase tracking-[0.3em] text-electric">
              Confidential · For Onyx Processing
            </div>
          </div>
          <h1 className="text-7xl font-semibold tracking-tight leading-[0.98]">
            <span className="text-gradient">Fastcast + DNN</span>
            <br />
            <span className="text-foreground/90">×</span>{" "}
            <span className="text-gradient">Onyx Processing</span>
          </h1>
          <p className="text-2xl text-muted-foreground max-w-6xl font-light leading-snug">
            Building the future of{" "}
            <span className="text-foreground font-medium">contextual audio advertising</span>,
            where fintech meets the next generation of media.
          </p>
          <Waveform bars={60} className="opacity-90" />
        </div>

        <div className="flex items-end justify-between">
          <div className="flex gap-12">
            <Stat label="Weekly listens" value="140K+" />
            <Stat label="Business channels" value="4" />
            <Stat label="Platforms" value="∞" />
          </div>
          <div className="font-mono text-xs text-muted-foreground tracking-widest">01 / 12</div>
        </div>
      </div>
    </SlideShell>
  );
}

function Stat({ label, value, accent }: { label: string; value: string; accent?: string }) {
  return (
    <div>
      <div className={`text-5xl font-semibold ${accent ?? "text-foreground"}`}>{value}</div>
      <div className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mt-1">
        {label}
      </div>
    </div>
  );
}

/* ─────────────────── 2. THE OPPORTUNITY ─────────────────── */
export function SlideOpportunity() {
  return (
    <SlideShell>
      <SlideHeader eyebrow="The Opportunity" title="Attention is collapsing. Audio is winning." number="02 / 12" />
      <div className="px-24 pt-16 grid grid-cols-12 gap-8">
        <div className="col-span-7 space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <BigStat icon={<Headphones className="w-6 h-6" />} value="546M" label="Global podcast listeners by 2026" tone="electric" />
            <BigStat icon={<TrendingUp className="w-6 h-6" />} value="+47%" label="YoY growth in short-form audio" tone="emerald" />
            <BigStat icon={<Users className="w-6 h-6" />} value="8 sec" label="Average attention span" tone="violet" />
            <BigStat icon={<Briefcase className="w-6 h-6" />} value="73%" label="Of execs consume daily audio" tone="electric" />
          </div>
        </div>
        <div className="col-span-5 glass rounded-3xl p-10 space-y-6">
          <div className="font-mono text-xs uppercase tracking-[0.3em] text-electric">Macro shift</div>
          <h3 className="text-4xl font-semibold leading-tight">
            Modern audiences are <span className="text-gradient">overwhelmed</span>, and tuning into{" "}
            <span className="text-gradient">short, intelligent audio</span> instead.
          </h3>
          <ul className="space-y-4 text-xl text-muted-foreground">
            {[
              "TikTok-ification of every medium",
              "Newsletters → audio replacement",
              "Founders & SMBs commute-listen daily",
              "Trust gap with traditional ads",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-electric mt-3" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SlideShell>
  );
}

function BigStat({
  icon, value, label, tone,
}: { icon: React.ReactNode; value: string; label: string; tone: "electric" | "emerald" | "violet" }) {
  const grad =
    tone === "electric" ? "from-[oklch(0.72_0.22_250/0.25)]" :
    tone === "emerald" ? "from-[oklch(0.78_0.16_175/0.25)]" :
    "from-[oklch(0.7_0.22_300/0.25)]";
  const text =
    tone === "electric" ? "text-electric" : tone === "emerald" ? "text-emerald" : "text-violet";
  return (
    <div className={`glass rounded-2xl p-8 bg-gradient-to-br ${grad} to-transparent`}>
      <div className={`w-12 h-12 rounded-xl glass flex items-center justify-center ${text} mb-5`}>
        {icon}
      </div>
      <div className="text-6xl font-semibold tracking-tight">{value}</div>
      <div className="text-base text-muted-foreground mt-2">{label}</div>
    </div>
  );
}

/* ─────────────────── 3. WHAT IS A FASTCAST ─────────────────── */
export function SlideWhatIsFastcast() {
  return (
    <SlideShell>
      <SlideHeader eyebrow="Defining the category" title="What is a Fastcast?" number="03 / 12" />
      <div className="px-24 pt-12 grid grid-cols-12 gap-8">
        <div className="col-span-12 grid grid-cols-2 gap-8">
          <div className="rounded-3xl glass p-10 relative overflow-hidden">
            <div className="absolute top-6 right-6 px-3 py-1 rounded-full bg-foreground/10 text-xs font-mono uppercase tracking-widest text-muted-foreground">
              Yesterday
            </div>
            <Mic2 className="w-10 h-10 text-muted-foreground mb-6" />
            <h3 className="text-4xl font-semibold mb-6 text-muted-foreground">Traditional Podcast</h3>
            <ul className="space-y-4 text-xl text-muted-foreground">
              {["Weekly cadence", "45–90 min long-form", "Expensive production", "Slow to publish", "Hard to scale"].map((t) => (
                <li key={t} className="flex items-center gap-3">
                  <XCircle className="w-5 h-5 text-destructive/70" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl p-10 relative overflow-hidden border border-electric/30 bg-gradient-to-br from-[oklch(0.72_0.22_250/0.18)] to-[oklch(0.78_0.16_175/0.12)] glow-electric">
            <div className="absolute top-6 right-6 px-3 py-1 rounded-full bg-electric/20 text-xs font-mono uppercase tracking-widest text-electric">
              Today
            </div>
            <div className="flex items-center gap-3 mb-6">
              <Zap className="w-10 h-10 text-electric" />
              <Waveform bars={14} className="h-12" />
            </div>
            <h3 className="text-4xl font-semibold mb-6 text-gradient">Fastcast</h3>
            <ul className="space-y-4 text-xl text-foreground">
              {["Daily / multi-daily drops", "~2 minute episodes", "AI-assisted production", "Hyper-targeted niches", "Built for repetition + indexing"].map((t) => (
                <li key={t} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="col-span-12 mt-4 flex items-center justify-between glass rounded-2xl px-10 py-6">
          <div className="flex items-center gap-4">
            <Sparkles className="w-6 h-6 text-electric" />
            <span className="text-xl">
              <span className="text-muted-foreground">Fastcast is both</span>{" "}
              <span className="text-foreground font-medium">a platform</span>{" "}
              <span className="text-muted-foreground">and</span>{" "}
              <span className="text-foreground font-medium">an emerging media category.</span>
            </span>
          </div>
          <div className="font-mono text-xs uppercase tracking-[0.3em] text-electric">
            New format · new economics
          </div>
        </div>
      </div>
    </SlideShell>
  );
}

/* ─────────────────── 4. DNN NETWORK REACH ─────────────────── */
export function SlideReach() {
  const channels = [
    { name: "Business & Finance News", listens: "105K", color: "electric", icon: <LineIcon className="w-6 h-6" /> },
    { name: "Tech News", listens: "30K", color: "violet", icon: <Zap className="w-6 h-6" /> },
    { name: "Bitcoin News", listens: "3.5K", color: "emerald", icon: <Wallet className="w-6 h-6" /> },
    { name: "Real Estate News", listens: "2.5K", color: "electric", icon: <Building2 className="w-6 h-6" /> },
  ];
  return (
    <SlideShell>
      <SlideHeader eyebrow="DNN Network" title="140K+ weekly business listeners." number="04 / 12" />
      <div className="px-24 pt-12 grid grid-cols-12 gap-8">
        <div className="col-span-7 space-y-4">
          {channels.map((c, i) => (
            <div
              key={c.name}
              className="glass rounded-2xl p-6 flex items-center gap-6 animate-slide-up"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className={`w-14 h-14 rounded-xl glass flex items-center justify-center text-${c.color}`}>
                {c.icon}
              </div>
              <div className="flex-1">
                <div className="text-2xl font-medium">{c.name}</div>
                <div className="mt-3 h-2 rounded-full bg-foreground/5 overflow-hidden">
                  <div
                    className="h-full bg-electric-gradient rounded-full"
                    style={{ width: `${Math.min(100, (parseFloat(c.listens) / 105) * 100)}%` }}
                  />
                </div>
              </div>
              <div className="text-right">
                <div className="text-5xl font-semibold tabular-nums">{c.listens}</div>
                <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">weekly</div>
              </div>
            </div>
          ))}
        </div>

        <div className="col-span-5 glass rounded-3xl p-10">
          <div className="font-mono text-xs uppercase tracking-[0.3em] text-electric mb-3">
            Audience overlap with Onyx ICP
          </div>
          <h3 className="text-3xl font-semibold mb-8">Built-in alignment</h3>
          <div className="grid grid-cols-2 gap-3">
            {[
              { i: <Rocket className="w-5 h-5" />, t: "Founders" },
              { i: <Store className="w-5 h-5" />, t: "eCommerce ops" },
              { i: <Briefcase className="w-5 h-5" />, t: "SMB owners" },
              { i: <Wallet className="w-5 h-5" />, t: "Fintech users" },
              { i: <ShieldCheck className="w-5 h-5" />, t: "High-risk verts" },
              { i: <DollarSign className="w-5 h-5" />, t: "Online merchants" },
            ].map((x) => (
              <div key={x.t} className="glass rounded-xl px-4 py-4 flex items-center gap-3">
                <span className="text-electric">{x.i}</span>
                <span className="text-lg">{x.t}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 pt-8 border-t border-border">
            <div className="text-base text-muted-foreground">
              DNN's editorial mix indexes directly to the verticals Onyx serves: business, fintech, crypto, and commerce operators tuning in daily on their commute.
            </div>
          </div>
        </div>
      </div>
    </SlideShell>
  );
}

/* ─────────────────── 5. WHY IT MATTERS FOR ONYX ─────────────────── */
export function SlideWhyOnyx() {
  const pillars = [
    { i: <Target />, h: "Contextual", t: "Reach merchants at the moment they're consuming finance content." },
    { i: <ShieldCheck />, h: "Trusted", t: "Embedded in editorial, not interrupting it." },
    { i: <Radio />, h: "Repetition", t: "Daily drops compound brand recall over weeks." },
    { i: <Search />, h: "Discoverable", t: "Episodes index across Spotify, Apple, YouTube, Google." },
  ];
  return (
    <SlideShell>
      <SlideHeader eyebrow="Why this matters" title="Position Onyx as the infrastructure modern commerce trusts." number="05 / 12" />
      <div className="px-24 pt-12 grid grid-cols-12 gap-8">
        <div className="col-span-5 glass rounded-3xl p-10 relative overflow-hidden">
          <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-electric-gradient opacity-30 blur-3xl" />
          <Network className="w-12 h-12 text-electric mb-6" />
          <h3 className="text-4xl font-semibold mb-6 leading-tight">
            Payment rails meet <span className="text-gradient">media rails.</span>
          </h3>
          <p className="text-xl text-muted-foreground mb-8">
            Underserved verticals like high-risk, fintech, and founder-led commerce listen daily and rarely see Onyx-quality infrastructure marketed to them.
          </p>
          <div className="flex items-center gap-2 text-electric">
            <ArrowRight className="w-5 h-5" />
            <span className="text-lg">Be the brand they hear before they need you.</span>
          </div>
        </div>
        <div className="col-span-7 grid grid-cols-2 gap-6">
          {pillars.map((p, i) => (
            <div
              key={p.h}
              className="glass rounded-2xl p-8 hover:border-electric/40 transition animate-slide-up"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-electric-gradient/20 glass flex items-center justify-center text-electric mb-5">
                {p.i}
              </div>
              <div className="text-2xl font-semibold mb-2">{p.h}</div>
              <p className="text-base text-muted-foreground leading-relaxed">{p.t}</p>
            </div>
          ))}
        </div>
      </div>
    </SlideShell>
  );
}

/* ─────────────────── 6. EXISTING SPONSORSHIP ─────────────────── */
export function SlideSponsorship() {
  return (
    <SlideShell>
      <SlideHeader eyebrow="Phase 1 inventory" title="Sponsor Business & Finance News today." number="06 / 12" />
      <div className="px-24 pt-12 grid grid-cols-12 gap-8">
        <div className="col-span-7 rounded-3xl bg-gradient-to-br from-[oklch(0.72_0.22_250/0.2)] to-[oklch(0.7_0.22_300/0.15)] border border-electric/30 p-12 relative overflow-hidden">
          <div className="absolute top-6 right-6 px-3 py-1 rounded-full bg-electric/20 text-xs font-mono uppercase tracking-widest text-electric">
            Live
          </div>
          <div className="flex items-center gap-3 mb-8">
            <PlayCircle className="w-8 h-8 text-electric" />
            <span className="font-mono text-sm uppercase tracking-widest text-electric">Native intro example</span>
          </div>
          <p className="text-4xl font-light leading-snug max-w-2xl">
            <span className="text-muted-foreground">"</span>
            From <span className="text-foreground font-semibold">Wall Street</span> to{" "}
            <span className="text-foreground font-semibold">Silicon Valley</span>, this is{" "}
            <span className="text-gradient font-semibold">Business & Finance News</span>,
            brought to you by{" "}
            <span className="text-electric font-semibold">Onyx Processing</span>, the payments infrastructure for modern commerce.
            <span className="text-muted-foreground">"</span>
          </p>
          <div className="mt-10">
            <Waveform bars={50} className="h-16 opacity-80" />
          </div>
        </div>
        <div className="col-span-5 space-y-4">
          {[
            { h: "Pre-roll", t: "Premium :6-:15 placement", Icon: PlayCircle },
            { h: "Native integrated reads", t: "Brand woven into the show identity", Icon: Mic2 },
            { h: "Sponsored editorial segments", t: "Onyx-aligned stories inside the show", Icon: Layers },
            { h: "Branded intros", t: "Onyx-presented show framing", Icon: Sparkles },
            { h: "CTA + landing page traffic", t: "Direct links + UTM-tracked conversions", Icon: Target },
          ].map((s) => (
            <div key={s.h} className="glass rounded-2xl p-6 flex items-center gap-5">
              <div className="w-12 h-12 rounded-full bg-electric-gradient flex items-center justify-center text-background font-semibold">
                <s.Icon className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xl font-medium">{s.h}</div>
                <div className="text-base text-muted-foreground">{s.t}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SlideShell>
  );
}

/* ─────────────────── 7. NEW ONYX-BRANDED CHANNELS ─────────────────── */
export function SlideBrandedChannels() {
  const shows = [
    { t: "Payments & Fintech Today", sub: "Daily intel for modern money movement", grad: "from-electric to-violet" },
    { t: "High-Risk Commerce Today", sub: "Where bold merchants go to win", grad: "from-violet to-emerald" },
    { t: "Merchant Growth Today", sub: "Tactics for scaling online stores", grad: "from-emerald to-electric" },
    { t: "Founder Finance Brief", sub: "Capital, ops & treasury for builders", grad: "from-electric to-emerald" },
  ];
  return (
    <SlideShell>
      <SlideHeader eyebrow="Phase 2" title="Launch Onyx-branded Fastcast channels." number="07 / 12" />
      <div className="px-24 pt-10 grid grid-cols-4 gap-6">
        {shows.map((s, i) => (
          <div
            key={s.t}
            className="relative aspect-[3/4] rounded-3xl overflow-hidden glass animate-slide-up group"
            style={{ animationDelay: `${i * 100}ms` }}
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${s.grad} opacity-40`} />
            <div className="absolute inset-0 bg-[oklch(0.12_0.02_265)]/30" />
            <div className="absolute inset-0 grid-bg opacity-20" />
            <div className="relative h-full flex flex-col justify-between p-8">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl glass-strong flex items-center justify-center">
                  <Radio className="w-5 h-5 text-electric" />
                </div>
                <span className="font-mono text-xs uppercase tracking-widest text-foreground/70">
                  Onyx Original
                </span>
              </div>
              <div>
                <div className="text-3xl font-semibold leading-tight mb-3">{s.t}</div>
                <div className="text-base text-foreground/70">{s.sub}</div>
                <div className="mt-6 flex items-center gap-1 opacity-80">
                  <Waveform bars={18} className="h-8" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="px-24 mt-10 flex items-center justify-between glass rounded-2xl px-10 py-5">
        <div className="text-lg text-muted-foreground">
          Each channel: <span className="text-foreground">1-2 min episodes</span> · daily drops · cross-platform syndication
        </div>
        <div className="flex items-center gap-2 text-electric">
          <Sparkles className="w-5 h-5" /> <span className="font-mono uppercase tracking-widest text-xs">Owned media · Branded IP</span>
        </div>
      </div>
    </SlideShell>
  );
}

/* ─────────────────── 8. DISTRIBUTION ECOSYSTEM ─────────────────── */
export function SlideDistribution() {
  const platforms = [
    { i: <PlayCircle />, n: "Spotify" },
    { i: <Apple />, n: "Apple Podcasts" },
    { i: <Youtube />, n: "YouTube" },
    { i: <Rss />, n: "RSS" },
    { i: <Search />, n: "Search engines" },
    { i: <RadioTower />, n: "TuneIn" },
    { i: <Car />, n: "CarPlay" },
    { i: <Speaker />, n: "Alexa" },
    { i: <Radio />, n: "Live Streams" },
    { i: <Wifi />, n: "Internet Radio" },
  ];
  return (
    <SlideShell>
      <SlideHeader eyebrow="Distribution" title="One source. Everywhere people listen." number="08 / 12" />
      <div className="px-24 pt-4 relative h-[640px]">
        {/* center node */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="relative">
            <div className="w-44 h-44 rounded-full bg-electric-gradient flex items-center justify-center glow-electric animate-pulse-glow">
              <div className="text-center">
                <Radio className="w-9 h-9 text-background mx-auto mb-1" />
                <div className="text-xl font-semibold text-background">Fastcast</div>
                <div className="font-mono text-xs uppercase tracking-widest text-background/70">source</div>
              </div>
            </div>
            <div className="absolute inset-0 rounded-full border border-electric/30 scale-[1.6]" />
            <div className="absolute inset-0 rounded-full border border-electric/15 scale-[2.3]" />
          </div>
        </div>
        {/* nodes */}
        {platforms.map((p, i) => {
          const angle = (i / platforms.length) * Math.PI * 2 - Math.PI / 2;
          const r = 280;
          const x = Math.cos(angle) * r;
          const y = Math.sin(angle) * r;
          return (
            <div
              key={p.n}
              className="absolute left-1/2 top-1/2"
              style={{ transform: `translate(${x - 90}px, ${y - 35}px)` }}
            >
              <div
                className="glass-strong rounded-2xl px-6 py-3 flex items-center gap-3 min-w-[180px] glow-emerald animate-slide-up"
                style={{ animationDelay: `${i * 120}ms` }}
              >
                <span className="text-emerald">{p.i}</span>
                <span className="text-xl font-medium">{p.n}</span>
              </div>
            </div>
          );
        })}
        {/* connecting lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: -1 }}>
          {platforms.map((_, i) => {
            const angle = (i / platforms.length) * Math.PI * 2 - Math.PI / 2;
            const r = 260;
            const cx = 960 - 96;
            const cy = 320;
            const x = cx + Math.cos(angle) * r;
            const y = cy + Math.sin(angle) * r;
            return (
              <line
                key={i}
                x1={cx} y1={cy} x2={x} y2={y}
                stroke="oklch(0.74 0.11 235 / 0.3)"
                strokeWidth={1.5}
                strokeDasharray="6 6"
              />
            );
          })}
        </svg>
      </div>
    </SlideShell>
  );
}

/* ─────────────────── 9. WHY FASTCASTS WIN ─────────────────── */
export function SlideWhyWin() {
  const rows = [
    { d: "Frequency", trad: "Monthly campaigns", fast: "Daily drops" },
    { d: "Discoverability", trad: "Paid push only", fast: "Indexed organically" },
    { d: "Scalability", trad: "Linear cost", fast: "AI-assisted, 10×" },
    { d: "Speed", trad: "Weeks to launch", fast: "Seconds to publish" },
    { d: "Production friction", trad: "Studios + crews", fast: "Lightweight stack" },
    { d: "Targeting", trad: "Broad demos", fast: "Niche by vertical" },
  ];
  return (
    <SlideShell>
      <SlideHeader eyebrow="Why Fastcasts win" title="A new media category, by design." number="09 / 12" />
      <div className="px-24 pt-12">
        <div className="glass rounded-3xl overflow-hidden">
          <div className="grid grid-cols-3 px-10 py-6 border-b border-border">
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">Dimension</div>
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">Traditional media</div>
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-electric">Fastcasts</div>
          </div>
          {rows.map((r, i) => (
            <div
              key={r.d}
              className={`grid grid-cols-3 px-10 py-7 items-center ${i % 2 ? "bg-foreground/[0.02]" : ""}`}
            >
              <div className="text-2xl font-medium">{r.d}</div>
              <div className="text-xl text-muted-foreground flex items-center gap-3">
                <XCircle className="w-5 h-5 text-destructive/60 shrink-0" />
                {r.trad}
              </div>
              <div className="text-xl text-foreground flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald shrink-0" />
                {r.fast}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SlideShell>
  );
}

/* ─────────────────── 10. PARTNERSHIP STRUCTURE ─────────────────── */
export function SlidePartnership() {
  const phases = [
    { n: "01", h: "Sponsor", t: "Take over existing DNN inventory across Business, Tech, Bitcoin & Real Estate channels.", icon: <Mic2 className="w-6 h-6" /> },
    { n: "02", h: "Brand", t: "Launch Onyx-branded Fastcast channels with owned media, daily drops, vertical-specific.", icon: <Sparkles className="w-6 h-6" /> },
    { n: "03", h: "Scale", t: "Expand into vertical-specific and regional Fastcast networks. Onyx becomes the audio backbone of modern commerce.", icon: <Globe className="w-6 h-6" /> },
  ];
  return (
    <SlideShell>
      <SlideHeader eyebrow="Roadmap" title="A three-phase partnership." number="10 / 12" />
      <div className="px-24 pt-16 relative">
        
        <div className="grid grid-cols-3 gap-8 relative">
          {phases.map((p, i) => (
            <div key={p.n} className="space-y-6 animate-slide-up" style={{ animationDelay: `${i * 150}ms` }}>
              <div className="flex items-center gap-4">
                <div className="font-mono text-7xl font-semibold text-gradient leading-none">{p.n}</div>
                <div className="w-14 h-14 rounded-full bg-electric-gradient flex items-center justify-center text-background relative z-10 glow-electric">
                  {p.icon}
                </div>
              </div>
              <div className="glass rounded-2xl p-8 min-h-[280px]">
                <div className="font-mono text-xs uppercase tracking-[0.3em] text-electric mb-3">
                  Phase {p.n}
                </div>
                <h3 className="text-3xl font-semibold mb-4">{p.h}</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">{p.t}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 flex items-center justify-center gap-3 text-muted-foreground">
          <Calendar className="w-5 h-5 text-electric" />
          <span className="text-base font-mono uppercase tracking-widest">Quarterly cadence · 12-month horizon</span>
        </div>
      </div>
    </SlideShell>
  );
}

/* ─────────────────── 11. PRICING ─────────────────── */
export function SlidePricing() {
  return (
    <SlideShell>
      <SlideHeader eyebrow="Investment" title="Strategic, not transactional." number="11 / 12" />
      <div className="px-24 pt-10 grid grid-cols-12 gap-8">
        <div className="col-span-6 rounded-3xl glass p-10 relative overflow-hidden">
          <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-electric-gradient opacity-25 blur-3xl" />
          <div className="font-mono text-xs uppercase tracking-[0.3em] text-electric mb-3">
            Sponsorship
          </div>
          <h3 className="text-3xl font-semibold mb-6">DNN inventory</h3>
          <div className="text-6xl font-semibold tracking-tight">
            $3.5K<span className="text-3xl text-muted-foreground"> – </span>$7.5K
          </div>
          <div className="font-mono text-sm text-muted-foreground mt-2">/ month</div>
          <div className="mt-7 space-y-3">
            {["Pre-rolls + native reads", "Branded intros", "CTA + traffic to onyx.com", "Performance reporting"].map((t) => (
              <div key={t} className="flex items-center gap-3 text-lg">
                <CheckCircle2 className="w-5 h-5 text-emerald" />
                <span>{t}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="col-span-6 rounded-3xl p-10 relative overflow-hidden border border-electric/30 bg-gradient-to-br from-[oklch(0.72_0.22_250/0.18)] to-[oklch(0.7_0.22_300/0.15)] glow-electric">
          <div className="absolute top-6 right-6 px-3 py-1 rounded-full bg-electric/20 text-xs font-mono uppercase tracking-widest text-electric">
            Recommended
          </div>
          <div className="font-mono text-xs uppercase tracking-[0.3em] text-electric mb-3">
            Branded Channel
          </div>
          <h3 className="text-3xl font-semibold mb-6">Onyx-owned Fastcast</h3>
          <div className="text-6xl font-semibold tracking-tight text-gradient">
            $2.5K<span className="text-3xl text-muted-foreground"> – </span>$10K
          </div>
          <div className="font-mono text-sm text-muted-foreground mt-2">/ month per channel</div>
          <div className="mt-7 space-y-3">
            {["Owned IP + brand integration", "AI-assisted daily production", "Cross-platform distribution", "Vertical-specific targeting"].map((t) => (
              <div key={t} className="flex items-center gap-3 text-lg">
                <CheckCircle2 className="w-5 h-5 text-emerald" />
                <span>{t}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="col-span-12 glass rounded-2xl px-10 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Layers className="w-5 h-5 text-electric" />
            <span className="text-lg text-muted-foreground">Bundle multiple channels for portfolio pricing.</span>
          </div>
          <div className="font-mono text-xs uppercase tracking-[0.3em] text-electric">Custom partnership tiers available</div>
        </div>
      </div>
    </SlideShell>
  );
}

/* ─────────────────── 12. CLOSING ─────────────────── */
export function SlideClosing() {
  return (
    <SlideShell variant="hero">
      <div className="absolute inset-0 flex flex-col justify-between px-24 py-20">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-electric-gradient flex items-center justify-center glow-electric">
              <Radio className="w-6 h-6 text-background" />
            </div>
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Fastcast · The Daily News Now!
            </div>
          </div>
          <div className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">12 / 12</div>
        </div>

        <div className="space-y-7 max-w-[1680px]">
          <Waveform bars={70} className="opacity-80" />
          <h1 className="text-9xl font-semibold tracking-tight leading-[0.9]">
            <span className="text-gradient">The future of audio</span>
            <br />
            <span className="text-foreground">is fast.</span>
          </h1>
          <p className="text-3xl text-muted-foreground max-w-[1320px] font-light leading-snug">
            Fastcasts combine the speed of modern media with the trust and intimacy of audio,
            and Onyx is positioned to own the category that matters most.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-8">
          <div className="glass rounded-2xl p-7">
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-electric mb-3">Contact</div>
            <div className="text-2xl font-semibold">Fastcast Partnerships</div>
            <div className="text-base text-muted-foreground mt-2">partners@fastcast.ai</div>
          </div>
          <div className="glass rounded-2xl p-7">
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-electric mb-3">Network</div>
            <div className="text-2xl font-semibold">The Daily News Now!</div>
            <div className="text-base text-muted-foreground mt-2">thednn.ai</div>
          </div>
          <div className="glass rounded-2xl p-7 border-electric/30">
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-electric mb-3">Next step</div>
            <div className="text-2xl font-semibold">Schedule a 30-min call</div>
            <div className="text-base text-muted-foreground mt-2">Walk through Phase 1 inventory</div>
          </div>
        </div>
      </div>
    </SlideShell>
  );
}

export const slides = [
  { id: "cover", title: "Cover", Component: SlideCover },
  { id: "opportunity", title: "The Opportunity", Component: SlideOpportunity },
  { id: "what-is", title: "What is a Fastcast", Component: SlideWhatIsFastcast },
  { id: "reach", title: "DNN Network Reach", Component: SlideReach },
  { id: "why-onyx", title: "Why It Matters", Component: SlideWhyOnyx },
  { id: "sponsorship", title: "Sponsorship Today", Component: SlideSponsorship },
  { id: "branded", title: "Branded Channels", Component: SlideBrandedChannels },
  { id: "distribution", title: "Distribution", Component: SlideDistribution },
  { id: "why-win", title: "Why Fastcasts Win", Component: SlideWhyWin },
  { id: "partnership", title: "Partnership", Component: SlidePartnership },
  { id: "pricing", title: "Pricing", Component: SlidePricing },
  { id: "closing", title: "Closing", Component: SlideClosing },
];
