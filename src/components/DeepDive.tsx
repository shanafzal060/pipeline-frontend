import { useState } from "react";

const sections = [
  {
    id: "leads",
    badge: "Leads & Messaging",
    eyebrow: "Your #1 converting employee",
    heading: "Responds immediately, 24/7",
    features: [
      {
        title: "Responds immediately, 24/7",
        desc: "Most home services businesses lose 40% of leads after-hours. Larry works day and night so you are always the first to respond.",
      },
      {
        title: "Books directly",
        desc: "Larry has real-time access to your calendar, your techs, and your price book. He doesn't take a message, he finishes the booking.",
      },
      {
        title: "Optimizes technician scheduling",
        desc: "Larry knows your routes and technician skillsets to suggest appointments that are nearby and efficient.",
      },
      {
        title: "Works across every lead source",
        desc: "Calls, texts, webchats, third-party lead providers, and email — all in one inbox accessible to Larry and your team.",
      },
    ],
    link: "Learn more about Larry",
    href: "#larry",
  },
  {
    id: "fsm",
    badge: "FSM",
    eyebrow: "From the first call to the paid invoice",
    heading: "Every job, start to finish",
    features: [
      {
        title: "Dispatch board",
        desc: "Real-time view of every tech, every job, every gap. Larry books directly onto the board.",
      },
      {
        title: "Technician mobile app",
        desc: "Techs arrive with full customer history, prior notes, and equipment on file. Estimates go out from their phone. Payment collected before they leave the driveway.",
      },
      {
        title: "Estimates & invoicing",
        desc: "Air Design moved from 5–10% estimate conversion to near 100% after switching from paper to digital estimates.",
      },
      {
        title: "Payments",
        desc: "Text-to-pay, tap-to-pay, collected on-site. Larry follows up on anything unpaid at day 3, 7, and 14.",
      },
    ],
    link: "Learn more about FSM",
    href: "#fsm",
  },
  {
    id: "marketing",
    badge: "Marketing & Memberships",
    eyebrow: "Your slow season doesn't have to be slow",
    heading: "Fill your calendar automatically",
    features: [
      {
        title: "AI Membership Coordinator",
        desc: "Texts your maintenance customers, books the visit, and fills your calendar. Air Design generated $24K in weeks. No one made a call.",
      },
      {
        title: "Renewals & upsells",
        desc: "Larry identifies membership opportunities during booking conversations and introduces them in the call. The list grows without anyone actively selling.",
      },
      {
        title: "Campaigns & outreach",
        desc: "Re-engage past customers, follow up on unsold estimates, fill open calendar slots before slow season arrives.",
      },
      {
        title: "Reviews",
        desc: "Every completed job triggers an automatic review request. Arctic Air saw a 40% increase in Google reviews.",
      },
    ],
    link: "See how it works",
    href: "#marketing",
  },
];

