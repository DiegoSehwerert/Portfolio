// app/component-library/page.tsx
"use client";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Card, CardContent } from "@/components/ui/card";
import { DashboardCard } from "@/components/ui/dashboard-card";
import { ArrowUpRight } from "lucide-react";
import { UserAccessCard } from "@/components/ui/user-access-card";
import { ActivityGoalCard } from "@/components/ui/activity-goal-card";
import { TimelineItem } from "@/components/ui/timeline-item";
import componentList from "./helpers"; // Import the components list

import Link from "next/link";

import { useState } from "react";

const rawComponents = componentList();
const components: any[] = Array.isArray(rawComponents) ? rawComponents : [];

export default function ComponentLibraryPage() {
  const [viewMode, setViewMode] = useState<"components" | "dashboard">(
    "components"
  );

  return (
    <div className="flex min-h-screen text-foreground justify-center">
      <div className="flex w-full max-w-[1440px]">
        {/* Main Content */}
        <main className="flex-1 px-6 py-8">
          <div className="max-w-6xl mx-auto space-y-10">
            {/* Header */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <h1 className="text-3xl font-bold">
                  {viewMode === "dashboard"
                    ? "Panel de control"
                    : "Librería de Componentes"}
                </h1>
                <p className="text-muted-foreground">
                  {viewMode === "dashboard"
                    ? "Vista general de posible admin panel."
                    : "Colección de componentes reutilizables con diseño consistente."}
                </p>
              </div>

              <ToggleGroup
                type="single"
                value={viewMode}
                onValueChange={(val) =>
                  val && setViewMode(val as "components" | "dashboard")
                }
              >
                <ToggleGroupItem value="components">
                  Componentes
                </ToggleGroupItem>
                <ToggleGroupItem value="dashboard">Dashboard</ToggleGroupItem>
              </ToggleGroup>
            </div>

            {/* Content */}
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
            ) : (
              <Card>
                <div className="flex flex-col md:flex-row">
                  <aside className="w-full md:w-56 shrink-0 border-r flex-col px-4 py-6">
                    <h2 className="text-lg font-bold mb-6">Menú</h2>
                    <nav className="space-y-3 text-sm font-medium text-muted-foreground">
                      <Link
                        href="#"
                        className="flex items-center gap-2 hover:text-foreground transition"
                      >
                        <span>🏠</span> <span>Inicio</span>
                      </Link>
                      <Link
                        href="#"
                        className="flex items-center gap-2 hover:text-foreground transition"
                      >
                        <span>📊</span> <span>Estadísticas</span>
                      </Link>
                      <Link
                        href="#"
                        className="flex items-center gap-2 hover:text-foreground transition"
                      >
                        <span>👥</span> <span>Usuarios</span>
                      </Link>
                      <Link
                        href="#"
                        className="flex items-center gap-2 hover:text-foreground transition"
                      >
                        <span>⚙️</span> <span>Ajustes</span>
                      </Link>
                    </nav>
                  </aside>
                  <CardContent>
                    <div className="space-y-10">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <DashboardCard
                          title="Ingresos totales"
                          value="15.231,89 €"
                          description="+201% que el mes pasado"
                          icon={
                            <ArrowUpRight className="h-5 w-5 text-green-500" />
                          }
                        />
                        <DashboardCard
                          title="Usuarios activos"
                          value="1.243"
                          description="+52 esta semana"
                          icon={
                            <ArrowUpRight className="h-5 w-5 text-blue-500" />
                          }
                        />
                        <DashboardCard
                          title="Feedback positivo"
                          value="98%"
                          description="Alta satisfacción"
                          icon={
                            <ArrowUpRight className="h-5 w-5 text-yellow-500" />
                          }
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <section className="space-y-6">
                          <h3 className="text-lg font-semibold">
                            Información de usuario
                          </h3>
                          <UserAccessCard
                            name="Diego Sehwerert"
                            email="dsehwerert@gmail.com"
                            avatarUrl="/profile-photo.webp"
                            role="Admin"
                            actionLabel="Editar"
                            onAction={() => console.log("Edit pressed")}
                          />
                          <UserAccessCard
                            name="Adam Taylor"
                            email="ataylor@gmail.com"
                            avatarUrl="/ramdom-user.webp"
                            role="User"
                            actionLabel="Editar"
                            onAction={() => console.log("Edit pressed")}
                          />
                        </section>

                        <section className="space-y-2">
                          <h3 className="text-lg font-semibold">
                            Progreso semanal
                          </h3>
                          <ActivityGoalCard
                            title="Meta semanal"
                            value={280}
                            unit="cal"
                            dailyGoal={350}
                            weekData={[200, 320, 400, 280, 360, 190, 300]}
                          />
                        </section>
                      </div>

                      <section className="space-y-2">
                        <h3 className="text-lg font-semibold">
                          Historial de eventos
                        </h3>
                        <Card>
                          <CardContent className="p-6">
                            <div className="border-l border-muted pl-2 space-y-2">
                              <TimelineItem
                                title="Empecé en Anysolution"
                                description="Migración a microservicios y dashboards internos"
                                date="Ene 2024"
                              />
                              <TimelineItem
                                title="Experiencia en Gladtolink"
                                description="Rediseño UI y mejoras SSR"
                                date="Jul 2023"
                              />
                              <TimelineItem
                                title="Comencé este portfolio"
                                description="Componentes reutilizables y SSR completo"
                                date="Jun 2025"
                                isLast
                              />
                            </div>
                          </CardContent>
                        </Card>
                      </section>

                      <section className="space-y-2">
                        <h3 className="text-lg font-semibold">
                          Últimas transacciones
                        </h3>
                        <div className="overflow-auto border rounded-lg">
                          <table className="w-full text-sm text-left">
                            <thead className="bg-muted text-muted-foreground">
                              <tr>
                                <th className="px-4 py-2">Fecha</th>
                                <th className="px-4 py-2">Usuario</th>
                                <th className="px-4 py-2">Estado</th>
                                <th className="px-4 py-2">Monto</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="border-t">
                                <td className="px-4 py-2">2025-07-01</td>
                                <td className="px-4 py-2">
                                  dsehwerert@gmail.com
                                </td>
                                <td className="px-4 py-2">Completado</td>
                                <td className="px-4 py-2">€120.00</td>
                              </tr>
                              <tr className="border-t">
                                <td className="px-4 py-2">2025-07-02</td>
                                <td className="px-4 py-2">
                                  cliente@empresa.com
                                </td>
                                <td className="px-4 py-2">Pendiente</td>
                                <td className="px-4 py-2">€89.99</td>
                              </tr>
                              <tr className="border-t">
                                <td className="px-4 py-2">2025-07-03</td>
                                <td className="px-4 py-2">nuevo@correo.com</td>
                                <td className="px-4 py-2">Fallido</td>
                                <td className="px-4 py-2">€45.50</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </section>
                    </div>
                  </CardContent>
                </div>
              </Card>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
