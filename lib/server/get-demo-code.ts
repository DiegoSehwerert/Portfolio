// lib/server/get-demo-code.ts

"use server";

import fs from "fs/promises";
import path from "path";

export async function getDemoCode(relativePath: string) {
  const fullPath = path.join(process.cwd(), "components", relativePath);

  try {
    const code = await fs.readFile(fullPath, "utf8");
    return code;
  } catch (error) {
    console.error("❌ Error reading demo code at:", fullPath, error);
    return `// Error loading file: ${relativePath}`;
  }
}
