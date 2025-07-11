import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

export async function getDemoCode(relativePath: string) {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  const fullPath = path.join(__dirname, "..", "..", "components", relativePath);

  try {
    const code = await fs.readFile(fullPath, "utf8");
    return code;
  } catch (error) {
    console.error("Error reading demo code at:", fullPath, error);
    return `// Error loading file: ${relativePath}`;
  }
}
