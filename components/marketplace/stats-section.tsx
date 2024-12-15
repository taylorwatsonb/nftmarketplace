import { MARKETPLACE_STATS } from "@/lib/constants/marketplace";
import { StatsCard } from "./stats-card";

export function StatsSection() {
  return (
    <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
      {MARKETPLACE_STATS.map((stat) => (
        <StatsCard
          key={stat.id}
          title={stat.title}
          value={stat.value}
          subtitle={stat.subtitle}
          iconType={stat.iconType}
        />
      ))}
    </div>
  );
}