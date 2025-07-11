//app/[locale]/projects/component-library/page.tsx

import { getComponentList } from "./componentList.server";
import { getLocale } from "next-intl/server";
import ClientComponentLibraryPage from "./ClientComponentLibraryPage";

export default async function ComponentLibraryPage() {
  const locale = await getLocale();
  const components = await getComponentList(locale);

  return <ClientComponentLibraryPage components={components} />;
}
