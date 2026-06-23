import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

export default function CTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Animate heading, paragraph, and button with stagger
      gsap.fromTo(
        [headingRef.current, paragraphRef.current, buttonRef.current],
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        },
      );

      // 2. Optional: animate the background glow – fade and scale in
      gsap.fromTo(
        glowRef.current,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        },
      );

      // 3. Optional: gentle pulsing on the glow (continuous)
      gsap.to(glowRef.current, {
        scale: 1.05,
        opacity: 0.8,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-linear-to-br from-[#26405E] via-[#191A15] to-[#552929]"
    >
      <div className="max-w-5xl mx-auto px-6 text-center">
        <div className="relative rounded-3xl bg-linear-to-br from-[#26405E] via-[#191A15] to-[#552929] border-blue-500/20 p-16 overflow-hidden">
          {/* Background glow */}
          <div
            ref={glowRef}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-400 h-75 bg-blue-600/15 rounded-full blur-[80px] pointer-events-none"
          />

          <div className="relative z-10 font-frances">
            <h2
              ref={headingRef}
              className="text-4xl md:text-5xl font-extralight tracking-tight mb-5"
            >
              See how Larry helps grow your revenue by{" "}
              <span className="bg-linear-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                30%
              </span>{" "}
              without adding headcount
            </h2>
            <p
              ref={paragraphRef}
              className="text-white/50 text-lg mb-10 max-w-xl mx-auto"
            >
              Join 9,000+ home service businesses already running on the Podium
              AI Operating System.
            </p>
            <Link
              ref={buttonRef}
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
