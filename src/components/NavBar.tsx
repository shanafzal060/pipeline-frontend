import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

export default function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1B1B1F] backdrop-blur-md border-b border-[#1B1B1F]">
      <div className="max-w-7xl mx-auto h-16 flex items-center justify-between">
        <div className="flex items-center gap-10">
          {/* Logo */}
          <Link to="/">
            <div className="text-white font-black text-2xl tracking-tight">
              PipeLine
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-4">
            {[
              { label: "Meet Larry", href: "#larry" },
              { label: "Why PipeLine", href: "#why" },
              { label: "Features", href: "#features", hasDropdown: true },
              { label: "Plans", href: "#plans" },
              { label: "Resources", href: "#resources" },
            ].map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="text-white text-lg font-bold tracking-tighter transition-colors flex items-center gap-1"
              >
                {item.label}
                {item.hasDropdown && <ChevronDown size={14} />}
              </Link>
            ))}
          </div>
        </div>

        {/* Right side */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            to="tel:17576006753"
            className="flex items-center gap-2 text-white text-medium font-bold tracking-tighter transition-colors"
          >
            {/* <Phone size={14} /> */}
            sales: 1-757-600-6753
          </Link>
          <Link
            to="/demo"
            className="bg-[#A54848] hover:bg-[#862525] text-white px-5 py-2 rounded-full text-medium font-bold  transition-colors"
          >
            Watch a demo
          </Link>
          <Link
            to="/signin"
            className="text-white hover:bg-[#A54848] text-medium font-bold tracking-tighter border-2 border-white rounded-full  px-4 py-1 transition-colors"
          >
            Sign in
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#111] border-t border-white/10 px-6 py-6 flex flex-col gap-5">
          {["Meet Larry", "Why PipeLine", "Features", "Plans", "Resources"].map(
            (item) => (
              <Link
                key={item}
                to={`#${item.toLowerCase().replace(" ", "-")}`}
                className="text-white/80 text-base font-medium"
              >
                {item}
              </Link>
            ),
          )}
          <Link
            to="/demo"
            className="bg-[#A54848] text-white  px-5 py-3 rounded-full text-sm font-semibold text-center mt-2"
          >
            Watch a demo
          </Link>
        </div>
      )}
    </nav>
  );
}
