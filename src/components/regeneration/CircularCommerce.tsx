import { ScrollArea } from "@/components/ui/scroll-area";

export function CircularCommerce() {
  const resources = [
    { name: "Recycled Materials", amount: "2.3K tons" },
    { name: "Clean Energy", amount: "1.5M kWh" },
    { name: "Water Saved", amount: "500K gal" },
  ];

  return (
    <ScrollArea className="h-[100px]">
      <div className="space-y-2">
        {resources.map((resource) => (
          <div
            key={resource.name}
            className="flex justify-between items-center text-sm"
          >
            <span className="text-muted-foreground">{resource.name}</span>
            <span className="text-sage-500">{resource.amount}</span>
          </div>
        ))}
      </div>
    </ScrollArea>
  );
}