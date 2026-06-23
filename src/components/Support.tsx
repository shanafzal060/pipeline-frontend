import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Star, HeadphonesIcon, Plug } from "lucide-react";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

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
  const sectionRef = useRef<HTMLElement>(null);
  const itemsRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Animate each support card with stagger
      const cards =
        itemsRef.current?.querySelectorAll<HTMLDivElement>(".support-card") ||
        [];
      gsap.fromTo(
        cards,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        },
      );

      // 2. Animate CTA button
      gsap.fromTo(
        buttonRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
          delay: 0.5,
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={itemsRef} className="grid md:grid-cols-3 gap-8">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} className="support-card text-center">
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
            ref={buttonRef}
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
