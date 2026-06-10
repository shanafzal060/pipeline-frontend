import { useState } from "react";
import { MessageSquare, Wrench, TrendingUp } from "lucide-react";

const tabs = [
  {
    id: "leads",
    label: "Leads & Messaging",
    icon: MessageSquare,
    eyebrow: "Never miss a call or lead",
    heading: "Every call answered. Every lead captured. Nothing missed.",
    points: [
      "Larry responds in under 60 seconds — 400% better conversion",
      "Every call, text, and web lead in one unified inbox",
      "AI transcribes and routes every inquiry automatically",
    ],
  },
  {
    id: "fsm",
    label: "FSM",
    icon: Wrench,
    eyebrow: "Every job, start to finish",
    heading: "Real-time dispatch. Digital estimates. On-site payment.",
    points: [
      "Larry books directly to your dispatch board",
      "Techs see full customer history on their mobile app",
      "Text-to-pay and tap-to-pay collected on-site",
    ],
  },
  {
    id: "memberships",
    label: "Memberships & Marketing",
    icon: TrendingUp,
    eyebrow: "More revenue, less work",
    heading: "Your slow season fills itself.",
    points: [
      "AI Membership Coordinator texts and books maintenance visits",
      "Auto-renewals and upsells during every booking conversation",
      "Review requests after every completed job",
    ],
  },
];

