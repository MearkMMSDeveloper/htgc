import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, Users, BookOpen, Stethoscope, Leaf, Monitor, Music, CalendarDays, GraduationCap, Wrench, Download } from "lucide-react";
import QuickDonateModal from "@/components/QuickDonateModal";

const settleEase = [0.22, 1, 0.36, 1] as const;
const settle = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.8, ease: settleEase as unknown as [number, number, number, number] }
  }),
};

const templeOperations = [
  {
    title: "General Donation",
    tagline: "The simplest way to support HTGC",
    desc: "A general donation goes directly to the day-to-day operations of the temple — keeping the lights on, the priests supported, the prasadam flowing, and the doors open to every devotee who walks in. No matter the amount, your gift makes a difference every single day.",
    btn: "Make a General Donation",
    link: "https://www.htgc.org/general-donation",
  },
  {
    title: "Ehundi — Offering to the Lord",
    tagline: "A direct devotional gift to the deity",
    desc: "The Ehundi (hundi) is the traditional temple offering box — a gift placed directly at the feet of the Lord. Making an Ehundi donation is an act of pure devotion, surrendering what is yours to the divine with gratitude and love. Your offering is dedicated to the deity of your choice.",
    btn: "Make an Ehundi Offering",
    link: "https://www.htgc.org/ehundi-donation",
  },
  {
    title: "Dollar a Day",
    tagline: "$365 a year — effortless and meaningful",
    desc: "Just one dollar a day — $30 a month — adds up to $365 a year of consistent temple support. The Dollar a Day program is designed for devotees who want to give regularly without thinking about it. Set it up once, and your generosity flows all year round.",
    btn: "Join Dollar a Day",
    link: "https://www.htgc.org/dollar-a-day-donation",
  },
  {
    title: "Poshaka — Monthly Temple Sustainer",
    tagline: "Be a pillar of HTGC year-round",
    desc: 'A Poshaka (meaning "nourisher" in Sanskrit) is a devoted recurring donor who keeps the temple nourished and growing. By committing to a monthly gift of any amount, you give the temple the financial predictability it needs to plan festivals, maintain facilities, and invest in the community.',
    btn: "Become a Poshaka",
    link: "https://www.htgc.org/poshaka-donation",
  },
];

const programs = [
  {
    title: "Yoga Program",
    tagline: "Keep yoga accessible to everyone",
    desc: "HTGC offers three weekly adult yoga classes and kids' yoga sessions — guided by experienced teachers in the peaceful setting of the temple. Your donation supports instructor fees, equipment, and program development, and helps us keep classes affordable for all students regardless of their financial situation.",
    btn: "Donate to Yoga",
    link: "https://www.htgc.org/yoga-donation",
  },
  {
    title: "Humanitarian Fund & Free Medical Camp",
    tagline: "Free healthcare for our community every month",
    desc: "Funds the free monthly health clinic and community welfare outreach programs.",
    btn: "Donate to Humanitarian Fund",
    link: "https://www.htgc.org/humanitarian-donation",
  },
  {
    title: "Sanjeevini Fund",
    tagline: "Nurturing devotion and nature together",
    desc: "Supports the Ramsevak seva programme and Bilva Vruksha sacred tree initiative.",
    btn: "Donate to Sanjeevini",
    link: "https://www.htgc.org/sanjeevini-donation",
  },
];

const volunteerAreas = [
  { icon: GraduationCap, title: "Teaching & Education", desc: "Vidyalaya Sunday school, library activities, Sanskrit classes, dance and music teaching." },
  { icon: CalendarDays, title: "Festivals & Events", desc: "Decoration, coordination, setup and cleanup for major festivals, cultural programs, and community events." },
  { icon: Stethoscope, title: "Humanitarian Programs", desc: "Monthly free Medical Camp, senior citizen outreach, community welfare initiatives." },
  { icon: Wrench, title: "Temple Operations", desc: "Front desk, visitor welcome, flower committee, prasadam support, maintenance and groundskeeping." },
  { icon: Monitor, title: "IT & Digital", desc: "Website, database, streaming, social media, newsletter, IT infrastructure and security." },
  { icon: Music, title: "Cultural & Fine Arts", desc: "Performing arts, music, Bhajan Sangam, Vidyavani magazine, photography and documentation." },
];

