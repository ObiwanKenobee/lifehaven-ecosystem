import { Progress } from "@/components/ui/progress";

export function GlobalInitiatives() {
  const initiatives = [
    {
      id: 1,
      name: "Global Reforestation Project",
      description: "Restoring forest ecosystems worldwide",
      progress: 65,
      impact: "4M trees planted",
    },
    {
      id: 2,
      name: "Clean Energy Transition",
      description: "Supporting communities in renewable energy adoption",
      progress: 45,
      impact: "2.5K homes powered",
    },
    {
      id: 3,
      name: "Ocean Regeneration",
      description: "Protecting and restoring marine ecosystems",
      progress: 30,
      impact: "500km² protected",
    },
  ];

  return (
    <div className="space-y-6">
      {initiatives.map((initiative) => (
        <div key={initiative.id} className="space-y-2">
          <div className="flex justify-between items-start">
            <div>
              <h4 className="font-medium text-sage-800">{initiative.name}</h4>
              <p className="text-sm text-sage-600">{initiative.description}</p>
            </div>
            <span className="text-sm font-medium text-sage-500">
              {initiative.impact}
            </span>
          </div>
          <Progress value={initiative.progress} className="h-2" />
        </div>
      ))}
    </div>
  );
}