import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { BrainIcon, TrendingUpIcon, AwardIcon } from "lucide-react";

export function ActionableInsights() {
  const insights = [
    {
      title: "Optimize Supplier Network",
      description: "AI analysis suggests potential 15% efficiency improvement by reorganizing supplier network",
      action: "View Analysis",
      icon: BrainIcon,
    },
    {
      title: "Sustainability Goal Progress",
      description: "On track to achieve 100% circular supply chain by 2025",
      action: "Track Progress",
      icon: TrendingUpIcon,
    },
    {
      title: "Achievement Unlocked",
      description: "Earned 'Circular Chain Pioneer' badge for consistent sustainable practices",
      action: "View Badge",
      icon: AwardIcon,
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">AI-Driven Insights</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6 md:grid-cols-3">
          {insights.map((insight, index) => (
            <motion.div
              key={insight.title}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="p-4 rounded-lg border bg-card"
            >
              <div className="flex items-center space-x-2 mb-4">
                <insight.icon className="h-5 w-5 text-sage-500" />
                <h3 className="font-medium">{insight.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                {insight.description}
              </p>
              <Button variant="outline" size="sm">
                {insight.action}
              </Button>
            </motion.div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}