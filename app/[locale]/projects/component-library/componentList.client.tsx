// app/component-library/componentList.client.ts
"use client";

import dynamic from "next/dynamic";

export const demoMap = {
  Button: dynamic(() => import("@/components/components-demo/button.demo"), {
    ssr: false,
  }),
  Card: dynamic(() => import("@/components/components-demo/card.demo"), {
    ssr: false,
  }),
  Badge: dynamic(() => import("@/components/components-demo/badge.demo"), {
    ssr: false,
  }),
  DashboardCard: dynamic(
    () => import("@/components/components-demo/dashboardcard.demo"),
    { ssr: false }
  ),
  "User Card": dynamic(
    () => import("@/components/components-demo/usercard.demo"),
    { ssr: false }
  ),
  "Subscription Card": dynamic(
    () => import("@/components/components-demo/subscription.demo"),
    { ssr: false }
  ),
  "Activity Card": dynamic(
    () => import("@/components/components-demo/activity.demo"),
    { ssr: false }
  ),
  "Activity Goal": dynamic(
    () => import("@/components/components-demo/activity.demo"),
    { ssr: false }
  ),
  Timeline: dynamic(
    () => import("@/components/components-demo/timeline.demo"),
    { ssr: false }
  ),
  Callout: dynamic(() => import("@/components/components-demo/callout.demo"), {
    ssr: false,
  }),
};
