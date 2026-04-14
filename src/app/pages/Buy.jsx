import { useMemo, useState } from "react";
import { useNavigate } from "react-router";
import { Calendar, Gauge, Fuel, MapPin, Heart, Filter } from "lucide-react";
import Header from "../components/Header";
import { Button } from "../components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from "../components/ui/sheet";
import { Checkbox } from "../components/ui/checkbox";
import { Label } from "../components/ui/label";
import { Slider } from "../components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "../components/ui/select";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { cn } from "../components/ui/utils";
import SiteFooter from "../components/SiteFooter";

const NAVY = "#0f172a";
const ORANGE = "#ff7a00";

const BRANDS = ["BMW", "Mercedes", "Porsche", "Audi", "Jaguar"];
const FUELS = ["Petrol", "Diesel", "Electric", "Hybrid"];
const TRANSMISSIONS = ["Automatic", "Manual"];
const LOCATIONS = [
  "Mumbai",
  "Delhi",
  "Bangalore",
  "Pune",
  "Hyderabad",
  "Chennai"
];

/** Demo inventory — prices in ₹ Lakh for slider + sort */
const INVENTORY = [
  {
    id: "1",
    name: "BMW M4 Competition",
    priceLakh: 145,
    badge: "Hot Deal",
    badgeClass: "bg-orange-500 text-white",
    year: "2023",
    mileage: "3,200 km",
    fuel: "Petrol",
    transmission: "Automatic",
    location: "Delhi",
    brand: "BMW",
    img: "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?auto=format&fit=crop&w=800&q=85"
  },
  {
    id: "2",
    name: "Mercedes-AMG GT",
    priceLakh: 265,
    badge: "Verified",
    badgeClass: "bg-emerald-600 text-white",
    year: "2024",
    mileage: "800 km",
    fuel: "Petrol",
    transmission: "Automatic",
    location: "Mumbai",
    brand: "Mercedes",
    img: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=800&q=85"
  },
  {
    id: "3",
    name: "Porsche 911 GT3",
    priceLakh: 215,
    badge: "Featured",
    badgeClass: "bg-[#ff7a00] text-white",
    year: "2024",
    mileage: "1,500 km",
    fuel: "Petrol",
    transmission: "Manual",
    location: "Bangalore",
    brand: "Porsche",
    img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=85"
  },
  {
    id: "4",
    name: "Audi R8 V10",
    priceLakh: 289,
    badge: "Premium",
    badgeClass: "bg-slate-700 text-white",
    year: "2022",
    mileage: "12,400 km",
    fuel: "Petrol",
    transmission: "Automatic",
    location: "Pune",
    brand: "Audi",
    img: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=800&q=85"
  },
  {
    id: "5",
    name: "Jaguar F-Type R",
    priceLakh: 95,
    badge: "New",
    badgeClass: "bg-[#ff7a00] text-white",
    year: "2024",
    mileage: "2,100 km",
    fuel: "Petrol",
    transmission: "Automatic",
    location: "Hyderabad",
    brand: "Jaguar",
    img: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=800&q=85"
  },
  {
    id: "6",
    name: "BMW X7 M60i",
    priceLakh: 125,
    badge: "Verified",
    badgeClass: "bg-emerald-600 text-white",
    year: "2023",
    mileage: "18,000 km",
    fuel: "Diesel",
    transmission: "Automatic",
    location: "Chennai",
    brand: "BMW",
    img: "https://images.unsplash.com/photo-1619405399517-d7fce0f13302?auto=format&fit=crop&w=800&q=85"
  },
  {
    id: "7",
    name: "Porsche Cayenne",
    priceLakh: 135,
    badge: "Hot Deal",
    badgeClass: "bg-orange-500 text-white",
    year: "2023",
    mileage: "22,500 km",
    fuel: "Petrol",
    transmission: "Automatic",
    location: "Delhi",
    brand: "Porsche",
    img: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=800&q=85"
  },
  {
    id: "8",
    name: "Mercedes-Benz E-Class",
    priceLakh: 68,
    badge: "Featured",
    badgeClass: "bg-[#ff7a00] text-white",
    year: "2022",
    mileage: "45,000 km",
    fuel: "Diesel",
    transmission: "Automatic",
    location: "Mumbai",
    brand: "Mercedes",
    img: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=800&q=85"
  }
];

function formatPriceLakh(n) {
  return `₹${n.toFixed(2)} L`;
}

