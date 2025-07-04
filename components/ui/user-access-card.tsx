import { Button } from "@/components/ui/button";
import Image from "next/image";

interface UserAccessCardProps {
  name: string;
  email: string;
  avatarUrl: string;
  role?: string;
  onAction?: () => void;
  actionLabel?: string;
}

export function UserAccessCard({
  name,
  email,
  avatarUrl,
  role = "Miembro",
  onAction,
  actionLabel = "Editar",
}: UserAccessCardProps) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-lg border p-4 shadow-sm bg-card text-card-foreground">
      <div className="flex items-center gap-4">
        <Image
          src={avatarUrl}
          alt={name}
          width={40}
          height={40}
          className="rounded-full"
        />
        <div className="space-y-0.5">
          <p className="text-sm font-medium leading-none">{name}</p>
          <p className="text-xs text-muted-foreground">{email}</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-xs text-muted-foreground">{role}</span>
        <Button variant="outline" size="sm" onClick={onAction}>
          {actionLabel}
        </Button>
      </div>
    </div>
  );
}
