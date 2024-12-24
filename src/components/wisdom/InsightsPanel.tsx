import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Lightbulb } from "lucide-react";

export function InsightsPanel() {
  const insights = [
    {
      title: "Terraced Farming Impact",
      description: "Implementing Terraced Farming Reduces Water Loss by 35% in Semi-Arid Regions",
    },
    {
      title: "Circular Commerce Efficiency",
      description: "Adopting Circular Commerce Models Improves Resource Efficiency by 50%",
    },
  ];

  return (
    <div className="space-y-4">
      {insights.map((insight, index) => (
        <Alert key={index}>
          <Lightbulb className="h-4 w-4" />
          <AlertTitle>{insight.title}</AlertTitle>
          <AlertDescription>{insight.description}</AlertDescription>
        </Alert>
      ))}
    </div>
  );
}