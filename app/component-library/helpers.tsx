import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";
import { DashboardCard } from "@/components/ui/dashboard-card";
import { UserAccessCard } from "@/components/ui/user-access-card";
import { SubscriptionPlanCard } from "@/components/ui/subscription-plan-card";
import { ActivityCard } from "@/components/ui/activity-card";
import { ActivityGoalCard } from "@/components/ui/activity-goal-card";
import { TimelineItem } from "@/components/ui/timeline-item";
import { Callout } from "@/components/ui/callout";

export default function componentList() {
  const components = [
    {
      name: "Button",
      description: "Botones accesibles con variantes, tamaños y estados",
      demo: (
        <div className="flex flex-wrap gap-2">
          <Button variant="default">Default</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
        </div>
      ),
      href: "#button",
    },
    {
      name: "Card",
      description: "Tarjetas simples y reutilizables",
      demo: (
        <Card className="max-w-sm">
          <CardContent className="p-4">Contenido dentro de un Card</CardContent>
        </Card>
      ),
      href: "#card",
    },
    {
      name: "Badge",
      description: "Etiquetas para resaltar información",
      demo: (
        <div className="flex gap-2 flex-wrap">
          <Badge variant="default">Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="destructive">Destructive</Badge>
          <Badge variant="outline">Outline</Badge>
        </div>
      ),
      href: "#badge",
    },
    {
      name: "DashboardCard",
      description: "Tarjetas estadísticas con valor, descripción y acción",
      demo: (
        <DashboardCard
          title="Ingresos totales"
          value="$15,231.89"
          description="+201% que el mes pasado"
          icon={<ArrowUpRight className="h-5 w-5 text-green-500" />}
        />
      ),
      href: "#dashboardcard",
    },
    {
      name: "User Card",
      description: "Muestra información de usuario con acciones disponibles",
      demo: (
        <UserAccessCard
          name="Diego Sehwerert"
          email="dsehwerert@gmail.com"
          avatarUrl="/profile-photo.webp"
          role="Admin"
          actionLabel="Editar"
          onAction={() => console.log("Edit pressed")}
        />
      ),
      href: "#user-card",
    },
    {
      name: "Subscription Card",
      description: "Planes de suscripción con acciones de upgrade",
      demo: (
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
      ),
      href: "#subscriptioncard",
    },
    {
      name: "Activity Card",
      description: "Resumen semanal con gráfica embebida",
      demo: (
        <ActivityCard
          title="Minutos de ejercicio"
          current={350}
          previous={275}
        />
      ),
      href: "#activity-card",
    },
    {
      name: "Activity Goal",
      description: "Visualización de progreso semanal hacia un objetivo diario",
      demo: (
        <ActivityGoalCard
          title="Meta de actividad"
          value={280}
          unit="cal"
          dailyGoal={350}
          weekData={[200, 320, 400, 280, 360, 190, 300]}
        />
      ),
      href: "#activitygoal",
    },
    // En tu array de components de component-library/page.tsx
    {
      name: "Timeline",
      description: "Muestra eventos cronológicos con estilo vertical",
      demo: (
        <div className="border-l border-muted pl-2">
          <TimelineItem
            title="Empecé en Anysolution"
            description="Migración a microservicios y dashboards internos"
            date="Ene 2024"
          />
          <TimelineItem
            title="Experiencia en Gladtolink"
            description="Rediseño UI y mejoras SSR"
            date="Jul 2023"
          />
          <TimelineItem
            title="Comencé este portfolio"
            description="Componentes reutilizables y SSR completo"
            date="Jun 2025"
            isLast
          />
        </div>
      ),
      href: "#timeline",
    },
    {
      name: "Callout",
      description: "Mensajes destacados con contexto visual",
      demo: (
        <div className="space-y-3">
          <Callout
            type="info"
            title="Nota importante"
            message="Este componente es totalmente reutilizable y personalizable."
          />
          <Callout
            type="success"
            title="¡Acción completada!"
            message="Los datos fueron guardados correctamente."
          />
          <Callout
            type="warning"
            title="Precaución"
            message="Este cambio no se puede deshacer una vez aplicado."
          />
        </div>
      ),
      href: "#callout",
    },
  ];

  return components;
}
