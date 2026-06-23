import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

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
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const tagsRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Animate heading + subtitle
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        },
      );

      // 2. Animate each integration tag with stagger
      const tags =
        tagsRef.current?.querySelectorAll<HTMLDivElement>(".integration-tag") ||
        [];
      gsap.fromTo(
        tags,
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.05,
          ease: "power1.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none none",
          },
          delay: 0.2,
        },
      );

      // 3. Animate CTA button
      gsap.fromTo(
        buttonRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 1.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none none",
          },
          delay: 0.6,
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div ref={headingRef}>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
            Connect with the tools
            <br />
            you already use
          </h2>
          <p className="text-white/50 text-lg mb-14 max-w-xl mx-auto">
            Podium integrates with your existing FSM, accounting, and lead
            generation platforms so nothing changes in your workflow.
          </p>
        </div>

        <div
          ref={tagsRef}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {integrations.map((name) => (
            <div
              key={name}
              className="integration-tag bg-white/5 border border-white/10 rounded-xl px-5 py-3 text-sm font-medium text-white/60 hover:text-white hover:border-white/25 hover:bg-white/[0.07] transition-all"
            >
              {name}
            </div>
          ))}
          <div className="integration-tag bg-blue-500/10 border border-blue-500/30 rounded-xl px-5 py-3 text-sm font-medium text-blue-400">
            + many more
          </div>
        </div>

        <Link
          ref={buttonRef}
          to="/demo"
          className="inline-flex items-center gap-2 bg-[#A54848] text-white px-8 py-4 rounded-full font-bold text-base hover:bg-[#862525] transition-all hover:scale-105 shadow-lg shadow-white/10"
        >
          Watch a demo
        </Link>
      </div>
    </section>
  );
}
