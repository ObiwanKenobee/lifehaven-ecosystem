import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle, Globe, Leaf, Tree, HandShake, Coins, BookOpen, Users } from "lucide-react";
import { DashboardMetrics } from "@/components/dashboard/DashboardMetrics";
import { AlertCenter } from "@/components/dashboard/AlertCenter";
import { BiospherePanel } from "@/components/dashboard/BiospherePanel";

export default function Dashboard() {
  return (
    <div className="container mx-auto p-6 space-y-6 animate-fade-in">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-sage-800">LifeSphere Dashboard</h1>
        <AlertCenter />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <BiospherePanel />
        
        {/* Ethical Nexus Hub */}
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <HandShake className="h-5 w-5 text-sage-500" />
              Ethical Nexus Hub
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Supply Chain Transparency</p>
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
            <p className="text-muted-foreground">Earth Credits & Circular Commerce</p>
          </CardContent>
        </Card>

        {/* Civilizational Wisdom */}
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-sage-500" />
              Civilizational Wisdom
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Knowledge Vault & AI Adaptations</p>
          </CardContent>
        </Card>

        {/* Planetary Collaboration */}
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 text-sage-500" />
              Planetary Collaboration
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Global Initiatives & Youth Catalyst</p>
          </CardContent>
        </Card>
      </div>

      <DashboardMetrics />
    </div>
  );
}