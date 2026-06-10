import { Link } from "react-router-dom";

export default function CTA() {
  return (
    <section className="py-24 bg-linear-to-br from-[#26405E] via-[#191A15] to-[#552929]">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <div className="relative rounded-3xl bg-linear-to-br from-[#26405E] via-[#191A15] to-[#552929] border-blue-500/20 p-16 overflow-hidden">
          {/* Background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-400 h-75 bg-blue-600/15 rounded-full blur-[80px] pointer-events-none" />

          <div className="relative z-10 font-frances">
            <h2 className="text-4xl md:text-5xl font-extralight tracking-tight mb-5">
              See how Larry helps grow your revenue by{" "}
              <span className="bg-linear-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                30%
              </span>{" "}
              without adding headcount
            </h2>
            <p className="text-white/50 text-lg mb-10 max-w-xl mx-auto">
              Join 9,000+ home service businesses already running on the Podium
              AI Operating System.
            </p>
            <Link
              to="/demo"
              className="inline-flex items-center gap-2 bg-[#A54848] text-white px-10 py-5 rounded-full text-base font-bold hover:bg-[#862525] transition-all hover:scale-105 shadow-2xl shadow-blue-500/20"
            >
              Show me how →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
