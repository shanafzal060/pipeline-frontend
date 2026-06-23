import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText"; // 👈 import SplitText
import { PhoneCallIcon } from "lucide-react";
import LogoMarquee from "./LogoMarquee";
import { Link } from "react-router-dom";

// Register plugins
gsap.registerPlugin(ScrollTrigger, SplitText);

export default function Hero() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const paragraphRef = useRef(null);
  const buttonsRef = useRef(null);
  const marqueeRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Split the title into lines
      const titleSplit = new SplitText(titleRef.current, {
        type: "lines",
        linesClass: "line",
      });

      // Split the paragraph into lines
      const paragraphSplit = new SplitText(paragraphRef.current, {
        type: "lines",
        linesClass: "line",
      });

      // Set initial state: hidden & shifted down
      gsap.set(titleSplit.lines, { opacity: 0, y: 40 });
      gsap.set(paragraphSplit.lines, { opacity: 0, y: 40 });
      gsap.set(buttonsRef.current, { opacity: 0, y: 40 });

      // Animate title lines one by one
      gsap.to(titleSplit.lines, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      // Animate paragraph lines after title finishes (or with slight delay)
      gsap.to(paragraphSplit.lines, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
        delay: 0.6, // wait for title to start
      });

      // Animate buttons
      gsap.to(buttonsRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
        delay: 1.2,
      });

      // Marquee animation
      gsap.fromTo(
        marqueeRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 1.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        },
      );

      // Optional: parallax on video
      gsap.to(".video-overlay", {
        scale: 1.05,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col items-center justify-center pt-16 overflow-hidden bg-black"
    >
      {/* Video Background */}
      <div className="absolute inset-0 z-10 video-overlay">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="src/assets/poster-image.jpg"
        >
          <source src="src/assets/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full text-center mt-40">
        <div className="max-w-5xl mx-auto flex items-center flex-col gap-6 px-4">
          <h1
            ref={titleRef}
            className="text-5xl md:text-[52px] font-frances border-b-white border-l-white border-r-white border-t-white box-border text-white cursor-pointer text-[52px] font-normal h-[114.406px] leading-[57.2px] mb-0 mt-0 min-h-auto min-w-auto text-center w-[721.688px]"
          >
            The #1 AI Operating System for home services
          </h1>

          <p
            ref={paragraphRef}
            className="text-lg md:text-xl tracking-tighter text-white/80 max-w-5xl mx-auto leading-relaxed"
          >
            One system for your calls, jobs, and customers — Meet Larry your AI
            Employee who answers every call, books the job, and grows revenue
            from customers you already have.
          </p>

          <div
            ref={buttonsRef}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              to="/demo"
              className="bg-[#A54848] hover:bg-[#862525] transition-all px-10 py-4 rounded-full text-white font-bold text-lg hover:scale-105"
            >
              Watch a demo
            </Link>

            <div className="flex items-center gap-3 text-white hover:text-white transition-colors group">
              <span className="text-lg">Listen to a Voice AI call</span>
              <div className="w-12 h-12 rounded-full border border-white/40 group-hover:border-white flex items-center justify-center transition-all">
                <PhoneCallIcon size={20} fill="currentColor" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Logo Marquee */}
      <LogoMarquee />

    </section>
  );
};
