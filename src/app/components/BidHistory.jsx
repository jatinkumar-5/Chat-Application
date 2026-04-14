import { Avatar, AvatarFallback } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Trophy } from "lucide-react";
export default function BidHistory({ bids }) {
  return <div className="bg-white rounded-xl border border-border p-6">
      <h3 className="text-lg font-bold text-foreground mb-4">Bid History</h3>
      
      <div className="space-y-3 max-h-96 overflow-y-auto">
        {bids.map((bid, index) => <div
    key={bid.id}
    className={`flex items-center justify-between p-3 rounded-lg transition-colors ${bid.isHighest ? "bg-gradient-to-r from-[#F97316]/10 to-[#F97316]/5 border border-[#F97316]/20" : "bg-muted/70 hover:bg-muted"}`}
  >
            <div className="flex items-center gap-3">
              <Avatar className="w-10 h-10">
                <AvatarFallback className="bg-primary text-primary-foreground text-sm">
                  {bid.userName.charAt(0)}
                </AvatarFallback>
              </Avatar>
              
              <div>
                <div className="flex items-center gap-2">
                  <p className="font-semibold text-sm text-foreground">{bid.userName}</p>
                  {bid.isHighest && <Badge className="bg-[#F97316] text-white text-xs px-2 py-0.5 flex items-center gap-1">
                      <Trophy className="w-3 h-3" />
                      Highest
                    </Badge>}
                </div>
                <p className="text-xs text-muted-foreground">{bid.time}</p>
              </div>
            </div>
            
            <div className="text-right">
              <p className={`font-bold ${bid.isHighest ? "text-[#F97316]" : "text-foreground"}`}>
                ₹{bid.amount.toLocaleString("en-IN")}
              </p>
            </div>
          </div>)}
      </div>
    </div>;
}
