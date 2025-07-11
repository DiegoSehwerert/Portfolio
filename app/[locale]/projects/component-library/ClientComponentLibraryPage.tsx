// app/[locale]/projects/component-library/ClientComponentLibraryPage.tsx

"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import DashboardView from "@/components/component-library/dashboard-view";
import LoginView from "@/components/component-library/login-view";
import ComponentView from "@/components/component-library/component-view";

interface Props {
  components: {
    name: string;
    description: string;
    code: string;
    href: string;
  }[];
}

export default function ClientComponentLibraryPage({ components }: Props) {
  const [viewMode, setViewMode] = useState<
    "components" | "dashboard" | "login"
  >("components");

  const t = useTranslations("componentLibrary");

  const getTitle = () => {
    switch (viewMode) {
      case "dashboard":
        return t("dashboardTitle");
      case "login":
        return t("loginTitle");
      default:
        return t("componentsTitle");
    }
  };

  const getDescription = () => {
    switch (viewMode) {
      case "dashboard":
        return t("dashboardDescription");
      case "login":
        return t("loginDescription");
      default:
        return t("componentsDescription");
    }
  };

  return (
    <div className="min-h-screen text-foreground">
      <div className="w-full h-screen flex flex-col">
        <div className="shrink-0 px-4 sm:px-6 py-6 sm:py-8 border-b">
          <div className="max-w-7xl mx-auto flex flex-col gap-4 sm:gap-2 md:flex-row md:items-center md:justify-between">
            <div className="w-full md:w-auto">
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold">
                {getTitle()}
              </h1>
              <p className="text-muted-foreground text-xs sm:text-sm lg:text-base mt-1">
                {getDescription()}
              </p>
            </div>

            <div className="flex justify-center md:justify-end">
              <ToggleGroup
                type="single"
                value={viewMode}
                onValueChange={(val) =>
                  val &&
                  setViewMode(val as "components" | "dashboard" | "login")
                }
                className="w-full md:w-auto"
              >
                <ToggleGroupItem
                  value="components"
                  className="flex-1 md:flex-none md:min-w-[100px] lg:min-w-[120px] justify-center text-xs sm:text-sm"
                >
                  {t("toggleComponents")}
                </ToggleGroupItem>
                <ToggleGroupItem
                  value="dashboard"
                  className="flex-1 md:flex-none md:min-w-[100px] lg:min-w-[120px] justify-center text-xs sm:text-sm"
                >
                  {t("toggleDashboard")}
                </ToggleGroupItem>
                <ToggleGroupItem
                  value="login"
                  className="flex-1 md:flex-none md:min-w-[100px] lg:min-w-[120px] justify-center text-xs sm:text-sm"
                >
                  {t("toggleLogin")}
                </ToggleGroupItem>
              </ToggleGroup>
            </div>
          </div>
        </div>

        <div
          className="flex-1 overflow-y-auto overflow-x-hidden px-2 sm:px-4 lg:px-6 py-4 sm:py-6 lg:py-8"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          <style jsx>{`
            div::-webkit-scrollbar {
              display: none;
            }
          `}</style>

          <div className="w-full max-w-7xl mx-auto">
            {viewMode === "components" ? (
              <ComponentView components={components} />
            ) : viewMode === "dashboard" ? (
              <DashboardView />
            ) : (
              <LoginView />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
