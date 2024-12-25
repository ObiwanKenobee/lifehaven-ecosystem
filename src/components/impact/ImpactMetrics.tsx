import { motion } from "framer-motion";
import { Progress } from "@/components/ui/progress";
import { 
  TreesIcon, 
  LeafIcon, 
  UsersIcon, 
  CoinsIcon 
} from "lucide-react";

export function ImpactMetrics() {
  const metrics = [
    {
      icon: TreesIcon,
      label: "Carbon Offset",
      value: "2.5M",
      unit: "tons",
      progress: 75,
    },
    {
      icon: LeafIcon,
      label: "Biodiversity Gain",
      value: "1.2K",
      unit: "species",
      progress: 60,
    },
    {
      icon: UsersIcon,
      label: "Communities Impacted",
      value: "500+",
      unit: "communities",
      progress: 85,
    },
    {
      icon: CoinsIcon,
      label: "Economic Benefits",
      value: "$10M",
      unit: "generated",
      progress: 65,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {metrics.map((metric, index) => (
        <motion.div
          key={metric.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-sage-50 rounded-lg p-6 space-y-4"
        >
          <div className="flex items-center gap-3">
            <metric.icon className="h-6 w-6 text-sage-500" />
            <h3 className="font-medium text-sage-700">{metric.label}</h3>
          </div>
          <div className="text-3xl font-bold text-sage-700">
            {metric.value}
            <span className="text-sm font-normal text-sage-500 ml-1">
              {metric.unit}
            </span>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm text-sage-600">
              <span>Progress</span>
              <span>{metric.progress}%</span>
            </div>
            <Progress value={metric.progress} className="h-2" />
          </div>
        </motion.div>
      ))}
    </div>
  );
}