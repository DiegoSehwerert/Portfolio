"use client";

import { ProjectCard } from "@/components/projects/ProjectCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";

export default function ProjectsPage() {
  const t = useTranslations("projects");
  const locale = useLocale();

  const projects = t.raw("list") as {
    title: string;
    description: string;
    tech: string[];
    repo: string;
    demo: string;
  }[];

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 gap-4">
        <h1 className="text-4xl font-bold text-center sm:text-left">
          {t("title")}
        </h1>
        <Button variant="outline" asChild>
          <Link href={`/${locale}/projects/component-library`}>
            {t("viewComponents")}
          </Link>
        </Button>
      </div>

      <div className="grid gap-6">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} {...project} index={idx} />
        ))}
      </div>
    </div>
  );
}
