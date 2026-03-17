import { Link } from "react-router-dom";
import { Phone, MapPin, Clock, Facebook, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="max-w-[1400px] mx-auto px-5 md:px-[5vw] py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-serif mb-4">Hindu Temple of Greater Chicago</h3>
            <div className="flex flex-col gap-3 text-sm opacity-70">
              <span className="flex items-center gap-2"><MapPin size={14} /> 10915 Lemont Rd, Lemont IL 60439</span>
              <span className="flex items-center gap-2"><Phone size={14} /> 630-972-0300</span>
              <span className="flex items-center gap-2"><Clock size={14} /> Open Daily: 9:00 AM – 8:00 PM</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="label-caps text-xs mb-4 opacity-50">Quick Links</h4>
            <div className="flex flex-col gap-2 text-sm opacity-70">
              {[
                { label: "About Us", href: "/about" },
                { label: "Visit Us", href: "/visit" },
                { label: "Worship & Services", href: "/worship" },
                { label: "Events", href: "/events" },
                { label: "Learn & Grow", href: "/learn" },
                { label: "Contact", href: "/contact" },
              ].map(link => (
                <Link key={link.href} to={link.href} className="hover:opacity-100 transition-opacity">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4 className="label-caps text-xs mb-4 opacity-50">Connect</h4>
            <div className="flex flex-col gap-3 text-sm opacity-70">
              <a href="https://facebook.com/HinduTempleofgreaterchicago" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:opacity-100 transition-opacity">
                <Facebook size={14} /> Facebook
              </a>
              <a href="https://youtube.com/@hindutempleofgreaterchicago" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:opacity-100 transition-opacity">
                <Youtube size={14} /> YouTube
              </a>
            </div>
          </div>

          {/* Donate CTA */}
          <div>
            <h4 className="label-caps text-xs mb-4 opacity-50">Support HTGC</h4>
            <p className="text-sm opacity-70 mb-4">Your generosity keeps our temple thriving. Every contribution makes a difference.</p>
            <Link
              to="/give"
              className="inline-block bg-primary text-primary-foreground px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest hover:brightness-110 transition-all"
            >
              Donate Now
            </Link>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center text-xs opacity-40">
          © 2025 Hindu Temple of Greater Chicago. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
