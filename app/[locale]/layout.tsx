// app/[locale]/layout.tsx
import { notFound } from "next/navigation";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import Providers from "./providers";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import ClientOnly from "@/components/ClientOnly";
import ParticlesBackground from "@/components/ParticlesBackground";
import BackButton from "@/components/ui/back-button";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";
import "../globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export function generateStaticParams() {
//   return [{ locale: "es" }, { locale: "en" }];
// }

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}
      >
        <NextIntlClientProvider messages={messages}>
          {/* <Providers locale={locale}> */}
          {/* <ClientOnly>
            <ParticlesBackground />
          </ClientOnly>
          <LanguageSwitcher />
          <BackButton /> */}
          <div>{children}</div>
          {/* </Providers> */}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
