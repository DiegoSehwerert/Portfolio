import { Callout } from "@/components/ui/callout";

export default function CalloutDemo() {
  return (
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
  );
}
