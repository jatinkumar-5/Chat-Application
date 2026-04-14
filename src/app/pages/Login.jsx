import { useState } from "react";
import { useNavigate } from "react-router";
import { Mail, Lock, Phone } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Separator } from "../components/ui/separator";
import { motion } from "motion/react";
export default function Login() {
  const navigate = useNavigate();
  const [loginMethod, setLoginMethod] = useState("phone");
  const [phoneOrEmail, setPhoneOrEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const handleGetOTP = () => {
    setOtpSent(true);
  };
  const handleLogin = () => {
    navigate("/auction");
  };
  const handleGoHome = () => {
    navigate("/");
  };
  return <div className="min-h-screen flex">
      {/* Left Side - Premium Car Image with Overlay */}
      <motion.div
    initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6 }}
    className="hidden lg:flex lg:w-1/2 relative overflow-hidden"
  >
        <div className="absolute inset-0">
          <img
    src="https://images.unsplash.com/photo-1774979300787-bd3563a085b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtb2Rlcm4lMjBjYXIlMjBwcmVtaXVtJTIwc2hvd3Jvb218ZW58MXx8fHwxNzc1ODIxNDMxfDA&ixlib=rb-4.1.0&q=80&w=1080"
    alt="Premium Car"
    className="w-full h-full object-cover"
  />
          <div className="absolute inset-0 bg-gradient-to-br from-[#7A2E00]/90 via-[#F97316]/55 to-[#FBBF24]/25" />
        </div>
        
        <div className="relative z-10 flex flex-col justify-center px-16 text-white">
          <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.3, duration: 0.6 }}
  >
            <h1 className="text-5xl font-bold mb-4 leading-tight">
              Find Your<br />Dream Car
            </h1>
            <p className="text-xl text-white/85 mb-8">
              Buy, Sell & Bid Easily
            </p>
            <div className="flex gap-8 text-sm">
              <div>
                <div className="text-3xl font-bold text-[#FBBF24]">50K+</div>
                <div className="text-amber-100/80 mt-1">Cars Listed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#FBBF24]">10K+</div>
                <div className="text-amber-100/80 mt-1">Happy Users</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#FBBF24]">100+</div>
                <div className="text-amber-100/80 mt-1">Cities</div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Right Side - Login/Signup Card */}
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-gradient-to-br from-amber-50/80 via-white to-white p-8">
        <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="w-full max-w-md"
  >
          {/* Logo */}
          <div className="mb-8 text-center lg:text-left">
            <button
              type="button"
              onClick={handleGoHome}
              className="inline-flex items-center justify-center lg:justify-start text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md"
              aria-label="Go to home"
            >
              <h1 className="text-3xl font-bold text-foreground mb-2">
              Vehicle <span className="text-[#F97316]">Dekho</span>
              </h1>
            </button>
            <p className="text-muted-foreground text-sm">Your trusted car marketplace</p>
          </div>

          {/* Login/Signup Card */}
          <div className="bg-white rounded-xl shadow-lg p-8 border border-border">
            <h2 className="text-2xl font-bold text-foreground mb-2">
              Welcome Back
            </h2>
            <p className="text-muted-foreground mb-6">
              Login to continue your journey
            </p>

            {/* Login Method Tabs */}
            <div className="flex gap-2 mb-6 bg-muted rounded-lg p-1">
              <button
    onClick={() => setLoginMethod("phone")}
    className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all ${loginMethod === "phone" ? "bg-white text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"}`}
  >
                Phone
              </button>
              <button
    onClick={() => setLoginMethod("email")}
    className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all ${loginMethod === "email" ? "bg-white text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"}`}
  >
                Email
              </button>
            </div>

            {/* Input Fields */}
            <div className="space-y-4 mb-6">
              <div>
                <Label htmlFor="phoneOrEmail" className="text-sm font-medium text-foreground mb-2">
                  {loginMethod === "phone" ? "Phone Number" : "Email Address"}
                </Label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                    {loginMethod === "phone" ? <Phone className="w-5 h-5" /> : <Mail className="w-5 h-5" />}
                  </div>
                  <Input
    id="phoneOrEmail"
    type={loginMethod === "phone" ? "tel" : "email"}
    placeholder={loginMethod === "phone" ? "+91 98765 43210" : "your@email.com"}
    value={phoneOrEmail}
    onChange={(e) => setPhoneOrEmail(e.target.value)}
    className="pl-10 h-12 rounded-lg border-border focus:border-primary focus:ring-primary"
  />
                </div>
              </div>

              {otpSent && <motion.div
    initial={{ opacity: 0, height: 0 }}
    animate={{ opacity: 1, height: "auto" }}
    transition={{ duration: 0.3 }}
  >
                  <Label htmlFor="otp" className="text-sm font-medium text-foreground mb-2">
                    Enter OTP
                  </Label>
                  <div className="relative">
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                      <Lock className="w-5 h-5" />
                    </div>
                    <Input
    id="otp"
    type="text"
    placeholder="Enter 6-digit OTP"
    value={otp}
    onChange={(e) => setOtp(e.target.value)}
    maxLength={6}
    className="pl-10 h-12 rounded-lg border-border focus:border-primary focus:ring-primary"
  />
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    Didn't receive? <button className="text-[#F97316] font-medium hover:underline">Resend OTP</button>
                  </p>
                </motion.div>}
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Button
    onClick={handleGetOTP}
    className="w-full h-12 bg-[#F97316] hover:bg-[#ea580c] text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all"
  >
                Get OTP
              </Button>

              <Button
    onClick={handleLogin}
    disabled={!otpSent}
    className="w-full h-12 bg-[#FBBF24] hover:bg-[#f59e0b] text-[#7A2E00] font-semibold rounded-lg shadow-md hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-[#FBBF24]"
  >
                Sign In
              </Button>
            </div>

            <div className="mt-4 text-center">
              <a href="#" className="text-sm text-[#F97316] hover:underline font-medium">
                Forgot Password?
              </a>
            </div>

            {/* Divider */}
            <div className="my-6 flex items-center gap-4">
              <Separator className="flex-1" />
              <span className="text-sm text-muted-foreground">OR</span>
              <Separator className="flex-1" />
            </div>

            {/* Social Login */}
            <div className="space-y-3">
              <Button
    variant="outline"
    className="w-full h-12 border-border hover:bg-muted rounded-lg font-medium"
  >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                  <path
    fill="currentColor"
    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
  />
                  <path
    fill="currentColor"
    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
  />
                  <path
    fill="currentColor"
    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
  />
                  <path
    fill="currentColor"
    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
  />
                </svg>
                Continue with Google
              </Button>

              <Button
    variant="outline"
    className="w-full h-12 border-border hover:bg-muted rounded-lg font-medium"
  >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                Continue with Facebook
              </Button>
            </div>

          </div>

          {/* Mobile Logo for smaller screens */}
          <div className="mt-8 text-center lg:hidden">
            <p className="text-xs text-muted-foreground">
              © 2026 Vehicle Dekho. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </div>;
}