export default function OperatingSystem() {
  const [active, setActive] = useState("leads");
  const tab = tabs.find((t) => t.id === active)!;

  return (
    <section className="py-28 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-4">
            Built for HVAC, plumbing, and electrical
          </p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6">
            One AI Operating System for
            <br />
            calls, jobs, and memberships
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Larry, your AI employee, runs the business while your team runs the
            jobs.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map((t) => {
            const Icon = t.icon;
            return (
              <button
                key={t.id}
                onClick={() => setActive(t.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                  active === t.id
                    ? "bg-white text-black shadow-lg"
                    : "bg-white/10 text-white/60 hover:bg-white/15 hover:text-white"
                }`}
              >
                <Icon size={15} />
                {t.label}
              </button>
            );
          })}
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-4">
              {tab.eyebrow}
            </p>
            <h3 className="text-3xl md:text-4xl font-black tracking-tight mb-6">
              {tab.heading}
            </h3>
            <ul className="flex flex-col gap-4">
              {tab.points.map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1 w-5 h-5 rounded-full bg-blue-500/20 border border-blue-500/40 flex items-center justify-center shrink-0">
                    <span className="w-2 h-2 bg-blue-400 rounded-full" />
                  </span>
                  <span className="text-white/70 text-base leading-relaxed">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
            <a
              href="#larry"
              className="mt-8 inline-flex items-center gap-2 text-white font-semibold border border-white/30 hover:border-white/60 px-6 py-3 rounded-full text-sm transition-colors"
            >
              Meet Larry →
            </a>
          </div>

          {/* Visual panel */}
          <div className="relative">
            <div className="rounded-2xl bg-linear-to-br from-[#111] to-[#0d1117] border border-white/10 p-8 shadow-2xl">
              {active === "leads" && <LeadsPanel />}
              {active === "fsm" && <FSMPanel />}
              {active === "memberships" && <MembershipsPanel />}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function LeadsPanel() {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-white/40 text-xs font-medium uppercase tracking-widest mb-2">
        Unified Inbox
      </p>
      {[
        {
          source: "Voice Call",
          name: "David T.",
          msg: "AC not cooling — urgent",
          time: "2m",
          color: "bg-blue-500",
          badge: "Booked",
        },
        {
          source: "Web Chat",
          name: "Maria C.",
          msg: "Need annual tune-up",
          time: "5m",
          color: "bg-green-500",
          badge: "Pending",
        },
        {
          source: "Text",
          name: "Robert H.",
          msg: "Leaking pipe in basement",
          time: "9m",
          color: "bg-orange-500",
          badge: "Dispatched",
        },
        {
          source: "Yelp Lead",
          name: "Amy W.",
          msg: "Electrical outlet sparking",
          time: "14m",
          color: "bg-red-500",
          badge: "Urgent",
        },
      ].map((item) => (
        <div
          key={item.name}
          className="flex items-center gap-3 bg-white/5 rounded-xl p-4 border border-white/10"
        >
          <div
            className={`w-2.5 h-2.5 rounded-full ${item.color} shrink-0`}
          />
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-0.5">
              <span className="text-white text-sm font-semibold">
                {item.name}
              </span>
              <span className="text-white/30 text-xs">{item.source}</span>
            </div>
            <p className="text-white/50 text-xs truncate">{item.msg}</p>
          </div>
          <div className="text-right">
            <p className="text-white/30 text-xs">{item.time} ago</p>
            <span className="text-xs text-blue-400 font-medium">
              {item.badge}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

function FSMPanel() {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-white/40 text-xs font-medium uppercase tracking-widest mb-2">
        Dispatch Board — Today
      </p>
      {[
        {
          tech: "Mike R.",
          job: "AC Repair",
          addr: "142 Oak Dr.",
          time: "9:00 AM",
          status: "En route",
          statusColor: "text-blue-400",
        },
        {
          tech: "Sarah K.",
          job: "HVAC Tune-up",
          addr: "88 Maple Ave.",
          time: "10:30 AM",
          status: "In progress",
          statusColor: "text-green-400",
        },
        {
          tech: "Dave L.",
          job: "Electrical Panel",
          addr: "310 Pine St.",
          time: "1:00 PM",
          status: "Scheduled",
          statusColor: "text-yellow-400",
        },
        {
          tech: "Chris M.",
          job: "Furnace Check",
          addr: "21 Birch Ln.",
          time: "3:00 PM",
          status: "Confirmed",
          statusColor: "text-white/50",
        },
      ].map((item) => (
        <div
          key={item.tech}
          className="flex items-center gap-3 bg-white/5 rounded-xl p-4 border border-white/10"
        >
          <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold text-white/70">
            {item.tech
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <span className="text-white text-sm font-semibold">
                {item.job}
              </span>
            </div>
            <p className="text-white/40 text-xs">
              {item.tech} · {item.addr}
            </p>
          </div>
          <div className="text-right">
            <p className="text-white/50 text-xs">{item.time}</p>
            <p className={`text-xs font-medium ${item.statusColor}`}>
              {item.status}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

function MembershipsPanel() {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-white/40 text-xs font-medium uppercase tracking-widest mb-2">
        AI Membership Coordinator
      </p>
      <div className="bg-blue-900/30 border border-blue-500/20 rounded-xl p-5">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-sm font-bold">
            L
          </div>
          <div>
            <p className="text-white text-sm font-semibold">
              Larry just ran a campaign
            </p>
            <p className="text-white/40 text-xs">Spring maintenance outreach</p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3 text-center">
          {[
            { label: "Texted", value: "446" },
            { label: "Jobs Booked", value: "166" },
            { label: "Revenue", value: "$24K" },
          ].map((s) => (
            <div key={s.label} className="bg-white/10 rounded-lg p-3">
              <p className="text-white text-xl font-black">{s.value}</p>
              <p className="text-white/40 text-xs mt-1">{s.label}</p>
            </div>
          ))}
        </div>
        <p className="text-white/40 text-xs mt-4 text-center italic">
          No one on the team made a call.
        </p>
      </div>
      <div className="flex flex-col gap-2">
        {[
          "Renewal reminder → Mrs. Johnson booked tune-up",
          "Upsell offered → Mr. Davis upgraded to premium plan",
          "Review request → 5★ review on Google",
        ].map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-2 text-xs text-white/60 bg-white/5 rounded-lg px-4 py-3 border border-white/10"
          >
            <span className="w-1.5 h-1.5 bg-green-400 rounded-full shrink-0" />
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
