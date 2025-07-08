"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  AnimatedSection,
  AnimatedIntro,
} from "@/components/about/AnimatedSection";
import { useTranslations } from "next-intl";

export default function AboutPage() {
  const t = useTranslations("about");
  const exp = useTranslations("experience");
  const stack = useTranslations("stack");
  const lang = useTranslations("languages");

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
        <h1 className="text-4xl font-bold mb-2">{t("title")}</h1>
        <p className="text-muted-foreground mb-4 max-w-prose">
          {t.rich("description", {
            strong: (chunks) => <strong>{chunks}</strong>,
          })}
        </p>
        <div className="flex gap-4">
          <a href="/Curriculum.pdf" target="_blank" rel="noopener noreferrer">
            <Button>{t("cvButton")}</Button>
          </a>
          <a href="mailto:dsehwerert@gmail.com">
            <Button variant="outline">{t("contactButton")}</Button>
          </a>
        </div>
      </AnimatedIntro>

      <Separator className="my-6" />

      <AnimatedSection delay={0}>
        <Card>
          <CardContent className="p-6 space-y-6">
            <h2 className="text-xl font-semibold text-foreground">
              {exp("title")}
            </h2>

            {["anysolution", "gladtolink"].map((key) => (
              <div key={key} className="space-y-2">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <p className="font-medium text-foreground">
                    {exp(`companies.${key}.position`)}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {exp(`companies.${key}.period`)}
                  </p>
                </div>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 pl-4">
                  {exp
                    .raw(`companies.${key}.responsibilities`)
                    .map((item: string, index: number) => (
                      <li key={index}>{item}</li>
                    ))}
                </ul>
              </div>
            ))}
          </CardContent>
        </Card>
      </AnimatedSection>

      <Separator className="my-6" />

      <AnimatedSection delay={0.1}>
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-2">{stack("title")}</h2>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li>{stack("frontend")}</li>
              <li>{stack("backend")}</li>
              <li>{stack("devops")}</li>
              <li>{stack("databases")}</li>
              <li>{stack("other")}</li>
            </ul>
          </CardContent>
        </Card>
      </AnimatedSection>

      <Separator className="my-6" />

      <AnimatedSection delay={0.2}>
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-2">{lang("title")}</h2>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li>{lang("spanish")}</li>
              <li>{lang("english")}</li>
            </ul>
          </CardContent>
        </Card>
      </AnimatedSection>
    </div>
  );
}
