import { Progress } from "@/components/ui/progress";

export function CarbonOffsetTracker() {
  const offsetProgress = 65;
  const totalOffset = "1.5M";

  return (
    <div className="space-y-4">
      <div className="text-2xl font-bold text-sage-500">{totalOffset}</div>
      <p className="text-sm text-muted-foreground">Tons CO₂ Offset</p>
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>Progress</span>
          <span className="text-sage-500">{offsetProgress}%</span>
        </div>
        <Progress value={offsetProgress} className="h-2" />
      </div>
    </div>
  );
}