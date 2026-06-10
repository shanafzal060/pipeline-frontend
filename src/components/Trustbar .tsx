export default function TrustBar() {
  const companies = [
    "Trouth AC",
    "Top Mechanical",
    "Arctic Air",
    "Heritage Mountain",
    "Warner Super Service",
    "Design Air",
    "Olympus Electric",
    "Air Texas",
  ];

  return (
    <section className="border-y border-white/10 bg-white/2 py-10">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-white/40 text-sm font-medium uppercase tracking-widest mb-8">
          9,000+ Service Providers trust Podium
        </p>
        <div className="flex flex-wrap justify-center gap-x-10 gap-y-4">
          {companies.map((name) => (
            <span
              key={name}
              className="text-white/25 text-sm font-semibold tracking-wide hover:text-white/50 transition-colors"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
