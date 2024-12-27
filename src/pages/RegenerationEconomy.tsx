import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { EarthCreditsCounter } from "@/components/regeneration/EarthCreditsCounter";
import { CarbonOffsetTracker } from "@/components/regeneration/CarbonOffsetTracker";
import { CircularCommerce } from "@/components/regeneration/CircularCommerce";
import { ImpactMap } from "@/components/regeneration/ImpactMap";
import { Leaf, Globe, Recycle, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function RegenerationEconomy() {
  const navigate = useNavigate();

  // ... keep existing code (metrics and other content)

  return (
    <div className="container mx-auto p-6 space-y-8 animate-fade-in">
      {/* Hero Banner */}
      <div className="relative h-64 rounded-lg overflow-hidden bg-gradient-to-r from-sage-600 to-sage-400 mb-8">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative h-full flex flex-col justify-center items-center text-white p-6 text-center">
          <h1 className="text-4xl font-bold mb-4">Regeneration Economy</h1>
          <p className="text-xl">Empowering Regeneration, Rewarding Sustainability</p>
        </div>
      </div>

      {/* Earth Credits Overview */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Leaf className="h-5 w-5 text-sage-500" />
              Earth Credits
            </CardTitle>
          </CardHeader>
          <CardContent>
            <EarthCreditsCounter />
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="h-5 w-5 text-sage-500" />
              Carbon Offset
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CarbonOffsetTracker />
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Recycle className="h-5 w-5 text-sage-500" />
              Circular Commerce
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CircularCommerce />
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 text-sage-500" />
              Community Impact
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-sage-500">1.2K</div>
            <p className="text-sm text-muted-foreground">Active Contributors</p>
          </CardContent>
        </Card>
      </div>

      {/* Impact Map */}
      <Card className="hover:shadow-lg transition-shadow">
        <CardHeader>
          <CardTitle>Global Impact Map</CardTitle>
        </CardHeader>
        <CardContent className="h-[400px]">
          <ImpactMap />
        </CardContent>
      </Card>

      {/* Call to Action */}
      <div className="flex flex-col md:flex-row gap-4 justify-center items-center mt-8">
        <Button 
          size="lg" 
          className="w-full md:w-auto"
          onClick={() => navigate("/earth-credits")}
        >
          Start Earning Earth Credits
        </Button>
        <Button 
          size="lg" 
          variant="outline" 
          className="w-full md:w-auto"
          onClick={() => navigate("/carbon-offset-projects")}
        >
          Support a Carbon Offset Project
        </Button>
      </div>
    </div>
  );
}
