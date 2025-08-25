import { getRequestConfig } from "next-intl/server";

// @ts-ignore
export default getRequestConfig(async (params) => {
  const locale = await params.requestLocale;

  // if (!locale) {
  //   throw new Error(
  //     "No se detectó locale en el contexto. Verifica el middleware y la ruta."
  //   );
  // }

  const messagesFile = await import(`./messages/${locale}.json`);
  return {
    locale,
    messages: messagesFile.default,
  };
});
