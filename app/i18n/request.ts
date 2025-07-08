// app/i18n/request.ts
import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";

const locales = ["es", "en"];

export default getRequestConfig(async ({ locale }) => {
  if (!locale || !locales.includes(locale)) notFound();

  const messagesFile = await import(`../../messages/${locale}.json`);
  return {
    locale,
    messages: messagesFile.default,
  };
});
