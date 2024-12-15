import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { iconMap } from "@/lib/utils/icon-map";

interface StatsCardProps {
  title: string;
  value: string;
  subtitle: string;
  iconType: keyof typeof iconMap;
}

export function StatsCard({ title, value, subtitle, iconType }: StatsCardProps) {
  const Icon = iconMap[iconType];
  
  if (!Icon) {
    return null;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Icon className="w-5 h-5" />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-3xl font-bold">{value}</p>
        <p className="text-muted-foreground">{subtitle}</p>
      </CardContent>
    </Card>
  );
}