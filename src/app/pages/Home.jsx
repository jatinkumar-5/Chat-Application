import { useState } from "react";
import { useNavigate, Link } from "react-router";
import {
  Search,
  ChevronRight,
  Gem,
  Zap,
  Car,
  CarFront,
  Plug,
  PiggyBank,
  Shield,
  Award,
  TrendingUp,
  ArrowRight
} from "lucide-react";
import Header from "../components/Header";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "../components/ui/select";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import SiteFooter from "../components/SiteFooter";

const ACCENT = "#ff7a00";
const NAVY = "#0f172a";

const HERO_CAR =
  "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=960&q=85";

const CATEGORIES = [
  {
    name: "Luxury",
    count: "500+ cars",
    Icon: Gem,
    circle: "bg-violet-500"
  },
  {
    name: "Sports",
    count: "320+ cars",
    Icon: Zap,
    circle: "bg-[#ff7a00]"
  },
  {
    name: "SUV",
    count: "1,200+ cars",
    Icon: Car,
    circle: "bg-sky-500"
  },
  {
    name: "Sedan",
    count: "890+ cars",
    Icon: CarFront,
    circle: "bg-emerald-500"
  },
  {
    name: "Electric",
    count: "210+ cars",
    Icon: Plug,
    circle: "bg-amber-400"
  },
  {
    name: "Budget",
    count: "2,000+ cars",
    Icon: PiggyBank,
    circle: "bg-red-500"
  }
];

const FEATURED = [
  {
    badge: "Featured",
    badgeClass: "bg-[#ff7a00] text-white",
    name: "Porsche 911 GT3",
    price: "₹2,15,00,000",
    year: "2024",
    mileage: "1,500 km",
    fuel: "Petrol",
    location: "Mumbai",
    img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=85"
  },
  {
    badge: "Hot Deal",
    badgeClass: "bg-[#ff7a00] text-white",
    name: "BMW M4 Competition",
    price: "₹1,42,00,000",
    year: "2023",
    mileage: "8,200 km",
    fuel: "Petrol",
    location: "Bangalore",
    img: "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?auto=format&fit=crop&w=800&q=85"
  },
  {
    badge: "New",
    badgeClass: "bg-[#ff7a00] text-white",
    name: "Mercedes-AMG GT",
    price: "₹2,65,00,000",
    year: "2024",
    mileage: "800 km",
    fuel: "Petrol",
    location: "Delhi NCR",
    img: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=640&q=80"
  },
  {
    badge: "Featured",
    badgeClass: "bg-[#ff7a00] text-white",
    name: "Audi R8 V10",
    price: "₹2,89,00,000",
    year: "2022",
    mileage: "12,400 km",
    fuel: "Petrol",
    location: "Hyderabad",
    img: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=640&q=80"
  }
];

const WHY = [
  {
    Icon: Shield,
    title: "Verified Listings",
    text: "Every car is checked for authenticity and history so you buy with confidence."
  },
  {
    Icon: Award,
    title: "Best Prices",
    text: "Compare transparent deals and get fair market value whether you buy or sell."
  },
  {
    Icon: TrendingUp,
    title: "Easy Process",
    text: "From search to paperwork, we keep steps simple and support you end to end."
  }
];

const HERO_GRID_STYLE = {
  backgroundColor: NAVY,
  backgroundImage: `
    linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)
  `,
  backgroundSize: "48px 48px"
};

