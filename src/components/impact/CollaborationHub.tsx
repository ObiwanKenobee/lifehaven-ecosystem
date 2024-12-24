import { Button } from "@/components/ui/button";

export function CollaborationHub() {
  const opportunities = [
    {
      id: 1,
      title: "Tree Planting Initiative",
      type: "Volunteer",
      location: "Amazon Rainforest",
    },
    {
      id: 2,
      title: "Solar Panel Installation",
      type: "Technical Support",
      location: "Rural Kenya",
    },
    {
      id: 3,
      title: "Waste Management System",
      type: "Funding",
      location: "Indonesia",
    },
  ];

  return (
    <div className="space-y-4">
      {opportunities.map((opportunity) => (
        <div
          key={opportunity.id}
          className="p-4 rounded-lg border border-sage-100 hover:border-sage-200 transition-colors"
        >
          <h4 className="font-medium text-sage-800">{opportunity.title}</h4>
          <div className="flex items-center justify-between mt-2">
            <div className="text-sm text-sage-600">
              <span className="mr-2">{opportunity.type}</span>
              <span>• {opportunity.location}</span>
            </div>
            <Button variant="outline" size="sm">
              Join
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}