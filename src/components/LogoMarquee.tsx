// components/LogoMarquee.tsx

const logos = [
  { src: "/src/assets/logos/aaa.png", alt: "AAA Service" },
  { src: "/src/assets/logos/airdesign.png", alt: "Air Design" },
  { src: "/src/assets/logos/articalcompany.png", alt: "Arctic Air Company" },
  {
    src: "/src/assets/logos/pride.png",
    alt: "Pride Air Conditioning & Plumbing",
  },
  { src: "/src/assets/logos/southern.png", alt: "Southern Heating & Cooling" },
  { src: "/src/assets/logos/topmechanical.png", alt: "Top Mechanical" },
  { src: "/src/assets/logos/trouth.png", alt: "TROUTH" },
];

export default function LogoMarquee() {
  return (
    <div className="w-full z-10">
      <div className="text-white/60 text-sm text-center mb-4">
        9,000+ SERVICE PROVIDERS TRUST PIPELINE
      </div>

      <div className="overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap gap-12 md:gap-16">
          {/* First set */}
          <div className="flex items-center gap-12 md:gap-16 shrink-0">
            {logos.map((logo, index) => (
              <img
                key={index}
                src={logo.src}
                alt={logo.alt}
                className="h-9 md:h-10 opacity-90 hover:opacity-100 transition-opacity"
              />
            ))}
          </div>

          {/* Duplicate set for seamless infinite loop */}
          <div className="flex items-center gap-12 md:gap-16 shrink-0">
            {logos.map((logo, index) => (
              <img
                key={`dup-${index}`}
                src={logo.src}
                alt={logo.alt}
                className="h-9 md:h-10 opacity-90 hover:opacity-100 transition-opacity"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
