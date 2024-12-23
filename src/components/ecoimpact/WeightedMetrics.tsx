import { Progress } from "@/components/ui/progress";

export function WeightedMetrics() {
  const metrics = [
    { name: "Carbon Sequestration", weight: 50, progress: 65 },
    { name: "Species Restoration", weight: 20, progress: 45 },
    { name: "Resource Circularity", weight: 15, progress: 80 },
    { name: "Community Engagement", weight: 15, progress: 70 },
  ];

  return (
    <div className="space-y-6">
      {metrics.map((metric) => (
        <div key={metric.name} className="space-y-2">
          <div className="flex justify-between">
            <span className="font-medium">{metric.name}</span>
            <span className="text-sage-500">{metric.progress}% (Weight: {metric.weight}%)</span>
          </div>
          <Progress value={metric.progress} className="h-2" />
        </div>
      ))}
    </div>
  );
}