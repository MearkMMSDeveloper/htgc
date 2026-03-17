import { Link } from "react-router-dom";
import { Heart, Users } from "lucide-react";

const donationPrograms = [
  { title: "General Donation", desc: "Support day-to-day operations — priest services, daily prasadam, maintenance, and utilities." },
  { title: "Ehundi Donation", desc: "The traditional hundi offering box — a direct devotional gift dedicated to the deity of your choice." },
  { title: "Puja Sponsorship — $501", desc: "Become a sponsor of one of HTGC's major annual pujas and festivals." },
  { title: "Humanitarian Fund", desc: "Support community outreach — monthly Medical Camp, senior programs, and emergency assistance." },
  { title: "Yoga Program", desc: "Help keep yoga accessible by supporting instructor fees, equipment, and program development." },
  { title: "Sanjeevini Fund", desc: "Support the Ramsevak program and the Bilva Vruksha (sacred tree) initiative." },
  { title: "Poshaka — Temple Sustainer", desc: "Become a committed ongoing donor ensuring the temple's long-term stability and growth." },
  { title: "Dollar a Day", desc: "Just $1 a day — $365 a year — makes a meaningful difference. Easy and consistent giving." },
];

export default function GivePage() {
  return (
    <>
      <section className="section-padding bg-muted/50">
        <div className="max-w-[1400px] mx-auto">
          <span className="label-caps text-primary text-xs">Give & Get Involved</span>
          <h1 className="text-4xl md:text-6xl font-serif mt-3 mb-6">Support HTGC</h1>
          <p className="text-lg text-muted-foreground max-w-3xl">For nearly 40 years, the generosity of devotees like you has kept our temple thriving, our programs growing, and our doors open to all.</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-3xl font-serif mb-10">Donation Programs</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {donationPrograms.map((d, i) => (
              <div key={i} className="temple-card flex flex-col justify-between gap-4">
                <div>
                  <h3 className="text-lg font-serif mb-2">{d.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{d.desc}</p>
                </div>
                <button className="bg-primary text-primary-foreground px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest hover:brightness-110 transition-all self-start">
                  Donate
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Renovation Projects */}
      <section className="section-padding bg-muted/50">
        <div className="max-w-[1400px] mx-auto">
          <span className="label-caps text-primary text-xs">Building for the Future</span>
          <h2 className="text-3xl font-serif mt-3 mb-10">Renovation Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="temple-card">
              <h3 className="text-2xl font-serif mb-4">Sri Ramalaya Renovation</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">The main Rama Temple is undergoing a major renovation to preserve and enhance this sacred space for future generations. This is a once-in-a-generation opportunity to leave a lasting legacy.</p>
              <button className="bg-primary text-primary-foreground px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest hover:brightness-110 transition-all">
                Donate to Renovation
              </button>
            </div>
            <div className="temple-card">
              <h3 className="text-2xl font-serif mb-4">Vivekananda Spiritual Center</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">The VSC is the hub of HTGC's cultural and spiritual programming. The renovation will transform this space into a modern, accessible venue worthy of the programs it hosts.</p>
              <button className="bg-primary text-primary-foreground px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest hover:brightness-110 transition-all">
                Donate to VSC
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Membership & Volunteer */}
      <section className="section-padding">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Heart size={24} className="text-primary" />
              <h2 className="text-3xl font-serif">Become a Member</h2>
            </div>
            <p className="text-muted-foreground mb-6">Membership at HTGC is an expression of your commitment to the temple and the community it serves. As a member, you support the institution's long-term vision.</p>
            <button className="bg-primary text-primary-foreground px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:brightness-110 transition-all">
              Download Membership Form
            </button>
          </div>
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Users size={24} className="text-primary" />
              <h2 className="text-3xl font-serif">Volunteer</h2>
            </div>
            <p className="text-muted-foreground mb-4">HTGC runs on the energy, time, and talents of hundreds of dedicated volunteers. Opportunities include:</p>
            <ul className="space-y-2 mb-6">
              {["Vidyalaya teaching", "Library management", "Festival coordination", "Front desk & welcome", "Grounds & maintenance", "IT support", "Humanitarian committee"].map((v, i) => (
                <li key={i} className="flex gap-2 items-center text-sm text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />{v}
                </li>
              ))}
            </ul>
            <button className="bg-primary text-primary-foreground px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:brightness-110 transition-all">
              Volunteer at HTGC
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
