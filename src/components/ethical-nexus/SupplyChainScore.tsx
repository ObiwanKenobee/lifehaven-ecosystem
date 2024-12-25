import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { motion } from "framer-motion";

export function SupplyChainScore() {
  const scores = [
    { name: "Ethical Sourcing", value: 95, color: "bg-green-500" },
    { name: "Labor Equity", value: 89, color: "bg-blue-500" },
    { name: "Carbon Efficiency", value: 90, color: "bg-purple-500" },
  ];

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-2xl">Supply Chain Score Breakdown</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {scores.map((score, index) => (
          <motion.div
            key={score.name}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="space-y-2"
          >
            <div className="flex justify-between text-sm">
              <span>{score.name}</span>
              <span className="font-medium">{score.value}%</span>
            </div>
            <Progress value={score.value} className={score.color} />
          </motion.div>
        ))}
      </CardContent>
    </Card>
  );
}