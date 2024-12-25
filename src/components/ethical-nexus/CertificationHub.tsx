import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { CheckCircleIcon, ShieldIcon, AwardIcon } from "lucide-react";

export function CertificationHub() {
  const certifications = [
    {
      name: "Ethical Sourcing",
      status: "Verified",
      expiry: "2025",
      icon: CheckCircleIcon,
    },
    {
      name: "Labor Equity",
      status: "In Progress",
      progress: "80%",
      icon: ShieldIcon,
    },
    {
      name: "Circular Economy",
      status: "Achieved",
      level: "Gold",
      icon: AwardIcon,
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">Certification Hub</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center justify-between p-4 rounded-lg bg-sage-50"
            >
              <div className="flex items-center space-x-4">
                <cert.icon className="h-6 w-6 text-sage-500" />
                <div>
                  <h3 className="font-medium">{cert.name}</h3>
                  <p className="text-sm text-sage-600">
                    {cert.status}{" "}
                    {cert.expiry && `• Valid until ${cert.expiry}`}
                    {cert.progress && `• ${cert.progress} Complete`}
                    {cert.level && `• ${cert.level} Level`}
                  </p>
                </div>
              </div>
              <Button variant="outline" size="sm">
                View Details
              </Button>
            </motion.div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}