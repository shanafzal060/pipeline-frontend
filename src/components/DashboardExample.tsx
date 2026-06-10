

export const DashboardExample = () => {
  return (
    <>
      {/* Dashboard mockup */}
       <div className="relative z-10 mt-20 w-full max-w-6xl mx-auto px-6">
        <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/50 bg-[#111]">
          {/* Fake browser chrome */}
       <div className="flex items-center gap-2 px-4 py-3 bg-[#1a1a1a] border-b border-white/10">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/70" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <div className="w-3 h-3 rounded-full bg-green-500/70" />
            </div>
            <div className="flex-1 mx-4 bg-white/5 rounded-md h-6 text-center text-xs text-white/30 flex items-center justify-center">
              app.podium.com
            </div>
          </div> 

      {/* Dashboard content */}
       <div className="bg-[#0f1117] p-6 grid grid-cols-12 gap-4 min-h-80"> 
      {/* Sidebar */}
      <div className="col-span-2 flex flex-col gap-3">
              {["Dashboard", "Inbox", "Jobs", "Customers", "Reports"].map(
                (item, i) => (
                  <div
                    key={item}
                    className={`text-xs px-3 py-2 rounded-lg ${i === 1 ? "bg-blue-600 text-white" : "text-white/40 hover:text-white/60"}`}
                  >
                    {item}
                  </div>
                ),
              )}
            </div> 

      {/* Main content */}
       <div className="col-span-7 flex flex-col gap-4">
              <div className="text-white/60 text-xs font-medium mb-1">
                Today's Overview
              </div>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { label: "Calls Answered", value: "47", change: "+12%" },
                  { label: "Jobs Booked", value: "18", change: "+8%" },
                  { label: "Revenue", value: "$9,240", change: "+23%" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-white/5 rounded-xl p-4 border border-white/10"
                  >
                    <div className="text-white/40 text-xs mb-1">
                      {stat.label}
                    </div>
                    <div className="text-white text-2xl font-bold">
                      {stat.value}
                    </div>
                    <div className="text-green-400 text-xs mt-1">
                      {stat.change} today
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-white/5 rounded-xl p-4 border border-white/10 flex-1">
                <div className="text-white/40 text-xs mb-3">
                  Live Dispatch Board
                </div>
                <div className="flex flex-col gap-2">
                  {[
                    {
                      tech: "Mike R.",
                      job: "AC Repair — 142 Oak Dr.",
                      status: "En route",
                      color: "bg-blue-500",
                    },
                    {
                      tech: "Sarah K.",
                      job: "HVAC Tune-up — 88 Maple Ave.",
                      status: "In progress",
                      color: "bg-green-500",
                    },
                    {
                      tech: "Dave L.",
                      job: "Electrical Panel — 310 Pine St.",
                      status: "Scheduled",
                      color: "bg-yellow-500",
                    },
                  ].map((row) => (
                    <div
                      key={row.tech}
                      className="flex items-center gap-3 text-xs"
                    >
                      <div className={`w-2 h-2 rounded-full ${row.color}`} />
                      <span className="text-white/60 w-16">{row.tech}</span>
                      <span className="text-white/80 flex-1">{row.job}</span>
                      <span className="text-white/40">{row.status}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div> 

      {/* Right panel — Larry AI */}
       <div className="col-span-3 bg-linear-to-b from-blue-900/30 to-violet-900/20 rounded-xl border border-blue-500/20 p-4 flex flex-col gap-3">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-7 h-7 rounded-full bg-blue-500 flex items-center justify-center text-xs font-bold">
                  L
                </div>
                <div>
                  <div className="text-white text-xs font-semibold">
                    Larry AI
                  </div>
                  <div className="text-green-400 text-xs flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full" />{" "}
                    Online
                  </div>
                </div>
              </div>
              {[
                {
                  msg: "Booked AC repair for John M. — tomorrow 2pm",
                  time: "2m ago",
                },
                {
                  msg: "Answered call from 555-0192 — plumbing inquiry",
                  time: "7m ago",
                },
                { msg: "Sent review request to Sarah K.", time: "12m ago" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="text-xs text-white/60 bg-white/5 rounded-lg p-3 border border-white/10"
                >
                  <p>{item.msg}</p>
                  <p className="text-white/30 mt-1">{item.time}</p>
                </div>
              ))}
            </div>
          </div>
        </div> 
      </div>
    </>
  );
}
