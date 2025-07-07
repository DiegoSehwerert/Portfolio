import { DashboardCard } from "@/components/ui/dashboard-card";
import { ArrowUpRight } from "lucide-react";

export default function DashboardCardDemo() {
  return (
    <DashboardCard
      title="Ingresos totales"
      value="$15,231.89"
      description="+201% que el mes pasado"
      icon={<ArrowUpRight className="h-5 w-5 text-green-500" />}
    />
  );
}
