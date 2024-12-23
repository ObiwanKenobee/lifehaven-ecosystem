import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Features } from "@/components/Features";
import { Globe, AlertCircle, Shield, Coins, BookOpen, Users } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-sage-50">
      {/* Header */}
      <header className="bg-sage-700 text-white py-6 px-4">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold">LifeSphere Dashboard</h1>
          <p className="text-sage-100 mt-2">Operating System for Sustainable Civilization</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Grid Layout for Dashboard Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* BioSphere AI Panel */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="space-y-1">
              <CardTitle className="text-xl flex items-center gap-2">
                <Globe className="h-5 w-5 text-sage-600" />
                BioSphere AI
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sage-600">
                Real-time biodiversity monitoring and AI-driven interventions
              </p>
            </CardContent>
          </Card>

          {/* Ethical Nexus Hub */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="space-y-1">
              <CardTitle className="text-xl flex items-center gap-2">
                <Shield className="h-5 w-5 text-sage-600" />
                Ethical Nexus
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sage-600">
                Transparent supply chains and labor equity
              </p>
            </CardContent>
          </Card>

          {/* Regeneration Economy Dashboard */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="space-y-1">
              <CardTitle className="text-xl flex items-center gap-2">
                <Coins className="h-5 w-5 text-sage-600" />
                Regeneration Economy
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sage-600">
                Earth Credits and circular commerce exchange
              </p>
            </CardContent>
          </Card>

          {/* Civilizational Wisdom Engine */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="space-y-1">
              <CardTitle className="text-xl flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-sage-600" />
                Wisdom Engine
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sage-600">
                Ancient practices with modern adaptations
              </p>
            </CardContent>
          </Card>

          {/* Planetary Collaboration Platform */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="space-y-1">
              <CardTitle className="text-xl flex items-center gap-2">
                <Users className="h-5 w-5 text-sage-600" />
                Collaboration Platform
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sage-600">
                Global sustainability initiatives and youth catalysts
              </p>
            </CardContent>
          </Card>

          {/* Alert Center */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="space-y-1">
              <CardTitle className="text-xl flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-sage-600" />
                Alert Center
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sage-600">
                Real-time alerts and notifications
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Features Section */}
        <Features />
      </main>
    </div>
  );
};

export default Dashboard;