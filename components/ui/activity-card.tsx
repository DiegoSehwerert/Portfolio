// components/ui/activity-card.tsx
import { Card } from "./card";
import { LineChart, Line, ResponsiveContainer } from "recharts";

const sampleData = [
  { day: "L", value: 120 },
  { day: "M", value: 300 },
  { day: "X", value: 250 },
  { day: "J", value: 190 },
  { day: "V", value: 220 },
  { day: "S", value: 310 },
  { day: "D", value: 270 },
];

interface ActivityCardProps {
  title: string;
  current: number;
  previous: number;
}

export function ActivityCard({ title, current, previous }: ActivityCardProps) {
  const change = current - previous;
  const percent = ((change / previous) * 100).toFixed(1);
  const positive = change >= 0;

  return (
    <Card className="p-4 space-y-4">
      <div className="space-y-1">
        <h3 className="text-sm font-medium text-muted-foreground">{title}</h3>
        <p className="text-2xl font-semibold">{current}</p>
        <p
          className={`text-sm ${
            positive ? "text-green-500" : "text-red-500"
          } font-medium`}
        >
          {positive ? "+" : ""}
          {percent}% respecto a la semana pasada
        </p>
      </div>
      <div className="h-24">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={sampleData}>
            <Line
              type="monotone"
              dataKey="value"
              stroke={positive ? "#22c55e" : "#ef4444"}
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
