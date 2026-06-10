import { Link } from "react-router-dom";

const socialIcons = [
  {
    label: "Facebook",
    svg: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    svg: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    svg: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "X / Twitter",
    svg: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white">
      {/* ─── Main footer grid ─── */}
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-10">
        <div className="flex flex-col justify-between gap-12 md:flex-row">
          {/* Left: CTA */}
          <div className="max-w-105">
            <h3 className="font-serif text-[1.6rem] font-normal leading-snug text-white md:text-[1.75rem]">
              Learn to grow revenue with the #1 AI Employee for Home Services.
            </h3>
            <Link
              to="/demo"
              className="mt-6 inline-flex items-center rounded-full bg-[#d4d4d4] px-8 py-3.5 text-sm font-semibold text-[#1a1a1a] transition hover:bg-white"
            >
              Watch a demo
            </Link>
          </div>

          {/* Right: Two link columns */}
          <div className="flex gap-14 md:gap-20">
            {/* PipeLine Home Services */}
            <div>
              <h4 className="mb-5 text-base font-semibold text-white">
                PipeLine Home Services
              </h4>
              <ul className="flex flex-col gap-3">
                {[
                  "Meet Larry",
                  "Larry & AI Agents",
                  "FSM",
                  "Membership & Marketing",
                  "Plans",
                  "Contact Sales",
                ].map((item) => (
                  <li key={item}>
                    <Link
                      to="/demo"
                      className="text-sm text-white/60 transition hover:text-white"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="mb-5 text-base font-semibold text-white">
                Resources
              </h4>
              <ul className="flex flex-col gap-3">
                {["Pipeline Home", "Blogs & Guides", "Download Pipeline Apps"].map(
                  (item) => (
                    <li key={item}>
                      <Link
                        to="/demo"
                        className="text-sm text-white/60 transition hover:text-white"
                      >
                        {item}
                      </Link>
                    </li>
                  ),
                )}
              </ul>
            </div>
          </div>
        </div>

        {/* Social icons — right aligned, below link columns */}
        <div className="mt-10 flex justify-end gap-3">
          {socialIcons.map((icon) => (
            <a
              key={icon.label}
              href="#"
              aria-label={icon.label}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/70 transition hover:border-white/40 hover:text-white"
            >
              {icon.svg}
            </a>
          ))}
        </div>
      </div>

      {/* ─── Copyright bar ─── */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-5 md:flex-row">
          <p className="text-sm font-semibold text-white/50">
            © PipeLine Corp Inc. 2026
          </p>
          <nav className="flex flex-wrap items-center gap-6">
            {[
              "Sitemap",
              "Terms & Conditions",
              "Privacy Policy",
              "Privacy Center",
              "Do Not Sell or Share My Personal Information",
            ].map((item) => (
              <a
                key={item}
                href="#"
                className="text-sm text-white/50 transition hover:text-white"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* ─── Giant watermark ─── */}
      <div className="relative overflow-hidden bg-[#1a1a1a]">
        <div className="mx-auto max-w-7xl px-6 pb-2">
          <div className="flex items-start">
            <span className="select-none font-sans text-[10rem] font-black leading-[0.85] tracking-tighter text-white md:text-[14rem] lg:text-[18rem]">
              pipeline
            </span>
            <span className="font-serif mt-3 ml-4 text-3xl text-white md:mt-4 md:text-4xl lg:text-5xl">
              Home Services
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
