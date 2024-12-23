import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Target, Trophy, Recycle, Users } from "lucide-react";
import { GlobalScore } from "@/components/ecoimpact/GlobalScore";
import { ContributorLeaderboard } from "@/components/ecoimpact/ContributorLeaderboard";
import { WeightedMetrics } from "@/components/ecoimpact/WeightedMetrics";

export default function EcoImpact() {
  return (
    <div className="container mx-auto p-6 space-y-6 animate-fade-in">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-sage-800">EcoImpact Index</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Global Score */}
        <Card className="lg:col-span-2 hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5 text-sage-500" />
              Global EcoImpact Score
            </CardTitle>
          </CardHeader>
          <CardContent>
            <GlobalScore />
          </CardContent>
        </Card>

        {/* Leaderboard */}
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trophy className="h-5 w-5 text-sage-500" />
              Top Contributors
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ContributorLeaderboard />
          </CardContent>
        </Card>

        {/* Weighted Metrics */}
        <Card className="lg:col-span-3 hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Recycle className="h-5 w-5 text-sage-500" />
              Impact Metrics
            </CardTitle>
          </CardHeader>
          <CardContent>
            <WeightedMetrics />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}