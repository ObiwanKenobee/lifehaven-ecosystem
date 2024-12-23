import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function DashboardMetrics() {
  const metrics = [
    {
      title: "Protected Species",
      value: "5,000+",
      change: "+12%",
      description: "from last month",
    },
    {
      title: "Earth Credits Generated",
      value: "2.1M",
      change: "+18%",
      description: "from last month",
    },
    {
      title: "Active Projects",
      value: "1,429",
      change: "+8%",
      description: "from last month",
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-3">
      {metrics.map((metric) => (
        <Card key={metric.title}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {metric.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metric.value}</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-500">{metric.change}</span>{" "}
              {metric.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}