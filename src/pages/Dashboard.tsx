import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { 
  AlertCircle, Globe, Leaf, Trees, Handshake, Coins, 
  BookOpen, Users, Brain, Target, Recycle 
} from "lucide-react";
import { DashboardMetrics } from "@/components/dashboard/DashboardMetrics";
import { AlertCenter } from "@/components/dashboard/AlertCenter";
import { BiospherePanel } from "@/components/dashboard/BiospherePanel";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto p-6 space-y-6 animate-fade-in">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-sage-800">LifeSphere Dashboard</h1>
        <AlertCenter />
      </div>

      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* BioSphere AI Panel with EcoImpact Index */}
        <Card 
          className="hover:shadow-lg transition-shadow col-span-1 lg:col-span-2 cursor-pointer"
          onClick={() => navigate("/biosphere")}
        >
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="h-5 w-5 text-sage-500" />
              BioSphere AI & EcoImpact Index
            </CardTitle>
          </CardHeader>
          <CardContent>
            <BiospherePanel />
          </CardContent>
        </Card>

        {/* Ethical Nexus Hub */}
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Handshake className="h-5 w-5 text-sage-500" />
              Ethical Nexus Hub
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <p className="text-muted-foreground">Supply Chain Transparency</p>
              <div className="flex items-center gap-2">
                <Recycle className="h-4 w-4 text-sage-400" />
                <span className="text-sm">Circular Chain Active</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Regeneration Economy */}
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Coins className="h-5 w-5 text-sage-500" />
              Regeneration Economy
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <p className="text-muted-foreground">Earth Credits & Carbon Exchange</p>
              <div className="flex items-center gap-2">
                <Trees className="h-4 w-4 text-sage-400" />
                <span className="text-sm">Carbon Offset Progress</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Civilizational Wisdom Engine */}
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-sage-500" />
              Wisdom Engine
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <p className="text-muted-foreground">Ancient Wisdom Simulations</p>
              <div className="flex items-center gap-2">
                <Brain className="h-4 w-4 text-sage-400" />
                <span className="text-sm">Active Simulations: 3</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Planetary Collaboration */}
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 text-sage-500" />
              Impact Network
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <p className="text-muted-foreground">Global Initiatives & RegenNodes</p>
              <div className="flex items-center gap-2">
                <Target className="h-4 w-4 text-sage-400" />
                <span className="text-sm">Active Projects: 1,429</span>
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
              <AlertDescription>
                Join the Global Reforestation Challenge - Plant trees and earn Earth Credits
              </AlertDescription>
            </Alert>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}