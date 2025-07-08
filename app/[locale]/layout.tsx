// app/[locale]/layout.tsx
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import ClientOnly from "@/components/ClientOnly";
import ParticlesBackground from "@/components/ParticlesBackground";
import BackButton from "@/components/ui/back-button";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";
import "../globals.css";

// export function generateStaticParams() {
//   return [{ locale: "es" }, { locale: "en" }];
// }

export default async function RootLayout(props: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const params = await props.params;

  const { locale } = params;

  const { children } = props;

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <ClientOnly>
            <ParticlesBackground />
          </ClientOnly>
          <LanguageSwitcher />
          <BackButton />
          <div>{children}</div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
