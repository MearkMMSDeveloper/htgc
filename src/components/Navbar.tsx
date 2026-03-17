import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import htgcLogo from "@/assets/htgc-logo.avif";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Visit", href: "/visit" },
  { label: "Worship", href: "/worship" },
  { label: "Events", href: "/events" },
  { label: "Learn", href: "/learn" },
  { label: "Give", href: "/give" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="flex justify-between items-center py-4 px-5 md:px-[5vw] max-w-[1400px] mx-auto">
        <Link to="/" className="flex items-center gap-3">
          <img src={htgcLogo} alt="HTGC Logo" className="h-12 w-auto" />
          <div className="hidden sm:block">
            <div className="text-sm font-semibold leading-tight tracking-tight text-foreground">Hindu Temple of</div>
            <div className="text-sm font-semibold leading-tight tracking-tight text-foreground">Greater Chicago</div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-7">
          {navLinks.slice(1).map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`label-caps text-[0.7rem] transition-colors hover:text-primary ${
                location.pathname === link.href ? "text-primary" : "text-foreground/70"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/give"
            className="bg-primary text-primary-foreground px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest hover:brightness-110 transition-all shadow-lg shadow-primary/20"
          >
            Donate
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 text-foreground"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden overflow-hidden border-t border-border/50 bg-background"
          >
            <div className="px-5 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`label-caps text-sm py-2 transition-colors ${
                    location.pathname === link.href ? "text-primary" : "text-foreground/70"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/give"
                onClick={() => setMobileOpen(false)}
                className="bg-primary text-primary-foreground px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest text-center mt-2"
              >
                Donate
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
