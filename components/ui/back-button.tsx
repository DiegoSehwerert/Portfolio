// components/ui/back-button.tsx
"use client";

import { usePathname, useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function BackButton() {
  const pathname = usePathname();
  const router = useRouter();

  const isLocaleRoot = /^\/(es|en)$/.test(pathname);

  if (isLocaleRoot) return null;

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => router.back()}
      className="fixed top-1 left-1 z-50 bg-white/90 dark:bg-zinc-900/90 backdrop-blur border border-border shadow-md hover:shadow-lg transition-shadow"
      aria-label="Volver atrás"
    >
      <ArrowLeft className="h-5 w-5 text-black dark:text-white" />
    </Button>
  );
}
