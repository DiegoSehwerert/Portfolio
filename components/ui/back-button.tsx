"use client";

import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { useNavigationHistory } from "@/hooks/useNavigationHistory";

export default function BackButton() {
  const pathname = usePathname();
  const { canGoBack, goBack } = useNavigationHistory();

  const isLocaleRoot = /^\/(es|en)$/.test(pathname);
  if (isLocaleRoot || !canGoBack) return null;

  const handleGoBack = () => {
    const success = goBack();
    if (!success) {
      console.warn("No se pudo volver atrás");
    }
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={handleGoBack}
      className="fixed top-4 left-4 z-50 bg-white/90 dark:bg-zinc-900/90 backdrop-blur border border-border shadow-md hover:shadow-lg transition-shadow"
      aria-label="Volver atrás"
    >
      <ArrowLeft className="h-5 w-5 text-black dark:text-white" />
    </Button>
  );
}
