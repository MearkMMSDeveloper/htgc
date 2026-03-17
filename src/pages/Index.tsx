import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Clock, MapPin, Phone, BookOpen, Calendar, Heart, Flower2, Landmark, Users, Stethoscope } from "lucide-react";
import templeHero from "@/assets/temple-hero.jpg";

const settleEase = [0.22, 1, 0.36, 1] as const;

const settle = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.8, ease: settleEase as unknown as [number, number, number, number] }
  }),
};

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <motion.img
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          src={templeHero}
          alt="Hindu Temple of Greater Chicago"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/40" />
        <div className="relative z-10 text-center max-w-3xl px-6">
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-serif text-primary-foreground mb-6"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            A Sacred Space for Every Seeker
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-primary-foreground/80 max-w-xl mx-auto mb-8"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            Serving the Hindu community of Greater Chicago since 1986. Come worship, learn, and grow — just 28 miles from downtown Chicago.
          </motion.p>
          <motion.div
            className="flex flex-wrap gap-4 justify-center"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link to="/visit" className="bg-primary text-primary-foreground px-8 py-3 rounded-full text-sm font-bold uppercase tracking-widest hover:brightness-110 transition-all shadow-lg shadow-primary/30">
              Plan Your Visit
            </Link>
            <Link to="/events" className="bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground px-8 py-3 rounded-full text-sm font-bold uppercase tracking-widest border border-primary-foreground/20 hover:bg-primary-foreground/20 transition-all">
              View Events
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Info Strip */}
      <section className="info-strip">
        <div className="max-w-[1400px] mx-auto px-5 md:px-[5vw] py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { icon: Clock, label: "Temple Hours", value: "Open Daily | 9 AM – 8 PM" },
              { icon: MapPin, label: "Location", value: "10915 Lemont Rd, Lemont IL" },
              { icon: Phone, label: "Contact", value: "630-972-0300" },
              { icon: Flower2, label: "First Archana", value: "Daily at 10:30 AM" },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-1.5">
                <item.icon size={16} className="text-primary" />
                <span className="label-caps text-[0.6rem] text-muted-foreground">{item.label}</span>
                <span className="text-xs font-medium text-foreground">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Snapshot */}
      <section className="section-padding">
        <div className="max-w-[1400px] mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <motion.span className="label-caps text-primary text-xs" variants={settle} initial="hidden" whileInView="visible" custom={0} viewport={{ once: true }}>
              Welcome
            </motion.span>
            <motion.h2 className="text-4xl md:text-5xl font-serif mt-3 mb-6" variants={settle} initial="hidden" whileInView="visible" custom={1} viewport={{ once: true }}>
              The Oldest Rama Temple in the United States
            </motion.h2>
            <motion.p className="text-muted-foreground leading-relaxed mb-4" variants={settle} initial="hidden" whileInView="visible" custom={2} viewport={{ once: true }}>
              Founded in 1986, the Hindu Temple of Greater Chicago stands as one of the most celebrated Hindu temples in North America. Set atop a scenic hillock in Lemont, Illinois, our temple campus is home to two magnificent structures — the Sri Ramalaya, built in the Chola architectural tradition, and the Ganesha-Shiva-Durga Temple, inspired by the Kalinga style.
            </motion.p>
            <motion.p className="text-muted-foreground leading-relaxed mb-8" variants={settle} initial="hidden" whileInView="visible" custom={3} viewport={{ once: true }}>
              Every day, our doors open to worshippers seeking peace, families celebrating milestones, students exploring their heritage, and newcomers curious about Hindu culture.
            </motion.p>
            <motion.div variants={settle} initial="hidden" whileInView="visible" custom={4} viewport={{ once: true }}>
              <Link to="/about" className="text-sm font-bold border-b-2 border-primary pb-1 text-primary hover:opacity-80 transition-opacity">
                Our Full Story
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Today's Schedule */}
      <section className="section-padding bg-muted/50">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
            <div>
              <span className="label-caps text-primary text-xs">Schedule</span>
              <h2 className="text-4xl font-serif mt-2">Today at the Temple</h2>
            </div>
            <Link to="/events" className="text-sm font-bold border-b-2 border-primary pb-1 text-primary">
              View Full Calendar
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { time: "9:00 AM", event: "Temple Opens", location: "Both Temples" },
              { time: "10:30 AM", event: "First Archana", location: "Rama Temple" },
              { time: "7:30 PM", event: "Last Archana", location: "Both Temples" },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="temple-card flex flex-col justify-between h-48"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
              >
                <span className="label-caps text-muted-foreground text-[0.65rem]">{item.time}</span>
                <h3 className="text-2xl font-serif">{item.event}</h3>
                <span className="text-xs text-primary font-medium">{item.location}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Deities */}
      <section className="section-padding">
        <div className="max-w-[1400px] mx-auto text-center">
          <span className="label-caps text-primary text-xs">Devotion</span>
          <h2 className="text-4xl md:text-5xl font-serif mt-3 mb-4">Meet the Deities of HTGC</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-12">
            Our temple is home to sacred deities revered across the spectrum of Hindu tradition. Each deity's shrine offers a space for devotion, prayer, and inner reflection.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { name: "Lord Rama", icon: "🙏" },
              { name: "Goddess Mahalakshmi", icon: "🪷" },
              { name: "Lord Balaji", icon: "🙏" },
              { name: "Lord Hanuman", icon: "🙏" },
              { name: "Lord Ganesha", icon: "🙏" },
              { name: "Lord Shiva", icon: "🕉️" },
              { name: "Goddess Durga", icon: "⚔️" },
              { name: "Lord Krishna", icon: "🎶" },
            ].map((deity, i) => (
              <motion.div
                key={i}
                className="temple-card text-center py-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
              >
                <span className="text-3xl mb-3 block">{deity.icon}</span>
                <h3 className="text-lg font-serif">{deity.name}</h3>
              </motion.div>
            ))}
          </div>
          <div className="mt-10">
            <Link to="/about" className="text-sm font-bold border-b-2 border-primary pb-1 text-primary">
              Explore All Deities
            </Link>
          </div>
        </div>
      </section>

      {/* Programs / Grow With Us */}
      <section className="section-padding bg-muted/50">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-12">
            <span className="label-caps text-primary text-xs">Community</span>
            <h2 className="text-4xl md:text-5xl font-serif mt-3">Grow With Us</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: BookOpen, title: "Vidyalaya — Sunday School", desc: "Inspiring the next generation through Hindu scripture, Indian languages, dance, music, and cultural traditions." },
              { icon: Heart, title: "Yoga & Meditation", desc: "Weekly adult classes and kids' yoga sessions in the serene setting of the temple. All levels welcome." },
              { icon: Landmark, title: "Community Library", desc: "Browse hundreds of books on Hindu philosophy, Indian culture, and spiritual practice. Free membership." },
              { icon: Stethoscope, title: "Free Medical Camp", desc: "Free health clinic every first Sunday of the month — open to the entire community." },
            ].map((card, i) => (
              <motion.div
                key={i}
                className="temple-card flex flex-col gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
              >
                <card.icon size={24} className="text-primary" />
                <h3 className="text-xl font-serif">{card.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/learn" className="text-sm font-bold border-b-2 border-primary pb-1 text-primary">
              All Programs
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
            {[
              { stat: "Est. 1986", label: "Serving nearly 40 years" },
              { stat: "#1 in the U.S.", label: "Oldest Rama Temple" },
              { stat: "2 Temples", label: "Ramalaya + GSD" },
              { stat: "28 Miles", label: "From downtown Chicago" },
              { stat: "365 Days", label: "Open every day" },
              { stat: "10+", label: "Programs offered" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
              >
                <div className="text-2xl md:text-3xl font-serif text-primary mb-1">{item.stat}</div>
                <div className="text-xs text-muted-foreground">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Donate CTA */}
      <section className="section-padding bg-foreground text-primary-foreground text-center">
        <div className="max-w-2xl mx-auto">
          <span className="label-caps text-primary text-xs">Support</span>
          <h2 className="text-4xl md:text-5xl font-serif mt-3 mb-4">Support the Temple</h2>
          <p className="text-primary-foreground/70 mb-8">
            Your generosity keeps our temple thriving, our programs growing, and our doors open to all. There are many ways to contribute.
          </p>
          <Link to="/give" className="inline-block bg-primary text-primary-foreground px-10 py-4 rounded-full text-sm font-bold uppercase tracking-widest hover:brightness-110 transition-all shadow-lg shadow-primary/30">
            Donate Now
          </Link>
        </div>
      </section>
    </>
  );
}
