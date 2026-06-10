import { Zap, Calendar, Inbox, Sun, Bot } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Never misses a lead",
    desc: "Responding in under 60 seconds increases conversion by nearly 400%. Larry responds every time.",
  },
  {
    icon: Calendar,
    title: "Books onto a real calendar",
    desc: "Larry books directly onto your dispatch board — right tech, right time, real availability. Not a generic slot.",
  },
  {
    icon: Inbox,
    title: "Every lead in one inbox",
    desc: "Every call, text, web lead, and social message in one inbox — searchable, transcribed, and ready for your team.",
  },
  {
    icon: Sun,
    title: "Fills your calendar before slow season hits",
    desc: "The AI Membership Coordinator texts your maintenance customers, checks your calendar, and books the visit.",
  },
  {
    icon: Bot,
    title: "Eliminates admin work",
    desc: "Larry updates customer profiles, sends arrival times, and follows up on leads automatically.",
  },
];

export default function Features() {
  return (
    <section className="py-24 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-4">
            Your AI Operating System at work
          </p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight">
            Every call answered.
            <br />
            Every job booked. Every season full.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <div
                key={i}
                className="bg-white/3 border border-white/10 rounded-2xl p-7 hover:bg-white/6 hover:border-white/20 transition-all group"
              >
                <div className="w-11 h-11 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-5 group-hover:bg-blue-500/20 transition-colors">
                  <Icon size={20} className="text-blue-400" />
                </div>
                <h3 className="text-white font-bold text-lg mb-3">{f.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  {f.desc}
                </p>
              </div>
            );
          })}

          {/* CTA card */}
          <div className="bg-linear-to-br from-blue-600/30 to-violet-600/20 border border-blue-500/30 rounded-2xl p-7 flex flex-col justify-between">
            <div>
              <h3 className="text-white font-bold text-xl mb-3">
                See it in action
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Watch Larry handle real customer calls, book jobs, and grow your
                revenue — live demo, no commitment.
              </p>
            </div>
            <a
              href="#demo"
              className="mt-6 bg-[#A54848] hover:bg-[#862525] text-white px-6 py-3 rounded-full text-sm font-bold  transition-colors text-center"
            >
              Watch a demo →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
