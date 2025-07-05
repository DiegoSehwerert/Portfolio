"use client";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { useState } from "react";

import componentList from "./helpers";
import DashboardView from "@/components/component-library/dashboard-view";
import LoginView from "@/components/component-library/login-view";

const rawComponents = componentList();
const components: any[] = Array.isArray(rawComponents) ? rawComponents : [];

export default function ComponentLibraryPage() {
  const [viewMode, setViewMode] = useState<
    "components" | "dashboard" | "login"
  >("components");

  return (
    <div className="flex min-h-screen text-foreground justify-center">
      <div className="flex w-full max-w-[1440px] flex-col h-screen">
        {/* Header fijo */}
        <div className="shrink-0 px-6 py-8 border-b">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold">
                {viewMode === "dashboard"
                  ? "Panel de control"
                  : viewMode === "login"
                  ? "Login"
                  : "Librería de Componentes"}
              </h1>
              <p className="text-muted-foreground">
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

        {/* Contenido scrollable con scrollbar oculta */}
        <div
          className="flex-1 overflow-y-auto px-6 py-8"
          style={{
            scrollbarWidth: "none", // Firefox
            msOverflowStyle: "none", // IE 10+
          }}
        >
          {/* Oculta scrollbar en WebKit (Chrome, Safari) */}
          <style jsx>{`
            div::-webkit-scrollbar {
              display: none;
            }
          `}</style>

          <div className="max-w-6xl mx-auto space-y-10">
            {viewMode === "components" ? (
              <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
                {components.map((comp: any) => (
                  <div key={comp.name} className="break-inside-avoid mb-6">
                    <Card id={comp.name.toLowerCase()}>
                      <CardContent className="p-4 space-y-2">
                        <div className="flex items-center justify-between">
                          <h2 className="text-lg font-semibold">{comp.name}</h2>
                          <Link
                            href={comp.href}
                            className="text-sm text-primary underline"
                          >
                            Ver código
                          </Link>
                        </div>
                        <p className="text-muted-foreground text-sm">
                          {comp.description}
                        </p>
                        <div className="pt-2">{comp.demo}</div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
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
