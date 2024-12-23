import { Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function AlertCenter() {
  const alerts = [
    {
      title: "Biodiversity Risk Alert",
      description: "Declining bee population detected in sector A-7",
      severity: "high",
    },
    {
      title: "Deforestation Warning",
      description: "Unusual activity detected in Amazon region",
      severity: "medium",
    },
  ];

  return (
    <div className="relative">
      <Button variant="outline" className="relative">
        <Bell className="h-4 w-4" />
        <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-red-500 animate-pulse" />
      </Button>
    </div>
  );
}