import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { X } from "lucide-react";

const donationFunds = [
  { id: "general_donation", name: "General Donation", desc: "Supports day-to-day temple operations — priests, prasadam, maintenance, and utilities.", link: "https://www.htgc.org/general-donation" },
  { id: "ehundi", name: "Ehundi — Offering to the Lord", desc: "A traditional devotional offering dedicated directly to the deity of your choice.", link: "https://www.htgc.org/ehundi-donation" },
  { id: "dollar_a_day", name: "Dollar a Day", desc: "Just $1 a day adds up to $365 a year of consistent temple support. Set it up once.", link: "https://www.htgc.org/dollar-a-day-donation" },
  { id: "poshaka", name: "Poshaka — Monthly Sustainer", desc: "A committed monthly donor who helps the temple plan and grow with confidence.", link: "https://www.htgc.org/poshaka-donation" },
  { id: "ramalaya_renovation", name: "Sri Ramalaya Renovation", desc: "Capital campaign to restore and enhance the oldest Rama temple in the United States.", link: "https://www.htgc.org/ramalaya-renovation" },
  { id: "vsc_renovation", name: "VSC Renovation", desc: "Renovation of the cultural hall to create a modern venue for community programs.", link: "https://www.htgc.org/vsc-renovation" },
  { id: "yoga", name: "Yoga Program", desc: "Supports instructor fees, equipment, and keeping yoga classes affordable for all students.", link: "https://www.htgc.org/yoga-donation" },
  { id: "humanitarian", name: "Humanitarian Fund & Medical Camp", desc: "Funds the free monthly health clinic and community welfare outreach programs.", link: "https://www.htgc.org/humanitarian-donation" },
  { id: "sanjeevini", name: "Sanjeevini Fund", desc: "Supports the Ramsevak seva programme and Bilva Vruksha sacred tree initiative.", link: "https://www.htgc.org/sanjeevini-donation" },
  { id: "sponsor", name: "$501+ Major Events Sponsorship", desc: "Sponsor a major annual puja or festival. Your name announced during the ceremony.", link: "https://htgc.wufoo.com/forms/htgc-major-puja-sponsorship" },
];

const amounts = [11, 25, 51, 101];

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function QuickDonateModal({ open, onOpenChange }: Props) {
  const [selectedFund, setSelectedFund] = useState("");
  const [selectedAmount, setSelectedAmount] = useState(51);
  const [customAmount, setCustomAmount] = useState("");
  const [isCustom, setIsCustom] = useState(false);
  const [frequency, setFrequency] = useState<"one-time" | "monthly">("one-time");

  const fund = donationFunds.find(f => f.id === selectedFund);

  const handleProceed = () => {
    if (fund?.link) {
      window.open(fund.link, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-card border-border">
        <DialogHeader>
          <DialogTitle className="text-2xl font-serif">Make a Gift to HTGC</DialogTitle>
          <DialogDescription className="text-sm text-muted-foreground">
            All gifts are tax-deductible. HTGC is a registered 501(c)(3).
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-5 mt-2">
          {/* Fund Selector */}
          <div>
            <label className="label-caps text-[0.65rem] text-muted-foreground mb-2 block">I want to support…</label>
            <select
              value={selectedFund}
              onChange={(e) => setSelectedFund(e.target.value)}
              className="w-full px-4 py-3 bg-background border border-border text-sm rounded-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
              aria-label="Choose a fund"
            >
              <option value="">Choose a fund</option>
              {donationFunds.map(f => (
                <option key={f.id} value={f.id}>{f.name}</option>
              ))}
            </select>
            {fund && (
              <p className="text-xs text-muted-foreground italic mt-2 leading-relaxed">{fund.desc}</p>
            )}
          </div>

          {/* Amount Selector */}
          <div>
            <label className="label-caps text-[0.65rem] text-muted-foreground mb-2 block">Gift amount</label>
            <div className="flex flex-wrap gap-2">
              {amounts.map(amt => (
                <button
                  key={amt}
                  onClick={() => { setSelectedAmount(amt); setIsCustom(false); }}
                  className={`px-4 py-2 rounded-full text-sm font-medium border transition-all ${
                    !isCustom && selectedAmount === amt
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-background border-border text-foreground hover:border-primary/50"
                  }`}
                  aria-label={`Donate $${amt}`}
                >
                  ${amt}
                </button>
              ))}
              <button
                onClick={() => setIsCustom(true)}
                className={`px-4 py-2 rounded-full text-sm font-medium border transition-all ${
                  isCustom
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-background border-border text-foreground hover:border-primary/50"
                }`}
                aria-label="Enter custom amount"
              >
                Custom
              </button>
            </div>
            {isCustom && (
              <input
                type="number"
                min="1"
                placeholder="Enter amount"
                value={customAmount}
                onChange={(e) => setCustomAmount(e.target.value)}
                className="w-full mt-3 px-4 py-3 bg-background border border-border text-sm rounded-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                aria-label="Custom donation amount"
              />
            )}
          </div>

          {/* Frequency */}
          <div>
            <label className="label-caps text-[0.65rem] text-muted-foreground mb-2 block">Frequency</label>
            <div className="flex gap-2">
              {(["one-time", "monthly"] as const).map(freq => (
                <button
                  key={freq}
                  onClick={() => setFrequency(freq)}
                  className={`flex-1 py-2.5 rounded-full text-sm font-medium border transition-all ${
                    frequency === freq
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-background border-border text-foreground hover:border-primary/50"
                  }`}
                  aria-label={freq === "one-time" ? "One-time donation" : "Monthly donation"}
                >
                  {freq === "one-time" ? "One-time" : "Monthly"}
                </button>
              ))}
            </div>
          </div>

          {/* Submit */}
          <button
            onClick={handleProceed}
            disabled={!selectedFund}
            className="w-full bg-primary text-primary-foreground py-3.5 rounded-full text-sm font-bold uppercase tracking-widest hover:brightness-110 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Proceed to donate"
          >
            Proceed to Donate
          </button>

          <p className="text-xs text-muted-foreground text-center">
            Prefer to give by cheque or in person? Visit us at the temple or call 630-972-0300.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
