import { Star, HeadphonesIcon, Plug } from "lucide-react";
import { Link } from "react-router-dom";

const items = [
  {
    icon: Star,
    title: "Premium onboarding",
    desc: "Our white-glove onboarding service ensures you're set up for success. You'll have a Podium team member available every step of the way.",
  },
  {
    icon: HeadphonesIcon,
    title: "Dedicated customer support",
    desc: "Whatever your business needs, our expert support team is here to help you so you can focus on what you do best.",
  },
  {
    icon: Plug,
    title: "Works with your systems",
    desc: "Podium integrates with the tools your front and back office already use, so you don't notice interruptions in your day-to-day.",
  },
];

export default function Support() {
  return (
    <section className="py-24 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} className="text-center">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-5">
                  <Icon size={24} className="text-white/60" />
                </div>
                <h3 className="text-white font-bold text-xl mb-3">
                  {item.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <Link
            to="/demo"
            className="inline-flex items-center gap-2 bg-[#A54848] text-white px-8 py-4 rounded-full font-bold text-base hover:bg-[#862525] transition-all hover:scale-105 shadow-lg shadow-white/10"
          >
            Grow with us →
          </Link>
        </div>
      </div>
    </section>
  );
}
