import { getComponentList } from "./componentList.server";
import ClientComponentLibraryPage from "./ClientComponentLibraryPage";

export default async function ComponentLibraryPage() {
  const components = await getComponentList();
  return <ClientComponentLibraryPage components={components} />;
}
