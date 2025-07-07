import { UserAccessCard } from "@/components/ui/user-access-card";

export default function UserCardDemo() {
  return (
    <UserAccessCard
      name="Diego Sehwerert"
      email="dsehwerert@gmail.com"
      avatarUrl="/profile-photo.webp"
      role="Admin"
      actionLabel="Editar"
      onAction={() => console.log("Edit pressed")}
    />
  );
}
