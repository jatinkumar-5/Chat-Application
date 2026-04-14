import { BrowserRouter, Routes, Route, useLocation } from "react-router";
import { useEffect } from "react";
import Home from "./pages/Home";
import Buy from "./pages/Buy";
import Sell from "./pages/Sell";
import Login from "./pages/Login";
import Auction from "./pages/Auction";
import NotFound from "./pages/NotFound";

function ScrollToTop() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location.pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buy" element={<Buy />} />
        <Route path="/sell" element={<Sell />} />
        <Route path="/login" element={<Login />} />
        <Route path="/auction" element={<Auction />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
