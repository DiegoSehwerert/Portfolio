import { usePathname } from "next/navigation";

export function useStaticAsset(path: string) {
  const pathname = usePathname();
  const locale = pathname?.split("/")[1]; // es, en, etc.

  // Si el pathname empieza por un locale conocido, lo quitamos
  if (["es", "en"].includes(locale)) {
    return path;
  }

  return path;
}
