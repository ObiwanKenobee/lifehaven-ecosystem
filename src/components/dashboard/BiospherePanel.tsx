import { Card, CardContent } from "@/components/ui/card";
import { Globe, Leaf } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function BiospherePanel() {
  const navigate = useNavigate();

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Leaf className="h-4 w-4 text-sage-500" />
        <div>
          <p className="font-medium">Biodiversity Index</p>
          <p className="text-sm text-muted-foreground">Healthy ecosystem indicators</p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <p className="text-2xl font-bold text-sage-500">85.2</p>
          <p className="text-sm text-muted-foreground">Global EcoImpact Score</p>
        </div>
        <div className="space-y-2">
          <p className="text-2xl font-bold text-sage-500">1.2M</p>
          <p className="text-sm text-muted-foreground">Active Monitoring Points</p>
        </div>
      </div>
    </div>
  );
}