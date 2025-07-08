"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { AnimatedIntro } from "@/components/about/AnimatedSection";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Link from "next/link";
import { TypingName } from "@/components/TypingName";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("home");

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen py-12 px-4 text-center overflow-hidden">
      <AnimatedIntro>
        <Image
          src="/profile-photo.webp"
          alt="Foto de perfil"
          priority={true}
          width={120}
          height={120}
          className="rounded-full mb-4"
        />
        <h1 className="text-4xl md:text-6xl font-bold mb-2 text-foreground">
          Hola, soy <TypingName fullText={t("name")} />
        </h1>

        <p className="text-lg md:text-xl max-w-xl text-muted-foreground mb-6">
          {t("description")}
        </p>

        <div className="flex gap-4 mb-4">
          <Button asChild>
            <Link href="/projects">{t("projectButton")}</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/about">{t("aboutButton")}</Link>
          </Button>
        </div>

        <div className="flex gap-6 justify-center mt-4">
          <a
            href="https://github.com/DiegoSehwerert"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/diego-sehwerert-cobas/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="mailto:dsehwerert@gmail.com"
            className="hover:scale-110 transition-transform"
          >
            <FaEnvelope size={24} />
          </a>
        </div>
      </AnimatedIntro>
    </div>
  );
}
