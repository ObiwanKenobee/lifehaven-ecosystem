import { Progress } from "@/components/ui/progress";

export function HealthyEcosystemIndicators() {
  const indicators = [
    { name: "Species Diversity", value: 75 },
    { name: "Habitat Integrity", value: 62 },
    { name: "Water Quality", value: 88 },
    { name: "Carbon Sequestration", value: 45 },
  ];

  return (
    <div className="space-y-6">
      {indicators.map((indicator) => (
        <div key={indicator.name} className="space-y-2">
          <div className="flex justify-between">
            <span className="font-medium">{indicator.name}</span>
            <span className="text-sage-500">{indicator.value}%</span>
          </div>
          <Progress value={indicator.value} className="h-2" />
        </div>
      ))}
    </div>
  );
}