export default function DeepDive() {
  return (
    <section className="py-28 bg-[#0a0a0a]" id="features">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-6">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-4">
            #1 AI OPERATING SYSTEM FOR HOME SERVICES
          </p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight">
            The operating system that answers every call,
            <br />
            runs every job, and fills your calendar automatically
          </h2>
        </div>

        <div className="flex flex-col gap-32 mt-24">
          {sections.map((section, index) => (
            <DeepDiveBlock
              key={section.id}
              section={section}
              reversed={index % 2 === 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function DeepDiveBlock({
  section,
  reversed,
}: {
  section: (typeof sections)[0];
  reversed: boolean;
}) {
  const [activeFeature, setActiveFeature] = useState(0);

  return (
    <div
      className={`grid lg:grid-cols-2 gap-16 items-center ${reversed ? "" : ""}`}
    >
      {/* Text side */}
      <div className={reversed ? "lg:order-2" : ""}>
        <span className="inline-block bg-white/10 text-white/70 text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5">
          {section.badge}
        </span>
        <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">
          {section.eyebrow}
        </p>
        <h3 className="text-3xl md:text-4xl font-black tracking-tight mb-8">
          {section.heading}
        </h3>

        <div className="flex flex-col gap-3">
          {section.features.map((f, i) => (
            <button
              key={i}
              onClick={() => setActiveFeature(i)}
              className={`text-left px-5 py-4 rounded-xl border transition-all ${
                activeFeature === i
                  ? "bg-blue-600/20 border-blue-500/40 text-white"
                  : "bg-white/2 border-white/10 text-white/60 hover:bg-white/5 hover:text-white/80"
              }`}
            >
              <h4 className="font-semibold text-sm mb-1">{f.title}</h4>
              {activeFeature === i && (
                <p className="text-white/60 text-sm leading-relaxed mt-2">
                  {f.desc}
                </p>
              )}
            </button>
          ))}
        </div>

        <a
          href={section.href}
          className="mt-8 inline-flex items-center gap-2 text-white/80 hover:text-white font-medium text-sm border border-white/20 hover:border-white/40 px-5 py-2.5 rounded-full transition-colors"
        >
          {section.link} →
        </a>
      </div>

      {/* Visual side */}
      <div className={reversed ? "lg:order-1" : ""}>
        <FeatureVisual sectionId={section.id} activeFeature={activeFeature} />
      </div>
    </div>
  );
}

function FeatureVisual({
  sectionId,
//   activeFeature,
}: {
  sectionId: string;
  activeFeature: number;
}) {
  if (sectionId === "leads") {
    return (
      <div className="rounded-2xl bg-[#0f1117] border border-white/10 p-6 shadow-2xl">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-9 h-9 rounded-full bg-blue-500 flex items-center justify-center font-bold text-sm">
            L
          </div>
          <div>
            <p className="text-white font-semibold text-sm">Larry</p>
            <p className="text-green-400 text-xs flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />{" "}
              Answering calls
            </p>
          </div>
          <div className="ml-auto text-white/30 text-xs">24/7</div>
        </div>
        <div className="space-y-3">
          <div className="bg-blue-600/20 border border-blue-500/30 rounded-xl p-4 text-sm text-white/80">
            <span className="text-blue-400 font-semibold">Larry: </span>"Hi,
            this is Larry with Smith HVAC. I see you called about an AC issue —
            can I get your address to check availability?"
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-sm text-white/80 ml-6">
            <span className="text-white/50 font-semibold">Customer: </span>
            "Yeah, it stopped cooling last night. 142 Oak Drive."
          </div>
          <div className="bg-blue-600/20 border border-blue-500/30 rounded-xl p-4 text-sm text-white/80">
            <span className="text-blue-400 font-semibold">Larry: </span>"Got it!
            I have Mike available today at 2pm. Can I book that for you?"
          </div>
          <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-3 text-xs text-green-400 font-medium flex items-center gap-2">
            <span className="w-2 h-2 bg-green-400 rounded-full" />
            Job booked — dispatch board updated automatically
          </div>
        </div>
      </div>
    );
  }

  if (sectionId === "fsm") {
    return (
      <div className="rounded-2xl bg-[#0f1117] border border-white/10 p-6 shadow-2xl">
        <p className="text-white/40 text-xs font-semibold uppercase tracking-widest mb-4">
          Dispatch Board
        </p>
        <div className="space-y-3 mb-5">
          {[
            {
              name: "Mike R.",
              job: "AC Repair",
              time: "2:00 PM",
              status: "En route",
              bar: 65,
            },
            {
              name: "Sarah K.",
              job: "Tune-up",
              time: "10:30 AM",
              status: "Complete",
              bar: 100,
            },
            {
              name: "Dave L.",
              job: "Electrical",
              time: "4:00 PM",
              status: "Scheduled",
              bar: 0,
            },
          ].map((tech) => (
            <div
              key={tech.name}
              className="bg-white/5 border border-white/10 rounded-xl p-4"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-white font-medium text-sm">
                  {tech.name} — {tech.job}
                </span>
                <span
                  className={`text-xs font-medium ${tech.bar === 100 ? "text-green-400" : tech.bar > 0 ? "text-blue-400" : "text-white/40"}`}
                >
                  {tech.status}
                </span>
              </div>
              <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full ${tech.bar === 100 ? "bg-green-400" : "bg-blue-500"}`}
                  style={{ width: `${tech.bar}%` }}
                />
              </div>
              <div className="flex justify-between mt-1.5">
                <span className="text-white/30 text-xs">{tech.time}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-xs text-white/50">
          <span className="text-white/70 font-semibold">Text-to-pay sent</span>{" "}
          to John M. — $340 invoice pending
          <div className="mt-2 bg-white/5 rounded-lg p-2 text-center text-blue-400 font-medium">
            Pay Now →
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-2xl bg-[#0f1117] border border-white/10 p-6 shadow-2xl">
      <p className="text-white/40 text-xs font-semibold uppercase tracking-widest mb-4">
        AI Membership Campaign
      </p>
      <div className="bg-blue-900/30 border border-blue-500/20 rounded-xl p-5 mb-4">
        <p className="text-white text-sm font-semibold mb-1">
          Spring HVAC Maintenance
        </p>
        <p className="text-white/50 text-xs mb-4">
          Launched by Larry — no staff involved
        </p>
        <div className="grid grid-cols-3 gap-2 text-center">
          {[
            { v: "446", l: "Texted" },
            { v: "166", l: "Booked" },
            { v: "$24K", l: "Revenue" },
          ].map((s) => (
            <div key={s.l} className="bg-white/10 rounded-lg p-3">
              <p className="text-white text-xl font-black">{s.v}</p>
              <p className="text-white/40 text-xs">{s.l}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="space-y-2">
        {[
          "Larry texted 446 members about spring tune-ups",
          "166 replied and got booked automatically",
          "Zero calls made by your team",
        ].map((msg, i) => (
          <div
            key={i}
            className="flex items-center gap-2 text-xs text-white/60"
          >
            <span className="w-1.5 h-1.5 bg-green-400 rounded-full shrink-0" />
            {msg}
          </div>
        ))}
      </div>
    </div>
  );
}
