import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Play, Pause } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const calls = [
  {
    title: "AC Repair — Same-Day Dispatch",
    desc: "Voice AI captures the issue and gets a same-day technician on the way with no transfers and no waiting.",
    duration: "1:42",
    tag: "HVAC",
  },
  {
    title: "Emergency Plumbing",
    desc: "Voice AI turns a cold emergency into an urgent same-day dispatch in under two minutes.",
    duration: "1:58",
    tag: "Plumbing",
  },
  {
    title: "Gas Leak Response",
    desc: "Voice AI handles a gas leak call with calm, collects the details, and routes it to dispatch without missing a beat.",
    duration: "2:11",
    tag: "Gas",
  },
  {
    title: "Urgent AC Booking",
    desc: "Voice AI books a same-day urgent AC repair with no hold music and no hassle.",
    duration: "1:34",
    tag: "HVAC",
  },
];

export default function VoiceCalls() {
  const [playing, setPlaying] = useState<number | null>(null);

  // Refs for animation
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Animate heading and subheading
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
            toggleActions: "play none none none",
          },
        },
      );

      // 2. Animate each call card with stagger
      const cards =
        cardsRef.current?.querySelectorAll<HTMLDivElement>(
          ".voice-call-card",
        ) || [];
      gsap.fromTo(
        cards,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.8,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none none",
          },
          delay: 1.0,
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-[#0a0a0a]"
      id="ai-voice-calls"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div ref={headingRef} className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
            Hear an AI Employee handle
            <br />
            real customer calls
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Larry answers in seconds, qualifies the lead, and books the job —
            all without a human on the line.
          </p>
        </div>

        <div ref={cardsRef} className="grid md:grid-cols-2 gap-5">
          {calls.map((call, i) => (
            <div
              key={i}
              className="voice-call-card group bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all"
            >
              <div className="flex items-start gap-4">
                <button
                  onClick={() => setPlaying(playing === i ? null : i)}
                  className="w-12 h-12 rounded-full bg-white flex items-center justify-center shrink-0 hover:scale-105 transition-transform shadow-lg"
                >
                  {playing === i ? (
                    <Pause size={16} className="text-black" fill="black" />
                  ) : (
                    <Play
                      size={16}
                      className="text-black ml-0.5"
                      fill="black"
                    />
                  )}
                </button>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded-full font-medium">
                      {call.tag}
                    </span>
                    <span className="text-white/30 text-xs">
                      {call.duration}
                    </span>
                  </div>
                  <h3 className="text-white font-semibold text-base mb-1">
                    {call.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed">
                    {call.desc}
                  </p>
                </div>
              </div>

              {/* Fake waveform */}
              <div className="mt-5 flex items-center gap-0.5 h-8">
                {Array.from({ length: 60 }).map((_, j) => (
                  <div
                    key={j}
                    className={`flex-1 rounded-full transition-all ${
                      playing === i ? "bg-blue-400/60" : "bg-white/15"
                    }`}
                    style={{
                      height: `${20 + Math.sin(j * 0.5 + i) * 12 + Math.random() * 10}%`,
                    }}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
