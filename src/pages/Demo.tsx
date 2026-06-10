import { useEffect, useState } from "react";
import { submitDemo } from "../services/api";

export default function Demo() {
  /* ─── Form State ─── */
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  /* ─── Validation ─── */
  const validate = (data = formData) => {
    const e: Record<string, string> = {};

    if (!data.firstName.trim()) e.firstName = "First name is required";
    else if (data.firstName.trim().length < 2)
      e.firstName = "Must be at least 2 characters";

    if (!data.lastName.trim()) e.lastName = "Last name is required";
    else if (data.lastName.trim().length < 2)
      e.lastName = "Must be at least 2 characters";

    if (!data.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
      e.email = "Please enter a valid email";

    if (!data.phone.trim()) e.phone = "Phone number is required";
    else if (!/^\+\s*1\s*\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/.test(data.phone))
      e.phone = "Please enter a valid US phone number";

    if (!data.company.trim()) e.company = "Company is required";

    return e;
  };

  const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = ev.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleBlur = (ev: React.FocusEvent<HTMLInputElement>) => {
    const { name } = ev.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const fieldErrors = validate({ ...formData, [name]: ev.target.value });
    if (fieldErrors[name]) {
      setErrors((prev) => ({ ...prev, [name]: fieldErrors[name] }));
    }
  };

  const handleSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();

    const allTouched = Object.keys(formData).reduce(
      (acc, k) => ({ ...acc, [k]: true }),
      {},
    );
    setTouched(allTouched);

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitting(true);
      try {
        const response = await submitDemo({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
        });

        if (response.success) {
          alert(response.message || "Demo request submitted successfully!");
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            company: "",
          });
          setTouched({});
          setErrors({});
        }
      } catch (err) {
        const message =
          err instanceof Error ? err.message : "Something went wrong";
        alert(message);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const inputCls = (name: string) =>
    `h-11 w-full rounded-lg border bg-white px-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none transition ${
      errors[name] && touched[name]
        ? "border-red-500 focus:border-red-500"
        : "border-white/10 focus:border-white/30"
    }`;

  /* ─── Testimonials ─── */
  const testimonials = [
    {
      quote:
        "My CSR has time to do more outgoing calls because AI can handle incoming ones. We've increased service agreement appointments and outbound sales efforts.",
      name: "Carl Kelly",
      title: "COO",
      company: "Trout AC",
      logoText: "TROUTH",
      logoSub: "Air Conditioning",
    },
    {
      quote:
        "Podium's AI answered every call after hours and booked three jobs we would have missed. It paid for itself in the first week.",
      name: "Sarah Mitchell",
      title: "Owner",
      company: "Mitchell HVAC",
      logoText: "MITCHELL",
      logoSub: "Heating & Cooling",
    },
    {
      quote:
        "We reduced our front-office workload by 60% while increasing customer satisfaction scores. The AI never misses a beat.",
      name: "James Rodriguez",
      title: "Operations Director",
      company: "CoolFlow Systems",
      logoText: "COOLFLOW",
      logoSub: "Climate Solutions",
    },
  ];

  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 1000);
    return () => clearInterval(interval);
  }, [isPaused, testimonials.length]);

  const nextTestimonial = () =>
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  const prevTestimonial = () =>
    setActiveTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );

  return (
    <main className="min-h-screen bg-[#0b0b10] text-white">

      {/* ═══════════════════════════════════════
          HERO SECTION — Blue glow top-left
          ═══════════════════════════════════════ */}
      <section className="relative isolate overflow-hidden">
        {/* 1. Deep blue ambient glow — top-left corner */}
        <div
          className="pointer-events-none absolute left-[-10%] top-[-10%] h-[60%] w-[60%] rounded-full opacity-30 blur-[120px]"
          style={{
            background: "radial-gradient(circle, #1e3a8a 0%, transparent 100%)",
          }}
        />
        {/* 2. Secondary softer blue wash */}
        <div
          className="pointer-events-none absolute left-[5%] top-[20%] h-[40%] w-[40%] rounded-full opacity-20 blur-[100px]"
          style={{
            background: "radial-gradient(circle, #3b82f6 0%, transparent 100%)",
          }}
        />
        {/* 3. Subtle dot mesh on the left half */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.4]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.25) 2px, transparent 2px)",
            backgroundSize: "24px 24px",
          }}
        />

        <div className="relative mx-auto grid max-w-7xl gap-8 px-6 py-16 md:grid-cols-2 md:py-24 lg:pb-0 lg:pt-32">
          {/* Left Column */}
          <div className="flex flex-col justify-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-white/50">
              Get started today
            </p>
            <h1 className="mb-8 font-serif text-[2.25rem] font-normal leading-tight text-white md:text-[2.5rem] lg:text-[2.75rem]">
              See the AI Operating System for home services in action
            </h1>

            <ul className="mb-10 space-y-4">
              {[
                "Never lose another lead to voicemail. See Larry answer, qualify, and book in real time.",
                "Watch a job go from first call to paid invoice without anyone touching it.",
                "See how Air Design generated $24K without anyone on their team making a call.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-white/90">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/80" />
                  <span className="text-base leading-relaxed md:text-lg">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap justify-center items-center gap-6">
              <G2Badge
                label="Leader"
                subtitle="#1 AI Agent"
                color="from-orange-400 via-red-500 to-red-600"
              />
              <G2Badge
                label="Best Results"
                subtitle="#1 AI Agent"
                color="from-purple-400 via-purple-500 to-indigo-600"
              />
              <G2Badge
                label="Most Implementable"
                subtitle="#1 AI Agent"
                color="from-blue-400 via-blue-500 to-blue-600"
              />
              <G2Badge
                label="Best Relationship"
                subtitle="#1 AI Agent"
                color="from-teal-400 via-teal-500 to-emerald-500"
              />
            </div>
          </div>

          {/* Right Column — Form Card */}
          <div className="flex items-start justify-center md:justify-end">
            <div className="w-full max-w-130 rounded-2xl border border-white/10 bg-[#14141c] p-6 shadow-2xl md:p-8">
              <h2 className="mb-6 font-serif text-xl font-semibold leading-snug text-white">
                One system. Every call, every job, every invoice. See it in 30
                minutes.
              </h2>

              <form className="space-y-4" onSubmit={handleSubmit} noValidate>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      value={formData.firstName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={inputCls("firstName")}
                    />
                    {errors.firstName && touched.firstName && (
                      <p className="mt-1 text-xs text-red-400">
                        {errors.firstName}
                      </p>
                    )}
                  </div>
                  <div>
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={inputCls("lastName")}
                    />
                    {errors.lastName && touched.lastName && (
                      <p className="mt-1 text-xs text-red-400">
                        {errors.lastName}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={inputCls("email")}
                  />
                  {errors.email && touched.email && (
                    <p className="mt-1 text-xs text-red-400">{errors.email}</p>
                  )}
                </div>

                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+1 (___) ___-____"
                    value={formData.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={inputCls("phone")}
                  />
                  {errors.phone && touched.phone && (
                    <p className="mt-1 text-xs text-red-400">{errors.phone}</p>
                  )}
                </div>

                <div>
                  <input
                    type="text"
                    name="company"
                    placeholder="Company"
                    value={formData.company}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={inputCls("company")}
                  />
                  {errors.company && touched.company && (
                    <p className="mt-1 text-xs text-red-400">
                      {errors.company}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`mt-2 h-12 w-full rounded-lg text-sm font-semibold text-white transition ${
                    isSubmitting
                      ? "cursor-not-allowed bg-[#b84a4a]/60"
                      : "bg-[#b84a4a] hover:bg-[#a04040]"
                  }`}
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </button>
              </form>

              <p className="mt-6 text-[11px] leading-relaxed text-white/40">
                By submitting, you authorize Podium to text/call the number
                above with information/offers, possibly using automated means
                &amp;/or AI-generated calls/content. Msg/data rates apply, msg
                frequency varies. Consent is not a condition of purchase.{" "}
                <a href="#" className="underline hover:text-white/60">
                  See terms.
                </a>{" "}
                Text HELP for help &amp; STOP to unsubscribe.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          TESTIMONIAL SECTION — Red glow bottom-right
          ═══════════════════════════════════════ */}
      <section className="relative isolate overflow-hidden bg-[#0b0b10] py-20 md:py-28">
        {/* 1. Deep red ambient glow — bottom-right corner */}
        <div
          className="pointer-events-none absolute bottom-[-10%] right-[-10%] h-[60%] w-[60%] rounded-full opacity-25 blur-[120px]"
          style={{
            background: "radial-gradient(circle, #7f1d1d 0%, transparent 100%)",
          }}
        />
        {/* 2. Secondary softer red wash */}
        <div
          className="pointer-events-none absolute bottom-[10%] right-[5%] h-[40%] w-[40%] rounded-full opacity-15 blur-[100px]"
          style={{
            background: "radial-gradient(circle, #b91c1c 0%, transparent 70%)",
          }}
        />
        {/* 3. Dot pattern across entire section */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.4]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.3) 2px, transparent 2px)",
            backgroundSize: "32px 32px",
          }}
        />

        <div className="relative mx-auto max-w-4xl px-6">
          {/* Top line */}
          <div className="mx-auto mb-12 h-px w-full max-w-2xl bg-white/20" />

          <div
            className="relative flex items-center justify-between"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Prev Arrow */}
            <button
              onClick={prevTestimonial}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 text-white/50 transition hover:border-white/30 hover:text-white"
              aria-label="Previous testimonial"
            >
              <svg
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M15 5l-5 5 5 5" />
              </svg>
            </button>

            {/* Quote Content */}
            <div className="mx-6 flex-1 text-center md:mx-12">
              <div className="mb-6 text-5xl leading-none text-white/20">“</div>
              <blockquote className="mb-8 text-lg font-normal leading-relaxed text-white/90 md:text-xl">
                {testimonials[activeTestimonial].quote}
              </blockquote>

              <div className="flex flex-col items-center gap-4 md:flex-row md:justify-center md:gap-6">
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <svg width="80" height="32" viewBox="0 0 80 32" fill="none">
                      <ellipse
                        cx="40"
                        cy="16"
                        rx="38"
                        ry="14"
                        stroke="white"
                        strokeWidth="1.5"
                      />
                      <text
                        x="40"
                        y="14"
                        textAnchor="middle"
                        fill="white"
                        fontSize="10"
                        fontWeight="bold"
                        fontFamily="serif"
                      >
                        {testimonials[activeTestimonial].logoText}
                      </text>
                      <text
                        x="40"
                        y="24"
                        textAnchor="middle"
                        fill="white"
                        fontSize="7"
                        fontFamily="sans-serif"
                      >
                        {testimonials[activeTestimonial].logoSub}
                      </text>
                    </svg>
                  </div>
                </div>

                <div className="text-left">
                  <p className="text-sm font-semibold text-white">
                    {testimonials[activeTestimonial].name},{" "}
                    {testimonials[activeTestimonial].title}
                  </p>
                  <p className="text-sm text-white/60">
                    {testimonials[activeTestimonial].company}
                  </p>
                </div>
              </div>
            </div>

            {/* Next Arrow */}
            <button
              onClick={nextTestimonial}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 text-white/50 transition hover:border-white/30 hover:text-white"
              aria-label="Next testimonial"
            >
              <svg
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M9 5l5 5-5 5" />
              </svg>
            </button>
          </div>

          {/* Dots */}
          <div className="mt-10 flex justify-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveTestimonial(i)}
                className={`h-2 w-2 rounded-full transition ${
                  i === activeTestimonial ? "bg-white/60" : "bg-white/20"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>

          {/* Bottom line */}
          <div className="mx-auto mt-12 h-px w-full max-w-2xl bg-white/20" />
        </div>
      </section>

    </main>
  );
}

/* ─── G2 Badge Component ─── */
function G2Badge({
  label,
  subtitle,
  color,
}: {
  label: string;
  subtitle: string;
  color: string;
}) {
  return (
    <div className="relative flex h-22 w-18 flex-col items-center justify-center overflow-hidden rounded-md border border-white/10 bg-white text-center shadow-sm">
      <div className="flex w-full items-center justify-between px-1.5 py-1">
        <span className="text-[7px] font-bold uppercase tracking-wide text-gray-800">
          Fall 2025
        </span>
        <div className="flex h-4 w-4 items-center justify-center rounded-sm bg-[#ff492c]">
          <svg width="10" height="10" viewBox="0 0 24 24" fill="white">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
          </svg>
        </div>
      </div>

      <div className="h-px w-full bg-gray-200" />

      <div className="flex flex-1 flex-col items-center justify-center px-1">
        <span className="text-[11px] font-extrabold leading-tight text-gray-900">
          {label}
        </span>
        <span className="mt-0.5 text-[9px] font-medium text-gray-600">
          {subtitle}
        </span>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-3">
        <svg
          viewBox="0 0 72 12"
          preserveAspectRatio="none"
          className="h-full w-full"
        >
          <defs>
            <linearGradient
              id={`grad-${label.replace(/\s/g, "")}`}
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop offset="0%" stopColor="transparent" />
              <stop offset="100%" className={color.split(" ")[0]} />
            </linearGradient>
          </defs>
          <polygon
            points="0,0 36,12 72,0"
            fill={`url(#grad-${label.replace(/\s/g, "")})`}
          />
        </svg>
        <div
          className={`absolute inset-0 bg-linear-to-b ${color} opacity-90`}
          style={{ clipPath: "polygon(0 0, 50% 100%, 100% 0)" }}
        />
      </div>
    </div>
  );
}
