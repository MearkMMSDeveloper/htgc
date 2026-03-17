import { Link } from "react-router-dom";
import { MapPin, Phone, Clock, Car, HelpCircle } from "lucide-react";

const faqs = [
  { q: "Is there a fee to enter the temple?", a: "There is no entry fee. The temple is free and open to all. Voluntary donations are gratefully accepted." },
  { q: "Can I attend a puja?", a: "Yes. Daily pujas are open to all visitors. You are also welcome to sponsor a puja for yourself or your family." },
  { q: "Is the temple open on holidays?", a: "Yes, the temple is open 365 days a year. On major Hindu festivals, special pujas and extended programming take place." },
  { q: "Is parking available?", a: "Yes. Free parking is available in our on-site parking lot." },
  { q: "Are children welcome?", a: "Absolutely. Children are an important part of our community. We encourage families to bring children." },
];

export default function VisitPage() {
  return (
    <>
      <section className="section-padding bg-muted/50">
        <div className="max-w-[1400px] mx-auto">
          <span className="label-caps text-primary text-xs">Visit Us</span>
          <h1 className="text-4xl md:text-6xl font-serif mt-3 mb-6">Plan Your Visit</h1>
          <p className="text-lg text-muted-foreground max-w-3xl">We welcome visitors of all backgrounds and faiths. Whether you are here to pray, explore, or experience Hindu culture for the first time, you will find a warm and peaceful sanctuary.</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-3xl font-serif mb-8">Essential Information</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: MapPin, label: "Address", value: "10915 Lemont Road, Lemont, IL 60439" },
              { icon: Clock, label: "Temple Hours", value: "Open Daily: 9:00 AM – 8:00 PM" },
              { icon: Phone, label: "Phone", value: "630-972-0300" },
              { icon: Car, label: "From Downtown", value: "~28 miles, ~35 min by car" },
            ].map((item, i) => (
              <div key={i} className="temple-card flex flex-col gap-3">
                <item.icon size={20} className="text-primary" />
                <span className="label-caps text-[0.6rem] text-muted-foreground">{item.label}</span>
                <span className="text-sm font-medium">{item.value}</span>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <a href="https://maps.google.com/?q=10915+Lemont+Road+Lemont+IL+60439" target="_blank" rel="noopener noreferrer" className="text-sm font-bold border-b-2 border-primary pb-1 text-primary">
              Get Directions (Google Maps)
            </a>
          </div>
        </div>
      </section>

      <section className="section-padding bg-muted/50">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-3xl font-serif mb-8">What to Expect on Your Visit</h2>
          <div className="max-w-2xl space-y-4">
            {[
              "Park in our free parking lot adjacent to the temple complex.",
              "Remove your footwear before entering — a shoe rack is provided at the entrance.",
              "Dress modestly — clothing that covers shoulders and knees is recommended.",
              "Begin your darshan in the main Rama Temple, then visit the GSD Temple.",
              "Priests are available to assist with archanas and guide you through the temple.",
              "Prasadam (blessed food offerings) is distributed after major pujas.",
              "The temple bookshop and gift shop carry religious items, books, and souvenirs.",
              "The library is open on weekends — visitors are welcome to browse.",
            ].map((step, i) => (
              <div key={i} className="flex gap-4 items-start">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">{i + 1}</span>
                <p className="text-muted-foreground pt-1">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-3xl font-serif mb-4">Dress Code & Etiquette</h2>
          <ul className="space-y-3 max-w-2xl text-muted-foreground">
            {[
              "Modest dress is requested — traditional Indian attire is welcomed and appreciated",
              "Remove shoes before entering any shrine area",
              "Maintain silence or a soft voice inside the sanctum",
              "Photography may be permitted in certain areas — please ask staff",
              "Mobile phones should be on silent or switched off near the shrines",
              "Non-Hindus are warmly welcome — no prior knowledge is needed",
            ].map((rule, i) => (
              <li key={i} className="flex gap-3 items-start">
                <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-2" />
                {rule}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-padding bg-muted/50">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-3xl font-serif mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6 max-w-2xl">
            {faqs.map((faq, i) => (
              <div key={i} className="temple-card">
                <div className="flex gap-3 items-start">
                  <HelpCircle size={18} className="text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-sm mb-2">{faq.q}</h3>
                    <p className="text-sm text-muted-foreground">{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
