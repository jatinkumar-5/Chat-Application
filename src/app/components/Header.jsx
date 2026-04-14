import { Search, User, Menu, X, Car } from "lucide-react";
import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback } from "./ui/avatar";

const navLinkClass = ({ isActive }) =>
  `text-sm font-medium transition-colors ${
    isActive ? "text-[#ff7a00]" : "text-slate-700 hover:text-[#ff7a00]"
  }`;

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 lg:gap-6">
          <button
            type="button"
            onClick={() => navigate("/")}
            className="flex shrink-0 items-center gap-2 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff7a00]/40"
            aria-label="Go to home"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#0f172a] text-white">
              <Car className="h-5 w-5" strokeWidth={2} />
            </span>
            <span className="text-lg font-bold tracking-tight text-[#0f172a] sm:text-xl">
              Vehicle <span className="text-[#ff7a00]">Dekho</span>
            </span>
          </button>

          <div className="relative mx-auto hidden min-w-0 max-w-md flex-1 md:block lg:max-w-xl">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <Input
              type="search"
              placeholder="Search by brand, model, or keyword..."
              className="h-10 w-full rounded-lg border-0 bg-slate-100 pl-10 text-slate-800 placeholder:text-slate-500 focus-visible:ring-2 focus-visible:ring-[#ff7a00]/30"
            />
          </div>

          <nav className="ml-auto hidden items-center gap-6 lg:flex">
            <NavLink to="/" end className={navLinkClass}>
              Home
            </NavLink>
            <NavLink to="/buy" className={navLinkClass}>
              Buy Cars
            </NavLink>
            <NavLink to="/sell" className={navLinkClass}>
              Sell Car
            </NavLink>
            <Link
              to="/auction"
              className="text-sm font-medium text-slate-700 transition-colors hover:text-[#ff7a00]"
            >
              Auctions
            </Link>
          </nav>

          <Avatar
            className="hidden h-9 w-9 shrink-0 cursor-pointer border-2 border-[#ff7a00]/30 sm:flex"
            onClick={() => navigate("/login")}
          >
            <AvatarFallback className="bg-[#ff7a00] text-white">
              <User className="h-4 w-4" />
            </AvatarFallback>
          </Avatar>

          <Button
            variant="ghost"
            size="icon"
            className="shrink-0 lg:hidden"
            onClick={() => setMobileMenuOpen((o) => !o)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-slate-700" />
            ) : (
              <Menu className="h-6 w-6 text-slate-700" />
            )}
          </Button>
        </div>

        {mobileMenuOpen && (
          <div className="mt-3 border-t border-slate-100 pt-4 lg:hidden">
            <div className="relative mb-4">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <Input
                type="search"
                placeholder="Search by brand, model, or keyword..."
                className="h-10 w-full rounded-lg border-0 bg-slate-100 pl-10"
              />
            </div>
            <nav className="flex flex-col gap-1">
              <NavLink
                to="/"
                end
                className={navLinkClass}
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </NavLink>
              <NavLink
                to="/buy"
                className={navLinkClass}
                onClick={() => setMobileMenuOpen(false)}
              >
                Buy Cars
              </NavLink>
              <NavLink
                to="/sell"
                className={navLinkClass}
                onClick={() => setMobileMenuOpen(false)}
              >
                Sell Car
              </NavLink>
              <Link
                to="/auction"
                className="py-2 text-sm font-medium text-slate-700 hover:text-[#ff7a00]"
                onClick={() => setMobileMenuOpen(false)}
              >
                Auctions
              </Link>
            </nav>
            <div className="mt-4 flex items-center gap-3 border-t border-slate-100 pt-4">
              <Avatar
                className="h-9 w-9 cursor-pointer border-2 border-[#ff7a00]/30"
                onClick={() => {
                  navigate("/login");
                  setMobileMenuOpen(false);
                }}
              >
                <AvatarFallback className="bg-[#ff7a00] text-white">
                  <User className="h-4 w-4" />
                </AvatarFallback>
              </Avatar>
              <button
                type="button"
                className="text-sm font-medium text-slate-700"
                onClick={() => {
                  navigate("/login");
                  setMobileMenuOpen(false);
                }}
              >
                Login
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