export default function Home() {
  const navigate = useNavigate();
  const [city, setCity] = useState("all");

  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden" style={HERO_GRID_STYLE}>
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
            <div>
              <span
                className="inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white"
                style={{ backgroundColor: ACCENT }}
              >
                India&apos;s Trusted Car Marketplace
              </span>
              <h1 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
                Find Your Perfect{" "}
                <span style={{ color: ACCENT }}>Dream Car</span>
              </h1>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base">
                Buy, sell, and bid on premium cars with confidence. Verified
                listings, best prices, transparent deals.
              </p>

              <div className="mt-8 rounded-2xl bg-white p-4 shadow-xl sm:p-5">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-stretch">
                  <div className="min-w-0 flex-1">
                    <Input
                      placeholder="Search by brand or model..."
                      className="h-11 rounded-lg border-slate-200 bg-slate-50 text-slate-800"
                    />
                  </div>
                  <Select value={city} onValueChange={setCity}>
                    <SelectTrigger className="h-11 w-full rounded-lg border-slate-200 bg-slate-50 sm:w-[160px]">
                      <SelectValue placeholder="All Cities" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Cities</SelectItem>
                      <SelectItem value="mumbai">Mumbai</SelectItem>
                      <SelectItem value="delhi">Delhi NCR</SelectItem>
                      <SelectItem value="bangalore">Bangalore</SelectItem>
                      <SelectItem value="hyderabad">Hyderabad</SelectItem>
                      <SelectItem value="chennai">Chennai</SelectItem>
                      <SelectItem value="pune">Pune</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button
                    className="h-11 shrink-0 gap-2 rounded-lg px-6 font-semibold text-white shadow-md hover:opacity-95 sm:px-8"
                    style={{ backgroundColor: ACCENT }}
                    onClick={() => navigate("/buy")}
                  >
                    <Search className="h-4 w-4" />
                    Search
                  </Button>
                </div>
              </div>

              <div className="mt-10 grid grid-cols-3 gap-4 border-t border-white/10 pt-8 sm:gap-8">
                <div>
                  <p className="text-xl font-bold sm:text-2xl" style={{ color: ACCENT }}>
                    50K+
                  </p>
                  <p className="mt-1 text-xs text-slate-400 sm:text-sm">
                    Cars Listed
                  </p>
                </div>
                <div>
                  <p className="text-xl font-bold sm:text-2xl" style={{ color: ACCENT }}>
                    10K+
                  </p>
                  <p className="mt-1 text-xs text-slate-400 sm:text-sm">
                    Happy Users
                  </p>
                </div>
                <div>
                  <p className="text-xl font-bold sm:text-2xl" style={{ color: ACCENT }}>
                    100+
                  </p>
                  <p className="mt-1 text-xs text-slate-400 sm:text-sm">
                    Cities
                  </p>
                </div>
              </div>
            </div>

            <div className="relative lg:justify-self-end">
              <div className="overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/10">
                <ImageWithFallback
                  src={HERO_CAR}
                  alt="Premium sports car"
                  className="aspect-[4/3] w-full object-cover sm:aspect-[16/11] lg:aspect-auto lg:max-h-[420px] lg:w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Browse by Category */}
      <section className="border-b border-slate-100 py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold tracking-tight text-[#0f172a] sm:text-3xl">
              Browse by Category
            </h2>
            <p className="mt-2 text-sm text-slate-500 sm:text-base">
              Explore cars by body type and budget — curated listings updated
              daily.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6 lg:gap-5">
            {CATEGORIES.map(({ name, count, Icon, circle }) => (
              <button
                key={name}
                type="button"
                onClick={() => navigate("/buy")}
                className="flex flex-col items-center rounded-xl border border-slate-200/70 bg-white p-5 text-center shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-[#ff7a00] hover:shadow-lg focus-visible:-translate-y-0.5 focus-visible:border-[#ff7a00] focus-visible:shadow-lg focus-visible:outline-none"
              >
                <span
                  className={`flex h-14 w-14 items-center justify-center rounded-full text-white shadow-inner ${circle}`}
                >
                  <Icon className="h-7 w-7" strokeWidth={2} />
                </span>
                <span className="mt-4 text-sm font-bold text-[#0f172a]">
                  {name}
                </span>
                <span className="mt-1 text-xs text-slate-500">{count}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Cars */}
      <section className="bg-slate-100 py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-2xl font-bold text-[#0f172a] sm:text-3xl">
                Featured Cars
              </h2>
              <p className="mt-1 text-sm text-slate-500 sm:text-base">
                Handpicked premium vehicles just for you
              </p>
            </div>
            <Button
              variant="outline"
              className="w-fit gap-1 rounded-lg border-2 border-[#ff7a00] bg-transparent font-semibold text-[#ff7a00] hover:bg-[#ff7a00]/10"
              onClick={() => navigate("/buy")}
            >
              View All
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURED.map((car) => (
              <article
                key={car.name}
                className="flex flex-col overflow-hidden rounded-xl border border-slate-200/80 bg-white shadow-sm"
              >
                <div className="relative aspect-[16/11] overflow-hidden bg-slate-200">
                  <ImageWithFallback
                    src={car.img}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                  <span
                    className={`absolute left-3 top-3 rounded-md px-2 py-0.5 text-xs font-semibold ${car.badgeClass}`}
                  >
                    {car.badge}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-4">
                  <h3 className="text-base font-bold text-[#0f172a]">
                    {car.name}
                  </h3>
                  <p
                    className="mt-2 text-lg font-bold"
                    style={{ color: ACCENT }}
                  >
                    {car.price}
                  </p>
                  <div className="mt-4 grid grid-cols-2 gap-x-3 gap-y-2 text-xs text-slate-600">
                    <div>
                      <p className="font-medium text-slate-400">Year</p>
                      <p className="font-semibold text-[#0f172a]">{car.year}</p>
                    </div>
                    <div>
                      <p className="font-medium text-slate-400">Mileage</p>
                      <p className="font-semibold text-[#0f172a]">
                        {car.mileage}
                      </p>
                    </div>
                    <div>
                      <p className="font-medium text-slate-400">Fuel</p>
                      <p className="font-semibold text-[#0f172a]">{car.fuel}</p>
                    </div>
                    <div>
                      <p className="font-medium text-slate-400">Location</p>
                      <p className="font-semibold text-[#0f172a]">
                        {car.location}
                      </p>
                    </div>
                  </div>
                  <Button
                    className="mt-5 w-full rounded-lg font-semibold text-white hover:opacity-95"
                    style={{ backgroundColor: NAVY }}
                    onClick={() => navigate("/auction")}
                  >
                    View Details
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold text-[#0f172a] sm:text-3xl">
              Why Choose Vehicle Dekho?
            </h2>
            <p className="mt-2 text-sm text-slate-500 sm:text-base">
              Your trusted partner in car buying and selling.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {WHY.map(({ Icon, title, text }) => (
              <div
                key={title}
                className="rounded-xl border border-slate-200/70 bg-white p-8 text-center shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-[#ff7a00] hover:shadow-lg focus-within:-translate-y-0.5 focus-within:border-[#ff7a00] focus-within:shadow-lg"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#ff7a00] shadow-sm">
                  <Icon className="h-7 w-7 text-white" strokeWidth={2} />
                </div>
                <h3 className="mt-6 text-lg font-bold text-[#0f172a]">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-500">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <SiteFooter />
    </div>
  );
}
