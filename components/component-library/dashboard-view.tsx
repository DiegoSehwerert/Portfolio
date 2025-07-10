// app/component-library/DashboardView.tsx
"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";
import { DashboardCard } from "@/components/ui/dashboard-card";
import { UserAccessCard } from "@/components/ui/user-access-card";
import { TimelineItem } from "@/components/ui/timeline-item";
import Link from "next/link";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid } from "recharts";
import usersData from "@/data/users.json";
import { useTranslations } from "next-intl";

export default function DashboardView() {
  const [showAllUsers, setShowAllUsers] = useState(false);
  const t = useTranslations("dashboard");
  return (
    <div className="w-full">
      <Card className="w-full overflow-hidden">
        <div className="flex flex-col w-full lg:flex-row">
          <aside className="w-full lg:w-56 shrink-0 lg:border-r border-b lg:border-b-0 px-3 lg:px-4 py-4 lg:py-6">
            <h2 className="text-base lg:text-lg font-bold mb-4 lg:mb-6">
              {t("menu")}
            </h2>
            <nav className="flex lg:flex-col lg:space-y-3 lg:space-x-0 space-x-3 overflow-x-auto lg:overflow-x-visible text-xs lg:text-sm font-medium text-muted-foreground pb-2 lg:pb-0">
              <Link
                href="#"
                className="flex items-center gap-1 lg:gap-2 hover:text-foreground transition whitespace-nowrap"
              >
                <span className="text-sm">🏠</span> <span>{t("home")}</span>
              </Link>
              <Link
                href="#"
                className="flex items-center gap-1 lg:gap-2 hover:text-foreground transition whitespace-nowrap"
              >
                <span className="text-sm">📊</span> <span>{t("stats")}</span>
              </Link>
              <Link
                href="#"
                className="flex items-center gap-1 lg:gap-2 hover:text-foreground transition whitespace-nowrap"
              >
                <span className="text-sm">👥</span> <span>{t("users")}</span>
              </Link>
              <Link
                href="#"
                className="flex items-center gap-1 lg:gap-2 hover:text-foreground transition whitespace-nowrap"
              >
                <span className="text-sm">⚙️</span> <span>{t("config")}</span>
              </Link>
            </nav>
          </aside>

          <CardContent className="p-3 lg:p-6 flex-1 w-full min-w-0">
            {" "}
            <div className="w-full space-y-4 lg:space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-6 w-full">
                <DashboardCard
                  title={t("totalRevenue")}
                  value="15.2K €"
                  description="+201%"
                  icon={
                    <ArrowUpRight className="h-4 w-4 lg:h-5 lg:w-5 text-green-500" />
                  }
                />
                <DashboardCard
                  title={t("activeUsers")}
                  value="1.243"
                  description="+52"
                  icon={
                    <ArrowUpRight className="h-4 w-4 lg:h-5 lg:w-5 text-blue-500" />
                  }
                />
                <DashboardCard
                  title={t("feedback")}
                  value="98%"
                  description={t("high")}
                  icon={
                    <ArrowUpRight className="h-4 w-4 lg:h-5 lg:w-5 text-yellow-500" />
                  }
                />
              </div>
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 lg:gap-6 w-full">
                <section className="space-y-3 lg:space-y-4 w-full min-w-0">
                  <h3 className="text-base lg:text-lg font-semibold">
                    {t("usersSection")}
                  </h3>
                  <div className="max-h-[200px] sm:max-h-[250px] lg:max-h-[350px] overflow-y-auto overflow-x-hidden space-y-2 lg:space-y-3 pr-1 lg:pr-2 w-full">
                    {(showAllUsers ? usersData : usersData.slice(0, 8)).map(
                      (user) => (
                        <UserAccessCard
                          key={user.id}
                          name={user.name}
                          email={user.email}
                          avatarUrl={user.avatarUrl}
                          role={user.role}
                          actionLabel={t("editButton")}
                          onAction={() =>
                            console.log(`Edit pressed for ${user.name}`)
                          }
                        />
                      )
                    )}
                    {!showAllUsers && usersData.length > 8 && (
                      <button
                        onClick={() => setShowAllUsers(true)}
                        className="w-full text-xs text-muted-foreground hover:text-foreground transition-colors text-center py-2 hover:bg-muted/50 rounded-md"
                      >
                        +{usersData.length - 8} {t("showMoreUsers")}
                      </button>
                    )}
                    {showAllUsers && (
                      <button
                        onClick={() => setShowAllUsers(false)}
                        className="w-full text-xs text-muted-foreground hover:text-foreground transition-colors text-center py-2 hover:bg-muted/50 rounded-md"
                      >
                        {t("showLessUsers")}
                      </button>
                    )}
                  </div>
                </section>

                <section className="space-y-3 lg:space-y-4 w-full min-w-0">
                  <h3 className="text-base lg:text-lg font-semibold">
                    {t("weeklyProgress")}
                  </h3>
                  <Card className="w-full">
                    <CardContent className="p-2 lg:p-4 w-full">
                      <ChartContainer
                        config={{
                          revenue: {
                            label: t("revenue"),
                            color: "hsl(var(--chart-1))",
                          },
                          users: {
                            label: t("users"),
                            color: "hsl(var(--chart-2))",
                          },
                        }}
                        className="h-[180px] sm:h-[220px] lg:h-[280px] w-full"
                      >
                        <BarChart
                          data={[
                            { day: "L", revenue: 6000, users: 120 },
                            { day: "M", revenue: 4500, users: 98 },
                            { day: "X", revenue: 7000, users: 145 },
                            { day: "J", revenue: 3000, users: 78 },
                            { day: "V", revenue: 8000, users: 167 },
                            { day: "S", revenue: 4000, users: 89 },
                            { day: "D", revenue: 5000, users: 112 },
                          ]}
                          margin={{ top: 10, right: 10, left: 5, bottom: 5 }}
                          width={undefined}
                          height={undefined}
                        >
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="day" fontSize={10} />
                          <YAxis fontSize={10} width={30} />
                          <ChartTooltip content={<ChartTooltipContent />} />
                          <Bar dataKey="revenue" fill="var(--color-revenue)" />
                          <Bar dataKey="users" fill="var(--color-users)" />
                        </BarChart>
                      </ChartContainer>
                    </CardContent>
                  </Card>
                </section>
              </div>{" "}
              <section className="space-y-3 lg:space-y-4 w-full">
                <h3 className="text-base lg:text-lg font-semibold">
                  {t("timeline")}
                </h3>
                <Card className="w-full">
                  <CardContent className="p-3 lg:p-4 w-full">
                    <div className="border-l border-muted pl-3 lg:pl-4 space-y-3 w-full">
                      <TimelineItem
                        title="Anysolution"
                        description="Microservicios"
                        date="2024"
                      />
                      <TimelineItem
                        title="Gladtolink"
                        description="UI/SSR"
                        date="2023"
                      />
                      <TimelineItem
                        title="Portfolio"
                        description="Componentes"
                        date="2025"
                        isLast
                      />
                    </div>
                  </CardContent>
                </Card>
              </section>
              <section className="space-y-3 lg:space-y-4 w-full">
                <h3 className="text-base lg:text-lg font-semibold">
                  {t("transactions")}
                </h3>
                <div className="w-full overflow-x-auto border rounded-lg">
                  <table className="w-full text-xs text-left min-w-[350px]">
                    <thead className="bg-muted text-muted-foreground">
                      <tr>
                        <th className="px-2 py-1.5 w-16">{t("date")}</th>
                        <th className="px-2 py-1.5 min-w-0">{t("user")}</th>
                        <th className="px-2 py-1.5 w-16">{t("status")}</th>
                        <th className="px-2 py-1.5 w-12 text-right">
                          {t("amount")}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t">
                        <td className="px-2 py-1.5">07/01</td>
                        <td className="px-2 py-1.5 truncate max-w-0">
                          dsehwerert@...
                        </td>
                        <td className="px-2 py-1.5">
                          <span className="inline-flex items-center px-1.5 py-0.5 rounded text-xs bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                            ✓
                          </span>
                        </td>
                        <td className="px-2 py-1.5 font-semibold text-right">
                          120
                        </td>
                      </tr>
                      <tr className="border-t">
                        <td className="px-2 py-1.5">07/02</td>
                        <td className="px-2 py-1.5 truncate max-w-0">
                          cliente@...
                        </td>
                        <td className="px-2 py-1.5">
                          <span className="inline-flex items-center px-1.5 py-0.5 rounded text-xs bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">
                            ⏳
                          </span>
                        </td>
                        <td className="px-2 py-1.5 font-semibold text-right">
                          89
                        </td>
                      </tr>
                      <tr className="border-t">
                        <td className="px-2 py-1.5">07/03</td>
                        <td className="px-2 py-1.5 truncate max-w-0">
                          nuevo@...
                        </td>
                        <td className="px-2 py-1.5">
                          <span className="inline-flex items-center px-1.5 py-0.5 rounded text-xs bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200">
                            ✗
                          </span>
                        </td>
                        <td className="px-2 py-1.5 font-semibold text-right">
                          45
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>
            </div>
          </CardContent>
        </div>
      </Card>
    </div>
  );
}
