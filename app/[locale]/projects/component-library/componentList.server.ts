import { getDemoCode } from "@/lib/server/get-demo-code";
import { getTranslations } from "next-intl/server";

export async function getComponentList(locale: string) {
  const t = await getTranslations({ locale, namespace: "components" });
  return [
    {
      name: t("button.name"),
      description: t("button.description"),
      code: await getDemoCode("../ui/button.tsx"),
      href: "#button",
    },
    {
      name: t("card.name"),
      description: t("card.description"),
      code: await getDemoCode("../ui/card.tsx"),
      href: "#card",
    },
    {
      name: t("badge.name"),
      description: t("badge.description"),
      code: await getDemoCode("../ui/badge.tsx"),
      href: "#badge",
    },
    {
      name: t("dashboardcard.name"),
      description: t("dashboardcard.description"),
      code: await getDemoCode("../ui/dashboard-card.tsx"),
      href: "#dashboardcard",
    },
    {
      name: t("user-card.name"),
      description: t("user-card.description"),
      code: await getDemoCode("../ui/user-access-card.tsx"),
      href: "#user-card",
    },
    {
      name: t("subscriptioncard.name"),
      description: t("subscriptioncard.description"),
      code: await getDemoCode("../ui/subscription-plan-card.tsx"),
      href: "#subscriptioncard",
    },
    {
      name: t("activity-card.name"),
      description: t("activity-card.description"),
      code: await getDemoCode("../ui/activity-card.tsx"),
      href: "#activity-card",
    },
    {
      name: t("activitygoal.name"),
      description: t("activitygoal.description"),
      code: await getDemoCode("../ui/activity-goal-card.tsx"),
      href: "#activitygoal",
    },
    {
      name: t("timeline.name"),
      description: t("timeline.description"),
      code: await getDemoCode("../ui/timeline-item.tsx"),
      href: "#timeline",
    },
    {
      name: t("callout.name"),
      description: t("callout.description"),
      code: await getDemoCode("../ui/callout.tsx"),
      href: "#callout",
    },
  ];
}
