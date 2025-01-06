import { Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

export function AlertCenter() {
  const alerts = [
    {
      title: "Biodiversity Risk Alert",
      description: "Declining bee population detected in sector A-7",
      severity: "high",
      timestamp: "2 hours ago",
    },
    {
      title: "Deforestation Warning",
      description: "Unusual activity detected in Amazon region",
      severity: "medium",
      timestamp: "5 hours ago",
    },
    {
      title: "Sustainability Goal Achieved",
      description: "Carbon offset target reached for Q1",
      severity: "low",
      timestamp: "1 day ago",
    },
  ];

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className="relative">
          <Bell className="h-4 w-4" />
          {alerts.some(alert => alert.severity === 'high') && (
            <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-red-500 animate-pulse" />
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80" align="end">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle>Notifications</CardTitle>
            <CardDescription>
              You have {alerts.length} unread messages
            </CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <ScrollArea className="h-[300px] px-4">
              <div className="space-y-4 pb-4">
                {alerts.map((alert, index) => (
                  <div
                    key={index}
                    className={cn(
                      "flex flex-col space-y-1 rounded-lg p-3",
                      alert.severity === 'high' && "bg-red-50",
                      alert.severity === 'medium' && "bg-yellow-50",
                      alert.severity === 'low' && "bg-green-50"
                    )}
                  >
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-semibold">{alert.title}</h4>
                      <span className={cn(
                        "text-xs",
                        alert.severity === 'high' && "text-red-600",
                        alert.severity === 'medium' && "text-yellow-600",
                        alert.severity === 'low' && "text-green-600"
                      )}>
                        {alert.severity}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {alert.description}
                    </p>
                    <span className="text-xs text-muted-foreground">
                      {alert.timestamp}
                    </span>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
      </PopoverContent>
    </Popover>
  );
}