"use server";

import { readFile } from "fs/promises";
import path from "path";

export async function getDemoCode(fileName: string) {
  const filePath = path.join(
    process.cwd(),
    "components/components-demo",
    fileName
  );

  return await readFile(filePath, "utf-8");
}
