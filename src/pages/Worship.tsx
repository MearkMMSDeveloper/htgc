import { Link } from "react-router-dom";

const schedule = [
  { service: "Temple Opens", time: "9:00 AM" },
  { service: "First Archana of the Day", time: "10:30 AM" },
  { service: "Archanas throughout the day", time: "Until 7:30 PM" },
  { service: "Last Archana of the Day", time: "7:30 PM" },
  { service: "Temple Closes", time: "8:00 PM" },
];

const ceremonies = [
  "Namakaranam — Baby naming ceremony",
  "Annaprashana — First feeding ceremony",
  "Upanayanam — Sacred thread ceremony",
  "Gruhapravesh — House warming puja",
  "Vivah (Marriage Ceremony) — Hindu wedding",
  "Satyanarayana Puja — Thanksgiving prayer",
  "Ayusha Homam — Longevity fire ritual",
  "Navagraha Homam — Nine planets fire ritual",
  "Shraddha / Memorial Rituals",
];

const samagriList = [
  "Ayusha Homam Puja", "Gruhapravesh Puja", "Marriage Ceremony",
  "Namakaranam Puja", "Navagraha Homam Puja", "Satyanarayana Puja", "Upanayanam",
];

export default function WorshipPage() {
  return (
    <>
      <section className="section-padding bg-muted/50">
        <div className="max-w-[1400px] mx-auto">
          <span className="label-caps text-primary text-xs">Worship & Services</span>
          <h1 className="text-4xl md:text-6xl font-serif mt-3 mb-6">Worship & Services</h1>
          <p className="text-lg text-muted-foreground max-w-3xl">From daily archanas to life milestone ceremonies, HTGC offers a full spectrum of ritual services to support your spiritual journey.</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-3xl font-serif mb-4">Daily Puja Schedule</h2>
          <p className="text-muted-foreground max-w-2xl mb-8">Our priests perform daily pujas in both temples according to the Agama Shastra — ancient scriptural guidelines for temple worship.</p>
          <div className="max-w-lg">
            {schedule.map((item, i) => (
              <div key={i} className={`flex justify-between py-4 ${i < schedule.length - 1 ? 'border-b border-border/50' : ''}`}>
                <span className="font-medium text-sm">{item.service}</span>
                <span className="text-sm text-muted-foreground">{item.time}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-muted/50">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-3xl font-serif mb-4">Archana Sponsorship</h2>
          <p className="text-muted-foreground max-w-2xl mb-6">An archana is a personal prayer offering in which the priest chants the names of the Lord on your behalf. Sponsoring an archana is a beautiful way to mark a birthday, anniversary, or any occasion.</p>
          <button className="bg-primary text-primary-foreground px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:brightness-110 transition-all">
            Sponsor an Archana / Puja
          </button>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-3xl font-serif mb-8">Life Milestone Ceremonies</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl">
            {ceremonies.map((c, i) => (
              <div key={i} className="temple-card py-5 px-6">
                <span className="text-sm">{c}</span>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <button className="bg-primary text-primary-foreground px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:brightness-110 transition-all">
              Request a Puja or Ceremony
            </button>
          </div>
        </div>
      </section>

      <section className="section-padding bg-muted/50">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-serif mb-4">Hall Rental</h2>
            <p className="text-muted-foreground mb-6">Our halls are available for religious ceremonies, cultural programs, community events, and family celebrations. Multiple spaces accommodate gatherings of various sizes.</p>
            <button className="bg-primary text-primary-foreground px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:brightness-110 transition-all">
              Check Availability
            </button>
          </div>
          <div>
            <h2 className="text-3xl font-serif mb-4">Puja Samagri Lists</h2>
            <p className="text-muted-foreground mb-4">Download the list for your specific puja, gather the items, and bring them along on the day of your ceremony.</p>
            <ul className="space-y-2 mb-6">
              {samagriList.map((s, i) => (
                <li key={i} className="flex gap-2 items-center text-sm text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />{s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-[1400px] mx-auto max-w-2xl">
          <h2 className="text-3xl font-serif mb-4">Ekantha Seva</h2>
          <p className="text-muted-foreground mb-6">Ekantha Seva is the sacred evening closing ceremony, during which the deities are serenaded with devotional music and hymns before their nightly rest. HTGC periodically hosts special Ekantha Seva concerts featuring renowned devotional musicians.</p>
          <button className="bg-primary text-primary-foreground px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:brightness-110 transition-all">
            View Upcoming Events
          </button>
        </div>
      </section>
    </>
  );
}
