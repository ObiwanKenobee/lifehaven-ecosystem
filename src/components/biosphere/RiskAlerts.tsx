import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

export function RiskAlerts() {
  const alerts = [
    {
      title: "Deforestation Risk",
      description: "High risk of deforestation detected in Amazon region",
    },
    {
      title: "Species Alert",
      description: "Declining bee population in agricultural zones",
    },
  ];

  return (
    <div className="space-y-4">
      {alerts.map((alert) => (
        <Alert key={alert.title} variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>{alert.title}</AlertTitle>
          <AlertDescription>{alert.description}</AlertDescription>
        </Alert>
      ))}
    </div>
  );
}