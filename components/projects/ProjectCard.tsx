"use client";

import { Card, CardContent } from "@/components/ui/card";
import { AnimatedSection } from "../about/AnimatedSection";
import Link from "next/link";

type Project = {
  title: string;
  description: string;
  tech: string[];
  repo: string;
  demo: string;
  index: number;
};

export function ProjectCard({
  title,
  description,
  tech,
  repo,
  demo,
  index,
}: Project) {
  return (
    <AnimatedSection delay={index * 0.1}>
      <Card className="shadow-xl transition-shadow duration-300">
        <CardContent className="p-6">
          <h2 className="text-2xl font-semibold mb-2">{title}</h2>
          <p className="text-muted-foreground mb-4">{description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {tech.map((t, i) => (
              <span
                key={i}
                className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-sm"
              >
                {t}
              </span>
            ))}
          </div>
          <div className="flex gap-4">
            <Link
              href={repo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Ver repositorio
            </Link>
            <Link
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Ver demo
            </Link>
          </div>
        </CardContent>
      </Card>
    </AnimatedSection>
  );
}
