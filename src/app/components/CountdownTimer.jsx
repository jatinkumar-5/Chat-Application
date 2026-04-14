import { useState, useEffect } from "react";
import { Clock } from "lucide-react";
export default function CountdownTimer({ endTime }) {
  const defaultEndTime = new Date(Date.now() + 2 * 60 * 60 * 1e3);
  const targetTime = endTime || defaultEndTime;
  const calculateTimeLeft = () => {
    const difference = targetTime.getTime() - Date.now();
    if (difference <= 0) {
      return { hours: 0, minutes: 0, seconds: 0 };
    }
    return {
      hours: Math.floor(difference / (1e3 * 60 * 60)),
      minutes: Math.floor(difference / (1e3 * 60) % 60),
      seconds: Math.floor(difference / 1e3 % 60)
    };
  };
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1e3);
    return () => clearInterval(timer);
  }, []);
  const formatNumber = (num) => num.toString().padStart(2, "0");
  return <div className="flex items-center justify-center gap-3 bg-gradient-to-r from-[#F97316] to-[#ea580c] text-white p-4 rounded-xl shadow-lg">
      <Clock className="w-5 h-5" />
      <div className="flex items-center gap-2">
        <div className="flex flex-col items-center">
          <div className="text-2xl font-bold tabular-nums">{formatNumber(timeLeft.hours)}</div>
          <div className="text-xs font-medium opacity-90">Hours</div>
        </div>
        <div className="text-2xl font-bold">:</div>
        <div className="flex flex-col items-center">
          <div className="text-2xl font-bold tabular-nums">{formatNumber(timeLeft.minutes)}</div>
          <div className="text-xs font-medium opacity-90">Minutes</div>
        </div>
        <div className="text-2xl font-bold">:</div>
        <div className="flex flex-col items-center">
          <div className="text-2xl font-bold tabular-nums">{formatNumber(timeLeft.seconds)}</div>
          <div className="text-xs font-medium opacity-90">Seconds</div>
        </div>
      </div>
    </div>;
}
