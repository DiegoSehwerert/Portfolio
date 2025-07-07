"use client";
import { useState } from "react";
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

  return (
    <div className="flex min-h-screen text-foreground justify-center">
      <div className="flex w-full max-w-[1440px] flex-col h-screen">
        <div className="shrink-0 px-6 py-8 border-b">
          <div className="max-w-6xl mx-auto flex flex-col gap-2 md:flex-row md:items-center md:justify-between md:gap-4">
            <div className="w-full md:w-auto">
              <h1 className="text-2xl sm:text-3xl font-bold">
                {viewMode === "dashboard"
                  ? "Panel de control"
                  : viewMode === "login"
                  ? "Login"
                  : "Librería de Componentes"}
              </h1>
              <p className="text-muted-foreground text-sm sm:text-base mt-1">
                {viewMode === "dashboard"
                  ? "Vista general de posible admin panel."
                  : viewMode === "login"
                  ? "Previsualización de como sería un login hecho con mis componentes."
                  : "Colección de componentes reutilizables con diseño consistente."}
              </p>
            </div>

            <ToggleGroup
              type="single"
              value={viewMode}
              onValueChange={(val) =>
                val && setViewMode(val as "components" | "dashboard" | "login")
              }
            >
              <ToggleGroupItem
                value="components"
                className="min-w-[120px] justify-center text-sm"
              >
                Componentes
              </ToggleGroupItem>
              <ToggleGroupItem
                value="dashboard"
                className="min-w-[120px] justify-center text-sm"
              >
                Dashboard
              </ToggleGroupItem>
              <ToggleGroupItem
                value="login"
                className="min-w-[120px] justify-center text-sm"
              >
                Login
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
        </div>

        <div
          className="flex-1 overflow-y-auto px-6 py-8"
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

          <div className="">
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
