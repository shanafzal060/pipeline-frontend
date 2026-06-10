const stats = [
  {
    value: "$40K",
    label: "saved annually with Voice AI",
    company: "Top Mechanical Service Inc.",
  },
  {
    value: "41",
    label: "additional appointments in 30 days with Larry",
    company: "Heritage Mountain Heating & Cooling",
  },
  {
    value: "40%",
    label: "more calls handled with Podium Phones",
    company: "Lawrence Air Conditioning",
  },
  {
    value: "57",
    label: "appointments set by Larry in 30 days",
    company: "Warner Super Service",
  },
  {
    value: "5–15 hrs",
    label: "saved weekly with Podium AI",
    company: "Air Design Heating & Cooling",
  },
  {
    value: "$24K",
    label: "revenue generated — no calls made",
    company: "Air Design, 446 members",
  },
];

const quotes = [
  {
    quote:
      "When someone's AC is out in Louisiana, they want service NOW. If we respond first, we win the business.",
    name: "Carl Kelly",
    title: "COO",
    company: "Trouth AC",
  },
  {
    quote:
      "Instead of voicemails piling up, Larry 2.0 captures the customer's information, filters what's urgent, and tells us exactly what we're calling back about.",
    name: "Lauren Hardin",
    title: "Office Manager",
    company: "Olympus Electric & Air",
  },
  {
    quote:
      "I don't worry about my phones anymore. I know every call is answered. Now I can focus on everything else.",
    name: "Katherine Story",
    title: "Office Manager",
    company: "Arctic Air",
  },
  {
    quote:
      "Podium is amazing. Absolute game changer for us being able to text quickly and connect with our technicians.",
    name: "Amy Ewing",
    title: "Office and Service Manager",
    company: "Design Air, Inc.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-28 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-4">
            Real results for real businesses
          </p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight">
            Trusted by <span className="text-blue-400">9,000+</span> home
            service businesses
          </h2>
        </div>

        {/* Stat cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-14">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="bg-white/3 border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all"
            >
              <div className="text-4xl font-black text-white mb-2">
                {stat.value}
              </div>
              <p className="text-white/50 text-sm leading-snug mb-3">
                {stat.label}
              </p>
              <p className="text-white/30 text-xs font-medium">
                {stat.company}
              </p>
            </div>
          ))}
        </div>

        {/* Quote cards */}
        <div className="grid md:grid-cols-2 gap-5">
          {quotes.map((q, i) => (
            <div
              key={i}
              className="bg-white/3 border border-white/10 rounded-2xl p-7 hover:border-white/20 transition-all"
            >
              <div className="flex gap-1 mb-5">
                {Array.from({ length: 5 }).map((_, j) => (
                  <span key={j} className="text-yellow-400 text-base">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-white/80 text-base leading-relaxed mb-6 italic">
                "{q.quote}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-linear-to-br from-blue-500/50 to-violet-500/50 flex items-center justify-center text-sm font-bold text-white">
                  {q.name[0]}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{q.name}</p>
                  <p className="text-white/40 text-xs">
                    {q.title}, {q.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
