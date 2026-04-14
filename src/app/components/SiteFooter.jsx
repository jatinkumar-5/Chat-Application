import { Link, useLocation } from "react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const NAVY = "#0f172a";
const ACCENT = "#ff7a00";

export default function SiteFooter() {
  const location = useLocation();
  const goSell = (e) => {
    if (location.pathname === "/sell") {
      e.preventDefault();
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      {/* CTA */}
      <section style={{ backgroundColor: NAVY }} className="py-14 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Ready to Sell Your Car?
          </h2>
          <p className="mt-3 text-sm text-slate-300 sm:text-base">
            Get the best price for your car in just a few simple steps.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Button
              asChild
              className="h-11 gap-2 rounded-lg px-8 font-semibold text-white shadow-lg hover:opacity-95"
              style={{ backgroundColor: ACCENT }}
            >
              <Link to="/sell" onClick={goSell}>
                Sell Your Car
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-11 rounded-lg border-2 border-white bg-white px-8 font-semibold text-[#0f172a] hover:bg-slate-100"
            >
              <Link to="/auction">
                Explore Auctions
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{ backgroundColor: NAVY }}
        className="border-t border-white/10"
      >
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-14">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <p className="text-lg font-bold text-white">
                Vehicle <span style={{ color: ACCENT }}>Dekho</span>
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                India&apos;s trusted marketplace for new and pre-owned cars.
                Transparent listings, verified sellers, and hassle-free deals.
              </p>
            </div>
            <div>
              <p className="text-sm font-bold text-white">Quick Links</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-400">
                <li>
                  <Link to="/buy" className="hover:text-white">
                    Buy Cars
                  </Link>
                </li>
                <li>
                  <Link to="/sell" className="hover:text-white">
                    Sell Car
                  </Link>
                </li>
                <li>
                  <Link to="/auction" className="hover:text-white">
                    Auctions
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-sm font-bold text-white">Support</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    FAQs
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-sm font-bold text-white">Legal</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <p className="mt-12 border-t border-white/10 pt-8 text-center text-xs text-slate-500">
            © {new Date().getFullYear()} Vehicle Dekho. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

