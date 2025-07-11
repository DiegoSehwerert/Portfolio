// app/[locale]/layout.tsx
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import ClientOnly from "@/components/ClientOnly";
import ParticlesBackground from "@/components/ParticlesBackground";
import BackButton from "@/components/ui/back-button";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";
import ThemeToggle from "@/components/ui/theme-toggle";
import { ThemeProvider } from "@/components/theme-provider";
import "../globals.css";

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
