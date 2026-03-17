import { BookOpen, Heart, Landmark, Stethoscope } from "lucide-react";

const vidyalayaPrograms = [
  { program: "In-Person Sunday Classes", details: "August to May | At the temple | For children & youth" },
  { program: "Online Sunday Classes", details: "August to May | Virtual | For children & youth" },
  { program: "Bharatanatyam Dance", details: "Classical Indian dance instruction — ongoing enrollment" },
  { program: "Kids Yoga", details: "Alternate Sundays, 9:00–10:00 AM" },
  { program: "SAT/ACT Coaching", details: "Academic support classes — contact for schedule" },
  { program: "Vedic Summer Camp", details: "Annual summer program — dates announced each year" },
  { program: "Samskiritham (Sanskrit)", details: "Adult Sanskrit language classes" },
];

const yogaSchedule = [
  { day: "Saturday", time: "9:00 AM – 10:30 AM", class: "Adult Hatha Yoga (In-Person)" },
  { day: "Monday", time: "6:30 PM – 8:00 PM", class: "Adult Hatha Yoga (In-Person)" },
  { day: "Wednesday", time: "6:30 PM – 8:00 PM", class: "Adult Hatha Yoga (In-Person)" },
  { day: "Alternate Sundays", time: "9:00 AM – 10:00 AM", class: "Kids Yoga (via Vidyalaya)" },
];

export default function LearnPage() {
  return (
    <>
      <section className="section-padding bg-muted/50">
        <div className="max-w-[1400px] mx-auto">
          <span className="label-caps text-primary text-xs">Learn & Grow</span>
          <h1 className="text-4xl md:text-6xl font-serif mt-3 mb-6">Learn, Practice & Thrive</h1>
          <p className="text-lg text-muted-foreground max-w-3xl">HTGC is more than a temple — it is a living community. Our education, wellness, and cultural programs serve every age group.</p>
        </div>
      </section>

      {/* Vidyalaya */}
      <section className="section-padding">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <BookOpen size={24} className="text-primary" />
            <h2 className="text-3xl font-serif">HTGC Vidyalaya</h2>
          </div>
          <p className="text-muted-foreground max-w-2xl mb-8">Every Sunday, children and young adults gather at the temple to learn, grow, and connect with their heritage — in a joyful, supportive environment guided by dedicated volunteer teachers.</p>
          
          <h3 className="text-lg font-serif mb-4">Programs Offered</h3>
          <div className="grid md:grid-cols-2 gap-4 max-w-3xl mb-8">
            {vidyalayaPrograms.map((p, i) => (
              <div key={i} className="temple-card py-5 px-6">
                <h4 className="font-semibold text-sm mb-1">{p.program}</h4>
                <p className="text-xs text-muted-foreground">{p.details}</p>
              </div>
            ))}
          </div>
          <button className="bg-primary text-primary-foreground px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:brightness-110 transition-all">
            Enroll in Vidyalaya
          </button>
        </div>
      </section>

      {/* Library */}
      <section className="section-padding bg-muted/50">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <Landmark size={24} className="text-primary" />
            <h2 className="text-3xl font-serif">Community Library</h2>
          </div>
          <p className="text-muted-foreground max-w-2xl mb-6">The HTGC Library is a treasure trove of knowledge on Hindu philosophy, Indian culture, scripture, mythology, and spiritual practice. Open on weekends.</p>
          <ul className="space-y-2 max-w-2xl mb-6">
            {[
              "Hundreds of books on Sanatana Dharma, Indian history, culture, and spirituality",
              "Children's books, activity materials, and coloring sheets",
              "Free membership — borrow books and return at end of lending period",
              "Reading room open to all temple visitors",
            ].map((item, i) => (
              <li key={i} className="flex gap-2 items-start text-sm text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-1.5" />{item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Yoga */}
      <section className="section-padding">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <Heart size={24} className="text-primary" />
            <h2 className="text-3xl font-serif">Yoga Program</h2>
          </div>
          <p className="text-muted-foreground max-w-2xl mb-8 italic">"Yoga is the journey of the self, through the self, to the self." — The Bhagavad Gita</p>
          <div className="max-w-lg mb-8">
            {yogaSchedule.map((item, i) => (
              <div key={i} className={`grid grid-cols-3 gap-4 py-3 text-sm ${i < yogaSchedule.length - 1 ? 'border-b border-border/50' : ''}`}>
                <span className="font-medium">{item.day}</span>
                <span className="text-muted-foreground">{item.time}</span>
                <span className="text-muted-foreground">{item.class}</span>
              </div>
            ))}
          </div>
          <div className="text-sm text-muted-foreground mb-6">
            <p>Drop-In: $10/class · Monthly: $35 · Six-Month: $170</p>
          </div>
        </div>
      </section>

      {/* Medical Camp */}
      <section className="section-padding bg-muted/50">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <Stethoscope size={24} className="text-primary" />
            <h2 className="text-3xl font-serif">Monthly Free Health Clinic</h2>
          </div>
          <p className="text-muted-foreground max-w-2xl mb-6">In the spirit of seva, HTGC's Humanitarian Committee organizes a free health clinic on the first Sunday of every month — open to everyone.</p>
          <div className="temple-card max-w-md">
            <div className="space-y-3 text-sm">
              <div className="flex justify-between"><span className="font-medium">When</span><span className="text-muted-foreground">First Sunday, 11 AM – 1 PM</span></div>
              <div className="flex justify-between"><span className="font-medium">Where</span><span className="text-muted-foreground">Board Room, HTGC Campus</span></div>
              <div className="flex justify-between"><span className="font-medium">Cost</span><span className="text-primary font-medium">FREE — open to all</span></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
