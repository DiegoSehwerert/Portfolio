import { ActivityCard } from "@/components/ui/activity-card";

export function ActivityCardDemo() {
  return (
    <ActivityCard title="Minutos de ejercicio" current={350} previous={275} />
  );
}

import { ActivityGoalCard } from "@/components/ui/activity-goal-card";

export default function ActivityGoalDemo() {
  return (
    <ActivityGoalCard
      title="Meta de actividad"
      value={280}
      unit="cal"
      dailyGoal={350}
      weekData={[200, 320, 400, 280, 360, 190, 300]}
    />
  );
}
