import { cn } from "@/lib/client/utils";
import { ReactNode } from "react";

interface DashboardCardProps {
  title: string;
  value: string;
  description?: string;
  icon?: ReactNode;
  className?: string;
  children?: ReactNode;
}

export function DashboardCard({
  title,
  value,
  description,
  icon,
  className,
  children,
}: DashboardCardProps) {
  return (
    <div
      className={cn(
        "rounded-xl border bg-card text-card-foreground p-6 shadow-sm space-y-4",
        className
      )}
    >
      <div className="flex items-start justify-between">
        <div className="space-y-1">
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <p className="text-2xl font-bold">{value}</p>
        </div>
        {icon && <div className="text-muted-foreground">{icon}</div>}
      </div>
      {description && (
        <p className="text-xs text-muted-foreground">{description}</p>
      )}
      {children}
    </div>
  );
}
