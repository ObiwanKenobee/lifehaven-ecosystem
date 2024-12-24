export function NodeActivity() {
  const activities = [
    {
      id: 1,
      node: "Solar Grid Node, Kenya",
      action: "Deployed 5 new solar panels",
      timestamp: "2 hours ago",
    },
    {
      id: 2,
      node: "Reforestation Hub, Brazil",
      action: "Planted 1,000 native trees",
      timestamp: "5 hours ago",
    },
    {
      id: 3,
      node: "Ocean Cleanup, Indonesia",
      action: "Removed 500kg of plastic waste",
      timestamp: "1 day ago",
    },
  ];

  return (
    <div className="space-y-4">
      {activities.map((activity) => (
        <div
          key={activity.id}
          className="flex items-center justify-between p-4 rounded-lg bg-sage-50/50 hover:bg-sage-50 transition-colors"
        >
          <div>
            <h4 className="font-medium text-sage-800">{activity.node}</h4>
            <p className="text-sm text-sage-600">{activity.action}</p>
          </div>
          <span className="text-sm text-sage-500">{activity.timestamp}</span>
        </div>
      ))}
    </div>
  );
}