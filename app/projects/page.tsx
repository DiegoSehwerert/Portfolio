import { ProjectCard } from "@/components/projects/ProjectCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const projects = [
  {
    title: "CSV Editor SSR",
    description:
      "Editor de archivos CSV con comparación de datos, validaciones y renderizado en servidor con Next.js 14.",
    tech: ["Next.js", "TypeScript", "React Hook Form", "CSV", "TailwindCSS"],
    repo: "https://github.com/tuusuario/csv-editor",
    demo: "https://csv-editor.vercel.app",
  },
  {
    title: "Clon de sistema de reservas",
    description:
      "Ingeniería inversa del endpoint de reservas para generar entradas falsas y validar payloads.",
    tech: ["Node.js", "Express", "MongoDB", "Postman", "Zod"],
    repo: "https://github.com/tuusuario/reservas-fake",
    demo: "https://reservas-fake.vercel.app",
  },
];

export default function ProjectsPage() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 gap-4">
        <h1 className="text-4xl font-bold text-center sm:text-left">
          Proyectos
        </h1>
        <Button variant="outline" asChild>
          <Link href="/component-library">Ver librería de componentes</Link>
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
