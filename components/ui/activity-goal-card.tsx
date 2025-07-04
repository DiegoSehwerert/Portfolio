// components/ui/activity-goal-card.tsx
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface ActivityGoalCardProps {
  title: string;
  value: number;
  unit: string;
  dailyGoal: number;
  weekData: number[];
}

export function ActivityGoalCard({
  title,
  value,
  unit,
  dailyGoal,
  weekData,
}: ActivityGoalCardProps) {
  const days = ["L", "M", "X", "J", "V", "S", "D"];

  return (
    <Card>
      <CardContent className="p-4 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">{title}</h2>
          <span className="text-muted-foreground text-sm">
            {value} {unit}
          </span>
        </div>

        <div className="grid grid-cols-7 gap-2">
          {weekData.map((val, i) => (
            <div key={i} className="flex flex-col items-center space-y-1">
              <div className="text-xs text-muted-foreground">{days[i]}</div>
              <div
                className={`h-12 w-3 rounded-full ${
                  val >= dailyGoal ? "bg-green-500" : "bg-gray-300"
                }`}
                style={{ height: `${Math.min((val / dailyGoal) * 100, 100)}%` }}
              />
            </div>
          ))}
        </div>

        <div>
          <Progress value={(value / dailyGoal) * 100} />
          <p className="text-xs text-muted-foreground mt-1">
            Objetivo diario: {dailyGoal} {unit}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
