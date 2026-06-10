import { Link } from "react-router-dom";

const integrations = [
  "ServiceTitan",
  "Housecall Pro",
  "FieldEdge",
  "Successware",
  "Google Business",
  "QuickBooks",
  "Thumbtack",
  "Angi",
  "HomeAdvisor",
  "Yelp",
];

export default function Integrations() {
  return (
    <section className="py-24 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
          Connect with the tools
          <br />
          you already use
        </h2>
        <p className="text-white/50 text-lg mb-14 max-w-xl mx-auto">
          Podium integrates with your existing FSM, accounting, and lead
          generation platforms so nothing changes in your workflow.
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {integrations.map((name) => (
            <div
              key={name}
              className="bg-white/4 border border-white/10 rounded-xl px-5 py-3 text-sm font-medium text-white/60 hover:text-white hover:border-white/25 hover:bg-white/[0.07] transition-all"
            >
              {name}
            </div>
          ))}
          <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl px-5 py-3 text-sm font-medium text-blue-400">
            + many more
          </div>
        </div>

        <Link
          to="/demo"
          className="inline-flex items-center gap-2 bg-[#A54848] text-white px-8 py-4 rounded-full font-bold text-base hover:bg-[#862525] transition-all hover:scale-105 shadow-lg shadow-white/10"
        >
          Watch a demo
        </Link>
      </div>
    </section>
  );
}