const membershipBenefits = [
  "Voting rights in temple elections",
  "Priority booking for pujas and events",
  "Discounted hall rental rates",
  "Recognition in temple publications",
  "Invitation to exclusive member events",
  "Supporting HTGC's long-term mission",
];

export default function GivePage() {
  const [donateOpen, setDonateOpen] = useState(false);

  return (
    <>
      {/* Hero */}
      <section className="relative py-24 md:py-32 flex items-center justify-center bg-primary overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/80" />
        <div className="relative z-10 text-center max-w-3xl px-6">
          <motion.h1
            className="text-5xl md:text-7xl font-serif text-primary-foreground mb-6"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            Give, Serve & Sustain
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-8"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            For nearly 40 years, HTGC has thrived because of people like you. Every contribution — large or small — keeps this sacred space alive for our entire community.
          </motion.p>
          <motion.div
            className="flex flex-wrap gap-4 justify-center"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <button
              onClick={() => setDonateOpen(true)}
              className="bg-primary-foreground text-primary px-8 py-3 rounded-full text-sm font-bold uppercase tracking-widest hover:brightness-95 transition-all shadow-lg"
              aria-label="Donate now"
            >
              Donate Now
            </button>
            <a
              href="#membership"
              className="bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground px-8 py-3 rounded-full text-sm font-bold uppercase tracking-widest border border-primary-foreground/20 hover:bg-primary-foreground/20 transition-all"
              aria-label="Become a member"
            >
              Become a Member
            </a>
          </motion.div>
        </div>
      </section>

      {/* Renovation Campaigns */}
      <section className="section-padding" style={{ backgroundColor: "hsl(40 100% 97%)" }}>
        <div className="max-w-[1400px] mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Sri Ramalaya */}
            <motion.div className="temple-card border-l-4 border-l-primary" variants={settle} initial="hidden" whileInView="visible" custom={0} viewport={{ once: true }}>
              <span className="inline-block bg-primary text-primary-foreground text-[0.65rem] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">Active Campaign</span>
              <h2 className="text-2xl md:text-3xl font-serif mb-4">Restore Sri Ramalaya — Our Historic Rama Temple</h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                Sri Ramalaya — the main Rama Temple — is the oldest Rama temple in the United States. Built in the Chola architectural tradition with hand-carved stone work by master silpis from Mahabalipuram, it has stood as a beacon of Hindu faith in the American Midwest since 1986. After nearly four decades of daily worship, this is a once-in-a-generation opportunity to preserve and enhance our most beloved sacred structure for the next 40 years.
              </p>
              <a
                href="https://www.htgc.org/ramalaya-renovation"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-primary text-primary-foreground px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest hover:brightness-110 transition-all"
                aria-label="Donate to Sri Ramalaya renovation"
              >
                Donate to Sri Ramalaya
              </a>
            </motion.div>

            {/* VSC */}
            <motion.div className="temple-card border-l-4 border-l-accent" variants={settle} initial="hidden" whileInView="visible" custom={1} viewport={{ once: true }}>
              <span className="inline-block bg-accent text-accent-foreground text-[0.65rem] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">Active Campaign</span>
              <h2 className="text-2xl md:text-3xl font-serif mb-4">Rebuild the Vivekananda Spiritual Centre</h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                The Vivekananda Spiritual Centre (VSC) is the cultural heart of the HTGC campus — the space where concerts are held, discourses happen, children perform, and community gathers. The VSC Renovation project will transform this building into a modern, fully accessible venue with improved acoustics, better seating, and a renewed stage.
              </p>
              <a
                href="https://www.htgc.org/vsc-renovation"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-accent text-accent-foreground px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest hover:brightness-110 transition-all"
                aria-label="Donate to VSC renovation"
              >
                Donate to VSC Renovation
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 1: Keep the Temple Running */}
      <section id="keep-running" className="section-padding">
        <div className="max-w-[1400px] mx-auto">
          <motion.span className="label-caps text-primary text-xs" variants={settle} initial="hidden" whileInView="visible" custom={0} viewport={{ once: true }}>Sustain</motion.span>
          <motion.h2 className="text-3xl md:text-4xl font-serif mt-3 mb-4" variants={settle} initial="hidden" whileInView="visible" custom={1} viewport={{ once: true }}>Keep the Temple Running</motion.h2>
          <motion.p className="text-muted-foreground max-w-3xl mb-10" variants={settle} initial="hidden" whileInView="visible" custom={2} viewport={{ once: true }}>
            The temple is open every single day of the year — from 9 AM to 8 PM. Daily pujas, prasadam preparation, priest services, maintenance, utilities, and administration are all ongoing costs that never pause. These four giving options directly sustain the everyday life of the temple.
          </motion.p>
          <div className="grid md:grid-cols-2 gap-6">
            {templeOperations.map((card, i) => (
              <motion.div
                key={i}
                className="temple-card flex flex-col justify-between gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
              >
                <div>
                  <h3 className="text-xl font-serif mb-1">{card.title}</h3>
                  <span className="text-xs text-accent font-semibold uppercase tracking-wide">{card.tagline}</span>
                  <p className="text-sm text-muted-foreground leading-relaxed mt-3">{card.desc}</p>
                </div>
                <a
                  href={card.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary text-primary-foreground px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest hover:brightness-110 transition-all self-start"
                  aria-label={card.btn}
                >
                  {card.btn}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Support Our Programs */}
      <section id="programs" className="section-padding bg-muted/50">
        <div className="max-w-[1400px] mx-auto">
          <motion.span className="label-caps text-primary text-xs" variants={settle} initial="hidden" whileInView="visible" custom={0} viewport={{ once: true }}>Programs</motion.span>
          <motion.h2 className="text-3xl md:text-4xl font-serif mt-3 mb-4" variants={settle} initial="hidden" whileInView="visible" custom={1} viewport={{ once: true }}>Support Our Programs</motion.h2>
          <motion.p className="text-muted-foreground max-w-3xl mb-10" variants={settle} initial="hidden" whileInView="visible" custom={2} viewport={{ once: true }}>
            Beyond daily worship, HTGC runs programs that serve the health, education, and spiritual wellbeing of the entire community. These funds support three of our most active programs — each one relying on the generosity of the community to continue.
          </motion.p>
          <div className="grid md:grid-cols-3 gap-6">
            {programs.map((card, i) => (
              <motion.div
                key={i}
                className="temple-card flex flex-col justify-between gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
              >
                <div>
                  <h3 className="text-xl font-serif mb-1">{card.title}</h3>
                  <span className="text-xs text-accent font-semibold uppercase tracking-wide">{card.tagline}</span>
                  <p className="text-sm text-muted-foreground leading-relaxed mt-3">{card.desc}</p>
                </div>
                <a
                  href={card.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary text-primary-foreground px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest hover:brightness-110 transition-all self-start"
                  aria-label={card.btn}
                >
                  {card.btn}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Sponsor a Puja or Festival */}
      <section id="sponsor" className="section-padding bg-accent/10">
        <div className="max-w-[1400px] mx-auto">
          <motion.div className="text-center mb-10" variants={settle} initial="hidden" whileInView="visible" custom={0} viewport={{ once: true }}>
            <span className="label-caps text-accent text-xs">Sponsorship</span>
            <h2 className="text-3xl md:text-4xl font-serif mt-3">Sponsor a Puja or Festival</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {[
              { tier: "Archana Sponsorship", price: "Any amount", perks: ["Your name recited during archana", "Choose any deity", "Available daily"] },
              { tier: "Puja Sponsorship", price: "$101 – $500", perks: ["Your family names recited during the puja", "Choose your occasion and deity", "Book in advance via online form"] },
              { tier: "Major Festival Sponsor", price: "$501+", perks: ["Name in festival programme", "Announced from the stage", "Includes prasadam for your family"] },
            ].map((t, i) => (
              <motion.div
                key={i}
                className="temple-card text-center flex flex-col items-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-serif">{t.tier}</h3>
                <span className="text-2xl font-serif text-primary font-bold">{t.price}</span>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {t.perks.map((p, j) => (
                    <li key={j} className="flex gap-2 items-center justify-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />{p}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
          <div className="text-center">
            <a
              href="https://htgc.wufoo.com/forms/htgc-major-puja-sponsorship"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary text-primary-foreground px-10 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest hover:brightness-110 transition-all"
              aria-label="Become a sponsor"
            >
              Become a Sponsor
            </a>
          </div>
        </div>
      </section>

      {/* Section 4: Membership */}
      <section id="membership" className="section-padding">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-12 items-start">
          <motion.div variants={settle} initial="hidden" whileInView="visible" custom={0} viewport={{ once: true }}>
            <div className="flex items-center gap-3 mb-4">
              <Heart size={24} className="text-primary" />
              <span className="label-caps text-primary text-xs">Membership</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif mb-4">Become a Member</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Membership at HTGC is an expression of your commitment to the temple and the community it serves. As a member, you support the institution's long-term vision and help ensure its sustainability for future generations.
            </p>
            <a
              href="https://www.htgc.org/_files/ugd/64658d_aa72062a1ff742508ea1a9ff07bbbc5e.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:brightness-110 transition-all"
              aria-label="Download membership form"
            >
              <Download size={14} />
              Download Membership Form
            </a>
          </motion.div>
          <motion.div variants={settle} initial="hidden" whileInView="visible" custom={1} viewport={{ once: true }}>
            <h3 className="text-xl font-serif mb-4">Membership Benefits</h3>
            <ul className="space-y-3">
              {membershipBenefits.map((b, i) => (
                <li key={i} className="flex gap-3 items-center text-sm text-muted-foreground">
                  <span className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />{b}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Section 5: Volunteer */}
      <section id="volunteer" className="section-padding bg-muted/50">
        <div className="max-w-[1400px] mx-auto">
          <motion.div className="flex items-center gap-3 mb-4" variants={settle} initial="hidden" whileInView="visible" custom={0} viewport={{ once: true }}>
            <Users size={24} className="text-primary" />
            <span className="label-caps text-primary text-xs">Service</span>
          </motion.div>
          <motion.h2 className="text-3xl md:text-4xl font-serif mb-4" variants={settle} initial="hidden" whileInView="visible" custom={1} viewport={{ once: true }}>
            Serve With Us — Volunteer
          </motion.h2>
          <motion.p className="text-muted-foreground max-w-3xl mb-10" variants={settle} initial="hidden" whileInView="visible" custom={2} viewport={{ once: true }}>
            HTGC runs on the energy, time, and talents of hundreds of dedicated volunteers. Whether you can give an hour a week or a full day at a festival, there is a place for you.
          </motion.p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {volunteerAreas.map((area, i) => (
              <motion.div
                key={i}
                className="temple-card flex flex-col gap-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
              >
                <area.icon size={22} className="text-primary" />
                <h3 className="text-lg font-serif">{area.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{area.desc}</p>
              </motion.div>
            ))}
          </div>
          <a
            href="https://htgc.wufoo.com/forms/volunteer-at-the-hindu-temple-of-greater-chicago/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-primary-foreground px-10 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest hover:brightness-110 transition-all"
            aria-label="Sign up to volunteer"
          >
            Sign Up to Volunteer
          </a>
        </div>
      </section>

      <QuickDonateModal open={donateOpen} onOpenChange={setDonateOpen} />
    </>
  );
}
