import { Button } from "./button";
import { Card, CardContent } from "./card";
import { cn } from "@/lib/utils";

interface SubscriptionPlanCardProps {
  plan: "free" | "starter" | "pro";
  price: string;
  features: string[];
  isCurrent?: boolean;
  onUpgrade?: () => void;
}

const planNames = {
  free: "Plan Gratuito",
  starter: "Plan Starter",
  pro: "Plan Pro",
};

export function SubscriptionPlanCard({
  plan,
  price,
  features,
  isCurrent,
  onUpgrade,
}: SubscriptionPlanCardProps) {
  return (
    <Card className={cn("w-full", isCurrent && "border-primary")}>
      <CardContent className="p-5 space-y-4">
        <div className="space-y-1">
          <h3 className="text-lg font-semibold text-foreground">
            {planNames[plan]}
          </h3>
          <p className="text-muted-foreground">{price}</p>
        </div>
        <ul className="text-sm text-muted-foreground list-disc list-inside">
          {features.map((feat, i) => (
            <li key={i}>{feat}</li>
          ))}
        </ul>
        <Button
          disabled={isCurrent}
          onClick={onUpgrade}
          variant={isCurrent ? "outline" : "default"}
          className="w-full"
        >
          {isCurrent ? "Plan actual" : "Actualizar"}
        </Button>
      </CardContent>
    </Card>
  );
}
