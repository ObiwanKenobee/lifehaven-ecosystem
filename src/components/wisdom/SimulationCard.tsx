import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface SimulationCardProps {
  title: string;
  progress: number;
  metrics: {
    resourcesSaved: string;
    communitiesImpacted: number;
    carbonOffset: string;
  };
}

export function SimulationCard({ title, progress, metrics }: SimulationCardProps) {
  return (
    <Card className="p-4 hover:shadow-lg transition-shadow">
      <CardContent className="space-y-4">
        <h3 className="font-semibold text-lg">{title}</h3>
        <Progress value={progress} className="h-2" />
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Resources Saved</span>
            <span className="font-medium">{metrics.resourcesSaved}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Communities</span>
            <span className="font-medium">{metrics.communitiesImpacted}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Carbon Offset</span>
            <span className="font-medium">{metrics.carbonOffset}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}