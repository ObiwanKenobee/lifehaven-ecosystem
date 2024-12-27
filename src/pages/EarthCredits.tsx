import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { TreesIcon, LeafIcon, CoinsIcon, GlobeIcon } from "lucide-react";
import { motion } from "framer-motion";

export default function EarthCredits() {
  const metrics = [
    {
      icon: CoinsIcon,
      title: "Current Balance",
      value: "2,450",
      unit: "EC",
      progress: 65,
    },
    {
      icon: TreesIcon,
      title: "Carbon Offset",
      value: "12.5",
      unit: "tons",
      progress: 45,
    },
    {
      icon: LeafIcon,
      title: "Impact Score",
      value: "856",
      unit: "points",
      progress: 78,
    },
    {
      icon: GlobeIcon,
      title: "Projects Supported",
      value: "8",
      unit: "active",
      progress: 40,
    },
  ];

  return (
    <div className="container mx-auto p-6 space-y-8">
      <div className="relative h-48 rounded-lg overflow-hidden bg-gradient-to-r from-sage-600 to-sage-400 mb-8">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative h-full flex flex-col justify-center items-center text-white p-6 text-center">
          <h1 className="text-3xl font-bold mb-2">Earth Credits Dashboard</h1>
          <p className="text-lg">Track your impact and earn rewards</p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric, index) => (
          <motion.div
            key={metric.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">
                  {metric.title}
                </CardTitle>
                <metric.icon className="h-4 w-4 text-sage-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {metric.value}
                  <span className="text-sm font-normal text-muted-foreground ml-1">
                    {metric.unit}
                  </span>
                </div>
                <Progress value={metric.progress} className="h-2 mt-4" />
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Placeholder for future components */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Tasks</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Coming soon...</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Coming soon...</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}