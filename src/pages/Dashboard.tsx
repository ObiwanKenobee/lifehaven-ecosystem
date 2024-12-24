import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { 
  AlertCircle, Globe, Leaf, Trees, Handshake, Coins, 
  BookOpen, Users, Brain, Target, Recycle, ArrowRight 
} from "lucide-react";
import { DashboardMetrics } from "@/components/dashboard/DashboardMetrics";
import { AlertCenter } from "@/components/dashboard/AlertCenter";
import { BiospherePanel } from "@/components/dashboard/BiospherePanel";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto p-6 space-y-6 animate-fade-in">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-sage-800">LifeSphere Dashboard</h1>
        <AlertCenter />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* BioSphere AI Panel */}
        <Card 
          className="hover:shadow-lg transition-shadow col-span-1 lg:col-span-2 cursor-pointer group"
          onClick={() => navigate("/biosphere")}
        >
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Globe className="h-5 w-5 text-sage-500" />
                BioSphere AI & EcoImpact Index
              </div>
              <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <BiospherePanel />
          </CardContent>
        </Card>

        {/* Ethical Nexus Hub */}
        <Card className="hover:shadow-lg transition-shadow group">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Handshake className="h-5 w-5 text-sage-500" />
                Ethical Nexus Hub
              </div>
              <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Supply Chain Score</span>
                <span className="text-sage-500 font-medium">92%</span>
              </div>
              <div className="flex items-center gap-2">
                <Recycle className="h-4 w-4 text-sage-400" />
                <span className="text-sm">Circular Chain Active</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Regeneration Economy - Updated to be clickable */}
        <Card 
          className="hover:shadow-lg transition-shadow group cursor-pointer"
          onClick={() => navigate("/regeneration")}
        >
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Coins className="h-5 w-5 text-sage-500" />
                Regeneration Economy
              </div>
              <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Earth Credits</span>
                <span className="text-sage-500 font-medium">2.1M</span>
              </div>
              <div className="flex items-center gap-2">
                <Trees className="h-4 w-4 text-sage-400" />
                <span className="text-sm">Carbon Offset Progress</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Wisdom Engine - Updated to be clickable */}
        <Card 
          className="hover:shadow-lg transition-shadow group cursor-pointer"
          onClick={() => navigate("/wisdom")}
        >
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-sage-500" />
                Wisdom Engine
              </div>
              <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Active Simulations</span>
                <span className="text-sage-500 font-medium">3</span>
              </div>
              <div className="flex items-center gap-2">
                <Brain className="h-4 w-4 text-sage-400" />
                <span className="text-sm">AI-Driven Insights</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Impact Network */}
        <Card className="hover:shadow-lg transition-shadow group">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-sage-500" />
                Impact Network
              </div>
              <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Active RegenNodes</span>
                <span className="text-sage-500 font-medium">1,429</span>
              </div>
              <div className="flex items-center gap-2">
                <Target className="h-4 w-4 text-sage-400" />
                <span className="text-sm">Global Initiatives</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Metrics Section */}
      <DashboardMetrics />

      {/* PlanetQuests Section */}
      <Card className="hover:shadow-lg transition-shadow">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5 text-sage-500" />
            Active PlanetQuests
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Alert>
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>New Quest Available</AlertTitle>
              <AlertDescription className="flex items-center justify-between">
                <span>Join the Global Reforestation Challenge - Plant trees and earn Earth Credits</span>
                <Button variant="outline" size="sm" className="ml-4">
                  Join Quest
                </Button>
              </AlertDescription>
            </Alert>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
