import { TimelineItem } from "@/components/ui/timeline-item";

export default function TimelineDemo() {
  return (
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
  );
}
