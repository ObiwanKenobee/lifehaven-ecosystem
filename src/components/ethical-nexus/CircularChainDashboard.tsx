import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { RecycleIcon, LeafIcon, Factory } from "lucide-react";

export function CircularChainDashboard() {
  const activities = [
    {
      type: "Recycling",
      location: "San Francisco, CA",
      impact: "20 tons waste diverted",
      icon: RecycleIcon,
    },
    {
      type: "Upcycling",
      location: "Berlin, Germany",
      impact: "15K products renewed",
      icon: LeafIcon,
    },
    {
      type: "Manufacturing",
      location: "Singapore",
      impact: "30% energy reduction",
      icon: Factory,
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">Circular Chain Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.type}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center space-x-4 p-4 rounded-lg bg-sage-50"
            >
              <activity.icon className="h-8 w-8 text-sage-500" />
              <div>
                <h3 className="font-medium">{activity.type}</h3>
                <p className="text-sm text-sage-600">{activity.location}</p>
                <p className="text-xs text-sage-500">{activity.impact}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}