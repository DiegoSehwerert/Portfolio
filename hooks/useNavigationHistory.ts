"use client";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const STORAGE_KEY = "__navigation_history__";

export function useNavigationHistory() {
  const pathname = usePathname();
  const router = useRouter();
  const [prev, setPrev] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const locale = pathname.split("/")[1] || "es";
    const pathWithoutLocale = "/" + pathname.split("/").slice(2).join("/");

    const historyRaw = sessionStorage.getItem(STORAGE_KEY);
    const history: string[] = historyRaw ? JSON.parse(historyRaw) : [];

    const last = history[history.length - 1] || null;
    const lastLocale = last?.split("/")[1] || null;
    const lastPathWithoutLocale =
      "/" + (last?.split("/").slice(2).join("/") || "");

    const isLanguageSwitch =
      last &&
      lastPathWithoutLocale === pathWithoutLocale &&
      lastLocale !== locale;

    let newHistory = [...history];

    if (isLanguageSwitch) {
      newHistory.push(`/${locale}`);
      newHistory.push(pathname);
    } else if (!last || last !== pathname) {
      // Evitar loops por rutas repetidas (como ir atrás y volver a añadir la misma)
      if (newHistory[newHistory.length - 1] !== pathname) {
        newHistory.push(pathname);
      }
    }

    if (newHistory.length > 20) {
      newHistory = newHistory.slice(-20);
    }

    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(newHistory));

    const prevValid =
      newHistory.length >= 2 ? newHistory[newHistory.length - 2] : null;

    setPrev(prevValid || null);
  }, [pathname]);

  const goBack = () => {
    if (typeof window === "undefined") return false;

    const historyRaw = sessionStorage.getItem(STORAGE_KEY);
    const history: string[] = historyRaw ? JSON.parse(historyRaw) : [];

    if (history.length < 2) return false;

    // Eliminar la ruta actual
    history.pop();

    const previous = history[history.length - 1];

    // Guardar historial actualizado
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(history));

    if (previous) {
      router.push(previous);
      return true;
    }

    return false;
  };

  return {
    previousPath: prev,
    canGoBack: !!prev,
    goBack,
  };
}
