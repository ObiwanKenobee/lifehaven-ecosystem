import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Globe, Users, TreePine, Network, Target, Plus } from "lucide-react";
import { ImpactMap } from "@/components/impact/ImpactMap";
import { NodeActivity } from "@/components/impact/NodeActivity";
import { GlobalInitiatives } from "@/components/impact/GlobalInitiatives";
import { CollaborationHub } from "@/components/impact/CollaborationHub";

export default function ImpactNetwork() {
  return (
    <div className="container mx-auto p-6 space-y-8 animate-fade-in">
      {/* Hero Section */}
      <div className="relative h-[400px] rounded-lg overflow-hidden mb-8">
        <ImpactMap />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/90 flex flex-col justify-end p-8">
          <h1 className="text-4xl font-bold text-white mb-2">Impact Network</h1>
          <p className="text-xl text-white/90">Connected for Change. United for Impact.</p>
          <div className="flex gap-4 mt-6">
            <div className="bg-black/20 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl font-bold text-white">1,429</div>
              <div className="text-white/80">Active RegenNodes</div>
            </div>
            <div className="bg-black/20 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl font-bold text-white">12</div>
              <div className="text-white/80">Global Initiatives</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Node Activity Feed */}
        <Card className="col-span-1 lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Network className="h-5 w-5 text-sage-500" />
              Node Activity Feed
            </CardTitle>
          </CardHeader>
          <CardContent>
            <NodeActivity />
          </CardContent>
        </Card>

        {/* Quick Stats */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5 text-sage-500" />
              Network Impact
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Carbon Offset</span>
              <span className="text-sage-500 font-medium">10,000 tons</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Trees Planted</span>
              <span className="text-sage-500 font-medium">1.2M</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Communities Impacted</span>
              <span className="text-sage-500 font-medium">234</span>
            </div>
          </CardContent>
        </Card>

        {/* Global Initiatives */}
        <Card className="col-span-1 lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="h-5 w-5 text-sage-500" />
              Global Initiatives
            </CardTitle>
          </CardHeader>
          <CardContent>
            <GlobalInitiatives />
          </CardContent>
        </Card>

        {/* Collaboration Hub */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 text-sage-500" />
              Collaboration Hub
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CollaborationHub />
          </CardContent>
        </Card>
      </div>

      {/* Call to Action Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <Button
          size="lg"
          className="w-full flex items-center gap-2"
          variant="default"
        >
          <Plus className="h-5 w-5" />
          Activate Your RegenNode
        </Button>
        <Button
          size="lg"
          className="w-full flex items-center gap-2"
          variant="secondary"
        >
          <TreePine className="h-5 w-5" />
          Support a Global Initiative
        </Button>
      </div>
    </div>
  );
}