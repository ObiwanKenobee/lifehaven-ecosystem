import { Card } from "@/components/ui/card";

export function GlobalScore() {
  return (
    <div className="space-y-4">
      <div className="text-4xl font-bold text-sage-500">85.2</div>
      <p className="text-muted-foreground">Global EcoImpact Score</p>
      <div className="text-sm text-sage-600">+2.3 points from last month</div>
    </div>
  );
}