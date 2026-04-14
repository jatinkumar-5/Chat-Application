import { useState } from "react";
import Header from "../components/Header";
import CarGallery from "../components/CarGallery";
import CountdownTimer from "../components/CountdownTimer";
import BidHistory from "../components/BidHistory";
import SiteFooter from "../components/SiteFooter";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Badge } from "../components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Card, CardContent } from "../components/ui/card";
import { Avatar, AvatarFallback } from "../components/ui/avatar";
import {
  Flame,
  Fuel,
  Gauge,
  Settings,
  MapPin,
  ShieldCheck,
  IndianRupee,
  TrendingUp,
  Star,
  Phone,
  CheckCircle2,
  Car,
  Calendar,
  Navigation
} from "lucide-react";
import { motion } from "motion/react";
import { toast } from "sonner";
import { Toaster } from "../components/ui/sonner";
export default function Auction() {
  const [bidAmount, setBidAmount] = useState("");
  const [currentHighestBid, setCurrentHighestBid] = useState(125e4);
  const [bids, setBids] = useState([
    { id: "1", userName: "Rahul Sharma", amount: 125e4, time: "2 mins ago", isHighest: true },
    { id: "2", userName: "Priya Singh", amount: 124e4, time: "5 mins ago" },
    { id: "3", userName: "Amit Kumar", amount: 123e4, time: "8 mins ago" },
    { id: "4", userName: "Sneha Patel", amount: 122e4, time: "12 mins ago" },
    { id: "5", userName: "Vikram Reddy", amount: 121e4, time: "15 mins ago" }
  ]);
  const carImages = [
    "https://images.unsplash.com/photo-1638715403373-ab0e256782f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoeXVuZGFpJTIwY3JldGElMjBzdXYlMjB3aGl0ZXxlbnwxfHx8fDE3NzU4MjE0MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1730302551882-99cb98b4adc4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBzaWRlJTIwcHJvZmlsZSUyMHZpZXd8ZW58MXx8fHwxNzc1ODA0OTkwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1769253678069-a35aebb89e0e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjYXIlMjBpbnRlcmlvciUyMHN0ZWVyaW5nJTIwd2hlZWx8ZW58MXx8fHwxNzc1ODIxNDM0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1669625313056-376ca4911561?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjByZWFyJTIwYmFjayUyMHZpZXd8ZW58MXx8fHwxNzc1ODIxNDMzfDA&ixlib=rb-4.1.0&q=80&w=1080"
  ];
  const handlePlaceBid = () => {
    const amount = parseInt(bidAmount);
    if (!amount || amount <= currentHighestBid) {
      toast.error("Bid must be higher than current bid!");
      return;
    }
    const newBid = {
      id: Date.now().toString(),
      userName: "You",
      amount,
      time: "Just now",
      isHighest: true
    };
    setBids((prevBids) => [
      newBid,
      ...prevBids.map((bid) => ({ ...bid, isHighest: false }))
    ]);
    setCurrentHighestBid(amount);
    setBidAmount("");
    toast.success("Bid placed successfully!", {
      description: `Your bid of \u20B9${amount.toLocaleString("en-IN")} has been placed.`
    });
  };
  const quickBidAmounts = [5e3, 1e4, 25e3, 5e4];
  return <div className="min-h-screen bg-muted/50">
      <Toaster />
      <Header />

      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Section - Car Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Car Gallery */}
            <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
              <CarGallery images={carImages} />
            </motion.div>

            {/* Car Info */}
            <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.1 }}
    className="bg-white rounded-xl border border-border p-6"
  >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className="bg-[#F97316] text-white px-3 py-1 flex items-center gap-1">
                      <Flame className="w-4 h-4" />
                      Live Auction
                    </Badge>
                    <Badge
                      variant="outline"
                      className="border-emerald-200 text-emerald-700 bg-emerald-50 px-3 py-1 flex items-center gap-1"
                    >
                      <ShieldCheck className="w-4 h-4" />
                      Verified
                    </Badge>
                  </div>
                  <h1 className="text-3xl font-bold text-foreground mb-2">Hyundai Creta 2022 SX</h1>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      2022
                    </span>
                    <span className="flex items-center gap-1">
                      <Navigation className="w-4 h-4" />
                      15,000 km
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      Delhi NCR
                    </span>
                  </div>
                </div>
              </div>

              {/* Quick Specs */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                <div className="flex items-center gap-3 p-3 bg-muted/70 rounded-lg">
                  <div className="w-10 h-10 rounded-full bg-[#F97316]/10 flex items-center justify-center">
                    <Fuel className="w-5 h-5 text-[#F97316]" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Fuel Type</p>
                    <p className="font-semibold text-sm text-foreground">Petrol</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-muted/70 rounded-lg">
                  <div className="w-10 h-10 rounded-full bg-[#F97316]/10 flex items-center justify-center">
                    <Settings className="w-5 h-5 text-[#F97316]" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Transmission</p>
                    <p className="font-semibold text-sm text-foreground">Automatic</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-muted/70 rounded-lg">
                  <div className="w-10 h-10 rounded-full bg-[#F97316]/10 flex items-center justify-center">
                    <Gauge className="w-5 h-5 text-[#F97316]" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Mileage</p>
                    <p className="font-semibold text-sm text-foreground">15 kmpl</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-muted/70 rounded-lg">
                  <div className="w-10 h-10 rounded-full bg-[#F97316]/10 flex items-center justify-center">
                    <Car className="w-5 h-5 text-[#F97316]" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Owners</p>
                    <p className="font-semibold text-sm text-foreground">1st Owner</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Tabs Section */}
            <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.2 }}
  >
              <Tabs defaultValue="overview" className="bg-white rounded-xl border border-border">
                <TabsList className="w-full justify-start border-b rounded-none bg-transparent p-0">
                  <TabsTrigger
    value="overview"
    className="rounded-none border-b-2 border-transparent data-[state=active]:border-[#F97316] data-[state=active]:text-[#F97316] px-6 py-4"
  >
                    Overview
                  </TabsTrigger>
                  <TabsTrigger
    value="specifications"
    className="rounded-none border-b-2 border-transparent data-[state=active]:border-[#F97316] data-[state=active]:text-[#F97316] px-6 py-4"
  >
                    Specifications
                  </TabsTrigger>
                  <TabsTrigger
    value="features"
    className="rounded-none border-b-2 border-transparent data-[state=active]:border-[#F97316] data-[state=active]:text-[#F97316] px-6 py-4"
  >
                    Features
                  </TabsTrigger>
                  <TabsTrigger
    value="seller"
    className="rounded-none border-b-2 border-transparent data-[state=active]:border-[#F97316] data-[state=active]:text-[#F97316] px-6 py-4"
  >
                    Seller Info
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="p-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-bold text-lg text-foreground mb-2">Description</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        This Hyundai Creta 2022 SX variant is in excellent condition with only 15,000 km driven. 
                        The car has been well-maintained with regular servicing done at authorized service centers. 
                        All original documents are available. Single owner, accident-free vehicle with comprehensive 
                        insurance valid till December 2026.
                      </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4 pt-4">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                        <div>
                          <p className="font-semibold text-sm text-foreground">Insurance</p>
                          <p className="text-xs text-muted-foreground">Valid till Dec 2026</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                        <div>
                          <p className="font-semibold text-sm text-foreground">Service History</p>
                          <p className="text-xs text-muted-foreground">Complete records available</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                        <div>
                          <p className="font-semibold text-sm text-foreground">Loan Available</p>
                          <p className="text-xs text-muted-foreground">Up to 80% financing</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                        <div>
                          <p className="font-semibold text-sm text-foreground">Warranty</p>
                          <p className="text-xs text-muted-foreground">Extended warranty available</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="specifications" className="p-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <div className="flex justify-between py-2 border-b">
                        <span className="text-muted-foreground">Engine</span>
                        <span className="font-semibold text-foreground">1497 cc</span>
                      </div>
                      <div className="flex justify-between py-2 border-b">
                        <span className="text-muted-foreground">Power</span>
                        <span className="font-semibold text-foreground">113 bhp</span>
                      </div>
                      <div className="flex justify-between py-2 border-b">
                        <span className="text-muted-foreground">Torque</span>
                        <span className="font-semibold text-foreground">144 Nm</span>
                      </div>
                      <div className="flex justify-between py-2 border-b">
                        <span className="text-muted-foreground">Seats</span>
                        <span className="font-semibold text-foreground">5 Seater</span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between py-2 border-b">
                        <span className="text-muted-foreground">Fuel Tank</span>
                        <span className="font-semibold text-foreground">50 L</span>
                      </div>
                      <div className="flex justify-between py-2 border-b">
                        <span className="text-muted-foreground">Length</span>
                        <span className="font-semibold text-foreground">4300 mm</span>
                      </div>
                      <div className="flex justify-between py-2 border-b">
                        <span className="text-muted-foreground">Width</span>
                        <span className="font-semibold text-foreground">1790 mm</span>
                      </div>
                      <div className="flex justify-between py-2 border-b">
                        <span className="text-muted-foreground">Height</span>
                        <span className="font-semibold text-foreground">1635 mm</span>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="features" className="p-6">
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {[
    "Sunroof",
    "Leather Seats",
    "Touchscreen Infotainment",
    "Rear Parking Camera",
    "Cruise Control",
    "Wireless Charger",
    "Ventilated Seats",
    "Auto Climate Control",
    "Push Button Start",
    "Keyless Entry",
    "LED Headlights",
    "Alloy Wheels"
  ].map((feature) => <div key={feature} className="flex items-center gap-2 p-2">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </div>)}
                  </div>
                </TabsContent>

                <TabsContent value="seller" className="p-6">
                  <Card className="border-border">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <Avatar className="w-16 h-16">
                          <AvatarFallback className="bg-primary text-primary-foreground text-xl">
                            R
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-bold text-lg text-foreground">Rajesh Kumar</h3>
                            <Badge className="bg-secondary text-secondary-foreground text-xs px-2 py-0.5">
                              Verified
                            </Badge>
                          </div>
                          <div className="flex items-center gap-1 mb-2">
                            {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-[#F97316] text-[#F97316]" />)}
                            <span className="text-sm text-muted-foreground ml-1">(4.8 rating)</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                            <MapPin className="w-4 h-4" />
                            <span>South Delhi, Delhi NCR</span>
                          </div>
                          <Button className="bg-[#F97316] hover:bg-[#ea580c] text-white">
                            <Phone className="w-4 h-4 mr-2" />
                            Contact Seller
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </motion.div>

            {/* Bid History - Mobile */}
            <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.3 }}
    className="lg:hidden"
  >
              <BidHistory bids={bids} />
            </motion.div>
          </div>

          {/* Right Section - Sticky Bidding Panel */}
          <div className="lg:col-span-1">
            <motion.div
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay: 0.2 }}
    className="sticky top-24 space-y-6"
  >
              {/* Bidding Card */}
              <div className="bg-white rounded-xl border border-border p-6 shadow-lg">
                <div className="mb-6">
                  <p className="text-sm text-muted-foreground mb-1">Current Highest Bid</p>
                  <div className="flex items-baseline gap-2">
                    <IndianRupee className="w-6 h-6 text-[#F97316]" />
                    <span className="text-4xl font-bold text-foreground">
                      {currentHighestBid.toLocaleString("en-IN")}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mt-2 text-sm text-emerald-600">
                    <TrendingUp className="w-4 h-4" />
                    <span>24 bids placed</span>
                  </div>
                </div>

                <div className="mb-6">
                  <CountdownTimer />
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Enter Your Bid
                    </label>
                    <div className="relative">
                      <IndianRupee className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <Input
    type="number"
    placeholder="Enter amount"
    value={bidAmount}
    onChange={(e) => setBidAmount(e.target.value)}
    className="pl-10 h-12 text-lg font-semibold"
  />
                    </div>
                  </div>

                  {/* Quick Bid Buttons */}
                  <div className="grid grid-cols-4 gap-2">
                    {quickBidAmounts.map((amount) => <Button
    key={amount}
    variant="outline"
    size="sm"
    onClick={() => setBidAmount((currentHighestBid + amount).toString())}
    className="text-xs hover:bg-[#F97316] hover:text-white hover:border-[#F97316]"
  >
                        +{amount / 1e3}k
                      </Button>)}
                  </div>

                  <Button
    onClick={handlePlaceBid}
    className="w-full h-12 bg-[#F97316] hover:bg-[#ea580c] text-white font-bold text-lg shadow-lg hover:shadow-xl transition-all"
  >
                    Place Bid
                  </Button>

                  <Button
    variant="outline"
    className="w-full h-12 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold"
  >
                    Enable Auto Bid
                  </Button>
                </div>

                <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="flex items-start gap-3">
                    <IndianRupee className="w-5 h-5 text-blue-700 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-blue-900 mb-1">Loan Available</p>
                      <p className="text-xs text-blue-800">
                        Get instant approval for up to ₹10 Lakhs at 8.5% interest
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bid History - Desktop */}
              <div className="hidden lg:block">
                <BidHistory bids={bids} />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <SiteFooter />
    </div>;
}
