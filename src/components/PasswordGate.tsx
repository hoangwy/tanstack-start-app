import { useEffect, useState, type FormEvent } from "react";
import { Radio, Lock } from "lucide-react";

const PASSWORD = "Onyx";
const STORAGE_KEY = "fastcast_unlocked";

export function PasswordGate({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);
  const [unlocked, setUnlocked] = useState(false);
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (typeof window !== "undefined" && sessionStorage.getItem(STORAGE_KEY) === "1") {
      setUnlocked(true);
    }
  }, []);

  if (!mounted) {
    return <div className="min-h-screen bg-background" />;
  }

  if (unlocked) return <>{children}</>;

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (value === PASSWORD) {
      sessionStorage.setItem(STORAGE_KEY, "1");
      setUnlocked(true);
    } else {
      setError(true);
      setValue("");
    }
  };

  return (
    <div className="min-h-screen bg-background bg-hero grain flex items-center justify-center px-6">
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      <form
        onSubmit={onSubmit}
        className="relative glass-strong rounded-3xl p-10 w-full max-w-md space-y-6"
      >
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-electric-gradient flex items-center justify-center glow-electric">
            <Radio className="w-5 h-5 text-background" />
          </div>
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              Fastcast × Onyx
            </div>
            <div className="text-base font-medium">Confidential preview</div>
          </div>
        </div>

        <div className="space-y-2">
          <h1 className="text-2xl font-semibold tracking-tight text-gradient">
            Enter password to view
          </h1>
          <p className="text-sm text-muted-foreground">
            This presentation is shared privately. Please enter the access password to continue.
          </p>
        </div>

        <label className="block">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            Password
          </span>
          <div className="mt-2 flex items-center gap-2 rounded-xl border border-border bg-foreground/5 px-4 py-3 focus-within:border-electric/60 transition">
            <Lock className="w-4 h-4 text-muted-foreground" />
            <input
              type="password"
              autoFocus
              value={value}
              onChange={(e) => {
                setValue(e.target.value);
                if (error) setError(false);
              }}
              className="flex-1 bg-transparent outline-none text-base placeholder:text-muted-foreground/60"
              placeholder="••••••"
            />
          </div>
          {error && (
            <span className="mt-2 block text-xs text-destructive">
              Incorrect password. Try again.
            </span>
          )}
        </label>

        <button
          type="submit"
          className="w-full rounded-xl bg-electric-gradient text-background font-medium py-3 hover:opacity-90 transition glow-electric"
        >
          Unlock
        </button>
      </form>
    </div>
  );
}
