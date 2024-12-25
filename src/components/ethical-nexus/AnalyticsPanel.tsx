import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

export function AnalyticsPanel() {
  const data = [
    { name: "Jan", score: 65 },
    { name: "Feb", score: 72 },
    { name: "Mar", score: 78 },
    { name: "Apr", score: 82 },
    { name: "May", score: 85 },
    { name: "Jun", score: 92 },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">Supply Chain Analytics</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] mt-4">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="score" fill="#8BA888" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-6 text-center">
          <Button>
            Download Full Report
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}