function FilterCheckboxes({ title, options, selected, onToggle, idPrefix }) {
  return (
    <div className="space-y-3">
      <p className="text-sm font-bold text-[#0f172a]">{title}</p>
      <div className="space-y-2.5">
        {options.map((opt) => {
          const id = `${idPrefix}-${opt}`;
          const checked = selected.has(opt);
          return (
            <div key={opt} className="flex items-center gap-2.5">
              <Checkbox
                id={id}
                checked={checked}
                onCheckedChange={() => onToggle(opt)}
                className="border-slate-300 data-[state=checked]:bg-[#ff7a00] data-[state=checked]:border-[#ff7a00]"
              />
              <Label
                htmlFor={id}
                className="cursor-pointer text-sm font-normal text-slate-600"
              >
                {opt}
              </Label>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function Buy() {
  const navigate = useNavigate();
  const [priceRange, setPriceRange] = useState([0, 300]);
  const [brands, setBrands] = useState(() => new Set());
  const [fuels, setFuels] = useState(() => new Set());
  const [transmissions, setTransmissions] = useState(() => new Set());
  const [locations, setLocations] = useState(() => new Set());
  const [sortBy, setSortBy] = useState("relevant");
  const [saved, setSaved] = useState(() => new Set());
  const [filtersOpen, setFiltersOpen] = useState(false);

  const toggle = (setFn) => (key) => {
    setFn((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  };

  const clearAll = () => {
    setPriceRange([0, 300]);
    setBrands(new Set());
    setFuels(new Set());
    setTransmissions(new Set());
    setLocations(new Set());
  };

  const filtered = useMemo(() => {
    let list = INVENTORY.filter((car) => {
      if (car.priceLakh < priceRange[0] || car.priceLakh > priceRange[1]) {
        return false;
      }
      if (brands.size > 0 && !brands.has(car.brand)) return false;
      if (fuels.size > 0 && !fuels.has(car.fuel)) return false;
      if (transmissions.size > 0 && !transmissions.has(car.transmission)) {
        return false;
      }
      if (locations.size > 0 && !locations.has(car.location)) return false;
      return true;
    });

    const sorted = [...list];
    if (sortBy === "price-asc") {
      sorted.sort((a, b) => a.priceLakh - b.priceLakh);
    } else if (sortBy === "price-desc") {
      sorted.sort((a, b) => b.priceLakh - a.priceLakh);
    } else if (sortBy === "year") {
      sorted.sort((a, b) => Number(b.year) - Number(a.year));
    }

    return sorted;
  }, [priceRange, brands, fuels, transmissions, locations, sortBy]);

  const toggleSave = (id) => {
    setSaved((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Header />

      <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
        <div className="mb-6 sm:mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-[#0f172a] sm:text-[2rem]">
            Buy Cars
          </h1>
          <p className="mt-2 text-sm font-medium text-slate-500 sm:text-base">
            {INVENTORY.length} cars available
          </p>
        </div>

        {/* Toolbar: Filters button + Sort (matches mock strip inside red circle) */}
        <div className="mb-6 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 sm:px-5">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <Sheet open={filtersOpen} onOpenChange={setFiltersOpen}>
              <SheetTrigger asChild>
                <Button
                  type="button"
                  variant="outline"
                  className="h-10 w-full justify-start gap-2 rounded-lg border-slate-200 bg-white font-semibold text-[#0f172a] shadow-sm hover:bg-slate-50 sm:flex-1"
                >
                  <Filter className="h-4 w-4 text-slate-600" strokeWidth={2.5} />
                  Filters
                </Button>
              </SheetTrigger>
              <SheetContent
                side="left"
                className="flex w-full flex-col overflow-y-auto border-slate-200 bg-white p-0 sm:max-w-md"
              >
                <SheetHeader className="border-b border-slate-100 px-5 py-4 text-left">
                  <div className="flex items-center justify-between pr-8">
                    <SheetTitle className="text-lg font-bold text-[#0f172a]">
                      Filters
                    </SheetTitle>
                    <button
                      type="button"
                      onClick={clearAll}
                      className="text-sm font-semibold hover:underline"
                      style={{ color: ORANGE }}
                    >
                      Clear All
                    </button>
                  </div>
                </SheetHeader>
                <div className="space-y-6 px-5 py-5">
                  <div className="border-b border-slate-100 pb-6">
                    <p className="mb-3 text-sm font-bold text-[#0f172a]">
                      Price Range
                    </p>
                    <Slider
                      min={0}
                      max={300}
                      step={1}
                      value={priceRange}
                      onValueChange={setPriceRange}
                      className="w-full py-1"
                    />
                    <div className="mt-2 flex justify-between text-xs text-slate-500">
                      <span>₹{priceRange[0].toFixed(2)} L</span>
                      <span>₹{priceRange[1].toFixed(2)} L</span>
                    </div>
                  </div>
                  <FilterCheckboxes
                    title="Brand"
                    options={BRANDS}
                    selected={brands}
                    onToggle={toggle(setBrands)}
                    idPrefix="sheet-brand"
                  />
                  <FilterCheckboxes
                    title="Fuel Type"
                    options={FUELS}
                    selected={fuels}
                    onToggle={toggle(setFuels)}
                    idPrefix="sheet-fuel"
                  />
                  <FilterCheckboxes
                    title="Transmission"
                    options={TRANSMISSIONS}
                    selected={transmissions}
                    onToggle={toggle(setTransmissions)}
                    idPrefix="sheet-trans"
                  />
                  <FilterCheckboxes
                    title="Location"
                    options={LOCATIONS}
                    selected={locations}
                    onToggle={toggle(setLocations)}
                    idPrefix="sheet-loc"
                  />
                </div>
              </SheetContent>
            </Sheet>

            <div className="flex w-full flex-col gap-1.5 sm:flex-1">
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="h-10 w-full rounded-lg border-slate-200 bg-white font-medium text-[#0f172a] shadow-sm">
                  <SelectValue placeholder="Most Relevant" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="relevant">Most Relevant</SelectItem>
                  <SelectItem value="price-asc">Price: Low to High</SelectItem>
                  <SelectItem value="price-desc">Price: High to Low</SelectItem>
                  <SelectItem value="year">Year: Newest</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        <div className="mb-6" />

        <div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {filtered.map((car) => (
                <article
                  key={car.id}
                  className="overflow-hidden rounded-xl border border-slate-200/90 bg-white shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="relative aspect-[16/11] overflow-hidden bg-slate-100">
                    <ImageWithFallback
                      src={car.img}
                      alt=""
                      className="h-full w-full object-cover"
                    />
                    <span
                      className={cn(
                        "absolute left-3 top-3 rounded-md px-2 py-0.5 text-xs font-semibold shadow-sm",
                        car.badgeClass
                      )}
                    >
                      {car.badge}
                    </span>
                    <button
                      type="button"
                      onClick={() => toggleSave(car.id)}
                      className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-md transition hover:scale-105"
                      aria-label={saved.has(car.id) ? "Remove from saved" : "Save car"}
                    >
                      <Heart
                        className={cn(
                          "h-4 w-4",
                          saved.has(car.id)
                            ? "fill-red-500 text-red-500"
                            : "text-slate-600"
                        )}
                      />
                    </button>
                  </div>
                  <div className="p-4">
                    <h2 className="text-base font-bold text-[#0f172a]">
                      {car.name}
                    </h2>
                    <p
                      className="mt-2 text-xl font-bold tracking-tight"
                      style={{ color: ORANGE }}
                    >
                      {formatPriceLakh(car.priceLakh)}
                    </p>
                    <div className="mt-4 grid grid-cols-2 gap-3 text-xs">
                      <div className="flex items-start gap-2 text-slate-600">
                        <Calendar className="mt-0.5 h-3.5 w-3.5 shrink-0 text-slate-400" />
                        <div>
                          <p className="text-[10px] font-medium uppercase tracking-wide text-slate-400">
                            Year
                          </p>
                          <p className="font-semibold text-[#0f172a]">
                            {car.year}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2 text-slate-600">
                        <Gauge className="mt-0.5 h-3.5 w-3.5 shrink-0 text-slate-400" />
                        <div>
                          <p className="text-[10px] font-medium uppercase tracking-wide text-slate-400">
                            Mileage
                          </p>
                          <p className="font-semibold text-[#0f172a]">
                            {car.mileage}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2 text-slate-600">
                        <Fuel className="mt-0.5 h-3.5 w-3.5 shrink-0 text-slate-400" />
                        <div>
                          <p className="text-[10px] font-medium uppercase tracking-wide text-slate-400">
                            Fuel
                          </p>
                          <p className="font-semibold text-[#0f172a]">
                            {car.fuel}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2 text-slate-600">
                        <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-slate-400" />
                        <div>
                          <p className="text-[10px] font-medium uppercase tracking-wide text-slate-400">
                            Location
                          </p>
                          <p className="font-semibold text-[#0f172a]">
                            {car.location}
                          </p>
                        </div>
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

          {filtered.length === 0 && (
            <div className="rounded-xl border border-dashed border-slate-200 bg-slate-50 py-16 text-center">
              <p className="font-medium text-slate-600">No cars match filters</p>
              <Button variant="link" className="mt-2" style={{ color: ORANGE }} onClick={clearAll}>
                Clear filters
              </Button>
            </div>
          )}
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
