import { useState } from "react";
import { MapPin, Phone, Clock, Mail } from "lucide-react";

const committees = [
  { name: "Advisory", email: "advisory-chair@htgc.org" },
  { name: "Buildings & Facilities", email: "buildings-chair@htgc.org" },
  { name: "Cultural Programs", email: "cultural-chair@htgc.org" },
  { name: "Vidyalaya & Education", email: "vidyalaya-chair@htgc.org" },
  { name: "Fine Arts", email: "finearts-chair@htgc.org" },
  { name: "Hall Rental & Priests", email: "manager@htgc.org" },
  { name: "Humanitarian & Medical", email: "humanitarian-chair@htgc.org" },
  { name: "IT & Website", email: "itadmin@htgc.org" },
  { name: "Membership", email: "membership-chair@htgc.org" },
  { name: "Religious Committee", email: "religious@htgc.org" },
  { name: "Yoga & Meditation", email: "hathayoga@htgc.org" },
  { name: "Volunteer", email: "volunteer-chair@htgc.org" },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });

  return (
    <>
      <section className="section-padding bg-muted/50">
        <div className="max-w-[1400px] mx-auto">
          <span className="label-caps text-primary text-xs">Contact</span>
          <h1 className="text-4xl md:text-6xl font-serif mt-3 mb-6">Get In Touch</h1>
          <p className="text-lg text-muted-foreground max-w-3xl">Whether you have a question about temple services, want to book a ceremony, or simply want to connect — reach out and we'll respond promptly.</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-serif mb-8">Contact Details</h2>
            <div className="space-y-6">
              {[
                { icon: MapPin, label: "Address", value: "10915 Lemont Road, Lemont, IL 60439" },
                { icon: Phone, label: "Phone", value: "630-972-0300" },
                { icon: Clock, label: "Temple Hours", value: "Open Daily 9:00 AM – 8:00 PM" },
                { icon: Mail, label: "Manager", value: "manager@htgc.org" },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <item.icon size={18} className="text-primary mt-0.5" />
                  <div>
                    <span className="label-caps text-[0.6rem] text-muted-foreground block mb-1">{item.label}</span>
                    <span className="text-sm">{item.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-serif mb-8">Send Us a Message</h2>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <input
                type="text" placeholder="Full Name" value={form.name}
                onChange={(e) => setForm({...form, name: e.target.value})}
                className="w-full px-4 py-3 bg-card border border-border/50 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
              />
              <input
                type="email" placeholder="Email Address" value={form.email}
                onChange={(e) => setForm({...form, email: e.target.value})}
                className="w-full px-4 py-3 bg-card border border-border/50 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
              />
              <input
                type="tel" placeholder="Phone Number (optional)" value={form.phone}
                onChange={(e) => setForm({...form, phone: e.target.value})}
                className="w-full px-4 py-3 bg-card border border-border/50 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
              />
              <input
                type="text" placeholder="Subject" value={form.subject}
                onChange={(e) => setForm({...form, subject: e.target.value})}
                className="w-full px-4 py-3 bg-card border border-border/50 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
              />
              <textarea
                placeholder="Message" rows={5} value={form.message}
                onChange={(e) => setForm({...form, message: e.target.value})}
                className="w-full px-4 py-3 bg-card border border-border/50 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none"
              />
              <button type="submit" className="bg-primary text-primary-foreground px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:brightness-110 transition-all">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Committee Directory */}
      <section className="section-padding bg-muted/50">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-3xl font-serif mb-8">Committee Contact Directory</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {committees.map((c, i) => (
              <div key={i} className="temple-card py-5 px-6 flex justify-between items-center">
                <span className="text-sm font-medium">{c.name}</span>
                <a href={`mailto:${c.email}`} className="text-xs text-primary hover:underline">{c.email}</a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
