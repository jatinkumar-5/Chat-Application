import { useNavigate } from "react-router";
import { Button } from "../components/ui/button";
import { Home, ArrowLeft } from "lucide-react";
export default function NotFound() {
  const navigate = useNavigate();
  return <div className="min-h-screen flex items-center justify-center bg-muted/50 px-4">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-foreground mb-4">404</h1>
        <h2 className="text-2xl font-bold text-foreground mb-2">Page Not Found</h2>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
    onClick={() => navigate(-1)}
    variant="outline"
    className="flex items-center gap-2"
  >
            <ArrowLeft className="w-4 h-4" />
            Go Back
          </Button>
          <Button
    onClick={() => navigate("/")}
    className="flex items-center gap-2 bg-[#F97316] hover:bg-[#ea580c] text-white"
  >
            <Home className="w-4 h-4" />
            Go Home
          </Button>
        </div>
      </div>
    </div>;
}
