import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "How difficult is it to switch from my current FSM?",
    a: "Most accounts are fully live in 14 days. Podium's onboarding team migrates your contacts, job history, price book, and memberships — and stays with you through field training, office training, and AI setup. You don't figure it out on your own.",
  },
  {
    q: "Does Larry actually book jobs, or does he just take messages?",
    a: "Larry books real jobs. He has live access to your dispatch board, technician availability, and price book. When a customer calls, Larry qualifies the job, checks your calendar for the right tech, and confirms the appointment — all without a human stepping in.",
  },
  {
    q: "What is the AI Membership Coordinator?",
    a: "The AI Membership Coordinator is a feature of Larry that proactively texts your existing membership customers when their maintenance visits are due. It checks your calendar, offers available slots, and books the visit automatically. Air Design used it to generate $24K in revenue without a single staff call.",
  },
  {
    q: "Do my customers know they're talking to AI?",
    a: "That's up to you. Many Podium customers configure Larry to introduce himself by name and as an AI assistant. Others have him act as part of the office team. Either way, Larry is indistinguishable from a well-trained human dispatcher in both tone and capability.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-black text-4xl font-black font-frances  text-center mb-14">
          Frequently Asked Questions
        </h2>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-black/10 rounded-2xl overflow-hidden bg-black/2 hover:border-black/20 transition-colors "
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-7 py-5 text-left font-frances "
              >
                <span className="text-black font-semibold text-base">
                  {faq.q}
                </span>
                <ChevronDown
                  size={18}
                  className={`text-black/40 shrink-0 transition-transform ${open === i ? "rotate-180" : ""}`}
                />
              </button>
              {open === i && (
                <div className="px-7 pb-6">
                  <p className="text-black/55 text-sm leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
