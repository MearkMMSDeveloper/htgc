import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const deities = {
  rama: [
    { name: "Lord Rama", desc: "The presiding deity of our main temple, Lord Rama is revered as the seventh avatar of Lord Vishnu and the embodiment of dharma, virtue, and the ideal human being." },
    { name: "Goddess Mahalakshmi", desc: "Consort of Lord Vishnu and goddess of abundance, Mahalakshmi is worshipped as the bestower of material prosperity, spiritual wealth, beauty, and grace." },
    { name: "Lord Balaji (Venkateswara)", desc: "One of the most universally venerated forms of Lord Vishnu, Lord Venkateswara is revered as the 'destroyer of sins' and the bestower of blessings." },
    { name: "Lord Hanuman", desc: "The great devotee of Lord Rama, Hanuman embodies unshakeable faith, physical strength, and selfless service." },
    { name: "Lord Krishna", desc: "An avatar of Vishnu and one of Hinduism's most beloved deities. His wisdom in the Bhagavad Gita has guided seekers for millennia." },
  ],
  gsd: [
    { name: "Lord Ganesha", desc: "The elephant-headed son of Shiva and Parvathi, Lord Ganesha is the remover of obstacles, the lord of new beginnings, and the patron of wisdom." },
    { name: "Lord Shiva", desc: "The Supreme Being in Shaivite tradition, Lord Shiva is the cosmic dancer, the destroyer of ignorance, and the source of ultimate liberation." },
    { name: "Lord Murugan", desc: "Son of Lord Shiva and Goddess Parvathi, Lord Murugan is the warrior deity of wisdom, spiritual enlightenment, and youthful vigor." },
    { name: "Goddess Parvathi", desc: "The divine mother and consort of Lord Shiva, Goddess Parvathi embodies the nurturing, sustaining power of the universe — Shakti in her most gracious form." },
    { name: "Goddess Durga", desc: "The invincible warrior goddess, Durga is the divine protector who battles darkness, ego, and the forces of ignorance." },
  ],
};

const stats = [
  { stat: "Est. 1986", label: "Serving nearly 40 years" },
  { stat: "#1 in the U.S.", label: "Oldest Rama Temple" },
  { stat: "2 Temples", label: "Ramalaya + GSD" },
  { stat: "28 Miles", label: "From downtown Chicago" },
  { stat: "365 Days", label: "Open every day" },
  { stat: "10+", label: "Programs offered" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-padding bg-muted/50">
        <div className="max-w-[1400px] mx-auto">
          <span className="label-caps text-primary text-xs">About Us</span>
          <h1 className="text-4xl md:text-6xl font-serif mt-3 mb-6">About the Hindu Temple of Greater Chicago</h1>
          <p className="text-lg text-muted-foreground max-w-3xl">A living center of Hindu faith, culture, and community — serving the Midwest since 1986.</p>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding">
        <div className="max-w-[1400px] mx-auto">
          <div className="max-w-3xl">
            <span className="label-caps text-primary text-xs">Our Story</span>
            <h2 className="text-3xl md:text-4xl font-serif mt-3 mb-6">A Community Dream Made Real</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>In 1986, a small but determined group of Hindu families in the Chicago area united with a singular vision: to build a temple that would serve as a spiritual home and cultural anchor for generations to come. What began as a community dream became a reality when the Hindu Temple of Greater Chicago opened its doors in Lemont, Illinois.</p>
              <p>Today, nearly four decades later, the temple stands as one of the most visited and revered Hindu temples in North America. It holds the distinct honor of being the oldest temple in the United States dedicated to Lord Rama.</p>
              <p>The temple campus features two magnificent structures. The main temple, Sri Ramalaya, is built in the Chola architectural tradition. The second structure, the Ganesha-Shiva-Durga (GSD) Temple, showcases the Kalinga style of architecture from eastern India.</p>
              <p>Both temples were brought to life by master silpis (temple sculptors) trained at Mahabalipuram, Tamil Nadu — the same ancient tradition that has shaped India's most celebrated temple architecture.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding bg-foreground text-primary-foreground">
        <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
          {stats.map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} viewport={{ once: true }}>
              <div className="text-2xl md:text-3xl font-serif text-primary mb-1">{item.stat}</div>
              <div className="text-xs opacity-60">{item.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Architecture */}
      <section className="section-padding">
        <div className="max-w-[1400px] mx-auto">
          <span className="label-caps text-primary text-xs">Architecture</span>
          <h2 className="text-3xl md:text-4xl font-serif mt-3 mb-10">Temple Architecture</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="temple-card">
              <h3 className="text-2xl font-serif mb-4">Sri Ramalaya — Chola Architecture</h3>
              <p className="text-muted-foreground leading-relaxed">The main temple is a masterpiece of Chola-style architecture. The defining feature is its majestic gopuram — an elaborately sculpted entrance tower. Every inch of the exterior is adorned with sacred figures, floral motifs, and mythological scenes, hand-carved by traditional silpis.</p>
            </div>
            <div className="temple-card">
              <h3 className="text-2xl font-serif mb-4">GSD Temple — Kalinga Architecture</h3>
              <p className="text-muted-foreground leading-relaxed">The GSD Temple draws from the Kalinga tradition of eastern India, characterized by its gracefully curved deula (spire) and richly decorated surfaces. The arched toranas, intricately carved pillars, and detailed frieze work create an atmosphere of timeless beauty.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Deities - Rama Temple */}
      <section className="section-padding bg-muted/50">
        <div className="max-w-[1400px] mx-auto">
          <span className="label-caps text-primary text-xs">Rama Temple</span>
          <h2 className="text-3xl md:text-4xl font-serif mt-3 mb-10">Deities of Sri Ramalaya</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {deities.rama.map((d, i) => (
              <motion.div key={i} className="temple-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }} viewport={{ once: true }}>
                <h3 className="text-xl font-serif mb-3">{d.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{d.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Deities - GSD */}
      <section className="section-padding">
        <div className="max-w-[1400px] mx-auto">
          <span className="label-caps text-primary text-xs">GSD Temple</span>
          <h2 className="text-3xl md:text-4xl font-serif mt-3 mb-10">Deities of the GSD Temple</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {deities.gsd.map((d, i) => (
              <motion.div key={i} className="temple-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }} viewport={{ once: true }}>
                <h3 className="text-xl font-serif mb-3">{d.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{d.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section-padding bg-muted/50">
        <div className="max-w-[1400px] mx-auto">
          <span className="label-caps text-primary text-xs">Leadership</span>
          <h2 className="text-3xl md:text-4xl font-serif mt-3 mb-10">Executive Committee 2025</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { role: "President", name: "Jayanthi Mittur", email: "president@htgc.org" },
              { role: "Vice President", name: "Veena Marwaha", email: "vp@htgc.org" },
              { role: "Secretary", name: "Venkata LingaReddy", email: "secretary@htgc.org" },
              { role: "Jt. Secretary", name: "Sarada Mettupalli", email: "jtsecretary@htgc.org" },
              { role: "Treasurer", name: "Sivakumar Ramu", email: "treasurer@htgc.org" },
              { role: "Jt. Treasurer", name: "Renu Jain", email: "jtreasurer@htgc.org" },
            ].map((person, i) => (
              <div key={i} className="temple-card">
                <span className="label-caps text-primary text-[0.6rem]">{person.role}</span>
                <h3 className="text-lg font-serif mt-2">{person.name}</h3>
                <a href={`mailto:${person.email}`} className="text-xs text-muted-foreground hover:text-primary transition-colors">{person.email}</a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
