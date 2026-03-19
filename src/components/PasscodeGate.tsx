import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import htgcLogo from "@/assets/htgc-logo.avif";

const PASSCODE = "1986";

export default function PasscodeGate({ children }: { children: React.ReactNode }) {
  const [authenticated, setAuthenticated] = useState(
    () => sessionStorage.getItem("htgc-auth") === "true"
  );
  const [code, setCode] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      if (code.trim() === PASSCODE) {
        sessionStorage.setItem("htgc-auth", "true");
        setAuthenticated(true);
      } else {
        setError(true);
        setTimeout(() => setError(false), 1500);
      }
    },
    [code]
  );

  if (authenticated) return <>{children}</>;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="w-full max-w-sm mx-4 text-center"
      >
        <img src={htgcLogo} alt="HTGC Logo" className="w-20 h-20 mx-auto mb-6 rounded-full object-cover" />
        <h1 className="text-3xl font-serif text-primary-foreground mb-2">Hindu Temple of Greater Chicago</h1>
        <p className="text-primary-foreground/60 text-sm mb-8">Enter the passcode to preview the site</p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="password"
            inputMode="numeric"
            maxLength={10}
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Passcode"
            className={`w-full px-4 py-3 rounded-lg bg-primary-foreground/10 text-primary-foreground text-center text-lg tracking-[0.3em] placeholder:text-primary-foreground/30 placeholder:tracking-normal border transition-colors outline-none ${
              error ? "border-red-500 animate-shake" : "border-primary-foreground/20 focus:border-primary"
            }`}
            autoFocus
          />
          {error && (
            <motion.p
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-400 text-sm"
            >
              Incorrect passcode
            </motion.p>
          )}
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-primary text-primary-foreground font-bold text-sm uppercase tracking-widest hover:brightness-110 transition-all"
          >
            Enter
          </button>
        </form>
      </motion.div>
    </div>
  );
}
