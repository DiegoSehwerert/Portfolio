// app/[locale]/layout.tsx
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import ClientOnly from "@/components/ClientOnly";
import ParticlesBackground from "@/components/ParticlesBackground";
import BackButton from "@/components/ui/back-button";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";
import ThemeToggle from "@/components/ui/theme-toggle";
import { ThemeProvider } from "@/components/theme-provider";
import { Metadata } from "next";
import "../globals.css";

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const params = await props.params;
  const { locale } = params;

  const title =
    locale === "es"
      ? "Diego Sehwerert - Desarrollador Fullstack"
      : "Diego Sehwerert - Fullstack Developer";

  const description =
    locale === "es"
      ? "Desarrollador fullstack especializado en Next.js, Node.js y TypeScript. Construyo aplicaciones web modernas y escalables."
      : "Fullstack developer specialized in Next.js, Node.js and TypeScript. I build modern and scalable web applications.";

  return {
    title,
    description,
    keywords:
      locale === "es"
        ? [
            "desarrollador fullstack",
            "Next.js",
            "React",
            "TypeScript",
            "Node.js",
            "portfolio",
          ]
        : [
            "fullstack developer",
            "Next.js",
            "React",
            "TypeScript",
            "Node.js",
            "portfolio",
          ],
    authors: [{ name: "Diego Sehwerert" }],
    creator: "Diego Sehwerert",
    openGraph: {
      type: "website",
      locale: locale === "es" ? "es_ES" : "en_US",
      url: `https://diego-sehwerert.dev/${locale}`,
      title,
      description,
      siteName: "Diego Sehwerert Portfolio",
      images: [
        {
          url: "/profile-photo.webp",
          width: 800,
          height: 600,
          alt: "Diego Sehwerert",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/profile-photo.webp"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: `https://diego-sehwerert.dev/${locale}`,
      languages: {
        es: "https://diego-sehwerert.dev/es",
        en: "https://diego-sehwerert.dev/en",
      },
    },
  };
}

export default async function RootLayout(props: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const params = await props.params;
  const { locale } = params;
  const { children } = props;
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <NextIntlClientProvider messages={messages}>
            <ClientOnly>
              <ParticlesBackground />
              <ThemeToggle />
            </ClientOnly>

            <LanguageSwitcher />
            <BackButton />
            <div>{children}</div>
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
