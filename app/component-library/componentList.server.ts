import { getDemoCode } from "@/lib/get-demo-code";

export async function getComponentList() {
  return [
    {
      name: "Button",
      description: "Botones accesibles con variantes, tamaños y estados",
      code: await getDemoCode("../ui/button.tsx"),
      href: "#button",
    },
    {
      name: "Card",
      description: "Tarjetas simples y reutilizables",
      code: await getDemoCode("../ui/card.tsx"),
      href: "#card",
    },
    {
      name: "Badge",
      description: "Etiquetas para resaltar información",
      code: await getDemoCode("../ui/badge.tsx"),
      href: "#badge",
    },
    {
      name: "DashboardCard",
      description: "Tarjetas estadísticas con valor, descripción y acción",
      code: await getDemoCode("../ui/dashboard-card.tsx"),
      href: "#dashboardcard",
    },
    {
      name: "User Card",
      description: "Muestra información de usuario con acciones disponibles",
      code: await getDemoCode("../ui/user-access-card.tsx"),
      href: "#user-card",
    },
    {
      name: "Subscription Card",
      description: "Planes de suscripción con acciones de upgrade",
      code: await getDemoCode("../ui/subscription-plan-card.tsx"),
      href: "#subscriptioncard",
    },
    {
      name: "Activity Card",
      description: "Resumen semanal con gráfica embebida",
      code: await getDemoCode("../ui/activity-card.tsx"),
      href: "#activity-card",
    },
    {
      name: "Activity Goal",
      description: "Visualización de progreso semanal hacia un objetivo diario",
      code: await getDemoCode("../ui/activity-goal-card.tsx"),
      href: "#activitygoal",
    },
    {
      name: "Timeline",
      description: "Muestra eventos cronológicos con estilo vertical",
      code: await getDemoCode("../ui/timeline-item.tsx"),
      href: "#timeline",
    },
    {
      name: "Callout",
      description: "Mensajes destacados con contexto visual",
      code: await getDemoCode("../ui/callout.tsx"),
      href: "#callout",
    },
  ];
}
