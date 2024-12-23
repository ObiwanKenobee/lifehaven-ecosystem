import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle, Globe, Leaf, Trees } from "lucide-react";
import { BiodiversityMap } from "@/components/biosphere/BiodiversityMap";
import { HealthyEcosystemIndicators } from "@/components/biosphere/HealthyEcosystemIndicators";
import { RiskAlerts } from "@/components/biosphere/RiskAlerts";

export default function BiosphereAI() {
  return (
    <div className="container mx-auto p-6 space-y-6 animate-fade-in">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-sage-800">BioSphere AI Panel</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Map Section */}
        <Card className="lg:col-span-2 hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="h-5 w-5 text-sage-500" />
              Global Biodiversity Index
            </CardTitle>
          </CardHeader>
          <CardContent>
            <BiodiversityMap />
          </CardContent>
        </Card>

        {/* Risk Alerts Section */}
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-sage-500" />
              Risk Alerts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <RiskAlerts />
          </CardContent>
        </Card>

        {/* Ecosystem Indicators */}
        <Card className="lg:col-span-3 hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Leaf className="h-5 w-5 text-sage-500" />
              Healthy Ecosystem Indicators
            </CardTitle>
          </CardHeader>
          <CardContent>
            <HealthyEcosystemIndicators />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}