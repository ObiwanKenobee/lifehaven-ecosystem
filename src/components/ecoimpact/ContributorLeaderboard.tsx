import { ScrollArea } from "@/components/ui/scroll-area";

export function ContributorLeaderboard() {
  const contributors = [
    { name: "EcoTech Solutions", score: 92.5 },
    { name: "Green Future Inc", score: 88.7 },
    { name: "Sustainable Living", score: 85.2 },
  ];

  return (
    <ScrollArea className="h-[300px]">
      <div className="space-y-4">
        {contributors.map((contributor, index) => (
          <div key={contributor.name} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="font-medium">{index + 1}.</span>
              <span>{contributor.name}</span>
            </div>
            <span className="text-sage-500">{contributor.score}</span>
          </div>
        ))}
      </div>
    </ScrollArea>
  );
}