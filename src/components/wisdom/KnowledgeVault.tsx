import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";

export function KnowledgeVault() {
  const practices = [
    {
      name: "Indus Valley Water Systems",
      era: "2500 BCE",
      category: "Water Management",
    },
    {
      name: "Incan Terraced Farming",
      era: "1400 CE",
      category: "Agriculture",
    },
  ];

  return (
    <ScrollArea className="h-[300px] pr-4">
      <div className="space-y-4">
        {practices.map((practice, index) => (
          <div
            key={index}
            className="p-4 rounded-lg border bg-card hover:shadow-md transition-shadow"
          >
            <div className="flex justify-between items-start mb-2">
              <div>
                <h4 className="font-medium">{practice.name}</h4>
                <p className="text-sm text-muted-foreground">{practice.era}</p>
              </div>
              <Button variant="ghost" size="icon">
                <Eye className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">{practice.category}</p>
          </div>
        ))}
      </div>
    </ScrollArea>
  );
}