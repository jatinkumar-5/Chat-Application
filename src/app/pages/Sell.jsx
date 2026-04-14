import { useState } from "react";
import { useNavigate } from "react-router";
import {
  Car,
  Gauge,
  IndianRupee,
  Upload,
  Check
} from "lucide-react";
import Header from "../components/Header";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Card, CardContent } from "../components/ui/card";
import { Label } from "../components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "../components/ui/select";
import SiteFooter from "../components/SiteFooter";

const ORANGE = "#ff7a00";

const STEPS = [
  { key: "details", label: "Car Details", Icon: Car },
  { key: "specs", label: "Specifications", Icon: Gauge },
  { key: "pricing", label: "Pricing", Icon: IndianRupee },
  { key: "photos", label: "Photos & Review", Icon: Upload }
];

const BRANDS = ["BMW", "Mercedes", "Porsche", "Audi", "Jaguar", "Hyundai", "Tata"];
const YEARS = Array.from({ length: 20 }, (_, i) => String(2026 - i));

export default function Sell() {
  const navigate = useNavigate();
  const [brand, setBrand] = useState("");
  const [year, setYear] = useState("");

  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Header />

      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
        <div className="mb-8">
          <h1 className="text-2xl font-bold tracking-tight text-[#0f172a] sm:text-3xl">
            Sell Your Car
          </h1>
          <p className="mt-1 text-sm text-slate-500">
            Get the best price for your car in just a few simple steps
          </p>
        </div>

        {/* Stepper */}
        <div className="mb-8">
          <div className="flex items-center justify-between gap-3 sm:gap-4">
            {STEPS.map((s, idx) => {
              const isActive = idx === 0;
              return (
                <div key={s.key} className="flex min-w-0 flex-1 items-center">
                  <div className="flex w-full flex-col items-center">
                    <div
                      className="flex h-12 w-12 items-center justify-center rounded-full"
                      style={{ backgroundColor: isActive ? ORANGE : "#e5e7eb" }}
                    >
                      <s.Icon
                        className="h-6 w-6"
                        style={{ color: isActive ? "#ffffff" : "#6b7280" }}
                      />
                    </div>
                    <p className="mt-2 text-xs font-medium text-slate-700">
                      {s.label}
                    </p>
                  </div>

                  {idx !== STEPS.length - 1 && (
                    <div className="hidden px-3 sm:block">
                      <div className="h-[3px] w-16 rounded-full bg-slate-200 sm:w-20 md:w-24" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Form card */}
        <Card className="border-slate-200 shadow-sm">
          <CardContent className="p-5 sm:p-7">
            <div className="mb-6">
              <h2 className="text-base font-bold text-[#0f172a]">Car Details</h2>
              <p className="mt-1 text-sm text-slate-500">Tell us about your car</p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
              <div className="space-y-2">
                <Label className="text-sm font-semibold text-slate-700">
                  Brand <span style={{ color: ORANGE }}>*</span>
                </Label>
                <Select value={brand} onValueChange={setBrand}>
                  <SelectTrigger className="h-10 rounded-lg border-slate-200 bg-white">
                    <SelectValue placeholder="Select Brand" />
                  </SelectTrigger>
                  <SelectContent>
                    {BRANDS.map((b) => (
                      <SelectItem key={b} value={b}>
                        {b}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label className="text-sm font-semibold text-slate-700">
                  Model <span style={{ color: ORANGE }}>*</span>
                </Label>
                <Input
                  placeholder="Enter model name"
                  className="h-10 rounded-lg border-slate-200 bg-white"
                />
              </div>

              <div className="space-y-2">
                <Label className="text-sm font-semibold text-slate-700">Variant</Label>
                <Input
                  placeholder="e.g., VX, ZXi Plus"
                  className="h-10 rounded-lg border-slate-200 bg-white"
                />
              </div>

              <div className="space-y-2">
                <Label className="text-sm font-semibold text-slate-700">
                  Manufacturing Year <span style={{ color: ORANGE }}>*</span>
                </Label>
                <Select value={year} onValueChange={setYear}>
                  <SelectTrigger className="h-10 rounded-lg border-slate-200 bg-white">
                    <SelectValue placeholder="Select Year" />
                  </SelectTrigger>
                  <SelectContent>
                    {YEARS.map((y) => (
                      <SelectItem key={y} value={y}>
                        {y}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2 sm:col-span-2">
                <Label className="text-sm font-semibold text-slate-700">
                  Registration Number <span style={{ color: ORANGE }}>*</span>
                </Label>
                <Input
                  placeholder="e.g., MH 12 AB 1234"
                  className="h-10 rounded-lg border-slate-200 bg-white"
                />
              </div>
            </div>

            <div className="mt-6 border-t border-slate-100 pt-5">
              <Button
                className="h-11 w-full rounded-lg font-semibold text-white"
                style={{ backgroundColor: ORANGE }}
                onClick={() => navigate("/login")}
              >
                Next
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Benefits row */}
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          <Card className="border-slate-200 shadow-sm">
            <CardContent className="p-6 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#ff7a00] shadow-sm">
                <Check className="h-6 w-6 text-white" />
              </div>
              <p className="mt-4 font-bold text-[#0f172a]">Free Listing</p>
              <p className="mt-2 text-sm text-slate-500">
                List your car for free with no hidden charges
              </p>
            </CardContent>
          </Card>

          <Card className="border-slate-200 shadow-sm">
            <CardContent className="p-6 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#ff7a00] shadow-sm">
                <IndianRupee className="h-6 w-6 text-white" />
              </div>
              <p className="mt-4 font-bold text-[#0f172a]">Best Price</p>
              <p className="mt-2 text-sm text-slate-500">
                Get competitive offers from genuine buyers
              </p>
            </CardContent>
          </Card>

          <Card className="border-slate-200 shadow-sm">
            <CardContent className="p-6 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#ff7a00] shadow-sm">
                <Car className="h-6 w-6 text-white" />
              </div>
              <p className="mt-4 font-bold text-[#0f172a]">Quick Sale</p>
              <p className="mt-2 text-sm text-slate-500">
                Sell faster with our wide network of buyers
              </p>
            </CardContent>
          </Card>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
