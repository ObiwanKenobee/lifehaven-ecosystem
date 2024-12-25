import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  CircleIcon, 
  LeafIcon, 
  UsersIcon, 
  RecycleIcon, 
  TrophyIcon,
  ArrowRightIcon 
} from "lucide-react";
import { SupplyChainScore } from "@/components/ethical-nexus/SupplyChainScore";
import { CircularChainDashboard } from "@/components/ethical-nexus/CircularChainDashboard";
import { ActionableInsights } from "@/components/ethical-nexus/ActionableInsights";
import { CertificationHub } from "@/components/ethical-nexus/CertificationHub";
import { AnalyticsPanel } from "@/components/ethical-nexus/AnalyticsPanel";
import { SupplierManagement } from "@/components/ethical-nexus/SupplierManagement";

export default function EthicalNexus() {
  // ... keep existing code (Hero Section)

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-gradient-to-br from-sage-100 to-sage-200 overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto h-full flex flex-col justify-center items-center text-center px-4"
        >
          <Badge className="mb-4 bg-sage-500 text-white">Supply Chain Score: 92%</Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-sage-800 mb-6">
            Ethical Nexus Hub
          </h1>
          <p className="text-xl md:text-2xl text-sage-600 mb-8">
            Building Transparent, Ethical, and Circular Economies
          </p>
          <div className="flex gap-4">
            <Button size="lg" className="bg-sage-500 hover:bg-sage-600">
              Track Your Supply Chain
              <ArrowRightIcon className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              Shop Ethically
              <ArrowRightIcon className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </motion.div>
        
        {/* Animated Background */}
        <div className="absolute inset-0 -z-10">
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 90, 180, 270, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-0 opacity-10"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border-2 border-sage-500 rounded-full" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border-2 border-sage-400 rounded-full" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border-2 border-sage-300 rounded-full" />
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 space-y-12">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Ethical Suppliers
              </CardTitle>
              <UsersIcon className="h-4 w-4 text-sage-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">15,234</div>
              <p className="text-xs text-muted-foreground">
                +2.1% from last month
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Products Tracked
              </CardTitle>
              <CircleIcon className="h-4 w-4 text-sage-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1.2M</div>
              <p className="text-xs text-muted-foreground">
                +12% from last quarter
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Carbon Reduced
              </CardTitle>
              <LeafIcon className="h-4 w-4 text-sage-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">45.3K</div>
              <p className="text-xs text-muted-foreground">
                Tons CO₂ equivalent
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Circular Chain Score
              </CardTitle>
              <RecycleIcon className="h-4 w-4 text-sage-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">92%</div>
              <p className="text-xs text-muted-foreground">
                +5% above industry average
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Supplier Management */}
        <SupplierManagement />

        {/* Supply Chain Score */}
        <SupplyChainScore />

        {/* Circular Chain Dashboard */}
        <CircularChainDashboard />

        {/* Actionable Insights */}
        <ActionableInsights />

        {/* Certification Hub */}
        <CertificationHub />

        {/* Analytics Panel */}
        <AnalyticsPanel />

        {/* Call to Action */}
        <section className="bg-sage-50 rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold text-sage-800 mb-4">
            Join the Ethical Nexus Movement
          </h2>
          <p className="text-sage-600 mb-6 max-w-2xl mx-auto">
            Be part of the solution. Start tracking your supply chain today and contribute to a more sustainable future.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-sage-500 hover:bg-sage-600">
              Get Started Now
              <ArrowRightIcon className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              Learn More
              <ArrowRightIcon className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
}
