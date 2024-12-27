import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TreesIcon, SunIcon, RecycleIcon } from "lucide-react";
import { motion } from "framer-motion";

export default function CarbonOffsetProjects() {
  const projects = [
    {
      icon: TreesIcon,
      title: "Amazon Reforestation",
      description: "Support native tree planting in the Amazon rainforest",
      impact: "50,000 trees planted",
      progress: 75,
    },
    {
      icon: SunIcon,
      title: "Solar Energy Initiative",
      description: "Help install solar panels in rural communities",
      impact: "2,500 homes powered",
      progress: 45,
    },
    {
      icon: RecycleIcon,
      title: "Ocean Cleanup",
      description: "Fund innovative ocean plastic removal technology",
      impact: "10 tons removed",
      progress: 30,
    },
  ];

  return (
    <div className="container mx-auto p-6 space-y-8">
      <div className="relative h-48 rounded-lg overflow-hidden bg-gradient-to-r from-sage-600 to-sage-400 mb-8">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative h-full flex flex-col justify-center items-center text-white p-6 text-center">
          <h1 className="text-3xl font-bold mb-2">Carbon Offset Projects</h1>
          <p className="text-lg">Support global initiatives for a sustainable future</p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-start justify-between pb-2">
                <CardTitle className="text-lg font-medium">
                  {project.title}
                </CardTitle>
                <project.icon className="h-5 w-5 text-sage-500" />
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  {project.description}
                </p>
                <div className="text-sm font-medium text-sage-600">
                  {project.impact}
                </div>
                <Button className="w-full">Support Project</Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Placeholder for map component */}
      <Card>
        <CardHeader>
          <CardTitle>Project Locations</CardTitle>
        </CardHeader>
        <CardContent className="h-[400px] flex items-center justify-center bg-sage-50">
          <p className="text-muted-foreground">Interactive map coming soon...</p>
        </CardContent>
      </Card>
    </div>
  );
}