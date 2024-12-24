import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Brain, Globe, History, Lightbulb, Play, Plus } from "lucide-react";
import { SimulationCard } from "@/components/wisdom/SimulationCard";
import { InsightsPanel } from "@/components/wisdom/InsightsPanel";
import { KnowledgeVault } from "@/components/wisdom/KnowledgeVault";
import { ImpactMap } from "@/components/wisdom/ImpactMap";

export default function WisdomEngine() {
  return (
    <div className="container mx-auto p-6 space-y-6 animate-fade-in">
      {/* Hero Section */}
      <div className="relative h-[300px] rounded-lg overflow-hidden mb-8 bg-gradient-to-r from-sage-800 to-sage-600">
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-8 text-center z-10">
          <h1 className="text-4xl font-bold mb-4">Wisdom Engine</h1>
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-sage-700/50 backdrop-blur-sm rounded-lg p-4">
              <p className="text-2xl font-semibold">3</p>
              <p className="text-sm">Active Simulations</p>
            </div>
            <div className="bg-sage-700/50 backdrop-blur-sm rounded-lg p-4">
              <p className="text-2xl font-semibold">24</p>
              <p className="text-sm">AI-Driven Insights</p>
            </div>
          </div>
          <p className="text-xl">Unlock the Past, Simulate the Present, Shape the Future</p>
        </div>
      </div>

      {/* Simulation Control Panel */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="col-span-full">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Play className="h-5 w-5 text-sage-500" />
              Active Simulations
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <SimulationCard
                title="Regenerative Agriculture"
                progress={75}
                metrics={{
                  resourcesSaved: "2.5M gallons",
                  communitiesImpacted: 12,
                  carbonOffset: "45 tons"
                }}
              />
              <SimulationCard
                title="Water Systems"
                progress={45}
                metrics={{
                  resourcesSaved: "1.2M gallons",
                  communitiesImpacted: 8,
                  carbonOffset: "20 tons"
                }}
              />
              <Card className="p-6 border-2 border-dashed border-sage-200 flex flex-col items-center justify-center gap-4 hover:border-sage-400 transition-colors cursor-pointer group">
                <Plus className="h-8 w-8 text-sage-400 group-hover:text-sage-600 transition-colors" />
                <p className="text-sage-600 font-medium">Start New Simulation</p>
              </Card>
            </div>
          </CardContent>
        </Card>

        {/* AI-Driven Insights Panel */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Brain className="h-5 w-5 text-sage-500" />
              AI-Driven Insights
            </CardTitle>
          </CardHeader>
          <CardContent>
            <InsightsPanel />
          </CardContent>
        </Card>

        {/* Knowledge Vault Quick Access */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <History className="h-5 w-5 text-sage-500" />
              Knowledge Vault
            </CardTitle>
          </CardHeader>
          <CardContent>
            <KnowledgeVault />
          </CardContent>
        </Card>

        {/* Impact Map */}
        <Card className="col-span-full">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="h-5 w-5 text-sage-500" />
              Global Impact Map
            </CardTitle>
          </CardHeader>
          <CardContent className="h-[400px]">
            <ImpactMap />
          </CardContent>
        </Card>
      </div>

      {/* Call to Action Section */}
      <div className="flex justify-center gap-4 mt-8">
        <Button size="lg" className="gap-2">
          <Play className="h-5 w-5" />
          Start Your Simulation
        </Button>
        <Button size="lg" variant="outline" className="gap-2">
          <Lightbulb className="h-5 w-5" />
          Explore AI Insights
        </Button>
      </div>
    </div>
  );
}