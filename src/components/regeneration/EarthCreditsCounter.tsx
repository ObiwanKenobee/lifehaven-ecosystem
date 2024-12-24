import { useEffect, useState } from "react";
import { Progress } from "@/components/ui/progress";

export function EarthCreditsCounter() {
  const [credits, setCredits] = useState(2100000);
  const [progress, setProgress] = useState(75);

  useEffect(() => {
    const interval = setInterval(() => {
      setCredits(prev => prev + Math.floor(Math.random() * 10));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-4">
      <div className="text-2xl font-bold text-sage-500">
        {credits.toLocaleString()} EC
      </div>
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>Monthly Goal</span>
          <span className="text-sage-500">{progress}%</span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>
    </div>
  );
}