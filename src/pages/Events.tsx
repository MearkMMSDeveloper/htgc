import { Calendar } from "lucide-react";

const festivals = [
  { name: "Sri Rama Navami", desc: "The most celebrated festival at HTGC — the birthday of Lord Rama. Observed over nine days culminating in the grand Sri Rama Navami Mahotsavam.", season: "March–April" },
  { name: "Navaratri", desc: "Nine nights of devotion to the Goddess in her many forms with daily pujas, cultural programs, and community celebrations.", season: "Spring & Autumn" },
  { name: "Hanuman Jayanthi", desc: "The birthday of Lord Hanuman — marked by special abhishekams, Hanuman Chalisa recitations, and devotional events.", season: "April" },
  { name: "Ugadi", desc: "The Telugu and Kannada New Year — a community celebration of fresh beginnings, traditional foods, and cultural programs.", season: "March–April" },
  { name: "Panguni Uttiram", desc: "A significant Tamil festival honoring divine unions, observed with a special Maha Lakshmi Abhishekam.", season: "March" },
  { name: "SummerFest & Bazaar", desc: "HTGC's annual summer community fair — a day of food, crafts, cultural performances, and family fun.", season: "Summer" },
];

export default function EventsPage() {
  return (
    <>
      <section className="section-padding bg-muted/50">
        <div className="max-w-[1400px] mx-auto">
          <span className="label-caps text-primary text-xs">Events & Calendar</span>
          <h1 className="text-4xl md:text-6xl font-serif mt-3 mb-6">Events & Festivals</h1>
          <p className="text-lg text-muted-foreground max-w-3xl">The HTGC calendar is rich with celebration. From the grandeur of Rama Navami and Navaratri to monthly bhajans and cultural concerts, there is always a reason to come together.</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-3xl font-serif mb-10">Major Annual Festivals</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {festivals.map((f, i) => (
              <div key={i} className="temple-card flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <Calendar size={16} className="text-primary" />
                  <span className="label-caps text-[0.6rem] text-muted-foreground">{f.season}</span>
                </div>
                <h3 className="text-xl font-serif">{f.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-muted/50">
        <div className="max-w-[1400px] mx-auto max-w-2xl">
          <h2 className="text-3xl font-serif mb-4">Hindu Calendar — Panchangam</h2>
          <p className="text-muted-foreground mb-6">The Panchangam is the traditional Hindu almanac that tracks auspicious dates, festivals, fasting days, and planetary positions. HTGC publishes an annual Panchangam covering all major festivals and observances referenced to the Chicago timezone.</p>
          <button className="bg-primary text-primary-foreground px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:brightness-110 transition-all">
            Download Panchangam PDF
          </button>
        </div>
      </section>
    </>
  );
}
