"use client";
// app/[locale]/providers.tsx

import { NextIntlClientProvider } from "next-intl";
import { ReactNode, useEffect, useState } from "react";

type Props = {
  children: ReactNode;
  locale: string;
};

export default function Providers({ children, locale }: Props) {
  const [messages, setMessages] = useState<Record<string, string>>({});

  useEffect(() => {
    import(`@/messages/${locale}.json`)
      .then((mod) => setMessages(mod.default))
      .catch(() => setMessages({}));
  }, [locale]);

  if (!messages || Object.keys(messages).length === 0) {
    return null; // o un loading spinner si quieres
  }

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
