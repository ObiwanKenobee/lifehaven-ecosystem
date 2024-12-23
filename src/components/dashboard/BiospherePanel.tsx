import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, Leaf } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function BiospherePanel() {
  const navigate = useNavigate();

  return (
    <Card 
      className="hover:shadow-lg transition-shadow cursor-pointer"
      onClick={() => navigate("/biosphere")}
    >
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Globe className="h-5 w-5 text-sage-500" />
          BioSphere AI Panel
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Leaf className="h-4 w-4 text-sage-500" />
            <div>
              <p className="font-medium">Biodiversity Index</p>
              <p className="text-sm text-muted-foreground">Healthy ecosystem indicators</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}