import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  AnimatedSection,
  AnimatedIntro,
} from "@/components/about/AnimatedSection";

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <AnimatedIntro>
        <Image
          src="/profile-photo.webp"
          alt="Foto de perfil"
          width={120}
          height={120}
          className="rounded-full mb-4"
        />
        <h1 className="text-4xl font-bold mb-2">Sobre mí</h1>
        <p className="text-muted-foreground mb-4 max-w-prose">
          Soy desarrollador fullstack con 3 años de experiencia profesional,
          especializado en la creación de aplicaciones web modernas usando{" "}
          <strong>Next.js, Node.js, TypeScript y TailwindCSS</strong>. Me enfoco
          en escribir código limpio, escalable y orientado a producto.
        </p>
        <div className="flex gap-4">
          <a href="/Curriculum.pdf" target="_blank" rel="noopener noreferrer">
            <Button>Ver CV</Button>
          </a>
          <a href="mailto:dsehwerert@gmail.com">
            <Button variant="outline">Contactar por correo</Button>
          </a>
        </div>
      </AnimatedIntro>

      <Separator className="my-6" />

      <AnimatedSection delay={0}>
        <Card>
          <CardContent className="p-6 space-y-6">
            <h2 className="text-xl font-semibold text-foreground">
              Experiencia profesional
            </h2>

            {/* Anysolution */}
            <div className="space-y-2">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <p className="font-medium text-foreground">Anysolution</p>
                <p className="text-sm text-muted-foreground">
                  Fullstack Developer · 2024 - presente
                </p>
              </div>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 pl-4">
                <li>
                  Diseño e implementación de una arquitectura de microservicios
                  usando NestJS, MongoDB y Prisma
                </li>
                <li>
                  Automatización completa del ciclo de despliegue con CI/CD en
                  GitHub Actions y Docker Compose
                </li>
                <li>
                  Refactorización de legacy code con enfoque en escalabilidad y
                  desacoplamiento de servicios
                </li>
                <li>
                  Desarrollo de interfaces administrativas en Next.js 14 App
                  Router con TailwindCSS y Server Actions
                </li>
                <li>
                  Mentoría técnica a becarios en prácticas (revisión de código,
                  definición de tareas y pairing)
                </li>
              </ul>
            </div>

            {/* Gladtolink */}
            <div className="space-y-2">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <p className="font-medium text-foreground">Gladtolink</p>
                <p className="text-sm text-muted-foreground">
                  Frontend Developer · 2023 - 2024
                </p>
              </div>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 pl-4">
                <li>
                  Rediseño completo de la UI manteniendo la compatibilidad con
                  el backend heredado
                </li>
                <li>
                  Implementación de un sistema de diseño con TailwindCSS y Radix
                  UI
                </li>
                <li>
                  Documentación y desarrollo de componentes reutilizables con
                  Storybook
                </li>
                <li>
                  Optimización del rendimiento de carga y SSR con Next.js
                  (appDir desactivado)
                </li>
                <li>
                  Integración progresiva de TypeScript en una base de código
                  JavaScript
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </AnimatedSection>

      <Separator className="my-6" />

      <AnimatedSection delay={0.1}>
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-2">Stack principal</h2>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li>
                Frontend: React, Next.js (App Router), TailwindCSS, Radix UI /
                ShadCN
              </li>
              <li>Backend: Node.js, Express, REST APIs, Prisma, GraphQL</li>
              <li>DevOps: Docker, GitHub Actions, Vercel</li>
              <li>Base de datos: PostgreSQL, MongoDB, Redis</li>
              <li>Otros: Git, CI/CD, TypeScript, Zod</li>
            </ul>
          </CardContent>
        </Card>
      </AnimatedSection>

      <Separator className="my-6" />

      <AnimatedSection delay={0.2}>
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-2">Idiomas</h2>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li>Español: nativo</li>
              <li>
                Inglés: B2.2 (todos los recursos y fuentes que estudio son en
                inglés)
              </li>
            </ul>
          </CardContent>
        </Card>
      </AnimatedSection>
    </div>
  );
}
