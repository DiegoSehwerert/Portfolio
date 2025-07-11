// hooks/useChartColors.ts
"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const CHART_KEYS = {
  revenue: "--chart-1",
  users: "--chart-3",
  feedback: "--chart-4",
} as const;

export function useChartColors() {
  const { resolvedTheme } = useTheme();
  const [colors, setColors] = useState<Record<keyof typeof CHART_KEYS, string>>(
    {
      revenue: "",
      users: "",
      feedback: "",
    }
  );

  useEffect(() => {
    if (typeof window === "undefined") return;

    const root = document.documentElement;

    // Asegúrate de esperar a que el DOM esté en su tema final (dark o light)
    requestAnimationFrame(() => {
      const get = (v: string) =>
        getComputedStyle(root).getPropertyValue(v).trim();

      setColors({
        revenue: get(CHART_KEYS.revenue),
        users: get(CHART_KEYS.users),
        feedback: get(CHART_KEYS.feedback),
      });
    });
  }, [resolvedTheme]);

  return colors;
}
