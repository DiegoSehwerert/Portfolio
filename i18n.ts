import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

const locales = ["en", "es"];

console.log("getRequestConfig:");

export default getRequestConfig(async (params) => {
  // requestLocale es una Promise, hay que hacer await
  const locale = await params.requestLocale;

  if (!locale) {
    throw new Error(
      "No se detectó locale en el contexto. Verifica el middleware y la ruta."
    );
  }

  const messagesFile = await import(`./messages/${locale}.json`);
  return {
    locale,
    messages: messagesFile.default,
  };
});
