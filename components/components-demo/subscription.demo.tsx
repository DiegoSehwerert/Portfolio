import SubscriptionPlanCard from "@/components/ui/subscription-plan-card";

export default function SubscriptionCardDemo() {
  return (
    <div className="grid gap-4">
      <SubscriptionPlanCard
        plan="free"
        price="Gratis"
        features={["Acceso básico", "1 usuario", "Soporte limitado"]}
        isCurrent
      />
      <SubscriptionPlanCard
        plan="starter"
        price="9€/mes"
        features={[
          "Todo lo del plan gratuito",
          "5 usuarios",
          "Soporte prioritario",
        ]}
        onUpgrade={() => console.log("Upgrade to Starter")}
      />
    </div>
  );
}
