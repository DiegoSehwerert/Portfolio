import { AlertTriangle, Info, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

type CalloutType = "info" | "success" | "warning";

const iconMap = {
  info: <Info className="h-5 w-5 text-blue-500" />,
  success: <CheckCircle className="h-5 w-5 text-green-500" />,
  warning: <AlertTriangle className="h-5 w-5 text-yellow-500" />,
};

interface CalloutProps {
  type?: CalloutType;
  title: string;
  message: string;
}

export const Callout = ({ type = "info", title, message }: CalloutProps) => {
  return (
    <div
      className={cn(
        "flex items-start gap-3 rounded-md border p-4",
        type === "info" && "bg-blue-50 border-blue-200",
        type === "success" && "bg-green-50 border-green-200",
        type === "warning" && "bg-yellow-50 border-yellow-200"
      )}
    >
      <div className="pt-1">{iconMap[type]}</div>
      <div>
        <h4 className="font-medium text-sm text-foreground">{title}</h4>
        <p className="text-sm text-muted-foreground">{message}</p>
      </div>
    </div>
  );
};
